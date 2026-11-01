import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_40: PracticeRound = {
  "id": "py-basic-r40",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 40,
  "title_ko": "40레벨: 리스트 필수 추가와 꺼내기 (.append, .pop)",
  "title_en": "Level 40: Essential List append() & pop()",
  "description_ko": ".append()로 리스트 끝에 요소를 추가하고 .pop()과 .pop(0)으로 요소를 꺼내 활용하는 패턴을 익힙니다.",
  "description_en": "Master adding elements with .append() and removing/returning elements with .pop() and .pop(0).",
  "totalQuestions": 13,
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
    "while"
  ],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "block",
      "prompt_ko": "리스트 nums = [10, 20]의 맨 뒤에 30을 추가하고 변경된 리스트를 출력해보세요.",
      "prompt_en": "Append 30 to the end of nums = [10, 20] and print the updated list.",
      "hint_ko": "nums.append(30) 블록을 실행한 뒤 print(nums)로 결과를 확인하세요.",
      "hint_en": "Call nums.append(30) and then run print(nums).",
      "targetCode": "nums = [10, 20]\nnums.append(30)\nprint(nums)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[10, 20, 30]"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈 리스트 cart를 만들고 맨 끝에 \"milk\"와 \"egg\"를 순서대로 추가해 출력해보세요.",
      "prompt_en": "Initialize an empty list cart, add \"milk\" and \"egg\" to the end in order, and print cart.",
      "hint_ko": "빈 리스트는 []로 선언하며, 맨 뒤에 요소를 하나씩 넣는 메서드는 append입니다.",
      "hint_en": "Use [] for an empty list and the .append() method to add each item.",
      "templateCode": "cart = §§\ncart.§§§§§§(\"milk\")\ncart.§§§§§§(\"egg\")\nprint(cart)",
      "targetCode": "cart = []\ncart.append(\"milk\")\ncart.append(\"egg\")\nprint(cart)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "['milk', 'egg']"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "prompt_ko": "stack = [10, 20, 30]에서 맨 마지막 요소를 꺼내 last에 저장하고, last와 남은 stack을 각각 출력해보세요.",
      "prompt_en": "Pop the last element from stack = [10, 20, 30] into last, then print last and stack.",
      "hint_ko": "last = stack.pop()을 실행하면 30이 꺼내져 last에 담기고 stack에는 [10, 20]만 남습니다.",
      "hint_en": "Assign last = stack.pop(), then print(last) and print(stack).",
      "targetCode": "stack = [10, 20, 30]\nlast = stack.pop()\nprint(last)\nprint(stack)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "30\n[10, 20]"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "리스트에서 맨 앞 요소를 꺼내 first에, 맨 뒤 요소를 꺼내 last에 담고 남은 리스트와 함께 출력해보세요.",
      "prompt_en": "Pop the first item into first and the last item into last from queue, then print all three.",
      "hint_ko": "꺼내기 메서드 pop에 인덱스 0을 넣으면 맨 앞 요소를, 비워두면 맨 뒤 요소를 꺼내 반환합니다.",
      "hint_en": "Use .pop(0) for the first element and .pop() for the last element.",
      "templateCode": "queue = [\"A\", \"B\", \"C\"]\nfirst = queue.§§§(§)\nlast = queue.§§§()\nprint(first, last, queue)",
      "targetCode": "queue = [\"A\", \"B\", \"C\"]\nfirst = queue.pop(0)\nlast = queue.pop()\nprint(first, last, queue)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "A C ['B']"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "prompt_ko": "1부터 3까지 반복하며 i * 10을 빈 리스트 nums에 추가한 뒤 개수와 리스트를 출력해보세요. (출력 예: Count:3,Data:[10, 20, 30])",
      "prompt_en": "Loop i from 1 to 3, append i * 10 to nums, and print Count and Data.",
      "hint_ko": "for i in range(1, 4): 안에서 nums.append(i * 10)을 호출한 뒤 f-string으로 출력하세요.",
      "hint_en": "Inside for i in range(1, 4):, call nums.append(i * 10), then print with an f-string.",
      "targetCode": "nums = []\nfor i in range(1, 4):\n    nums.append(i * 10)\nprint(f\"Count:{len(nums)},Data:{nums}\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Count:3,Data:[10, 20, 30]"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "정수 n번 반복하며 공백을 제거한 입력 단어 앞에 번호를 붙여 words 리스트에 추가하고 출력해보세요.",
      "prompt_en": "Loop n times, strip each input word, append \"i:w\" to words, and print words.",
      "hint_ko": "횟수 반복에는 range(n)을 사용하고, 리스트 맨 뒤에 문자열을 추가할 때는 append를 호출합니다.",
      "hint_en": "Use range(n) for the loop and words.append(...) to collect formatted strings.",
      "templateCode": "n = int(input())\nwords = []\nfor i in §§§§§(n):\n    w = input().strip()\n    words.§§§§§§(f\"{i}:{w}\")\nprint(words)",
      "targetCode": "n = int(input())\nwords = []\nfor i in range(n):\n    w = input().strip()\n    words.append(f\"{i}:{w}\")\nprint(words)",
      "testCases": [
        {
          "id": 1,
          "input": "2\n cat \ndog",
          "expectedOutput": "['0:cat', '1:dog']"
        },
        {
          "id": 2,
          "input": "3\npy\njs\ngo",
          "expectedOutput": "['0:py', '1:js', '2:go']"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "prompt_ko": "stack = [10, 20, 30]이 빌 때까지 마지막 요소를 하나씩 꺼내 total에 더하고 합계와 남은 길이를 출력해보세요. (출력 예: Sum:60,Left:0)",
      "prompt_en": "While stack = [10, 20, 30] is non-empty, pop the last value into total and print Sum and Left.",
      "hint_ko": "while stack: 조건은 리스트에 요소가 남아 있는 동안만 반복됩니다. 안에서 val = stack.pop()을 꺼내 누적하세요.",
      "hint_en": "while stack: runs until stack becomes []. Pop each value and add to total.",
      "targetCode": "stack = [10, 20, 30]\ntotal = 0\nwhile stack:\n    val = stack.pop()\n    total += val\nprint(f\"Sum:{total},Left:{len(stack)}\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Sum:60,Left:0"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "단어 리스트가 빌 때까지 맨 앞 요소를 차례대로 꺼내 대괄호 모양으로 이어 붙여 출력해보세요. (출력 예: [A][B])",
      "prompt_en": "While tasks has items, pop from index 0 and append \"[cur]\" onto log, then print log.",
      "hint_ko": "while 조건에 리스트 이름을 쓰고, 맨 앞 요소를 순서대로 꺼내려면 인덱스 0으로 꺼내기 메서드를 호출하세요.",
      "hint_en": "Loop with while tasks: and remove from the front using tasks.pop(0).",
      "templateCode": "tasks = input().split()\nlog = \"\"\n§§§§§ tasks:\n    cur = tasks.§§§(§)\n    log += f\"[{cur}]\"\nprint(log)",
      "targetCode": "tasks = input().split()\nlog = \"\"\nwhile tasks:\n    cur = tasks.pop(0)\n    log += f\"[{cur}]\"\nprint(log)",
      "testCases": [
        {
          "id": 1,
          "input": "A B",
          "expectedOutput": "[A][B]"
        },
        {
          "id": 2,
          "input": "wake eat code",
          "expectedOutput": "[wake][eat][code]"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "block",
      "prompt_ko": "raw = [5, -1, 8]에서 맨 앞 요소를 하나씩 꺼내 양수일 때만 2배로 만들어 clean에 추가하고 출력해보세요.",
      "prompt_en": "Pop items from index 0 of raw = [5, -1, 8]; if positive, append x * 2 to clean and print clean.",
      "hint_ko": "while raw: 안에서 x = raw.pop(0)을 실행하고 if x > 0:일 때 clean.append(x * 2)를 호출하세요.",
      "hint_en": "Inside while raw:, set x = raw.pop(0) and if x > 0: call clean.append(x * 2).",
      "targetCode": "raw = [5, -1, 8]\nclean = []\nwhile raw:\n    x = raw.pop(0)\n    if x > 0:\n        clean.append(x * 2)\nprint(clean)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[10, 16]"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "입력이 \"use\"이면 마지막 아이템을 꺼내고, 아니면 입력값을 추가한 뒤 결과와 가방의 논리값을 출력해보세요. (출력 예: Used:potion,Has:False)",
      "prompt_en": "If cmd is \"use\", pop the last item; otherwise append cmd, printing the item and whether bag is non-empty.",
      "hint_ko": "마지막 요소를 꺼내는 메서드, 리스트 비어 있음 여부를 판별하는 논리형 변환 함수, 요소 추가 메서드를 채우세요.",
      "hint_en": "Use .pop() to remove the last item, bool(bag) for truthiness, and .append(cmd) to add.",
      "templateCode": "bag = [\"potion\"]\ncmd = input().strip()\nif cmd == \"use\":\n    used = bag.§§§()\n    print(f\"Used:{used},Has:{§§§§(bag)}\")\nelse:\n    bag.§§§§§§(cmd)\n    print(f\"Added:{bag[-1]},Has:{bool(bag)}\")",
      "targetCode": "bag = [\"potion\"]\ncmd = input().strip()\nif cmd == \"use\":\n    used = bag.pop()\n    print(f\"Used:{used},Has:{bool(bag)}\")\nelse:\n    bag.append(cmd)\n    print(f\"Added:{bag[-1]},Has:{bool(bag)}\")",
      "testCases": [
        {
          "id": 1,
          "input": "use",
          "expectedOutput": "Used:potion,Has:False"
        },
        {
          "id": 2,
          "input": "shield",
          "expectedOutput": "Added:shield,Has:True"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "리스트의 맨 앞 요소부터 차례로 꺼내려다 인덱스 오류가 발생하는 버그를 고쳐 A, B, C가 순서대로 출력되게 해보세요.",
      "prompt_en": "Fix the index argument bug when popping from the front so A, B, C print without an IndexError.",
      "hint_ko": "요소가 1개 남았을 때는 1번 인덱스가 존재하지 않습니다. 맨 앞 요소를 가리키는 인덱스 번호로 수정하세요.",
      "hint_en": "The front of a list is index 0, not index 1.",
      "templateCode": "items = [\"A\", \"B\", \"C\"]\nwhile items:\n    print(items.pop(1))",
      "targetCode": "items = [\"A\", \"B\", \"C\"]\nwhile items:\n    print(items.pop(0))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "A\nB\nC"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "주어진 코드 아래에 한 줄을 추가하여 마지막 요소를 꺼낸 값과 남은 리스트의 길이를 형식에 맞게 출력해보세요. (출력 예: Pop:30,Len:2)",
      "prompt_en": "Add one line below to pop the last item and print it with the remaining length (e.g., Pop:30,Len:2).",
      "hint_ko": "셋째 줄에 print(f\"Pop:{stack.pop()},Len:{len(stack)}\")를 작성해보세요.",
      "hint_en": "Write print(f\"Pop:{stack.pop()},Len:{len(stack)}\") on line 3.",
      "templateCode": "stack = [10, 20]\nstack.append(30)\n§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§",
      "targetCode": "stack = [10, 20]\nstack.append(30)\nprint(f\"Pop:{stack.pop()},Len:{len(stack)}\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Pop:30,Len:2"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "다음 파이썬 코드를 실행했을 때 화면에 출력될 올바른 결과를 선택해보세요.",
      "prompt_en": "Select the exact output printed when the following Python code runs.",
      "hint_ko": "맨 앞 1을 꺼내 10으로 만들어 뒤에 추가하면 [2, 3, 10]이 되고, 다시 맨 뒤 요소를 꺼내면 y는 10, q는 [2, 3]입니다.",
      "hint_en": "pop(0) gets 1 leaving [2, 3]; append(10) makes [2, 3, 10]; pop() returns 10 leaving [2, 3].",
      "targetCode": "q = [1, 2, 3]\nx = q.pop(0)\nq.append(x * 10)\ny = q.pop()\nprint(f\"{y}:{q}\")",
      "choices": [
        "10:[2, 3]",
        "30:[1, 2]",
        "3:[2, 10]",
        "10:[1, 2, 3]"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "10:[2, 3]"
        }
      ]
    }
  ]
};
