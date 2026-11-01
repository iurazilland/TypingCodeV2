import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_53: PracticeRound = {
  "id": "py-basic-r53",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 53,
  "title_ko": "53레벨: 튜플·딕셔너리·집합 종합 문제풀이",
  "title_en": "Level 53: Section 7 Comprehensive Review",
  "totalQuestions": 10,
  "unlockedBlocks": [
    "print",
    "variable",
    "input",
    "type",
    "method",
    "math",
    "sorted",
    "if",
    "for_in"
  ],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸을 채워 튜플 rec를 세 변수로 언패킹하고 이름과 두 점수의 평균 몫을 출력해보세요.",
      "prompt_en": "Fill in the blank to unpack tuple rec into name, s1, s2 and print name with (s1 + s2) // 2.",
      "hint_ko": "출력문에서 사용하는 변수 이름에 맞춰 name, s1, s2 순서로 언패킹하세요.",
      "hint_en": "Write name, s1, s2 on the left side of = rec.",
      "templateCode": "rec = (\"Kim\", 80, 90)\n§§§§§§§§§§§§ = rec\nprint(name, (s1 + s2) // 2)",
      "targetCode": "rec = (\"Kim\", 80, 90)\nname, s1, s2 = rec\nprint(name, (s1 + s2) // 2)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Kim 85"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸에 .get() 식을 채워 단어별 등장 횟수를 누적하고 첫 번째 단어의 등장 횟수를 출력해보세요.",
      "prompt_en": "Fill in the .get() expression to count word frequencies and print the count of the first word.",
      "hint_ko": "기존 등장 횟수가 없으면 0을 가져오도록 cnt.get(w, 0)에 1을 더해 저장합니다.",
      "hint_en": "Use cnt.get(w, 0) so unseen words start from 0 before adding 1.",
      "templateCode": "words = input().split()\ncnt = {}\nfor w in words:\n    cnt[w] = §§§§§§§§§§§§§ + 1\nprint(cnt[words[0]])",
      "targetCode": "words = input().split()\ncnt = {}\nfor w in words:\n    cnt[w] = cnt.get(w, 0) + 1\nprint(cnt[words[0]])",
      "testCases": [
        {
          "id": 1,
          "input": "go py go go",
          "expectedOutput": "3"
        },
        {
          "id": 2,
          "input": "hi bye",
          "expectedOutput": "1"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "두 빈칸을 채워 첫 줄에는 두 집합의 교집합을, 둘째 줄에는 s1에서 s2를 뺀 차집합을 정렬해 출력해보세요.",
      "prompt_en": "Fill in the blanks to print the sorted intersection on line 1 and sorted difference s1 - s2 on line 2.",
      "hint_ko": "교집합은 s1 & s2, 차집합은 s1 - s2 연산식을 각각 sorted() 안에 적어줍니다.",
      "hint_en": "Enter s1 & s2 in the first sorted() and s1 - s2 in the second sorted().",
      "templateCode": "s1 = set(input().split())\ns2 = set(input().split())\nprint(sorted(§§§§§§§))\nprint(sorted(§§§§§§§))",
      "targetCode": "s1 = set(input().split())\ns2 = set(input().split())\nprint(sorted(s1 & s2))\nprint(sorted(s1 - s2))",
      "testCases": [
        {
          "id": 1,
          "input": "a b c\nb c d",
          "expectedOutput": "['b', 'c']\n['a']"
        },
        {
          "id": 2,
          "input": "1 2 3\n2",
          "expectedOutput": "['2']\n['1', '3']"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "튜플 base 뒤에 요소 3 하나를 이어 붙여 (1, 2, 3)을 출력하려다 TypeError가 발생했습니다. 오류를 고쳐보세요.",
      "prompt_en": "Fix the TypeError so extra is a single-element tuple and base + extra prints (1, 2, 3).",
      "hint_ko": "소괄호 안에 숫자 하나만 적으면 정수가 됩니다. 단일 요소 튜플이 되도록 쉼표를 추가해보세요.",
      "hint_en": "A single-element tuple requires a trailing comma inside the parentheses.",
      "templateCode": "base = (1, 2)\nextra = (3)\nprint(base + extra)",
      "targetCode": "base = (1, 2)\nextra = (3,)\nprint(base + extra)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "(1, 2, 3)"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "80점 이상인 학생의 이름을 출력하려다 순회 부분에서 오류가 발생했습니다. 키와 값을 함께 꺼내도록 고쳐보세요.",
      "prompt_en": "Fix the dictionary loop method so name and sc unpack properly and students with >= 80 print.",
      "hint_ko": ".values()는 값만 반환하므로 두 변수로 나눌 수 없습니다. 키-값 쌍을 반환하는 메서드로 바꿔보세요.",
      "hint_en": "Replace .values() with the dictionary method that yields (key, value) pairs.",
      "templateCode": "scores = {\"Kim\": 92, \"Lee\": 75, \"Park\": 88}\nfor name, sc in scores.values():\n    if sc >= 80:\n        print(name)",
      "targetCode": "scores = {\"Kim\": 92, \"Lee\": 75, \"Park\": 88}\nfor name, sc in scores.items():\n    if sc >= 80:\n        print(name)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Kim\nPark"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "집합에 없는 태그가 입력되면 KeyError로 멈춥니다. 없는 원소여도 오류 없이 넘어가도록 고쳐보세요.",
      "prompt_en": "Fix the KeyError when k is not in tags so missing tags are ignored without crashing.",
      "hint_ko": "없는 원소에서 에러를 내는 삭제 메서드 대신 안전하게 무시하는 집합 삭제 메서드를 사용해보세요.",
      "hint_en": "Replace the strict removal method with the safe set removal method that ignores missing items.",
      "templateCode": "tags = {\"new\", \"hot\"}\nk = input()\ntags.remove(k)\nprint(sorted(tags))",
      "targetCode": "tags = {\"new\", \"hot\"}\nk = input()\ntags.discard(k)\nprint(sorted(tags))",
      "testCases": [
        {
          "id": 1,
          "input": "old",
          "expectedOutput": "['hot', 'new']"
        },
        {
          "id": 2,
          "input": "hot",
          "expectedOutput": "['new']"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "단어 리스트 items 아래에 한 줄을 추가하여 중복을 제거하고 오름차순 정렬한 결과를 튜플로 출력해보세요.",
      "prompt_en": "Add one line below items = input().split() to deduplicate, sort ascending, and print as a tuple.",
      "hint_ko": "set(items)로 중복 제거, sorted()로 정렬, tuple()로 형변환해 print(tuple(sorted(set(items))))를 작성하세요.",
      "hint_en": "Write print(tuple(sorted(set(items)))) on line 2.",
      "templateCode": "items = input().split()\n§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§",
      "targetCode": "items = input().split()\nprint(tuple(sorted(set(items))))",
      "testCases": [
        {
          "id": 1,
          "input": "c a b a c",
          "expectedOutput": "('a', 'b', 'c')"
        },
        {
          "id": 2,
          "input": "z x z",
          "expectedOutput": "('x', 'z')"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "점수를 갱신한 코드 아래에 한 줄을 추가하여 pts의 모든 점수 합계를 출력해보세요.",
      "prompt_en": "Add one line below pts.update(...) to print the sum of all score values in pts.",
      "hint_ko": "pts.values()를 sum()에 넣어 print(sum(pts.values()))로 출력하세요.",
      "hint_en": "Write print(sum(pts.values())) on line 3.",
      "templateCode": "pts = {\"Kim\": 40, \"Lee\": 50}\npts.update({\"Kim\": 70, \"Park\": 60})\n§§§§§§§§§§§§§§§§§§§§§§§§",
      "targetCode": "pts = {\"Kim\": 40, \"Lee\": 50}\npts.update({\"Kim\": 70, \"Park\": 60})\nprint(sum(pts.values()))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "180"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "다음 파이썬 코드를 실행했을 때 출력될 결과를 선택해보세요.",
      "prompt_en": "Select the exact output produced when the following Python code runs.",
      "hint_ko": "언패킹으로 \"Seo\"에 10이 더해져 60이 되고, \"Han\"은 pop으로 삭제되어 .get(\"Han\", 0)은 0을 반환합니다.",
      "hint_en": "d[\"Seo\"] becomes 60, and \"Han\" is popped so d.get(\"Han\", 0) returns the default 0.",
      "targetCode": "info = (\"Seo\", 10)\nname, bonus = info\nd = {\"Seo\": 50, \"Han\": 40}\nd[name] += bonus\nd.pop(\"Han\")\nprint(d.get(\"Seo\", 0), d.get(\"Han\", 0))",
      "choices": [
        "60 40",
        "60 0",
        "50 0",
        "60 None"
      ],
      "correctChoiceIndex": 1,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "60 0"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "다음 파이썬 코드를 실행했을 때 출력될 결과를 선택해보세요.",
      "prompt_en": "Select the exact output produced when the following Python code runs.",
      "hint_ko": "s1은 {'a','b','c'}, s2는 {'b','c','d'}이므로 교집합 정렬은 ['b', 'c'], 합집합 길이는 4입니다.",
      "hint_en": "s1 & s2 has 'b' and 'c', while s1 | s2 has 4 unique keys {'a', 'b', 'c', 'd'}.",
      "targetCode": "d = {\"a\": 1, \"b\": 2, \"c\": 3}\ns1 = set(d.keys())\ns2 = {\"b\", \"c\", \"d\"}\nprint(sorted(s1 & s2), len(s1 | s2))",
      "choices": [
        "['b', 'c'] 6",
        "['a', 'd'] 4",
        "['b', 'c'] 3",
        "['b', 'c'] 4"
      ],
      "correctChoiceIndex": 3,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "['b', 'c'] 4"
        }
      ]
    }
  ]
};
