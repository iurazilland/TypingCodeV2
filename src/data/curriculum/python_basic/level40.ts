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
  "totalQuestions": 15,
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] .append(30)으로 리스트 맨 끝에 새 요소를 추가하는 블록을 조립해보세요.",
      "prompt_en": "[Block] Assemble the code that adds 30 to the end of nums using .append().",
      "hint_ko": ".append()는 원본 리스트 자체를 직접 변경하므로 단독 문장으로 호출합니다.",
      "hint_en": "Because .append() mutates the list in place, call it on its own line.",
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
      "prompt_ko": "[빈칸 채우기] 빈 리스트 cart에 \"milk\"와 \"egg\"를 순서대로 추가해 출력해보세요.",
      "prompt_en": "[Fill Blank] Add \"milk\" and \"egg\" to the end of cart in order and print cart.",
      "hint_ko": "리스트 맨 끝에 항목을 덧붙이는 여섯 글자 메서드 append를 두 번 호출하세요.",
      "hint_en": "Call the 6-letter method append on each line.",
      "templateCode": "cart = []\ncart.§§§§§§(\"milk\")\ncart.§§§§§§(\"egg\")\nprint(cart)",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] .pop()으로 리스트의 마지막 요소를 꺼내 변수에 저장하고 출력하는 블록을 조립해보세요.",
      "prompt_en": "[Block] Remove and return the last element from stack using .pop().",
      "hint_ko": ".pop()을 호출하면 마지막 값은 변수에 담기고 원본 리스트에는 나머지 요소만 남습니다.",
      "hint_en": "Calling .pop() assigns the removed tail item to last and leaves the rest in stack.",
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
      "prompt_ko": "[빈칸 채우기] 리스트에서 맨 앞 요소를 first에, 맨 뒤 요소를 last에 꺼내고 남은 리스트와 함께 출력해보세요.",
      "prompt_en": "[Fill Blank] Pop the first item into first and the last item into last, then print all three.",
      "hint_ko": "맨 앞 요소를 꺼내는 pop(0)과 맨 끝 요소를 꺼내는 pop을 각각 채우세요.",
      "hint_en": "Use pop(0) to extract the front item and pop() for the last item.",
      "templateCode": "queue = [\"A\", \"B\", \"C\"]\nfirst = queue.§§§§§§\nlast = queue.§§§()\nprint(first, last, queue)",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] for 반복문 안에서 .append()로 계산된 값들을 빈 리스트에 모으는 블록을 조립해보세요.",
      "prompt_en": "[Block] Collect computed values into an empty list using .append() inside a for loop.",
      "hint_ko": "반복문 바깥에서 빈 리스트를 초기화하고 본문에서 매 회차 결과를 .append()로 추가합니다.",
      "hint_en": "Initialize the empty list before the loop and append each value inside the loop.",
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
      "prompt_ko": "[빈칸 채우기] n번 반복하며 입력 단어 앞에 번호를 붙여 words 리스트에 추가하고 출력해보세요.",
      "prompt_en": "[Fill Blank] Loop n times, strip each word, append \"i:w\" to words, and print words.",
      "hint_ko": "반복 횟수를 만드는 range 함수와 리스트 끝에 추가하는 append 메서드를 채우세요.",
      "hint_en": "Use range for the loop count and append to add each formatted string.",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] while stack: 조건과 .pop()으로 모든 요소를 꺼내 합산하는 블록을 조립해보세요.",
      "prompt_en": "[Block] Combine while stack: with .pop() to extract and sum every item until empty.",
      "hint_ko": ".pop()을 반복할 때마다 리스트 길이가 줄어들어 빈 리스트가 되면 while문이 멈춥니다.",
      "hint_en": "Each .pop() shrinks the list until it becomes empty and stops the while loop.",
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
      "prompt_ko": "[빈칸 채우기] 단어 리스트가 빌 때까지 맨 앞 요소를 차례대로 꺼내 대괄호 모양으로 이어 붙여보세요.",
      "prompt_en": "[Fill Blank] While tasks has items, pop from index 0 and append \"[cur]\" onto log.",
      "hint_ko": "조건 반복 키워드 while과 맨 앞 요소를 꺼내는 pop(0)을 차례로 채우세요.",
      "hint_en": "Use while for the loop header and pop(0) to remove from the front in order.",
      "templateCode": "tasks = input().split()\nlog = \"\"\n§§§§§ tasks:\n    cur = tasks.§§§§§§\n    log += f\"[{cur}]\"\nprint(log)",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] .pop(0)으로 앞에서부터 값을 꺼내 양수만 2배로 clean에 .append()하는 블록을 조립해보세요.",
      "prompt_en": "[Block] Pop items from the front with .pop(0) and .append() doubled positive values to clean.",
      "hint_ko": ".pop(0)은 맨 앞에서부터 순서대로 요소를 꺼내며, 조건에 맞는 값만 .append()로 모읍니다.",
      "hint_en": ".pop(0) removes from the front in order, and positive values are appended to clean.",
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
      "prompt_ko": "[빈칸 채우기] raw가 빌 때까지 맨 앞 숫자를 꺼내 양수만 valid 리스트에 추가해 출력해보세요.",
      "prompt_en": "[Fill Blank] Pop from the front of raw while non-empty and append positive numbers to valid.",
      "hint_ko": "맨 앞 요소를 꺼내는 pop(0)과 리스트 끝에 덧붙이는 append를 차례로 채우세요.",
      "hint_en": "Use pop(0) to extract from the front and append to store positive numbers.",
      "templateCode": "raw = [10, -5, 20]\nvalid = []\nwhile raw:\n    n = raw.§§§§§§\n    if n > 0:\n        valid.§§§§§§(n)\nprint(valid)",
      "targetCode": "raw = [10, -5, 20]\nvalid = []\nwhile raw:\n    n = raw.pop(0)\n    if n > 0:\n        valid.append(n)\nprint(valid)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[10, 20]"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 리스트의 맨 앞 요소부터 차례로 꺼내려다 인덱스 오류가 나는 버그를 수정해보세요.",
      "prompt_en": "[Fix Bug] Fix the index argument in .pop() so A, B, C print from the front without an error.",
      "hint_ko": "맨 앞 요소의 인덱스는 1이 아니라 0이므로 items.pop(0)으로 고쳐야 합니다.",
      "hint_en": "Change items.pop(1) to items.pop(0) to always remove the front element.",
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
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 대기열 queue의 맨 앞 요소를 꺼내 first에 저장하려다 두 번째 요소가 꺼내지는 버그를 수정해보세요.",
      "prompt_en": "[Fix Bug] Fix the .pop() index so the first element (10) is removed into first.",
      "hint_ko": "맨 앞 요소를 꺼내려면 pop(1)이 아니라 pop(0)을 호출해야 합니다.",
      "hint_en": "Change queue.pop(1) to queue.pop(0) to remove the first item.",
      "templateCode": "queue = [10, 20, 30]\nfirst = queue.pop(1)\nprint(first, queue)",
      "targetCode": "queue = [10, 20, 30]\nfirst = queue.pop(0)\nprint(first, queue)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "10 [20, 30]"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] stack의 마지막 요소를 꺼내 top에 저장하는 한 줄을 완성해보세요.",
      "prompt_en": "[Complete Line] Complete the line that pops the last element of stack into top.",
      "hint_ko": "top = stack.pop() 형태로 맨 뒤 요소를 꺼내 변수 top에 대입하세요.",
      "hint_en": "Write top = stack.pop() to remove and store the last element.",
      "templateCode": "stack = [10, 20]\nstack.append(30)\n§§§§§§§§§§§§§§§§§\nprint(f\"Pop:{top},Len:{len(stack)}\")",
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
      "id": 14,
      "step": 14,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 입력받은 item을 리스트 cart의 맨 끝에 추가하는 한 줄을 완성해보세요.",
      "prompt_en": "[Complete Line] Complete the line that appends item to cart.",
      "hint_ko": "cart.append(item) 형태로 리스트 끝에 요소를 추가하세요.",
      "hint_en": "Write cart.append(item) to add item to the end of cart.",
      "templateCode": "cart = [\"milk\"]\nitem = input().strip()\n§§§§§§§§§§§§§§§§§\nprint(cart)",
      "targetCode": "cart = [\"milk\"]\nitem = input().strip()\ncart.append(item)\nprint(cart)",
      "testCases": [
        {
          "id": 1,
          "input": "bread",
          "expectedOutput": "['milk', 'bread']"
        },
        {
          "id": 2,
          "input": "cheese",
          "expectedOutput": "['milk', 'cheese']"
        }
      ]
    },
    {
      "id": 15,
      "step": 15,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 다음 .pop(0), .append(), .pop() 코드의 실행 결과를 예측해보세요.",
      "prompt_en": "[Predict Output] Select the exact output printed when the following Python code runs.",
      "hint_ko": "맨 앞에서 꺼낸 값이 10배가 되어 끝에 추가된 뒤 .pop()으로 다시 꺼내질 때의 결과를 추적해보세요.",
      "hint_en": "Trace removing from the front, appending x * 10 to the back, and then popping from the back.",
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
