import type { UserProfile } from '@/lib/supabase/types';
import { decodeAvatarPresetAndBadge } from '@/lib/avatarPresets';

export type BadgeCategory =
  | 'overall'
  | 'language'
  | 'streak'
  | 'solver'
  | 'speed';

export interface BadgeStatus {
  id: string;
  category: BadgeCategory;
  icon: string;
  titleKo: string;
  titleEn: string;
  descKo: string;
  descEn: string;
  color: string;
  unlocked: boolean;
  progressText: string;
}

export const BADGE_CATEGORY_TABS: ReadonlyArray<{
  id: 'all' | BadgeCategory;
  labelKo: string;
  labelEn: string;
}> = [
  { id: 'all', labelKo: '전체', labelEn: 'All' },
  { id: 'overall', labelKo: '🌟 전체 과정', labelEn: '🌟 Overall' },
  { id: 'language', labelKo: '💻 언어별', labelEn: '💻 Languages' },
  { id: 'streak', labelKo: '🔥 출석·끈기', labelEn: '🔥 Streak' },
  { id: 'solver', labelKo: '🧩 문제풀이', labelEn: '🧩 Problems' },
  { id: 'speed', labelKo: '⌨️ 코드타자·점수', labelEn: '⌨️ Speed & Score' },
];

function countClearedForPrefixes(
  clearedMap: Record<string, number[]>,
  prefixes: string[]
): number {
  let sum = 0;
  for (const [trackKey, arr] of Object.entries(clearedMap)) {
    const cleanKey = trackKey.toLowerCase();
    if (prefixes.some((p) => cleanKey === p || cleanKey.startsWith(p))) {
      sum += Array.isArray(arr) ? arr.length : 0;
    }
  }
  return sum;
}

function countDistinctLanguagesStarted(
  clearedMap: Record<string, number[]>,
  fallbackClearedCount: number
): number {
  const families = new Set<string>();
  for (const [trackKey, arr] of Object.entries(clearedMap)) {
    if (!Array.isArray(arr) || arr.length === 0) continue;
    const k = trackKey.toLowerCase();
    if (k.startsWith('py')) families.add('python');
    else if (k.startsWith('cpp')) families.add('cpp');
    else if (k.startsWith('cs')) families.add('csharp');
    else if (k === 'c' || k.startsWith('c-')) families.add('c');
    else if (k.startsWith('web')) families.add('web');
    else if (k.startsWith('js')) families.add('javascript');
    else if (k.startsWith('java')) families.add('java');
    else if (k.startsWith('sql')) families.add('sql');
    else if (k.startsWith('go')) families.add('go');
    else if (k.startsWith('rust')) families.add('rust');
    else if (k.startsWith('swift')) families.add('swift');
    else if (k.startsWith('linux')) families.add('linux');
    else families.add(k);
  }
  if (families.size === 0 && fallbackClearedCount > 0) {
    return 1;
  }
  return families.size;
}

export function evaluateUserBadges(
  profile: Partial<UserProfile> | null | undefined
): BadgeStatus[] {
  const clearedMap: Record<string, number[]> =
    profile?.cleared_levels && typeof profile.cleared_levels === 'object'
      ? profile.cleared_levels
      : {};
  const mapTotal = Object.values(clearedMap).reduce(
    (acc, arr) => acc + (Array.isArray(arr) ? arr.length : 0),
    0
  );
  const cleared = Math.max(profile?.cleared_levels_count || 0, mapTotal);
  const solved = profile?.solved_problems_count || 0;
  const longestStreak = Math.max(
    profile?.longest_streak || 0,
    profile?.current_streak || 0
  );
  const totalDays = Math.max(profile?.total_attendance_days || 0, longestStreak);
  const speedCpm = profile?.best_typing_cpm || 0;
  const speedAcc = Number(profile?.best_typing_accuracy || 0);
  const bestTypingLang = (profile?.best_typing_language || '').toLowerCase();
  const activityScore =
    profile?.activity_score ?? cleared * 100 + solved * 150;

  // Per-language cleared counts across all modules of each language track
  const rawPyCount = countClearedForPrefixes(clearedMap, ['py-', 'python']);
  const pyBasicCount =
    (clearedMap['py-basic']?.length || 0) ||
    (mapTotal === 0 ? Math.min(cleared, 113) : rawPyCount);
  const pyTotalCount = Math.max(rawPyCount, pyBasicCount);

  const cCount = countClearedForPrefixes(clearedMap, ['c-']);
  const cppCount = countClearedForPrefixes(clearedMap, ['cpp-']);
  const webCount = countClearedForPrefixes(clearedMap, ['web-']);
  const jsCount = countClearedForPrefixes(clearedMap, ['js-']);
  const javaCount = countClearedForPrefixes(clearedMap, ['java-']);
  const sqlCount = countClearedForPrefixes(clearedMap, ['sql-']);
  const goCount = countClearedForPrefixes(clearedMap, ['go-']);
  const rustCount = countClearedForPrefixes(clearedMap, ['rust-']);
  const csCount = countClearedForPrefixes(clearedMap, ['cs-']);
  const swiftCount = countClearedForPrefixes(clearedMap, ['swift-']);
  const linuxCount = countClearedForPrefixes(clearedMap, ['linux-']);

  const distinctLangs = countDistinctLanguagesStarted(clearedMap, cleared);

  // Helper: starter language badge unlocks via 10 levels in that language OR 200+ CPM in Code Typing for that language
  const hasTypingLangCpm = (langKeys: string[], minCpm = 200) =>
    speedCpm >= minCpm && langKeys.some((k) => bestTypingLang.includes(k));

  return [
    // =========================================================================
    // 1. 🌟 전체 과정 · 종합 업적 (Overall Curriculum — 828 Total Levels)
    // =========================================================================
    {
      id: 'rookie',
      category: 'overall',
      icon: '🌱',
      titleKo: '헬로 월드 뉴비',
      titleEn: 'Hello World Newbie',
      descKo: '코딩 세계에 첫발을 디딘 모험가 (기본 지급)',
      descEn: 'Stepped into the coding world (Default)',
      color: '#059669',
      unlocked: true,
      progressText: '1 / 1',
    },
    {
      id: 'first_clear',
      category: 'overall',
      icon: '🐣',
      titleKo: '일단 실행부터 눌러봄',
      titleEn: 'Pressed Run First',
      descKo: '전체 과정 중 첫 번째 레벨 클리어',
      descEn: 'Clear your very first level in any course',
      color: '#10b981',
      unlocked: cleared >= 1,
      progressText: `${Math.min(cleared, 1)} / 1`,
    },
    {
      id: 'level_5',
      category: 'overall',
      icon: '☕',
      titleKo: '커피를 코드로 바꾸는 기계',
      titleEn: 'Coffee-to-Code Machine',
      descKo: '전체 과정 누적 5레벨 완료',
      descEn: 'Clear 5 total levels across all courses',
      color: '#b45309',
      unlocked: cleared >= 5,
      progressText: `${Math.min(cleared, 5)} / 5`,
    },
    {
      id: 'level_15',
      category: 'overall',
      icon: '🕶️',
      titleKo: '내 컴퓨터에선 잘 되는데요',
      titleEn: 'Works on My Machine',
      descKo: '전체 과정 누적 15레벨 완료',
      descEn: 'Clear 15 total levels across all courses',
      color: '#0284c7',
      unlocked: cleared >= 15,
      progressText: `${Math.min(cleared, 15)} / 15`,
    },
    {
      id: 'level_30',
      category: 'overall',
      icon: '💤',
      titleKo: '자면서 코딩 잠꼬대함',
      titleEn: 'Coding in My Sleep',
      descKo: '전체 과정 누적 30레벨 완료',
      descEn: 'Clear 30 total levels across all courses',
      color: '#2563eb',
      unlocked: cleared >= 30,
      progressText: `${Math.min(cleared, 30)} / 30`,
    },
    {
      id: 'level_50',
      category: 'overall',
      icon: '💎',
      titleKo: '숨 쉬듯이 코딩하는 중',
      titleEn: 'Breathing in Code',
      descKo: '전체 과정 누적 50레벨 완료',
      descEn: 'Clear 50 total levels across all courses',
      color: '#0891b2',
      unlocked: cleared >= 50,
      progressText: `${Math.min(cleared, 50)} / 50`,
    },
    {
      id: 'level_75',
      category: 'overall',
      icon: '🧙‍♂️',
      titleKo: '걸어 다니는 컴파일러',
      titleEn: 'Walking Compiler',
      descKo: '전체 과정 누적 75레벨 완료',
      descEn: 'Clear 75 total levels across all courses',
      color: '#7c3aed',
      unlocked: cleared >= 75,
      progressText: `${Math.min(cleared, 75)} / 75`,
    },
    {
      id: 'level_87',
      category: 'overall',
      icon: '👑',
      titleKo: '키보드 위의 지배자',
      titleEn: 'Ruler of the Keyboard',
      descKo: '전체 과정 누적 87레벨 완료',
      descEn: 'Clear 87 total levels across all courses',
      color: '#d97706',
      unlocked: cleared >= 87,
      progressText: `${Math.min(cleared, 87)} / 87`,
    },
    {
      id: 'level_150',
      category: 'overall',
      icon: '🧬',
      titleKo: '2진수로 대화 가능한 사람',
      titleEn: 'Fluent in Binary',
      descKo: '전체 과정 누적 150레벨 완료',
      descEn: 'Clear 150 total levels across all courses',
      color: '#4f46e5',
      unlocked: cleared >= 150,
      progressText: `${Math.min(cleared, 150)} / 150`,
    },
    {
      id: 'level_250',
      category: 'overall',
      icon: '🏛️',
      titleKo: '풀스택 만렙 아키텍트',
      titleEn: 'Full-Stack Grand Architect',
      descKo: '전체 과정 누적 250레벨 완료',
      descEn: 'Clear 250 total levels across all courses',
      color: '#0d9488',
      unlocked: cleared >= 250,
      progressText: `${Math.min(cleared, 250)} / 250`,
    },
    {
      id: 'level_400',
      category: 'overall',
      icon: '🌌',
      titleKo: '코딩으로 우주 정복 중',
      titleEn: 'Conquering the Universe with Code',
      descKo: '전체 과정 누적 400레벨 완료',
      descEn: 'Clear 400 total levels across all courses',
      color: '#9333ea',
      unlocked: cleared >= 400,
      progressText: `${Math.min(cleared, 400)} / 400`,
    },
    {
      id: 'level_828',
      category: 'overall',
      icon: '🪐',
      titleKo: '살아있는 코딩의 신',
      titleEn: 'Living God of Coding',
      descKo: '전체 12개 언어 트랙 828레벨 올클리어',
      descEn: 'Master all 828 levels across every track',
      color: '#e11d48',
      unlocked: cleared >= 828,
      progressText: `${Math.min(cleared, 828)} / 828`,
    },
    {
      id: 'polyglot_2',
      category: 'overall',
      icon: '🎭',
      titleKo: '양손에 다른 언어 든 코더',
      titleEn: 'Dual-Wielding Polyglot',
      descKo: '2개 이상의 서로 다른 언어 과정 학습',
      descEn: 'Learn 2 or more different language tracks',
      color: '#0284c7',
      unlocked: distinctLangs >= 2,
      progressText: `${Math.min(distinctLangs, 2)} / 2`,
    },
    {
      id: 'polyglot_5',
      category: 'overall',
      icon: '🌍',
      titleKo: '프로그래밍 언어 수집가',
      titleEn: 'Programming Language Collector',
      descKo: '5개 이상의 서로 다른 언어 과정 학습',
      descEn: 'Learn 5 or more different language tracks',
      color: '#7c3aed',
      unlocked: distinctLangs >= 5,
      progressText: `${Math.min(distinctLangs, 5)} / 5`,
    },

    // =========================================================================
    // 2. 💻 언어별 업적 (Per-Language Achievements — All 12 Languages)
    // =========================================================================
    {
      id: 'lang_py_10',
      category: 'language',
      icon: '🐍',
      titleKo: '뱀에게 말 거는 사람',
      titleEn: 'Python Whisperer',
      descKo: 'Python 과정 10레벨 완료 (또는 Python 타자 200+ CPM)',
      descEn: 'Clear 10 Python levels (or 200+ CPM in Python typing)',
      color: '#2563eb',
      unlocked: pyTotalCount >= 10 || hasTypingLangCpm(['python']),
      progressText: hasTypingLangCpm(['python'])
        ? '200+ CPM'
        : `${Math.min(pyTotalCount, 10)} / 10`,
    },
    {
      id: 'lang_py_50',
      category: 'language',
      icon: '📏',
      titleKo: '들여쓰기 강박증 환자',
      titleEn: 'Indentation Perfectionist',
      descKo: 'Python 과정 50레벨 완료',
      descEn: 'Clear 50 Python levels',
      color: '#0284c7',
      unlocked: pyTotalCount >= 50,
      progressText: `${Math.min(pyTotalCount, 50)} / 50`,
    },
    {
      id: 'level_113',
      category: 'language',
      icon: '🐉',
      titleKo: '파이썬을 삼킨 자',
      titleEn: 'Swallowed the Python',
      descKo: 'Python 베이직 113레벨 완주',
      descEn: 'Complete all 113 levels of Python Basics',
      color: '#dc2626',
      unlocked: pyBasicCount >= 113,
      progressText: `${Math.min(pyBasicCount, 113)} / 113`,
    },
    {
      id: 'lang_py_all',
      category: 'language',
      icon: '🤖',
      titleKo: '인공지능의 지배자',
      titleEn: 'AI Overlord',
      descKo: 'Python 전 과정(베이직·심화·빅데이터·AI 168레벨) 마스터',
      descEn: 'Master all 168 Python track levels (Basics to AI)',
      color: '#7c3aed',
      unlocked: pyTotalCount >= 168,
      progressText: `${Math.min(pyTotalCount, 168)} / 168`,
    },
    {
      id: 'lang_c_10',
      category: 'language',
      icon: '🔩',
      titleKo: '세미콜론 수호자',
      titleEn: 'Guardian of Semicolons',
      descKo: 'C언어 과정 10레벨 완료 (또는 C언어 타자 200+ CPM)',
      descEn: 'Clear 10 C levels (or 200+ CPM in C typing)',
      color: '#0891b2',
      unlocked: cCount >= 10 || hasTypingLangCpm(['c', 'c언어']),
      progressText: hasTypingLangCpm(['c', 'c언어'])
        ? '200+ CPM'
        : `${Math.min(cCount, 10)} / 10`,
    },
    {
      id: 'lang_c_ptr',
      category: 'language',
      icon: '🧭',
      titleKo: '포인터 미궁 탈출러',
      titleEn: 'Pointer Labyrinth Survivor',
      descKo: 'C언어 과정 25레벨 완료',
      descEn: 'Clear 25 C language levels',
      color: '#0e7490',
      unlocked: cCount >= 25,
      progressText: `${Math.min(cCount, 25)} / 25`,
    },
    {
      id: 'lang_c_all',
      category: 'language',
      icon: '⚡',
      titleKo: '메모리 주소가 눈에 보임',
      titleEn: 'Seeing Memory Addresses',
      descKo: 'C언어 전 과정(베이직·아두이노·포인터·자료구조 80레벨) 완주',
      descEn: 'Master all 80 C track levels',
      color: '#0369a1',
      unlocked: cCount >= 80,
      progressText: `${Math.min(cCount, 80)} / 80`,
    },
    {
      id: 'lang_cpp_10',
      category: 'language',
      icon: '⚙️',
      titleKo: '객체지향 연금술사',
      titleEn: 'OOP Alchemist',
      descKo: 'C++ 과정 10레벨 완료',
      descEn: 'Clear 10 C++ levels',
      color: '#4f46e5',
      unlocked: cppCount >= 10,
      progressText: `${Math.min(cppCount, 10)} / 10`,
    },
    {
      id: 'lang_cpp_all',
      category: 'language',
      icon: '🏎️',
      titleKo: '제로 오버헤드 폭주기관차',
      titleEn: 'Zero-Overhead Juggernaut',
      descKo: 'C++ 전 과정(베이직·STL·모던 C++ 55레벨) 완주',
      descEn: 'Master all 55 C++ track levels',
      color: '#4338ca',
      unlocked: cppCount >= 55,
      progressText: `${Math.min(cppCount, 55)} / 55`,
    },
    {
      id: 'lang_web_10',
      category: 'language',
      icon: '🎨',
      titleKo: 'div 정중앙 정렬 성공함',
      titleEn: 'Centered a Div Successfully',
      descKo: 'Web(HTML/CSS) 과정 10레벨 완료',
      descEn: 'Clear 10 Web (HTML/CSS) levels',
      color: '#ea580c',
      unlocked: webCount >= 10,
      progressText: `${Math.min(webCount, 10)} / 10`,
    },
    {
      id: 'lang_web_all',
      category: 'language',
      icon: '🌈',
      titleKo: '픽셀 장인 웹 마법사',
      titleEn: 'Pixel-Perfect Web Wizard',
      descKo: 'Web 전 과정(HTML5·CSS3·반응형 UI 60레벨) 완주',
      descEn: 'Master all 60 Web (HTML/CSS) track levels',
      color: '#c2410c',
      unlocked: webCount >= 60,
      progressText: `${Math.min(webCount, 60)} / 60`,
    },
    {
      id: 'lang_js_10',
      category: 'language',
      icon: '⚡',
      titleKo: 'undefined와 화해한 사람',
      titleEn: 'Made Peace with undefined',
      descKo: 'JavaScript 과정 10레벨 완료 (또는 JS 타자 200+ CPM)',
      descEn: 'Clear 10 JS levels (or 200+ CPM in JavaScript typing)',
      color: '#d97706',
      unlocked: jsCount >= 10 || hasTypingLangCpm(['javascript', 'js', 'web']),
      progressText: hasTypingLangCpm(['javascript', 'js', 'web'])
        ? '200+ CPM'
        : `${Math.min(jsCount, 10)} / 10`,
    },
    {
      id: 'lang_js_all',
      category: 'language',
      icon: '🕸️',
      titleKo: '비동기 이벤트 루프 조련사',
      titleEn: 'Event Loop Tamer',
      descKo: 'JavaScript 전 과정(JS·TS·React·Node.js 98레벨) 완주',
      descEn: 'Master all 98 JavaScript/TypeScript track levels',
      color: '#b45309',
      unlocked: jsCount >= 98,
      progressText: `${Math.min(jsCount, 98)} / 98`,
    },
    {
      id: 'lang_java_10',
      category: 'language',
      icon: '☕',
      titleKo: 'public static void 외운 자',
      titleEn: 'Memorized public static void',
      descKo: 'Java 과정 10레벨 완료 (또는 Java 타자 200+ CPM)',
      descEn: 'Clear 10 Java levels (or 200+ CPM in Java typing)',
      color: '#dc2626',
      unlocked: javaCount >= 10 || hasTypingLangCpm(['java']),
      progressText: hasTypingLangCpm(['java'])
        ? '200+ CPM'
        : `${Math.min(javaCount, 10)} / 10`,
    },
    {
      id: 'lang_java_all',
      category: 'language',
      icon: '🏰',
      titleKo: '가비지 컬렉터 VIP 고객',
      titleEn: 'Garbage Collector VIP',
      descKo: 'Java 전 과정(베이직·컬렉션·Spring 60레벨) 완주',
      descEn: 'Master all 60 Java track levels',
      color: '#b91c1c',
      unlocked: javaCount >= 60,
      progressText: `${Math.min(javaCount, 60)} / 60`,
    },
    {
      id: 'lang_sql_10',
      category: 'language',
      icon: '🗄️',
      titleKo: 'WHERE 절 없는 DELETE 방지턱',
      titleEn: 'Never DELETE Without WHERE',
      descKo: 'SQL 과정 10레벨 완료 (또는 SQL 타자 200+ CPM)',
      descEn: 'Clear 10 SQL levels (or 200+ CPM in SQL typing)',
      color: '#059669',
      unlocked: sqlCount >= 10 || hasTypingLangCpm(['sql']),
      progressText: hasTypingLangCpm(['sql'])
        ? '200+ CPM'
        : `${Math.min(sqlCount, 10)} / 10`,
    },
    {
      id: 'lang_sql_all',
      category: 'language',
      icon: '📊',
      titleKo: '테이블 조인 마에스트로',
      titleEn: 'Table JOIN Maestro',
      descKo: 'SQL 전 과정(SELECT·JOIN·서브쿼리 38레벨) 완주',
      descEn: 'Master all 38 SQL & Database track levels',
      color: '#047857',
      unlocked: sqlCount >= 38,
      progressText: `${Math.min(sqlCount, 38)} / 38`,
    },
    {
      id: 'lang_go_10',
      category: 'language',
      icon: '🐹',
      titleKo: '고루틴 백만 개 생성기',
      titleEn: 'Million Goroutine Spawner',
      descKo: 'Go 과정 10레벨 완료',
      descEn: 'Clear 10 Go language levels',
      color: '#0284c7',
      unlocked: goCount >= 10,
      progressText: `${Math.min(goCount, 10)} / 10`,
    },
    {
      id: 'lang_rust_10',
      category: 'language',
      icon: '🦀',
      titleKo: '빌림 검사기와 베스트 프렌드',
      titleEn: "Borrow Checker's Best Friend",
      descKo: 'Rust 과정 10레벨 완료',
      descEn: 'Clear 10 Rust language levels',
      color: '#ea580c',
      unlocked: rustCount >= 10,
      progressText: `${Math.min(rustCount, 10)} / 10`,
    },
    {
      id: 'lang_cs_10',
      category: 'language',
      icon: '🎮',
      titleKo: '물리엔진 중력 조작단',
      titleEn: 'Unity Gravity Manipulator',
      descKo: 'C# & Unity 과정 10레벨 완료',
      descEn: 'Clear 10 C# & Unity levels',
      color: '#9333ea',
      unlocked: csCount >= 10,
      progressText: `${Math.min(csCount, 10)} / 10`,
    },
    {
      id: 'lang_sw_10',
      category: 'language',
      icon: '🍎',
      titleKo: '옵셔널 느낌표(!) 금지령',
      titleEn: 'No Force-Unwrap Allowed',
      descKo: 'Swift & iOS 과정 10레벨 완료',
      descEn: 'Clear 10 Swift & iOS levels',
      color: '#e11d48',
      unlocked: swiftCount >= 10,
      progressText: `${Math.min(swiftCount, 10)} / 10`,
    },
    {
      id: 'lang_lx_10',
      category: 'language',
      icon: '🐧',
      titleKo: '마우스 없이 사는 터미널러',
      titleEn: 'Living Without a Mouse',
      descKo: 'Linux CLI 과정 10레벨 완료',
      descEn: 'Clear 10 Linux CLI levels',
      color: '#ca8a04',
      unlocked: linuxCount >= 10,
      progressText: `${Math.min(linuxCount, 10)} / 10`,
    },

    // =========================================================================
    // 3. 🔥 출석 · 끈기 업적 (Streak & Attendance)
    // =========================================================================
    {
      id: 'attend_1',
      category: 'streak',
      icon: '🎈',
      titleKo: '오늘부터 코딩과 1일',
      titleEn: 'Day 1 with Code',
      descKo: '첫 출석 체크 달성',
      descEn: 'First day of attendance',
      color: '#ec4899',
      unlocked: totalDays >= 1 || cleared >= 1,
      progressText: `${Math.min(Math.max(totalDays, cleared >= 1 ? 1 : 0), 1)} / 1d`,
    },
    {
      id: 'streak_3',
      category: 'streak',
      icon: '🔥',
      titleKo: '작심삼일? 그게 뭔데',
      titleEn: '3-Day Quit? Never Heard of It',
      descKo: '3일 연속 출석 달성',
      descEn: '3-day attendance streak',
      color: '#ea580c',
      unlocked: longestStreak >= 3,
      progressText: `${Math.min(longestStreak, 3)} / 3d`,
    },
    {
      id: 'streak_7',
      category: 'streak',
      icon: '⚡',
      titleKo: '월화수목금토일 코딩중',
      titleEn: 'Coding 24/7',
      descKo: '7일 연속 출석 달성',
      descEn: '7-day attendance streak',
      color: '#d97706',
      unlocked: longestStreak >= 7,
      progressText: `${Math.min(longestStreak, 7)} / 7d`,
    },
    {
      id: 'streak_14',
      category: 'streak',
      icon: '🤖',
      titleKo: '코딩 안 하면 손에 가시 돋음',
      titleEn: 'Coding Withdrawal',
      descKo: '14일 출석 달성',
      descEn: '14 days of attendance',
      color: '#4f46e5',
      unlocked: longestStreak >= 14 || totalDays >= 14,
      progressText: `${Math.min(Math.max(longestStreak, totalDays), 14)} / 14d`,
    },
    {
      id: 'streak_30',
      category: 'streak',
      icon: '🌲',
      titleKo: '잔디 심기 장인',
      titleEn: 'Green Commit Gardener',
      descKo: '30일 출석 달성',
      descEn: '30 days of attendance',
      color: '#15803d',
      unlocked: longestStreak >= 30 || totalDays >= 30,
      progressText: `${Math.min(Math.max(longestStreak, totalDays), 30)} / 30d`,
    },
    {
      id: 'streak_60',
      category: 'streak',
      icon: '🌋',
      titleKo: '키보드와 물아일체',
      titleEn: 'One with the Keyboard',
      descKo: '60일 출석 달성',
      descEn: '60 days of attendance',
      color: '#dc2626',
      unlocked: longestStreak >= 60 || totalDays >= 60,
      progressText: `${Math.min(Math.max(longestStreak, totalDays), 60)} / 60d`,
    },
    {
      id: 'streak_100',
      category: 'streak',
      icon: '☀️',
      titleKo: '100일 동안 꺼지지 않는 모니터',
      titleEn: '100-Day Unstoppable Monitor',
      descKo: '100일 출석 달성',
      descEn: '100 days of attendance',
      color: '#b45309',
      unlocked: longestStreak >= 100 || totalDays >= 100,
      progressText: `${Math.min(Math.max(longestStreak, totalDays), 100)} / 100d`,
    },

    // =========================================================================
    // 4. 🧩 문제풀이 · 알고리즘 업적 (Problem Solving)
    // =========================================================================
    {
      id: 'solver_1',
      category: 'solver',
      icon: '🐛',
      titleKo: '버그가 아니라 기능입니다',
      titleEn: "It's a Feature, Not a Bug",
      descKo: '코딩 문제 1개 해결',
      descEn: 'Solve 1 coding problem',
      color: '#16a34a',
      unlocked: solved >= 1,
      progressText: `${Math.min(solved, 1)} / 1`,
    },
    {
      id: 'solver_5',
      category: 'solver',
      icon: '🧩',
      titleKo: '스택오버플로우 없이 생존',
      titleEn: 'Survived Without StackOverflow',
      descKo: '코딩 문제 5개 해결',
      descEn: 'Solve 5 coding problems',
      color: '#059669',
      unlocked: solved >= 5,
      progressText: `${Math.min(solved, 5)} / 5`,
    },
    {
      id: 'solver_10',
      category: 'solver',
      icon: '🕵️',
      titleKo: '인간 디버거',
      titleEn: 'Human Debugger',
      descKo: '코딩 문제 10개 해결',
      descEn: 'Solve 10 coding problems',
      color: '#0d9488',
      unlocked: solved >= 10,
      progressText: `${Math.min(solved, 10)} / 10`,
    },
    {
      id: 'solver_15',
      category: 'solver',
      icon: '🧠',
      titleKo: '뇌 속에 CPU 장착함',
      titleEn: 'CPU Installed in Brain',
      descKo: '코딩 문제 15개 해결',
      descEn: 'Solve 15 coding problems',
      color: '#db2777',
      unlocked: solved >= 15,
      progressText: `${Math.min(solved, 15)} / 15`,
    },
    {
      id: 'solver_30',
      category: 'solver',
      icon: '🛸',
      titleKo: '외계인 고문 기술자',
      titleEn: 'Alien Tech Engineer',
      descKo: '코딩 문제 30개 해결',
      descEn: 'Solve 30 coding problems',
      color: '#9333ea',
      unlocked: solved >= 30,
      progressText: `${Math.min(solved, 30)} / 30`,
    },
    {
      id: 'solver_50',
      category: 'solver',
      icon: '🔮',
      titleKo: '시간복잡도 O(1) 예언자',
      titleEn: 'O(1) Time Complexity Prophet',
      descKo: '코딩 문제 50개 해결',
      descEn: 'Solve 50 coding problems',
      color: '#6366f1',
      unlocked: solved >= 50,
      progressText: `${Math.min(solved, 50)} / 50`,
    },
    {
      id: 'solver_100',
      category: 'solver',
      icon: '👾',
      titleKo: '알고리즘 최종 보스',
      titleEn: 'Algorithm Final Boss',
      descKo: '코딩 문제 100개 해결',
      descEn: 'Solve 100 coding problems',
      color: '#be123c',
      unlocked: solved >= 100,
      progressText: `${Math.min(solved, 100)} / 100`,
    },

    // =========================================================================
    // 5. ⌨️ 코드타자 · 점수 업적 (Code Typing & Activity Score)
    // =========================================================================
    {
      id: 'speed_150',
      category: 'speed',
      icon: '🐢',
      titleKo: '독수리 타법 졸업생',
      titleEn: 'Two-Finger Typing Graduate',
      descKo: '코드타자 150 CPM 달성',
      descEn: 'Reach 150+ CPM in Code Typing',
      color: '#0891b2',
      unlocked: speedCpm >= 150,
      progressText: `${Math.min(speedCpm, 150)} / 150`,
    },
    {
      id: 'speed_250',
      category: 'speed',
      icon: '💨',
      titleKo: '손가락에 모터 달림',
      titleEn: 'Motorized Fingers',
      descKo: '코드타자 250 CPM 달성',
      descEn: 'Reach 250+ CPM in Code Typing',
      color: '#2563eb',
      unlocked: speedCpm >= 250,
      progressText: `${Math.min(speedCpm, 250)} / 250`,
    },
    {
      id: 'speed_350',
      category: 'speed',
      icon: '⌨️',
      titleKo: '키보드에서 연기 나는 중',
      titleEn: 'Smoking Keyboard',
      descKo: '코드타자 350 CPM 달성',
      descEn: 'Reach 350+ CPM in Code Typing',
      color: '#7c3aed',
      unlocked: speedCpm >= 350,
      progressText: `${Math.min(speedCpm, 350)} / 350`,
    },
    {
      id: 'speed_450',
      category: 'speed',
      icon: '⚡',
      titleKo: '잔상이 남는 손놀림',
      titleEn: 'Afterimage Fingers',
      descKo: '코드타자 450 CPM 달성',
      descEn: 'Reach 450+ CPM in Code Typing',
      color: '#c026d3',
      unlocked: speedCpm >= 450,
      progressText: `${Math.min(speedCpm, 450)} / 450`,
    },
    {
      id: 'speed_500',
      category: 'speed',
      icon: '🚀',
      titleKo: '빛보다 빠른 엔터키',
      titleEn: 'Faster Than Light Enter',
      descKo: '코드타자 500 CPM 달성',
      descEn: 'Reach 500+ CPM in Code Typing',
      color: '#e11d48',
      unlocked: speedCpm >= 500,
      progressText: `${Math.min(speedCpm, 500)} / 500`,
    },
    {
      id: 'acc_99',
      category: 'speed',
      icon: '🎯',
      titleKo: '오타가 뭔가요 먹는 건가요',
      titleEn: 'What Is a Typo?',
      descKo: '코드타자 정확도 99% 이상 (100+ CPM)',
      descEn: '99%+ accuracy in Code Typing (100+ CPM)',
      color: '#059669',
      unlocked: speedCpm >= 100 && speedAcc >= 99,
      progressText:
        speedCpm >= 100
          ? `${Math.min(speedAcc, 99).toFixed(0)}% / 99%`
          : `${speedCpm} / 100 CPM`,
    },
    {
      id: 'acc_100',
      category: 'speed',
      icon: '💎',
      titleKo: '백발백중 무결점 스나이퍼',
      titleEn: '100% Precision Sniper',
      descKo: '코드타자 정확도 100% 달성 (150+ CPM)',
      descEn: '100% accuracy in Code Typing (150+ CPM)',
      color: '#0284c7',
      unlocked: speedCpm >= 150 && speedAcc >= 100,
      progressText:
        speedCpm >= 150
          ? `${Math.min(speedAcc, 100).toFixed(0)}% / 100%`
          : `${speedCpm} / 150 CPM`,
    },
    {
      id: 'score_5000',
      category: 'speed',
      icon: '🏆',
      titleKo: '코딩 생태계 교란종',
      titleEn: 'Coding Ecosystem Boss',
      descKo: '누적 활동 점수 5,000 PT 달성',
      descEn: 'Reach 5,000+ Activity Points',
      color: '#d97706',
      unlocked: activityScore >= 5000,
      progressText: `${Math.min(activityScore, 5000).toLocaleString()} / 5,000 PT`,
    },
    {
      id: 'score_15000',
      category: 'speed',
      icon: '👑',
      titleKo: '서버실 절대 권력자',
      titleEn: 'Supreme Ruler of the Server Room',
      descKo: '누적 활동 점수 15,000 PT 달성',
      descEn: 'Reach 15,000+ Activity Points',
      color: '#b91c1c',
      unlocked: activityScore >= 15000,
      progressText: `${Math.min(activityScore, 15000).toLocaleString()} / 15,000 PT`,
    },
  ];
}

export const BADGE_PRIORITY_ORDER: ReadonlyArray<string> = [
  'level_828',
  'level_400',
  'score_15000',
  'level_250',
  'solver_100',
  'streak_100',
  'lang_py_all',
  'level_150',
  'polyglot_5',
  'lang_js_all',
  'lang_c_all',
  'level_113',
  'solver_50',
  'streak_60',
  'score_5000',
  'speed_500',
  'lang_web_all',
  'lang_java_all',
  'lang_cpp_all',
  'lang_sql_all',
  'level_87',
  'speed_450',
  'solver_30',
  'streak_30',
  'level_75',
  'acc_100',
  'level_50',
  'lang_py_50',
  'solver_15',
  'speed_350',
  'lang_c_ptr',
  'streak_14',
  'level_30',
  'polyglot_2',
  'solver_10',
  'acc_99',
  'streak_7',
  'speed_250',
  'level_15',
  'lang_py_10',
  'lang_c_10',
  'lang_cpp_10',
  'lang_web_10',
  'lang_js_10',
  'lang_java_10',
  'lang_sql_10',
  'lang_go_10',
  'lang_rust_10',
  'lang_cs_10',
  'lang_sw_10',
  'lang_lx_10',
  'solver_5',
  'streak_3',
  'speed_150',
  'level_5',
  'solver_1',
  'first_clear',
  'attend_1',
  'rookie',
];

export function resolveSelectedBadgeId(
  profile: Partial<UserProfile> | null | undefined
): string | null {
  if (!profile) return null;
  if (typeof profile.selected_badge === 'string' && profile.selected_badge.trim()) {
    return profile.selected_badge.trim();
  }
  const { selectedBadge } = decodeAvatarPresetAndBadge(profile.avatar_preset);
  return selectedBadge;
}

export function getRepresentativeBadge(
  profile: Partial<UserProfile> | null | undefined,
  isKo: boolean
): { id: string; icon: string; title: string; label: string; color: string } {
  const badges = evaluateUserBadges(profile);

  // 1) Check user-selected badge first
  const chosenId = resolveSelectedBadgeId(profile);
  if (chosenId && chosenId !== 'auto') {
    const chosen = badges.find((b) => b.id === chosenId);
    if (chosen) {
      const title = isKo ? chosen.titleKo : chosen.titleEn;
      return {
        id: chosen.id,
        icon: chosen.icon,
        title,
        label: `${chosen.icon} ${title}`,
        color: chosen.color,
      };
    }
  }

  // 2) Auto fallback: highest-priority unlocked badge
  for (const id of BADGE_PRIORITY_ORDER) {
    const found = badges.find((b) => b.id === id && b.unlocked);
    if (found) {
      const title = isKo ? found.titleKo : found.titleEn;
      return {
        id: found.id,
        icon: found.icon,
        title,
        label: `${found.icon} ${title}`,
        color: found.color,
      };
    }
  }

  const fallbackTitle = isKo ? '헬로 월드 뉴비' : 'Hello World Newbie';
  return {
    id: 'rookie',
    icon: '🌱',
    title: fallbackTitle,
    label: `🌱 ${fallbackTitle}`,
    color: '#059669',
  };
}
