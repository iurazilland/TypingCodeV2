import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_43: PracticeRound = {
  "id": "py-basic-r43",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 43,
  "title_ko": "43레벨: 리스트 필수 기초 종합 문제풀이",
  "title_en": "Level 43: Section 6 Comprehensive Review",
  "description_ko": "1차원 리스트 생성·슬라이싱, .append()/.pop()/.sort(), sum/max/min/len과 문자열·반복문을 종합해 문제를 해결합니다.",
  "description_en": "Synthesize 1D lists, slicing, .append()/.pop()/.sort(), sum/max/min/len, strings, and loops in comprehensive challenges.",
  "totalQuestions": 10,
  "unlockedBlocks": [
    "print",
    "variable",
    "input",
    "type",
    "math",
    "method",
    "if",
    "for_range",
    "range",
    "for_in",
    "while",
    "break",
    "continue"
  ],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "입력의 양끝 공백을 지우고 하이픈(\"-\")을 공백으로 치환한 뒤 단어로 나누어 개수와 마지막 단어를 출력해보세요. (출력 예: Count:3,End:v2)",
      "prompt_en": "Strip input, replace \"-\" with space, split into words, and print Count and End (e.g., Count:3,End:v2).",
      "hint_ko": "문자열 치환 메서드, 공백 분리 메서드, 길이 함수, 마지막 요소를 가리키는 음수 인덱스를 채우세요.",
      "hint_en": "Use .replace(\"-\", \" \"), .split(), len(parts), and parts[-1].",
      "templateCode": "raw = input().strip().§§§§§§§(\"-\", \" \")\nparts = raw.§§§§§()\nprint(f\"Count:{§§§(parts)},End:{parts[§§]}\")",
      "targetCode": "raw = input().strip().replace(\"-\", \" \")\nparts = raw.split()\nprint(f\"Count:{len(parts)},End:{parts[-1]}\")",
      "testCases": [
        {
          "id": 1,
          "input": "  py-code-v2  ",
          "expectedOutput": "Count:3,End:v2"
        },
        {
          "id": 2,
          "input": "alpha-beta",
          "expectedOutput": "Count:2,End:beta"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "입력 정수 중 50 이상만 골라 요소가 있으면 최댓값과 합계를 출력하고, 없으면 Empty를 출력해보세요. (출력 예: Max:80,Sum:140)",
      "prompt_en": "Filter input integers >= 50 into valid; if non-empty print Max and Sum, otherwise print Empty.",
      "hint_ko": "리스트 추가 메서드와 리스트가 비어 있지 않은지 확인하는 조건 키워드, 최댓값·합계 함수를 채우세요.",
      "hint_en": "Use valid.append(n), check truthiness with if valid:, and compute max(valid) and sum(valid).",
      "templateCode": "valid = []\nfor s in input().split():\n    n = int(s)\n    if n >= 50:\n        valid.§§§§§§(n)\n§§ valid:\n    print(f\"Max:{§§§(valid)},Sum:{§§§(valid)}\")\nelse:\n    print(\"Empty\")",
      "targetCode": "valid = []\nfor s in input().split():\n    n = int(s)\n    if n >= 50:\n        valid.append(n)\nif valid:\n    print(f\"Max:{max(valid)},Sum:{sum(valid)}\")\nelse:\n    print(\"Empty\")",
      "testCases": [
        {
          "id": 1,
          "input": "30 60 80 40",
          "expectedOutput": "Max:80,Sum:140"
        },
        {
          "id": 2,
          "input": "10 20",
          "expectedOutput": "Empty"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "입력 정수를 내림차순 정렬한 뒤 앞에서부터 최대 2개를 꺼내 picked에 담고 뒤에 [0]을 이어 붙여 출력해보세요.",
      "prompt_en": "Sort input integers descending, pop up to 2 items from the front into picked, and print picked + [0].",
      "hint_ko": "원본 정렬 메서드, 조건 반복 키워드, 맨 앞(0번) 요소를 꺼내는 메서드, 리스트 연결 연산자를 채우세요.",
      "hint_en": "Use nums.sort(reverse=True), while ..., nums.pop(0), and + [0].",
      "templateCode": "nums = []\nfor s in input().split():\n    nums.append(int(s))\nnums.§§§§(reverse=True)\npicked = []\n§§§§§ nums and len(picked) < 2:\n    picked.append(nums.§§§(0))\nprint(picked § [0])",
      "targetCode": "nums = []\nfor s in input().split():\n    nums.append(int(s))\nnums.sort(reverse=True)\npicked = []\nwhile nums and len(picked) < 2:\n    picked.append(nums.pop(0))\nprint(picked + [0])",
      "testCases": [
        {
          "id": 1,
          "input": "15 40 25 30",
          "expectedOutput": "[40, 30, 0]"
        },
        {
          "id": 2,
          "input": "9",
          "expectedOutput": "[9, 0]"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "입력 숫자들을 문자열 그대로 리스트에 담아 첫 값과 끝 값을 더할 때 이어 붙기가 되는 버그를 고쳐보세요. (출력 예: Ends:40)",
      "prompt_en": "Fix the bug where unparsed strings concatenate instead of adding first and last numbers (e.g., Ends:40).",
      "hint_ko": "split() 결과는 문자열이므로 리스트에 추가할 때 정수형으로 변환해서 넣어야 숫자 덧셈이 수행됩니다.",
      "hint_en": "Convert each token s to an integer when appending to nums so + performs addition.",
      "templateCode": "nums = []\nfor s in input().split():\n    nums.append(s)\nprint(f\"Ends:{nums[0] + nums[-1]}\")",
      "targetCode": "nums = []\nfor s in input().split():\n    nums.append(int(s))\nprint(f\"Ends:{nums[0] + nums[-1]}\")",
      "testCases": [
        {
          "id": 1,
          "input": "10 20 30",
          "expectedOutput": "Ends:40"
        },
        {
          "id": 2,
          "input": "7 5 13",
          "expectedOutput": "Ends:20"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "오름차순 정렬 후 가장 낮은 점수 하나만 빼려다 반대로 최고 점수가 제거되는 버그를 수정해보세요. (출력 예: Best:90)",
      "prompt_en": "Fix the bug where popping after ascending sort removes the highest score instead of the lowest.",
      "hint_ko": "오름차순 정렬을 하면 가장 작은 값은 맨 앞(0번 위치)에 놓입니다. 꺼낼 위치를 알맞게 지정하세요.",
      "hint_en": "After ascending sort, the lowest value is at index 0 rather than at the end.",
      "templateCode": "scores = [50, 90, 70, 80, 60]\nscores.sort()\nscores.pop()\nprint(f\"Best:{max(scores)}\")",
      "targetCode": "scores = [50, 90, 70, 80, 60]\nscores.sort()\nscores.pop(0)\nprint(f\"Best:{max(scores)}\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Best:90"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "금지 목록(bans)을 제외한 정상 단어만 모으려는데 반대로 금지 단어만 담기는 조건식 버그를 수정해보세요.",
      "prompt_en": "Fix the membership condition bug that collects banned words instead of excluding them.",
      "hint_ko": "단어가 bans 리스트에 포함되어 있지 않을 때만 clean에 추가하도록 조건 연산자를 고쳐보세요.",
      "hint_en": "Invert the membership check so w is appended only when it is not in bans.",
      "templateCode": "bans = [\"err\", \"skip\"]\nclean = []\nfor w in input().split():\n    if w in bans:\n        clean.append(w)\nprint(clean)",
      "targetCode": "bans = [\"err\", \"skip\"]\nclean = []\nfor w in input().split():\n    if w not in bans:\n        clean.append(w)\nprint(clean)",
      "testCases": [
        {
          "id": 1,
          "input": "ok err run skip",
          "expectedOutput": "['ok', 'run']"
        },
        {
          "id": 2,
          "input": "err pass",
          "expectedOutput": "['pass']"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "오름차순 정렬 코드 아래에 한 줄을 추가하여 정렬된 리스트의 첫 요소(최솟값)와 마지막 요소(최댓값)를 출력해보세요. (출력 예: Min:10,Max:50)",
      "prompt_en": "Add one line below the sort to print the first (min) and last (max) items (e.g., Min:10,Max:50).",
      "hint_ko": "마지막 줄에 print(f\"Min:{nums[0]},Max:{nums[-1]}\")를 작성해보세요.",
      "hint_en": "Write print(f\"Min:{nums[0]},Max:{nums[-1]}\") on the final line.",
      "templateCode": "nums = []\nfor s in input().split():\n    nums.append(int(s))\nnums.sort()\n§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§",
      "targetCode": "nums = []\nfor s in input().split():\n    nums.append(int(s))\nnums.sort()\nprint(f\"Min:{nums[0]},Max:{nums[-1]}\")",
      "testCases": [
        {
          "id": 1,
          "input": "30 10 50 20",
          "expectedOutput": "Min:10,Max:50"
        },
        {
          "id": 2,
          "input": "9 3 7",
          "expectedOutput": "Min:3,Max:9"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "반복 코드 아래에 한 줄을 추가하여 남은 stack의 합계와 꺼낸 removed의 합계를 형식에 맞게 출력해보세요. (출력 예: Left:30,Out:70)",
      "prompt_en": "Add one line below the while loop to print the sums of stack and removed (e.g., Left:30,Out:70).",
      "hint_ko": "마지막 줄에 print(f\"Left:{sum(stack)},Out:{sum(removed)}\")를 작성해보세요.",
      "hint_en": "Write print(f\"Left:{sum(stack)},Out:{sum(removed)}\") after the loop.",
      "templateCode": "stack = [10, 20, 30, 40]\nremoved = []\nwhile len(stack) > 2:\n    removed.append(stack.pop())\n§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§",
      "targetCode": "stack = [10, 20, 30, 40]\nremoved = []\nwhile len(stack) > 2:\n    removed.append(stack.pop())\nprint(f\"Left:{sum(stack)},Out:{sum(removed)}\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Left:30,Out:70"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "다음 파이썬 코드를 실행했을 때 화면에 출력될 올바른 결과를 선택해보세요.",
      "prompt_en": "Select the exact output printed when the following Python code runs.",
      "hint_ko": "-5는 건너뛰고 0에서 멈추므로 [30, 10]만 모이며, 오름차순 정렬 후 [10, 30]과 합계 40이 출력됩니다.",
      "hint_en": "-5 is skipped and 0 breaks the loop, leaving [30, 10]; sorting yields [10, 30] with sum 40.",
      "targetCode": "raw = \"30, -5, 10, 0, 20\".replace(\",\", \"\")\nnums = []\nfor s in raw.split():\n    n = int(s)\n    if n < 0:\n        continue\n    if n == 0:\n        break\n    nums.append(n)\nnums.sort()\nprint(f\"{nums}:{sum(nums)}\")",
      "choices": [
        "[10, 30]:40",
        "[10, 20, 30]:60",
        "[30, 10]:40",
        "[-5, 10, 30]:35"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[10, 30]:40"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "다음 파이썬 코드를 실행했을 때 화면에 출력될 올바른 결과를 선택해보세요.",
      "prompt_en": "Select the exact output printed when the following Python code runs.",
      "hint_ko": "[50, 30, 20, 10]에서 맨 앞 50과 맨 뒤 10을 빼면 [30, 20]이 남고 [40]이 연결되어 [30, 20, 40](최댓값 40, 평균 30.0)이 됩니다.",
      "hint_en": "Sorting gives [50, 30, 20, 10]; popping 50 and 10 leaves [30, 20], + [40] gives [30, 20, 40] (max 40, avg 30.0).",
      "targetCode": "q = [10, 50, 20, 30]\nq.sort(reverse=True)\nfirst = q.pop(0)\nlast = q.pop()\nres = q + [first - last]\nprint(f\"{max(res)}:{sum(res) / len(res)}\")",
      "choices": [
        "40:30.0",
        "50:30.0",
        "40:30",
        "30:25.0"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "40:30.0"
        }
      ]
    }
  ]
};
