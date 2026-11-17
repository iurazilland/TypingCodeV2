import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_43: PracticeRound = {
  "id": "py-basic-r43",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 43,
  "title_ko": "43레벨: 리스트 필수 기초 종합 문제풀이",
  "title_en": "Level 43: Section 6 Comprehensive Review",
  "description_ko": "1차원 리스트 생성·슬라이싱, .append()/.pop()/.sort(), sum/max/min/len과 문자열·반복문을 종합해 문제를 해결합니다.",
  "description_en": "Synthesize 1D lists, slicing, .append()/.pop()/.sort(), sum/max/min/len, strings, and loops in comprehensive challenges.",
  "totalQuestions": 10,
  "unlockedBlocks": [],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 하이픈을 공백으로 바꾼 문자열을 단어로 나누어 개수와 마지막 단어를 출력해보세요.",
      "prompt_en": "[Fill Blank] Split the cleaned string into words and print Count and End.",
      "hint_ko": "공백 기준 단어 리스트로 나누는 split 메서드와 요소 개수를 구하는 len 함수를 채우세요.",
      "hint_en": "Use split() to divide into words and len(parts) to count the items.",
      "templateCode": "raw = input().strip().replace(\"-\", \" \")\nparts = raw.§§§§§()\nprint(f\"Count:{§§§(parts)},End:{parts[-1]}\")",
      "targetCode": "raw = input().strip().replace(\"-\", \" \")\nparts = raw.split()\nprint(f\"Count:{len(parts)},End:{parts[-1]}\")",
      "testCases": [
        {
          "id": 1,
          "input": "  py-code-v2  ",
          "expectedOutput": "Count:3,End:v2"
        },
        {
          "id": 2,
          "input": "alpha-beta",
          "expectedOutput": "Count:2,End:beta"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 입력 정수 중 50 이상만 골라 요소가 있으면 최댓값과 합계를, 없으면 Empty를 출력해보세요.",
      "prompt_en": "[Fill Blank] Filter integers >= 50 into valid; if non-empty print Max and Sum, else Empty.",
      "hint_ko": "리스트 끝에 추가하는 append 메서드와 최댓값을 구하는 max 함수를 차례로 채우세요.",
      "hint_en": "Use append to collect qualifying integers and max to find the largest value.",
      "templateCode": "valid = []\nfor s in input().split():\n    n = int(s)\n    if n >= 50:\n        valid.§§§§§§(n)\nif valid:\n    print(f\"Max:{§§§(valid)},Sum:{sum(valid)}\")\nelse:\n    print(\"Empty\")",
      "targetCode": "valid = []\nfor s in input().split():\n    n = int(s)\n    if n >= 50:\n        valid.append(n)\nif valid:\n    print(f\"Max:{max(valid)},Sum:{sum(valid)}\")\nelse:\n    print(\"Empty\")",
      "testCases": [
        {
          "id": 1,
          "input": "30 60 80 40",
          "expectedOutput": "Max:80,Sum:140"
        },
        {
          "id": 2,
          "input": "10 20",
          "expectedOutput": "Empty"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 입력 정수를 내림차순 정렬한 뒤 앞에서부터 최대 2개를 꺼내 picked에 담고 출력해보세요.",
      "prompt_en": "[Fill Blank] Sort integers descending, pop up to 2 items from the front into picked, and print picked + [0].",
      "hint_ko": "원본 정렬 메서드 sort와 맨 앞 요소를 꺼내는 pop(0)을 차례로 채우세요.",
      "hint_en": "Order in place with sort and extract from the front with pop(0).",
      "templateCode": "nums = []\nfor s in input().split():\n    nums.append(int(s))\nnums.§§§§(reverse=True)\npicked = []\nwhile nums and len(picked) < 2:\n    picked.append(nums.§§§§§§)\nprint(picked + [0])",
      "targetCode": "nums = []\nfor s in input().split():\n    nums.append(int(s))\nnums.sort(reverse=True)\npicked = []\nwhile nums and len(picked) < 2:\n    picked.append(nums.pop(0))\nprint(picked + [0])",
      "testCases": [
        {
          "id": 1,
          "input": "15 40 25 30",
          "expectedOutput": "[40, 30, 0]"
        },
        {
          "id": 2,
          "input": "9",
          "expectedOutput": "[9, 0]"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 입력 숫자들을 문자열로 변환해 담아 첫 값과 끝 값 덧셈이 문자열 연결이 되는 버그를 수정해보세요.",
      "prompt_en": "[Fix Bug] Fix the type conversion bug so the first and last numbers are added as integers.",
      "hint_ko": "산술 덧셈을 하려면 str(s) 대신 int(s)로 정수로 변환해 리스트에 담아야 합니다.",
      "hint_en": "Change str(s) to int(s) so numeric addition occurs instead of string concatenation.",
      "templateCode": "nums = []\nfor s in input().split():\n    nums.append(str(s))\nprint(f\"Ends:{nums[0] + nums[-1]}\")",
      "targetCode": "nums = []\nfor s in input().split():\n    nums.append(int(s))\nprint(f\"Ends:{nums[0] + nums[-1]}\")",
      "testCases": [
        {
          "id": 1,
          "input": "10 20 30",
          "expectedOutput": "Ends:40"
        },
        {
          "id": 2,
          "input": "7 5 13",
          "expectedOutput": "Ends:20"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 오름차순 정렬 후 가장 낮은 첫 점수 하나를 빼려다 두 번째 점수가 빠지는 버그를 수정해보세요.",
      "prompt_en": "[Fix Bug] Fix the .pop() index after ascending sort so the lowest score at index 0 is removed.",
      "hint_ko": "오름차순 정렬 후 가장 작은 값은 0번 인덱스에 있으므로 scores.pop(0)으로 고치세요.",
      "hint_en": "Change scores.pop(1) to scores.pop(0) to remove the lowest score.",
      "templateCode": "scores = [50, 90, 70, 80, 60]\nscores.sort()\nscores.pop(1)\nprint(f\"Low:{scores[0]},Sum:{sum(scores)}\")",
      "targetCode": "scores = [50, 90, 70, 80, 60]\nscores.sort()\nscores.pop(0)\nprint(f\"Low:{scores[0]},Sum:{sum(scores)}\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Low:60,Sum:300"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 금지 목록에 없는 정상 단어를 keep에 추가하려다 bans에 추가하는 대상 리스트 버그를 수정해보세요.",
      "prompt_en": "[Fix Bug] Fix the target list name in .append() so allowed words are added to keep.",
      "hint_ko": "통과한 단어는 bans가 아니라 결과 리스트 keep에 추가해야 합니다.",
      "hint_en": "Change bans.append(w) to keep.append(w) inside the if block.",
      "templateCode": "bans = [\"err\", \"skip\"]\nkeep = []\nfor w in input().split():\n    if w not in bans:\n        bans.append(w)\nprint(keep)",
      "targetCode": "bans = [\"err\", \"skip\"]\nkeep = []\nfor w in input().split():\n    if w not in bans:\n        keep.append(w)\nprint(keep)",
      "testCases": [
        {
          "id": 1,
          "input": "ok err run skip",
          "expectedOutput": "['ok', 'run']"
        },
        {
          "id": 2,
          "input": "err pass",
          "expectedOutput": "['pass']"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 정수 리스트 nums를 오름차순으로 원본 정렬하는 한 줄을 완성해보세요.",
      "prompt_en": "[Complete Line] Complete the line that sorts nums in ascending order in place.",
      "hint_ko": "nums.sort() 형태로 리스트 원본 정렬 메서드를 호출하세요.",
      "hint_en": "Write nums.sort() before the print line.",
      "templateCode": "nums = []\nfor s in input().split():\n    nums.append(int(s))\n§§§§§§§§§§§\nprint(f\"Min:{nums[0]},Max:{nums[-1]}\")",
      "targetCode": "nums = []\nfor s in input().split():\n    nums.append(int(s))\nnums.sort()\nprint(f\"Min:{nums[0]},Max:{nums[-1]}\")",
      "testCases": [
        {
          "id": 1,
          "input": "30 10 50 20",
          "expectedOutput": "Min:10,Max:50"
        },
        {
          "id": 2,
          "input": "9 3 7",
          "expectedOutput": "Min:3,Max:9"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] stack의 마지막 요소를 꺼내 removed 리스트에 추가하는 한 줄을 완성해보세요.",
      "prompt_en": "[Complete Line] Complete the indented line that pops from stack and appends to removed.",
      "hint_ko": "removed.append(stack.pop()) 형태로 꺼낸 값을 바로 추가하세요.",
      "hint_en": "Write removed.append(stack.pop()) inside the while loop.",
      "templateCode": "stack = [10, 20, 30, 40]\nremoved = []\nwhile len(stack) > 2:\n    §§§§§§§§§§§§§§§§§§§§§§§§§§§\nprint(f\"Left:{sum(stack)},Out:{sum(removed)}\")",
      "targetCode": "stack = [10, 20, 30, 40]\nremoved = []\nwhile len(stack) > 2:\n    removed.append(stack.pop())\nprint(f\"Left:{sum(stack)},Out:{sum(removed)}\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Left:30,Out:70"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 다음 문자열 치환, 리스트 필터링(continue, break), 정렬 코드의 실행 결과를 예측해보세요.",
      "prompt_en": "[Predict Output] Select the exact output printed when the following Python code runs.",
      "hint_ko": "음수는 건너뛰고 0에서 멈춘 뒤 모인 숫자들이 오름차순 정렬된 결과와 합계를 계산해보세요.",
      "hint_en": "Trace which numbers are collected before 0 stops the loop, then check the sorted list and sum.",
      "targetCode": "raw = \"30, -5, 10, 0, 20\".replace(\",\", \"\")\nnums = []\nfor s in raw.split():\n    n = int(s)\n    if n < 0:\n        continue\n    if n == 0:\n        break\n    nums.append(n)\nnums.sort()\nprint(f\"{nums}:{sum(nums)}\")",
      "choices": [
        "[10, 30]:40",
        "[10, 20, 30]:60",
        "[30, 10]:40",
        "[-5, 10, 30]:35"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[10, 30]:40"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 다음 내림차순 정렬, 양끝 .pop(), 리스트 연결 코드의 실행 결과를 예측해보세요.",
      "prompt_en": "[Predict Output] Select the exact output printed when the following Python code runs.",
      "hint_ko": "내림차순 정렬 후 맨 앞과 맨 뒤 값을 꺼내 그 차이를 이어 붙였을 때의 최댓값과 평균을 구해보세요.",
      "hint_en": "Remove the front and back items after descending sort, append their difference, and find max and average.",
      "targetCode": "q = [10, 50, 20, 30]\nq.sort(reverse=True)\nfirst = q.pop(0)\nlast = q.pop()\nres = q + [first - last]\nprint(f\"{max(res)}:{sum(res) / len(res)}\")",
      "choices": [
        "40:30.0",
        "50:30.0",
        "40:30",
        "30:25.0"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "40:30.0"
        }
      ]
    }
  ]
};
