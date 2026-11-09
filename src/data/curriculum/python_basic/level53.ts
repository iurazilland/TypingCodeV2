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
  "totalQuestions": 13,
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
      "prompt_ko": "세금 기본값이 10인 calc(price, tax=10) 함수를 정의하고, calc(100)과 calc(100, 25)의 반환값을 각각 출력해보세요.",
      "prompt_en": "Define calc(price, tax=10) returning price + tax, then print calc(100) and calc(100, 25).",
      "hint_ko": "선언부의 두 번째 매개변수에 등호로 기본값을 지정하고, 인자 1개 호출과 2개 호출 결과를 차례로 출력하세요.",
      "hint_en": "Assign the default value in the function header, then print one call using the default and another overriding it.",
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
      "prompt_ko": "본문의 f-string에서 사용하는 두 번째 매개변수에 기본값 \"km\"가 연결되도록 빈칸을 채워보세요. (출력 예: 5km)",
      "prompt_en": "Fill in the second parameter name so its default value is \"km\".",
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
      "prompt_ko": "w * h + border를 반환하는 make_box(w, h=10, border=1)을 만들고, make_box(5)와 키워드 인자로 border만 지정한 make_box(5, border=3)을 출력해보세요.",
      "prompt_en": "Define make_box(w, h=10, border=1) returning w * h + border, then print make_box(5) and make_box(5, border=3).",
      "hint_ko": "뒤쪽 두 매개변수에 기본값을 두고, 두 번째 호출에서는 세 번째 매개변수 이름을 등호로 지정해 중간 기본값을 유지하세요.",
      "hint_en": "Define defaults for the last two parameters, and pass the third parameter by name on the second call to keep the middle default.",
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
      "prompt_ko": "세금은 기본값을 그대로 쓰고 보너스 매개변수에만 30을 키워드 인자로 지정하도록 빈칸을 채워보세요. (출력 예: 120)",
      "prompt_en": "Use a keyword argument to set the bonus parameter to 30 while keeping default tax=10.",
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
      "prompt_ko": "함수 안에서 지역변수 hp = 50을 만들어 In:50을 출력하는 reset_hp()를 정의하고, 바깥 변수 hp = 100이 유지되는지 확인해보세요.",
      "prompt_en": "Set local hp = 50 inside reset_hp() printing In:50, and verify outer hp = 100 prints Out:100.",
      "hint_ko": "함수 안에서 대입한 변수는 함수 내부에서만 유효한 지역변수이므로, 함수 호출 뒤 바깥 변수를 출력해 값이 독립적인지 확인하세요.",
      "hint_en": "Assigning inside a function creates an isolated local variable; call the function and then print the outer variable below.",
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
      "prompt_ko": "함수 내부 지역변수 계산값을 반환하고, 바깥 점수 변수에 전달해 갱신하도록 두 빈칸을 채워보세요. (출력 예: 25)",
      "prompt_en": "Return the local calculation from add_point and pass the outer variable to update it.",
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
      "prompt_ko": "양끝 공백을 제거하고 사이 공백을 \"_\"로 바꾼 뒤 앞에 mark=\"#\"을 붙여 반환하는 clean_tag(raw, mark=\"#\")에 입력값을 넣어 출력해보세요.",
      "prompt_en": "Define clean_tag(raw, mark=\"#\") using .strip() and .replace(\" \", \"_\"), then print clean_tag(input()).",
      "hint_ko": "매개변수의 양끝 공백을 먼저 제거한 뒤 내부 공백을 밑줄로 치환하고, 기본값 접두사 기호를 앞에 이어 붙여 반환하세요.",
      "hint_en": "Trim outer whitespace first, substitute inner spaces with underscores, and prepend the default prefix parameter before returning.",
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
      "prompt_ko": "입력 문자열의 양끝 공백을 제거한 뒤 단어 사이 공백을 구분자로 치환하도록 두 문자열 메서드 이름을 채워보세요. (출력 예: a/b)",
      "prompt_en": "Fill in the two string methods to trim outer spaces and replace inner spaces with sep.",
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
      "prompt_ko": "리스트 원소들을 새 리스트 res에 복사하고 extra=5를 추가한 뒤 오름차순 정렬해 반환하는 add_sorted([9, 2, 7]) 결과를 출력해보세요.",
      "prompt_en": "Copy nums into local list res, append extra=5, sort res, and return it for [9, 2, 7].",
      "hint_ko": "함수 안에서 빈 지역 리스트를 새로 만들어 원소들과 기본값 매개변수를 모두 추가한 뒤, 오름차순 정렬해 반환하세요.",
      "hint_en": "Create a fresh local list, add each input element plus the default parameter, sort the list in place, and send it back.",
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
      "prompt_ko": "딕셔너리의 키-값 쌍을 순회하는 메서드와 기준 점수 키워드 인자 이름을 두 빈칸에 채워보세요. (출력 예: 2 1)",
      "prompt_en": "Fill in the dictionary key-value iteration method and the cutoff keyword argument name.",
      "hint_ko": "첫 빈칸에는 딕셔너리의 키-값 '항목들'을 뜻하는 다섯 글자 복수형 메서드를, 둘째 빈칸에는 기준 점수 매개변수 이름을 적으세요.",
      "hint_en": "Call the five-letter plural method for dictionary key-value entries in the loop, and specify the cutoff parameter name in the second call.",
      "templateCode": "def count_pass(scores, cut=80):\n    cnt = 0\n    for k, v in scores.§§§§§():\n        if v >= cut and k != \"\":\n            cnt += 1\n    return cnt\nd = {\"Kim\": 85, \"Lee\": 75, \"Park\": 90}\nprint(count_pass(d), count_pass(d, §§§=90))",
      "targetCode": "def count_pass(scores, cut=80):\n    cnt = 0\n    for k, v in scores.items():\n        if v >= cut and k != \"\":\n            cnt += 1\n    return cnt\nd = {\"Kim\": 85, \"Lee\": 75, \"Park\": 90}\nprint(count_pass(d), count_pass(d, cut=90))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "2 1"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "기본값이 있는 매개변수가 일반 매개변수보다 앞에 선언되어 문법 에러가 발생했습니다. 매개변수 순서를 바르게 고쳐보세요.",
      "prompt_en": "Fix the SyntaxError caused by placing a default parameter before a required parameter.",
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
      "kind": "one_line",
      "prompt_ko": "기본 접두사가 설정된 함수와 입력 코드 아래에 한 줄을 추가하여 item을 기본 접두사와 결합해 출력해보세요. (출력 예: NEW:Book)",
      "prompt_en": "Add one line below item = input() to call tag_item(item) with its default prefix and print it.",
      "hint_ko": "기본 접두사가 그대로 쓰이도록 두 번째 인자는 생략하고, 입력 변수만 함수에 전달해 그 반환값을 출력하세요.",
      "hint_en": "Omit the second argument so the default prefix applies, pass only the input variable to the function, and print its result.",
      "templateCode": "def tag_item(name, prefix=\"NEW\"):\n    return f\"{prefix}:{name}\"\nitem = input()\n§§§§§§§§§§§§§§§§§§§§§",
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
      "id": 13,
      "step": 13,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "기본값 매개변수와 지역변수가 함께 쓰인 다음 코드의 실행 결과를 선택해보세요.",
      "prompt_en": "Select the exact output of the following code combining default parameters and local scope.",
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
