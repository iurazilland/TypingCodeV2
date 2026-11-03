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
      "hint_ko": "'그리고(AND)'를 뜻하는 교집합 기호는 두 집합 모두에 공통으로 포함된 원소만 모아 새 집합을 만듭니다.",
      "hint_en": "The intersection operator creates a new set containing only the elements present in both sets.",
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
      "hint_ko": "'양쪽 모두에 속함(AND)'을 뜻하는 앰퍼샌드(Shift + 7) 기호를 교집합 연산자로 채우세요.",
      "hint_en": "Type the ampersand symbol (Shift + 7), which represents logical AND / set intersection.",
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
      "hint_ko": "세로 막대 합집합 기호는 중복된 원소를 자동으로 한 번만 남기고 두 집합의 모든 원소를 합칩니다.",
      "hint_en": "The vertical bar union operator combines all elements from both sets without duplicates.",
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
      "hint_ko": "왼쪽 집합에서 오른쪽 집합에 들어 있는 원소들을 덜어내듯이 '빼기' 기호를 차집합 연산자로 사용하세요.",
      "hint_en": "Use the minus sign to subtract elements of the right-hand set from the left-hand set.",
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
      "hint_ko": "불필요한 카드를 조용히 '버리다'(dis- + card)라는 뜻처럼, 집합에 없는 원소를 넘겨도 오류를 내지 않고 안전하게 지나갑니다.",
      "hint_en": "Meaning 'to throw away,' this safe-removal method deletes an item if present and quietly does nothing if absent.",
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
      "hint_ko": "첫 빈칸은 없어도 조용히 '버리는'(dis- 멀리 + card) 7글자 메서드를, 둘째 빈칸은 원소를 '더하는' 3글자 메서드를 쓰세요.",
      "hint_en": "First, combine 'dis-' (away) + 'card' for the 7-letter safe-drop method; second, use the 3-letter method meaning 'to put in / plus'.",
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
      "hint_ko": "각 줄의 단어들을 집합으로 묶어 중복을 없앤 뒤, 세로 막대 합집합과 앰퍼샌드 교집합 연산자를 각각 적용합니다.",
      "hint_en": "Deduplicate each split line into a set, then apply the union bar and intersection ampersand operators.",
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
      "hint_ko": "먼저 두 집합을 하나로 합치는 세로 막대(합집합) 기호를 쓰고, 그 결과에서 금지 집합을 덜어내는 빼기(차집합) 기호를 쓰세요.",
      "hint_en": "Unite the first two sets with the vertical bar symbol, then subtract the banned set using the minus sign.",
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
      "hint_ko": "첫째 집합에만 있는 차집합과 둘째 집합에만 있는 차집합을 각각 구한 뒤 합집합으로 묶으면 한쪽에만 속한 원소들이 모입니다.",
      "hint_en": "Combine the elements exclusive to the first set with those exclusive to the second set using union.",
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
      "hint_ko": "회수 메서드는 없는 항목도 조용히 '버리는'(dis- + card) 7글자 메서드를 쓰고, 출력에는 공통 원소를 구하는 앰퍼샌드 기호를 넣으세요.",
      "hint_en": "Use the 7-letter safe-drop method ('dis-' + 'card') inside revoke, and the ampersand symbol for common roles inside print.",
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
      "hint_ko": "집합(set) 자료형끼리는 덧셈(+) 기호를 지원하지 않습니다. 두 집합의 모든 원소를 합치는 세로 막대 합집합 연산자로 바꿔보세요.",
      "hint_en": "Sets cannot be combined with +; replace + with the vertical bar operator used for set union.",
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
      "hint_ko": "전체 번호 집합에서 완료 번호 집합을 뺀 차집합을 사본 정렬 함수에 전달해 바로 출력해보세요.",
      "hint_en": "Subtract the completed set from all IDs, pass that difference into the copy-sorting function, and print it.",
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
      "hint_ko": "안전 삭제 메서드는 없는 원소를 지워도 오류를 내지 않는다는 점을 기억하고, 남은 첫째 집합과 둘째 집합 사이의 교집합 및 차집합을 차례로 계산해보세요.",
      "hint_en": "Keep in mind that safe removal quietly ignores missing items without raising an error, then evaluate the intersection and set difference in order.",
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