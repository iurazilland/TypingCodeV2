import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_52: PracticeRound = {
  "id": "py-basic-r52",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 52,
  "title_ko": "52레벨: 집합 연산과 자료구조 형변환",
  "title_en": "Level 52: Set Operations & Collection Casting",
  "totalQuestions": 13,
  "unlockedBlocks": [
    "print",
    "variable",
    "type",
    "sorted",
    "math"
  ],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "block",
      "prompt_ko": "두 집합 a = {1, 2, 3, 4}와 b = {3, 4, 5, 6}의 교집합을 오름차순 정렬하여 출력해보세요.",
      "prompt_en": "Print the sorted intersection of sets a = {1, 2, 3, 4} and b = {3, 4, 5, 6}.",
      "hint_ko": "교집합 연산자 &를 사용해 sorted(a & b)를 print()로 출력하세요.",
      "hint_en": "Use the & operator inside sorted(a & b).",
      "targetCode": "a = {1, 2, 3, 4}\nb = {3, 4, 5, 6}\nprint(sorted(a & b))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[3, 4]"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸에 교집합 식을 채워 dev와 pm 양쪽에 모두 속한 인원을 오름차순으로 출력해보세요.",
      "prompt_en": "Fill in the intersection expression to print members present in both dev and pm.",
      "hint_ko": "두 집합의 공통 원소를 구할 때는 & 연산자로 dev & pm처럼 연결합니다.",
      "hint_en": "Write dev & pm inside sorted().",
      "templateCode": "dev = {\"Kim\", \"Lee\", \"Park\"}\npm = {\"Lee\", \"Choi\", \"Kim\"}\nprint(sorted(§§§§§§§§))",
      "targetCode": "dev = {\"Kim\", \"Lee\", \"Park\"}\npm = {\"Lee\", \"Choi\", \"Kim\"}\nprint(sorted(dev & pm))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "['Kim', 'Lee']"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "prompt_ko": "두 집합 a = {10, 20}과 b = {20, 30, 40}의 합집합을 오름차순 정렬하여 출력해보세요.",
      "prompt_en": "Print the sorted union of sets a = {10, 20} and b = {20, 30, 40}.",
      "hint_ko": "합집합 연산자 |를 사용해 sorted(a | b)를 출력하면 중복 없이 합쳐진 목록이 나옵니다.",
      "hint_en": "Use the | operator inside sorted(a | b).",
      "targetCode": "a = {10, 20}\nb = {20, 30, 40}\nprint(sorted(a | b))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[10, 20, 30, 40]"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸에 합집합 식을 채워 두 집합의 전체 기술 스택 개수와 정렬된 목록을 출력해보세요.",
      "prompt_en": "Fill in the union expression to print the total skill count and sorted list.",
      "hint_ko": "파이프 기호(|)로 s1 | s2를 작성하면 두 집합의 모든 원소가 합쳐집니다.",
      "hint_en": "Write s1 | s2 inside sorted().",
      "templateCode": "s1 = {\"py\", \"js\"}\ns2 = {\"js\", \"sql\"}\nall_s = sorted(§§§§§§§)\nprint(len(all_s), all_s)",
      "targetCode": "s1 = {\"py\", \"js\"}\ns2 = {\"js\", \"sql\"}\nall_s = sorted(s1 | s2)\nprint(len(all_s), all_s)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "3 ['js', 'py', 'sql']"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "prompt_ko": "집합 a = {1, 2, 3, 4}에서 b = {2, 4}의 원소를 뺀 차집합을 정렬하여 출력해보세요.",
      "prompt_en": "Print the sorted difference a - b for a = {1, 2, 3, 4} and b = {2, 4}.",
      "hint_ko": "차집합 연산자 -를 사용해 sorted(a - b)를 출력하세요.",
      "hint_en": "Use sorted(a - b) to keep elements in a that are not in b.",
      "targetCode": "a = {1, 2, 3, 4}\nb = {2, 4}\nprint(sorted(a - b))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[1, 3]"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸에 차집합 식을 채워 전체 할 일(todo) 중 완료(done)되지 않은 항목만 정렬해 출력해보세요.",
      "prompt_en": "Fill in the set difference expression to print remaining tasks in todo excluding done.",
      "hint_ko": "todo에서 done에 속한 원소를 제거하려면 todo - done을 사용합니다.",
      "hint_en": "Write todo - done inside sorted().",
      "templateCode": "todo = {\"mail\", \"code\", \"test\"}\ndone = {\"mail\"}\nleft = sorted(§§§§§§§§§§§)\nprint(left)",
      "targetCode": "todo = {\"mail\", \"code\", \"test\"}\ndone = {\"mail\"}\nleft = sorted(todo - done)\nprint(left)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "['code', 'test']"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "prompt_ko": "문자열 \"ABC\"를 리스트로, 리스트 [1, 2, 3]을 튜플로 각각 형변환해 나란히 출력해보세요.",
      "prompt_en": "Convert \"ABC\" to a list and [1, 2, 3] to a tuple, then print both on one line.",
      "hint_ko": "chars = list(\"ABC\")와 nums = tuple([1, 2, 3])을 만든 뒤 print(chars, nums)로 출력하세요.",
      "hint_en": "Use list(\"ABC\") and tuple([1, 2, 3]), then print them together.",
      "targetCode": "chars = list(\"ABC\")\nnums = tuple([1, 2, 3])\nprint(chars, nums)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "['A', 'B', 'C'] (1, 2, 3)"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "두 빈칸을 채워 튜플 t를 리스트로 바꿔 30을 추가한 뒤 다시 튜플로 변환해 출력해보세요.",
      "prompt_en": "Fill in the casting calls to convert tuple t to a list, append 30, and convert back to a tuple.",
      "hint_ko": "수정할 때는 list(t)로 리스트로 바꾸고, 수정 후에는 tuple(arr)로 다시 불변 튜플로 바꿉니다.",
      "hint_en": "Use list(t) on line 2 and tuple(arr) on line 4.",
      "templateCode": "t = (10, 20)\narr = §§§§§§§\narr.append(30)\nres = §§§§§§§§§§\nprint(res)",
      "targetCode": "t = (10, 20)\narr = list(t)\narr.append(30)\nres = tuple(arr)\nprint(res)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "(10, 20, 30)"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "block",
      "prompt_ko": "두 집합 a = {1, 3, 5, 7}과 b = {3, 4, 5, 8}의 공통 원소 개수와 정렬된 튜플을 출력해보세요.",
      "prompt_en": "Print the count of common items between a = {1, 3, 5, 7} and b = {3, 4, 5, 8} and their sorted tuple.",
      "hint_ko": "교집합 a & b에 대해 len(a & b)와 tuple(sorted(a & b))를 나란히 출력하세요.",
      "hint_en": "Print len(a & b) and tuple(sorted(a & b)).",
      "targetCode": "a = {1, 3, 5, 7}\nb = {3, 4, 5, 8}\nprint(len(a & b), tuple(sorted(a & b)))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "2 (3, 5)"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "두 빈칸을 채워 두 줄로 입력된 단어들의 공통 원소 개수와 정렬된 교집합 리스트를 출력해보세요.",
      "prompt_en": "Fill in the blanks to convert input words to sets and print the common count and sorted intersection.",
      "hint_ko": "첫 줄에는 리스트를 집합으로 바꾸는 set을, 셋째 줄에는 교집합 a & b를 입력하세요.",
      "hint_en": "Use set on line 1 and a & b inside len() on line 3.",
      "templateCode": "a = §§§(input().split())\nb = set(input().split())\nprint(len(§§§§§), sorted(a & b))",
      "targetCode": "a = set(input().split())\nb = set(input().split())\nprint(len(a & b), sorted(a & b))",
      "testCases": [
        {
          "id": 1,
          "input": "a b c\nb c d",
          "expectedOutput": "2 ['b', 'c']"
        },
        {
          "id": 2,
          "input": "1 2 2 3\n3 4",
          "expectedOutput": "1 ['3']"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "두 집합의 모든 원소를 합쳐 정렬하려다 TypeError가 발생했습니다. 합집합 연산이 되도록 고쳐보세요.",
      "prompt_en": "Fix the TypeError so the union of sets a and b is sorted and printed.",
      "hint_ko": "집합끼리는 + 연산자를 지원하지 않습니다. 합집합 전용 연산자 기호로 바꿔보세요.",
      "hint_en": "Sets do not support +; replace it with the set union operator.",
      "templateCode": "a = {1, 2, 3}\nb = {3, 4, 5}\nprint(sorted(a + b))",
      "targetCode": "a = {1, 2, 3}\nb = {3, 4, 5}\nprint(sorted(a | b))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[1, 2, 3, 4, 5]"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "단어 word를 입력받는 코드 아래에 한 줄을 추가하여 서로 다른 알파벳의 개수를 출력해보세요.",
      "prompt_en": "Add one line below word = input() to print the number of distinct characters in word.",
      "hint_ko": "set(word)로 중복 글자를 없앤 뒤 len()으로 감싸 print(len(set(word)))를 작성하세요.",
      "hint_en": "Write print(len(set(word))) on line 2.",
      "templateCode": "word = input()\n§§§§§§§§§§§§§§§§§§§§§",
      "targetCode": "word = input()\nprint(len(set(word)))",
      "testCases": [
        {
          "id": 1,
          "input": "banana",
          "expectedOutput": "3"
        },
        {
          "id": 2,
          "input": "apple",
          "expectedOutput": "4"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "다음 파이썬 코드를 실행했을 때 출력될 결과를 선택해보세요.",
      "prompt_en": "Select the exact output produced when the following Python code runs.",
      "hint_ko": "a는 {'a','b','c'}, b는 {'b','c','d'}이므로 차집합 a - b는 ['a'], 합집합 원소 수는 4입니다.",
      "hint_en": "a is {'a','b','c'} and b is {'b','c','d'}, so sorted(a - b) is ['a'] and len(a | b) is 4.",
      "targetCode": "a = set(\"abca\")\nb = set(\"bcd\")\nprint(sorted(a - b), len(a | b))",
      "choices": [
        "['a'] 7",
        "['a', 'd'] 4",
        "['d'] 4",
        "['a'] 4"
      ],
      "correctChoiceIndex": 3,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "['a'] 4"
        }
      ]
    }
  ]
};
