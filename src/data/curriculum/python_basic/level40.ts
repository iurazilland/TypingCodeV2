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
      "prompt_ko": ".append(값) 메서드는 원본 리스트의 맨 끝에 새로운 요소 하나를 덧붙여 추가합니다. 블록의 코드를 따라 입력해보세요.",
      "prompt_en": "The .append(value) method adds a single new element to the very end of a list in place. Follow the blocks and type the code.",
      "hint_ko": ".append()는 새 리스트를 반환하지 않고 원본 리스트 자체를 직접 변경하므로 단독 문장으로 호출합니다.",
      "hint_en": "Because .append() mutates the list directly rather than returning a new list, call it on its own line.",
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
      "hint_ko": "대괄호를 비워 빈 리스트를 만들고, 맨 끝에 항목을 '덧붙이다'라는 뜻의 여섯 글자 영단어 메서드를 두 번 호출하세요.",
      "hint_en": "Initialize an empty list with empty square brackets, then call the 6-letter method meaning 'attach to the tail' on each line.",
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
      "prompt_ko": ".pop() 메서드는 리스트의 맨 마지막 요소를 제거함과 동시에 그 꺼낸 값을 반환해 변수에 저장할 수 있게 해줍니다. 블록의 코드를 따라 입력해보세요.",
      "prompt_en": "The .pop() method removes the last element from a list and returns that removed value so you can store it. Follow the blocks and type the code.",
      "hint_ko": ".pop()을 호출하면 반환된 마지막 값은 변수에 담기고, 원본 리스트에는 나머지 요소들만 남습니다.",
      "hint_en": "Calling .pop() assigns the removed tail item to the variable and leaves the remaining items in the list.",
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
      "hint_ko": "요소를 '톡 꺼내다'라는 뜻의 세 글자 메서드 괄호에 맨 앞 위치 번호를 넣으면 첫 요소가, 비워두면 맨 끝 요소가 꺼내집니다.",
      "hint_en": "Use the 3-letter item-extracting method: pass the 0-based front index to take the first item, and leave parentheses empty for the last.",
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
      "prompt_ko": "빈 리스트([])를 먼저 만든 뒤 for 반복문 안에서 .append()를 호출하면 계산된 값들을 순서대로 모아 리스트를 완성할 수 있습니다. 블록의 코드를 따라 입력해보세요.",
      "prompt_en": "Starting with an empty list ([]) and calling .append() inside a for loop lets you dynamically collect computed values. Follow the blocks and type the code.",
      "hint_ko": "반복문 바깥에서 빈 리스트를 초기화하고, 반복문 본문에서 매 회차 계산 결과를 .append()로 추가합니다.",
      "hint_en": "Initialize the empty list before the loop and append each calculated value inside the loop body.",
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
      "prompt_ko": "정수 n번 반복하며 공백을 제거한 입력 단어 앞에 0부터 시작하는 번호와 콜론을 붙여(예: 0:cat) words 리스트에 추가하고 출력해보세요. (터미널 입력: 2,  cat , dog 한 줄씩)",
      "prompt_en": "Loop n times, strip each input word, append \"i:w\" to words, and print words. (Terminal input: 2,  cat , dog line by line)",
      "hint_ko": "0부터 지정 횟수 직전까지 숫자 '범위'를 만드는 다섯 글자 함수와, 리스트 맨 끝에 요소를 '덧붙이는' 여섯 글자 메서드를 채우세요.",
      "hint_en": "Use the 5-letter sequence-generating function for the loop count, and the 6-letter tail-insertion method to collect each formatted string.",
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
      "prompt_ko": "while 리스트: 조건과 .pop()을 결합하면 리스트에 요소가 남아 있는 동안 끝에서부터 하나씩 꺼내 처리하고 빈 리스트가 될 때 자동으로 반복을 멈춥니다. 블록의 코드를 따라 입력해보세요.",
      "prompt_en": "Combining while list: with .pop() repeatedly extracts and processes items until the list becomes empty and stops the loop. Follow the blocks and type the code.",
      "hint_ko": ".pop()을 반복할 때마다 리스트 길이가 1씩 줄어들어 마지막 요소를 꺼낸 뒤에는 while 조건이 거짓이 됩니다.",
      "hint_en": "Each .pop() shrinks the list by one until it is empty, making the while condition False.",
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
      "prompt_ko": "단어 리스트가 빌 때까지 맨 앞 요소를 차례대로 꺼내 대괄호 모양으로 이어 붙여 출력해보세요. (출력 예: [A][B]) (터미널 입력: A B)",
      "prompt_en": "While tasks has items, pop from index 0 and append \"[cur]\" onto log, then print log. (Terminal input: A B)",
      "hint_ko": "리스트가 빌 때까지 '~하는 동안' 반복하는 키워드를 쓰고, 대기열의 맨 앞 요소를 순서대로 '톡 꺼내도록' 메서드와 첫 위치 번호를 적으세요.",
      "hint_en": "Use the condition-based loop keyword, then call the 3-letter extraction method with the front index so items come out in order.",
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
      "prompt_ko": ".pop(0)은 리스트의 맨 앞(0번 인덱스) 요소를 꺼내므로, 대기열(큐)처럼 앞에서부터 순서대로 값을 꺼내 조건에 맞는 값만 새 리스트에 .append()할 수 있습니다. 블록의 코드를 따라 입력해보세요.",
      "prompt_en": "Calling .pop(0) removes and returns the front (index 0) item, letting you process items in first-in-first-out order and .append() filtered results. Follow the blocks and type the code.",
      "hint_ko": "인자 없는 .pop()은 맨 뒤에서 꺼내지만, .pop(0)은 맨 앞에서부터 순서대로 요소를 꺼냅니다.",
      "hint_en": "While plain .pop() removes from the back, .pop(0) removes from the front in order.",
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
      "prompt_ko": "입력이 \"use\"이면 마지막 아이템을 꺼내고, 아니면 입력값을 추가한 뒤 결과와 가방의 논리값을 출력해보세요. (출력 예: Used:potion,Has:False) (터미널 입력: use)",
      "prompt_en": "If cmd is \"use\", pop the last item; otherwise append cmd, printing the item and whether bag is non-empty. (Terminal input: use)",
      "hint_ko": "맨 끝 요소를 '톡 꺼내는' 세 글자 메서드, '불리언(boolean)' 앞 네 글자를 딴 참/거짓 변환 함수, 맨 뒤에 '덧붙이는' 여섯 글자 메서드를 채우세요.",
      "hint_en": "Fill in the 3-letter tail-removal method, the 4-letter truthiness function from 'boolean', and the 6-letter tail-insertion method.",
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
      "hint_ko": "리스트의 맨 앞 위치는 1번이 아닙니다. 두 번째 위치를 꺼내다 보면 요소가 하나 남았을 때 범위 오류가 나므로 첫 위치 번호로 고쳐보세요.",
      "hint_en": "Index 1 targets the second slot and fails when only one item remains; change the argument to the 0-based front index.",
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
      "prompt_ko": "마지막 요소를 꺼내 top에 저장한 코드 아래에 한 줄을 추가하여 꺼낸 값과 남은 리스트의 길이를 형식에 맞게 출력해보세요. (출력 예: Pop:30,Len:2)",
      "prompt_en": "Add one line below to print the popped value top and the remaining length (e.g., Pop:30,Len:2).",
      "hint_ko": "f-string 첫 중괄호에는 꺼내 둔 변수를, 두 번째 중괄호에는 남은 리스트의 길이를 구하는 식을 넣어 한 줄로 출력해보세요.",
      "hint_en": "Put the stored popped variable in the first brace and the remaining list length in the second brace of one f-string.",
      "templateCode": "stack = [10, 20]\nstack.append(30)\ntop = stack.pop()\n§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§",
      "targetCode": "stack = [10, 20]\nstack.append(30)\ntop = stack.pop()\nprint(f\"Pop:{top},Len:{len(stack)}\")",
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
      "hint_ko": "맨 앞에서 꺼낸 값이 10배가 되어 리스트 어느 쪽에 들어가는지 적고, 이어서 인자 없이 꺼낼 때 어느 위치 값이 빠져나오는지 추적해보세요.",
      "hint_en": "Trace the list state step by step: removing from the front, attaching the multiplied number to the back, and then removing from the back.",
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
