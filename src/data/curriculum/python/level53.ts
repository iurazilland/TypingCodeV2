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
      "hint_ko": "두 번째 인자를 생략하면 기본값 tax=10이 사용되고, 25를 전달하면 tax가 25로 덮어써집니다.",
      "hint_en": "calc(100) uses default tax=10 -> 110, while calc(100, 25) overrides tax -> 125.",
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
      "hint_ko": "return f\"{n}{unit}\"에서 참조하는 매개변수 이름을 등호(=) 왼쪽에 적어주세요.",
      "hint_en": "Write unit before =\"km\" in the function header.",
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
      "prompt_ko": "w * h + border를 반환하는 make_box(w, h=10, border=1)을 만들고 make_box(5)와 make_box(5, border=3)을 출력해보세요.",
      "prompt_en": "Define make_box(w, h=10, border=1) returning w * h + border, then print make_box(5) and make_box(5, border=3).",
      "hint_ko": "키워드 인자 border=3을 지정하면 중간 매개변수 h는 기본값 10을 그대로 유지합니다.",
      "hint_en": "Passing border=3 keeps h at its default 10 while setting border to 3.",
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
      "hint_ko": "선언부의 세 번째 매개변수 이름을 등호 왼쪽에 적어 키워드 인자로 전달합니다.",
      "hint_en": "Write bonus before =30 inside pay(100, bonus=30).",
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
      "hint_ko": "함수 안에서 대입한 hp는 함수 내부에서만 쓰이는 지역변수이므로 바깥의 hp = 100을 바꾸지 않습니다.",
      "hint_en": "Local hp = 50 inside reset_hp() is isolated from the outer hp = 100.",
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
      "hint_ko": "함수 안에서는 return으로 지역변수 값을 돌려주고, 바깥에서는 score를 인자로 넘겨 다시 대입받습니다.",
      "hint_en": "Write return on line 3 and score inside add_point(score).",
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
      "hint_ko": "txt = raw.strip()으로 앞뒤 공백을 없앤 뒤 mark + txt.replace(\" \", \"_\")를 반환합니다.",
      "hint_en": "Strip raw, replace spaces with \"_\", prepend mark, and return the result.",
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
      "hint_ko": "양끝 공백 제거는 .strip(), 문자열 치환은 .replace(\" \", sep) 메서드를 사용합니다.",
      "hint_en": "Use strip on line 2 and replace on line 3.",
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
      "hint_ko": "함수 안에서 res = []를 만들어 원소와 extra를 .append()하고 res.sort() 후 return res를 실행하세요.",
      "hint_en": "Build local list res, append extra, call res.sort(), and return res.",
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
      "hint_ko": "키와 값을 함께 꺼낼 때는 .items()를 쓰고, 두 번째 호출에서는 cut=90으로 기준값을 바꿉니다.",
      "hint_en": "Call scores.items() in the loop and pass cut=90 in the second call.",
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
      "hint_ko": "파이썬 함수 선언부에서는 일반 매개변수(price)를 먼저 적고 기본값 매개변수(fee=500)를 뒤에 적어야 합니다.",
      "hint_en": "Reorder the parameters to def total_fee(price, fee=500):.",
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
      "hint_ko": "두 번째 인자를 생략하고 print(tag_item(item))을 호출하면 기본값 \"NEW\"가 적용됩니다.",
      "hint_en": "Write print(tag_item(item)) on the last line.",
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
      "hint_ko": "함수 안의 val은 지역변수이므로 바깥의 val = 100은 변하지 않고, a는 13, b는 15가 됩니다.",
      "hint_en": "a is 10 + 3 = 13, b is 10 + 5 = 15, and outer val remains 100.",
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
