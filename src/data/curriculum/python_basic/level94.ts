import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_94: PracticeRound = {
  "id": "py-basic-r94",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 94,
  "title_ko": "문자열 리스트를 하나로 묶는 \"구분자\".join()과 .split() 결합",
  "title_en": "Joining String Lists with \"sep\".join() & .split()",
  "description_ko": "\"구분자\".join()으로 문자열 리스트를 하나로 합치고, .split()·sorted()·리스트 컴프리헨션과 결합하는 파이프라인을 익힙니다.",
  "description_en": "Join string lists with \"sep\".join() and build pipelines with .split(), sorted(), and list comprehensions.",
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
    "sorted",
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
      "prompt_ko": "[블록 조립] \"-\".join(parts)로 연·월·일 문자열 리스트를 하이픈(-)으로 묶어 출력해보세요.",
      "prompt_en": "[Block] Use \"-\".join(parts) to combine the year, month, and day strings with hyphens.",
      "hint_ko": "사이에 끼워 넣을 구분자 문자열(\"-\")에서 .join()을 호출하고 괄호 안에 문자열 리스트를 넣습니다.",
      "hint_en": "Call .join() on the separator string \"-\" and pass the list of strings as the argument.",
      "targetCode": "parts = [\"2026\", \"11\", \"17\"]\ndate = \"-\".join(parts)\nprint(date)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "2026-11-17"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 단어 리스트 tags의 요소들 사이에 슬래시(\"/\")를 넣어 하나의 문자열로 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in the method name to concatenate the elements of tags with a slash (\"/\").",
      "hint_ko": "구분자 문자열 뒤에서 리스트 요소들을 하나로 이어 붙이는 네 글자 메서드를 호출하세요.",
      "hint_en": "Call the 4-letter method on the separator string to combine the list elements.",
      "targetCode": "tags = [\"py\", \"web\", \"ai\"]\nprint(\"/\".join(tags))",
      "templateCode": "tags = [\"py\", \"web\", \"ai\"]\nprint(\"/\".§§§§(tags))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "py/web/ai"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 빈 문자열(\"\")로 글자들을 빈틈없이 합친 결과와 공백(\" \")으로 단어들을 합친 결과를 각각 출력해보세요.",
      "prompt_en": "[Block] Join characters seamlessly with \"\".join() and join words with spaces using \" \".join().",
      "hint_ko": "빈 문자열 \"\"에서 .join()을 호출하면 요소들 사이에 아무 글자도 넣지 않고 그대로 이어 붙입니다.",
      "hint_en": "Calling .join() on an empty string \"\" concatenates elements with nothing between them.",
      "targetCode": "chars = [\"P\", \"y\", \"3\"]\nwords = [\"Hello\", \"Python\"]\nprint(\"\".join(chars))\nprint(\" \".join(words))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Py3\nHello Python"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 글자 리스트 chars를 사이 간격 없이 한 단어로 빈틈없이 합쳐 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in the separator string to concatenate chars with no spaces in between.",
      "hint_ko": "사이에 아무것도 넣지 않으려면 따옴표 두 개만 있는 빈 문자열 리터럴을 구분자로 적으세요.",
      "hint_en": "Use an empty string literal of two quotes as the separator to concatenate without spaces.",
      "targetCode": "chars = [\"C\", \"O\", \"D\", \"E\"]\nprint(\"\".join(chars))",
      "templateCode": "chars = [\"C\", \"O\", \"D\", \"E\"]\nprint(§§.join(chars))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "CODE"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 공백으로 단어를 쪼갠 뒤 sorted()로 사전순 정렬하고 다시 \"-\".join()으로 묶어 출력해보세요.",
      "prompt_en": "[Block] Split the input into words, sort them with sorted(), and join them back with \"-\".",
      "hint_ko": ".split()으로 만든 리스트를 sorted()에 넘겨 정렬된 새 리스트를 얻은 뒤 .join()으로 합칩니다.",
      "hint_en": "Split the string into a list, sort it with sorted(), and pass the sorted list to .join().",
      "targetCode": "words = input().split()\nordered = sorted(words)\nprint(\"-\".join(ordered))",
      "testCases": [
        {
          "id": 1,
          "input": "banana apple cherry",
          "expectedOutput": "apple-banana-cherry"
        },
        {
          "id": 2,
          "input": "py ai go",
          "expectedOutput": "ai-go-py"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 쉼표로 구분된 문자열을 쪼갠 뒤 공백 한 칸(\" \")으로 다시 묶어 출력해보세요.",
      "prompt_en": "[Fill Blank] Split the comma-separated string and combine the parts with a single space.",
      "hint_ko": "쉼표 기준 분리 후 공백 구분자 문자열 뒤에서 네 글자 결합 메서드를 호출하세요.",
      "hint_en": "After splitting by comma, call the 4-letter joining method on the single-space string.",
      "targetCode": "items = input().split(\",\")\nprint(\" \".join(items))",
      "templateCode": "items = input().split(\",\")\nprint(\" \".§§§§(items))",
      "testCases": [
        {
          "id": 1,
          "input": "red,green,blue",
          "expectedOutput": "red green blue"
        },
        {
          "id": 2,
          "input": "a,b,c",
          "expectedOutput": "a b c"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 정수 리스트 nums의 각 숫자를 리스트 컴프리헨션으로 문자열로 바꾼 뒤 \",\".join()으로 합쳐 출력해보세요.",
      "prompt_en": "[Block] Convert each integer in nums to str with a list comprehension and join them with commas.",
      "hint_ko": ".join()은 문자열 요소만 합칠 수 있으므로 컴프리헨션 안에서 str(x)로 먼저 변환해야 합니다.",
      "hint_en": "Because .join() only accepts strings, convert each integer using str(x) inside the comprehension.",
      "targetCode": "nums = [10, 20, 30]\nstrs = [str(x) for x in nums]\nprint(\",\".join(strs))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "10,20,30"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 정수 리스트의 각 원소를 문자열로 바꾸는 형변환 함수를 채워 하이픈으로 연결해 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in the type conversion function so the integer list can be combined with hyphens.",
      "hint_ko": "정수를 문자열로 바꾸는 세 글자 내장 형변환 함수를 컴프리헨션 식에 적으세요.",
      "hint_en": "Write the 3-letter built-in function that converts an integer into a string.",
      "targetCode": "nums = [1, 2, 3, 4]\nprint(\"-\".join([str(n) for n in nums]))",
      "templateCode": "nums = [1, 2, 3, 4]\nprint(\"-\".join([§§§(n) for n in nums]))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "1-2-3-4"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 공백으로 나눈 단어들을 소문자로 바꾸고 사전순 정렬한 뒤 언더스코어(\"_\")로 결합해 출력해보세요.",
      "prompt_en": "[Fill Blank] Separate the input by spaces, lowercase each word, order them alphabetically, and combine with \"_\".",
      "hint_ko": "공백 분리 메서드, 사본 정렬 내장 함수, 문자열 결합 메서드를 순서대로 채워보세요.",
      "hint_en": "Fill in the splitting method, the copy-sorting built-in function, and the string joining method.",
      "targetCode": "raw = input().split()\nclean = sorted([w.lower() for w in raw])\nprint(\"_\".join(clean))",
      "templateCode": "raw = input().§§§§§()\nclean = §§§§§§([w.lower() for w in raw])\nprint(\"_\".§§§§(clean))",
      "testCases": [
        {
          "id": 1,
          "input": " Web Py AI ",
          "expectedOutput": "ai_py_web"
        },
        {
          "id": 2,
          "input": "Zoo Ant",
          "expectedOutput": "ant_zoo"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 리스트에서 결합 메서드를 호출해 발생한 AttributeError를 올바른 호출 순서로 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the AttributeError caused by calling the combining method on the list instead of the separator string.",
      "hint_ko": "결합 메서드는 리스트가 아니라 구분자 문자열(\":\")에서 호출하고 괄호 안에 리스트를 넣어야 합니다.",
      "hint_en": "Call the method on the separator string \":\" and pass the list words as its argument.",
      "targetCode": "words = input().split()\nprint(\":\".join(words))",
      "templateCode": "words = input().split()\nprint(words.join(\":\"))",
      "testCases": [
        {
          "id": 1,
          "input": "a b c",
          "expectedOutput": "a:b:c"
        },
        {
          "id": 2,
          "input": "10 20",
          "expectedOutput": "10:20"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 짝수 정수 리스트를 문자열 변환 없이 바로 결합하려다 발생한 TypeError를 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the TypeError caused by passing integers directly without converting them to strings.",
      "hint_ko": "리스트 컴프리헨션의 앞쪽 식에서 숫자 n을 문자열로 형변환해 담아야 결합할 수 있습니다.",
      "hint_en": "Convert each integer n to a string using str(n) in the list comprehension before combining.",
      "templateCode": "nums = [2, 4, 6]\nevens = [n for n in nums]\nprint(\"+\".join(evens))",
      "targetCode": "nums = [2, 4, 6]\nevens = [str(n) for n in nums]\nprint(\"+\".join(evens))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "2+4+6"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 단어 리스트 words를 단일 공백(\" \")으로 결합해 변수 sentence에 저장하는 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Combine the list words with a single space and assign it to sentence.",
      "hint_ko": "sentence = \" \".join(words) 형태로 공백 구분자로 결합한 결과를 저장하세요.",
      "hint_en": "Write sentence = \" \".join(words) to combine the words with a single space.",
      "targetCode": "words = input().split(\",\")\nsentence = \" \".join(words)\nprint(sentence)",
      "templateCode": "words = input().split(\",\")\n§§§§§§§§§§§§§§§§§§§§§§§§§§\nprint(sentence)",
      "testCases": [
        {
          "id": 1,
          "input": "I,love,Python",
          "expectedOutput": "I love Python"
        },
        {
          "id": 2,
          "input": "fast,clean,code",
          "expectedOutput": "fast clean code"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 정수 리스트 nums의 요소를 문자열로 변환해 쉼표(\",\")로 합쳐 출력하는 print문을 작성해보세요.",
      "prompt_en": "[Complete Line] Write a print statement that combines the elements of nums as strings separated by \",\".",
      "hint_ko": "print(\",\".join([str(x) for x in nums])) 형태로 컴프리헨션과 결합 메서드를 한 줄로 작성하세요.",
      "hint_en": "Write print(\",\".join([str(x) for x in nums])) on the masked line.",
      "targetCode": "nums = [10, 20, 30]\nprint(\",\".join([str(x) for x in nums]))",
      "templateCode": "nums = [10, 20, 30]\n§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "10,20,30"
        }
      ]
    },
    {
      "id": 14,
      "step": 14,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] .split(), 슬라이싱, sorted(), .join()이 결합된 다음 코드의 실행 결과를 선택해보세요.",
      "prompt_en": "[Predict Output] Select the exact output of the following pipeline using .split(), slicing, sorted(), and .join().",
      "hint_ko": "콜론으로 나눈 뒤 인덱스 1부터 끝까지 슬라이싱한 세 단어를 사전순으로 정렬해 하이픈으로 묶습니다.",
      "hint_en": "Split by colon, slice from index 1 to the end, sort alphabetically, and join with hyphens.",
      "targetCode": "raw = \"tag:py:ai:go\"\nparts = raw.split(\":\")[1:]\nprint(\"-\".join(sorted(parts)))",
      "choices": [
        "ai-go-py",
        "py-ai-go",
        "ai-go-py-tag",
        "tag-ai-go-py"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "ai-go-py"
        }
      ]
    },
    {
      "id": 15,
      "step": 15,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 딕셔너리 순회와 조건부 리스트 컴프리헨션, .join()을 결합한 코드의 출력 결과를 선택해보세요.",
      "prompt_en": "[Predict Output] Select the exact output of the code combining dictionary items, comprehension, and .join().",
      "hint_ko": "점수가 80 이상인 항목만 골라 이름을 대문자, 점수를 문자열로 묶은 뒤 슬래시(/)로 이어 붙입니다.",
      "hint_en": "Keep items with score >= 80, format each as uppercase name=score, and join them with slashes.",
      "targetCode": "scores = {\"kim\": 85, \"lee\": 70, \"park\": 92}\npicks = [f\"{k.upper()}={v}\" for k, v in scores.items() if v >= 80]\nprint(\"/\".join(picks))",
      "choices": [
        "KIM=85/PARK=92",
        "kim=85/park=92",
        "KIM=85/LEE=70/PARK=92",
        "PARK=92/KIM=85"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "KIM=85/PARK=92"
        }
      ]
    }
  ]
};
