import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_36: PracticeRound = {
  "id": "py-basic-r36",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 36,
  "title_ko": "while 조건 반복문과 증감 변수 제어",
  "title_en": "while Conditional Loops & Step Variable Control",
  "description_ko": "조건식이 참인 동안 계속 반복하는 while문과 무한 루프를 막는 증감 변수 제어를 익힙니다.",
  "description_en": "Master conditional while loops and control step variables to prevent infinite loops.",
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
    "while"
  ],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 조건 반복문을 사용해 n이 3 이하인 동안 n을 출력하고 1씩 증가시켜 1부터 3까지 출력해보세요.",
      "prompt_en": "[Block] Print 1 through 3 using a conditional loop that increments n by 1 each turn while n is at most 3.",
      "hint_ko": "n이 1에서 시작해 매 반복마다 1씩 커지다가 4가 되면 n <= 3이 거짓이 되어 반복이 멈춥니다.",
      "hint_en": "Starting at 1, n increments by 1 each turn until it reaches 4 and fails n <= 3.",
      "targetCode": "n = 1\nwhile n <= 3:\n    print(n)\n    n += 1",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "1\n2\n3"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 변수 i가 4 이하인 동안 1부터 4까지 순서대로 출력하도록 반복문 헤더의 빈칸을 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the conditional loop keyword to iterate while i is at most 4.",
      "hint_ko": "영어로 ~하는 동안을 뜻하는 소문자 키워드로 조건 반복문을 시작합니다.",
      "hint_en": "Start the conditional loop with the keyword meaning \"during the time that\".",
      "templateCode": "i = 1\n§§§§§§ i <= 4:\n    print(i, end=\" \")\n    i += 1",
      "targetCode": "i = 1\nwhile i <= 4:\n    print(i, end=\" \")\n    i += 1",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "1 2 3 4"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 조건 반복문으로 count가 0보다 큰 동안 값을 출력하며 1씩 감소시키고 반복이 끝나면 출발 문구를 출력해보세요.",
      "prompt_en": "[Block] Count down from count to 1 while count is positive, then print the start message outside the loop.",
      "hint_ko": "루프 안에서 count -= 1로 값을 1씩 줄여야 언젠가 0이 되어 루프를 빠져나올 수 있습니다.",
      "hint_en": "Decrement count with -= 1 inside the loop so it eventually reaches 0 and exits.",
      "targetCode": "count = int(input())\nwhile count > 0:\n    print(count)\n    count -= 1\nprint(\"Go!\")",
      "testCases": [
        {
          "id": 1,
          "input": "3",
          "expectedOutput": "3\n2\n1\nGo!"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 변수 n이 0보다 큰 동안 매 반복마다 2씩 감소하도록 증감식의 빈칸을 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the compound operator to decrease n by 2 each turn.",
      "hint_ko": "n에서 2를 빼서 다시 n에 저장하는 복합 대입 기호를 입력합니다.",
      "hint_en": "Use the minus-equals operator to subtract 2 from n on each iteration.",
      "templateCode": "n = 6\nwhile n > 0:\n    print(n, end=\" \")\n    n §§§ 2",
      "targetCode": "n = 6\nwhile n > 0:\n    print(n, end=\" \")\n    n -= 2",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "6 4 2"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 조건 반복문을 사용해 i가 1부터 n 이하인 동안 total에 i를 누적해 더한 총합을 출력해보세요.",
      "prompt_en": "[Block] Sum integers 1 through n into total using a conditional loop while i is at most n, and print total.",
      "hint_ko": "루프 안에서 total += i로 합계를 더한 뒤 i += 1로 다음 숫자로 넘어갑니다.",
      "hint_en": "Add i onto total with += and then increment i with i += 1 inside the loop.",
      "targetCode": "n = int(input())\ntotal = 0\ni = 1\nwhile i <= n:\n    total += i\n    i += 1\nprint(total)",
      "testCases": [
        {
          "id": 1,
          "input": "4",
          "expectedOutput": "10"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 누적 합계(total)가 기준값(limit) 미만인 동안 계속 i를 더하도록 조건식의 비교 연산자 빈칸을 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the relational operator to keep adding i while total is below limit.",
      "hint_ko": "total이 limit 미만인 동안 반복하고, limit 이상이 되는 순간 멈추도록 왼쪽이 닫힌 부등호를 넣습니다.",
      "hint_en": "Use the strict less-than angle bracket so the loop stops once total reaches limit.",
      "templateCode": "limit = int(input())\ntotal = 0\ni = 1\nwhile total §§ limit:\n    total += i\n    i += 1\nprint(total)",
      "targetCode": "limit = int(input())\ntotal = 0\ni = 1\nwhile total < limit:\n    total += i\n    i += 1\nprint(total)",
      "testCases": [
        {
          "id": 1,
          "input": "10",
          "expectedOutput": "10"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 변수 val이 target보다 작은 동안 계속 2배씩 키운 뒤, 반복이 끝나면 최종 val을 출력해보세요.",
      "prompt_en": "[Block] Double val repeatedly while it is less than target, then print the final val.",
      "hint_ko": "1에서 시작해 2, 4, 8, 16으로 2배씩 커지다가 target 이상이 되면 반복문을 빠져나옵니다.",
      "hint_en": "Starting at 1, val doubles each turn until it reaches or exceeds target.",
      "targetCode": "target = int(input())\nval = 1\nwhile val < target:\n    val *= 2\nprint(val)",
      "testCases": [
        {
          "id": 1,
          "input": "10",
          "expectedOutput": "16"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] n이 1 이상인 동안 2로 나눈 정수 몫으로 갱신하며 나눗셈 횟수를 세도록 빈칸을 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the compound operator to update n with its integer quotient by 2 on each iteration.",
      "hint_ko": "슬래시 두 개와 등호를 나란히 붙인 정수 몫 복합 대입 연산자를 입력합니다.",
      "hint_en": "Use the double-slash-equals operator to update n with its floor quotient.",
      "templateCode": "n = int(input())\ncnt = 0\nwhile n >= 1:\n    n §§§§ 2\n    cnt += 1\nprint(cnt)",
      "targetCode": "n = int(input())\ncnt = 0\nwhile n >= 1:\n    n //= 2\n    cnt += 1\nprint(cnt)",
      "testCases": [
        {
          "id": 1,
          "input": "8",
          "expectedOutput": "4"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 입력된 양의 정수 n의 모든 자릿수를 더한 합계(s)를 구하도록 조건 반복문을 완성해보세요.",
      "prompt_en": "[Fill Blank] Fill in the blanks to compute the sum of all digits of positive integer n.",
      "hint_ko": "조건 반복문 키워드(while)와 n을 10으로 나눈 몫으로 갱신하는 복합 대입 연산자(//=)를 차례로 채웁니다.",
      "hint_en": "Enter the while keyword, modulo operator %, and floor-division assignment //=.",
      "templateCode": "n = int(input())\ns = 0\n§§§§§§ n > 0:\n    s += n % 10\n    n §§§§ 10\nprint(s)",
      "targetCode": "n = int(input())\ns = 0\nwhile n > 0:\n    s += n % 10\n    n //= 10\nprint(s)",
      "testCases": [
        {
          "id": 1,
          "input": "482",
          "expectedOutput": "14"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 양의 정수 n의 각 자릿수 합계가 정상 계산되도록 조건식의 비교 연산자를 수정해보세요.",
      "prompt_en": "[Fix Bug] Fix the comparison operator in the loop condition so the digit sum is computed properly.",
      "hint_ko": "양의 정수는 0보다 큰 상태에서 시작하므로 n < 0이면 한 번도 실행되지 않습니다.",
      "hint_en": "Change n < 0 to n > 0 so the loop runs while digits remain.",
      "templateCode": "n = int(input())\ns = 0\nwhile n < 0:\n    s += n % 10\n    n //= 10\nprint(s)",
      "targetCode": "n = int(input())\ns = 0\nwhile n > 0:\n    s += n % 10\n    n //= 10\nprint(s)",
      "testCases": [
        {
          "id": 1,
          "input": "375",
          "expectedOutput": "15"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] n부터 1까지 줄어들며 정상 종료되도록 루프 내부의 증감 연산 기호를 수정해보세요.",
      "prompt_en": "[Fix Bug] Fix the step update operator inside the loop so n counts down to 1 instead of growing forever.",
      "hint_ko": "n > 0 조건에서 n을 1씩 더하면 무한 루프에 빠집니다. 1씩 빼도록 고쳐보세요.",
      "hint_en": "Change n += 1 to n -= 1 so n decreases toward 0.",
      "templateCode": "n = int(input())\nwhile n > 0:\n    print(n, end=\" \")\n    n += 1",
      "targetCode": "n = int(input())\nwhile n > 0:\n    print(n, end=\" \")\n    n -= 1",
      "testCases": [
        {
          "id": 1,
          "input": "3",
          "expectedOutput": "3 2 1"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 변수 i가 n 이하인 동안 계속 반복하는 조건 반복문 헤더 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Write the conditional loop header that repeats as long as i is at most n.",
      "hint_ko": "while i <= n: 형태로 조건 반복문 헤더와 콜론을 작성해보세요.",
      "hint_en": "Write while i <= n: including the trailing colon.",
      "templateCode": "n = int(input())\ni = 1\n§§§§§§§§§§§§§§\n    print(i, end=\" \")\n    i += 1",
      "targetCode": "n = int(input())\ni = 1\nwhile i <= n:\n    print(i, end=\" \")\n    i += 1",
      "testCases": [
        {
          "id": 1,
          "input": "4",
          "expectedOutput": "1 2 3 4"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 반복문 안에서 복합 대입 연산을 사용해 변수 n을 10으로 나눈 정수 몫으로 갱신하는 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Write the 4-space indented line that updates n to its integer quotient when divided by 10.",
      "hint_ko": "4칸 들여쓰기 뒤에 n //= 10을 작성해 일의 자리를 잘라내보세요.",
      "hint_en": "Keep the 4-space indentation and write n //= 10.",
      "templateCode": "n = int(input())\ncnt = 0\nwhile n > 0:\n    cnt += 1\n    §§§§§§§§§\nprint(cnt)",
      "targetCode": "n = int(input())\ncnt = 0\nwhile n > 0:\n    cnt += 1\n    n //= 10\nprint(cnt)",
      "testCases": [
        {
          "id": 1,
          "input": "482",
          "expectedOutput": "3"
        }
      ]
    },
    {
      "id": 14,
      "step": 14,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 다음 파이썬 코드의 실행 결과를 선택해보세요.",
      "prompt_en": "[Predict Output] Select the exact output of the following Python code.",
      "hint_ko": "print(n)이 n += 1 아래에 있으므로 1이 먼저 증가한 뒤 출력된다는 점에 유의해 첫 출력값과 마지막 출력값을 확인해보세요.",
      "hint_en": "Because n += 1 runs before print(n), trace what prints when n starts at 1 and when n reaches 3.",
      "targetCode": "n = 1\nwhile n <= 3:\n    n += 1\n    print(n, end=\" \")",
      "choices": [
        "2 3 4 ",
        "1 2 3 ",
        "2 3 ",
        "1 2 3 4 "
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "2 3 4 "
        }
      ]
    },
    {
      "id": 15,
      "step": 15,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 다음 파이썬 코드의 실행 결과를 선택해보세요.",
      "prompt_en": "[Predict Output] Select the exact output of the following Python code.",
      "hint_ko": "n이 6에서 시작해 매 반복마다 2씩 줄어들며 0이 될 때까지 몇 번 반복되는지 세어보세요.",
      "hint_en": "Starting from 6, n decreases by 2 each iteration until it reaches 0.",
      "targetCode": "n = 6\ncnt = 0\nwhile n > 0:\n    n -= 2\n    cnt += 1\nprint(cnt, n, bool(n))",
      "choices": [
        "3 0 False",
        "3 0 True",
        "2 2 True",
        "4 -2 False"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "3 0 False"
        }
      ]
    }
  ]
};
