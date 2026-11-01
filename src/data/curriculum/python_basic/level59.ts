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
      "prompt_ko": "강아지 클래스 Dog에 기본 속성 species = \"Canine\"을 정의한 뒤, 인스턴스 d를 생성해 d.species를 출력해보세요.",
      "prompt_en": "Define class Dog with attribute species = \"Canine\", create instance d = Dog(), and print d.species.",
      "hint_ko": "class Dog: 블록 안에 species = \"Canine\"을 두고, 밖에서 d = Dog()로 객체를 만든 뒤 print(d.species)로 읽습니다.",
      "hint_en": "Place species = \"Canine\" inside class Dog:, instantiate d = Dog(), and call print(d.species).",
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
      "hint_ko": "클래스는 class 키워드로 정의하고, 클래스 이름 뒤에 괄호를 붙여 Cat()을 호출하면 새 인스턴스가 생성됩니다.",
      "hint_en": "Use the class keyword on line 1 and call Cat() on line 3 to create an instance.",
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
      "prompt_ko": "hp = 100 속성을 가진 Dog 클래스의 인스턴스 d를 만들고, d.hp와 type(d)를 차례로 출력해 객체 자료형을 확인해보세요.",
      "prompt_en": "Create instance d of class Dog with hp = 100, then print d.hp and type(d) on separate lines.",
      "hint_ko": "type(d)를 출력하면 d가 Dog 클래스로부터 만들어진 인스턴스(<class '__main__.Dog'>)임을 확인할 수 있습니다.",
      "hint_en": "Printing type(d) displays <class '__main__.Dog'>, showing d is an instance of Dog.",
      "targetCode": "class Dog:\n    hp = 100\nd = Dog()\nprint(d.hp)\nprint(type(d))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "100\n<class '__main__.Dog'>"
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
      "hint_ko": "인스턴스 변수 뒤에 점(.)을 찍어 d.name = \"Coco\"처럼 새 속성을 설정하고 d.species로 클래스 기본 속성을 읽습니다.",
      "hint_en": "Use d.name on line 4 to set the instance attribute and d.species on line 5 to read the species.",
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
      "prompt_ko": "hp = 100을 가진 Dog 클래스의 인스턴스 d를 만들고, 복합 대입으로 d.hp를 20만큼 증가시킨 뒤 출력해 120을 확인해보세요.",
      "prompt_en": "Create an instance d of Dog (hp = 100), increase d.hp by 20 with +=, and print d.hp to get 120.",
      "hint_ko": "d.hp += 20은 기존 체력 속성값 100에 20을 더한 120을 다시 d.hp에 저장합니다.",
      "hint_en": "Use d.hp += 20 to add 20 to the instance attribute and print(d.hp).",
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
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "두 번째 상자 인스턴스를 독립적으로 생성하고 첫 번째 상자의 수량만 5 늘려 15 10이 출력되도록 빈칸을 채워보세요.",
      "prompt_en": "Create a second independent Box instance and add 5 only to the first box count so 15 10 is printed.",
      "hint_ko": "a와 b는 서로 독립된 인스턴스이므로 a.count += 5로 변경해도 b.count는 기본값 10을 그대로 유지합니다.",
      "hint_en": "Instantiate b with Box() on line 4 and use += on line 5 to increment only a.count.",
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
      "prompt_ko": "hp = 100인 Hero 클래스와 객체의 hp를 50 높여 문자열을 반환하는 boost 함수를 만들고 호출해보세요. (출력 예: HP:150)",
      "prompt_en": "Define Hero (hp = 100) and a function boost(unit) that adds 50 to unit.hp and returns f\"HP:{unit.hp}\".",
      "hint_ko": "인스턴스 객체도 함수의 인자로 전달할 수 있으며, 함수 안에서 unit.hp += 50으로 속성을 직접 갱신할 수 있습니다.",
      "hint_en": "Pass instance h into boost(h), update unit.hp += 50, and return f\"HP:{unit.hp}\".",
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
      "prompt_ko": "입력값을 정수로 바꿔 카운터 속성에 더하되, 변환 실패 시 속성을 0으로 재설정하도록 예외 처리를 완성해보세요. (예: 5 -> 15)",
      "prompt_en": "Add integer input to c.val, or reset c.val to 0 when conversion fails using exception handling.",
      "hint_ko": "예외가 발생할 수 있는 블록은 try로 감싸고, 숫자 변환 오류는 except ValueError:에서 잡아 처리합니다.",
      "hint_en": "Use try on line 4 and ValueError on line 6 to catch invalid integer inputs.",
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
      "prompt_ko": "hp = 25인 Rock 인스턴스 r의 체력이 0보다 큰 동안 10씩 깎으며 타격 횟수 hits를 세고, hits와 r.hp를 출력해보세요.",
      "prompt_en": "While Rock instance r (hp = 25) has r.hp > 0, subtract 10 and count hits, then print hits and r.hp.",
      "hint_ko": "25 -> 15 -> 5 -> -5로 총 3번 반복된 뒤 r.hp가 0 이하가 되어 while 반복이 종료됩니다.",
      "hint_en": "Loop with while r.hp > 0:, apply r.hp -= 10 and hits += 1, then print(hits, r.hp).",
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
      "prompt_ko": "실수 입력값을 두 번째 동전 무게에 더한 뒤, 리스트 속 동전들의 무게 총합과 논리값을 출력해보세요. (예: 1.5 -> 6.5 True)",
      "prompt_en": "Add float input to the second coin mass, sum all coin masses in the list, and print total and bool(total).",
      "hint_ko": "실수 변환에는 float()를 사용하고, for 반복문 안에서는 각 인스턴스 item의 속성 item.mass를 누적합니다.",
      "hint_en": "Convert input with float on line 5 and access item.mass inside the loop on line 9.",
      "templateCode": "class Coin:\n    mass = 2.5\na = Coin()\nb = Coin()\nb.mass += §§§§§(input())\nbag = [a, b]\ntotal = 0.0\nfor item in bag:\n    total += §§§§.mass\nprint(total, bool(total))",
      "targetCode": "class Coin:\n    mass = 2.5\na = Coin()\nb = Coin()\nb.mass += float(input())\nbag = [a, b]\ntotal = 0.0\nfor item in bag:\n    total += item.mass\nprint(total, bool(total))",
      "testCases": [
        {
          "id": 1,
          "input": "1.5",
          "expectedOutput": "6.5 True"
        },
        {
          "id": 2,
          "input": "0.5",
          "expectedOutput": "5.5 True"
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
      "hint_ko": "클래스 내부 속성에 접근할 때는 생성한 인스턴스 변수를 앞에 붙여 d.species 형태로 읽어야 합니다.",
      "hint_en": "Access species through the instance d as print(d.species).",
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
      "hint_ko": "마지막 줄에 f-문자열을 사용해 print(f\"DEF:{s.defense}\")를 작성하세요.",
      "hint_en": "Write print(f\"DEF:{s.defense}\") on the final line.",
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
      "hint_ko": "x.val은 10 * 3 = 30, y.val은 10 - 4 = 6이 되며, type(x)는 <class '__main__.Box'>를 출력합니다.",
      "hint_en": "x.val becomes 30, y.val becomes 6, and print(type(x)) outputs <class '__main__.Box'>.",
      "targetCode": "class Box:\n    val = 10\nx = Box()\ny = Box()\nx.val *= 3\ny.val -= 4\nprint(f\"{x.val}:{y.val}\")\nprint(type(x))",
      "choices": [
        "30:6\n<class '__main__.Box'>",
        "26:26\n<class '__main__.Box'>",
        "30:10\n<class 'Box'>",
        "10:6\n<class '__main__.Box'>"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "30:6\n<class '__main__.Box'>"
        }
      ]
    }
  ]
};
