import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_53: PracticeRound = {
  "id": "py-basic-r53",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 53,
  "title_ko": "53레벨: 기본값 매개변수와 지역변수 유효 범위 기초",
  "title_en": "Level 53: Default Parameters & Local Variable Scope",
  "description_ko": "매개변수에 기본값을 지정하고 키워드 인자로 호출하는 법과 함수 내부 지역변수의 독립된 유효 범위를 익힙니다.",
  "description_en": "Learn default parameter values, keyword arguments, and how local variables stay isolated from outer scope.",
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
    "def"
  ],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 기본값 매개변수 tax=10을 가진 calc 함수를 정의하고 두 방식으로 호출해보세요.",
      "prompt_en": "[Block] Define calc(price, tax=10) with a default parameter and call it with 1 and 2 arguments.",
      "hint_ko": "인자를 1개만 전달하면 두 번째 매개변수는 기본값이 적용되고, 2개를 전달하면 전달한 새 값으로 덮어써집니다.",
      "hint_en": "Calling with one argument uses the default for the second parameter, while passing two arguments overrides the default.",
      "targetCode": "def calc(price, tax=10):\n    return price + tax\nprint(calc(100))\nprint(calc(100, 25))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "110\n125"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] f-string에서 사용하는 두 번째 매개변수에 기본값 \"km\"가 연결되도록 빈칸을 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the second parameter name so its default value is \"km\".",
      "hint_ko": "함수 본문의 서식 문자열 중괄호에서 단위 값으로 참조하고 있는 네 글자 매개변수 이름을 등호 왼쪽에 적으세요.",
      "hint_en": "Look at the second variable name inside the f-string braces and declare it before the default assignment.",
      "templateCode": "def tag_dist(n, §§§§=\"km\"):\n    return f\"{n}{unit}\"\nprint(tag_dist(5))\nprint(tag_dist(5, \"m\"))",
      "targetCode": "def tag_dist(n, unit=\"km\"):\n    return f\"{n}{unit}\"\nprint(tag_dist(5))\nprint(tag_dist(5, \"m\"))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "5km\n5m"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 여러 기본값 매개변수 중 border=3만 키워드 인자로 지정해 make_box를 호출해보세요.",
      "prompt_en": "[Block] Define make_box(w, h=10, border=1) and call it using the keyword argument border=3.",
      "hint_ko": "두 번째 호출에서 키워드 인자로 세 번째 매개변수만 지정하면 두 번째 매개변수는 기본값이 그대로 유지됩니다.",
      "hint_en": "Passing the third parameter by keyword keeps the second parameter at its default value.",
      "targetCode": "def make_box(w, h=10, border=1):\n    return w * h + border\nprint(make_box(5))\nprint(make_box(5, border=3))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "51\n53"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 세금은 기본값을 쓰고 보너스 매개변수에만 30을 키워드 인자로 지정해보세요.",
      "prompt_en": "[Fill Blank] Use a keyword argument to set the bonus parameter to 30 while keeping default tax=10.",
      "hint_ko": "중간 매개변수는 기본값으로 두고 세 번째 매개변수만 바꾸려면 선언부의 세 번째 매개변수 이름을 등호 왼쪽에 적으세요.",
      "hint_en": "To skip the second parameter and set only the third, write the third parameter's name from the header before =30.",
      "templateCode": "def pay(base, tax=10, bonus=0):\n    return base - tax + bonus\nprint(pay(100, §§§§§=30))",
      "targetCode": "def pay(base, tax=10, bonus=0):\n    return base - tax + bonus\nprint(pay(100, bonus=30))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "120"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 함수 내부 지역변수 hp와 바깥 변수 hp가 서로 독립적으로 유지됨을 확인해보세요.",
      "prompt_en": "[Block] Observe how the local variable hp inside reset_hp() does not change the outer hp.",
      "hint_ko": "함수 내부의 변수는 함수가 끝나면 사라지며, 바깥 변수는 원래 값을 그대로 유지합니다.",
      "hint_en": "The local variable exists only while the function runs, leaving the outer variable untouched.",
      "targetCode": "def reset_hp():\n    hp = 50\n    print(f\"In:{hp}\")\nhp = 100\nreset_hp()\nprint(f\"Out:{hp}\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "In:50\nOut:100"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 지역변수 계산값을 반환하고 바깥 점수 변수를 전달해 갱신하도록 두 빈칸을 채워보세요.",
      "prompt_en": "[Fill Blank] Return the local calculation from add_point and pass the outer variable to update it.",
      "hint_ko": "첫 빈칸에는 값을 '되돌려주다'를 뜻하는 여섯 글자 키워드를, 둘째 빈칸에는 갱신할 바깥 점수 변수 이름을 적으세요.",
      "hint_en": "Send the local value back with the six-letter keyword on line 3, and pass the outer variable into the call on line 5.",
      "templateCode": "def add_point(pt, step=5):\n    local_pt = pt + step\n    §§§§§§ local_pt\nscore = 20\nscore = add_point(§§§§§)\nprint(score)",
      "targetCode": "def add_point(pt, step=5):\n    local_pt = pt + step\n    return local_pt\nscore = 20\nscore = add_point(score)\nprint(score)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "25"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 공백 제거와 치환을 수행하는 clean_tag 함수를 정의하고 호출해보세요.",
      "prompt_en": "[Block] Define clean_tag(raw, mark=\"#\") using .strip() and .replace() and call it.",
      "hint_ko": "두 번째 인자를 생략하고 호출하면 선언부에 설정된 기본 접두사 기호가 자동으로 앞에 붙어 반환됩니다.",
      "hint_en": "Omitting the second argument uses the default prefix character defined in the function header.",
      "targetCode": "def clean_tag(raw, mark=\"#\"):\n    txt = raw.strip()\n    return mark + txt.replace(\" \", \"_\")\ns = input()\nprint(clean_tag(s))",
      "testCases": [
        {
          "id": 1,
          "input": "  py code  ",
          "expectedOutput": "#py_code"
        },
        {
          "id": 2,
          "input": " hi all ",
          "expectedOutput": "#hi_all"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 양끝 공백을 제거한 뒤 공백을 구분자로 치환하도록 두 메서드를 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the two string methods to trim outer spaces and replace inner spaces.",
      "hint_ko": "첫 빈칸에는 양끝 공백을 '벗겨내다'를 뜻하는 다섯 글자 메서드를, 둘째 빈칸에는 '교체하다'를 뜻하는 일곱 글자 메서드를 적으세요.",
      "hint_en": "First call the five-letter method meaning \"peel off outer spaces\", then the seven-letter method meaning \"substitute\".",
      "templateCode": "def norm_text(s, sep=\"-\"):\n    t = s.§§§§§()\n    return t.§§§§§§§(\" \", sep)\nraw = input()\nprint(norm_text(raw, sep=\"/\"))",
      "targetCode": "def norm_text(s, sep=\"-\"):\n    t = s.strip()\n    return t.replace(\" \", sep)\nraw = input()\nprint(norm_text(raw, sep=\"/\"))",
      "testCases": [
        {
          "id": 1,
          "input": "  a b  ",
          "expectedOutput": "a/b"
        },
        {
          "id": 2,
          "input": " hi py ",
          "expectedOutput": "hi/py"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 지역 리스트에 원소와 기본값 extra=5를 담아 정렬해 반환하는 add_sorted를 완성해보세요.",
      "prompt_en": "[Block] Copy items and extra=5 into a local list, sort it, and return it in add_sorted.",
      "hint_ko": "전달받은 리스트의 원소들과 기본값 매개변수를 지역 리스트에 모두 담은 뒤 .sort()로 정렬해 return합니다.",
      "hint_en": "Append all input items and the default value into the local list, sort it in place, and return it.",
      "targetCode": "def add_sorted(nums, extra=5):\n    res = []\n    for x in nums:\n        res.append(x)\n    res.append(extra)\n    res.sort()\n    return res\nprint(add_sorted([9, 2, 7]))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[2, 5, 7, 9]"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 원소에 배율(기본값 2)을 곱한 새 리스트를 반환하는 함수의 기본값 매개변수 이름을 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the default multiplier parameter name in both the header and keyword call.",
      "hint_ko": "반복문 안의 곱셈식 x * rate에서 사용하는 네 글자 매개변수 이름을 선언부와 키워드 인자 자리에 적으세요.",
      "hint_en": "Use the 4-letter parameter name rate in both the function definition and the keyword argument call.",
      "templateCode": "def scale_all(nums, §§§§=2):\n    res = []\n    for x in nums:\n        res.append(x * rate)\n    return res\narr = [3, 5]\nprint(scale_all(arr), scale_all(arr, §§§§=10))",
      "targetCode": "def scale_all(nums, rate=2):\n    res = []\n    for x in nums:\n        res.append(x * rate)\n    return res\narr = [3, 5]\nprint(scale_all(arr), scale_all(arr, rate=10))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[6, 10] [30, 50]"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 기본값 매개변수가 일반 매개변수보다 앞에 선언되어 발생한 문법 에러를 수정해보세요.",
      "prompt_en": "[Fix Bug] Fix the SyntaxError caused by placing a default parameter before a required parameter.",
      "hint_ko": "파이썬 함수 선언부에서는 기본값이 없는 필수 매개변수가 항상 먼저 오고, 기본값 매개변수는 뒤쪽에 놓여야 합니다.",
      "hint_en": "Required parameters without default values must always precede parameters with defaults in a function header.",
      "templateCode": "def total_fee(fee=500, price):\n    return price + fee\nprint(total_fee(3000))",
      "targetCode": "def total_fee(price, fee=500):\n    return price + fee\nprint(total_fee(3000))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "3500"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 세금(tax=10)은 그대로 두고 팁(tip)만 25로 지정하려다 잘못 적은 키워드 인자를 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the keyword argument in pay(100, ...) so tip is set to 25 while tax stays 10.",
      "hint_ko": "세 번째 매개변수인 팁에 25를 전달하려면 호출부의 tax=25를 tip=25로 수정해야 115가 출력됩니다.",
      "hint_en": "Change tax=25 to tip=25 in the call so the default tax=10 is preserved.",
      "templateCode": "def pay(base, tax=10, tip=0):\n    return base - tax + tip\nprint(pay(100, tax=25))",
      "targetCode": "def pay(base, tax=10, tip=0):\n    return base - tax + tip\nprint(pay(100, tip=25))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "115"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 필수 매개변수 name과 기본값 prefix=\"NEW\"를 받는 tag_item 함수 선언부를 완성해보세요.",
      "prompt_en": "[Complete Line] Complete the header for tag_item(name, prefix=\"NEW\").",
      "hint_ko": "def tag_item(name, prefix=\"NEW\"): 형태로 기본값 매개변수를 포함해 선언하세요.",
      "hint_en": "Write def tag_item(name, prefix=\"NEW\"): on line 1.",
      "templateCode": "§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§\n    return f\"{prefix}:{name}\"\nitem = input()\nprint(tag_item(item))",
      "targetCode": "def tag_item(name, prefix=\"NEW\"):\n    return f\"{prefix}:{name}\"\nitem = input()\nprint(tag_item(item))",
      "testCases": [
        {
          "id": 1,
          "input": "Book",
          "expectedOutput": "NEW:Book"
        },
        {
          "id": 2,
          "input": "Pen",
          "expectedOutput": "NEW:Pen"
        }
      ]
    },
    {
      "id": 14,
      "step": 14,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] w에 4를, 키워드 인자 border=2를 전달해 make_box를 호출한 결과를 ans에 저장해보세요.",
      "prompt_en": "[Complete Line] Call make_box(4, border=2) and assign the returned result to ans.",
      "hint_ko": "ans = make_box(4, border=2) 형태로 키워드 인자를 사용해 호출하세요.",
      "hint_en": "Write ans = make_box(4, border=2).",
      "templateCode": "def make_box(w, h=10, border=1):\n    return w * h + border\n§§§§§§§§§§§§§§§§§§§§§§§§§§§\nprint(ans)",
      "targetCode": "def make_box(w, h=10, border=1):\n    return w * h + border\nans = make_box(4, border=2)\nprint(ans)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "42"
        }
      ]
    },
    {
      "id": 15,
      "step": 15,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 기본값 매개변수와 지역변수가 함께 쓰인 다음 코드의 실행 결과를 선택해보세요.",
      "prompt_en": "[Predict Output] Select the exact output of the following code combining default parameters and local scope.",
      "hint_ko": "기본값이 적용된 첫 호출과 키워드 인자로 덮어쓴 두 번째 호출의 결과를 각각 구하고, 함수 안의 대입이 바깥 변수를 바꾸는지 확인하세요.",
      "hint_en": "Evaluate the first call with the default step and the second with the overridden step, noting that local assignments never alter outer variables.",
      "targetCode": "def bump(x, step=3):\n    val = x + step\n    return val\nval = 100\na = bump(10)\nb = bump(10, step=5)\nprint(a, b, val)",
      "choices": [
        "13 15 15",
        "10 15 100",
        "13 15 100",
        "13 15 13"
      ],
      "correctChoiceIndex": 2,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "13 15 100"
        }
      ]
    }
  ]
};
