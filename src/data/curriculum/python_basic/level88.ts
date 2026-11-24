import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_88: PracticeRound = {
  "id": "py-basic-r88",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 88,
  "title_ko": "88레벨: 집합 연산자(& 교집합, | 합집합, - 차집합)와 안전 삭제(.discard())",
  "title_en": "Level 88: Set Operators (&, |, -) & Safe .discard()",
  "description_ko": "두 집합의 교집합(&), 합집합(|), 차집합(-) 연산자와 없는 원소도 에러 없이 지우는 .discard()를 익힙니다.",
  "description_en": "Compute set intersections (&), unions (|), and differences (-), and safely remove elements with .discard().",
  "totalQuestions": 15,
  "unlockedBlocks": [
    "comment",
    "print",
    "variable",
    "input",
    "type",
    "if",
    "for_range",
    "range",
    "for_in",
    "while",
    "break",
    "continue",
    "list",
    "tuple",
    "dict",
    "set",
    "iter",
    "method",
    "sorted",
    "def",
    "return",
    "class",
    "try"
  ],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 교집합 연산자(&)로 두 집합 a, b에 공통으로 들어 있는 요소를 구해 정렬 출력해보세요.",
      "prompt_en": "[Block] Use the set intersection operator (&) to find elements common to a and b, then print sorted(both).",
      "hint_ko": "두 집합 사이에 & 연산자를 쓰면 양쪽 모두에 들어 있는 공통 원소만 모은 새 집합이 만들어집니다.",
      "hint_en": "The & operator between two sets produces a new set containing only elements present in both.",
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
      "prompt_ko": "[빈칸 채우기] 두 숫자 집합에 모두 속한 공통 숫자만 골라 정렬 출력하도록 연산자를 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the set operator that computes the intersection of s1 and s2.",
      "hint_ko": "양쪽 집합에 모두 포함된 공통 원소를 구하는 앰퍼샌드 기호 하나를 적으세요.",
      "hint_en": "Type the single ampersand symbol for set intersection.",
      "templateCode": "s1 = {10, 20, 30}\ns2 = {20, 30, 40}\ncommon = s1 §§ s2\nprint(sorted(common))",
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
      "prompt_ko": "[블록 조립] 합집합 연산자(|)로 두 팀의 모든 구성원을 중복 없이 합쳐 인원수와 정렬 명단을 출력해보세요.",
      "prompt_en": "[Block] Use the set union operator (|) to combine all unique members from t1 and t2.",
      "hint_ko": "두 집합 사이에 세로 막대(|) 연산자를 쓰면 양쪽의 모든 원소를 중복 없이 합친 합집합이 만들어집니다.",
      "hint_en": "The pipe operator (|) combines all unique elements from both sets into a union set.",
      "targetCode": "t1 = {\"Kim\", \"Lee\"}\nt2 = {\"Lee\", \"Park\"}\nall_m = t1 | t2\nprint(len(all_m), sorted(all_m))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "3 ['Kim', 'Lee', 'Park']"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 두 태그 집합의 모든 고유 태그를 하나로 합치도록 합집합 연산자를 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the set union operator to merge all unique tags from a and b.",
      "hint_ko": "두 집합의 원소를 중복 없이 합치는 세로 막대 기호 하나를 적으세요.",
      "hint_en": "Type the pipe symbol used for set union.",
      "templateCode": "a = {\"new\", \"hot\"}\nb = {\"hot\", \"sale\"}\ntotal = a §§ b\nprint(sorted(total))",
      "targetCode": "a = {\"new\", \"hot\"}\nb = {\"hot\", \"sale\"}\ntotal = a | b\nprint(sorted(total))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "['hot', 'new', 'sale']"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 차집합 연산자(-)로 초대 명단(invited)에서 입장 완료(checked) 인원을 뺀 명단을 출력해보세요.",
      "prompt_en": "[Block] Use the set difference operator (-) to find guests in invited who are not in checked.",
      "hint_ko": "앞 집합에서 뒤 집합에 들어 있는 원소들을 제외한 나머지를 구할 때는 빼기(-) 연산자를 씁니다.",
      "hint_en": "The minus operator (-) removes any elements found in the right set from the left set.",
      "targetCode": "invited = {\"Amy\", \"Bob\", \"Dan\"}\nchecked = {\"Bob\"}\nwaiting = invited - checked\nprint(sorted(waiting))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "['Amy', 'Dan']"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 전체 번호 집합에서 금지된 번호 집합을 제외한 나머지 번호들을 구하도록 연산자를 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the set difference operator to remove banned numbers from nums.",
      "hint_ko": "왼쪽 집합에서 오른쪽 집합의 원소를 빼내는 차집합 기호를 적으세요.",
      "hint_en": "Use the minus sign for set difference.",
      "templateCode": "nums = {1, 2, 3, 4}\nbanned = {2, 4}\nvalid = nums §§ banned\nprint(sorted(valid))",
      "targetCode": "nums = {1, 2, 3, 4}\nbanned = {2, 4}\nvalid = nums - banned\nprint(sorted(valid))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[1, 3]"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 집합의 .discard() 메서드로 있는 원소(\"sale\")와 없는 원소(\"vip\")를 에러 없이 안전 삭제해보세요.",
      "prompt_en": "[Block] Call tags.discard(\"sale\") and tags.discard(\"vip\") to safely remove items without KeyError.",
      "hint_ko": "집합의 .remove()는 없는 원소를 지울 때 KeyError가 나지만, .discard()는 없어도 에러 없이 조용히 넘어갑니다.",
      "hint_en": "Unlike .remove(), .discard() never raises an error when the element is not in the set.",
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
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 입력된 원소가 집합에 없더라도 에러 없이 안전하게 삭제하도록 메서드 이름을 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the set method name that removes drop safely even if it is not present.",
      "hint_ko": "없는 원소를 지워도 오류가 발생하지 않는 집합 안전 삭제 메서드를 호출하세요.",
      "hint_en": "Call the set method for error-free removal.",
      "templateCode": "active = {\"a\", \"b\", \"c\"}\ndrop = input()\nactive.§§§§§§§§(drop)\nprint(sorted(active))",
      "targetCode": "active = {\"a\", \"b\", \"c\"}\ndrop = input()\nactive.discard(drop)\nprint(sorted(active))",
      "testCases": [
        {
          "id": 1,
          "input": "b",
          "expectedOutput": "['a', 'c']"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 빈칸 2곳을 채워 두 집합의 합집합을 구하고 숫자 5를 안전 삭제한 뒤 교집합 결과를 출력해보세요.",
      "prompt_en": "[Fill Blank] Complete the union operator, safe removal method, and intersection operator.",
      "hint_ko": "두 집합을 합치는 합집합 연산자(|)와 원소가 없어도 에러가 나지 않는 삭제 메서드(discard)를 차례로 채우세요.",
      "hint_en": "Check the union pipe operator, the discard method, and the intersection ampersand operator.",
      "templateCode": "a = {1, 2, 3}\nb = {3, 4, 5}\nm = a §§ b\nm.§§§§§§§§(5)\nprint(sorted(m & {2, 3, 5}))",
      "targetCode": "a = {1, 2, 3}\nb = {3, 4, 5}\nm = a | b\nm.discard(5)\nprint(sorted(m & {2, 3, 5}))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[2, 3]"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 두 집합을 합치려다 리스트처럼 덧셈(+) 기호를 써서 발생한 TypeError를 합집합 연산자로 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the TypeError caused by using + between two sets by replacing it with the union operator.",
      "hint_ko": "집합(set)끼리는 + 연산자를 쓸 수 없으며, 합집합 연산자(|)를 사용해야 합니다.",
      "hint_en": "Sets do not support +; use the union operator | instead.",
      "templateCode": "s1 = {1, 2}\ns2 = {2, 3}\nprint(sorted(s1 + s2))",
      "targetCode": "s1 = {1, 2}\ns2 = {2, 3}\nprint(sorted(s1 | s2))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[1, 2, 3]"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 집합에 없는 원소(99)를 지울 때 에러가 나지 않도록 잘못 적힌 메서드 이름(removes)을 안전 삭제 메서드(discard)로 고쳐보세요.",
      "prompt_en": "[Fix Bug] Replace .remove(99) with the safe removal method so missing elements do not raise KeyError.",
      "hint_ko": "집합에 없는 값을 지워도 에러가 나지 않게 하려면 .discard() 메서드를 사용해야 합니다.",
      "hint_en": "Use .discard(99) instead of .remove(99) to avoid KeyError on missing elements.",
      "templateCode": "nums = {10, 20, 30}\nnums.removes(99)\nprint(sorted(nums))",
      "targetCode": "nums = {10, 20, 30}\nnums.discard(99)\nprint(sorted(nums))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[10, 20, 30]"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 두 리스트 a, b를 각각 set()으로 변환해 교집합(&)을 구한 뒤 sorted()로 정렬해 출력하는 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Write the line that prints the sorted intersection of set(a) and set(b).",
      "hint_ko": "print(sorted(set(a) & set(b))) 형태로 형변환과 교집합, 정렬을 한 줄에 작성하세요.",
      "hint_en": "Write print(sorted(set(a) & set(b))).",
      "templateCode": "a = [3, 1, 2, 3]\nb = [2, 4, 3]\n§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§",
      "targetCode": "a = [3, 1, 2, 3]\nb = [2, 4, 3]\nprint(sorted(set(a) & set(b)))",
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
      "prompt_ko": "[한 줄 완성] 집합 keys에서 원소 \"temp\"를 에러 없이 안전하게 삭제하는 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Write the line that safely removes \"temp\" from the set keys.",
      "hint_ko": "keys 변수에서 집합 안전 삭제 메서드를 호출하고 \"temp\"를 인자로 넣으세요.",
      "hint_en": "Call keys.discard(\"temp\").",
      "templateCode": "keys = {\"id\", \"name\"}\n§§§§§§§§§§§§§§§§§§§§§\nprint(sorted(keys))",
      "targetCode": "keys = {\"id\", \"name\"}\nkeys.discard(\"temp\")\nprint(sorted(keys))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "['id', 'name']"
        }
      ]
    },
    {
      "id": 14,
      "step": 14,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 두 집합의 합집합(|), 교집합(&), 차집합(-)을 조합한 다음 코드의 출력 결과를 골라보세요.",
      "prompt_en": "[Predict Output] Select the output of the code combining union, intersection, and difference on sets.",
      "hint_ko": "합집합 {1, 2, 3, 4}에서 교집합 {2, 3}을 빼면 양쪽 중 한쪽에만 있던 원소 {1, 4}가 남습니다.",
      "hint_en": "Subtracting the intersection {2, 3} from the union {1, 2, 3, 4} leaves {1, 4}.",
      "targetCode": "a = {1, 2, 3}\nb = {2, 3, 4}\ndiff = (a | b) - (a & b)\nprint(sorted(diff), sum(diff))",
      "choices": [
        "[1, 4] 5",
        "[2, 3] 5",
        "[1, 2, 3, 4] 10",
        "[1] 1"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[1, 4] 5"
        }
      ]
    },
    {
      "id": 15,
      "step": 15,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 집합에 .add(), .discard()와 차집합 연산을 연속 실행했을 때의 출력 결과를 골라보세요.",
      "prompt_en": "[Predict Output] Select the output after applying .add(), .discard(), and set difference.",
      "hint_ko": "중복된 20을 .add()해도 집합 크기는 그대로이며, s1에서 s2 원소를 뺀 뒤 남는 원소를 확인하세요.",
      "hint_en": "Adding 20 again has no effect; trace s1 after discarding 10 and subtracting s2.",
      "targetCode": "s1 = {10, 20, 30}\ns2 = {30, 40}\ns1.add(20)\ns1.discard(10)\ns1.discard(99)\nres = s1 - s2\nprint(sorted(res), len(s1))",
      "choices": [
        "[20] 2",
        "[20, 30] 2",
        "[20] 3",
        "[10, 20] 2"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[20] 2"
        }
      ]
    }
  ]
};
