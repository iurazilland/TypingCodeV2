import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_56: PracticeRound = {
  "id": "py-basic-r56",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 56,
  "title_ko": "56레벨: 대표 에러 타입별 분기 처리",
  "title_en": "Level 56: Handling Specific Exception Types",
  "description_ko": "ValueError, ZeroDivisionError, IndexError, KeyError 등 에러 원인별로 except 분기를 나누어 정확히 대응합니다.",
  "description_en": "Branch on specific exception types—ValueError, ZeroDivisionError, IndexError, and KeyError.",
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
    "for_in",
    "while",
    "def",
    "try"
  ],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "block",
      "prompt_ko": "입력값을 정수로 바꾸어 10을 곱해 출력하고, 값 변환 실패(ValueError) 시 \"NotInt\"를 출력해보세요.",
      "prompt_en": "Convert input to int and print n * 10, catching ValueError specifically to print \"NotInt\".",
      "hint_ko": "except ValueError:를 지정하면 숫자 형태가 아닌 문자열을 int()에 넣었을 때만 정확히 잡아냅니다.",
      "hint_en": "Use except ValueError: to catch invalid integer strings.",
      "targetCode": "s = input()\ntry:\n    n = int(s)\n    print(n * 10)\nexcept ValueError:\n    print(\"NotInt\")",
      "testCases": [
        {
          "id": 1,
          "input": "4",
          "expectedOutput": "40"
        },
        {
          "id": 2,
          "input": "py",
          "expectedOutput": "NotInt"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "문자열을 실수로 변환할 수 없을 때 발생하는 값 변환 에러 타입을 빈칸에 채워 BadFloat가 출력되도록 해보세요.",
      "prompt_en": "Fill in the exception type raised when float(s) receives invalid text.",
      "hint_ko": "int()나 float()에 알맞지 않은 값 문자열이 들어오면 ValueError가 발생합니다.",
      "hint_en": "Write ValueError after except.",
      "templateCode": "s = input()\ntry:\n    w = float(s)\n    print(w + 1.5)\nexcept §§§§§§§§§§:\n    print(\"BadFloat\")",
      "targetCode": "s = input()\ntry:\n    w = float(s)\n    print(w + 1.5)\nexcept ValueError:\n    print(\"BadFloat\")",
      "testCases": [
        {
          "id": 1,
          "input": "2.5",
          "expectedOutput": "4.0"
        },
        {
          "id": 2,
          "input": "kg",
          "expectedOutput": "BadFloat"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "prompt_ko": "정수 입력 n으로 60 // n을 출력하되, 0으로 나눌 때(ZeroDivisionError) \"ZeroDiv\"를 출력해보세요.",
      "prompt_en": "Print 60 // n for integer input n, catching ZeroDivisionError to print \"ZeroDiv\".",
      "hint_ko": "except ZeroDivisionError: 블록을 사용하면 0으로 나누는 오류를 명확히 구분해 처리합니다.",
      "hint_en": "Catch ZeroDivisionError and print(\"ZeroDiv\").",
      "targetCode": "n = int(input())\ntry:\n    print(60 // n)\nexcept ZeroDivisionError:\n    print(\"ZeroDiv\")",
      "testCases": [
        {
          "id": 1,
          "input": "15",
          "expectedOutput": "4"
        },
        {
          "id": 2,
          "input": "0",
          "expectedOutput": "ZeroDiv"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "두 번째 숫자가 0이어서 나눗셈을 할 수 없을 때 발생하는 에러 타입 이름을 빈칸에 채워보세요.",
      "prompt_en": "Fill in the specific exception type raised when dividing by zero.",
      "hint_ko": "0으로 나누려 할 때 파이썬이 발생시키는 에러 이름은 ZeroDivisionError입니다.",
      "hint_en": "Write ZeroDivisionError after except.",
      "templateCode": "a, b = input().split()\ntry:\n    print(int(a) // int(b))\nexcept §§§§§§§§§§§§§§§§§:\n    print(\"DivByZero\")",
      "targetCode": "a, b = input().split()\ntry:\n    print(int(a) // int(b))\nexcept ZeroDivisionError:\n    print(\"DivByZero\")",
      "testCases": [
        {
          "id": 1,
          "input": "20 4",
          "expectedOutput": "5"
        },
        {
          "id": 2,
          "input": "20 0",
          "expectedOutput": "DivByZero"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "prompt_ko": "리스트 [10, 20, 30]에서 입력 인덱스 idx 위치를 출력하고, 범위를 벗어나면(IndexError) \"NoIndex\"를 출력해보세요.",
      "prompt_en": "Print nums[idx] from [10, 20, 30], catching IndexError to print \"NoIndex\".",
      "hint_ko": "리스트 길이보다 큰 인덱스를 조회할 때는 IndexError가 발생합니다.",
      "hint_en": "Use except IndexError: to handle out-of-bounds list access.",
      "targetCode": "nums = [10, 20, 30]\nidx = int(input())\ntry:\n    print(nums[idx])\nexcept IndexError:\n    print(\"NoIndex\")",
      "testCases": [
        {
          "id": 1,
          "input": "2",
          "expectedOutput": "30"
        },
        {
          "id": 2,
          "input": "5",
          "expectedOutput": "NoIndex"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "딕셔너리에 존재하지 않는 키를 조회할 때 발생하는 에러 타입 이름을 빈칸에 채워 NoKey를 출력해보세요.",
      "prompt_en": "Fill in the exception type raised when looking up a missing dictionary key.",
      "hint_ko": "딕셔너리에서 없는 키를 대괄호 scores[key]로 찾으면 KeyError가 발생합니다.",
      "hint_en": "Write KeyError after except.",
      "templateCode": "scores = {\"Kim\": 90, \"Lee\": 85}\nkey = input()\ntry:\n    print(scores[key])\nexcept §§§§§§§§:\n    print(\"NoKey\")",
      "targetCode": "scores = {\"Kim\": 90, \"Lee\": 85}\nkey = input()\ntry:\n    print(scores[key])\nexcept KeyError:\n    print(\"NoKey\")",
      "testCases": [
        {
          "id": 1,
          "input": "Kim",
          "expectedOutput": "90"
        },
        {
          "id": 2,
          "input": "Park",
          "expectedOutput": "NoKey"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "prompt_ko": "입력값을 정수로 바꿔 100 // n을 출력하되, ValueError면 \"ValErr\", ZeroDivisionError면 \"ZeroErr\"를 각각 출력해보세요.",
      "prompt_en": "Print 100 // int(s), handling ValueError with \"ValErr\" and ZeroDivisionError with \"ZeroErr\".",
      "hint_ko": "하나의 try 아래에 except 블록을 여러 개 나란히 두면 에러 종류별로 다른 안내문을 출력할 수 있습니다.",
      "hint_en": "Attach two except branches—except ValueError: and except ZeroDivisionError:—to one try.",
      "targetCode": "s = input()\ntry:\n    n = int(s)\n    print(100 // n)\nexcept ValueError:\n    print(\"ValErr\")\nexcept ZeroDivisionError:\n    print(\"ZeroErr\")",
      "testCases": [
        {
          "id": 1,
          "input": "20",
          "expectedOutput": "5"
        },
        {
          "id": 2,
          "input": "abc",
          "expectedOutput": "ValErr"
        },
        {
          "id": 3,
          "input": "0",
          "expectedOutput": "ZeroErr"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "정수 변환 실패와 리스트 범위 초과를 각각 구분해 안내하도록 두 에러 타입 이름을 순서대로 채워보세요.",
      "prompt_en": "Fill in the two exception types to distinguish invalid integer input from out-of-range index access.",
      "hint_ko": "숫자 변환 실패는 ValueError, 리스트 인덱스 초과 조회는 IndexError로 각각 잡아냅니다.",
      "hint_en": "Write ValueError in the first except and IndexError in the second except.",
      "templateCode": "ranks = [\"Gold\", \"Silver\", \"Bronze\"]\ns = input()\ntry:\n    i = int(s)\n    print(ranks[i])\nexcept §§§§§§§§§§:\n    print(\"NeedNum\")\nexcept §§§§§§§§§§:\n    print(\"OutRange\")",
      "targetCode": "ranks = [\"Gold\", \"Silver\", \"Bronze\"]\ns = input()\ntry:\n    i = int(s)\n    print(ranks[i])\nexcept ValueError:\n    print(\"NeedNum\")\nexcept IndexError:\n    print(\"OutRange\")",
      "testCases": [
        {
          "id": 1,
          "input": "1",
          "expectedOutput": "Silver"
        },
        {
          "id": 2,
          "input": "one",
          "expectedOutput": "NeedNum"
        },
        {
          "id": 3,
          "input": "9",
          "expectedOutput": "OutRange"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "block",
      "prompt_ko": "pts[k] // cnts[k]를 반환하되 키가 없으면 -1, 0으로 나누면 0을 반환하는 avg_pt 함수를 정의해 \"A\", \"B\", \"C\" 결과를 출력해보세요.",
      "prompt_en": "Define avg_pt(pts, cnts, k) returning pts[k] // cnts[k], -1 on KeyError, or 0 on ZeroDivisionError.",
      "hint_ko": "함수 안의 try에서 pts[k] // cnts[k]를 반환하고 KeyError와 ZeroDivisionError마다 다른 숫자를 반환합니다.",
      "hint_en": "Catch KeyError -> return -1 and ZeroDivisionError -> return 0 inside avg_pt.",
      "targetCode": "def avg_pt(pts, cnts, k):\n    try:\n        return pts[k] // cnts[k]\n    except KeyError:\n        return -1\n    except ZeroDivisionError:\n        return 0\np = {\"A\": 90, \"B\": 50}\nc = {\"A\": 3, \"B\": 0}\nprint(avg_pt(p, c, \"A\"), avg_pt(p, c, \"B\"))\nprint(avg_pt(p, c, \"C\"))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "30 0\n-1"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "장바구니 품목이 가격표 딕셔너리에 없을 때의 에러만 잡아 건너뛰고 합계를 출력하도록 빈칸을 채워보세요. (출력 예: Total:5000)",
      "prompt_en": "Catch the missing dictionary key exception while summing cart item prices.",
      "hint_ko": "\"jam\"처럼 가격표 딕셔너리에 없는 키를 조회할 때 발생하는 KeyError를 잡아냅니다.",
      "hint_en": "Write KeyError after except.",
      "templateCode": "prices = {\"milk\": 2000, \"egg\": 3000}\ncart = [\"milk\", \"jam\", \"egg\"]\ntotal = 0\nfor item in cart:\n    try:\n        total += prices[item]\n    except §§§§§§§§:\n        total += 0\nprint(f\"Total:{total}\")",
      "targetCode": "prices = {\"milk\": 2000, \"egg\": 3000}\ncart = [\"milk\", \"jam\", \"egg\"]\ntotal = 0\nfor item in cart:\n    try:\n        total += prices[item]\n    except KeyError:\n        total += 0\nprint(f\"Total:{total}\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Total:5000"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "리스트 범위를 벗어났을 때를 처리하려 했지만 딕셔너리용 에러 타입이 적혀 있어 멈춥니다. 알맞은 에러 타입으로 고쳐보세요.",
      "prompt_en": "Fix the uncaught crash by replacing the dictionary exception type with the list index exception type.",
      "hint_ko": "리스트 nums[idx]에서 범위를 벗어날 때 발생하는 에러는 KeyError가 아니라 IndexError입니다.",
      "hint_en": "Change except KeyError: to except IndexError:.",
      "templateCode": "nums = [100, 200]\nidx = int(input())\ntry:\n    print(nums[idx])\nexcept KeyError:\n    print(\"Out of range\")",
      "targetCode": "nums = [100, 200]\nidx = int(input())\ntry:\n    print(nums[idx])\nexcept IndexError:\n    print(\"Out of range\")",
      "testCases": [
        {
          "id": 1,
          "input": "1",
          "expectedOutput": "200"
        },
        {
          "id": 2,
          "input": "5",
          "expectedOutput": "Out of range"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "딕셔너리 안전 조회 코드 아래에 한 줄을 추가하여 입력 키 k와 조회 결과 ans를 콜론(:)으로 이어 출력해보세요. (출력 예: pen:5)",
      "prompt_en": "Add one line at the bottom to print f\"{k}:{ans}\".",
      "hint_ko": "f-string을 사용해 print(f\"{k}:{ans}\")를 마지막 줄에 작성합니다.",
      "hint_en": "Write print(f\"{k}:{ans}\") on the last line.",
      "templateCode": "stock = {\"pen\": 5, \"book\": 2}\nk = input()\ntry:\n    ans = stock[k]\nexcept KeyError:\n    ans = 0\n§§§§§§§§§§§§§§§§§§§",
      "targetCode": "stock = {\"pen\": 5, \"book\": 2}\nk = input()\ntry:\n    ans = stock[k]\nexcept KeyError:\n    ans = 0\nprint(f\"{k}:{ans}\")",
      "testCases": [
        {
          "id": 1,
          "input": "pen",
          "expectedOutput": "pen:5"
        },
        {
          "id": 2,
          "input": "eraser",
          "expectedOutput": "eraser:0"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "여러 개의 except 분기가 동작하는 다음 코드의 실행 결과를 선택해보세요.",
      "prompt_en": "Select the exact list output produced by the multi-except loop below.",
      "hint_ko": "\"0\"은 12//12=1, \"1\"은 12//0으로 Z, \"x\"는 int 변환 실패로 V, \"5\"는 인덱스 초과로 I가 기록됩니다.",
      "hint_en": "\"0\" -> \"1\", \"1\" -> ZeroDivisionError (\"Z\"), \"x\" -> ValueError (\"V\"), \"5\" -> IndexError (\"I\").",
      "targetCode": "nums = [12, 0, 4]\nidxs = [\"0\", \"1\", \"x\", \"5\"]\nlog = []\nfor s in idxs:\n    try:\n        v = 12 // nums[int(s)]\n        log.append(str(v))\n    except ValueError:\n        log.append(\"V\")\n    except ZeroDivisionError:\n        log.append(\"Z\")\n    except IndexError:\n        log.append(\"I\")\nprint(log)",
      "choices": [
        "['1', 'Z', 'I', 'V']",
        "['1', 'Z', 'V', 'I']",
        "['1', '0', 'V', 'I']",
        "['12', 'Z', 'V', 'I']"
      ],
      "correctChoiceIndex": 1,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "['1', 'Z', 'V', 'I']"
        }
      ]
    }
  ]
};
