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
  "totalQuestions": 13,
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
      "prompt_ko": "두 집합 a와 b에 공통으로 들어 있는 교집합(a & b)을 구해 sorted()로 오름차순 리스트를 출력해보세요.",
      "prompt_en": "Compute the intersection a & b and print it in ascending order using sorted().",
      "hint_ko": "a & b는 두 집합 모두에 포함된 공통 원소만 모은 새 집합을 만듭니다.",
      "hint_en": "a & b returns a new set containing elements present in both a and b.",
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
      "prompt_ko": "빈칸에 교집합 연산자를 채워 두 집합 s1, s2에 모두 들어 있는 숫자만 정렬해 출력해보세요.",
      "prompt_en": "Fill in the intersection operator to print numbers common to s1 and s2.",
      "hint_ko": "파이썬 집합에서 교집합 기호는 앰퍼샌드(&)입니다.",
      "hint_en": "Use the & operator for set intersection.",
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
      "prompt_ko": "두 팀 집합을 합집합(team1 | team2)으로 합쳐 전체 인원수와 오름차순 명단을 출력해보세요.",
      "prompt_en": "Unite team1 and team2 with | and print the total unique member count and sorted member list.",
      "hint_ko": "a | b는 중복을 자동으로 한 번만 남기고 두 집합의 모든 원소를 합칩니다.",
      "hint_en": "a | b combines all unique elements from both sets.",
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
      "prompt_ko": "초대 명단(invited)에서 이미 입장한 명단(checked)을 뺀 차집합을 구하도록 빈칸에 연산자를 채워보세요.",
      "prompt_en": "Fill in the set difference operator to find guests in invited who are not in checked.",
      "hint_ko": "왼쪽 집합에서 오른쪽 집합 원소들을 제외할 때는 빼기(-) 연산자를 씁니다.",
      "hint_en": "Use the - operator to subtract elements of checked from invited.",
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
      "prompt_ko": "집합 tags에서 .discard(\"sale\")과 없는 원소 .discard(\"vip\")를 차례로 실행하고 정렬된 결과를 출력해보세요.",
      "prompt_en": "Call tags.discard(\"sale\") and tags.discard(\"vip\") and print sorted(tags).",
      "hint_ko": ".discard(값)는 해당 원소가 집합에 없어도 KeyError를 내지 않고 조용히 넘어가는 안전한 삭제 메서드입니다.",
      "hint_en": ".discard(x) removes x if present and does nothing (no error) if x is absent.",
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
      "prompt_ko": "입력받은 원소가 없더라도 오류 없이 삭제한 뒤 새 원소 \"d\"를 추가하도록 두 집합 메서드 빈칸을 채워보세요.",
      "prompt_en": "Fill in the safe-remove set method and the element-adding set method.",
      "hint_ko": "오류 없는 안전 삭제는 .discard(drop), 집합에 원소 하나를 넣을 때는 .add(\"d\")를 사용합니다.",
      "hint_en": "Use .discard(drop) for safe removal and .add(\"d\") to insert \"d\".",
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
      "prompt_ko": "두 줄의 단어 입력을 각각 set()으로 중복 제거해 담은 뒤, 합집합 크기와 정렬된 교집합 리스트를 출력해보세요.",
      "prompt_en": "Convert two lines of space-separated words into sets s1 and s2, then print len(s1 | s2) and sorted(s1 & s2).",
      "hint_ko": "set(input().split())으로 중복 없는 집합을 만든 뒤 | 와 & 연산자로 합집합과 교집합을 바로 구할 수 있습니다.",
      "hint_en": "Build sets via set(input().split()), then apply | for union and & for intersection.",
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
      "prompt_ko": "두 집합 a와 b의 전체 합집합에서 금지 번호 집합 banned에 속한 원소들을 제외하도록 두 연산자 빈칸을 채워보세요.",
      "prompt_en": "Fill in the union and difference operators to compute (a union b) minus banned.",
      "hint_ko": "합집합은 파이프 기호(|), 차집합은 빼기 기호(-)를 사용합니다.",
      "hint_en": "Use | for union and - for set difference.",
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
      "prompt_ko": "두 집합 중 한쪽에만 들어 있는 원소들((a - b) | (b - a))을 오름차순 리스트로 반환하는 only_one(a, b) 함수를 완성해보세요.",
      "prompt_en": "Complete only_one(a, b) returning sorted((a - b) | (b - a)) and print the result for x and y.",
      "hint_ko": "a에만 있는 원소(a - b)와 b에만 있는 원소(b - a)를 합집합(|)으로 합치면 한쪽에만 속한 원소들이 모입니다.",
      "hint_en": "Combine (a - b) and (b - a) with | to get elements exclusive to either set.",
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
      "prompt_ko": "권한 집합을 관리하는 클래스에서 없는 권한도 안전하게 회수하고, 요청 권한과의 공통 권한만 출력하도록 빈칸을 채워보세요.",
      "prompt_en": "Fill in the safe-remove method in revoke and the intersection operator in print.",
      "hint_ko": "안전 삭제 메서드는 .discard(role)이며, 두 권한 집합의 공통 항목은 & 연산자로 구합니다.",
      "hint_en": "Use .discard(role) in revoke and & to intersect acl.roles with req.",
      "templateCode": "class AccessList:\n    def __init__(self):\n        self.roles = {\"read\", \"write\"}\n\n    def revoke(self, role):\n        self.roles.§§§§§§§(role)\n\nacl = AccessList()\nacl.revoke(\"admin\")\nacl.revoke(\"write\")\nreq = {\"read\", \"exec\"}\nprint(sorted(acl.roles § req))",
      "targetCode": "class AccessList:\n    def __init__(self):\n        self.roles = {\"read\", \"write\"}\n\n    def revoke(self, role):\n        self.roles.discard(role)\n\nacl = AccessList()\nacl.revoke(\"admin\")\nacl.revoke(\"write\")\nreq = {\"read\", \"exec\"}\nprint(sorted(acl.roles & req))",
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
      "prompt_ko": "두 집합을 + 기호로 합치려다 TypeError가 발생하는 버그를 고쳐 합집합이 정상 정렬 출력되도록 수정해보세요.",
      "prompt_en": "Fix the TypeError caused by using + on two sets instead of the set union operator.",
      "hint_ko": "집합(set)끼리는 + 연산을 지원하지 않습니다. 합집합 연산자 | 를 사용하세요.",
      "hint_en": "Sets do not support +; replace + with the union operator |.",
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
      "kind": "one_line",
      "prompt_ko": "전체 번호와 완료 번호 집합 아래에 한 줄을 추가하여 아직 완료되지 않은 번호만 오름차순 리스트로 출력해보세요.",
      "prompt_en": "Add one line below to print a sorted list of IDs in all_ids that are not in done.",
      "hint_ko": "마지막 줄에 print(sorted(all_ids - done))을 작성해 차집합을 정렬 출력하세요.",
      "hint_en": "Write print(sorted(all_ids - done)) on the last line.",
      "templateCode": "all_ids = {101, 102, 103, 104}\ndone = {102, 104}\n§§§§§§§§§§§§§§§§§§§§§§§§§§§§§",
      "targetCode": "all_ids = {101, 102, 103, 104}\ndone = {102, 104}\nprint(sorted(all_ids - done))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[101, 103]"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "다음 집합 연산 코드를 실행했을 때 출력되는 결과를 선택해보세요.",
      "prompt_en": "Select the exact output of the following set operations.",
      "hint_ko": "discard(2)와 오류 없는 discard(9) 후 a는 {1, 3, 4}입니다. 따라서 a & b는 [3, 4], b - a는 [5]가 출력됩니다.",
      "hint_en": "After discarding 2 (and safely ignoring 9), a is {1, 3, 4}; a & b is [3, 4] and b - a is [5].",
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
