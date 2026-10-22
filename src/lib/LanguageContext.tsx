'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'ko' | 'en';

export interface CodeLineItem {
  id: number;
  text: string;
  isComment?: boolean;
  isBlank?: boolean;
  isLoopHeader?: boolean;
  isLoopBody?: boolean;
  outputTrigger?: 'immediate' | 'loop' | 'none';
  outputs?: string[];
}

export const SCRIPT_LINES_KO: CodeLineItem[] = [
  {
    id: 1,
    text: '# 1. TypingCode 소개',
    isComment: true,
    outputTrigger: 'none',
  },
  {
    id: 2,
    text: 'print("✨ 타자만 쳐도 코딩이 완성되는 곳, TypingCode!")',
    outputTrigger: 'immediate',
    outputs: ['✨ 타자만 쳐도 코딩이 완성되는 곳, TypingCode!'],
  },
  {
    id: 3,
    text: '',
    isBlank: true,
    outputTrigger: 'none',
  },
  {
    id: 4,
    text: '# 2. 학습 방법',
    isComment: true,
    outputTrigger: 'none',
  },
  {
    id: 5,
    text: 'print("⌨️ 복잡한 문법 암기 NO! 화면의 코드를 따라 치기만 하세요.")',
    outputTrigger: 'immediate',
    outputs: ['⌨️ 복잡한 문법 암기 NO! 화면의 코드를 따라 치기만 하세요.'],
  },
  {
    id: 6,
    text: '',
    isBlank: true,
    outputTrigger: 'none',
  },
  {
    id: 7,
    text: '# 3. 실시간 실행',
    isComment: true,
    outputTrigger: 'none',
  },
  {
    id: 8,
    text: 'print("💡 내가 친 코드가 실제 컴퓨터에서 즉시 살아 움직여요!")',
    outputTrigger: 'immediate',
    outputs: ['💡 내가 친 코드가 실제 컴퓨터에서 즉시 살아 움직여요!'],
  },
  {
    id: 9,
    text: '',
    isBlank: true,
    outputTrigger: 'none',
  },
  {
    id: 10,
    text: '# 4. 카운트다운 시작!',
    isComment: true,
    outputTrigger: 'none',
  },
  {
    id: 11,
    text: 'for count in [3, 2, 1]:',
    isLoopHeader: true,
    outputTrigger: 'none',
  },
  {
    id: 12,
    text: '    print(f"🚀 {count}초 후 코딩 모험이 시작됩니다...")',
    isLoopBody: true,
    outputTrigger: 'loop',
    outputs: [
      '🚀 3초 후 코딩 모험이 시작됩니다...',
      '🚀 2초 후 코딩 모험이 시작됩니다...',
      '🚀 1초 후 코딩 모험이 시작됩니다...',
    ],
  },
  {
    id: 13,
    text: '',
    isBlank: true,
    outputTrigger: 'none',
  },
  {
    id: 14,
    text: 'print("🎉 준비 완료! 지금 첫 코드를 직접 타이핑해보세요.")',
    outputTrigger: 'immediate',
    outputs: ['🎉 준비 완료! 지금 첫 코드를 직접 타이핑해보세요.'],
  },
];

export const SCRIPT_LINES_EN: CodeLineItem[] = [
  {
    id: 1,
    text: '# 1. Welcome to TypingCode',
    isComment: true,
    outputTrigger: 'none',
  },
  {
    id: 2,
    text: 'print("✨ Learn to code easily just by typing, TypingCode!")',
    outputTrigger: 'immediate',
    outputs: ['✨ Learn to code easily just by typing, TypingCode!'],
  },
  {
    id: 3,
    text: '',
    isBlank: true,
    outputTrigger: 'none',
  },
  {
    id: 4,
    text: '# 2. How it works',
    isComment: true,
    outputTrigger: 'none',
  },
  {
    id: 5,
    text: 'print("⌨️ No syntax cramming! Simply type the code you see.")',
    outputTrigger: 'immediate',
    outputs: ['⌨️ No syntax cramming! Simply type the code you see.'],
  },
  {
    id: 6,
    text: '',
    isBlank: true,
    outputTrigger: 'none',
  },
  {
    id: 7,
    text: '# 3. Live execution',
    isComment: true,
    outputTrigger: 'none',
  },
  {
    id: 8,
    text: 'print("💡 The code you type runs on a real computer live!")',
    outputTrigger: 'immediate',
    outputs: ['💡 The code you type runs on a real computer live!'],
  },
  {
    id: 9,
    text: '',
    isBlank: true,
    outputTrigger: 'none',
  },
  {
    id: 10,
    text: '# 4. Countdown to start!',
    isComment: true,
    outputTrigger: 'none',
  },
  {
    id: 11,
    text: 'for count in [3, 2, 1]:',
    isLoopHeader: true,
    outputTrigger: 'none',
  },
  {
    id: 12,
    text: '    print(f"🚀 Coding journey starts in {count}s...")',
    isLoopBody: true,
    outputTrigger: 'loop',
    outputs: [
      '🚀 Coding journey starts in 3s...',
      '🚀 Coding journey starts in 2s...',
      '🚀 Coding journey starts in 1s...',
    ],
  },
  {
    id: 13,
    text: '',
    isBlank: true,
    outputTrigger: 'none',
  },
  {
    id: 14,
    text: 'print("🎉 All set! Start typing your very first code now.")',
    outputTrigger: 'immediate',
    outputs: ['🎉 All set! Start typing your very first code now.'],
  },
];

export const translations = {
  ko: {
    nav: {
      subtitle: '학생부터 시작하는 실전 코딩 타자',
      learn: '학습하기',
      problems: '문제풀이',
      compiler: '자유코딩',
      ranking: '리더보드',
      practice: '실전 연습',
      challenges: '챌린지',
      login: '로그인',
      signup: '회원가입',
      python: '🐍 파이썬',
      web: '🌐 웹 만들기',
      c: '⚡ C언어',
      startFree: '무료 시작',
    },
    auth: {
      loginTab: '로그인',
      signupTab: '회원가입',
      loginTitle: 'TypingCode에 오신 것을 환영해요!',
      loginSubtitle: '로그인하고 나의 타이핑 기록과 코딩 뱃지를 저장하세요.',
      signupTitle: '코딩 타자 모험을 시작해요!',
      signupSubtitle: '무료 계정을 만들고 나만의 랭킹과 학습 기록을 이어가세요.',
      emailLabel: '이메일 주소',
      emailPlaceholder: 'you@example.com',
      passwordLabel: '비밀번호',
      passwordPlaceholder: '8자리 이상 비밀번호 입력',
      nameLabel: '닉네임 / 이름',
      namePlaceholder: '멋진 코더 닉네임',
      confirmPasswordLabel: '비밀번호 확인',
      confirmPasswordPlaceholder: '비밀번호를 한 번 더 입력해주세요',
      rememberMe: '로그인 상태 유지',
      forgotPassword: '비밀번호를 잊으셨나요?',
      loginBtn: '로그인하기',
      signupBtn: '무료 회원가입 완료',
      orSocial: '또는 소셜 계정으로 계속하기',
      githubLogin: 'GitHub 계정으로 계속하기',
      googleLogin: 'Google 계정으로 계속하기',
      noAccount: '아직 계정이 없으신가요?',
      haveAccount: '이미 계정이 있으신가요?',
      agreeTerms: '서비스 이용약관 및 개인정보 처리방침에 동의합니다.',
      demoNotice: '체험용 데모 계정으로 간편하게 시작할 수 있어요!',
    },
    hero: {
      title: 'TypingCode Playground',
      badge: '실시간 코드 & 터미널',
      terminalTitle: '터미널 실행 화면 (Terminal Output)',
      running: '● 실시간 실행 중...',
      completed: '● 실행 완료 (Exit 0)',
    },
    slogan: {
      title: 'JUST TYPE IT AND CODE IT.',
      subtitle: '복잡한 문법 책 대신 키보드를 두드리는 순간, 살아있는 진짜 코딩이 시작됩니다.',
    },
    why: {
      tag: 'SIMPLE & FUN LEARNING',
      title: '왜 따라 치기만 해도 코딩을 배울 수 있을까요?',
      subtitle: '어려운 이론책 대신 키보드를 두드리며 손과 눈으로 직관적으로 익히는 4가지 비밀이에요!',
      card1Title: '1. 문법 암기 NO!\n손으로 먼저 기억해요',
      card1Desc: '영어 단어 외우듯 문법을 달달 외우지 않아도 돼요. 화면에 보이는 코드를 한 글자씩 타자 치듯 따라 하다 보면 자연스럽게 손가락이 코드 구조를 익히게 돼요.',
      card2Title: '2. 친절한 힌트 카드로\n쏙쏙 쉽게 이해',
      card2Desc: '타이핑을 시작하기 전, \'이 코드가 무슨 일을 하는지\' 알기 쉬운 그림과 힌트 카드로 먼저 보여줘요. 원리를 이해하고 치니까 재미가 2배가 돼요!',
      card3Title: '3. 가상 키보드가\n다음 글자를 불빛으로 안내',
      card3Desc: '특수문자나 괄호가 어디 있는지 헷갈려도 걱정 끝! 화면 하단 가상 키보드가 다음에 누를 키를 반짝반짝 불빛으로 짚어줘요.',
      card4Title: '4. 내가 친 코드가\n실제로 짠! 실행돼요',
      card4Desc: '단순한 타자 연습 게임이 아니에요. 타이핑을 완성하면 진짜 컴퓨터(CPython, GCC)가 내 코드를 직접 읽고 화면에 살아있는 결과를 보여줘요!',
    },
    courses: {
      title: '실무와 기본기를 다지는 핵심 프로그래밍 트랙',
      subtitle: '직관적인 파이썬부터 모던 프론트엔드 웹, 시스템 프로그래밍의 정석인 C언어까지 체계적으로 완성하세요.',
      pyBadge: '🐍 CPython 3.10 · 객체지향',
      pyTitle: '파이썬 프로그래밍 (Python)',
      pyDesc: '직관적인 문법과 풍부한 생태계를 갖춘 언어입니다. 표준 입출력부터 자료구조, 제어문, 함수 설계까지 핵심 알고리즘을 체계적으로 체득합니다.',
      pyBtn: '파이썬 1단계 시작하기',
      webBadge: '🌐 Full DOM · 프론트엔드',
      webTitle: '모던 웹 개발 (HTML / CSS / JS)',
      webDesc: 'HTML5 시맨틱 마크업, CSS 레이아웃 스타일링, JavaScript 동적 DOM 제어까지 인터랙티브 웹 애플리케이션의 뼈대와 원리를 구축합니다.',
      webBtn: '웹 개발 1단계 시작하기',
      cBadge: '⚡ GCC 13 · 시스템 & 메모리',
      cTitle: 'C 시스템 프로그래밍 (C Language)',
      cDesc: '하드웨어와 메모리 제어의 정석입니다. 실제 리눅스 GCC 환경에서 포인터, 메모리 할당, 저수준 시스템 아키텍처 원리를 깊이 있게 실습합니다.',
      cBtn: 'C언어 1단계 시작하기',
    },
    audience: {
      title: '이런 학생과 친구들에게 딱 좋아요!',
      card1Title: '스크래치·엔트리 다음 단계가 필요한 학생',
      card1Desc: '블록 코딩에서 진짜 텍스트 코딩으로 자연스럽게 넘어가고 싶을 때 가장 쉬운 다리가 되어줘요.',
      card2Title: '영타 연습이 지루했던 친구',
      card2Desc: '의미 없는 단어 반복 대신, 진짜 실행되는 코드를 타이핑하면서 영타 실력과 코딩 실력이 동시에 쑥쑥!',
      card3Title: '코딩 책 보고 포기했던 입문자',
      card3Desc: '긴 설명과 복잡한 설치 없이, 브라우저만 켜고 화면 보고 따라 치면 바로 실행 결과를 볼 수 있어요.',
    },
    cta: {
      title: '지금 바로 첫 번째 코드를 따라 쳐볼까요?',
      subtitle: '간편하게 로그인하고 나만의 타수 기록과 랭킹 뱃지를 모아보세요.\n버튼만 누르면 1초 만에 나만의 코딩 타자 모험이 시작됩니다!',
      btn: '무료로 코딩 타자 시작하기 🚀',
    },
  },
  en: {
    nav: {
      subtitle: 'Real Coding for Everyone Through Typing',
      learn: 'Learn',
      problems: 'Problems',
      compiler: 'Free Code',
      ranking: 'Leaderboard',
      practice: 'Practice',
      challenges: 'Challenges',
      login: 'Log In',
      signup: 'Sign Up',
      python: '🐍 Python',
      web: '🌐 Modern Web',
      c: '⚡ C Language',
      startFree: 'Start Free',
    },
    auth: {
      loginTab: 'Log In',
      signupTab: 'Sign Up',
      loginTitle: 'Welcome to TypingCode!',
      loginSubtitle: 'Log in to track your typing stats and collect coding badges.',
      signupTitle: 'Start Your Coding Adventure!',
      signupSubtitle: 'Create a free account to rank on the leaderboard and save progress.',
      emailLabel: 'Email Address',
      emailPlaceholder: 'you@example.com',
      passwordLabel: 'Password',
      passwordPlaceholder: 'Enter 8+ characters',
      nameLabel: 'Display Name / Nickname',
      namePlaceholder: 'Cool Coder Name',
      confirmPasswordLabel: 'Confirm Password',
      confirmPasswordPlaceholder: 'Re-enter your password',
      rememberMe: 'Remember me',
      forgotPassword: 'Forgot password?',
      loginBtn: 'Log In',
      signupBtn: 'Create Free Account',
      orSocial: 'Or continue with',
      githubLogin: 'Continue with GitHub',
      googleLogin: 'Continue with Google',
      noAccount: "Don't have an account?",
      haveAccount: 'Already have an account?',
      agreeTerms: 'I agree to the Terms of Service & Privacy Policy.',
      demoNotice: 'You can explore with a free instant demo account!',
    },
    hero: {
      title: 'TypingCode Playground',
      badge: 'Live Code & Terminal',
      terminalTitle: 'Terminal Execution (Output)',
      running: '● Running live...',
      completed: '● Completed (Exit 0)',
    },
    slogan: {
      title: 'JUST TYPE IT AND CODE IT.',
      subtitle: 'Touch the keys, and real code comes alive in your browser.',
    },
    why: {
      tag: 'SIMPLE & FUN LEARNING',
      title: 'Why Can You Learn Coding Just by Typing?',
      subtitle: 'Intuitive tactile learning by typing on the keyboard instead of memorizing boring theory textbooks!',
      card1Title: '1. No Grammar Cramming!\nHands Remember First',
      card1Desc: 'No need to memorize abstract syntax. Follow along and type code on screen, and your fingers naturally build lasting muscle memory for real code structure.',
      card2Title: '2. Helpful Hint Cards\nUnderstand Concepts Fast',
      card2Desc: 'Before typing, intuitive illustrations and concise hint cards show what this code accomplishes. You grasp the core principles before you even finish!',
      card3Title: '3. Virtual Keyboard\nLights Up the Next Key',
      card3Desc: 'Unsure where special brackets or symbols live on the keyboard? The built-in on-screen keyboard illuminates the exact next key with smooth guidance.',
      card4Title: '4. Real Code Execution\nAlive Right on Screen',
      card4Desc: 'Not just a typing test! The moment you finish typing, real sandboxed runtimes (CPython, GCC) execute your code with authentic, live output.',
    },
    courses: {
      title: 'Curated Programming Tracks for Solid Foundations',
      subtitle: 'From intuitive Python to modern frontend Web development and core systems programming in C.',
      pyBadge: '🐍 CPython 3.10 · Object-Oriented',
      pyTitle: 'Python Programming',
      pyDesc: 'Master clean syntax and core fundamentals. Progress from standard I/O and data structures to control flow, functions, and algorithm design.',
      pyBtn: 'Start Python Track',
      webBadge: '🌐 Full DOM · Frontend',
      webTitle: 'Modern Web Development (HTML/CSS/JS)',
      webDesc: 'Learn semantic HTML5 markup, responsive CSS styling, and live JavaScript DOM manipulation in a real-time browser sandbox.',
      webBtn: 'Start Web Track',
      cBadge: '⚡ GCC 13 · Systems & Memory',
      cTitle: 'C Systems Programming',
      cDesc: 'The industry standard for hardware and memory control. Build lasting intuition for pointers, memory allocation, and low-level architecture.',
      cBtn: 'Start C Track',
    },
    audience: {
      title: 'Perfect For Learners Like You!',
      card1Title: 'Graduating from Scratch & Block Coding',
      card1Desc: 'The smoothest stepping stone to transition naturally from visual block-based programming into real text code.',
      card2Title: 'Bored of Meaningless Typing Tests',
      card2Desc: 'Instead of typing random words, boost your English typing speed while building genuine, working programs simultaneously.',
      card3Title: 'Beginners Overwhelmed by Complex Setup',
      card3Desc: 'No environment configs or software installs required. Just open your browser, follow along, and watch your code run.',
    },
    cta: {
      title: 'Ready to Type Your Very First Line of Code?',
      subtitle: 'Sign in to save your typing progress and collect leaderboard badges.\nStart your interactive coding adventure in just 1 second!',
      btn: 'Start Coding Typing for Free 🚀',
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.ko;
  scriptLines: CodeLineItem[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('ko');
  const [isInitialized, setIsInitialized] = useState<boolean>(false);

  useEffect(() => {
    // 1. Check saved user preference in localStorage
    const saved = localStorage.getItem('typingcode_lang') as Language | null;
    if (saved === 'ko' || saved === 'en') {
      setLanguageState(saved);
      document.documentElement.lang = saved;
      setIsInitialized(true);
      return;
    }

    // 2. Auto-detect browser language
    if (typeof navigator !== 'undefined' && navigator.language) {
      const browserLang = navigator.language.toLowerCase();
      const detected: Language = browserLang.startsWith('ko') ? 'ko' : 'en';
      setLanguageState(detected);
      document.documentElement.lang = detected;
    }
    setIsInitialized(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('typingcode_lang', lang);
      document.documentElement.lang = lang;
    }
  };

  const t = translations[language];
  const scriptLines = language === 'ko' ? SCRIPT_LINES_KO : SCRIPT_LINES_EN;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, scriptLines }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
