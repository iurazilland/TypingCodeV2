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
      "hint_ko": "하이픈을 공백으로 바꾼 문자열을 단어 리스트로 나눈 뒤, 전체 요소 개수와 뒤에서 첫 번째 요소를 가리키는 음수 인덱스를 차례로 채워보세요.",
      "hint_en": "Substitute hyphens with spaces and divide the text into a word list, then fill in the element-count function and the negative index for the last item.",
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
      "hint_ko": "조건을 만족한 정수를 리스트 끝에 차곡차곡 담고, 리스트가 비어 있지 않은지 조건문으로 검사해 가장 큰 값과 전체 합계를 구해보세요.",
      "hint_en": "Add qualifying integers onto the tail of the list, check whether the list has elements with a conditional branch, and compute its largest value and total.",
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
      "hint_ko": "리스트 원본을 내림차순으로 정돈한 뒤, 두 조건이 참인 동안 맨 앞 요소를 하나씩 꺼내 옮겨 담고 마지막에 두 리스트를 하나로 이어 붙이세요.",
      "hint_en": "Order the list in place first, repeat as long as both conditions hold to extract from the front, and join the resulting list with the trailing single-item list.",
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
      "hint_ko": "문자열을 나눈 조각들을 그대로 담으면 숫자 덧셈 대신 글자 이어 붙이기가 일어납니다. 리스트에 담을 때 숫자 자료형으로 변환되도록 고쳐보세요.",
      "hint_en": "Divided input tokens are strings, so + joins text instead of adding numbers; convert each token to an integer type when storing it.",
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
      "hint_ko": "오름차순으로 정돈된 리스트에서는 가장 작은 값이 맨 앞에, 가장 큰 값이 맨 뒤에 위치합니다. 인자 없이 꺼내면 어느 쪽이 제거되는지 생각해보세요.",
      "hint_en": "In an ascending-ordered list, the smallest score sits at the very front while the largest sits at the back; specify the front position when removing.",
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
      "hint_ko": "현재 조건식은 단어가 금지 목록에 들어 있을 때 결과에 담고 있습니다. 금지 목록에 속하지 않을 때만 담기도록 포함 조건을 반대로 고치세요.",
      "hint_en": "The current check collects words that belong to the banned list; invert the membership operator so only non-banned words are collected.",
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
      "hint_ko": "오름차순 정돈이 끝난 리스트의 맨 앞 요소와 맨 뒤 요소를 인덱싱으로 꺼내어, 문제 예시의 라벨과 쉼표 형식에 맞게 포맷팅해 출력하세요.",
      "hint_en": "After ascending ordering, index the first and last elements of the list and display them in a formatted string matching the example labels.",
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
      "hint_ko": "반복문이 끝난 뒤 두 리스트에 각각 남아 있는 숫자들과 옮겨진 숫자들의 총합을 구해, 예시 출력 형식에 맞춰 한 줄로 출력해보세요.",
      "hint_en": "Outside the loop, compute the total of the remaining list and the total of the extracted list, formatting both with the labels shown in the prompt.",
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
      "hint_ko": "쉼표가 제거된 숫자들을 차례로 읽을 때 건너뛰는 조건과 반복이 완전히 종료되는 조건을 구분해 어떤 숫자들만 모이고 어떤 순서로 정렬되는지 추적하세요.",
      "hint_en": "Trace which numbers are skipped versus where the loop terminates early, then check the final ordered list and its total.",
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
      "hint_ko": "내림차순 정렬 직후의 요소 배치를 적은 뒤, 양끝에서 하나씩 빠져나간 값들의 차이가 뒤에 붙었을 때의 가장 큰 값과 실수 평균을 계산해보세요.",
      "hint_en": "Write down the descending list, remove the front and back items, attach their difference at the end, and evaluate the largest item and float average.",
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
