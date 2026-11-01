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
      "prompt_ko": "문자열 \"ABC\"를 list(\"ABC\")로 형변환해 한 글자씩 담긴 리스트 chars를 만들고 chars와 길이를 출력해보세요.",
      "prompt_en": "Convert string \"ABC\" into a character list with chars = list(\"ABC\") and print chars and len(chars).",
      "hint_ko": "문자열에 list()를 씌우면 각 글자가 순서대로 분리된 새 리스트가 만들어집니다.",
      "hint_en": "Calling list(\"ABC\") splits the string into ['A', 'B', 'C'].",
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
      "hint_ko": "리스트나 집합을 튜플 자료형으로 바꿀 때는 tuple() 함수를 사용합니다.",
      "hint_en": "Use tuple(nums) to convert the list into a tuple.",
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
      "prompt_ko": "튜플 pt = (10, 20)을 list(pt)로 바꿔 30을 .append()한 뒤, 다시 tuple()로 변환해 출력해보세요.",
      "prompt_en": "Convert pt = (10, 20) to a list, append 30, convert back with tuple(), and print (10, 20, 30).",
      "hint_ko": "튜플은 직접 수정할 수 없으므로 list()로 변환해 요소를 추가한 다음 다시 tuple()로 감싸줍니다.",
      "hint_en": "Cast tmp = list(pt), call tmp.append(30), then set pt3 = tuple(tmp) and print(pt3).",
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
      "hint_ko": "안쪽에서 set(nums)로 중복을 없애고 바깥쪽에서 list(...)로 감싸면 .sort()로 정렬할 수 있습니다.",
      "hint_en": "Wrap set(nums) inside list(...) as list(set(nums)) so uniq.sort() can sort it.",
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
      "prompt_ko": "공백으로 입력된 단어들의 중복을 제거하고 오름차순 정렬한 뒤, 튜플로 변환해 출력해보세요.",
      "prompt_en": "Deduplicate input words via list(set(words)), sort them with .sort(), and print tuple(uniq).",
      "hint_ko": "uniq = list(set(words)) 다음에 uniq.sort()로 정렬하고 res = tuple(uniq)를 출력하세요.",
      "hint_en": "Run uniq = list(set(words)), uniq.sort(), and res = tuple(uniq), then print(res).",
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
      "prompt_ko": "입력 단어의 중복 글자를 없애고 오름차순 정렬하여 고유 글자 수와 첫 글자를 출력해보세요. (출력 예: 3:a)",
      "prompt_en": "Deduplicate and sort the characters of input word, then print count and first letter (e.g., 3:a).",
      "hint_ko": "list(set(word))로 고유 글자 리스트를 만든 뒤 .sort()로 알파벳순 정렬을 수행합니다.",
      "hint_en": "Use list(set(word)) and letters.sort() to get unique characters in alphabetical order.",
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
      "prompt_ko": "user = {\"id\": \"neo\", \"badges\": [3, 1, 3, 2]}의 배지 중복을 제거·정렬해 다시 저장하고 출력해보세요.",
      "prompt_en": "Deduplicate and sort user[\"badges\"], store it back into user[\"badges\"], and print id and badges.",
      "hint_ko": "clean = list(set(user[\"badges\"])) 후 clean.sort()를 실행하고 user[\"badges\"] = clean으로 갱신하세요.",
      "hint_en": "Build clean = list(set(user[\"badges\"])), call clean.sort(), and assign user[\"badges\"] = clean.",
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
      "hint_ko": "첫 빈칸에는 정렬을 위한 리스트 변환 함수를, 둘째 빈칸에는 튜플 변환 함수를 적어주세요.",
      "hint_en": "Use list(set(raw)) on line 2 and tuple(pair) on line 4.",
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
      "prompt_ko": "while문으로 입력 숫자들을 정수 리스트에 담은 뒤, 중복 제거·정렬한 리스트 uniq와 실수 평균을 출력해보세요.",
      "prompt_en": "Convert input tokens to ints with while, deduplicate and sort into uniq, and print uniq and float mean.",
      "hint_ko": "uniq = list(set(nums))와 uniq.sort() 후 avg = float(sum(uniq)) / len(uniq)를 계산하세요.",
      "hint_en": "Deduplicate with list(set(nums)), sort, and compute float(sum(uniq)) / len(uniq).",
      "targetCode": "raw = input().split()\nnums = []\ni = 0\nwhile i < len(raw):\n    nums.append(int(raw[i]))\n    i += 1\nuniq = list(set(nums))\nuniq.sort()\navg = float(sum(uniq)) / len(uniq)\nprint(uniq, avg)",
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
      "hint_ko": ".items()로 순회하고 초기값 None에서 active에 요소가 있으면 tuple(active)로 변환합니다.",
      "hint_en": "Use inv.items(), initialize res = None, and convert with tuple(active).",
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
      "hint_ko": "집합은 순서가 없어 직접 .sort()를 호출할 수 없습니다. set(nums)를 list()로 한 번 더 감싸주세요.",
      "hint_en": "Sets have no .sort() method; convert set(nums) to a list with list(set(nums)).",
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
      "hint_ko": "마지막 줄에 print(tuple(uniq))를 작성하여 튜플 형태로 출력하세요.",
      "hint_en": "Write print(tuple(uniq)) on the fourth line.",
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
      "hint_ko": "\"level\"의 고유 글자는 e, l, v 3개이며 알파벳순 정렬 후 첫 요소는 e, 마지막 요소는 v가 됩니다.",
      "hint_en": "Unique letters of \"level\" sorted are ['e', 'l', 'v'], so len is 3, first is e, last is v.",
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
