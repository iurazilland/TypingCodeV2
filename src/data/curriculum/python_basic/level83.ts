import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_83: PracticeRound = {
  "id": "py-basic-r83",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 83,
  "title_ko": "83레벨: 리스트 원하는 위치 삽입(.insert())과 값 찾아 삭제(.remove())",
  "title_en": "Level 83: List Insertion (.insert()) & Value Removal (.remove())",
  "description_ko": "원하는 인덱스 위치에 요소를 끼워 넣는 .insert()와 특정 값을 찾아 첫 번째 일치 항목을 지우는 .remove()를 익힙니다.",
  "description_en": "Learn to insert elements at any index with .insert() and delete the first matching value with .remove().",
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
      "prompt_ko": "[블록 조립] nums.insert(1, 20)으로 1번 인덱스 위치에 20을 끼워 넣고 리스트를 출력해보세요.",
      "prompt_en": "[Block] Use nums.insert(1, 20) to insert 20 at index 1 and print the list.",
      "hint_ko": "맨 끝에 추가하는 .append()와 달리 .insert(인덱스, 값)은 지정한 위치에 요소를 끼워 넣습니다.",
      "hint_en": "Unlike .append(), .insert(index, value) places the element at the specified index.",
      "targetCode": "nums = [10, 30]\nnums.insert(1, 20)\nprint(nums)",
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
      "prompt_ko": "[빈칸 채우기] 리스트 맨 앞(0번 인덱스)에 \"A\"를 끼워 넣어 ['A', 'B', 'C']를 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in the list method name to place \"A\" at index 0.",
      "hint_ko": "지정한 인덱스 자리에 새 요소를 끼워 넣는 여섯 글자 리스트 메서드를 호출하세요.",
      "hint_en": "Call the six-letter list method that places an element at a given index.",
      "templateCode": "items = [\"B\", \"C\"]\nitems.§§§§§§(0, \"A\")\nprint(items)",
      "targetCode": "items = [\"B\", \"C\"]\nitems.insert(0, \"A\")\nprint(items)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "['A', 'B', 'C']"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] fruits.remove(\"apple\")로 첫 번째 일치하는 값을 찾아 삭제하고 출력해보세요.",
      "prompt_en": "[Block] Use fruits.remove(\"apple\") to delete the first matching value and print the list.",
      "hint_ko": "인덱스로 지우는 del이나 .pop()과 달리 .remove(값)은 일치하는 첫 번째 값 자체를 찾아 삭제합니다.",
      "hint_en": "Unlike del or .pop(), .remove(value) searches for and deletes the first matching value.",
      "targetCode": "fruits = [\"apple\", \"banana\", \"apple\"]\nfruits.remove(\"apple\")\nprint(fruits)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "['banana', 'apple']"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 점수 리스트에서 값 85를 찾아 삭제한 뒤 100을 끝에 추가해 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in the method name that deletes the value 85 from scores before appending 100.",
      "hint_ko": "인덱스 번호가 아니라 특정 값을 찾아 제거하는 여섯 글자 리스트 메서드를 적으세요.",
      "hint_en": "Use the six-letter list method that deletes the first occurrence of a value.",
      "templateCode": "scores = [70, 85, 90]\nscores.§§§§§§(85)\nscores.append(100)\nprint(scores)",
      "targetCode": "scores = [70, 85, 90]\nscores.remove(85)\nscores.append(100)\nprint(scores)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[70, 90, 100]"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] if target in tags:로 포함 여부를 먼저 확인한 뒤 .remove(target)으로 안전하게 삭제해보세요.",
      "prompt_en": "[Block] Check if target in tags: before calling tags.remove(target), then print tags.",
      "hint_ko": "리스트에 없는 값을 .remove()하면 ValueError가 발생하므로 in 연산자나 try - except로 방어합니다.",
      "hint_en": "Because .remove() raises ValueError when the value is absent, guard it with in or try - except.",
      "targetCode": "tags = [\"py\", \"js\", \"go\"]\ntarget = input()\nif target in tags:\n    tags.remove(target)\nprint(tags)",
      "testCases": [
        {
          "id": 1,
          "input": "js",
          "expectedOutput": "['py', 'go']"
        },
        {
          "id": 2,
          "input": "rust",
          "expectedOutput": "['py', 'js', 'go']"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 리스트에 없는 값을 삭제하려 할 때 발생하는 에러를 잡아 안전하게 건너뛰도록 예외 이름을 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the exception type raised when .remove() cannot find the value in the list.",
      "hint_ko": "리스트 안에 찾는 '값(Value)'이 없어 삭제할 수 없을 때 발생하는 열 글자 예외 이름을 적으세요.",
      "hint_en": "Specify the ten-letter exception raised when a target value is not found in a list.",
      "templateCode": "nums = [10, 20, 30]\nx = int(input())\ntry:\n    nums.remove(x)\nexcept §§§§§§§§§§:\n    pass\nprint(nums)",
      "targetCode": "nums = [10, 20, 30]\nx = int(input())\ntry:\n    nums.remove(x)\nexcept ValueError:\n    pass\nprint(nums)",
      "testCases": [
        {
          "id": 1,
          "input": "20",
          "expectedOutput": "[10, 30]"
        },
        {
          "id": 2,
          "input": "99",
          "expectedOutput": "[10, 20, 30]"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] VIP 손님은 0번 인덱스에 끼워 넣고 취소 손님은 값으로 찾아 삭제하는 함수를 조립해보세요.",
      "prompt_en": "[Block] Insert vip at index 0 and remove cancel by value inside update_queue, then return the list.",
      "hint_ko": ".insert(0, x)는 대기열 맨 앞에 추가하고, .remove(y)는 해당 이름을 찾아 대기열에서 제외합니다.",
      "hint_en": ".insert(0, x) places an item at the front of the queue, while .remove(y) deletes a matching item.",
      "targetCode": "def update_queue(q, vip, cancel):\n    q.insert(0, vip)\n    if cancel in q:\n        q.remove(cancel)\n    return q\nline = [\"Kim\", \"Lee\"]\nprint(update_queue(line, \"Ace\", \"Kim\"))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "['Ace', 'Lee']"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 반복문으로 리스트의 모든 0을 찾아 제거한 뒤 맨 앞에 99를 넣도록 삭제 메서드를 채워보세요.",
      "prompt_en": "[Fill Blank] Complete the while loop body so every 0 is removed by value before inserting 99 at index 0.",
      "hint_ko": "0이 리스트 안에 남아 있는 동안 값 0을 찾아 하나씩 지우는 여섯 글자 메서드를 호출하세요.",
      "hint_en": "Call the six-letter method that removes a matching value from the list.",
      "templateCode": "data = [0, 5, 0, 8]\nwhile 0 in data:\n    data.§§§§§§(0)\ndata.insert(0, 99)\nprint(data)",
      "targetCode": "data = [0, 5, 0, 8]\nwhile 0 in data:\n    data.remove(0)\ndata.insert(0, 99)\nprint(data)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[99, 5, 8]"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 대기열 맨 앞에 새 항목을 끼워 넣고, 지정한 값을 안전하게 찾아 삭제하도록 세 빈칸을 채워보세요.",
      "prompt_en": "[Fill Blank] Complete the front-insertion method, membership check keyword, and value-removal method.",
      "hint_ko": "원하는 위치에 삽입하는 메서드, 리스트 포함 여부를 확인하는 키워드, 그리고 값으로 삭제하는 메서드를 확인하세요.",
      "hint_en": "Check the index-insertion method, the membership operator, and the value-removal method.",
      "templateCode": "cards = [\"B\", \"C\", \"D\"]\ncards.§§§§§§(0, \"A\")\ndrop = input()\nif drop §§ cards:\n    cards.§§§§§§(drop)\nprint(cards)",
      "targetCode": "cards = [\"B\", \"C\", \"D\"]\ncards.insert(0, \"A\")\ndrop = input()\nif drop in cards:\n    cards.remove(drop)\nprint(cards)",
      "testCases": [
        {
          "id": 1,
          "input": "C",
          "expectedOutput": "['A', 'B', 'D']"
        },
        {
          "id": 2,
          "input": "Z",
          "expectedOutput": "['A', 'B', 'C', 'D']"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 0번 인덱스에 숫자 100을 끼워 넣으려다 인자 순서를 거꾸로 적어 엉뚱한 위치에 들어간 버그를 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the argument order in .insert() so 100 is placed at index 0 instead of the end.",
      "hint_ko": "위치 삽입 메서드는 (값, 인덱스)가 아니라 (인덱스, 값) 순서로 두 인자를 전달해야 합니다.",
      "hint_en": "Pass the index first and the value second when calling .insert(index, value).",
      "templateCode": "nums = [10, 20, 30]\nnums.insert(100, 0)\nprint(nums)",
      "targetCode": "nums = [10, 20, 30]\nnums.insert(0, 100)\nprint(nums)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[100, 10, 20, 30]"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 리스트에서 값 50을 찾아 지우려다 인덱스 삭제 키워드(del)를 써서 범위 초과 에러가 난 버그를 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the IndexError caused by using del nums[50] when trying to delete the value 50 from the list.",
      "hint_ko": "del 리스트[번호]는 인덱스로 삭제하므로, 값 자체를 찾아 지우려면 리스트의 값 삭제 메서드를 호출해야 합니다.",
      "hint_en": "del deletes by index; call the list's value-removal method to delete the number 50 itself.",
      "templateCode": "nums = [10, 50, 90]\ndel nums[50]\nprint(nums)",
      "targetCode": "nums = [10, 50, 90]\nnums.remove(50)\nprint(nums)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[10, 90]"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 리스트 tasks의 맨 앞(0번 인덱스)에 \"urgent\"를 끼워 넣는 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Write the line that inserts \"urgent\" at index 0 of the tasks list.",
      "hint_ko": "리스트 변수 뒤에 위치 삽입 메서드를 호출하고 0과 \"urgent\"를 인자로 넘기세요.",
      "hint_en": "Call tasks.insert(0, \"urgent\").",
      "templateCode": "tasks = [\"mail\", \"report\"]\n§§§§§§§§§§§§§§§§§§§§§§§§§\nprint(tasks)",
      "targetCode": "tasks = [\"mail\", \"report\"]\ntasks.insert(0, \"urgent\")\nprint(tasks)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "['urgent', 'mail', 'report']"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 리스트 scores에서 값 40을 찾아 삭제하는 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Write the line that removes the value 40 from the scores list.",
      "hint_ko": "리스트 변수 뒤에 값 삭제 메서드를 호출하고 40을 인자로 넣으세요.",
      "hint_en": "Call scores.remove(40).",
      "templateCode": "scores = [80, 40, 95, 40]\n§§§§§§§§§§§§§§§§§\nprint(scores, sum(scores))",
      "targetCode": "scores = [80, 40, 95, 40]\nscores.remove(40)\nprint(scores, sum(scores))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[80, 95, 40] 215"
        }
      ]
    },
    {
      "id": 14,
      "step": 14,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 중복된 값이 들어 있는 리스트에서 .remove()와 .insert()를 실행했을 때의 출력 결과를 골라보세요.",
      "prompt_en": "[Predict Output] Select the output after calling .remove(10) and .insert(1, 99) on a list with duplicates.",
      "hint_ko": "같은 값이 여러 개 있을 때 .remove(10)은 맨 앞에 있는 첫 번째 10 하나만 지운다는 점에 주의하세요.",
      "hint_en": ".remove(10) deletes only the first matching 10, leaving the later 10 intact before inserting 99 at index 1.",
      "targetCode": "nums = [10, 20, 10, 30]\nnums.remove(10)\nnums.insert(1, 99)\nprint(nums)",
      "choices": [
        "[20, 99, 10, 30]",
        "[99, 20, 30]",
        "[10, 99, 20, 30]",
        "[20, 10, 99, 30]"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[20, 99, 10, 30]"
        }
      ]
    },
    {
      "id": 15,
      "step": 15,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측]del, .pop(), .remove(), .insert()를 차례대로 실행한 뒤 리스트의 상태를 골라보세요.",
      "prompt_en": "[Predict Output] Select the final output after combining del, .pop(), .remove(), and .insert().",
      "hint_ko": "인덱스로 지우는 연산과 값으로 지우는 연산이 각각 어떤 원소를 제거하는지 한 줄씩 순서대로 추적해보세요.",
      "hint_en": "Trace each step carefully: remove(20) by value, pop() from the end, and insert(0, out) at the front.",
      "targetCode": "arr = [10, 20, 30, 20, 40]\narr.remove(20)\nout = arr.pop()\narr.insert(0, out)\nprint(arr)",
      "choices": [
        "[40, 10, 30, 20]",
        "[40, 10, 20, 30]",
        "[20, 10, 30, 40]",
        "[40, 10, 30]"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[40, 10, 30, 20]"
        }
      ]
    }
  ]
};
