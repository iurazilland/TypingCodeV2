import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_48: PracticeRound = {
  "id": "py-basic-r48",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 48,
  "title_ko": "48레벨: 필수 자료구조 형변환 (list, tuple, set)",
  "title_en": "Level 48: Essential Collection Casting (list, tuple, set)",
  "description_ko": "list(), tuple(), set() 함수로 자료구조를 자유롭게 변환하고, 중복 제거 후 오름차순 정렬 패턴을 완성합니다.",
  "description_en": "Convert freely among collections with list(), tuple(), and set(), including deduplicate-and-sort patterns.",
  "totalQuestions": 13,
  "unlockedBlocks": [
    "print",
    "variable",
    "type",
    "math",
    "if",
    "for_in",
    "while",
    "break",
    "input",
    "method"
  ],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "block",
      "prompt_ko": "list() 형변환 함수에 문자열이나 다른 순회 가능 자료형을 넣으면 각 요소가 순서대로 하나씩 담긴 새 리스트로 변환됩니다. 블록의 코드를 따라 입력해보세요.",
      "prompt_en": "Passing a string or other iterable to list() converts it into a new list containing each element in order. Follow the blocks and type the code.",
      "hint_ko": "공백 기준으로 단어를 쪼개는 .split()과 달리, list(문자열)는 문자열을 한 글자씩 모두 분리해 리스트로 만듭니다.",
      "hint_en": "Unlike .split(), calling list() on a string breaks every individual character into a separate list item.",
      "targetCode": "chars = list(\"ABC\")\nprint(chars, len(chars))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "['A', 'B', 'C'] 3"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "리스트 nums를 변경 불가능한 튜플로 변환하도록 빈칸에 형변환 함수를 채워 출력해보세요.",
      "prompt_en": "Fill in the casting function to convert list nums into an immutable tuple and print it.",
      "hint_ko": "수정이 불가능한 소괄호 자료형으로 바꾸기 위해 '튜플'을 뜻하는 다섯 글자 영단어 변환 함수 이름을 적어보세요.",
      "hint_en": "Fill in the 5-letter conversion function that turns a sequence into an immutable parenthesized collection.",
      "templateCode": "nums = [10, 20, 30]\nfixed = §§§§§(nums)\nprint(fixed)",
      "targetCode": "nums = [10, 20, 30]\nfixed = tuple(nums)\nprint(fixed)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "(10, 20, 30)"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "prompt_ko": "수정할 수 없는 튜플에 값을 추가해야 할 때는 list()로 변환해 수정한 뒤 다시 tuple()로 감싸 튜플로 되돌리는 방식을 사용합니다. 블록의 코드를 따라 입력해보세요.",
      "prompt_en": "Because tuples are immutable, you can convert a tuple with list(), modify the list, and convert it back with tuple(). Follow the blocks and type the code.",
      "hint_ko": "튜플에는 .append()가 없으므로 가변 자료형인 리스트로 잠시 바꾸어 요소를 추가한 뒤 다시 튜플로 변환합니다.",
      "hint_en": "Tuples lack .append(), so cast to a mutable list first, append the item, and cast back to a tuple.",
      "targetCode": "pt = (10, 20)\ntmp = list(pt)\ntmp.append(30)\npt3 = tuple(tmp)\nprint(pt3)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "(10, 20, 30)"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "중복을 먼저 제거한 뒤 정렬 가능한 리스트로 변환하도록 두 빈칸을 채워 [10, 20, 30]을 출력해보세요.",
      "prompt_en": "Fill in the two casting functions to deduplicate nums and convert it to a list for .sort().",
      "hint_ko": "안쪽 괄호에서는 세 글자 '집합' 함수로 중복부터 없애고, 바깥쪽에서는 정렬 메서드를 쓸 수 있도록 네 글자 '리스트' 함수로 감싸세요.",
      "hint_en": "Deduplicate inside first with the 3-letter unordered collection function, then wrap outside with the 4-letter sortable sequence function.",
      "templateCode": "nums = [30, 10, 20, 10, 30]\nuniq = §§§§(§§§(nums))\nuniq.sort()\nprint(uniq)",
      "targetCode": "nums = [30, 10, 20, 10, 30]\nuniq = list(set(nums))\nuniq.sort()\nprint(uniq)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[10, 20, 30]"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "prompt_ko": "list(set(데이터)) 패턴으로 중복을 제거함과 동시에 리스트로 변환하면, 집합에는 없는 .sort() 정렬 메서드를 바로 사용할 수 있습니다. 블록의 코드를 따라 입력해보세요. (터미널 입력: pear apple pear banana)",
      "prompt_en": "Wrapping set() inside list() (list(set(data))) removes duplicates and produces a list that can be sorted with .sort(). Follow the blocks and type the code. (Terminal input: pear apple pear banana)",
      "hint_ko": "집합(set)으로 중복을 없앤 뒤 리스트(list)로 바꾸어 정렬하고, 최종 결과를 튜플(tuple)로 변환합니다.",
      "hint_en": "Deduplicate with set(), convert to list() to sort in place, and then wrap the sorted list in tuple().",
      "targetCode": "words = input().split()\nuniq = list(set(words))\nuniq.sort()\nres = tuple(uniq)\nprint(res)",
      "testCases": [
        {
          "id": 1,
          "input": "pear apple pear banana",
          "expectedOutput": "('apple', 'banana', 'pear')"
        },
        {
          "id": 2,
          "input": "b a b",
          "expectedOutput": "('a', 'b')"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "입력 단어의 중복 글자를 없애고 오름차순 정렬하여 고유 글자 수와 첫 글자를 출력해보세요. (출력 예: 3:a) (터미널 입력: banana)",
      "prompt_en": "Deduplicate and sort the characters of input word, then print count and first letter (e.g., 3:a). (Terminal input: banana)",
      "hint_ko": "안쪽 세 글자 '집합' 변환으로 중복 글자를 없애고 바깥 네 글자 '리스트' 변환으로 감싼 뒤, 네 글자 원본 '정렬' 메서드를 호출하세요.",
      "hint_en": "Cast through the 3-letter deduplicating type into the 4-letter sequence type, then invoke the 4-letter in-place ordering method.",
      "templateCode": "word = input()\nletters = §§§§(§§§(word))\nletters.§§§§()\nprint(f\"{len(letters)}:{letters[0]}\")",
      "targetCode": "word = input()\nletters = list(set(word))\nletters.sort()\nprint(f\"{len(letters)}:{letters[0]}\")",
      "testCases": [
        {
          "id": 1,
          "input": "banana",
          "expectedOutput": "3:a"
        },
        {
          "id": 2,
          "input": "zoom",
          "expectedOutput": "3:m"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "prompt_ko": "딕셔너리 안에 저장된 리스트도 키로 꺼내어 list(set(...))과 .sort()로 중복 제거 및 정렬을 수행한 뒤 원래 키에 다시 대입할 수 있습니다. 블록의 코드를 따라 입력해보세요.",
      "prompt_en": "You can look up a list stored inside a dictionary, deduplicate and sort it with list(set(...)) and .sort(), and assign the cleaned list back to the same key. Follow the blocks and type the code.",
      "hint_ko": "정렬이 끝난 리스트를 user[\"badges\"] = clean으로 다시 저장해야 딕셔너리 내부 데이터가 갱신됩니다.",
      "hint_en": "Reassigning the sorted list back to user[\"badges\"] updates the dictionary's stored value.",
      "targetCode": "user = {\"id\": \"neo\", \"badges\": [3, 1, 3, 2]}\nclean = list(set(user[\"badges\"]))\nclean.sort()\nuser[\"badges\"] = clean\nprint(user[\"id\"], user[\"badges\"])",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "neo [1, 2, 3]"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "중복 점수를 제거해 정렬한 뒤 튜플로 변환·언패킹하여 최저점과 최고점을 출력해보세요. (출력 예: Low:80 High:95)",
      "prompt_en": "Deduplicate and sort raw, cast to a tuple to unpack low and high, and print (e.g., Low:80 High:95).",
      "hint_ko": "정렬 메서드를 호출할 수 있도록 첫 빈칸엔 네 글자 '리스트' 변환 함수를, 아래 언패킹 줄엔 다섯 글자 '튜플' 변환 함수를 채우세요.",
      "hint_en": "Convert the set using the 4-letter mutable sequence function before sorting, then cast to the 5-letter immutable sequence type.",
      "templateCode": "raw = [95, 80, 95, 80]\npair = §§§§(set(raw))\npair.sort()\nlow, high = §§§§§(pair)\nprint(f\"Low:{low} High:{high}\")",
      "targetCode": "raw = [95, 80, 95, 80]\npair = list(set(raw))\npair.sort()\nlow, high = tuple(pair)\nprint(f\"Low:{low} High:{high}\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Low:80 High:95"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "block",
      "prompt_ko": "문자열 숫자들을 정수 리스트로 변환한 뒤 list(set(nums))와 .sort()로 중복 없는 오름차순 리스트를 만들고, sum() / len()으로 고유 값들의 평균을 구할 수 있습니다. 블록의 코드를 따라 입력해보세요. (터미널 입력: 20 10 20 30)",
      "prompt_en": "After converting input tokens into a list of integers, you can deduplicate and sort them with list(set(nums)) and .sort(), then compute the average of the unique numbers. Follow the blocks and type the code. (Terminal input: 20 10 20 30)",
      "hint_ko": "중복이 제거된 uniq 리스트를 기준으로 sum(uniq) / len(uniq)를 계산하면 중복을 제외한 평균이 구해집니다.",
      "hint_en": "Dividing sum(uniq) by len(uniq) calculates the mean of the deduplicated numbers.",
      "targetCode": "raw = input().split()\nnums = []\ni = 0\nwhile i < len(raw):\n    nums.append(int(raw[i]))\n    i += 1\nuniq = list(set(nums))\nuniq.sort()\navg = sum(uniq) / len(uniq)\nprint(uniq, avg)",
      "testCases": [
        {
          "id": 1,
          "input": "20 10 20 30",
          "expectedOutput": "[10, 20, 30] 20.0"
        },
        {
          "id": 2,
          "input": "5 15 5",
          "expectedOutput": "[5, 15] 10.0"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "수량이 0보다 큰 아이템 이름만 모아 비어 있지 않으면 튜플로 변환해 출력하도록 빈칸을 채워보세요.",
      "prompt_en": "Collect item keys with quantity > 0 and convert active to a tuple if non-empty (else None).",
      "hint_ko": "사전의 키-값 '항목들'을 순회하는 다섯 글자 메서드, '아무것도 없음'을 뜻하는 네 글자 초기 상수, 다섯 글자 '튜플' 변환 함수를 차례로 채우세요.",
      "hint_en": "Fill in the 5-letter dict pair method, initialize the result to the 4-letter empty constant, and cast non-empty results with the 5-letter immutable sequence function.",
      "templateCode": "inv = {\"potion\": 2, \"key\": 0, \"map\": 1}\nactive = []\nfor k, v in inv.§§§§§():\n    if v > 0:\n        active.append(k)\nres = §§§§\nif len(active) > 0:\n    res = §§§§§(active)\nprint(res)",
      "targetCode": "inv = {\"potion\": 2, \"key\": 0, \"map\": 1}\nactive = []\nfor k, v in inv.items():\n    if v > 0:\n        active.append(k)\nres = None\nif len(active) > 0:\n    res = tuple(active)\nprint(res)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "('potion', 'map')"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "집합(set)에는 정렬 메서드가 없어 발생한 오류(AttributeError)를 리스트 형변환을 추가해 수정해보세요.",
      "prompt_en": "Fix the AttributeError from calling .sort() on a set by wrapping it in a list conversion.",
      "hint_ko": "집합은 순서가 없는 자료구조여서 직접 정렬 메서드를 부를 수 없습니다. 정렬하기 전에 순서가 있는 리스트 자료형으로 한 번 더 감싸 변환하세요.",
      "hint_en": "Unordered sets have no in-place ordering method; wrap the deduplicated set in a list conversion before ordering.",
      "templateCode": "nums = [4, 1, 4, 2]\nuniq = set(nums)\nuniq.sort()\nprint(uniq)",
      "targetCode": "nums = [4, 1, 4, 2]\nuniq = list(set(nums))\nuniq.sort()\nprint(uniq)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[1, 2, 4]"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "중복을 제거하고 정렬한 리스트 아래에 한 줄을 추가하여 uniq를 튜플로 변환한 결과를 출력해보세요.",
      "prompt_en": "Add one line below uniq.sort() to print uniq converted into a tuple.",
      "hint_ko": "중복 제거와 정렬이 끝난 리스트 변수를 다섯 글자 튜플 형변환 함수로 감싸 화면에 바로 출력해보세요.",
      "hint_en": "Convert the sorted unique list into an immutable parenthesized sequence and pass it directly to the output function.",
      "templateCode": "tags = [\"py\", \"ai\", \"py\"]\nuniq = list(set(tags))\nuniq.sort()\n§§§§§§§§§§§§§§§§§§",
      "targetCode": "tags = [\"py\", \"ai\", \"py\"]\nuniq = list(set(tags))\nuniq.sort()\nprint(tuple(uniq))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "('ai', 'py')"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "다음 파이썬 코드를 실행했을 때 화면에 출력될 결과를 선택해보세요.",
      "prompt_en": "Select the exact output produced when the following Python code runs.",
      "hint_ko": "단어에서 중복 글자가 빠지면 총 몇 글자가 남는지 세어보고, 알파벳 사전순으로 줄 세웠을 때 맨 앞 글자와 맨 끝 글자가 무엇인지 따져보세요.",
      "hint_en": "Count how many distinct letters appear in the word, then order those distinct letters alphabetically to identify the first and last.",
      "targetCode": "word = \"level\"\nuniq = list(set(word))\nuniq.sort()\nt = tuple(uniq)\nprint(len(t), t[0], t[-1])",
      "choices": [
        "3 e v",
        "5 l l",
        "3 l v",
        "4 e v"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "3 e v"
        }
      ]
    }
  ]
};
