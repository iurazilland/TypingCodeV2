-- =============================================================================
-- TypingCode V2.2 — Per-Language Speed Coding Leaderboard, Online Judge Code
--                   Persistence & Compiler Cloud Saved Snippets Migration
-- =============================================================================
-- 사용법:
--   1. Supabase Dashboard (https://supabase.com/dashboard) -> 프로젝트 선택
--   2. 좌측 메뉴 [SQL Editor] -> [New query] 클릭
--   3. 본 파일 전체 내용을 붙여넣고 우측 하단 [Run] 클릭
--
-- 핵심 변경점:
--   1) 리더보드(코드타자 언어별 랭킹):
--      - profiles.best_typing_language 컬럼 추가 및 sync_profile_stats() 트리거 연동
--      - user_speed_records 공개 조회(SELECT) 정책 및 복합 인덱스 추가
--      - 언어별 최고 타수 집계 뷰(public.speed_language_leaderboard, security_invoker=true) 생성
--   2) 문제풀이(미니 온라인 저지):
--      - user_problem_solves 에 통과 코드(submitted_code), 실행시간(execution_ms),
--        언어별 통과 코드 맵(solutions_by_lang) 추가 및 본인 UPDATE 정책 부여
--   3) 컴파일러(내 코드 DB 저장소):
--      - user_saved_snippets 테이블 신설 및 본인 전용 RLS(SELECT/INSERT/UPDATE/DELETE) 구성
-- =============================================================================

begin;

-- -----------------------------------------------------------------------------
-- 1. profiles.best_typing_language 추가 및 기존 기록 백필
-- -----------------------------------------------------------------------------
alter table public.profiles
  add column if not exists best_typing_language text not null default 'python';

alter table public.profiles
  drop constraint if exists profiles_best_typing_lang_chk;

alter table public.profiles
  add constraint profiles_best_typing_lang_chk
    check (char_length(trim(best_typing_language)) between 1 and 30);

-- 기존 user_speed_records 가 있다면 최고 타수 언어로 즉시 백필
update public.profiles p
set best_typing_language = sub.language
from (
  select distinct on (r.user_id)
    r.user_id,
    r.language
  from public.user_speed_records r
  order by r.user_id, r.best_cpm desc, r.best_accuracy desc
) sub
where p.id = sub.user_id;

-- -----------------------------------------------------------------------------
-- 2. 코드타자 언어별 리더보드: user_speed_records 공개 조회 + security_invoker 뷰
-- -----------------------------------------------------------------------------
create index if not exists user_speed_records_lang_cpm_idx
  on public.user_speed_records (language, best_cpm desc, best_accuracy desc);

grant select on public.user_speed_records to anon, authenticated;

drop policy if exists "speed_records_select_own" on public.user_speed_records;
drop policy if exists "speed_records_select_public" on public.user_speed_records;

create policy "speed_records_select_public"
  on public.user_speed_records
  for select
  to anon, authenticated
  using (true);

create or replace view public.speed_language_leaderboard
with (security_invoker = true)
as
select
  best.user_id as id,
  best.language,
  best.best_cpm,
  best.best_accuracy,
  best.updated_at,
  p.username,
  p.display_name,
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
join public.profiles p on p.id = best.user_id;

grant select on public.speed_language_leaderboard to anon, authenticated;

-- -----------------------------------------------------------------------------
-- 3. sync_profile_stats() 트리거 업데이트 (best_typing_language 자동 반영)
-- -----------------------------------------------------------------------------
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
  v_best_typing_lang text := null;
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

  -- 3) 출석 일수 & 연속 스트릭 계산
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

  -- 4) 코드타자 최고 타수 · 정확도 · 언어
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
    best_typing_language = coalesce(v_best_typing_lang, best_typing_language, 'python'),
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

-- -----------------------------------------------------------------------------
-- 4. user_problem_solves 확장 (통과 코드 및 언어별 풀이 맵 저장 + UPDATE RLS)
-- -----------------------------------------------------------------------------
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

grant select, insert, update, delete on public.user_problem_solves to authenticated;

drop policy if exists "problem_solves_update_own" on public.user_problem_solves;
create policy "problem_solves_update_own"
  on public.user_problem_solves
  for update
  to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

-- -----------------------------------------------------------------------------
-- 5. 컴파일러(자유코딩) 내 코드 저장소: public.user_saved_snippets
-- -----------------------------------------------------------------------------
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

drop trigger if exists set_user_saved_snippets_updated_at on public.user_saved_snippets;
create trigger set_user_saved_snippets_updated_at
  before update on public.user_saved_snippets
  for each row execute function public.set_updated_at();

grant select, insert, update, delete on public.user_saved_snippets to authenticated;

alter table public.user_saved_snippets enable row level security;

drop policy if exists "snippets_select_own" on public.user_saved_snippets;
create policy "snippets_select_own"
  on public.user_saved_snippets
  for select
  to authenticated
  using ((select auth.uid()) = user_id);

drop policy if exists "snippets_insert_own" on public.user_saved_snippets;
create policy "snippets_insert_own"
  on public.user_saved_snippets
  for insert
  to authenticated
  with check ((select auth.uid()) = user_id);

drop policy if exists "snippets_update_own" on public.user_saved_snippets;
create policy "snippets_update_own"
  on public.user_saved_snippets
  for update
  to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

drop policy if exists "snippets_delete_own" on public.user_saved_snippets;
create policy "snippets_delete_own"
  on public.user_saved_snippets
  for delete
  to authenticated
  using ((select auth.uid()) = user_id);

notify pgrst, 'reload schema';

commit;
