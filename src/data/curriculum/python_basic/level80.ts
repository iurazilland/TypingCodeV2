import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_80: PracticeRound = {
  "id": "py-basic-r80",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 80,
  "title_ko": "80레벨: 컬렉션·타입 에러 잡기 (IndexError, KeyError, TypeError)",
  "title_en": "Level 80: Catching IndexError, KeyError & TypeError",
  "description_ko": "인덱스 범위 초과(IndexError), 딕셔너리 키 부재(KeyError), 자료형 불일치(TypeError)를 정확히 구분해 처리합니다.",
  "description_en": "Distinguish and handle out-of-range indices (IndexError), missing keys (KeyError), and type mismatches (TypeError).",
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
      "prompt_ko": "[블록 조립] except IndexError:로 리스트 인덱스 범위 초과 에러를 잡아 Out을 출력해보세요.",
      "prompt_en": "[Block] Catch out-of-range list indexing with except IndexError: and print Out.",
      "hint_ko": "리스트나 문자열의 길이 범위를 벗어난 인덱스 번호를 조회하면 IndexError가 발생합니다.",
      "hint_en": "Accessing an index outside the valid range of a list or string raises IndexError.",
      "targetCode": "nums = [10, 20, 30]\nidx = int(input())\ntry:\n    print(nums[idx])\nexcept IndexError:\n    print(\"Out\")",
      "testCases": [
        {
          "id": 1,
          "input": "1",
          "expectedOutput": "20"
        },
        {
          "id": 2,
          "input": "5",
          "expectedOutput": "Out"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 문자열의 글자 수 범위를 벗어난 인덱스를 조회할 때 발생하는 에러 이름을 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the exception type raised when indexing past the end of a string.",
      "hint_ko": "시퀀스의 '인덱스(Index)' 범위를 벗어났을 때 나는 오류 이름을 파스칼 표기법으로 적으세요.",
      "hint_en": "Write the PascalCase exception name for an out-of-bounds index.",
      "templateCode": "word = \"Python\"\ni = int(input())\ntry:\n    print(word[i])\nexcept §§§§§§§§§§§:\n    print(\"None\")",
      "targetCode": "word = \"Python\"\ni = int(input())\ntry:\n    print(word[i])\nexcept IndexError:\n    print(\"None\")",
      "testCases": [
        {
          "id": 1,
          "input": "0",
          "expectedOutput": "P"
        },
        {
          "id": 2,
          "input": "9",
          "expectedOutput": "None"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] except KeyError:로 딕셔너리에 없는 키를 조회할 때 발생하는 에러를 잡아 NoKey를 출력해보세요.",
      "prompt_en": "[Block] Catch missing dictionary key lookups with except KeyError: and print NoKey.",
      "hint_ko": "딕셔너리에 존재하지 않는 키를 대괄호 d[k]로 찾으면 KeyError가 발생합니다.",
      "hint_en": "Looking up a non-existent key in a dictionary with brackets d[k] raises KeyError.",
      "targetCode": "menu = {\"tea\": 3000, \"pie\": 4500}\nk = input()\ntry:\n    print(menu[k])\nexcept KeyError:\n    print(\"NoKey\")",
      "testCases": [
        {
          "id": 1,
          "input": "tea",
          "expectedOutput": "3000"
        },
        {
          "id": 2,
          "input": "milk",
          "expectedOutput": "NoKey"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 사전에 등록되지 않은 과목명을 조회했을 때 발생하는 예외 이름을 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the exception type raised when a dictionary key is not found.",
      "hint_ko": "딕셔너리의 '키(Key)'가 없을 때 발생하는 여덟 글자 예외 이름을 적으세요.",
      "hint_en": "Write the eight-letter PascalCase exception name for a missing dictionary key.",
      "templateCode": "scores = {\"Kor\": 90, \"Math\": 95}\nsub = input()\ntry:\n    print(scores[sub])\nexcept §§§§§§§§§:\n    print(0)",
      "targetCode": "scores = {\"Kor\": 90, \"Math\": 95}\nsub = input()\ntry:\n    print(scores[sub])\nexcept KeyError:\n    print(0)",
      "testCases": [
        {
          "id": 1,
          "input": "Math",
          "expectedOutput": "95"
        },
        {
          "id": 2,
          "input": "Sci",
          "expectedOutput": "0"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 문자열과 정수를 바로 더하려 할 때 발생하는 에러를 except TypeError:로 잡아보세요.",
      "prompt_en": "[Block] Catch the error raised by adding a string and an integer using except TypeError:.",
      "hint_ko": "문자열과 숫자처럼 서로 연산할 수 없는 자료형(Type)끼리 연산하면 TypeError가 발생합니다.",
      "hint_en": "Combining incompatible data types, such as adding a string and an int, raises TypeError.",
      "targetCode": "try:\n    res = \"Lv.\" + 10\n    print(res)\nexcept TypeError:\n    print(\"TypeErr\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "TypeErr"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 리스트와 정수를 더하려 할 때 발생하는 자료형 불일치 예외 이름을 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the exception type raised when trying to add an integer directly to a list.",
      "hint_ko": "'자료형(Type)'이 맞지 않아 연산할 수 없을 때 발생하는 아홉 글자 예외 이름을 적으세요.",
      "hint_en": "Write the nine-letter PascalCase exception name for incompatible data types.",
      "templateCode": "items = [1, 2]\ntry:\n    print(items + 3)\nexcept §§§§§§§§§§:\n    print(\"BadType\")",
      "targetCode": "items = [1, 2]\ntry:\n    print(items + 3)\nexcept TypeError:\n    print(\"BadType\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "BadType"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 리스트 인덱스 조회와 딕셔너리 키 조회를 한 try에 넣고 IndexError와 KeyError로 각각 분기해보세요.",
      "prompt_en": "[Block] Handle out-of-range list access and missing dict key lookup with separate IndexError and KeyError branches.",
      "hint_ko": "리스트에서 꺼낸 이름을 키로 삼아 딕셔너리를 조회할 때 어느 단계에서 에러가 났는지 구분해 처리할 수 있습니다.",
      "hint_en": "Separate handlers let you tell whether the list index was out of range or the dictionary key was missing.",
      "targetCode": "users = [\"Kim\", \"Lee\", \"Park\"]\npts = {\"Kim\": 100, \"Lee\": 80}\nidx = int(input())\ntry:\n    u = users[idx]\n    print(pts[u])\nexcept IndexError:\n    print(\"NoIdx\")\nexcept KeyError:\n    print(\"NoUser\")",
      "testCases": [
        {
          "id": 1,
          "input": "0",
          "expectedOutput": "100"
        },
        {
          "id": 2,
          "input": "5",
          "expectedOutput": "NoIdx"
        },
        {
          "id": 3,
          "input": "2",
          "expectedOutput": "NoUser"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 리스트 범위 초과와 딕셔너리 키 누락을 구분하도록 첫 번째 예외 이름을 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the first exception type to catch out-of-bounds list access before checking the dictionary.",
      "hint_ko": "순번(인덱스)이 리스트 길이를 벗어났을 때 발생하는 예외 이름을 첫 번째 except 뒤에 적으세요.",
      "hint_en": "Specify the sequence index exception on the first except clause.",
      "templateCode": "codes = [\"A\", \"B\"]\ntable = {\"A\": 10}\ni = int(input())\ntry:\n    k = codes[i]\n    print(table[k])\nexcept §§§§§§§§§§§:\n    print(-1)\nexcept KeyError:\n    print(-2)",
      "targetCode": "codes = [\"A\", \"B\"]\ntable = {\"A\": 10}\ni = int(input())\ntry:\n    k = codes[i]\n    print(table[k])\nexcept IndexError:\n    print(-1)\nexcept KeyError:\n    print(-2)",
      "testCases": [
        {
          "id": 1,
          "input": "0",
          "expectedOutput": "10"
        },
        {
          "id": 2,
          "input": "3",
          "expectedOutput": "-1"
        },
        {
          "id": 3,
          "input": "1",
          "expectedOutput": "-2"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 리스트 인덱싱, 딕셔너리 조회, 문자열·숫자 연산에서 발생할 수 있는 세 가지 예외 이름을 순서대로 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the three exception types for out-of-range index, missing key, and incompatible type operations.",
      "hint_ko": "리스트 순번 초과, 딕셔너리 키 부재, 자료형 불일치에 해당하는 각 예외 이름을 차례로 확인하세요.",
      "hint_en": "Check the exact exception names for index out of range, missing dictionary key, and wrong operand types.",
      "templateCode": "arr = [\"a\", \"b\"]\nd = {\"a\": 10}\ni = int(input())\ntry:\n    k = arr[i]\n    print(d[k] + \"pt\")\nexcept §§§§§§§§§§§:\n    print(\"Idx\")\nexcept §§§§§§§§§:\n    print(\"Key\")\nexcept §§§§§§§§§§:\n    print(\"Type\")",
      "targetCode": "arr = [\"a\", \"b\"]\nd = {\"a\": 10}\ni = int(input())\ntry:\n    k = arr[i]\n    print(d[k] + \"pt\")\nexcept IndexError:\n    print(\"Idx\")\nexcept KeyError:\n    print(\"Key\")\nexcept TypeError:\n    print(\"Type\")",
      "testCases": [
        {
          "id": 1,
          "input": "5",
          "expectedOutput": "Idx"
        },
        {
          "id": 2,
          "input": "1",
          "expectedOutput": "Key"
        },
        {
          "id": 3,
          "input": "0",
          "expectedOutput": "Type"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 딕셔너리에 없는 키를 조회할 때 발생하는 에러를 리스트 인덱스 예외로 잘못 적은 버그를 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the uncaught exception when looking up a missing dictionary key by specifying the right error type.",
      "hint_ko": "딕셔너리 중괄호 데이터에서 없는 키를 찾을 때는 IndexError가 아니라 키 예외가 발생합니다.",
      "hint_en": "Missing dictionary keys raise KeyError rather than IndexError.",
      "templateCode": "bag = {\"gold\": 50}\ntry:\n    print(bag[\"gem\"])\nexcept IndexError:\n    print(0)",
      "targetCode": "bag = {\"gold\": 50}\ntry:\n    print(bag[\"gem\"])\nexcept KeyError:\n    print(0)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "0"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 문자열과 정수를 더해서 난 에러를 값 변환 에러(ValueError)로 잘못 잡아 멈추는 버그를 고쳐보세요.",
      "prompt_en": "[Fix Bug] Change the exception type so the error from adding a string and an integer is properly caught.",
      "hint_ko": "서로 다른 자료형끼리 더할 수 없어 발생하는 에러는 ValueError가 아니라 자료형 예외입니다.",
      "hint_en": "Adding a string and an integer raises TypeError, not ValueError.",
      "templateCode": "try:\n    msg = \"Score: \" + 100\n    print(msg)\nexcept ValueError:\n    print(\"Type mismatch\")",
      "targetCode": "try:\n    msg = \"Score: \" + 100\n    print(msg)\nexcept TypeError:\n    print(\"Type mismatch\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Type mismatch"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 리스트 인덱스 범위를 벗어났을 때 IndexError를 잡는 except 헤더 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Write the except header line that catches IndexError.",
      "hint_ko": "예외 처리 키워드 뒤에 인덱스 예외 이름과 콜론을 적으세요.",
      "hint_en": "Write except IndexError: with a colon at the end.",
      "templateCode": "items = [\"X\", \"Y\"]\nidx = int(input())\ntry:\n    print(items[idx])\n§§§§§§§§§§§§§§§§§§§\n    print(\"Empty\")",
      "targetCode": "items = [\"X\", \"Y\"]\nidx = int(input())\ntry:\n    print(items[idx])\nexcept IndexError:\n    print(\"Empty\")",
      "testCases": [
        {
          "id": 1,
          "input": "1",
          "expectedOutput": "Y"
        },
        {
          "id": 2,
          "input": "4",
          "expectedOutput": "Empty"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 딕셔너리에 찾는 키가 없을 때 KeyError를 잡는 except 헤더 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Write the except header line that catches KeyError.",
      "hint_ko": "예외 처리 키워드 뒤에 딕셔너리 키 예외 이름과 콜론을 적으세요.",
      "hint_en": "Write except KeyError: followed by a colon.",
      "templateCode": "ranks = {\"Ace\": 1}\nname = input()\ntry:\n    print(ranks[name])\n§§§§§§§§§§§§§§§§§\n    print(\"Unranked\")",
      "targetCode": "ranks = {\"Ace\": 1}\nname = input()\ntry:\n    print(ranks[name])\nexcept KeyError:\n    print(\"Unranked\")",
      "testCases": [
        {
          "id": 1,
          "input": "Ace",
          "expectedOutput": "1"
        },
        {
          "id": 2,
          "input": "Bob",
          "expectedOutput": "Unranked"
        }
      ]
    },
    {
      "id": 14,
      "step": 14,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 리스트와 딕셔너리를 함께 조회하는 코드에서 어떤 예외 분기가 실행되는지 골라보세요.",
      "prompt_en": "[Predict Output] Select the output of the code performing both a list index lookup and a dictionary key lookup.",
      "hint_ko": "names[2]는 \"Park\"으로 정상 조회되지만, 그 다음 줄의 table[\"Park\"]에서 어떤 에러가 나는지 확인하세요.",
      "hint_en": "Check whether names[2] succeeds and what happens on the next line when looking up \"Park\" in table.",
      "targetCode": "names = [\"Kim\", \"Lee\", \"Park\"]\ntable = {\"Kim\": 10, \"Lee\": 20}\ntry:\n    who = names[2]\n    val = table[who]\n    print(val)\nexcept IndexError:\n    print(\"E1\")\nexcept KeyError:\n    print(\"E2\")",
      "choices": [
        "E2",
        "E1",
        "20",
        "E1\nE2"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "E2"
        }
      ]
    },
    {
      "id": 15,
      "step": 15,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 세 개의 키 목록을 순회하며 딕셔너리 값과 정수를 더할 때의 출력 결과를 골라보세요.",
      "prompt_en": "[Predict Output] Select the final output when looping over keys and adding 5 to each looked-up dictionary value.",
      "hint_ko": "\"a\"는 정수 10, \"b\"는 문자열 \"20\"(정수와 덧셈 불가), \"c\"는 없는 키라는 점을 각각 추적해보세요.",
      "hint_en": "Trace \"a\" (int 10), \"b\" (str \"20\" + 5 raises TypeError), and \"c\" (missing key raises KeyError).",
      "targetCode": "data = {\"a\": 10, \"b\": \"20\"}\nlog = []\nfor k in [\"a\", \"b\", \"c\"]:\n    try:\n        log.append(data[k] + 5)\n    except KeyError:\n        log.append(-1)\n    except TypeError:\n        log.append(-2)\nprint(log)",
      "choices": [
        "[15, -2, -1]",
        "[15, 25, -1]",
        "[15, -1, -2]",
        "[-2, -1]"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[15, -2, -1]"
        }
      ]
    }
  ]
};
