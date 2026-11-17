import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_59: PracticeRound = {
  "id": "py-basic-r59",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 59,
  "title_ko": "59레벨: 클래스(class) 정의와 인스턴스 객체 생성 첫걸음",
  "title_en": "Level 59: Defining Classes & Creating Instances",
  "description_ko": "class 키워드로 클래스와 기본 속성을 정의하고, 독립적인 인스턴스 객체를 생성해 속성을 읽고 수정합니다.",
  "description_en": "Define classes with default attributes using class, create independent instances, and read or mutate their attributes.",
  "totalQuestions": 15,
  "unlockedBlocks": [
    "class",
    "variable",
    "type",
    "print",
    "input",
    "if",
    "while",
    "def"
  ],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] class Dog:를 정의하고 d = Dog() 인스턴스를 생성해 d.species를 출력해보세요.",
      "prompt_en": "[Block] Define class Dog:, create an instance d = Dog(), and print d.species.",
      "hint_ko": "클래스 이름은 관례적으로 첫 글자를 대문자(파스칼 표기법)로 작성하며, 클래스명 뒤에 빈 소괄호 ()를 붙여 인스턴스를 만듭니다.",
      "hint_en": "Class names conventionally start with a capital letter (PascalCase), and empty parentheses () after the class name instantiate an object.",
      "targetCode": "class Dog:\n    species = \"Canine\"\nd = Dog()\nprint(d.species)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Canine"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 클래스 선언 키워드와 인스턴스 생성 호출식을 채워 Meow를 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in the class keyword and instance creation call to print Meow.",
      "hint_ko": "첫 빈칸에는 객체의 설계도를 뜻하는 다섯 글자 키워드를, 둘째 빈칸에는 선언한 클래스 이름 뒤에 빈 소괄호를 붙여 적으세요.",
      "hint_en": "Start line 1 with the five-letter class keyword, and instantiate the class with empty parentheses on line 3.",
      "templateCode": "§§§§§ Cat:\n    sound = \"Meow\"\nc = §§§§§\nprint(c.sound)",
      "targetCode": "class Cat:\n    sound = \"Meow\"\nc = Cat()\nprint(c.sound)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Meow"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] Dog 인스턴스의 숫자 속성 d.hp에 20을 더해 갱신한 값을 출력해보세요.",
      "prompt_en": "[Block] Add 20 to the instance attribute d.hp using += and print d.hp.",
      "hint_ko": "d.hp += 20은 d.hp의 현재 값에 20을 더한 결과를 다시 d.hp 속성에 저장합니다.",
      "hint_en": "d.hp += 20 adds 20 to the current value of d.hp and stores the result back onto the instance.",
      "targetCode": "class Dog:\n    hp = 100\nd = Dog()\nd.hp += 20\nprint(d.hp)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "120"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 강아지 인스턴스에 이름 속성 \"Coco\"를 부여하고 이름과 종 속성을 출력해보세요.",
      "prompt_en": "[Fill Blank] Assign \"Coco\" to the instance name attribute and print both name and species.",
      "hint_ko": "첫 빈칸에는 바로 윗줄에서 생성한 인스턴스 변수 이름을, 둘째 빈칸에는 클래스 안에 선언된 일곱 글자 기본 속성 이름을 적으세요.",
      "hint_en": "Reference the instance variable before .name on line 4, and read the seven-letter class attribute name after the dot on line 5.",
      "templateCode": "class Dog:\n    species = \"Canine\"\nd = Dog()\n§.name = \"Coco\"\nprint(d.name, d.§§§§§§§)",
      "targetCode": "class Dog:\n    species = \"Canine\"\nd = Dog()\nd.name = \"Coco\"\nprint(d.name, d.species)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Coco Canine"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 인스턴스의 문자열 속성 d.name에 += 연산자로 \"bi\"를 이어 붙여 출력해보세요.",
      "prompt_en": "[Block] Concatenate \"bi\" onto the instance attribute d.name with += and print it.",
      "hint_ko": "문자열 속성에 +=를 적용하면 기존 문자열 끝에 오른쪽 문자열이 이어 붙은 새 문자열로 해당 인스턴스의 속성이 바뀝니다.",
      "hint_en": "Using += on a string attribute updates that instance's attribute with the concatenated string.",
      "targetCode": "class Dog:\n    name = \"Bo\"\nd = Dog()\nd.name += \"bi\"\nprint(d.name)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Bobi"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 두 번째 상자 인스턴스를 독립적으로 생성하고 첫 상자의 수량만 5 늘려 출력해보세요.",
      "prompt_en": "[Fill Blank] Create a second Box instance and add 5 only to the first box count.",
      "hint_ko": "첫 빈칸에서는 클래스 이름 뒤에 빈 괄호를 붙여 새 인스턴스를 만들고, 둘째 빈칸에는 값을 더해 다시 저장하는 복합 대입 연산자를 적으세요.",
      "hint_en": "Instantiate a separate object by calling the class with empty parentheses, then increment only the first object's attribute with +=.",
      "templateCode": "class Box:\n    count = 10\na = Box()\nb = §§§§§\na.count §§ 5\nprint(a.count, b.count)",
      "targetCode": "class Box:\n    count = 10\na = Box()\nb = Box()\na.count += 5\nprint(a.count, b.count)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "15 10"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] Hero 인스턴스를 boost(unit) 함수에 전달해 체력을 50 높인 결과를 출력해보세요.",
      "prompt_en": "[Block] Pass a Hero instance to boost(unit) to increase its hp by 50 and print the result.",
      "hint_ko": "함수 내부에서 전달받은 인스턴스의 속성을 수정하면 함수 바깥의 원본 인스턴스에도 변경 사항이 그대로 반영됩니다.",
      "hint_en": "Mutating an attribute on the passed instance inside a function directly updates the original object outside the function.",
      "targetCode": "class Hero:\n    hp = 100\ndef boost(unit):\n    unit.hp += 50\n    return f\"HP:{unit.hp}\"\nh = Hero()\nprint(boost(h))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "HP:150"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 카운터 인스턴스를 함수에 전달해 val 속성을 증가시키고 반환값을 출력해보세요.",
      "prompt_en": "[Fill Blank] Pass a Counter instance to add_step to increment c.val and print the result.",
      "hint_ko": "첫 빈칸에는 클래스에 정의된 세 글자 속성 이름을, 둘째 빈칸에는 생성할 일곱 글자 클래스 이름을 적으세요.",
      "hint_en": "Access the 3-letter attribute val on line 4 and instantiate the 7-letter class Counter on line 6.",
      "templateCode": "class Counter:\n    val = 10\ndef add_step(c, step=5):\n    c.§§§ += step\n    return c.val\ncnt = §§§§§§§()\nprint(add_step(cnt))",
      "targetCode": "class Counter:\n    val = 10\ndef add_step(c, step=5):\n    c.val += step\n    return c.val\ncnt = Counter()\nprint(add_step(cnt))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "15"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] while문으로 r.hp가 0 이하가 될 때까지 10씩 차감하며 타격 횟수를 세어보세요.",
      "prompt_en": "[Block] Use a while loop to subtract 10 from r.hp until it reaches 0 or less and print hits.",
      "hint_ko": "반복할 때마다 인스턴스 속성이 줄어들어 조건식이 거짓이 되는 순간 while 루프가 종료됩니다.",
      "hint_en": "As the instance attribute decreases each iteration, the while loop terminates once the condition becomes False.",
      "targetCode": "class Rock:\n    hp = 25\nr = Rock()\nhits = 0\nwhile r.hp > 0:\n    r.hp -= 10\n    hits += 1\nprint(hits, r.hp)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "3 -5"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] Tank 인스턴스를 만들고 연료 속성이 10 이상이 될 때까지 입력값을 더해보세요.",
      "prompt_en": "[Fill Blank] Instantiate Tank and add step in a while loop until t.fuel >= 10.",
      "hint_ko": "첫 빈칸에는 네 글자 클래스 이름을, 둘째 빈칸에는 클래스에 선언된 네 글자 연료 속성 이름을 적으세요.",
      "hint_en": "Call Tank() on line 3 and check the attribute t.fuel in the while condition.",
      "templateCode": "class Tank:\n    fuel = 0\nt = §§§§()\nstep = int(input())\nwhile t.§§§§ < 10:\n    t.fuel += step\nprint(t.fuel)",
      "targetCode": "class Tank:\n    fuel = 0\nt = Tank()\nstep = int(input())\nwhile t.fuel < 10:\n    t.fuel += step\nprint(t.fuel)",
      "testCases": [
        {
          "id": 1,
          "input": "4",
          "expectedOutput": "12"
        },
        {
          "id": 2,
          "input": "5",
          "expectedOutput": "10"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 클래스를 정의할 때 while 키워드를 잘못 사용한 문법 오류를 class로 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the SyntaxError where while was used instead of class to define Dog.",
      "hint_ko": "객체의 설계도를 정의할 때는 반복문 키워드 while이 아니라 클래스 정의 키워드 class를 써야 합니다.",
      "hint_en": "Use the class keyword instead of while on line 1.",
      "templateCode": "while Dog:\n    species = \"Canine\"\nd = Dog()\nprint(d.species)",
      "targetCode": "class Dog:\n    species = \"Canine\"\nd = Dog()\nprint(d.species)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Canine"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 두 번째 상자 b의 수량을 3 줄여야 하는데 a를 두 번 수정한 버그를 고쳐 15 7을 출력해보세요.",
      "prompt_en": "[Fix Bug] Fix line 6 so 3 is subtracted from b.count instead of a.count.",
      "hint_ko": "첫 번째 상자 a에는 5를 더하고 두 번째 상자 b에서는 3을 빼도록 a.count -= 3을 b.count -= 3으로 고치세요.",
      "hint_en": "Change a.count -= 3 to b.count -= 3 on line 6.",
      "templateCode": "class Box:\n    count = 10\na = Box()\nb = Box()\na.count += 5\na.count -= 3\nprint(a.count, b.count)",
      "targetCode": "class Box:\n    count = 10\na = Box()\nb = Box()\na.count += 5\nb.count -= 3\nprint(a.count, b.count)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "15 7"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] Shield 클래스의 인스턴스를 생성해 변수 s에 저장하는 한 줄을 완성해보세요.",
      "prompt_en": "[Complete Line] Complete the line that instantiates Shield() and assigns it to s.",
      "hint_ko": "변수 s에 대입(=) 기호를 쓰고 클래스 이름 뒤에 빈 괄호를 붙여 Shield()를 호출하세요.",
      "hint_en": "Write s = Shield() on line 3.",
      "templateCode": "class Shield:\n    defense = 40\n§§§§§§§§§§§§\ns.defense += 15\nprint(f\"DEF:{s.defense}\")",
      "targetCode": "class Shield:\n    defense = 40\ns = Shield()\ns.defense += 15\nprint(f\"DEF:{s.defense}\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "DEF:55"
        }
      ]
    },
    {
      "id": 14,
      "step": 14,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 인스턴스 d의 hp 속성에 += 연산자로 20을 더하는 한 줄을 완성해보세요.",
      "prompt_en": "[Complete Line] Complete the line that adds 20 to d.hp using +=.",
      "hint_ko": "d.hp += 20 형태로 인스턴스의 숫자 속성을 증가시키세요.",
      "hint_en": "Write d.hp += 20 on line 4.",
      "templateCode": "class Dog:\n    hp = 100\nd = Dog()\n§§§§§§§§§§\nprint(d.hp)",
      "targetCode": "class Dog:\n    hp = 100\nd = Dog()\nd.hp += 20\nprint(d.hp)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "120"
        }
      ]
    },
    {
      "id": 15,
      "step": 15,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 두 개의 독립된 Box 인스턴스를 생성하고 각각 속성을 변경했을 때 출력 결과를 선택해보세요.",
      "prompt_en": "[Predict Output] Select the exact output when two independent Box instances are created and mutated separately.",
      "hint_ko": "두 인스턴스의 속성이 서로 영향을 주지 않고 각각 독립적으로 계산된다는 점을 추적해보세요.",
      "hint_en": "Remember each instance mutates its own attribute copy independently.",
      "targetCode": "class Box:\n    val = 10\nx = Box()\ny = Box()\nx.val *= 3\ny.val -= 4\nprint(f\"{x.val}:{y.val}\")",
      "choices": [
        "30:6",
        "26:26",
        "30:10",
        "10:6"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "30:6"
        }
      ]
    }
  ]
};
