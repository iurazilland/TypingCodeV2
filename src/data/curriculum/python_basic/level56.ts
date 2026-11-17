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
      "kind": "standard",
      "prompt_ko": "[블록 조립] except ValueError:로 정수 변환 실패를 잡아 NotInt를 출력해보세요.",
      "prompt_en": "[Block] Catch invalid integer conversion with except ValueError: and print NotInt.",
      "hint_ko": "except ValueError: 처럼 예외 이름을 지정하면 다른 종류의 에러와 명확히 구분하여 대응할 수 있습니다.",
      "hint_en": "Naming the exception as except ValueError: lets you target invalid-value conversion failures specifically.",
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
      "prompt_ko": "[빈칸 채우기] 문자열을 정수로 변환할 수 없을 때 발생하는 에러 타입을 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the exception type raised when int(s) receives invalid text.",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] except ZeroDivisionError:로 0 나눗셈 에러를 가로채 ZeroDiv를 출력해보세요.",
      "prompt_en": "[Block] Intercept division by zero using except ZeroDivisionError:.",
      "hint_ko": "나눗셈(/)이나 몫(//), 나머지(%) 연산 모두 분모가 0이면 ZeroDivisionError를 발생시킵니다.",
      "hint_en": "Standard division (/), floor division (//), and modulo (%) all raise ZeroDivisionError when the divisor is 0.",
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
      "prompt_ko": "[빈칸 채우기] 두 번째 숫자가 0이어서 나눌 수 없을 때 발생하는 에러 타입을 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the specific exception type raised when dividing by zero.",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] except IndexError:로 리스트 인덱스 범위 초과 에러를 잡아 NoIndex를 출력해보세요.",
      "prompt_en": "[Block] Handle out-of-range list access with except IndexError:.",
      "hint_ko": "원소가 3개인 리스트의 유효 인덱스는 0, 1, 2(음수는 -1 ~ -3)이며 그 밖의 번호는 IndexError를 일으킵니다.",
      "hint_en": "A 3-item list has valid indices 0, 1, and 2 (or -1 to -3); any index outside that range raises IndexError.",
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
      "prompt_ko": "[빈칸 채우기] 딕셔너리에 없는 키를 조회할 때 발생하는 에러 타입을 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the exception type raised when looking up a missing dictionary key.",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] ValueError와 ZeroDivisionError를 각각 다른 except 절로 분기해 처리해보세요.",
      "prompt_en": "[Block] Chain except ValueError: and except ZeroDivisionError: beneath a single try block.",
      "hint_ko": "try 블록에서 에러가 발생하면 위에서부터 일치하는 첫 번째 except 블록 하나만 실행됩니다.",
      "hint_en": "When an error occurs in try, Python runs only the first matching except block from top to bottom.",
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
      "prompt_ko": "[빈칸 채우기] 정수 변환 실패와 리스트 범위 초과를 구분하도록 두 에러 타입을 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the two exception types to distinguish invalid integer input from out-of-range index access.",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] 함수 안에서 KeyError와 ZeroDivisionError에 따라 각각 -1, 0을 반환해보세요.",
      "prompt_en": "[Block] Inside avg_pt, return -1 on KeyError and 0 on ZeroDivisionError.",
      "hint_ko": "try 블록이나 except 블록 안에서 return이 실행되면 그 즉시 함수가 종료되며 결과값을 돌려줍니다.",
      "hint_en": "Executing return inside either the try block or an except block immediately exits the function with that value.",
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
      "prompt_ko": "[빈칸 채우기] 함수 안에서 인덱스 변환 실패와 범위 초과를 각각 잡아 안내 문자열을 반환해보세요.",
      "prompt_en": "[Fill Blank] Catch ValueError and IndexError inside get_item to return fallback labels.",
      "hint_ko": "첫 빈칸에는 정수 변환 실패 예외(ValueError), 둘째 빈칸에는 인덱스 범위 초과 예외(IndexError)를 적으세요.",
      "hint_en": "Use ValueError for the first except branch and IndexError for the second.",
      "templateCode": "def get_item(box, idx):\n    try:\n        return box[int(idx)]\n    except §§§§§§§§§§:\n        return \"BadIdx\"\n    except §§§§§§§§§§:\n        return \"NoItem\"\narr = [\"Pen\", \"Book\"]\nprint(get_item(arr, \"1\"), get_item(arr, \"5\"))\nprint(get_item(arr, \"x\"))",
      "targetCode": "def get_item(box, idx):\n    try:\n        return box[int(idx)]\n    except ValueError:\n        return \"BadIdx\"\n    except IndexError:\n        return \"NoItem\"\narr = [\"Pen\", \"Book\"]\nprint(get_item(arr, \"1\"), get_item(arr, \"5\"))\nprint(get_item(arr, \"x\"))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Book NoItem\nBadIdx"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 리스트 인덱스 범위를 벗어났을 때를 잡으려다 ValueError로 잘못 적은 에러 타입을 고쳐보세요.",
      "prompt_en": "[Fix Bug] Replace ValueError with IndexError to catch out-of-range list access.",
      "hint_ko": "리스트 범위를 벗어난 인덱스를 조회할 때는 ValueError가 아니라 IndexError가 발생합니다.",
      "hint_en": "Accessing an out-of-range list position raises IndexError rather than ValueError.",
      "templateCode": "nums = [100, 200]\nidx = int(input())\ntry:\n    print(nums[idx])\nexcept ValueError:\n    print(\"Out of range\")",
      "targetCode": "nums = [100, 200]\nidx = int(input())\ntry:\n    print(nums[idx])\nexcept IndexError:\n    print(\"Out of range\")",
      "testCases": [
        {
          "id": 1,
          "input": "5",
          "expectedOutput": "Out of range"
        },
        {
          "id": 2,
          "input": "1",
          "expectedOutput": "200"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 문자열의 정수 변환 실패를 잡으려다 IndexError로 잘못 적은 에러 타입을 고쳐보세요.",
      "prompt_en": "[Fix Bug] Replace IndexError with ValueError to catch invalid integer conversion.",
      "hint_ko": "숫자가 아닌 문자열을 int()에 전달했을 때는 IndexError가 아니라 ValueError가 발생합니다.",
      "hint_en": "Passing non-numeric text to int() raises ValueError rather than IndexError.",
      "templateCode": "s = input()\ntry:\n    n = int(s)\n    print(n + 10)\nexcept IndexError:\n    print(\"BadInt\")",
      "targetCode": "s = input()\ntry:\n    n = int(s)\n    print(n + 10)\nexcept ValueError:\n    print(\"BadInt\")",
      "testCases": [
        {
          "id": 1,
          "input": "abc",
          "expectedOutput": "BadInt"
        },
        {
          "id": 2,
          "input": "15",
          "expectedOutput": "25"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 딕셔너리에 없는 키를 조회했을 때 발생하는 KeyError를 잡는 except 줄을 완성해보세요.",
      "prompt_en": "[Complete Line] Complete the except KeyError: line for the dictionary lookup.",
      "hint_ko": "except 키워드 뒤에 KeyError와 콜론(:)을 적어 except KeyError:를 완성하세요.",
      "hint_en": "Write except KeyError: to catch missing dictionary keys.",
      "templateCode": "stock = {\"pen\": 5, \"book\": 2}\nk = input()\ntry:\n    ans = stock[k]\n§§§§§§§§§§§§§§§§\n    ans = 0\nprint(f\"{k}:{ans}\")",
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
      "id": 14,
      "step": 14,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 0으로 나눌 때 발생하는 ZeroDivisionError를 잡는 except 줄을 완성해보세요.",
      "prompt_en": "[Complete Line] Complete the except ZeroDivisionError: line.",
      "hint_ko": "except 키워드 뒤에 ZeroDivisionError와 콜론(:)을 붙여 작성하세요.",
      "hint_en": "Write except ZeroDivisionError: to handle division by zero.",
      "templateCode": "n = int(input())\ntry:\n    ans = 100 // n\n§§§§§§§§§§§§§§§§§§§§§§§§§\n    ans = 0\nprint(ans)",
      "targetCode": "n = int(input())\ntry:\n    ans = 100 // n\nexcept ZeroDivisionError:\n    ans = 0\nprint(ans)",
      "testCases": [
        {
          "id": 1,
          "input": "0",
          "expectedOutput": "0"
        },
        {
          "id": 2,
          "input": "25",
          "expectedOutput": "4"
        }
      ]
    },
    {
      "id": 15,
      "step": 15,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 여러 개의 except 분기가 동작하는 다음 코드의 실행 결과를 선택해보세요.",
      "prompt_en": "[Predict Output] Select the exact list output produced by the multi-except loop below.",
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
