import { PracticeRound } from '@/lib/practiceTypes';

// ============================================================================
// 파이썬 기초 57레벨: 기본값 매개변수와 변수의 유효 범위 (13단계 표준 구성)
// - [1,3,5,7,9단계] 블록 코딩 개념 도입 (기본값 매개변수, 키워드 인자, 지역·전역 변수)
// - [2,4,6,8,10단계] 빈칸 채우기 타이핑 실습 (fill_blank)
// - [11단계] 버그 수정 (fix_bug)
// - [12단계] 예제 아래 한 줄 코드 추가 작성 (one_line)
// - [13단계] 출력 결과 예측 4지선다 퀴즈 (predict_output)
// ============================================================================
export const PYTHON_LEVEL_57: PracticeRound = {
  "id": "py-basic-r57",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 57,
  "title_ko": "57레벨: 기본값 매개변수와 변수의 유효 범위",
  "title_en": "Level 57: Default Parameters & Variable Scope",
  "totalQuestions": 13,
  "unlockedBlocks": [
    "print",
    "variable",
    "def"
  ],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "block",
      "prompt_ko": "기본값이 name=\"Guest\"인 greet 함수를 만들어 f\"Hello, {name}\"을 출력하고, 인자 없이 한 번, \"Yuna\"로 한 번 호출해보세요.",
      "prompt_en": "Define greet(name=\"Guest\") printing f\"Hello, {name}\", then call greet() and greet(\"Yuna\").",
      "hint_ko": "매개변수 칸에 name=\"Guest\"를 적으면 인자 없이 greet()로 호출할 때 자동으로 \"Guest\"가 사용됩니다.",
      "hint_en": "Set name=\"Guest\" in the def header, then call greet() and greet(\"Yuna\").",
      "targetCode": "def greet(name=\"Guest\"):\n    print(f\"Hello, {name}\")\ngreet()\ngreet(\"Yuna\")",
      "testCases": [
        {
          "id": 1,
          "expectedOutput": "Hello, Guest\nHello, Yuna"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸을 채워 기본값 role=\"Member\"인 badge 함수를 완성하고 인자 없는 badge()를 먼저 호출해보세요.",
      "prompt_en": "Fill in the blanks so role defaults to \"Member\" in badge and call badge() with no arguments.",
      "hint_ko": "매개변수 뒤에 =\"Member\"로 기본값을 지정하고, 셋째 줄에서는 인자 없이 badge()를 호출하세요.",
      "hint_en": "Write role=\"Member\" on line 1 and badge() on line 3.",
      "templateCode": "def badge(§§§§§§§§§§§§§):\n    print(f\"[{role}]\")\n§§§§§§§\nbadge(\"Admin\")",
      "targetCode": "def badge(role=\"Member\"):\n    print(f\"[{role}]\")\nbadge()\nbadge(\"Admin\")",
      "testCases": [
        {
          "id": 1,
          "expectedOutput": "[Member]\n[Admin]"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "prompt_ko": "지수 기본값이 exp=2인 power(base, exp=2) 함수에서 base ** exp를 반환하고, power(5)와 power(2, 3)을 출력해보세요.",
      "prompt_en": "Define power(base, exp=2) returning base ** exp, then print power(5) and power(2, 3).",
      "hint_ko": "power(5)는 기본값 exp=2가 적용되어 25를, power(2, 3)은 exp=3이 적용되어 8을 반환합니다.",
      "hint_en": "Use base, exp=2 as parameters and return base ** exp.",
      "targetCode": "def power(base, exp=2):\n    return base ** exp\nprint(power(5))\nprint(power(2, 3))",
      "testCases": [
        {
          "id": 1,
          "expectedOutput": "25\n8"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸을 채워 기본값 fee=3000인 total_pay 함수를 완성하고 둘째 호출에는 10000, 0을 전달해보세요.",
      "prompt_en": "Fill in fee=3000 in total_pay and pass 10000, 0 in the second call.",
      "hint_ko": "첫 줄 매개변수에 fee=3000을 적고, 넷째 줄에서는 배송비 0원을 두 번째 인자로 전달하세요.",
      "hint_en": "Enter fee=3000 on line 1 and total_pay(10000, 0) on line 4.",
      "templateCode": "def total_pay(price, §§§§§§§§):\n    return price + fee\nprint(total_pay(10000))\nprint(total_pay(§§§§§§§§))",
      "targetCode": "def total_pay(price, fee=3000):\n    return price + fee\nprint(total_pay(10000))\nprint(total_pay(10000, 0))",
      "testCases": [
        {
          "id": 1,
          "expectedOutput": "13000\n10000"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "prompt_ko": "calc(base, rate=2, bonus=0)에서 base * rate + bonus를 반환하고, calc(10, 3)과 calc(10, 3, 5)를 출력해보세요.",
      "prompt_en": "Define calc(base, rate=2, bonus=0) and print calc(10, 3) and calc(10, 3, 5).",
      "hint_ko": "인자를 앞에서부터 순서대로 넘기면 전달한 개수만큼 기본값이 새 값으로 바뀌고 나머지는 기본값을 씁니다.",
      "hint_en": "calc(10, 3) uses bonus=0 by default, while calc(10, 3, 5) overrides both defaults.",
      "targetCode": "def calc(base, rate=2, bonus=0):\n    return base * rate + bonus\nprint(calc(10, 3))\nprint(calc(10, 3, 5))",
      "testCases": [
        {
          "id": 1,
          "expectedOutput": "30\n35"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "첫 빈칸에 기본값 tag=\"INFO\"를, 둘째 빈칸에 호출 인자 \"ALERT\", \"!\"를 채워 make_msg를 완성해보세요.",
      "prompt_en": "Fill in default tag=\"INFO\" on line 1 and arguments \"ALERT\", \"!\" on line 4.",
      "hint_ko": "첫 줄에 기본값 tag=\"INFO\"를 채우고, 넷째 줄에 \"ALERT\", \"!\"를 순서대로 전달하세요.",
      "hint_en": "Enter tag=\"INFO\" on line 1 and \"ALERT\", \"!\" on line 4.",
      "templateCode": "def make_msg(text, §§§§§§§§§§, mark=\".\"):\n    return f\"[{tag}] {text}{mark}\"\nprint(make_msg(\"Ready\"))\nprint(make_msg(\"Warn\", §§§§§§§§§§§§))",
      "targetCode": "def make_msg(text, tag=\"INFO\", mark=\".\"):\n    return f\"[{tag}] {text}{mark}\"\nprint(make_msg(\"Ready\"))\nprint(make_msg(\"Warn\", \"ALERT\", \"!\"))",
      "testCases": [
        {
          "id": 1,
          "expectedOutput": "[INFO] Ready.\n[ALERT] Warn!"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "prompt_ko": "전역 변수 x = 10을 만든 뒤, change 함수 안에서 지역 변수 x = 99를 선언해 출력하고 함수 밖에서도 x를 출력해보세요.",
      "prompt_en": "Set x = 10 globally, set and print local x = 99 inside change(), then call change() and print outer x.",
      "hint_ko": "함수 안에서 만든 x = 99는 지역 변수이므로 함수 바깥의 전역 변수 x(10)를 덮어쓰지 않습니다.",
      "hint_en": "Local assignment x = 99 inside change() does not alter the global x = 10.",
      "targetCode": "x = 10\ndef change():\n    x = 99\n    print(x)\nchange()\nprint(x)",
      "testCases": [
        {
          "id": 1,
          "expectedOutput": "99\n10"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸을 채워 test_hp() 안에서 지역 변수 hp = 50을 선언하고, test_hp()를 호출해 전역 hp와 비교해보세요.",
      "prompt_en": "Fill in the blanks to print local hp = 50 inside test_hp() and global hp = 100 outside.",
      "hint_ko": "함수 안에서는 지역 변수 hp = 50이, 함수가 끝난 뒤 밖에서는 전역 변수 hp = 100이 참조됩니다.",
      "hint_en": "Assign hp = 50 on line 3, call test_hp() on line 5, and print(\"out:\", hp) on line 6.",
      "templateCode": "hp = 100\ndef test_hp():\n    §§§§§§§\n    print(\"in:\", hp)\n§§§§§§§§§\nprint(\"out:\", hp)",
      "targetCode": "hp = 100\ndef test_hp():\n    hp = 50\n    print(\"in:\", hp)\ntest_hp()\nprint(\"out:\", hp)",
      "testCases": [
        {
          "id": 1,
          "expectedOutput": "in: 50\nout: 100"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "block",
      "prompt_ko": "전역 상수 TAX = 100을 선언하고, add_tax(price) 함수 안에서 price + TAX를 반환해 add_tax(900)을 출력해보세요.",
      "prompt_en": "Declare TAX = 100, define add_tax(price) returning price + TAX, and print add_tax(900).",
      "hint_ko": "함수 바깥에 선언된 전역 상수(TAX)는 함수 내부 수식에서 자유롭게 읽어서 사용할 수 있습니다.",
      "hint_en": "Read the global constant TAX directly inside return price + TAX.",
      "targetCode": "TAX = 100\ndef add_tax(price):\n    return price + TAX\nprint(add_tax(900))",
      "testCases": [
        {
          "id": 1,
          "expectedOutput": "1000"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸을 채워 전역 상수 BONUS를 더한 값을 반환하는 final_score(pt)를 완성하고 final_score(200)을 출력해보세요.",
      "prompt_en": "Fill in the blanks so final_score(pt) returns pt + BONUS and print final_score(200).",
      "hint_ko": "함수 안에서 전역 상수 BONUS를 더한 값을 return 하고 final_score(200)을 출력하세요.",
      "hint_en": "Return pt + BONUS on line 3 and call final_score(200) on line 4.",
      "templateCode": "BONUS = 50\ndef final_score(pt):\n    return §§§§§§§§§§\nprint(§§§§§§§§§§§§§§§§)",
      "targetCode": "BONUS = 50\ndef final_score(pt):\n    return pt + BONUS\nprint(final_score(200))",
      "testCases": [
        {
          "id": 1,
          "expectedOutput": "250"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "잔 수 2만 전달해 기본 차 종류로 Green x2를 출력하려 하지만 매개변수 오류가 납니다. 함수 정의를 고쳐보세요.",
      "prompt_en": "Fix the parameter order in make_tea so make_tea(2) prints Green x2.",
      "hint_ko": "기본값이 없는 필수 매개변수는 항상 기본값이 지정된 매개변수보다 앞에 위치해야 합니다.",
      "hint_en": "Place the required parameter without a default before the parameter with a default value.",
      "templateCode": "def make_tea(kind=\"Green\", cups):\n    return f\"{kind} x{cups}\"\nprint(make_tea(2))",
      "targetCode": "def make_tea(cups, kind=\"Green\"):\n    return f\"{kind} x{cups}\"\nprint(make_tea(2))",
      "testCases": [
        {
          "id": 1,
          "expectedOutput": "Green x2"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "코드 마지막에 한 줄을 추가하여 boost 함수에 10, 3, 7 세 인자를 전달한 반환값을 출력해보세요.",
      "prompt_en": "Add one line at the end to print boost called with arguments 10, 3, and 7.",
      "hint_ko": "기본값 mul=2, flat=0을 모두 덮어쓰도록 boost(10, 3, 7)을 print() 안에서 호출하세요.",
      "hint_en": "Write print(boost(10, 3, 7)) on the last line.",
      "templateCode": "def boost(atk, mul=2, flat=0):\n    return atk * mul + flat\n§§§§§§§§§§§§§§§§§§§§§§",
      "targetCode": "def boost(atk, mul=2, flat=0):\n    return atk * mul + flat\nprint(boost(10, 3, 7))",
      "testCases": [
        {
          "id": 1,
          "expectedOutput": "37"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "다음 코드의 실행 결과를 예측해보세요.",
      "prompt_en": "Predict the output of the following code.",
      "hint_ko": "update() 안의 val = 20은 지역 변수이고 기본값 n=3이 더해져 반환되며, 바깥의 val은 그대로 5입니다.",
      "hint_en": "update() uses local val = 20 and default n = 3 (returning 23), while global val stays 5.",
      "targetCode": "val = 5\ndef update(n=3):\n    val = 20\n    return val + n\nprint(update())\nprint(val)",
      "choices": [
        "23\n20",
        "8\n5",
        "23\n5",
        "20\n5"
      ],
      "correctChoiceIndex": 2,
      "testCases": [
        {
          "id": 1,
          "expectedOutput": "23\n5"
        }
      ]
    }
  ]
};
