-- =============================================================================
-- TypingCode V2 — All-In-One Unified Database Schema (V2.0 ~ V2.4 Consolidated)
-- =============================================================================
-- 사용법:
--   1. Supabase Dashboard (https://supabase.com/dashboard) -> 프로젝트 선택
--   2. 좌측 메뉴 [SQL Editor] -> [New query] 클릭
--   3. 이 파일 하나만 전체 복사하여 붙여넣고 우측 하단 [Run] 클릭 (단 1회 실행으로 완료)
--
-- 핵심 특징 (100% 멱등성 & 기존 데이터 무손실 보존):
--   - 여러 개로 쪼개져 있던 마이그레이션 SQL을 단 하나의 통합 파일로 완전 일원화
--   - 몇 번을 반복 실행해도 함수 반환 타입 충돌(42P13), 뷰 컬럼 충돌(42P16),
--     삭제된 테이블 트리거 참조(42P01), V1 레거시 이메일 제약(23514) 오류가 발생하지 않음
--   - 기존 `auth.users`, `profiles`, `user_problem_solves`, `user_speed_records`,
--     `section_feedbacks`, `user_saved_snippets` 데이터 100% 보존
--   - 구형 누적 테이블(`user_cleared_levels`, `user_attendance`, `user_level_progress`)의
--     데이터를 `profiles` 단일 Row(`cleared_levels` JSONB + O(1) 출석 컬럼)로 100% 이관 후 정리
--   - 동일인 중복 `profiles` Row의 학습 기록을 주 계정으로 병합 후 중복 껍데기 Row 정리
--   - 현재 학습 중인 커리큘럼(`active_curriculum_type/id`), 코스(`current_track_id`),
--     레벨(`current_level`), 완주 코스(`completed_tracks`) 및
--     B2B·B2G 강사 LMS(`organizations`, `classrooms`, `classroom_members`) +
--     학생 학습 레벨 초기화/재지정 RPC(`set_student_learning_level`) 일괄 구성
-- =============================================================================

begin;

-- -----------------------------------------------------------------------------
-- 0. 안전한 스키마 변경을 위해 기존 트리거·뷰·RPC 함수 선제 언마운트
--    (마이그레이션 도중 구형 트리거가 실행되거나 함수 반환 타입 변경 오류 42P13 원천 방지)
-- -----------------------------------------------------------------------------
drop view if exists public.speed_language_leaderboard cascade;

do $$
begin
  if to_regclass('public.profiles') is not null then
    drop trigger if exists enforce_profiles_constraints_trg on public.profiles;
    drop trigger if exists set_profiles_updated_at on public.profiles;
  end if;

  if to_regclass('public.user_problem_solves') is not null then
    drop trigger if exists sync_profile_on_problem_solve on public.user_problem_solves;
  end if;

  if to_regclass('public.user_speed_records') is not null then
    drop trigger if exists sync_profile_on_speed_record on public.user_speed_records;
    drop trigger if exists set_user_speed_records_updated_at on public.user_speed_records;
  end if;

  if to_regclass('public.section_feedbacks') is not null then
    drop trigger if exists set_section_feedbacks_updated_at on public.section_feedbacks;
  end if;

  if to_regclass('public.user_saved_snippets') is not null then
    drop trigger if exists set_user_saved_snippets_updated_at on public.user_saved_snippets;
  end if;

  if to_regclass('public.user_cleared_levels') is not null then
    drop trigger if exists sync_profile_on_cleared_levels on public.user_cleared_levels;
  end if;

  if to_regclass('public.user_attendance') is not null then
    drop trigger if exists sync_profile_on_attendance on public.user_attendance;
  end if;

  if to_regclass('public.user_level_progress') is not null then
    drop trigger if exists sync_profile_on_progress_change on public.user_level_progress;
    drop trigger if exists set_user_level_progress_updated_at on public.user_level_progress;
  end if;
end $$;

drop function if exists public.get_classroom_students_progress(uuid) cascade;
drop function if exists public.assign_student_to_classroom(uuid, text, text) cascade;
drop function if exists public.set_student_learning_level(uuid, text, integer) cascade;
drop function if exists public.sync_cleared_levels(jsonb) cascade;
drop function if exists public.sync_cleared_levels(jsonb, timestamptz) cascade;
drop function if exists public.record_level_cleared(text, integer) cascade;
drop function if exists public.record_daily_attendance() cascade;
drop function if exists public.update_learning_context(text, text, text, integer) cascade;
drop function if exists public.check_email_available(text) cascade;
drop function if exists public.check_username_available(text) cascade;
drop function if exists public.resolve_email_by_username(text) cascade;
drop function if exists public.get_admin_section_feedbacks() cascade;

-- -----------------------------------------------------------------------------
-- 1. 공통 순수 유틸리티 함수 정의 (테이블/데이터 작업 전에 먼저 선언)
-- -----------------------------------------------------------------------------
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

create or replace function public.normalize_track_key(p_raw text)
returns text
language sql
immutable
set search_path = ''
as $$
  select case lower(trim(coalesce(p_raw, '')))
    when 'python' then 'py-basic'
    when 'python_basic' then 'py-basic'
    when 'c' then 'c-basic'
    when 'web' then 'web-html'
    else lower(trim(coalesce(p_raw, '')))
  end;
$$;

create or replace function public.get_track_total_levels(p_track_id text)
returns integer
language sql
immutable
set search_path = ''
as $$
  select case public.normalize_track_key(p_track_id)
    when 'py-basic' then 113
    when 'c-basic' then 30
    when 'cpp-basic' then 30
    when 'java-basic' then 30
    when 'web-html' then 30
    when 'web-js' then 30
    when 'sql-basic' then 25
    when 'go-basic' then 25
    when 'rust-basic' then 25
    else 100
  end;
$$;

create or replace function public.count_jsonb_cleared_levels(p_cleared jsonb)
returns integer
language sql
immutable
set search_path = ''
as $$
  select coalesce(
    (
      select sum(jsonb_array_length(val))::integer
      from jsonb_each(coalesce(p_cleared, '{}'::jsonb)) as e(k, val)
      where jsonb_typeof(val) = 'array'
    ),
    0
  );
$$;

create or replace function public.compute_completed_tracks(p_cleared jsonb)
returns text[]
language sql
immutable
set search_path = ''
as $$
  select coalesce(
    array_agg(e.k order by e.k),
    '{}'::text[]
  )
  from jsonb_each(coalesce(p_cleared, '{}'::jsonb)) as e(k, val)
  where jsonb_typeof(val) = 'array'
    and jsonb_array_length(val) >= public.get_track_total_levels(e.k);
$$;

create or replace function public.merge_jsonb_cleared_levels(p_base jsonb, p_incoming jsonb)
returns jsonb
language plpgsql
immutable
set search_path = ''
as $$
declare
  v_result jsonb := '{}'::jsonb;
  v_norm_key text;
  v_arr jsonb;
begin
  for v_norm_key, v_arr in
    with raw_entries as (
      select public.normalize_track_key(k) as track_id, val
      from jsonb_each(coalesce(p_base, '{}'::jsonb)) as e(k, val)
      where jsonb_typeof(val) = 'array'
      union all
      select public.normalize_track_key(k) as track_id, val
      from jsonb_each(coalesce(p_incoming, '{}'::jsonb)) as e(k, val)
      where jsonb_typeof(val) = 'array'
    ),
    expanded_nums as (
      select distinct
        r.track_id,
        (elem::text)::integer as lvl
      from raw_entries r,
      lateral jsonb_array_elements(r.val) as elem
      where r.track_id <> ''
        and jsonb_typeof(elem) = 'number'
        and (elem::text)::integer between 1 and 500
    )
    select
      track_id,
      jsonb_agg(lvl order by lvl)
    from expanded_nums
    group by track_id
  loop
    v_result := jsonb_set(v_result, array[v_norm_key], coalesce(v_arr, '[]'::jsonb), true);
  end loop;

  return v_result;
end;
$$;

create or replace function public.derive_primary_language_from_cleared(
  p_cleared jsonb,
  p_fallback text
)
returns text
language plpgsql
immutable
set search_path = ''
as $$
declare
  v_top_track text;
begin
  select e.k
  into v_top_track
  from jsonb_each(coalesce(p_cleared, '{}'::jsonb)) as e(k, val)
  where jsonb_typeof(val) = 'array'
    and jsonb_array_length(val) > 0
  order by jsonb_array_length(val) desc, e.k asc
  limit 1;

  return case
    when v_top_track in ('python', 'python_basic', 'py-basic', 'py-advanced', 'py-ds', 'py-oop') then 'Python'
    when v_top_track in ('c', 'c-basic', 'c-pointer') then 'C언어'
    when v_top_track in ('cpp', 'cpp-basic') then 'C++'
    when v_top_track in ('web', 'web-html', 'web-js', 'js', 'javascript') then 'Web (JS)'
    when v_top_track in ('java', 'java-basic') then 'Java'
    when v_top_track in ('go', 'go-basic') then 'Go'
    when v_top_track in ('rust', 'rust-basic') then 'Rust'
    when v_top_track in ('sql', 'sql-basic') then 'SQL'
    else coalesce(nullif(trim(p_fallback), ''), 'Python')
  end;
end;
$$;

-- -----------------------------------------------------------------------------
-- 2. 코어 5개 테이블 생성 및 비누적 컬럼 확장
-- -----------------------------------------------------------------------------

-- 2-1) public.profiles (유저당 1 Row 고정)
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text,
  username text,
  display_name text not null default 'Coder' check (char_length(trim(display_name)) between 1 and 40),
  role text not null default 'student',
  avatar_preset text not null default 'fox',
  avatar_url text,
  primary_language text not null default 'Python',
  active_curriculum_type text not null default 'roadmap',
  active_curriculum_id text not null default 'starter',
  current_track_id text not null default 'py-basic',
  current_level integer not null default 1,
  cleared_levels jsonb not null default '{}'::jsonb,
  completed_tracks text[] not null default '{}',
  cleared_levels_count integer not null default 0 check (cleared_levels_count >= 0),
  solved_problems_count integer not null default 0 check (solved_problems_count >= 0),
  current_streak integer not null default 0,
  longest_streak integer not null default 0,
  total_attendance_days integer not null default 0,
  last_attended_date date,
  activity_score integer not null default 0,
  best_typing_cpm integer not null default 0,
  best_typing_accuracy numeric(5,2) not null default 0.00,
  best_typing_language text not null default 'python',
  progress_reset_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.profiles
  add column if not exists email text,
  add column if not exists username text,
  add column if not exists role text not null default 'student',
  add column if not exists avatar_preset text not null default 'fox',
  add column if not exists avatar_url text,
  add column if not exists primary_language text not null default 'Python',
  add column if not exists active_curriculum_type text not null default 'roadmap',
  add column if not exists active_curriculum_id text not null default 'starter',
  add column if not exists current_track_id text not null default 'py-basic',
  add column if not exists current_level integer not null default 1,
  add column if not exists cleared_levels jsonb not null default '{}'::jsonb,
  add column if not exists completed_tracks text[] not null default '{}',
  add column if not exists cleared_levels_count integer not null default 0,
  add column if not exists solved_problems_count integer not null default 0,
  add column if not exists current_streak integer not null default 0,
  add column if not exists longest_streak integer not null default 0,
  add column if not exists total_attendance_days integer not null default 0,
  add column if not exists last_attended_date date,
  add column if not exists activity_score integer not null default 0,
  add column if not exists best_typing_cpm integer not null default 0,
  add column if not exists best_typing_accuracy numeric(5,2) not null default 0.00,
  add column if not exists best_typing_language text not null default 'python',
  add column if not exists progress_reset_at timestamptz;

alter table public.profiles
  drop column if exists avatar_emoji,
  drop column if exists best_cpm,
  drop column if exists avg_accuracy;

drop index if exists public.profiles_leaderboard_idx;
drop index if exists public.profiles_email_lower_uidx;

alter table public.profiles
  drop constraint if exists profiles_email_format_chk,
  drop constraint if exists profiles_username_format_chk,
  drop constraint if exists profiles_avatar_preset_chk,
  drop constraint if exists profiles_streak_nonneg_chk,
  drop constraint if exists profiles_typing_bounds_chk,
  drop constraint if exists profiles_best_typing_lang_chk,
  drop constraint if exists profiles_role_chk,
  drop constraint if exists profiles_cleared_levels_obj_chk,
  drop constraint if exists profiles_active_curr_type_chk,
  drop constraint if exists profiles_current_level_bounds_chk;

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
    ),
  add constraint profiles_best_typing_lang_chk
    check (char_length(trim(best_typing_language)) between 1 and 30),
  add constraint profiles_role_chk
    check (role in ('student', 'instructor', 'org_admin', 'super_admin')),
  add constraint profiles_cleared_levels_obj_chk
    check (jsonb_typeof(cleared_levels) = 'object'),
  add constraint profiles_active_curr_type_chk
    check (active_curriculum_type in ('roadmap', 'language')),
  add constraint profiles_current_level_bounds_chk
    check (current_level >= 1 and current_level <= 500);

-- 누락된 auth.users 계정이 있다면 profiles 에 백필
insert into public.profiles (id, email, display_name, avatar_url, created_at)
select
  u.id,
  nullif(lower(trim(coalesce(u.email, ''))), ''),
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

-- auth.users 의 이메일을 profiles.email 로 일괄 동기화
update public.profiles p
set email = nullif(lower(trim(u.email)), '')
from auth.users u
where p.id = u.id
  and u.email is not null
  and trim(u.email) <> ''
  and (p.email is null or p.email <> lower(trim(u.email)));

-- 2-2) public.user_problem_solves (코딩 문제풀이 해결 기록)
create table if not exists public.user_problem_solves (
  user_id uuid not null references public.profiles(id) on delete cascade,
  problem_id integer not null check (problem_id >= 1),
  language text not null default 'python' check (char_length(language) between 1 and 40),
  submitted_code text,
  execution_ms integer,
  solutions_by_lang jsonb not null default '{}'::jsonb,
  solved_at timestamptz not null default now(),
  primary key (user_id, problem_id)
);

alter table public.user_problem_solves
  add column if not exists submitted_code text,
  add column if not exists execution_ms integer,
  add column if not exists solutions_by_lang jsonb not null default '{}'::jsonb;

alter table public.user_problem_solves
  drop constraint if exists problem_solves_code_len_chk,
  drop constraint if exists problem_solves_exec_ms_chk;

alter table public.user_problem_solves
  add constraint problem_solves_code_len_chk
    check (submitted_code is null or char_length(submitted_code) <= 30000),
  add constraint problem_solves_exec_ms_chk
    check (execution_ms is null or execution_ms >= 0);

-- 2-3) public.user_speed_records (코드타자 예제·언어별 최고 타수 기록)
create table if not exists public.user_speed_records (
  user_id uuid not null references public.profiles(id) on delete cascade,
  snippet_id text not null check (char_length(snippet_id) between 1 and 60),
  language text not null check (char_length(language) between 1 and 30),
  best_cpm integer not null check (best_cpm >= 0 and best_cpm <= 3000),
  best_accuracy numeric(5,2) not null check (best_accuracy >= 0 and best_accuracy <= 100),
  updated_at timestamptz not null default now(),
  primary key (user_id, snippet_id)
);

create index if not exists user_speed_records_lang_cpm_idx
  on public.user_speed_records (language, best_cpm desc, best_accuracy desc);

-- 2-4) public.section_feedbacks (섹션 완료 마이크로 설문)
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

create index if not exists section_feedbacks_updated_at_idx
  on public.section_feedbacks (updated_at desc);

create index if not exists section_feedbacks_track_sec_idx
  on public.section_feedbacks (track_id, section_number, updated_at desc);

-- 2-5) public.user_saved_snippets (자유코딩 클라우드 코드 보관함)
create table if not exists public.user_saved_snippets (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  title text not null check (char_length(trim(title)) between 1 and 80),
  language text not null check (char_length(trim(language)) between 1 and 30),
  code text not null check (char_length(code) <= 50000),
  stdin text not null default '' check (char_length(stdin) <= 10000),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists user_saved_snippets_user_updated_idx
  on public.user_saved_snippets (user_id, updated_at desc);

-- -----------------------------------------------------------------------------
-- 3. 구형 누적 테이블(user_level_progress, user_cleared_levels, user_attendance)
--    데이터 100% 무손실 이관 후 테이블 DROP
-- -----------------------------------------------------------------------------
do $$
begin
  -- 3-1) 구형 user_level_progress 가 남아 있다면 profiles.cleared_levels 로 이관 후 제거
  if to_regclass('public.user_level_progress') is not null then
    with per_user_track as (
      select
        ulp.user_id,
        public.normalize_track_key(ulp.track_id) as track_id,
        jsonb_agg(distinct ulp.level_number order by ulp.level_number) as lvl_arr
      from public.user_level_progress ulp
      where ulp.is_cleared = true
        and ulp.level_number between 1 and 500
      group by ulp.user_id, public.normalize_track_key(ulp.track_id)
    ),
    per_user_json as (
      select
        user_id,
        jsonb_object_agg(track_id, lvl_arr) as merged_json
      from per_user_track
      where track_id <> ''
      group by user_id
    )
    update public.profiles p
    set cleared_levels = public.merge_jsonb_cleared_levels(p.cleared_levels, u.merged_json)
    from per_user_json u
    where p.id = u.user_id;

    drop table public.user_level_progress cascade;
  end if;

  -- 3-2) user_cleared_levels -> profiles.cleared_levels (JSONB) 및 current_level 이관 후 제거
  if to_regclass('public.user_cleared_levels') is not null then
    with per_user_track as (
      select
        ucl.user_id,
        public.normalize_track_key(ucl.track_id) as track_id,
        jsonb_agg(distinct ucl.level_number order by ucl.level_number) as lvl_arr,
        max(ucl.level_number) as max_lvl
      from public.user_cleared_levels ucl
      where ucl.level_number between 1 and 500
      group by ucl.user_id, public.normalize_track_key(ucl.track_id)
    ),
    per_user_json as (
      select
        user_id,
        jsonb_object_agg(track_id, lvl_arr) as merged_json,
        (array_agg(track_id order by max_lvl desc))[1] as top_track,
        max(max_lvl) as top_max_lvl
      from per_user_track
      where track_id <> ''
      group by user_id
    )
    update public.profiles p
    set
      cleared_levels = public.merge_jsonb_cleared_levels(p.cleared_levels, u.merged_json),
      current_track_id = coalesce(u.top_track, p.current_track_id, 'py-basic'),
      current_level = least(
        public.get_track_total_levels(coalesce(u.top_track, 'py-basic')),
        greatest(1, coalesce(u.top_max_lvl, 0) + 1)
      )
    from per_user_json u
    where p.id = u.user_id;

    drop table public.user_cleared_levels cascade;
  end if;

  -- 3-3) user_attendance -> profiles 스트릭 컬럼 최종 보정 후 제거
  if to_regclass('public.user_attendance') is not null then
    with grouped as (
      select
        user_id,
        attended_date,
        attended_date - (row_number() over (partition by user_id order by attended_date))::integer as grp
      from public.user_attendance
    ),
    streaks as (
      select
        user_id,
        count(*)::integer as run_len,
        max(attended_date) as end_date
      from grouped
      group by user_id, grp
    ),
    latest_active_streak as (
      select distinct on (user_id)
        user_id,
        run_len as cur_streak
      from streaks
      where end_date >= (((now() at time zone 'Asia/Seoul')::date) - 7)
      order by user_id, end_date desc
    ),
    summary as (
      select
        s.user_id,
        coalesce(sum(s.run_len)::integer, 0) as total_days,
        coalesce(max(s.run_len)::integer, 0) as max_streak,
        max(s.end_date) as last_date,
        coalesce(l.cur_streak, 0) as cur_streak
      from streaks s
      left join latest_active_streak l on l.user_id = s.user_id
      group by s.user_id, l.cur_streak
    )
    update public.profiles p
    set
      total_attendance_days = greatest(p.total_attendance_days, summary.total_days),
      longest_streak = greatest(p.longest_streak, summary.max_streak),
      current_streak = case
        when p.last_attended_date is null or summary.last_date >= p.last_attended_date
          then summary.cur_streak
        else p.current_streak
      end,
      last_attended_date = greatest(p.last_attended_date, summary.last_date)
    from summary
    where p.id = summary.user_id;

    drop table public.user_attendance cascade;
  end if;
end $$;

-- -----------------------------------------------------------------------------
-- 4. 동일인 중복 profiles Row 병합 및 정리 (1인 1 Profile 보장)
-- -----------------------------------------------------------------------------
do $$
declare
  dup record;
begin
  -- 4-1) 동일 이메일 중복 Row 병합
  for dup in
    with ranked as (
      select
        id,
        first_value(id) over (
          partition by lower(email)
          order by
            (username is not null) desc,
            activity_score desc,
            cleared_levels_count desc,
            created_at asc
        ) as keep_id,
        row_number() over (
          partition by lower(email)
          order by
            (username is not null) desc,
            activity_score desc,
            cleared_levels_count desc,
            created_at asc
        ) as rn
      from public.profiles
      where email is not null and trim(email) <> ''
    )
    select id as drop_id, keep_id
    from ranked
    where rn > 1 and id <> keep_id
  loop
    update public.profiles k
    set
      cleared_levels = public.merge_jsonb_cleared_levels(k.cleared_levels, d.cleared_levels),
      current_level = greatest(k.current_level, d.current_level),
      total_attendance_days = greatest(k.total_attendance_days, d.total_attendance_days),
      longest_streak = greatest(k.longest_streak, d.longest_streak),
      current_streak = greatest(k.current_streak, d.current_streak),
      last_attended_date = greatest(k.last_attended_date, d.last_attended_date),
      best_typing_cpm = greatest(k.best_typing_cpm, d.best_typing_cpm),
      best_typing_accuracy = greatest(k.best_typing_accuracy, d.best_typing_accuracy),
      avatar_url = coalesce(k.avatar_url, d.avatar_url)
    from public.profiles d
    where k.id = dup.keep_id and d.id = dup.drop_id;

    insert into public.user_problem_solves (user_id, problem_id, language, submitted_code, execution_ms, solutions_by_lang, solved_at)
    select dup.keep_id, problem_id, language, submitted_code, execution_ms, solutions_by_lang, solved_at
    from public.user_problem_solves
    where user_id = dup.drop_id
    on conflict (user_id, problem_id) do nothing;

    insert into public.user_speed_records (user_id, snippet_id, language, best_cpm, best_accuracy, updated_at)
    select dup.keep_id, snippet_id, language, best_cpm, best_accuracy, updated_at
    from public.user_speed_records
    where user_id = dup.drop_id
    on conflict (user_id, snippet_id) do update
      set best_cpm = greatest(public.user_speed_records.best_cpm, excluded.best_cpm),
          best_accuracy = greatest(public.user_speed_records.best_accuracy, excluded.best_accuracy);

    insert into public.section_feedbacks (user_id, track_id, section_number, rating, difficulty, tags, comment, created_at, updated_at)
    select dup.keep_id, track_id, section_number, rating, difficulty, tags, comment, created_at, updated_at
    from public.section_feedbacks
    where user_id = dup.drop_id
    on conflict (user_id, track_id, section_number) do nothing;

    update public.user_saved_snippets
    set user_id = dup.keep_id
    where user_id = dup.drop_id;

    delete from public.profiles where id = dup.drop_id;
  end loop;

  -- 4-2) 동일 display_name 중 username IS NULL 로 생성된 중복 Row를 주 계정으로 병합 후 제거
  for dup in
    with ranked_names as (
      select
        id,
        username,
        first_value(id) over (
          partition by lower(trim(display_name))
          order by
            (username is not null) desc,
            (email is not null and position('.' in email) > 0) desc,
            activity_score desc,
            public.count_jsonb_cleared_levels(cleared_levels) desc,
            solved_problems_count desc,
            best_typing_cpm desc,
            created_at desc
        ) as keep_id,
        row_number() over (
          partition by lower(trim(display_name))
          order by
            (username is not null) desc,
            (email is not null and position('.' in email) > 0) desc,
            activity_score desc,
            public.count_jsonb_cleared_levels(cleared_levels) desc,
            solved_problems_count desc,
            best_typing_cpm desc,
            created_at desc
        ) as rn
      from public.profiles
      where trim(display_name) <> ''
    )
    select id as drop_id, keep_id
    from ranked_names
    where rn > 1
      and id <> keep_id
      and username is null
  loop
    update public.profiles k
    set
      cleared_levels = public.merge_jsonb_cleared_levels(k.cleared_levels, d.cleared_levels),
      current_level = greatest(k.current_level, d.current_level),
      total_attendance_days = greatest(k.total_attendance_days, d.total_attendance_days),
      longest_streak = greatest(k.longest_streak, d.longest_streak),
      current_streak = greatest(k.current_streak, d.current_streak),
      last_attended_date = greatest(k.last_attended_date, d.last_attended_date),
      best_typing_cpm = greatest(k.best_typing_cpm, d.best_typing_cpm),
      best_typing_accuracy = greatest(k.best_typing_accuracy, d.best_typing_accuracy),
      avatar_url = coalesce(k.avatar_url, d.avatar_url)
    from public.profiles d
    where k.id = dup.keep_id and d.id = dup.drop_id;

    insert into public.user_problem_solves (user_id, problem_id, language, submitted_code, execution_ms, solutions_by_lang, solved_at)
    select dup.keep_id, problem_id, language, submitted_code, execution_ms, solutions_by_lang, solved_at
    from public.user_problem_solves
    where user_id = dup.drop_id
    on conflict (user_id, problem_id) do nothing;

    insert into public.user_speed_records (user_id, snippet_id, language, best_cpm, best_accuracy, updated_at)
    select dup.keep_id, snippet_id, language, best_cpm, best_accuracy, updated_at
    from public.user_speed_records
    where user_id = dup.drop_id
    on conflict (user_id, snippet_id) do update
      set best_cpm = greatest(public.user_speed_records.best_cpm, excluded.best_cpm),
          best_accuracy = greatest(public.user_speed_records.best_accuracy, excluded.best_accuracy);

    insert into public.section_feedbacks (user_id, track_id, section_number, rating, difficulty, tags, comment, created_at, updated_at)
    select dup.keep_id, track_id, section_number, rating, difficulty, tags, comment, created_at, updated_at
    from public.section_feedbacks
    where user_id = dup.drop_id
    on conflict (user_id, track_id, section_number) do nothing;

    update public.user_saved_snippets
    set user_id = dup.keep_id
    where user_id = dup.drop_id;

    delete from public.profiles where id = dup.drop_id;
  end loop;

  -- 4-3) V1 구형 계정(username IS NULL, 점수 0)의 display_name 또는 이메일 앞부분이
  --      신규 V2 계정의 username 과 일치하는 중복 Row 정리 (예: display_name='easypower' vs username='easypower', display_name='minjun' vs username='minjun')
  for dup in
    select p_null.id as drop_id, p_main.id as keep_id
    from public.profiles p_null
    join public.profiles p_main
      on p_main.id <> p_null.id
     and p_main.username is not null
     and (
       lower(trim(p_null.display_name)) = lower(trim(p_main.username))
       or split_part(lower(coalesce(p_null.email, '')), '@', 1) = lower(trim(p_main.username))
     )
    where p_null.username is null
      and p_null.activity_score = 0
      and public.count_jsonb_cleared_levels(p_null.cleared_levels) = 0
      and p_null.solved_problems_count = 0
      and p_null.best_typing_cpm = 0
  loop
    delete from public.profiles where id = dup.drop_id;
  end loop;
end $$;

-- 고유 인덱스 및 리더보드 정렬 인덱스 생성
create unique index if not exists profiles_username_lower_uidx
  on public.profiles (lower(username))
  where username is not null;

create unique index if not exists profiles_email_lower_uidx
  on public.profiles (lower(email))
  where email is not null;

create index if not exists profiles_activity_leaderboard_idx
  on public.profiles (activity_score desc, cleared_levels_count desc, longest_streak desc);

create index if not exists profiles_speed_leaderboard_idx
  on public.profiles (best_typing_cpm desc, best_typing_accuracy desc);

-- 전 회원 프로필 통계 및 current_level(다음 진행할 레벨 번호) 정합성 일괄 재계산
update public.profiles p
set
  solved_problems_count = coalesce((select count(*) from public.user_problem_solves s where s.user_id = p.id), 0),
  cleared_levels_count = public.count_jsonb_cleared_levels(p.cleared_levels),
  completed_tracks = public.compute_completed_tracks(p.cleared_levels),
  current_level = greatest(
    p.current_level,
    least(
      public.get_track_total_levels(p.current_track_id),
      coalesce(
        (
          select max((elem::text)::integer) + 1
          from jsonb_array_elements(coalesce(p.cleared_levels -> p.current_track_id, '[]'::jsonb)) as elem
          where jsonb_typeof(elem) = 'number'
        ),
        1
      )
    )
  ),
  current_streak = case
    when p.last_attended_date is not null
     and p.last_attended_date >= (((now() at time zone 'Asia/Seoul')::date) - 7)
      then p.current_streak
    else 0
  end,
  activity_score = (public.count_jsonb_cleared_levels(p.cleared_levels) * 100)
                 + (coalesce((select count(*) from public.user_problem_solves s where s.user_id = p.id), 0) * 150),
  primary_language = public.derive_primary_language_from_cleared(p.cleared_levels, p.primary_language);

-- -----------------------------------------------------------------------------
-- 5. B2B · B2G 강사 LMS 대시보드 테이블 (organizations, classrooms, classroom_members)
-- -----------------------------------------------------------------------------
create table if not exists public.organizations (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(trim(name)) between 1 and 80),
  org_type text not null default 'school' check (org_type in ('school', 'academy', 'company', 'government')),
  owner_id uuid not null references public.profiles(id) on delete cascade,
  max_seats integer not null default 30 check (max_seats >= 1 and max_seats <= 10000),
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists organizations_owner_idx on public.organizations (owner_id);

create table if not exists public.classrooms (
  id uuid primary key default gen_random_uuid(),
  org_id uuid references public.organizations(id) on delete set null,
  instructor_id uuid not null references public.profiles(id) on delete cascade,
  name text not null check (char_length(trim(name)) between 1 and 80),
  description text check (description is null or char_length(description) <= 300),
  invite_code text not null unique check (invite_code ~ '^[A-Z0-9]{6,10}$'),
  assigned_tracks text[] not null default array['py-basic'],
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists classrooms_instructor_idx on public.classrooms (instructor_id);
create index if not exists classrooms_org_idx on public.classrooms (org_id);

create table if not exists public.classroom_members (
  classroom_id uuid not null references public.classrooms(id) on delete cascade,
  student_id uuid not null references public.profiles(id) on delete cascade,
  student_label text check (student_label is null or char_length(student_label) <= 40),
  joined_at timestamptz not null default now(),
  primary key (classroom_id, student_id)
);

create index if not exists classroom_members_student_idx on public.classroom_members (student_id);

-- -----------------------------------------------------------------------------
-- 6. 트리거 함수, 리더보드 뷰 및 RPC 함수 일괄 구성
-- -----------------------------------------------------------------------------

-- 6-1) profiles 제약 및 자동 집계 트리거
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

  if new.email is not null then
    new.email := nullif(lower(trim(new.email)), '');
  end if;

  if new.cleared_levels is null or jsonb_typeof(new.cleared_levels) <> 'object' then
    new.cleared_levels := '{}'::jsonb;
  end if;

  if new.active_curriculum_type is null or new.active_curriculum_type not in ('roadmap', 'language') then
    new.active_curriculum_type := 'roadmap';
  end if;

  if new.active_curriculum_id is null or trim(new.active_curriculum_id) = '' then
    new.active_curriculum_id := 'starter';
  end if;

  if new.current_track_id is null or trim(new.current_track_id) = '' then
    new.current_track_id := 'py-basic';
  else
    new.current_track_id := public.normalize_track_key(new.current_track_id);
  end if;

  if new.current_level is null or new.current_level < 1 then
    new.current_level := 1;
  elsif new.current_level > 500 then
    new.current_level := 500;
  end if;

  new.cleared_levels_count := public.count_jsonb_cleared_levels(new.cleared_levels);
  new.completed_tracks := public.compute_completed_tracks(new.cleared_levels);
  new.activity_score := (new.cleared_levels_count * 100)
                      + (coalesce(new.solved_problems_count, 0) * 150);

  if tg_op = 'UPDATE' then
    if old.username is not null and new.username is distinct from old.username then
      raise exception 'USERNAME_IMMUTABLE: 로그인 ID는 한 번 설정하면 변경할 수 없습니다.';
    end if;
    new.updated_at := now();
  end if;

  return new;
end;
$$;

create trigger enforce_profiles_constraints_trg
  before insert or update on public.profiles
  for each row execute function public.enforce_profile_constraints();

create trigger set_user_speed_records_updated_at
  before update on public.user_speed_records
  for each row execute function public.set_updated_at();

create trigger set_section_feedbacks_updated_at
  before update on public.section_feedbacks
  for each row execute function public.set_updated_at();

create trigger set_user_saved_snippets_updated_at
  before update on public.user_saved_snippets
  for each row execute function public.set_updated_at();

drop trigger if exists set_organizations_updated_at on public.organizations;
create trigger set_organizations_updated_at
  before update on public.organizations
  for each row execute function public.set_updated_at();

drop trigger if exists set_classrooms_updated_at on public.classrooms;
create trigger set_classrooms_updated_at
  before update on public.classrooms
  for each row execute function public.set_updated_at();

-- 6-2) 신규 회원가입 및 이메일 변경 동기화 트리거
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
  derived_email text;
  candidate_username text;
begin
  derived_email := nullif(lower(trim(coalesce(new.email, ''))), '');

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

  candidate_username := lower(trim(coalesce(
    new.raw_user_meta_data->>'login_id',
    new.raw_user_meta_data->>'username',
    ''
  )));

  if candidate_username !~ '^[a-z0-9_]{4,20}$' then
    candidate_username := null;
  elsif exists (
    select 1 from public.profiles p where lower(p.username) = candidate_username and p.id <> new.id
  ) then
    candidate_username := null;
  end if;

  if derived_email is not null and exists (
    select 1 from public.profiles p where lower(p.email) = derived_email and p.id <> new.id
  ) then
    return new;
  end if;

  insert into public.profiles (
    id, email, username, display_name, avatar_preset, avatar_url,
    active_curriculum_type, active_curriculum_id, current_track_id, current_level
  )
  values (
    new.id, derived_email, candidate_username, derived_name, derived_preset, derived_avatar,
    'roadmap', 'starter', 'py-basic', 1
  )
  on conflict (id) do update
    set email = coalesce(public.profiles.email, excluded.email),
        username = coalesce(public.profiles.username, excluded.username),
        avatar_url = coalesce(public.profiles.avatar_url, excluded.avatar_url);

  return new;
end;
$$;

revoke execute on function public.handle_new_user() from public, anon, authenticated;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

create or replace function public.handle_auth_user_email_updated()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  if new.email is distinct from old.email and new.email is not null then
    update public.profiles
    set email = lower(trim(new.email))
    where id = new.id;
  end if;
  return new;
end;
$$;

revoke execute on function public.handle_auth_user_email_updated() from public, anon, authenticated;

drop trigger if exists on_auth_user_email_updated on auth.users;
create trigger on_auth_user_email_updated
  after update of email on auth.users
  for each row execute function public.handle_auth_user_email_updated();

-- 6-3) 문제풀이 및 코드타자 변경 시 profiles 집계 동기화 트리거
create or replace function public.sync_profile_stats()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  target_user_id uuid;
  v_solved integer := 0;
  v_best_cpm integer := 0;
  v_best_acc numeric(5,2) := 0.00;
  v_best_typing_lang text := null;
begin
  target_user_id := coalesce(new.user_id, old.user_id);
  if target_user_id is null then
    return coalesce(new, old);
  end if;

  select count(*)
  into v_solved
  from public.user_problem_solves
  where user_id = target_user_id;

  select
    coalesce(r.best_cpm, 0),
    coalesce(r.best_accuracy, 0.00),
    r.language
  into v_best_cpm, v_best_acc, v_best_typing_lang
  from public.user_speed_records r
  where r.user_id = target_user_id
  order by r.best_cpm desc, r.best_accuracy desc
  limit 1;

  v_best_cpm := coalesce(v_best_cpm, 0);
  v_best_acc := coalesce(v_best_acc, 0.00);

  update public.profiles p
  set
    solved_problems_count = coalesce(v_solved, 0),
    best_typing_cpm = v_best_cpm,
    best_typing_accuracy = v_best_acc,
    best_typing_language = coalesce(v_best_typing_lang, p.best_typing_language, 'python')
  where p.id = target_user_id;

  return coalesce(new, old);
end;
$$;

revoke execute on function public.sync_profile_stats() from public, anon, authenticated;

create trigger sync_profile_on_problem_solve
  after insert or update or delete on public.user_problem_solves
  for each row execute function public.sync_profile_stats();

create trigger sync_profile_on_speed_record
  after insert or update or delete on public.user_speed_records
  for each row execute function public.sync_profile_stats();

-- 6-4) 코드타자 언어별 리더보드 뷰 (security_invoker = true, 관리자 계정 제외)
create view public.speed_language_leaderboard
with (security_invoker = true)
as
select
  best.user_id as id,
  best.language,
  best.best_cpm,
  best.best_accuracy,
  best.updated_at,
  p.email,
  p.username,
  p.display_name,
  p.role,
  p.avatar_preset,
  p.avatar_url,
  p.primary_language,
  p.cleared_levels_count,
  p.solved_problems_count,
  p.current_streak,
  p.longest_streak,
  p.total_attendance_days,
  p.last_attended_date,
  p.activity_score,
  p.best_typing_cpm,
  p.best_typing_accuracy,
  p.best_typing_language
from (
  select distinct on (r.user_id, r.language)
    r.user_id,
    r.language,
    r.best_cpm,
    r.best_accuracy,
    r.updated_at
  from public.user_speed_records r
  where r.best_cpm > 0
  order by r.user_id, r.language, r.best_cpm desc, r.best_accuracy desc
) best
join public.profiles p on p.id = best.user_id
where p.role not in ('super_admin', 'org_admin');

-- 6-5) 인증 및 비누적 진도/출석 RPC 함수
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

create or replace function public.check_email_available(p_email text)
returns boolean
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_clean text;
begin
  v_clean := lower(trim(coalesce(p_email, '')));
  if position('@' in v_clean) <= 1 or position('.' in split_part(v_clean, '@', 2)) <= 1 then
    return false;
  end if;

  if exists (select 1 from public.profiles p where lower(p.email) = v_clean) then
    return false;
  end if;

  if exists (select 1 from auth.users u where lower(u.email) = v_clean) then
    return false;
  end if;

  return true;
end;
$$;

revoke execute on function public.check_email_available(text) from public;
grant execute on function public.check_email_available(text) to anon, authenticated;

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

create or replace function public.record_daily_attendance()
returns public.profiles
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_uid uuid := (select auth.uid());
  v_today date := (now() at time zone 'Asia/Seoul')::date;
  v_row public.profiles;
begin
  if v_uid is null then
    raise exception 'Authentication required';
  end if;

  update public.profiles p
  set
    current_streak = case
      when p.last_attended_date = v_today then greatest(p.current_streak, 1)
      when p.last_attended_date is not null
       and p.last_attended_date >= (v_today - 7)
       and p.last_attended_date < v_today
        then p.current_streak + 1
      else 1
    end,
    longest_streak = case
      when p.last_attended_date = v_today then greatest(p.longest_streak, p.current_streak, 1)
      when p.last_attended_date is not null
       and p.last_attended_date >= (v_today - 7)
       and p.last_attended_date < v_today
        then greatest(p.longest_streak, p.current_streak + 1)
      else greatest(p.longest_streak, 1)
    end,
    total_attendance_days = case
      when p.last_attended_date = v_today then greatest(p.total_attendance_days, 1)
      else p.total_attendance_days + 1
    end,
    last_attended_date = v_today
  where p.id = v_uid
  returning * into v_row;

  return v_row;
end;
$$;

revoke execute on function public.record_daily_attendance() from public, anon;
grant execute on function public.record_daily_attendance() to authenticated;

create or replace function public.record_level_cleared(
  p_track_id text,
  p_level_number integer
)
returns public.profiles
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_uid uuid := (select auth.uid());
  v_track text := public.normalize_track_key(p_track_id);
  v_today date := (now() at time zone 'Asia/Seoul')::date;
  v_max_lvl integer := public.get_track_total_levels(v_track);
  v_patch jsonb;
  v_row public.profiles;
begin
  if v_uid is null then
    raise exception 'Authentication required';
  end if;

  if v_track = '' or p_level_number is null or p_level_number < 1 or p_level_number > 500 then
    raise exception 'Invalid track_id or level_number';
  end if;

  v_patch := jsonb_build_object(v_track, jsonb_build_array(p_level_number));

  update public.profiles p
  set
    cleared_levels = public.merge_jsonb_cleared_levels(p.cleared_levels, v_patch),
    current_track_id = v_track,
    current_level = least(v_max_lvl, greatest(p.current_level, p_level_number + 1)),
    primary_language = public.derive_primary_language_from_cleared(
      public.merge_jsonb_cleared_levels(p.cleared_levels, v_patch),
      p.primary_language
    ),
    current_streak = case
      when p.last_attended_date = v_today then greatest(p.current_streak, 1)
      when p.last_attended_date is not null
       and p.last_attended_date >= (v_today - 7)
       and p.last_attended_date < v_today
        then p.current_streak + 1
      else 1
    end,
    longest_streak = case
      when p.last_attended_date = v_today then greatest(p.longest_streak, p.current_streak, 1)
      when p.last_attended_date is not null
       and p.last_attended_date >= (v_today - 7)
       and p.last_attended_date < v_today
        then greatest(p.longest_streak, p.current_streak + 1)
      else greatest(p.longest_streak, 1)
    end,
    total_attendance_days = case
      when p.last_attended_date = v_today then greatest(p.total_attendance_days, 1)
      else p.total_attendance_days + 1
    end,
    last_attended_date = v_today
  where p.id = v_uid
  returning * into v_row;

  return v_row;
end;
$$;

revoke execute on function public.record_level_cleared(text, integer) from public, anon;
grant execute on function public.record_level_cleared(text, integer) to authenticated;

create or replace function public.sync_cleared_levels(
  p_client_levels jsonb default '{}'::jsonb,
  p_ack_reset_at timestamptz default null
)
returns public.profiles
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_uid uuid := (select auth.uid());
  v_today date := (now() at time zone 'Asia/Seoul')::date;
  v_row public.profiles;
begin
  if v_uid is null then
    raise exception 'Authentication required';
  end if;

  update public.profiles p
  set
    cleared_levels = case
      when p.progress_reset_at is not null
       and (p_ack_reset_at is null or p.progress_reset_at > p_ack_reset_at)
        then p.cleared_levels
      else public.merge_jsonb_cleared_levels(p.cleared_levels, coalesce(p_client_levels, '{}'::jsonb))
    end,
    primary_language = public.derive_primary_language_from_cleared(
      case
        when p.progress_reset_at is not null
         and (p_ack_reset_at is null or p.progress_reset_at > p_ack_reset_at)
          then p.cleared_levels
        else public.merge_jsonb_cleared_levels(p.cleared_levels, coalesce(p_client_levels, '{}'::jsonb))
      end,
      p.primary_language
    ),
    current_streak = case
      when p.last_attended_date = v_today then greatest(p.current_streak, 1)
      when p.last_attended_date is not null
       and p.last_attended_date >= (v_today - 7)
       and p.last_attended_date < v_today
        then p.current_streak + 1
      else 1
    end,
    longest_streak = case
      when p.last_attended_date = v_today then greatest(p.longest_streak, p.current_streak, 1)
      when p.last_attended_date is not null
       and p.last_attended_date >= (v_today - 7)
       and p.last_attended_date < v_today
        then greatest(p.longest_streak, p.current_streak + 1)
      else greatest(p.longest_streak, 1)
    end,
    total_attendance_days = case
      when p.last_attended_date = v_today then greatest(p.total_attendance_days, 1)
      else p.total_attendance_days + 1
    end,
    last_attended_date = v_today
  where p.id = v_uid
  returning * into v_row;

  return v_row;
end;
$$;

revoke execute on function public.sync_cleared_levels(jsonb, timestamptz) from public, anon;
grant execute on function public.sync_cleared_levels(jsonb, timestamptz) to authenticated;

create or replace function public.update_learning_context(
  p_curriculum_type text default null,
  p_curriculum_id text default null,
  p_track_id text default null,
  p_level integer default null
)
returns public.profiles
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_uid uuid := (select auth.uid());
  v_row public.profiles;
begin
  if v_uid is null then
    raise exception 'Authentication required';
  end if;

  update public.profiles p
  set
    active_curriculum_type = case
      when p_curriculum_type in ('roadmap', 'language') then p_curriculum_type
      else p.active_curriculum_type
    end,
    active_curriculum_id = coalesce(nullif(trim(coalesce(p_curriculum_id, '')), ''), p.active_curriculum_id),
    current_track_id = case
      when p_track_id is not null and trim(p_track_id) <> '' then public.normalize_track_key(p_track_id)
      else p.current_track_id
    end,
    current_level = case
      when p_level is not null and p_level between 1 and 500 then p_level
      else p.current_level
    end
  where p.id = v_uid
  returning * into v_row;

  return v_row;
end;
$$;

revoke execute on function public.update_learning_context(text, text, text, integer) from public, anon;
grant execute on function public.update_learning_context(text, text, text, integer) to authenticated;

create or replace function public.get_admin_section_feedbacks()
returns table (
  user_id uuid,
  track_id text,
  section_number integer,
  rating smallint,
  difficulty text,
  tags text[],
  comment text,
  created_at timestamptz,
  updated_at timestamptz,
  username text,
  display_name text,
  avatar_preset text,
  avatar_url text
)
language plpgsql
security definer
set search_path = ''
as $$
begin
  if (select auth.uid()) is null then
    raise exception 'Authentication required';
  end if;

  return query
  select
    sf.user_id,
    sf.track_id,
    sf.section_number,
    sf.rating,
    sf.difficulty,
    sf.tags,
    sf.comment,
    sf.created_at,
    sf.updated_at,
    p.username,
    p.display_name,
    p.avatar_preset,
    p.avatar_url
  from public.section_feedbacks sf
  left join public.profiles p on p.id = sf.user_id
  order by sf.updated_at desc;
end;
$$;

revoke all on function public.get_admin_section_feedbacks() from public, anon;
grant execute on function public.get_admin_section_feedbacks() to authenticated;

-- 6-6) LMS 권한 헬퍼 및 강사 전용 RPC 함수
create or replace function public.is_classroom_instructor_or_org_owner(p_classroom_id uuid)
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1
    from public.classrooms c
    left join public.organizations o on o.id = c.org_id
    where c.id = p_classroom_id
      and (
        c.instructor_id = (select auth.uid())
        or o.owner_id = (select auth.uid())
      )
  );
$$;

revoke execute on function public.is_classroom_instructor_or_org_owner(uuid) from public, anon;
grant execute on function public.is_classroom_instructor_or_org_owner(uuid) to authenticated;

create or replace function public.is_classroom_student(p_classroom_id uuid)
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1
    from public.classroom_members cm
    where cm.classroom_id = p_classroom_id
      and cm.student_id = (select auth.uid())
  );
$$;

revoke execute on function public.is_classroom_student(uuid) from public, anon;
grant execute on function public.is_classroom_student(uuid) to authenticated;

create or replace function public.is_org_instructor(p_org_id uuid)
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1
    from public.classrooms c
    where c.org_id = p_org_id
      and c.instructor_id = (select auth.uid())
  );
$$;

revoke execute on function public.is_org_instructor(uuid) from public, anon;
grant execute on function public.is_org_instructor(uuid) to authenticated;

create or replace function public.assign_student_to_classroom(
  p_classroom_id uuid,
  p_identifier text,
  p_student_label text default null
)
returns uuid
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_uid uuid := (select auth.uid());
  v_clean text := lower(trim(coalesce(p_identifier, '')));
  v_student_id uuid;
begin
  if v_uid is null then
    raise exception 'Authentication required';
  end if;

  if not public.is_classroom_instructor_or_org_owner(p_classroom_id) then
    raise exception 'FORBIDDEN: 해당 학급의 담당 강사만 학생을 배정할 수 있습니다.';
  end if;

  select p.id
  into v_student_id
  from public.profiles p
  where lower(p.username) = v_clean
     or lower(p.email) = v_clean
  limit 1;

  if v_student_id is null then
    raise exception 'STUDENT_NOT_FOUND: 입력한 아이디 또는 이메일을 가진 학생을 찾을 수 없습니다.';
  end if;

  insert into public.classroom_members (classroom_id, student_id, student_label)
  values (p_classroom_id, v_student_id, nullif(trim(coalesce(p_student_label, '')), ''))
  on conflict (classroom_id, student_id) do update
    set student_label = coalesce(excluded.student_label, public.classroom_members.student_label);

  return v_student_id;
end;
$$;

revoke execute on function public.assign_student_to_classroom(uuid, text, text) from public, anon;
grant execute on function public.assign_student_to_classroom(uuid, text, text) to authenticated;

create or replace function public.get_classroom_students_progress(p_classroom_id uuid)
returns table (
  student_id uuid,
  student_label text,
  joined_at timestamptz,
  username text,
  email text,
  display_name text,
  avatar_preset text,
  avatar_url text,
  active_curriculum_type text,
  active_curriculum_id text,
  current_track_id text,
  current_level integer,
  cleared_levels jsonb,
  completed_tracks text[],
  cleared_levels_count integer,
  solved_problems_count integer,
  current_streak integer,
  longest_streak integer,
  total_attendance_days integer,
  last_attended_date date,
  best_typing_cpm integer,
  best_typing_accuracy numeric(5,2),
  activity_score integer,
  progress_reset_at timestamptz
)
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_uid uuid := (select auth.uid());
begin
  if v_uid is null then
    raise exception 'Authentication required';
  end if;

  if not public.is_classroom_instructor_or_org_owner(p_classroom_id) then
    raise exception 'FORBIDDEN: 해당 학급의 담당 강사만 조회할 수 있습니다.';
  end if;

  return query
  select
    cm.student_id,
    cm.student_label,
    cm.joined_at,
    p.username,
    p.email,
    p.display_name,
    p.avatar_preset,
    p.avatar_url,
    p.active_curriculum_type,
    p.active_curriculum_id,
    p.current_track_id,
    p.current_level,
    p.cleared_levels,
    p.completed_tracks,
    p.cleared_levels_count,
    p.solved_problems_count,
    p.current_streak,
    p.longest_streak,
    p.total_attendance_days,
    p.last_attended_date,
    p.best_typing_cpm,
    p.best_typing_accuracy,
    p.activity_score,
    p.progress_reset_at
  from public.classroom_members cm
  join public.profiles p on p.id = cm.student_id
  where cm.classroom_id = p_classroom_id
  order by coalesce(cm.student_label, p.display_name) asc, cm.joined_at asc;
end;
$$;

revoke execute on function public.get_classroom_students_progress(uuid) from public, anon;
grant execute on function public.get_classroom_students_progress(uuid) to authenticated;

create or replace function public.set_student_learning_level(
  p_student_id uuid,
  p_track_id text,
  p_target_level integer default 1
)
returns public.profiles
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_uid uuid := (select auth.uid());
  v_track text := public.normalize_track_key(p_track_id);
  v_max_lvl integer := public.get_track_total_levels(v_track);
  v_target integer := greatest(1, least(v_max_lvl, coalesce(p_target_level, 1)));
  v_is_authorized boolean := false;
  v_new_arr jsonb;
  v_row public.profiles;
begin
  if v_uid is null then
    raise exception 'Authentication required';
  end if;

  if v_track = '' then
    raise exception 'Invalid track_id';
  end if;

  select (
    v_uid = p_student_id
    or exists (
      select 1 from public.profiles adm
      where adm.id = v_uid
        and (adm.role = 'super_admin' or lower(adm.username) = 'admin')
    )
    or exists (
      select 1
      from public.classroom_members cm
      join public.classrooms c on c.id = cm.classroom_id
      left join public.organizations o on o.id = c.org_id
      where cm.student_id = p_student_id
        and (c.instructor_id = v_uid or o.owner_id = v_uid)
    )
  )
  into v_is_authorized;

  if not v_is_authorized then
    raise exception 'FORBIDDEN: 관리자 또는 담당 강사만 학생의 학습 레벨을 초기화하거나 지정할 수 있습니다.';
  end if;

  if v_target <= 1 then
    v_new_arr := '[]'::jsonb;
  else
    select jsonb_agg(n order by n)
    into v_new_arr
    from generate_series(1, v_target - 1) as n;
  end if;

  update public.profiles p
  set
    cleared_levels = case
      when v_target <= 1 then (coalesce(p.cleared_levels, '{}'::jsonb) - v_track)
      else jsonb_set(coalesce(p.cleared_levels, '{}'::jsonb), array[v_track], v_new_arr, true)
    end,
    current_track_id = v_track,
    current_level = v_target,
    progress_reset_at = now()
  where p.id = p_student_id
  returning * into v_row;

  if v_row.id is null then
    raise exception 'STUDENT_NOT_FOUND: 대상 학생 프로필을 찾을 수 없습니다.';
  end if;

  return v_row;
end;
$$;

revoke execute on function public.set_student_learning_level(uuid, text, integer) from public, anon;
grant execute on function public.set_student_learning_level(uuid, text, integer) to authenticated;

-- -----------------------------------------------------------------------------
-- 7. Data API 권한 부여, RLS(Row Level Security) 및 아바타 Storage 버킷 구성
-- -----------------------------------------------------------------------------
grant usage on schema public to anon, authenticated;

revoke update on public.profiles from authenticated;
grant select on public.profiles to anon, authenticated;
grant insert on public.profiles to authenticated;
grant update (
  display_name, username, email, avatar_preset, avatar_url, primary_language,
  active_curriculum_type, active_curriculum_id, current_track_id, current_level
) on public.profiles to authenticated;

grant select, insert, update, delete on public.user_problem_solves to authenticated;
grant select on public.user_speed_records to anon, authenticated;
grant insert, update on public.user_speed_records to authenticated;
grant select on public.speed_language_leaderboard to anon, authenticated;
grant select, insert, update on public.section_feedbacks to authenticated;
grant select, insert, update, delete on public.user_saved_snippets to authenticated;

grant select, insert, update, delete on public.organizations to authenticated;
grant select, insert, update, delete on public.classrooms to authenticated;
grant select, insert, update, delete on public.classroom_members to authenticated;

alter table public.profiles enable row level security;
alter table public.user_problem_solves enable row level security;
alter table public.user_speed_records enable row level security;
alter table public.section_feedbacks enable row level security;
alter table public.user_saved_snippets enable row level security;
alter table public.organizations enable row level security;
alter table public.classrooms enable row level security;
alter table public.classroom_members enable row level security;

-- profiles RLS
drop policy if exists "profiles_select_public" on public.profiles;
create policy "profiles_select_public"
  on public.profiles for select to anon, authenticated
  using (true);

drop policy if exists "profiles_insert_own" on public.profiles;
create policy "profiles_insert_own"
  on public.profiles for insert to authenticated
  with check ((select auth.uid()) = id);

drop policy if exists "profiles_update_own" on public.profiles;
create policy "profiles_update_own"
  on public.profiles for update to authenticated
  using ((select auth.uid()) = id)
  with check ((select auth.uid()) = id);

-- user_problem_solves RLS
drop policy if exists "problem_solves_select_own" on public.user_problem_solves;
create policy "problem_solves_select_own"
  on public.user_problem_solves for select to authenticated
  using ((select auth.uid()) = user_id);

drop policy if exists "problem_solves_insert_own" on public.user_problem_solves;
create policy "problem_solves_insert_own"
  on public.user_problem_solves for insert to authenticated
  with check ((select auth.uid()) = user_id);

drop policy if exists "problem_solves_update_own" on public.user_problem_solves;
create policy "problem_solves_update_own"
  on public.user_problem_solves for update to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

drop policy if exists "problem_solves_delete_own" on public.user_problem_solves;
create policy "problem_solves_delete_own"
  on public.user_problem_solves for delete to authenticated
  using ((select auth.uid()) = user_id);

-- user_speed_records RLS
drop policy if exists "speed_records_select_own" on public.user_speed_records;
drop policy if exists "speed_records_select_public" on public.user_speed_records;
create policy "speed_records_select_public"
  on public.user_speed_records for select to anon, authenticated
  using (true);

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

-- user_saved_snippets RLS
drop policy if exists "snippets_select_own" on public.user_saved_snippets;
create policy "snippets_select_own"
  on public.user_saved_snippets for select to authenticated
  using ((select auth.uid()) = user_id);

drop policy if exists "snippets_insert_own" on public.user_saved_snippets;
create policy "snippets_insert_own"
  on public.user_saved_snippets for insert to authenticated
  with check ((select auth.uid()) = user_id);

drop policy if exists "snippets_update_own" on public.user_saved_snippets;
create policy "snippets_update_own"
  on public.user_saved_snippets for update to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

drop policy if exists "snippets_delete_own" on public.user_saved_snippets;
create policy "snippets_delete_own"
  on public.user_saved_snippets for delete to authenticated
  using ((select auth.uid()) = user_id);

-- organizations / classrooms / classroom_members RLS
drop policy if exists "organizations_select_member_or_owner" on public.organizations;
create policy "organizations_select_member_or_owner"
  on public.organizations for select to authenticated
  using (
    owner_id = (select auth.uid())
    or public.is_org_instructor(id)
  );

drop policy if exists "organizations_insert_owner" on public.organizations;
create policy "organizations_insert_owner"
  on public.organizations for insert to authenticated
  with check (owner_id = (select auth.uid()));

drop policy if exists "organizations_update_owner" on public.organizations;
create policy "organizations_update_owner"
  on public.organizations for update to authenticated
  using (owner_id = (select auth.uid()))
  with check (owner_id = (select auth.uid()));

drop policy if exists "organizations_delete_owner" on public.organizations;
create policy "organizations_delete_owner"
  on public.organizations for delete to authenticated
  using (owner_id = (select auth.uid()));

drop policy if exists "classrooms_select_related" on public.classrooms;
create policy "classrooms_select_related"
  on public.classrooms for select to authenticated
  using (
    instructor_id = (select auth.uid())
    or public.is_classroom_student(id)
    or public.is_classroom_instructor_or_org_owner(id)
  );

drop policy if exists "classrooms_insert_instructor" on public.classrooms;
create policy "classrooms_insert_instructor"
  on public.classrooms for insert to authenticated
  with check (instructor_id = (select auth.uid()));

drop policy if exists "classrooms_update_instructor" on public.classrooms;
create policy "classrooms_update_instructor"
  on public.classrooms for update to authenticated
  using (instructor_id = (select auth.uid()))
  with check (instructor_id = (select auth.uid()));

drop policy if exists "classrooms_delete_instructor" on public.classrooms;
create policy "classrooms_delete_instructor"
  on public.classrooms for delete to authenticated
  using (instructor_id = (select auth.uid()));

drop policy if exists "classroom_members_select_related" on public.classroom_members;
create policy "classroom_members_select_related"
  on public.classroom_members for select to authenticated
  using (
    student_id = (select auth.uid())
    or public.is_classroom_instructor_or_org_owner(classroom_id)
  );

drop policy if exists "classroom_members_insert_instructor_or_self" on public.classroom_members;
create policy "classroom_members_insert_instructor_or_self"
  on public.classroom_members for insert to authenticated
  with check (
    student_id = (select auth.uid())
    or public.is_classroom_instructor_or_org_owner(classroom_id)
  );

drop policy if exists "classroom_members_update_instructor" on public.classroom_members;
create policy "classroom_members_update_instructor"
  on public.classroom_members for update to authenticated
  using (public.is_classroom_instructor_or_org_owner(classroom_id))
  with check (public.is_classroom_instructor_or_org_owner(classroom_id));

drop policy if exists "classroom_members_delete_instructor_or_self" on public.classroom_members;
create policy "classroom_members_delete_instructor_or_self"
  on public.classroom_members for delete to authenticated
  using (
    student_id = (select auth.uid())
    or public.is_classroom_instructor_or_org_owner(classroom_id)
  );

-- 아바타(avatars) Storage 공개 버킷 및 RLS
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
  on storage.objects for select to anon, authenticated
  using (bucket_id = 'avatars');

drop policy if exists "avatars_insert_own" on storage.objects;
create policy "avatars_insert_own"
  on storage.objects for insert to authenticated
  with check (
    bucket_id = 'avatars'
    and (storage.foldername(name))[1] = (select auth.uid())::text
  );

drop policy if exists "avatars_update_own" on storage.objects;
create policy "avatars_update_own"
  on storage.objects for update to authenticated
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
  on storage.objects for delete to authenticated
  using (
    bucket_id = 'avatars'
    and (storage.foldername(name))[1] = (select auth.uid())::text
  );

notify pgrst, 'reload schema';

commit;
