-- =============================================================================
-- TypingCode V2 — Initial Database Migration (V1 auth.users Preserved)
-- =============================================================================
-- 사용법:
--   1. Supabase Dashboard (https://supabase.com/dashboard) 접속 -> 기존 프로젝트 선택
--   2. 좌측 메뉴 [SQL Editor] -> [New query] 클릭
--   3. 본 파일 전체 내용을 붙여넣고 우측 하단 [Run] 클릭
--
-- 수행 내용:
--   - auth.users (기존 V1 회원 계정 및 소셜 로그인 정보) 100% 보존
--   - public 스키마 내 기존 V1 레거시 테이블/뷰/함수 및 구형 auth.users 트리거 안전 정리
--   - V2 전용 핵심 3개 테이블 생성:
--       1) public.profiles            (유저 프로필 & 랭킹 집계 지표)
--       2) public.user_level_progress (트랙·레벨별 스텝 진척도, 클리어 여부, 하트, 최고 타수/정확도)
--       3) public.user_problem_solves (코딩 문제풀이 해결 기록)
--   - 기존 V1 auth.users 전원 public.profiles 자동 백필(이관) 및 신규 가입 트리거 연결
--   - RLS(Row Level Security) 전면 활성화 및 (select auth.uid()) 최적화 정책 적용
-- =============================================================================

begin;

-- -----------------------------------------------------------------------------
-- 1. 기존 V1 public 스키마 객체 및 구형 auth.users -> public 트리거 안전 정리
--    (auth.users 회원 데이터 및 Postgres 확장(extension) 소유 객체는 절대 건드리지 않음)
-- -----------------------------------------------------------------------------
do $$
declare
  trig record;
  obj record;
begin
  -- 1-1) auth.users 에 걸린 트리거 중 public 스키마 함수를 호출하는 레거시 트리거 제거
  for trig in
    select t.tgname
    from pg_trigger t
    join pg_proc p on p.oid = t.tgfoid
    join pg_namespace fn_ns on fn_ns.oid = p.pronamespace
    where t.tgrelid = 'auth.users'::regclass
      and not t.tgisinternal
      and fn_ns.nspname = 'public'
  loop
    execute format('drop trigger if exists %I on auth.users;', trig.tgname);
  end loop;

  -- 1-2) public 스키마의 기존 View / Materialized View 제거 (확장 소유 객체 제외)
  for obj in
    select c.relname, c.relkind
    from pg_class c
    join pg_namespace n on n.oid = c.relnamespace
    where n.nspname = 'public'
      and c.relkind in ('v', 'm')
      and not exists (
        select 1 from pg_depend d
        where d.objid = c.oid and d.deptype = 'e'
      )
  loop
    if obj.relkind = 'm' then
      execute format('drop materialized view if exists public.%I cascade;', obj.relname);
    else
      execute format('drop view if exists public.%I cascade;', obj.relname);
    end if;
  end loop;

  -- 1-3) public 스키마의 기존 V1 테이블 제거 (확장 소유 객체 제외)
  for obj in
    select c.relname
    from pg_class c
    join pg_namespace n on n.oid = c.relnamespace
    where n.nspname = 'public'
      and c.relkind in ('r', 'p')
      and not exists (
        select 1 from pg_depend d
        where d.objid = c.oid and d.deptype = 'e'
      )
  loop
    execute format('drop table if exists public.%I cascade;', obj.relname);
  end loop;

  -- 1-4) public 스키마의 기존 사용자 정의 함수 제거 (확장 소유 함수 제외)
  for obj in
    select p.oid::regprocedure as sig
    from pg_proc p
    join pg_namespace n on n.oid = p.pronamespace
    where n.nspname = 'public'
      and not exists (
        select 1 from pg_depend d
        where d.objid = p.oid and d.deptype = 'e'
      )
  loop
    execute format('drop function if exists %s cascade;', obj.sig);
  end loop;
end $$;

-- -----------------------------------------------------------------------------
-- 2. V2 핵심 테이블 생성
-- -----------------------------------------------------------------------------

-- 2-1) 유저 프로필 & 리더보드 집계 테이블 (이메일 등 민감 개인정보 미저장)
create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text not null check (char_length(trim(display_name)) between 1 and 40),
  avatar_emoji text not null default '🦊',
  avatar_url text,
  primary_language text not null default 'Python',
  best_cpm integer not null default 0 check (best_cpm >= 0 and best_cpm <= 3000),
  avg_accuracy numeric(5,2) not null default 100.00 check (avg_accuracy >= 0 and avg_accuracy <= 100),
  cleared_levels_count integer not null default 0 check (cleared_levels_count >= 0),
  solved_problems_count integer not null default 0 check (solved_problems_count >= 0),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index profiles_leaderboard_idx
  on public.profiles (best_cpm desc, cleared_levels_count desc, avg_accuracy desc);

-- 2-2) 언어/모듈별 레벨 학습 진도 및 최고 타수 기록
-- 복합 PK (user_id, track_id, level_number)의 선두 컬럼 user_id 가 FK 인덱스 역할을 겸함
create table public.user_level_progress (
  user_id uuid not null references public.profiles(id) on delete cascade,
  track_id text not null check (char_length(track_id) between 1 and 40),
  level_number integer not null check (level_number >= 1 and level_number <= 500),
  unlocked_step integer not null default 0 check (unlocked_step >= 0),
  total_steps integer not null default 10 check (total_steps >= 1),
  is_cleared boolean not null default false,
  hearts integer not null default 5 check (hearts >= 0 and hearts <= 5),
  best_cpm integer not null default 0 check (best_cpm >= 0 and best_cpm <= 3000),
  best_accuracy numeric(5,2) not null default 100.00 check (best_accuracy >= 0 and best_accuracy <= 100),
  updated_at timestamptz not null default now(),
  primary key (user_id, track_id, level_number)
);

-- 2-3) 코딩 문제풀이(/problems) 해결 기록
create table public.user_problem_solves (
  user_id uuid not null references public.profiles(id) on delete cascade,
  problem_id integer not null check (problem_id >= 1),
  language text not null default 'python' check (char_length(language) between 1 and 40),
  solved_at timestamptz not null default now(),
  primary key (user_id, problem_id)
);

-- -----------------------------------------------------------------------------
-- 3. 트리거 함수 및 기존 V1 회원 프로필 백필
-- -----------------------------------------------------------------------------

-- 3-1) updated_at 자동 갱신 (SECURITY INVOKER)
create or replace function public.set_updated_at()
returns trigger
language plpgsql
security invoker
set search_path = ''
as $$
begin
  new.updated_at := now();
  return new;
end;
$$;

create trigger set_profiles_updated_at
  before update on public.profiles
  for each row execute function public.set_updated_at();

create trigger set_user_level_progress_updated_at
  before update on public.user_level_progress
  for each row execute function public.set_updated_at();

-- 3-2) 신규 회원가입(이메일 / GitHub / Google) 시 public.profiles 자동 생성
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  derived_name text;
  derived_avatar text;
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

  insert into public.profiles (id, display_name, avatar_url)
  values (new.id, derived_name, derived_avatar)
  on conflict (id) do update
    set avatar_url = coalesce(public.profiles.avatar_url, excluded.avatar_url);

  return new;
end;
$$;

-- SECURITY DEFINER 함수 외부 직접 호출 원천 차단 (Supabase 보안 수칙 준수)
revoke execute on function public.handle_new_user() from public, anon, authenticated;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- 3-3) 기존 V1 auth.users 회원 전원 public.profiles 즉시 백필
insert into public.profiles (id, display_name, avatar_url, created_at)
select
  u.id,
  left(
    coalesce(
      nullif(trim(u.raw_user_meta_data->>'name'), ''),
      nullif(trim(u.raw_user_meta_data->>'full_name'), ''),
      nullif(trim(u.raw_user_meta_data->>'user_name'), ''),
      nullif(split_part(coalesce(u.email, ''), '@', 1), ''),
      'Coder'
    ),
    40
  ),
  nullif(trim(u.raw_user_meta_data->>'avatar_url'), ''),
  coalesce(u.created_at, now())
from auth.users u
on conflict (id) do nothing;

-- 3-4) 진도/문제풀이 갱신 시 profiles 리더보드 통계 자동 동기화 (SECURITY INVOKER)
create or replace function public.sync_profile_stats()
returns trigger
language plpgsql
security invoker
set search_path = ''
as $$
declare
  target_user_id uuid;
  v_cleared integer;
  v_best_cpm integer;
  v_avg_acc numeric(5,2);
  v_solved integer;
  v_top_track text;
  v_lang_label text;
begin
  target_user_id := coalesce(new.user_id, old.user_id);

  select
    count(*) filter (where is_cleared),
    coalesce(max(best_cpm), 0),
    coalesce(round(avg(best_accuracy) filter (where unlocked_step > 0 or is_cleared), 2), 100.00)
  into v_cleared, v_best_cpm, v_avg_acc
  from public.user_level_progress
  where user_id = target_user_id;

  select count(*)
  into v_solved
  from public.user_problem_solves
  where user_id = target_user_id;

  select track_id
  into v_top_track
  from public.user_level_progress
  where user_id = target_user_id
  group by track_id
  order by count(*) filter (where is_cleared) desc, max(best_cpm) desc
  limit 1;

  v_lang_label := case
    when v_top_track in ('python', 'python_basic', 'py-basic', 'py-advanced') then 'Python'
    when v_top_track in ('c', 'c-basic') then 'C언어'
    when v_top_track in ('cpp', 'cpp-basic') then 'C++'
    when v_top_track in ('web', 'web-html', 'js', 'javascript') then 'Web (JS)'
    when v_top_track in ('java', 'java-basic') then 'Java'
    when v_top_track in ('go', 'go-basic') then 'Go'
    when v_top_track in ('rust', 'rust-basic') then 'Rust'
    when v_top_track in ('sql', 'sql-basic') then 'SQL'
    else null
  end;

  update public.profiles
  set
    cleared_levels_count = coalesce(v_cleared, 0),
    best_cpm = coalesce(v_best_cpm, 0),
    avg_accuracy = coalesce(v_avg_acc, 100.00),
    solved_problems_count = coalesce(v_solved, 0),
    primary_language = coalesce(v_lang_label, primary_language)
  where id = target_user_id;

  return coalesce(new, old);
end;
$$;

create trigger sync_profile_on_progress_change
  after insert or update or delete on public.user_level_progress
  for each row execute function public.sync_profile_stats();

create trigger sync_profile_on_problem_solve
  after insert or update or delete on public.user_problem_solves
  for each row execute function public.sync_profile_stats();

-- -----------------------------------------------------------------------------
-- 4. Data API 권한 부여 및 RLS(Row Level Security) 정책
-- -----------------------------------------------------------------------------
grant usage on schema public to anon, authenticated;

grant select on public.profiles to anon, authenticated;
grant insert, update on public.profiles to authenticated;

grant select, insert, update, delete on public.user_level_progress to authenticated;
grant select, insert, delete on public.user_problem_solves to authenticated;

alter table public.profiles enable row level security;
alter table public.user_level_progress enable row level security;
alter table public.user_problem_solves enable row level security;

-- profiles: 랭킹(/ranking) 공개 조회 허용, 본인 프로필만 생성/수정 허용
create policy "profiles_select_public"
  on public.profiles
  for select
  to anon, authenticated
  using (true);

create policy "profiles_insert_own"
  on public.profiles
  for insert
  to authenticated
  with check ((select auth.uid()) = id);

create policy "profiles_update_own"
  on public.profiles
  for update
  to authenticated
  using ((select auth.uid()) = id)
  with check ((select auth.uid()) = id);

-- user_level_progress: 오직 본인 학습 진도만 조회/생성/수정/삭제
create policy "progress_select_own"
  on public.user_level_progress
  for select
  to authenticated
  using ((select auth.uid()) = user_id);

create policy "progress_insert_own"
  on public.user_level_progress
  for insert
  to authenticated
  with check ((select auth.uid()) = user_id);

create policy "progress_update_own"
  on public.user_level_progress
  for update
  to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

create policy "progress_delete_own"
  on public.user_level_progress
  for delete
  to authenticated
  using ((select auth.uid()) = user_id);

-- user_problem_solves: 오직 본인 문제 해결 기록만 조회/생성/삭제
create policy "problem_solves_select_own"
  on public.user_problem_solves
  for select
  to authenticated
  using ((select auth.uid()) = user_id);

create policy "problem_solves_insert_own"
  on public.user_problem_solves
  for insert
  to authenticated
  with check ((select auth.uid()) = user_id);

create policy "problem_solves_delete_own"
  on public.user_problem_solves
  for delete
  to authenticated
  using ((select auth.uid()) = user_id);

-- PostgREST 스키마 캐시 즉시 갱신
notify pgrst, 'reload schema';

commit;

