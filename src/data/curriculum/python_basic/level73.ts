import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_73: PracticeRound = {
  "id": "py-basic-r73",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 73,
  "title_ko": "73레벨: 집합 연산자(&, |, -)와 안전 삭제(.discard)",
  "title_en": "Level 73: Set Algebra (&, |, -) & Safe .discard()",
  "description_ko": "두 집합의 교집합(&), 합집합(|), 차집합(-) 연산자와 없는 원소도 오류 없이 지우는 .discard()를 익힙니다.",
  "description_en": "Compute set intersections (&), unions (|), and differences (-), and safely remove elements with .discard().",
  "totalQuestions": 15,
  "unlockedBlocks": [
    "print",
    "variable",
    "input",
    "method",
    "type",
    "math",
    "sorted",
    "if",
    "for_in",
    "while",
    "def",
    "class"
  ],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 교집합 연산자(&)로 두 집합에 모두 들어 있는 공통 원소만 골라 정렬 출력해보세요.",
      "prompt_en": "[Block] Use the set intersection operator (&) to find elements common to both sets.",
      "hint_ko": "집합은 순서가 없으므로 sorted()에 넘기면 오름차순으로 정렬된 리스트를 얻을 수 있습니다.",
      "hint_en": "Because sets are unordered, passing the result to sorted() produces a list in ascending order.",
      "targetCode": "a = {\"py\", \"js\", \"sql\"}\nb = {\"js\", \"go\", \"py\"}\nboth = a & b\nprint(sorted(both))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "['js', 'py']"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 교집합 연산자를 채워 두 집합 s1, s2에 모두 들어 있는 숫자만 정렬해 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in the intersection operator to print numbers common to s1 and s2.",
      "hint_ko": "양쪽 모두에 속하는 공통 원소를 구하는 앰퍼샌드(&) 기호를 채우세요.",
      "hint_en": "Type the ampersand symbol (&) for set intersection.",
      "templateCode": "s1 = {10, 20, 30}\ns2 = {20, 30, 40}\ncommon = s1 § s2\nprint(sorted(common))",
      "targetCode": "s1 = {10, 20, 30}\ns2 = {20, 30, 40}\ncommon = s1 & s2\nprint(sorted(common))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[20, 30]"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 합집합 연산자(|)로 두 팀의 모든 고유 구성원을 합쳐 개수와 명단을 출력해보세요.",
      "prompt_en": "[Block] Use the set union operator (|) to combine all unique members from both teams.",
      "hint_ko": "합집합 결과에 len()을 쓰면 중복을 제외한 전체 고유 원소의 개수를 구할 수 있습니다.",
      "hint_en": "Applying len() to the union set gives the total count of unique elements across both sets.",
      "targetCode": "team1 = {\"kim\", \"lee\"}\nteam2 = {\"lee\", \"park\"}\nall_members = team1 | team2\nprint(len(all_members), sorted(all_members))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "3 ['kim', 'lee', 'park']"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 초대 명단(invited)에서 입장 명단(checked)을 뺀 차집합을 구하도록 연산자를 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the set difference operator to find guests in invited who are not in checked.",
      "hint_ko": "왼쪽 집합에서 오른쪽 집합의 원소를 빼내는 차집합 기호 -를 사용하세요.",
      "hint_en": "Use the minus sign (-) to subtract checked from invited.",
      "templateCode": "invited = {\"amy\", \"bob\", \"dan\"}\nchecked = {\"bob\"}\nwaiting = invited § checked\nprint(sorted(waiting))",
      "targetCode": "invited = {\"amy\", \"bob\", \"dan\"}\nchecked = {\"bob\"}\nwaiting = invited - checked\nprint(sorted(waiting))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "['amy', 'dan']"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 집합의 .discard() 메서드로 없는 원소도 KeyError 없이 안전하게 삭제해보세요.",
      "prompt_en": "[Block] Use .discard() on a set to remove an existing element and safely ignore a missing one.",
      "hint_ko": ".remove()는 없는 원소를 지울 때 오류를 내지만, .discard()는 조건 검사 없이도 안전하게 호출할 수 있습니다.",
      "hint_en": "Unlike .remove(), .discard() never raises an error on missing elements.",
      "targetCode": "tags = {\"new\", \"sale\"}\ntags.discard(\"sale\")\ntags.discard(\"vip\")\nprint(sorted(tags))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "['new']"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 입력 원소가 없더라도 오류 없이 삭제한 뒤 \"d\"를 추가하도록 두 집합 메서드를 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the safe-remove set method and the element-adding set method.",
      "hint_ko": "첫 빈칸은 없어도 조용히 지우는 7글자 메서드 discard를, 둘째 빈칸은 원소를 추가하는 add를 쓰세요.",
      "hint_en": "Use discard in the first blank and add in the second blank.",
      "templateCode": "active = {\"a\", \"b\", \"c\"}\ndrop = input()\nactive.§§§§§§§(drop)\nactive.§§§(\"d\")\nprint(sorted(active))",
      "targetCode": "active = {\"a\", \"b\", \"c\"}\ndrop = input()\nactive.discard(drop)\nactive.add(\"d\")\nprint(sorted(active))",
      "testCases": [
        {
          "id": 1,
          "input": "b",
          "expectedOutput": "['a', 'c', 'd']"
        },
        {
          "id": 2,
          "input": "z",
          "expectedOutput": "['a', 'b', 'c', 'd']"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 두 줄의 단어를 각각 set()으로 만들고 합집합(|) 개수와 교집합(&)을 출력해보세요.",
      "prompt_en": "[Block] Convert two input lines into sets and print the union count and sorted intersection.",
      "hint_ko": "len(s1 | s2)는 두 줄을 합친 고유 단어 수를, sorted(s1 & s2)는 공통 단어의 정렬 리스트를 반환합니다.",
      "hint_en": "len(s1 | s2) counts all distinct words, while sorted(s1 & s2) lists shared words in order.",
      "targetCode": "s1 = set(input().split())\ns2 = set(input().split())\nprint(len(s1 | s2), sorted(s1 & s2))",
      "testCases": [
        {
          "id": 1,
          "input": "a b a c\nb c d",
          "expectedOutput": "4 ['b', 'c']"
        },
        {
          "id": 2,
          "input": "x y\ny z",
          "expectedOutput": "3 ['y']"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 두 집합 a와 b의 합집합에서 금지 번호 집합 banned를 제외하도록 두 연산자를 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the union and difference operators to compute (a union b) minus banned.",
      "hint_ko": "먼저 두 집합을 합치는 세로 막대(|) 기호를 쓰고, 그 결과에서 금지 집합을 빼는 차집합(-) 기호를 쓰세요.",
      "hint_en": "Unite a and b with |, then subtract banned with -.",
      "templateCode": "a = {1, 2, 3}\nb = {3, 4, 5}\nbanned = {2, 5}\nvalid = (a § b) § banned\nprint(sorted(valid))",
      "targetCode": "a = {1, 2, 3}\nb = {3, 4, 5}\nbanned = {2, 5}\nvalid = (a | b) - banned\nprint(sorted(valid))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[1, 3, 4]"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 함수 안에서 (a - b) | (b - a)로 한쪽 집합에만 속한 원소들을 구해 반환해보세요.",
      "prompt_en": "[Block] Combine (a - b) | (b - a) inside only_one to return elements exclusive to either set.",
      "hint_ko": "소괄호로 각 차집합을 먼저 계산한 뒤 세로 막대(|) 합집합으로 묶어 양쪽의 고유 원소를 합칩니다.",
      "hint_en": "Parentheses evaluate each directional difference first before the union bar (|) merges them together.",
      "targetCode": "def only_one(a, b):\n    diff = (a - b) | (b - a)\n    return sorted(diff)\n\nx = {1, 2, 3}\ny = {2, 3, 4}\nprint(only_one(x, y))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[1, 4]"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 함수 안에서 권한 집합의 drop 항목을 안전 삭제하고 req와의 공통 권한만 정렬해 반환해보세요.",
      "prompt_en": "[Fill Blank] Safely discard drop from roles and return the sorted intersection with req.",
      "hint_ko": "없는 항목도 조용히 지우는 7글자 메서드 discard와 공통 원소를 구하는 교집합 기호 &를 넣으세요.",
      "hint_en": "Use discard on line 2 and & on line 3.",
      "templateCode": "def clean_roles(roles, drop, req):\n    roles.§§§§§§§(drop)\n    return sorted(roles § req)\n\nr = {\"read\", \"write\", \"admin\"}\nprint(clean_roles(r, \"write\", {\"read\", \"exec\"}))",
      "targetCode": "def clean_roles(roles, drop, req):\n    roles.discard(drop)\n    return sorted(roles & req)\n\nr = {\"read\", \"write\", \"admin\"}\nprint(clean_roles(r, \"write\", {\"read\", \"exec\"}))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "['read']"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 두 집합을 + 기호로 합치려다 오류가 나는 버그를 고쳐 합집합이 출력되도록 수정해보세요.",
      "prompt_en": "[Fix Bug] Fix the TypeError caused by using + on two sets instead of the set union operator |.",
      "hint_ko": "집합끼리는 + 기호를 지원하지 않으므로 합집합 연산자 | 로 바꿔보세요.",
      "hint_en": "Replace + with the vertical bar operator | for set union.",
      "templateCode": "a = {\"red\", \"blue\"}\nb = {\"blue\", \"green\"}\nmerged = a + b\nprint(sorted(merged))",
      "targetCode": "a = {\"red\", \"blue\"}\nb = {\"blue\", \"green\"}\nmerged = a | b\nprint(sorted(merged))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "['blue', 'green', 'red']"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 두 집합의 공통 원소(교집합)만 구하려다 합집합 연산자를 잘못 쓴 버그를 고쳐 [2, 3]을 출력해보세요.",
      "prompt_en": "[Fix Bug] Fix the set operator so common holds the intersection of s1 and s2 instead of their union.",
      "hint_ko": "양쪽 집합에 모두 들어 있는 공통 원소만 남기려면 합집합(|) 대신 교집합(&) 연산자를 써야 합니다.",
      "hint_en": "Replace | with & to compute the set intersection.",
      "templateCode": "s1 = {1, 2, 3}\ns2 = {2, 3, 4}\ncommon = s1 | s2\nprint(sorted(common))",
      "targetCode": "s1 = {1, 2, 3}\ns2 = {2, 3, 4}\ncommon = s1 & s2\nprint(sorted(common))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[2, 3]"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 전체 번호 all_ids에서 완료 번호 done을 뺀 차집합을 정렬해 변수 left에 저장하는 한 줄을 완성해보세요.",
      "prompt_en": "[Complete Line] Subtract done from all_ids, sort the difference with sorted(), and assign it to left.",
      "hint_ko": "left = sorted(all_ids - done) 형태로 차집합 정렬 리스트를 변수 left에 저장하세요.",
      "hint_en": "Write left = sorted(all_ids - done).",
      "templateCode": "all_ids = {101, 102, 103, 104}\ndone = {102, 104}\n§§§§§§§§§§§§§§§§§§§§§§§§§§§§§\nprint(left)",
      "targetCode": "all_ids = {101, 102, 103, 104}\ndone = {102, 104}\nleft = sorted(all_ids - done)\nprint(left)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[101, 103]"
        }
      ]
    },
    {
      "id": 14,
      "step": 14,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 집합 tags에서 \"bug\" 원소를 .discard() 메서드로 안전 삭제하는 한 줄을 완성해보세요.",
      "prompt_en": "[Complete Line] Safely remove \"bug\" from the set tags using .discard().",
      "hint_ko": "tags.discard(\"bug\") 형태로 안전 삭제 메서드를 호출하세요.",
      "hint_en": "Write tags.discard(\"bug\").",
      "templateCode": "tags = {\"py\", \"bug\", \"ai\"}\n§§§§§§§§§§§§§§§§§§§\nprint(sorted(tags))",
      "targetCode": "tags = {\"py\", \"bug\", \"ai\"}\ntags.discard(\"bug\")\nprint(sorted(tags))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "['ai', 'py']"
        }
      ]
    },
    {
      "id": 15,
      "step": 15,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 다음 집합 .discard(), 교집합(&), 차집합(-) 코드의 실행 결과를 선택해보세요.",
      "prompt_en": "[Predict Output] Select the exact output of the following set operations.",
      "hint_ko": ".discard(9)는 없는 원소도 오류 없이 넘어가며, 남은 a({1, 3, 4})와 b({3, 4, 5})의 교집합과 차집합(b - a)을 구하세요.",
      "hint_en": "a becomes {1, 3, 4} after discard; then evaluate sorted(a & b) and sorted(b - a).",
      "targetCode": "a = {1, 2, 3, 4}\nb = {3, 4, 5}\na.discard(2)\na.discard(9)\nprint(sorted(a & b), sorted(b - a))",
      "choices": [
        "[3, 4] [5]",
        "[2, 3, 4] [5]",
        "[3, 4] [1, 5]",
        "KeyError"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[3, 4] [5]"
        }
      ]
    }
  ]
};
