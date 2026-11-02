-- =============================================================================
-- TypingCode V2.3 — Admin Section Feedback Survey Dashboard RPC & Index
-- =============================================================================
-- 사용법:
--   1. Supabase Dashboard (https://supabase.com/dashboard) -> 프로젝트 선택
--   2. 좌측 메뉴 [SQL Editor] -> [New query] 클릭
--   3. 본 파일 전체 내용을 붙여넣고 우측 하단 [Run] 클릭
--
-- 핵심 변경점:
--   1) section_feedbacks 대시보드 조회 성능용 복합 인덱스 추가
--   2) 관리자 대시보드(/admin/feedbacks)에서 전체 섹션 설문 응답과 작성자 프로필
--      (username, display_name, avatar_preset, avatar_url)을 함께 조회하는
--      보안 RPC 함수(public.get_admin_section_feedbacks) 생성
-- =============================================================================

begin;

-- 1. 대시보드 정렬 및 필터링용 복합 인덱스
create index if not exists section_feedbacks_updated_at_idx
  on public.section_feedbacks (updated_at desc);

create index if not exists section_feedbacks_track_sec_idx
  on public.section_feedbacks (track_id, section_number, updated_at desc);

-- 2. 관리자 설문 대시보드 조회용 RPC (profiles 조인 포함)
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

commit;
