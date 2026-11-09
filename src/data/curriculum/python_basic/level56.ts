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
      "prompt_ko": "입력값을 정수로 바꾸어 10을 곱해 출력하고, 값 변환 실패(ValueError) 시 \"NotInt\"를 출력해보세요. (터미널 입력: 4)",
      "prompt_en": "Convert input to int and print n * 10, catching ValueError specifically to print \"NotInt\". (Terminal input: 4)",
      "hint_ko": "정수 변환과 곱셈 출력을 시도 블록에 두고, 부적절한 값 변환 오류 타입만 지정한 예외 블록에서 안내문을 출력하세요.",
      "hint_en": "Put conversion and printing in the attempt block, and specify the invalid-value exception type on the catch header.",
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
      "prompt_ko": "문자열을 정수로 변환할 수 없을 때 발생하는 값 변환 에러 타입을 빈칸에 채워 BadInt가 출력되도록 해보세요. (터미널 입력: 25)",
      "prompt_en": "Fill in the exception type raised when int(s) receives invalid text. (Terminal input: 25)",
      "hint_ko": "'값'을 뜻하는 다섯 글자 영단어와 '오류'를 뜻하는 다섯 글자 영단어를 단어마다 첫 글자만 대문자로 이어 붙인 예외 이름을 적으세요.",
      "hint_en": "Combine the capitalized five-letter word for \"data content\" and the capitalized five-letter word for \"mistake\" with no space.",
      "templateCode": "s = input()\ntry:\n    w = int(s)\n    print(w + 15)\nexcept §§§§§§§§§§:\n    print(\"BadInt\")",
      "targetCode": "s = input()\ntry:\n    w = int(s)\n    print(w + 15)\nexcept ValueError:\n    print(\"BadInt\")",
      "testCases": [
        {
          "id": 1,
          "input": "25",
          "expectedOutput": "40"
        },
        {
          "id": 2,
          "input": "kg",
          "expectedOutput": "BadInt"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "prompt_ko": "정수 입력 n으로 60 // n을 출력하되, 0으로 나눌 때(ZeroDivisionError) \"ZeroDiv\"를 출력해보세요. (터미널 입력: 15)",
      "prompt_en": "Print 60 // n for integer input n, catching ZeroDivisionError to print \"ZeroDiv\". (Terminal input: 15)",
      "hint_ko": "몫 나눗셈 출력을 시도 블록에 넣고, 0으로 나눌 때 발생하는 전용 예외 타입을 지정해 안내 문구를 출력하세요.",
      "hint_en": "Guard the floor division in the attempt block and catch the specific division-by-zero exception type below.",
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
      "prompt_ko": "두 번째 숫자가 0이어서 나눗셈을 할 수 없을 때 발생하는 에러 타입 이름을 빈칸에 채워보세요. (터미널 입력: 20 4)",
      "prompt_en": "Fill in the specific exception type raised when dividing by zero. (Terminal input: 20 4)",
      "hint_ko": "'숫자 0', '나눗셈', '오류'를 뜻하는 세 영단어의 첫 글자를 각각 대문자로 시작해 공백 없이 이어 붙인 예외 이름을 적으세요.",
      "hint_en": "Join the three capitalized words for \"0\", \"dividing\", and \"mistake\" into one PascalCase exception name.",
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
      "prompt_ko": "리스트 [10, 20, 30]에서 입력 인덱스 idx 위치를 출력하고, 범위를 벗어나면(IndexError) \"NoIndex\"를 출력해보세요. (터미널 입력: 2)",
      "prompt_en": "Print nums[idx] from [10, 20, 30], catching IndexError to print \"NoIndex\". (Terminal input: 2)",
      "hint_ko": "리스트의 위치 번호가 범위를 벗어날 때 발생하는 인덱스 예외 타입을 지정해 안전하게 안내문을 출력하세요.",
      "hint_en": "Attempt printing the list element at the input position, and catch the out-of-bounds sequence index exception.",
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
      "prompt_ko": "딕셔너리에 존재하지 않는 키를 조회할 때 발생하는 에러 타입 이름을 빈칸에 채워 NoKey를 출력해보세요. (터미널 입력: Kim)",
      "prompt_en": "Fill in the exception type raised when looking up a missing dictionary key. (Terminal input: Kim)",
      "hint_ko": "딕셔너리의 '열쇠(식별자)'를 뜻하는 세 글자 영단어와 '오류'를 뜻하는 다섯 글자 영단어를 첫 글자 대문자로 이어 붙여 적으세요.",
      "hint_en": "Combine the capitalized three-letter word for a dictionary lookup identifier with the capitalized five-letter word for \"mistake\".",
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
      "prompt_ko": "입력값을 정수로 바꿔 100 // n을 출력하되, ValueError면 \"ValErr\", ZeroDivisionError면 \"ZeroErr\"를 각각 출력해보세요. (터미널 입력: 20)",
      "prompt_en": "Print 100 // int(s), handling ValueError with \"ValErr\" and ZeroDivisionError with \"ZeroErr\". (Terminal input: 20)",
      "hint_ko": "하나의 시도 블록 아래에 값 변환 예외 블록과 0 나눗셈 예외 블록을 나란히 배치해 원인별로 다른 문구를 출력하세요.",
      "hint_en": "Attach two separate specific catch blocks beneath one attempt block—one for bad number text and one for dividing by zero.",
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
      "prompt_ko": "정수 변환 실패와 리스트 범위 초과를 각각 구분해 안내하도록 두 에러 타입 이름을 순서대로 채워보세요. (터미널 입력: 1)",
      "prompt_en": "Fill in the two exception types to distinguish invalid integer input from out-of-range index access. (Terminal input: 1)",
      "hint_ko": "첫 빈칸에는 '값+오류', 둘째 빈칸에는 '순번(인덱스)+오류'를 각각 파스칼 표기법(단어 첫 글자 대문자)으로 이어 붙여 적으세요.",
      "hint_en": "First write the PascalCase exception for invalid value conversion, then the PascalCase exception for an out-of-bounds list position.",
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
      "hint_ko": "함수 안의 시도 블록에서 두 딕셔너리 조회의 몫을 반환하고, 키 누락 예외와 0 나눗셈 예외에서 각각 대체 정수를 반환하세요.",
      "hint_en": "Inside the function, attempt returning the quotient of the two lookups, with separate catch branches for missing keys and zero divisors.",
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
      "hint_ko": "가격표 딕셔너리에 없는 품목 이름을 대괄호로 조회할 때 발생하는 8글자 '키+오류' 예외 이름을 첫 글자 대문자로 적으세요.",
      "hint_en": "Write the eight-letter PascalCase exception raised when a dictionary lookup identifier does not exist.",
      "templateCode": "prices = {\"milk\": 2000, \"egg\": 3000}\ncart = [\"milk\", \"jam\", \"egg\"]\ntotal = 0\nfor item in cart:\n    try:\n        total += prices[item]\n    except §§§§§§§§:\n        pass\nprint(f\"Total:{total}\")",
      "targetCode": "prices = {\"milk\": 2000, \"egg\": 3000}\ncart = [\"milk\", \"jam\", \"egg\"]\ntotal = 0\nfor item in cart:\n    try:\n        total += prices[item]\n    except KeyError:\n        pass\nprint(f\"Total:{total}\")",
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
      "prompt_ko": "리스트 범위를 벗어났을 때를 처리하려 했지만 딕셔너리용 에러 타입이 적혀 있어 멈춥니다. 알맞은 에러 타입으로 고쳐보세요. (터미널 입력: 1)",
      "prompt_en": "Fix the uncaught crash by replacing the dictionary exception type with the list index exception type. (Terminal input: 1)",
      "hint_ko": "조회 대상이 딕셔너리가 아니라 리스트이므로 키 예외로는 잡히지 않습니다. 리스트 순번 범위 초과에 맞는 예외 타입으로 바꾸세요.",
      "hint_en": "Because the lookup targets a list rather than a dictionary, replace the missing-key exception with the sequence position exception.",
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
      "prompt_ko": "딕셔너리 안전 조회 코드 아래에 한 줄을 추가하여 입력 키 k와 조회 결과 ans를 콜론(:)으로 이어 출력해보세요. (출력 예: pen:5) (터미널 입력: pen)",
      "prompt_en": "Add one line at the bottom to print f\"{k}:{ans}\". (Terminal input: pen)",
      "hint_ko": "예외 처리가 끝난 맨 마지막 줄에서 입력받은 키 변수와 결과 변수를 콜론으로 연결해 서식 문자열로 출력하세요.",
      "hint_en": "On the final unindented line, format the input key variable and the looked-up answer variable separated by a colon.",
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
      "hint_ko": "각 문자열을 순서대로 대입했을 때 정수 변환 단계, 리스트 인덱싱 단계, 나눗셈 단계 중 어디에서 성공하거나 어떤 예외로 빠지는지 추적하세요.",
      "hint_en": "For each string in order, trace whether integer parsing, list indexing, or floor division fails first and match it to its catch branch.",
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
