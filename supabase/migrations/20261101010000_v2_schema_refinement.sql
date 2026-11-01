-- =============================================================================
-- TypingCode V2.1 — Schema Refinement, Attendance/Streak, Section Survey,
--                   Speed Coding, Username Login & Avatars Storage Migration
-- =============================================================================
-- 사용법:
--   1. Supabase Dashboard (https://supabase.com/dashboard) -> 프로젝트 선택
--   2. 좌측 메뉴 [SQL Editor] -> [New query] 클릭
--   3. 본 파일 전체 내용을 붙여넣고 우측 하단 [Run] 클릭
--
-- 핵심 변경점:
--   - auth.users (기존 V1 회원 계정 및 소셜 로그인) 100% 보존
--   - 일반 학습 타수/문제번호 기록(user_level_progress) 폐기 -> 완료 레벨 전용(user_cleared_levels) 전환
--   - 출석/연속 스트릭(user_attendance), 섹션 종료 설문(section_feedbacks), 스피드 코딩(user_speed_records) 신설
--   - 수동 가입 로그인 ID(profiles.username) 및 ID->이메일 안전 조회 함수 추가
--   - 내장 프로필 아이콘(avatar_preset) + 커스텀 압축 이미지 업로드용 Storage 버킷(avatars) 및 RLS 구성
-- =============================================================================

begin;

-- -----------------------------------------------------------------------------
-- 1. public.profiles 스키마 확장 및 레거시 학습 타수 컬럼 정리
-- -----------------------------------------------------------------------------
drop index if exists public.profiles_leaderboard_idx;

alter table public.profiles
  add column if not exists username text,
  add column if not exists avatar_preset text not null default 'fox',
  add column if not exists current_streak integer not null default 0,
  add column if not exists longest_streak integer not null default 0,
  add column if not exists total_attendance_days integer not null default 0,
  add column if not exists last_attended_date date,
  add column if not exists activity_score integer not null default 0,
  add column if not exists best_typing_cpm integer not null default 0,
  add column if not exists best_typing_accuracy numeric(5,2) not null default 0.00;

alter table public.profiles
  drop column if exists avatar_emoji,
  drop column if exists best_cpm,
  drop column if exists avg_accuracy;

-- 제약 조건 재설정 (멱등성 보장)
alter table public.profiles
  drop constraint if exists profiles_username_format_chk,
  drop constraint if exists profiles_avatar_preset_chk,
  drop constraint if exists profiles_streak_nonneg_chk,
  drop constraint if exists profiles_typing_bounds_chk;

alter table public.profiles
  add constraint profiles_username_format_chk
    check (username is null or username ~ '^[a-z0-9_]{4,20}$'),
  add constraint profiles_avatar_preset_chk
    check (char_length(trim(avatar_preset)) between 1 and 24),
  add constraint profiles_streak_nonneg_chk
    check (
      current_streak >= 0
      and longest_streak >= 0
      and total_attendance_days >= 0
      and activity_score >= 0
    ),
  add constraint profiles_typing_bounds_chk
    check (
      best_typing_cpm >= 0 and best_typing_cpm <= 3000
      and best_typing_accuracy >= 0 and best_typing_accuracy <= 100
    );

-- 대소문자 무시 로그인 ID 고유 인덱스 (소셜/기존 회원의 NULL은 다수 허용)
create unique index if not exists profiles_username_lower_uidx
  on public.profiles (lower(username))
  where username is not null;

-- 리더보드 정렬 최적화 인덱스 (1: 종합 학습 점수, 2: 스피드 코딩 타수)
create index if not exists profiles_activity_leaderboard_idx
  on public.profiles (activity_score desc, cleared_levels_count desc, longest_streak desc);

create index if not exists profiles_speed_leaderboard_idx
  on public.profiles (best_typing_cpm desc, best_typing_accuracy desc);

-- 로그인 ID 정규화 및 최초 설정 후 변경 차단 트리거
create or replace function public.enforce_profile_constraints()
returns trigger
language plpgsql
security invoker
set search_path = ''
as $$
begin
  if new.username is not null then
    new.username := nullif(lower(trim(new.username)), '');
  end if;

  if tg_op = 'UPDATE' then
    if old.username is not null and new.username is distinct from old.username then
      raise exception 'USERNAME_IMMUTABLE: 로그인 ID는 한 번 설정하면 변경할 수 없습니다.';
    end if;
    new.updated_at := now();
  end if;

  return new;
end;
$$;

drop trigger if exists set_profiles_updated_at on public.profiles;
drop trigger if exists enforce_profiles_constraints_trg on public.profiles;

create trigger enforce_profiles_constraints_trg
  before insert or update on public.profiles
  for each row execute function public.enforce_profile_constraints();

-- -----------------------------------------------------------------------------
-- 2. 신규 테이블 생성 및 구형 user_level_progress 정리
-- -----------------------------------------------------------------------------

-- 2-1) 언어/트랙별 완료 레벨 기록 (문제 번호·타수·하트 저장 안 함)
create table if not exists public.user_cleared_levels (
  user_id uuid not null references public.profiles(id) on delete cascade,
  track_id text not null check (char_length(track_id) between 1 and 40),
  level_number integer not null check (level_number >= 1 and level_number <= 500),
  cleared_at timestamptz not null default now(),
  primary key (user_id, track_id, level_number)
);

-- 기존 user_level_progress에 완료(is_cleared = true) 데이터가 있었다면 안전 이관 후 테이블 제거
do $$
begin
  if to_regclass('public.user_level_progress') is not null then
    insert into public.user_cleared_levels (user_id, track_id, level_number, cleared_at)
    select user_id, track_id, level_number, coalesce(updated_at, now())
    from public.user_level_progress
    where is_cleared = true
    on conflict (user_id, track_id, level_number) do nothing;

    drop table public.user_level_progress cascade;
  end if;
end $$;

-- 2-2) 일일 출석 및 연속 스트릭 기록 (한국 시간 KST 기준)
create table if not exists public.user_attendance (
  user_id uuid not null references public.profiles(id) on delete cascade,
  attended_date date not null default ((now() at time zone 'Asia/Seoul')::date),
  created_at timestamptz not null default now(),
  primary key (user_id, attended_date)
);

-- 2-3) 스피드 코딩(/speed-coding) 예제별 최고 타수·정확도 기록
create table if not exists public.user_speed_records (
  user_id uuid not null references public.profiles(id) on delete cascade,
  snippet_id text not null check (char_length(snippet_id) between 1 and 60),
  language text not null check (char_length(language) between 1 and 30),
  best_cpm integer not null check (best_cpm >= 0 and best_cpm <= 3000),
  best_accuracy numeric(5,2) not null check (best_accuracy >= 0 and best_accuracy <= 100),
  updated_at timestamptz not null default now(),
  primary key (user_id, snippet_id)
);

drop trigger if exists set_user_speed_records_updated_at on public.user_speed_records;
create trigger set_user_speed_records_updated_at
  before update on public.user_speed_records
  for each row execute function public.set_updated_at();

-- 2-4) 섹션 완료 마이크로 설문 피드백
create table if not exists public.section_feedbacks (
  user_id uuid not null references public.profiles(id) on delete cascade,
  track_id text not null check (char_length(track_id) between 1 and 40),
  section_number integer not null check (section_number >= 1 and section_number <= 100),
  rating smallint not null check (rating between 1 and 5),
  difficulty text not null check (difficulty in ('easy', 'just_right', 'hard')),
  tags text[] not null default '{}',
  comment text check (comment is null or char_length(comment) <= 500),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  primary key (user_id, track_id, section_number)
);

drop trigger if exists set_section_feedbacks_updated_at on public.section_feedbacks;
create trigger set_section_feedbacks_updated_at
  before update on public.section_feedbacks
  for each row execute function public.set_updated_at();

-- -----------------------------------------------------------------------------
-- 3. 회원가입 트리거, 로그인 ID 조회 함수 및 프로필 통계 자동 집계 트리거
-- -----------------------------------------------------------------------------

-- 3-1) 신규 회원가입 시 username / display_name / avatar_preset 자동 반영
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  derived_name text;
  derived_avatar text;
  derived_preset text;
  candidate_username text;
begin
  derived_name := left(
    coalesce(
      nullif(trim(new.raw_user_meta_data->>'name'), ''),
      nullif(trim(new.raw_user_meta_data->>'full_name'), ''),
      nullif(trim(new.raw_user_meta_data->>'user_name'), ''),
      nullif(split_part(coalesce(new.email, ''), '@', 1), ''),
      'Coder'
    ),
    40
  );

  derived_avatar := nullif(trim(new.raw_user_meta_data->>'avatar_url'), '');
  derived_preset := coalesce(nullif(trim(new.raw_user_meta_data->>'avatar_preset'), ''), 'fox');

  -- 수동 이메일 가입 시 전달한 login_id(또는 username) 메타데이터 검증
  candidate_username := lower(trim(coalesce(
    new.raw_user_meta_data->>'login_id',
    new.raw_user_meta_data->>'username',
    ''
  )));

  if candidate_username !~ '^[a-z0-9_]{4,20}$' then
    candidate_username := null;
  elsif exists (
    select 1 from public.profiles p where lower(p.username) = candidate_username
  ) then
    candidate_username := null;
  end if;

  insert into public.profiles (id, username, display_name, avatar_preset, avatar_url)
  values (new.id, candidate_username, derived_name, derived_preset, derived_avatar)
  on conflict (id) do update
    set username = coalesce(public.profiles.username, excluded.username),
        avatar_url = coalesce(public.profiles.avatar_url, excluded.avatar_url);

  return new;
end;
$$;

revoke execute on function public.handle_new_user() from public, anon, authenticated;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- 3-2) 로그인 ID 사용 가능 여부 확인 (SECURITY INVOKER)
create or replace function public.check_username_available(p_username text)
returns boolean
language plpgsql
security invoker
set search_path = ''
as $$
declare
  v_clean text;
begin
  v_clean := lower(trim(coalesce(p_username, '')));
  if v_clean !~ '^[a-z0-9_]{4,20}$' then
    return false;
  end if;

  return not exists (
    select 1
    from public.profiles p
    where lower(p.username) = v_clean
  );
end;
$$;

grant execute on function public.check_username_available(text) to anon, authenticated;

-- 3-3) 서버 로그인 라우트(/api/auth/login)용 username -> email 변환 함수
create or replace function public.resolve_email_by_username(p_username text)
returns text
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_clean text;
  v_email text;
begin
  v_clean := lower(trim(coalesce(p_username, '')));
  if v_clean !~ '^[a-z0-9_]{4,20}$' then
    return null;
  end if;

  select u.email
  into v_email
  from public.profiles p
  join auth.users u on u.id = p.id
  where lower(p.username) = v_clean
  limit 1;

  return v_email;
end;
$$;

revoke execute on function public.resolve_email_by_username(text) from public;
grant execute on function public.resolve_email_by_username(text) to anon, authenticated;

-- 3-4) 완료 레벨 · 문제풀이 · 출석 스트릭 · 스피드 코딩 통합 프로필 통계 자동 갱신
create or replace function public.sync_profile_stats()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  target_user_id uuid;
  v_cleared integer := 0;
  v_solved integer := 0;
  v_total_days integer := 0;
  v_current_streak integer := 0;
  v_longest_streak integer := 0;
  v_last_date date := null;
  v_best_cpm integer := 0;
  v_best_acc numeric(5,2) := 0.00;
  v_top_track text := null;
  v_lang_label text := null;
  v_today_kst date := (now() at time zone 'Asia/Seoul')::date;
begin
  target_user_id := coalesce(new.user_id, old.user_id);
  if target_user_id is null then
    return coalesce(new, old);
  end if;

  -- 1) 완료 레벨 수
  select count(*)
  into v_cleared
  from public.user_cleared_levels
  where user_id = target_user_id;

  -- 2) 해결한 문제 수
  select count(*)
  into v_solved
  from public.user_problem_solves
  where user_id = target_user_id;

  -- 3) 출석 일수 & 연속 스트릭 계산 (연속 날짜 그룹화)
  with grouped as (
    select
      attended_date,
      attended_date - (row_number() over (order by attended_date))::integer as grp
    from public.user_attendance
    where user_id = target_user_id
  ),
  streaks as (
    select
      count(*)::integer as run_len,
      max(attended_date) as end_date
    from grouped
    group by grp
  )
  select
    coalesce((select sum(run_len)::integer from streaks), 0),
    coalesce((select max(run_len)::integer from streaks), 0),
    (select max(end_date) from streaks),
    coalesce(
      (
        select s.run_len
        from streaks s
        where s.end_date >= (v_today_kst - 1)
        order by s.end_date desc
        limit 1
      ),
      0
    )
  into v_total_days, v_longest_streak, v_last_date, v_current_streak;

  -- 4) 스피드 코딩 최고 타수 & 정확도
  select
    coalesce(r.best_cpm, 0),
    coalesce(r.best_accuracy, 0.00)
  into v_best_cpm, v_best_acc
  from public.user_speed_records r
  where r.user_id = target_user_id
  order by r.best_cpm desc, r.best_accuracy desc
  limit 1;

  v_best_cpm := coalesce(v_best_cpm, 0);
  v_best_acc := coalesce(v_best_acc, 0.00);

  -- 5) 가장 많이 클리어한 트랙 기반 주력 언어 자동 보정
  select track_id
  into v_top_track
  from public.user_cleared_levels
  where user_id = target_user_id
  group by track_id
  order by count(*) desc
  limit 1;

  v_lang_label := case
    when v_top_track in ('python', 'python_basic', 'py-basic', 'py-advanced', 'py-ds', 'py-oop') then 'Python'
    when v_top_track in ('c', 'c-basic', 'c-pointer') then 'C언어'
    when v_top_track in ('cpp', 'cpp-basic') then 'C++'
    when v_top_track in ('web', 'web-html', 'web-js', 'js', 'javascript') then 'Web (JS)'
    when v_top_track in ('java', 'java-basic') then 'Java'
    when v_top_track in ('go', 'go-basic') then 'Go'
    when v_top_track in ('rust', 'rust-basic') then 'Rust'
    when v_top_track in ('sql', 'sql-basic') then 'SQL'
    else null
  end;

  update public.profiles
  set
    cleared_levels_count = coalesce(v_cleared, 0),
    solved_problems_count = coalesce(v_solved, 0),
    total_attendance_days = coalesce(v_total_days, 0),
    longest_streak = coalesce(v_longest_streak, 0),
    current_streak = coalesce(v_current_streak, 0),
    last_attended_date = v_last_date,
    best_typing_cpm = v_best_cpm,
    best_typing_accuracy = v_best_acc,
    activity_score = (coalesce(v_cleared, 0) * 100)
                   + (coalesce(v_solved, 0) * 150)
                   + (coalesce(v_total_days, 0) * 30)
                   + (coalesce(v_longest_streak, 0) * 50),
    primary_language = coalesce(v_lang_label, primary_language)
  where id = target_user_id;

  return coalesce(new, old);
end;
$$;

revoke execute on function public.sync_profile_stats() from public, anon, authenticated;

drop trigger if exists sync_profile_on_cleared_levels on public.user_cleared_levels;
create trigger sync_profile_on_cleared_levels
  after insert or update or delete on public.user_cleared_levels
  for each row execute function public.sync_profile_stats();

drop trigger if exists sync_profile_on_problem_solve on public.user_problem_solves;
create trigger sync_profile_on_problem_solve
  after insert or update or delete on public.user_problem_solves
  for each row execute function public.sync_profile_stats();

drop trigger if exists sync_profile_on_attendance on public.user_attendance;
create trigger sync_profile_on_attendance
  after insert or update or delete on public.user_attendance
  for each row execute function public.sync_profile_stats();

drop trigger if exists sync_profile_on_speed_record on public.user_speed_records;
create trigger sync_profile_on_speed_record
  after insert or update or delete on public.user_speed_records
  for each row execute function public.sync_profile_stats();

-- -----------------------------------------------------------------------------
-- 4. Data API 권한 및 RLS(Row Level Security) 정책
-- -----------------------------------------------------------------------------
grant usage on schema public to anon, authenticated;

-- profiles: 조회는 공개(리더보드), 수정은 본인 프로필의 허용된 5개 컬럼만 허용 (점수/스트릭 조작 원천 차단)
revoke update on public.profiles from authenticated;
grant select on public.profiles to anon, authenticated;
grant insert on public.profiles to authenticated;
grant update (display_name, username, avatar_preset, avatar_url, primary_language) on public.profiles to authenticated;

grant select, insert, delete on public.user_cleared_levels to authenticated;
grant select, insert, delete on public.user_problem_solves to authenticated;
grant select, insert on public.user_attendance to authenticated;
grant select, insert, update on public.user_speed_records to authenticated;
grant select, insert, update on public.section_feedbacks to authenticated;

alter table public.profiles enable row level security;
alter table public.user_cleared_levels enable row level security;
alter table public.user_problem_solves enable row level security;
alter table public.user_attendance enable row level security;
alter table public.user_speed_records enable row level security;
alter table public.section_feedbacks enable row level security;

-- user_cleared_levels RLS
drop policy if exists "cleared_levels_select_own" on public.user_cleared_levels;
create policy "cleared_levels_select_own"
  on public.user_cleared_levels for select to authenticated
  using ((select auth.uid()) = user_id);

drop policy if exists "cleared_levels_insert_own" on public.user_cleared_levels;
create policy "cleared_levels_insert_own"
  on public.user_cleared_levels for insert to authenticated
  with check ((select auth.uid()) = user_id);

drop policy if exists "cleared_levels_delete_own" on public.user_cleared_levels;
create policy "cleared_levels_delete_own"
  on public.user_cleared_levels for delete to authenticated
  using ((select auth.uid()) = user_id);

-- user_attendance RLS (오직 본인 + KST 기준 오늘 날짜만 출석 등록 가능 -> 과거 날짜 조작 차단)
drop policy if exists "attendance_select_own" on public.user_attendance;
create policy "attendance_select_own"
  on public.user_attendance for select to authenticated
  using ((select auth.uid()) = user_id);

drop policy if exists "attendance_insert_today_own" on public.user_attendance;
create policy "attendance_insert_today_own"
  on public.user_attendance for insert to authenticated
  with check (
    (select auth.uid()) = user_id
    and attended_date = ((now() at time zone 'Asia/Seoul')::date)
  );

-- user_speed_records RLS
drop policy if exists "speed_records_select_own" on public.user_speed_records;
create policy "speed_records_select_own"
  on public.user_speed_records for select to authenticated
  using ((select auth.uid()) = user_id);

drop policy if exists "speed_records_insert_own" on public.user_speed_records;
create policy "speed_records_insert_own"
  on public.user_speed_records for insert to authenticated
  with check ((select auth.uid()) = user_id);

drop policy if exists "speed_records_update_own" on public.user_speed_records;
create policy "speed_records_update_own"
  on public.user_speed_records for update to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

-- section_feedbacks RLS
drop policy if exists "section_feedbacks_select_own" on public.section_feedbacks;
create policy "section_feedbacks_select_own"
  on public.section_feedbacks for select to authenticated
  using ((select auth.uid()) = user_id);

drop policy if exists "section_feedbacks_insert_own" on public.section_feedbacks;
create policy "section_feedbacks_insert_own"
  on public.section_feedbacks for insert to authenticated
  with check ((select auth.uid()) = user_id);

drop policy if exists "section_feedbacks_update_own" on public.section_feedbacks;
create policy "section_feedbacks_update_own"
  on public.section_feedbacks for update to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

-- -----------------------------------------------------------------------------
-- 5. Supabase Storage — 아바타(avatars) 공개 버킷 및 본인 폴더 전용 RLS
--    (Storage upsert 정상 동작을 위해 SELECT + INSERT + UPDATE + DELETE 모두 부여)
-- -----------------------------------------------------------------------------
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'avatars',
  'avatars',
  true,
  1048576,
  array['image/webp', 'image/png', 'image/jpeg']
)
on conflict (id) do update
  set public = excluded.public,
      file_size_limit = excluded.file_size_limit,
      allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "avatars_public_read" on storage.objects;
create policy "avatars_public_read"
  on storage.objects for select
  to anon, authenticated
  using (bucket_id = 'avatars');

drop policy if exists "avatars_insert_own" on storage.objects;
create policy "avatars_insert_own"
  on storage.objects for insert
  to authenticated
  with check (
    bucket_id = 'avatars'
    and (storage.foldername(name))[1] = (select auth.uid())::text
  );

drop policy if exists "avatars_update_own" on storage.objects;
create policy "avatars_update_own"
  on storage.objects for update
  to authenticated
  using (
    bucket_id = 'avatars'
    and (storage.foldername(name))[1] = (select auth.uid())::text
  )
  with check (
    bucket_id = 'avatars'
    and (storage.foldername(name))[1] = (select auth.uid())::text
  );

drop policy if exists "avatars_delete_own" on storage.objects;
create policy "avatars_delete_own"
  on storage.objects for delete
  to authenticated
  using (
    bucket_id = 'avatars'
    and (storage.foldername(name))[1] = (select auth.uid())::text
  );

notify pgrst, 'reload schema';

commit;

