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
  "totalQuestions": 13,
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
      "prompt_ko": "class 키워드로 객체의 설계도인 클래스를 정의하고 클래스명()을 호출해 인스턴스를 생성한 뒤, 점(.) 연산자로 객체의 속성을 읽을 수 있습니다. 블록의 코드를 따라 입력해보세요.",
      "prompt_en": "Define a class blueprint with the class keyword, call ClassName() to create an instance, and use dot (.) notation to read its attributes. Trace the block code.",
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
      "prompt_ko": "클래스를 선언하는 키워드와 인스턴스를 생성하는 호출식을 빈칸에 채워 고양이 울음소리 Meow를 출력해보세요.",
      "prompt_en": "Fill in the class keyword and instance creation call to print the cat sound Meow.",
      "hint_ko": "첫 빈칸에는 객체의 설계도('부류·학급'을 뜻하는 다섯 글자 영단어) 키워드를, 둘째 빈칸에는 선언한 클래스 이름 뒤에 빈 소괄호를 붙여 적으세요.",
      "hint_en": "Start line 1 with the five-letter blueprint keyword meaning \"category\", and create an instance on line 3 by calling the declared blueprint identifier with empty parentheses.",
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
      "prompt_ko": "생성된 인스턴스의 숫자 속성은 일반 변수처럼 점(.) 연산자와 복합 대입 연산자(+=)를 사용해 값을 직접 수정할 수 있습니다. 블록의 코드를 따라 입력해보세요.",
      "prompt_en": "Just like a regular variable, a numeric attribute on an instance can be updated directly using dot (.) notation and compound assignment (+=). Trace the block code.",
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
      "prompt_ko": "생성된 강아지 인스턴스에 이름 속성값으로 \"Coco\"를 부여하고, 이름과 기본 종 속성을 나란히 출력해보세요.",
      "prompt_en": "Assign \"Coco\" to the instance name attribute and print both its name and species attributes.",
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
      "prompt_ko": "인스턴스의 문자열 속성에도 += 연산자를 사용하여 기존 문자열 뒤에 새로운 글자를 이어 붙여 속성을 갱신할 수 있습니다. 블록의 코드를 따라 입력해보세요.",
      "prompt_en": "You can also apply the += operator to an instance's string attribute to concatenate new text onto the existing value. Trace the block code.",
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
      "prompt_ko": "두 번째 상자 인스턴스를 독립적으로 생성하고 첫 번째 상자의 수량만 5 늘려 15 10이 출력되도록 빈칸을 채워보세요.",
      "prompt_en": "Create a second independent Box instance and add 5 only to the first box count so 15 10 is printed.",
      "hint_ko": "첫 빈칸에서는 클래스 이름 뒤에 빈 괄호를 붙여 새 인스턴스를 만들고, 둘째 빈칸에는 값을 더해 다시 저장하는 복합 대입 연산자를 적으세요.",
      "hint_en": "Instantiate a separate object by calling the class with empty parentheses, then increment only the first object's attribute with the add-assign operator.",
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
      "prompt_ko": "클래스로 생성한 인스턴스 객체는 함수(def)의 인자로 전달할 수 있으며, 함수 안에서 매개변수.속성 형태로 객체의 상태를 변경할 수 있습니다. 블록의 코드를 따라 입력해보세요.",
      "prompt_en": "An instance object can be passed as an argument to a def function, which can then read or modify the object's state via parameter.attribute. Trace the block code.",
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
      "prompt_ko": "입력값을 정수로 바꿔 카운터 속성에 더하되, 변환 실패 시 속성을 0으로 재설정하도록 예외 처리를 완성해보세요. (터미널 입력: 5)",
      "prompt_en": "Add integer input to c.val, or reset c.val to 0 when conversion fails using exception handling. (Terminal input: 5)",
      "hint_ko": "첫 빈칸에는 실행을 '시도하다'라는 세 글자 키워드를, 둘째 빈칸에는 부적절한 '값+오류'를 첫 글자 대문자로 이어 붙인 예외 이름을 적으세요.",
      "hint_en": "Guard the integer input addition with the three-letter attempt keyword, and catch invalid text using the ten-letter PascalCase value exception.",
      "templateCode": "class Counter:\n    val = 10\nc = Counter()\n§§§:\n    c.val += int(input())\nexcept §§§§§§§§§§:\n    c.val = 0\nprint(c.val)",
      "targetCode": "class Counter:\n    val = 10\nc = Counter()\ntry:\n    c.val += int(input())\nexcept ValueError:\n    c.val = 0\nprint(c.val)",
      "testCases": [
        {
          "id": 1,
          "input": "5",
          "expectedOutput": "15"
        },
        {
          "id": 2,
          "input": "err",
          "expectedOutput": "0"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "block",
      "prompt_ko": "while 반복문의 조건식과 본문에서도 인스턴스의 속성(r.hp)을 직접 참조하고 증감시키며 상태 변화를 추적할 수 있습니다. 블록의 코드를 따라 입력해보세요.",
      "prompt_en": "You can reference and update an instance attribute (r.hp) directly in both the condition and body of a while loop to track state changes over time. Trace the block code.",
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
      "prompt_ko": "정수 입력값을 두 번째 동전 무게에 더한 뒤, 리스트 속 동전들의 무게 총합과 논리값을 출력해보세요. (터미널 입력: 2)",
      "prompt_en": "Add integer input to the second coin mass, sum all coin masses in the list, and print total and bool(total). (Terminal input: 2)",
      "hint_ko": "첫 빈칸에는 정수(integer)를 뜻하는 세 글자 변환 함수를, 둘째 빈칸에는 반복문이 매 회차 꺼내는 네 글자 원소 변수 이름을 적으세요.",
      "hint_en": "Convert the input with the three-letter integer type function on line 5, and access the four-letter loop variable before .mass on line 9.",
      "templateCode": "class Coin:\n    mass = 2.5\na = Coin()\nb = Coin()\nb.mass += §§§(input())\nbag = [a, b]\ntotal = 0.0\nfor item in bag:\n    total += §§§§.mass\nprint(total, bool(total))",
      "targetCode": "class Coin:\n    mass = 2.5\na = Coin()\nb = Coin()\nb.mass += int(input())\nbag = [a, b]\ntotal = 0.0\nfor item in bag:\n    total += item.mass\nprint(total, bool(total))",
      "testCases": [
        {
          "id": 1,
          "input": "2",
          "expectedOutput": "7.0 True"
        },
        {
          "id": 2,
          "input": "1",
          "expectedOutput": "6.0 True"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "클래스 밖에서 인스턴스를 통하지 않고 속성 이름만 바로 출력해 이름 오류가 발생합니다. 코드를 고쳐 Canine을 출력해보세요.",
      "prompt_en": "Fix the NameError caused by printing the attribute name directly without referencing the instance.",
      "hint_ko": "클래스 바깥에서는 속성 이름만 단독으로 부를 수 없습니다. 생성해 둔 인스턴스 변수와 점(.)을 통해 속성에 접근하세요.",
      "hint_en": "Class attributes cannot be read as bare variable names outside the class; qualify the attribute with the instance variable and a dot.",
      "templateCode": "class Dog:\n    species = \"Canine\"\nd = Dog()\nprint(species)",
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
      "kind": "one_line",
      "prompt_ko": "방패 인스턴스의 방어력을 15 높이는 코드 아래에 한 줄을 추가하여 형식에 맞게 출력해보세요. (출력 예: DEF:55)",
      "prompt_en": "Add one line below the defense boost to print the shield defense in the shown format (e.g., DEF:55).",
      "hint_ko": "방어력이 높아진 방패 인스턴스의 속성값을 점(.)으로 읽어 서식 문자열로 지정된 접두사와 함께 출력하세요.",
      "hint_en": "Read the updated defense attribute from the shield instance via dot notation and print it inside an f-string with the required prefix.",
      "templateCode": "class Shield:\n    defense = 40\ns = Shield()\ns.defense += 15\n§§§§§§§§§§§§§§§§§§§§§§§§§",
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
      "id": 13,
      "step": 13,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "두 개의 독립된 Box 인스턴스를 생성하고 각각 속성을 변경했을 때 출력 결과를 선택해보세요.",
      "prompt_en": "Select the exact output when two independent Box instances are created and mutated separately.",
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
