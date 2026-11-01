export type JudgeLanguage = 'python' | 'c' | 'cpp' | 'java' | 'javascript';

export interface JudgeLanguageOption {
  id: JudgeLanguage;
  label: string;
  ext: string;
}

export const JUDGE_LANGUAGES: JudgeLanguageOption[] = [
  { id: 'python', label: 'Python', ext: 'py' },
  { id: 'c', label: 'C', ext: 'c' },
  { id: 'cpp', label: 'C++', ext: 'cpp' },
  { id: 'java', label: 'Java', ext: 'java' },
  { id: 'javascript', label: 'JavaScript', ext: 'js' },
];

export interface ProblemTestCase {
  input: string;
  output: string;
}

export interface JudgeProblem {
  id: number;
  title: string;
  difficulty: '입문' | '중급' | '심화';
  diffColor: string;
  category: string;
  description: string;
  inputDesc: string;
  outputDesc: string;
  testCases: ProblemTestCase[];
}

export function getStarterSkeleton(lang: JudgeLanguage): string {
  switch (lang) {
    case 'python':
      return `import sys
input = sys.stdin.readline

# 여기에 풀이를 작성하세요
`;
    case 'c':
      return `#include <stdio.h>

int main(void) {
    // 여기에 풀이를 작성하세요
    return 0;
}
`;
    case 'cpp':
      return `#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    // 여기에 풀이를 작성하세요
    return 0;
}
`;
    case 'java':
      return `import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // 여기에 풀이를 작성하세요
    }
}
`;
    case 'javascript':
      return `const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(/\\s+/);

// 여기에 풀이를 작성하세요
`;
  }
}

export const PROBLEMS_BANK: JudgeProblem[] = [
  {
    id: 1,
    title: '두 수의 합',
    difficulty: '입문',
    diffColor: '#059669',
    category: '연산',
    description: '두 정수 A와 B를 입력받아 A + B의 결과를 출력하세요.',
    inputDesc: '공백으로 구분된 두 정수 A, B (-10,000 <= A, B <= 10,000)',
    outputDesc: '두 수의 합',
    testCases: [
      { input: '5 7', output: '12' },
      { input: '100 250', output: '350' },
      { input: '-15 40', output: '25' },
      { input: '0 0', output: '0' },
    ],
  },
  {
    id: 2,
    title: '몫과 나머지',
    difficulty: '입문',
    diffColor: '#059669',
    category: '연산',
    description: '두 자연수 A와 B가 주어질 때, A를 B로 나눈 몫과 나머지를 공백으로 구분해 출력하세요.',
    inputDesc: '공백으로 구분된 두 자연수 A, B (1 <= A, B <= 10,000)',
    outputDesc: '몫과 나머지를 공백으로 구분하여 출력',
    testCases: [
      { input: '17 5', output: '3 2' },
      { input: '100 10', output: '10 0' },
      { input: '7 9', output: '0 7' },
      { input: '99 8', output: '12 3' },
    ],
  },
  {
    id: 3,
    title: '짝수와 홀수 판별',
    difficulty: '입문',
    diffColor: '#059669',
    category: '조건문',
    description: '정수 N이 짝수이면 Even, 홀수이면 Odd를 출력하세요.',
    inputDesc: '정수 N (0 <= N <= 100,000)',
    outputDesc: 'Even 또는 Odd',
    testCases: [
      { input: '8', output: 'Even' },
      { input: '13', output: 'Odd' },
      { input: '0', output: 'Even' },
      { input: '999', output: 'Odd' },
    ],
  },
  {
    id: 4,
    title: '세 수 중 최댓값',
    difficulty: '입문',
    diffColor: '#059669',
    category: '조건문',
    description: '세 정수가 주어질 때 가장 큰 값을 출력하세요.',
    inputDesc: '공백으로 구분된 세 정수 (-10,000 <= 각 수 <= 10,000)',
    outputDesc: '가장 큰 정수',
    testCases: [
      { input: '12 45 27', output: '45' },
      { input: '-10 -3 -25', output: '-3' },
      { input: '7 7 7', output: '7' },
      { input: '100 99 101', output: '101' },
    ],
  },
  {
    id: 5,
    title: '윤년 판별기',
    difficulty: '입문',
    diffColor: '#059669',
    category: '조건문',
    description: '연도가 4의 배수이면서 100의 배수가 아닐 때, 또는 400의 배수일 때 윤년입니다. 윤년이면 1, 아니면 0을 출력하세요.',
    inputDesc: '연도 Y (1 <= Y <= 4,000)',
    outputDesc: '1 또는 0',
    testCases: [
      { input: '2024', output: '1' },
      { input: '1900', output: '0' },
      { input: '2000', output: '1' },
      { input: '2023', output: '0' },
    ],
  },
  {
    id: 6,
    title: '1부터 N까지의 합',
    difficulty: '입문',
    diffColor: '#059669',
    category: '반복문',
    description: '자연수 N이 주어질 때 1부터 N까지의 합을 출력하세요.',
    inputDesc: '자연수 N (1 <= N <= 10,000)',
    outputDesc: '1부터 N까지의 합',
    testCases: [
      { input: '10', output: '55' },
      { input: '1', output: '1' },
      { input: '100', output: '5050' },
      { input: '1000', output: '500500' },
    ],
  },
  {
    id: 7,
    title: '구구단 N단 출력',
    difficulty: '입문',
    diffColor: '#059669',
    category: '반복문',
    description: '자연수 N을 입력받아 N * 1부터 N * 9까지 형식에 맞춰 줄바꿈하여 출력하세요.',
    inputDesc: '자연수 N (2 <= N <= 9)',
    outputDesc: '각 줄에 "N * i = 결과" 형식으로 9줄 출력',
    testCases: [
      {
        input: '3',
        output: '3 * 1 = 3\n3 * 2 = 6\n3 * 3 = 9\n3 * 4 = 12\n3 * 5 = 15\n3 * 6 = 18\n3 * 7 = 21\n3 * 8 = 24\n3 * 9 = 27',
      },
      {
        input: '2',
        output: '2 * 1 = 2\n2 * 2 = 4\n2 * 3 = 6\n2 * 4 = 8\n2 * 5 = 10\n2 * 6 = 12\n2 * 7 = 14\n2 * 8 = 16\n2 * 9 = 18',
      },
      {
        input: '7',
        output: '7 * 1 = 7\n7 * 2 = 14\n7 * 3 = 21\n7 * 4 = 28\n7 * 5 = 35\n7 * 6 = 42\n7 * 7 = 49\n7 * 8 = 56\n7 * 9 = 63',
      },
      {
        input: '9',
        output: '9 * 1 = 9\n9 * 2 = 18\n9 * 3 = 27\n9 * 4 = 36\n9 * 5 = 45\n9 * 6 = 54\n9 * 7 = 63\n9 * 8 = 72\n9 * 9 = 81',
      },
    ],
  },
  {
    id: 8,
    title: '직각삼각형 별 찍기',
    difficulty: '입문',
    diffColor: '#059669',
    category: '반복문',
    description: '첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 출력하세요.',
    inputDesc: '자연수 N (1 <= N <= 15)',
    outputDesc: 'N줄에 걸쳐 별 출력',
    testCases: [
      { input: '4', output: '*\n**\n***\n****' },
      { input: '1', output: '*' },
      { input: '3', output: '*\n**\n***' },
      { input: '5', output: '*\n**\n***\n****\n*****' },
    ],
  },
  {
    id: 9,
    title: '약수의 개수',
    difficulty: '입문',
    diffColor: '#059669',
    category: '반복문',
    description: '자연수 N이 주어질 때 N의 양의 약수의 개수를 출력하세요.',
    inputDesc: '자연수 N (1 <= N <= 10,000)',
    outputDesc: '약수의 총 개수',
    testCases: [
      { input: '12', output: '6' },
      { input: '1', output: '1' },
      { input: '25', output: '3' },
      { input: '36', output: '9' },
    ],
  },
  {
    id: 10,
    title: '각 자릿수의 합',
    difficulty: '입문',
    diffColor: '#059669',
    category: '반복문',
    description: '음이 아닌 정수 N의 각 자릿수를 모두 더한 값을 출력하세요.',
    inputDesc: '정수 N (0 <= N <= 1,000,000,000)',
    outputDesc: '각 자릿수의 합',
    testCases: [
      { input: '12345', output: '15' },
      { input: '908', output: '17' },
      { input: '0', output: '0' },
      { input: '99999', output: '45' },
    ],
  },
  {
    id: 11,
    title: '최솟값과 최댓값',
    difficulty: '중급',
    diffColor: '#0284c7',
    category: '배열',
    description: 'N개의 정수가 주어질 때 최솟값과 최댓값을 공백으로 구분하여 출력하세요.',
    inputDesc: '첫째 줄에 개수 N, 둘째 줄에 공백으로 구분된 N개의 정수',
    outputDesc: '최솟값과 최댓값을 공백으로 구분하여 출력',
    testCases: [
      { input: '5\n20 10 35 30 7', output: '7 35' },
      { input: '1\n42', output: '42 42' },
      { input: '4\n-5 -12 -1 -9', output: '-12 -1' },
      { input: '6\n100 0 -50 250 10 99', output: '-50 250' },
    ],
  },
  {
    id: 12,
    title: '평균 초과 개수 세기',
    difficulty: '중급',
    diffColor: '#0284c7',
    category: '배열',
    description: 'N개의 점수 중 전체 평균보다 엄격히 큰(점수 > 평균) 점수의 개수를 출력하세요.',
    inputDesc: '첫째 줄에 N (1 <= N <= 1,000), 둘째 줄에 N개의 정수 점수',
    outputDesc: '평균을 초과하는 점수의 개수',
    testCases: [
      { input: '5\n50 60 70 80 90', output: '2' },
      { input: '4\n100 100 100 100', output: '0' },
      { input: '5\n10 20 30 40 100', output: '1' },
      { input: '6\n70 80 90 50 60 100', output: '3' },
    ],
  },
  {
    id: 13,
    title: '문자열 뒤집기',
    difficulty: '중급',
    diffColor: '#0284c7',
    category: '문자열',
    description: '공백 없는 영문 문자열 S를 거꾸로 뒤집어 출력하세요.',
    inputDesc: '문자열 S (1 <= 길이 <= 1,000)',
    outputDesc: '뒤집힌 문자열',
    testCases: [
      { input: 'python', output: 'nohtyp' },
      { input: 'algorithm', output: 'mhtirogla' },
      { input: 'a', output: 'a' },
      { input: 'TypingCode', output: 'edoCgnipyT' },
    ],
  },
  {
    id: 14,
    title: '모음 개수 세기',
    difficulty: '중급',
    diffColor: '#0284c7',
    category: '문자열',
    description: '영문 소문자 단어에서 모음(a, e, i, o, u)의 총 개수를 세어 출력하세요.',
    inputDesc: '영문 소문자 문자열 S (1 <= 길이 <= 1,000)',
    outputDesc: '모음의 개수',
    testCases: [
      { input: 'education', output: '5' },
      { input: 'rhythm', output: '0' },
      { input: 'banana', output: '3' },
      { input: 'queueing', output: '5' },
    ],
  },
  {
    id: 15,
    title: '팰린드롬 판별',
    difficulty: '중급',
    diffColor: '#0284c7',
    category: '문자열',
    description: '앞으로 읽으나 뒤로 읽으나 같은 단어를 팰린드롬이라 합니다. 팰린드롬이면 YES, 아니면 NO를 출력하세요.',
    inputDesc: '영문 소문자 단어 S (1 <= 길이 <= 1,000)',
    outputDesc: 'YES 또는 NO',
    testCases: [
      { input: 'level', output: 'YES' },
      { input: 'radar', output: 'YES' },
      { input: 'hello', output: 'NO' },
      { input: 'abba', output: 'YES' },
    ],
  },
  {
    id: 16,
    title: '중복 제거 오름차순 정렬',
    difficulty: '중급',
    diffColor: '#0284c7',
    category: '정렬',
    description: 'N개의 정수에서 중복된 값을 제거한 뒤 오름차순으로 정렬하여 공백으로 구분해 출력하세요.',
    inputDesc: '첫째 줄에 N (1 <= N <= 1,000), 둘째 줄에 N개의 정수',
    outputDesc: '중복이 제거된 오름차순 수열',
    testCases: [
      { input: '7\n4 2 5 2 1 4 3', output: '1 2 3 4 5' },
      { input: '4\n9 9 9 9', output: '9' },
      { input: '5\n10 -3 0 -3 5', output: '-3 0 5 10' },
      { input: '6\n30 10 20 10 50 40', output: '10 20 30 40 50' },
    ],
  },
  {
    id: 17,
    title: 'N번째 피보나치 수',
    difficulty: '중급',
    diffColor: '#0284c7',
    category: '수학',
    description: 'F(0) = 0, F(1) = 1, F(n) = F(n-1) + F(n-2)로 정의되는 피보나치 수열에서 F(N)을 출력하세요.',
    inputDesc: '정수 N (0 <= N <= 40)',
    outputDesc: 'N번째 피보나치 수',
    testCases: [
      { input: '10', output: '55' },
      { input: '0', output: '0' },
      { input: '1', output: '1' },
      { input: '20', output: '6765' },
    ],
  },
  {
    id: 18,
    title: '최대공약수와 최소공배수',
    difficulty: '중급',
    diffColor: '#0284c7',
    category: '수학',
    description: '두 자연수 A와 B의 최대공약수(GCD)와 최소공배수(LCM)를 공백으로 구분하여 출력하세요.',
    inputDesc: '공백으로 구분된 두 자연수 A, B (1 <= A, B <= 10,000)',
    outputDesc: '최대공약수와 최소공배수를 공백으로 구분하여 출력',
    testCases: [
      { input: '24 18', output: '6 72' },
      { input: '7 13', output: '1 91' },
      { input: '12 36', output: '12 36' },
      { input: '100 75', output: '25 300' },
    ],
  },
  {
    id: 19,
    title: '연속 문자 압축 (RLE)',
    difficulty: '중급',
    diffColor: '#0284c7',
    category: '문자열',
    description: '연속해서 나타나는 같은 문자를 "문자+개수" 형태로 압축해 출력하세요. (1개만 연속되어도 1을 붙입니다. 예: abc -> a1b1c1)',
    inputDesc: '영문 소문자 문자열 S (1 <= 길이 <= 1,000)',
    outputDesc: '압축된 문자열',
    testCases: [
      { input: 'aaabbcccc', output: 'a3b2c4' },
      { input: 'aabcccccaaa', output: 'a2b1c5a3' },
      { input: 'abc', output: 'a1b1c1' },
      { input: 'zzzzz', output: 'z5' },
    ],
  },
  {
    id: 20,
    title: '10진수를 2진수로 변환',
    difficulty: '중급',
    diffColor: '#0284c7',
    category: '수학',
    description: '음이 아닌 10진수 정수 N을 2진수 문자열로 변환하여 출력하세요.',
    inputDesc: '정수 N (0 <= N <= 1,000,000)',
    outputDesc: '불필요한 앞자리 0이 없는 2진수 (단, 0은 0)',
    testCases: [
      { input: '13', output: '1101' },
      { input: '0', output: '0' },
      { input: '8', output: '1000' },
      { input: '255', output: '11111111' },
    ],
  },
  {
    id: 21,
    title: '올바른 괄호 판별',
    difficulty: '심화',
    diffColor: '#7c3aed',
    category: '스택',
    description: '"("와 ")"로만 이루어진 문자열이 모든 괄호의 짝이 올바르게 맞으면 YES, 아니면 NO를 출력하세요.',
    inputDesc: '괄호 문자열 S (1 <= 길이 <= 2,000)',
    outputDesc: 'YES 또는 NO',
    testCases: [
      { input: '(()())', output: 'YES' },
      { input: '(()', output: 'NO' },
      { input: ')(', output: 'NO' },
      { input: '((())())()', output: 'YES' },
    ],
  },
  {
    id: 22,
    title: '소수의 개수 (1 ~ N)',
    difficulty: '심화',
    diffColor: '#7c3aed',
    category: '수학',
    description: '자연수 N이 주어질 때, 1부터 N 이하의 자연수 중 소수(Prime Number)의 개수를 출력하세요.',
    inputDesc: '자연수 N (2 <= N <= 100,000)',
    outputDesc: '소수의 총 개수',
    testCases: [
      { input: '10', output: '4' },
      { input: '2', output: '1' },
      { input: '100', output: '25' },
      { input: '1000', output: '168' },
    ],
  },
  {
    id: 23,
    title: '이진 탐색 — 숫자 찾기',
    difficulty: '심화',
    diffColor: '#7c3aed',
    category: '탐색',
    description: 'N개의 정수 배열이 주어졌을 때, 이어지는 M개의 각 숫자가 배열 안에 존재하면 1, 아니면 0을 공백으로 구분해 출력하세요.',
    inputDesc: '첫째 줄 N, 둘째 줄 N개의 정수, 셋째 줄 M, 넷째 줄 찾을 M개의 정수',
    outputDesc: 'M개의 판별 결과(1 또는 0)를 공백으로 구분해 한 줄에 출력',
    testCases: [
      { input: '5\n4 1 5 2 3\n5\n1 3 7 9 5', output: '1 1 0 0 1' },
      { input: '3\n10 20 30\n4\n5 10 25 30', output: '0 1 0 1' },
      { input: '4\n-10 -5 0 8\n3\n-5 1 8', output: '1 0 1' },
      { input: '1\n99\n2\n99 100', output: '1 0' },
    ],
  },
  {
    id: 24,
    title: '연속 부분배열 최대 합',
    difficulty: '심화',
    diffColor: '#7c3aed',
    category: 'DP',
    description: 'N개의 정수로 이루어진 수열에서 연속된 1개 이상의 수를 선택해 구할 수 있는 합 중 가장 큰 값을 출력하세요.',
    inputDesc: '첫째 줄 N (1 <= N <= 10,000), 둘째 줄 N개의 정수 (-1,000 <= 각 수 <= 1,000)',
    outputDesc: '연속 부분배열의 최대 합',
    testCases: [
      { input: '9\n-2 1 -3 4 -1 2 1 -5 4', output: '6' },
      { input: '5\n10 -4 3 1 5', output: '15' },
      { input: '4\n-8 -3 -6 -2', output: '-2' },
      { input: '6\n5 -1 5 -10 4 8', output: '12' },
    ],
  },
  {
    id: 25,
    title: '회의실 최대 배정',
    difficulty: '심화',
    diffColor: '#7c3aed',
    category: '그리디',
    description: '1개의 회의실에 N개의 회의 요청(시작시간, 종료시간)이 있을 때 겹치지 않게 배정할 수 있는 최대 회의 수를 구하세요. 끝나는 시각과 다음 시작 시각이 같으면 이어서 진행할 수 있습니다.',
    inputDesc: '첫째 줄 N (1 <= N <= 1,000), 다음 N줄에 각 회의의 시작시간과 종료시간',
    outputDesc: '배정 가능한 최대 회의 수',
    testCases: [
      { input: '5\n1 4\n3 5\n0 6\n5 7\n8 9', output: '3' },
      { input: '3\n1 3\n3 6\n6 8', output: '3' },
      { input: '4\n1 10\n2 3\n4 5\n6 7', output: '3' },
      { input: '4\n0 5\n1 5\n2 5\n3 5', output: '1' },
    ],
  },
  {
    id: 26,
    title: '계단 오르기 경우의 수',
    difficulty: '심화',
    diffColor: '#7c3aed',
    category: 'DP',
    description: '한 번에 1칸 또는 2칸씩 계단을 오를 수 있을 때, 총 N칸의 계단 정상에 도달하는 서로 다른 방법의 수를 출력하세요.',
    inputDesc: '자연수 N (1 <= N <= 40)',
    outputDesc: 'N칸에 도달하는 방법의 수',
    testCases: [
      { input: '4', output: '5' },
      { input: '1', output: '1' },
      { input: '5', output: '8' },
      { input: '10', output: '89' },
    ],
  },
];
