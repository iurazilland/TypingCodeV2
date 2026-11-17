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
  "totalQuestions": 15,
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] list(\"ABC\")로 문자열의 각 글자를 담은 리스트를 만들고 리스트와 길이를 출력해보세요.",
      "prompt_en": "[Block] Convert \"ABC\" into a list of characters with list() and print the list and its length.",
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
      "prompt_ko": "[빈칸 채우기] 리스트 nums를 변경 불가능한 튜플로 변환하도록 형변환 함수를 채워 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in the casting function to convert list nums into an immutable tuple and print it.",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] 튜플을 list()로 변환해 30을 추가한 뒤 다시 tuple()로 감싸 출력해보세요.",
      "prompt_en": "[Block] Convert the tuple with list(), append 30, and convert it back with tuple() to print.",
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
      "prompt_ko": "[빈칸 채우기] 중복을 먼저 제거한 뒤 정렬 가능한 리스트로 변환하도록 두 빈칸을 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the two casting functions to deduplicate nums and convert it to a list for .sort().",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] 입력 단어들의 중복을 없애고 오름차순 정렬한 뒤 튜플로 출력해보세요.",
      "prompt_en": "[Block] Deduplicate and sort input words, then convert to a tuple and print.",
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
      "prompt_ko": "[빈칸 채우기] 입력 단어의 중복 글자를 없애고 정렬해 고유 글자 수와 첫 글자를 출력해보세요.",
      "prompt_en": "[Fill Blank] Deduplicate and sort the characters of input word, then print count and first letter.",
      "hint_ko": "안쪽 세 글자 '집합' 변환으로 중복 글자를 없애고 바깥 네 글자 '리스트' 변환으로 감싸 정렬이 가능하게 만드세요.",
      "hint_en": "Cast through the 3-letter deduplicating type into the 4-letter sequence type so .sort() can order the letters.",
      "templateCode": "word = input()\nletters = §§§§(§§§(word))\nletters.sort()\nprint(f\"{len(letters)}:{letters[0]}\")",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] 딕셔너리 안의 리스트를 list(set(...))과 .sort()로 정리해 다시 저장하고 출력해보세요.",
      "prompt_en": "[Block] Deduplicate and sort the list inside the dictionary, assign it back, and print the result.",
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
      "prompt_ko": "[빈칸 채우기] 중복 점수를 제거해 정렬한 뒤 튜플로 변환·언패킹하여 최저점과 최고점을 출력해보세요.",
      "prompt_en": "[Fill Blank] Deduplicate and sort raw, cast to a tuple to unpack low and high, and print them.",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] while문으로 정수 리스트를 만든 뒤 중복을 제거·정렬해 평균을 출력해보세요.",
      "prompt_en": "[Block] Build an integer list with a while loop, deduplicate and sort it, and print its average.",
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
      "prompt_ko": "[빈칸 채우기] 집합에 모은 정수들을 리스트로 변환해 정렬한 뒤 튜플로 출력해보세요.",
      "prompt_en": "[Fill Blank] Convert the set of integers to a list, sort it, and print it as a tuple.",
      "hint_ko": "정렬할 수 있도록 첫 빈칸에는 네 글자 '리스트' 변환 함수를, 마지막 출력문에는 다섯 글자 '튜플' 변환 함수를 채우세요.",
      "hint_en": "Cast the set to a mutable list with the 4-letter function so it can be sorted, then wrap it in the 5-letter tuple function.",
      "templateCode": "raw = input().split()\nbag = set()\ni = 0\nwhile i < len(raw):\n    bag.add(int(raw[i]))\n    i += 1\nuniq = §§§§(bag)\nuniq.sort()\nprint(§§§§§(uniq))",
      "targetCode": "raw = input().split()\nbag = set()\ni = 0\nwhile i < len(raw):\n    bag.add(int(raw[i]))\n    i += 1\nuniq = list(bag)\nuniq.sort()\nprint(tuple(uniq))",
      "testCases": [
        {
          "id": 1,
          "input": "30 10 30 20",
          "expectedOutput": "(10, 20, 30)"
        },
        {
          "id": 2,
          "input": "5 2 5",
          "expectedOutput": "(2, 5)"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 집합을 정렬하려다 dict()로 잘못 감싼 버그를 list()로 수정해 [1, 2, 4]를 출력해보세요.",
      "prompt_en": "[Fix Bug] Fix the bug where set(nums) is wrapped in dict() instead of list() before sorting.",
      "hint_ko": "중복이 제거된 집합을 .sort()로 정렬하려면 dict()가 아니라 순서가 있는 list()로 감싸 변환해야 합니다.",
      "hint_en": "To sort a deduplicated set with .sort(), wrap it in list() rather than dict().",
      "templateCode": "nums = [4, 1, 4, 2]\nuniq = dict(set(nums))\nuniq.sort()\nprint(uniq)",
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
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 튜플에 값을 추가하려다 dict(pt)로 잘못 변환한 줄을 list(pt)로 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the bug where tuple pt is converted with dict(pt) instead of list(pt) before .append().",
      "hint_ko": "튜플의 원소들을 유지한 채 .append()를 호출하려면 dict(pt)가 아니라 list(pt)로 변환해야 합니다.",
      "hint_en": "Convert the tuple using list(pt) instead of dict(pt) so .append(30) works properly.",
      "templateCode": "pt = (10, 20)\ntmp = dict(pt)\ntmp.append(30)\npt3 = tuple(tmp)\nprint(pt3)",
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
      "id": 13,
      "step": 13,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 리스트 nums의 중복을 제거하고 리스트로 변환해 uniq에 저장하는 한 줄을 완성해보세요.",
      "prompt_en": "[Complete Line] Complete the line that deduplicates nums with set() and converts it to a list in uniq.",
      "hint_ko": "안쪽에서 set(nums)로 중복을 없애고 바깥쪽에서 list(...)로 감싸 변수 uniq에 대입하세요.",
      "hint_en": "Assign list(set(nums)) to the variable uniq.",
      "templateCode": "nums = [30, 10, 30, 20]\n§§§§§§§§§§§§§§§§§§§§§§\nuniq.sort()\nprint(uniq)",
      "targetCode": "nums = [30, 10, 30, 20]\nuniq = list(set(nums))\nuniq.sort()\nprint(uniq)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[10, 20, 30]"
        }
      ]
    },
    {
      "id": 14,
      "step": 14,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 정렬된 리스트 uniq를 튜플로 변환하여 변수 res에 저장하는 한 줄을 완성해보세요.",
      "prompt_en": "[Complete Line] Complete the line that converts the sorted list uniq into a tuple stored in res.",
      "hint_ko": "변수 res에 대입(=) 기호를 쓰고, 다섯 글자 튜플 변환 함수 tuple(uniq)를 호출하세요.",
      "hint_en": "Assign tuple(uniq) to the variable res.",
      "templateCode": "tags = [\"py\", \"ai\", \"py\"]\nuniq = list(set(tags))\nuniq.sort()\n§§§§§§§§§§§§§§§§§\nprint(res)",
      "targetCode": "tags = [\"py\", \"ai\", \"py\"]\nuniq = list(set(tags))\nuniq.sort()\nres = tuple(uniq)\nprint(res)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "('ai', 'py')"
        }
      ]
    },
    {
      "id": 15,
      "step": 15,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 다음 파이썬 코드를 실행했을 때 화면에 출력될 결과를 선택해보세요.",
      "prompt_en": "[Predict Output] Select the exact output produced when the following Python code runs.",
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
