import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_99: PracticeRound = {
  "id": "py-basic-r99",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 99,
  "title_ko": "문자열 심화 기능 & 누적 복습 종합 문제풀이",
  "title_en": "Section 12 Comprehensive Spiral Review",
  "description_ko": "섹션 12의 문자열 심화 메서드·f-string 서식·간격/역순 슬라이싱·문자 코드와 섹션 1~11 누적 문법을 종합 점검합니다.",
  "description_en": "Comprehensive review of Section 12 string methods, f-string specifiers, step/reverse slicing, ord/chr, and Sections 1-11.",
  "totalQuestions": 10,
  "unlockedBlocks": [],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 로그 리스트에서 경고 항목의 장치 이름만 소문자로 추출해 파이프 기호로 이어 출력하도록 빈칸 3곳을 채워보세요.",
      "prompt_en": "[Fill Blank] Complete the three blanks to extract warning device names in lowercase and join them with a pipe character.",
      "hint_ko": "왼쪽 공백 제거 메서드, 접두사 검사 메서드, 문자열 결합 메서드를 순서대로 채워보세요.",
      "hint_en": "Fill in the left-strip method, the prefix-check method, and the string-join method.",
      "targetCode": "logs = [\" WARN:Disk\", \"INFO:Ok\", \" WARN:Cpu\"]\nwarns = [x.lstrip()[5:].strip().lower() for x in logs if x.lstrip().startswith(\"WARN:\")]\nprint(\"|\".join(warns))",
      "templateCode": "logs = [\" WARN:Disk\", \"INFO:Ok\", \" WARN:Cpu\"]\nwarns = [x.§§§§§§§()[5:].strip().lower() for x in logs if x.lstrip().§§§§§§§§§§§(\"WARN:\")]\nprint(\"|\".§§§§§(warns))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "disk|cpu"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 입력된 상품명과 수량을 검증해 천 단위 콤마와 소수 둘째 자리까지의 총액 문자열을 반환하도록 빈칸 3곳을 채워보세요.",
      "prompt_en": "[Fill Blank] Complete the three blanks in calc to validate the item and quantity and return the total formatted with commas and two decimal places.",
      "hint_ko": "대문자 변환 메서드, 숫자 문자열 판별 메서드, 그리고 천 단위 콤마+소수 둘째 자리 서식 지정자를 채우세요.",
      "hint_en": "Fill in the uppercase method, the digit-check method, and the comma + 2-decimal format specifier.",
      "targetCode": "prices = {\"BOOK\": 12000, \"PEN\": 1500}\ndef calc(line):\n    name, qty = line.split(\":\")\n    key = name.strip().upper()\n    if key in prices and qty.isdigit():\n        return f\"{prices[key] * int(qty):,.2f}\"\n    return \"ERR\"\nprint(calc(input()))",
      "templateCode": "prices = {\"BOOK\": 12000, \"PEN\": 1500}\ndef calc(line):\n    name, qty = line.split(\":\")\n    key = name.strip().§§§§§§()\n    if key in prices and qty.§§§§§§§§():\n        return f\"{prices[key] * int(qty):§§§§§}\"\n    return \"ERR\"\nprint(calc(input()))",
      "testCases": [
        {
          "id": 1,
          "input": "book:2",
          "expectedOutput": "24,000.00"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 등급 알파벳, 역순 코드, 3자리 0 채우기 번호를 하이픈으로 조합해 출력하도록 빈칸 3곳을 채워보세요.",
      "prompt_en": "[Fill Blank] Complete the three blanks to format the tier letter, reversed code, and 3-digit zero-padded number joined with hyphens.",
      "hint_ko": "코드 번호를 문자로 바꾸는 함수, 역순 슬라이싱, 그리고 3자리 0 채우기 서식 지정자를 채우세요.",
      "hint_en": "Supply the code-to-character function, the reverse slice notation, and the 3-digit zero-padding specifier.",
      "targetCode": "tier = 2\ncode = \"XY9\"\nnum = 7\ntag = chr(ord(\"A\") + tier)\nprint(f\"{tag}-{code[::-1]}-{num:03d}\")",
      "templateCode": "tier = 2\ncode = \"XY9\"\nnum = 7\ntag = §§§§(ord(\"A\") + tier)\nprint(f\"{tag}-{code[§§§§§]}-{num:§§§§}\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "C-9YX-007"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 입력된 단어들을 모두 대문자로 바꾼 뒤 하이픈(\"-\")으로 이어 붙인 문자열이 출력되도록 버그를 찾아 고쳐보세요.",
      "prompt_en": "[Fix Bug] Find and fix the bug so the uppercased words are joined with hyphens and printed.",
      "hint_ko": "결합 메서드는 구분자 문자열(\"-\")에서 호출하고 괄호 안에 리스트 변수 up을 전달해야 합니다.",
      "hint_en": "Call .join(up) on the separator string \"-\" instead of calling up.join(\"-\").",
      "templateCode": "words = input().split()\nup = [w.upper() for w in words]\nprint(up.join(\"-\"))",
      "targetCode": "words = input().split()\nup = [w.upper() for w in words]\nprint(\"-\".join(up))",
      "testCases": [
        {
          "id": 1,
          "input": "py ai go",
          "expectedOutput": "PY-AI-GO"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 입력 문자열에서 알파벳 글자만 골라 대문자의 다음 알파벳으로 한 칸씩 밀어 출력하도록 버그를 고쳐보세요.",
      "prompt_en": "[Fix Bug] Find and fix the bug so each alphabetic character is shifted forward by one letter and printed.",
      "hint_ko": "안쪽에서 문자를 정수 번호로 바꾼 뒤 1을 더하고, 바깥쪽에서 다시 문자로 바꾸도록 함수를 맞바꾸세요.",
      "hint_en": "Call ord(c) on the inside before adding 1, and wrap the sum in chr() on the outside.",
      "templateCode": "s = input().strip().upper()\nout = [ord(chr(c) + 1) for c in s if c.isalpha()]\nprint(\"\".join(out))",
      "targetCode": "s = input().strip().upper()\nout = [chr(ord(c) + 1) for c in s if c.isalpha()]\nprint(\"\".join(out))",
      "testCases": [
        {
          "id": 1,
          "input": "ab1c",
          "expectedOutput": "BCD"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 파일명 문자열의 오른쪽 끝 공백을 제거해 확장자 검사를 통과하도록 코드의 버그를 고쳐보세요.",
      "prompt_en": "[Fix Bug] Find and fix the bug so trailing whitespace is removed before checking the file extension.",
      "hint_ko": "확장자 뒤(오른쪽 끝)에 붙은 공백을 지워야 하므로 왼쪽 제거 메서드를 오른쪽 제거 메서드로 고치세요.",
      "hint_en": "Replace the left-side strip method with the right-side strip method so trailing spaces are removed.",
      "templateCode": "name = \" data_01.csv \".lstrip()\nif name.endswith(\".csv\"):\n    print(name.strip())\nelse:\n    print(\"INVALID\")",
      "targetCode": "name = \" data_01.csv \".rstrip()\nif name.endswith(\".csv\"):\n    print(name.strip())\nelse:\n    print(\"INVALID\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "data_01.csv"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 문자열 s가 앞뒤가 같은 회문이면서 동시에 알파벳 글자로만 이루어져 있는지 판별해 변수 ok에 저장하는 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Check whether s is a palindrome and consists only of letters, assigning the boolean to ok.",
      "hint_ko": "ok = s == s[::-1] and s.isalpha() 형태로 두 조건을 and로 연결해 저장하세요.",
      "hint_en": "Write ok = s == s[::-1] and s.isalpha() on the masked line.",
      "targetCode": "s = input().lower().replace(\" \", \"\")\nok = s == s[::-1] and s.isalpha()\nprint(ok)",
      "templateCode": "s = input().lower().replace(\" \", \"\")\n§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§\nprint(ok)",
      "testCases": [
        {
          "id": 1,
          "input": "Top Spot",
          "expectedOutput": "True"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 출력 예제와 같은 형식으로 문자열 s와 소수점 첫째 자리까지의 백분율 rate를 서식 문자열로 묶어 변수 msg에 저장하는 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Format s and rate (to 1 decimal place) as shown in the example output and store the string in msg.",
      "hint_ko": "msg = f\"{s}:{rate:.1f}%\" 형태로 서식 문자열을 변수 msg에 대입하세요.",
      "hint_en": "Write msg = f\"{s}:{rate:.1f}%\" on the masked line.",
      "targetCode": "s = input().strip().upper()\nrate = s.count(\"O\") / len(s) * 100\nmsg = f\"{s}:{rate:.1f}%\"\nprint(msg)",
      "templateCode": "s = input().strip().upper()\nrate = s.count(\"O\") / len(s) * 100\n§§§§§§§§§§§§§§§§§§§§§§§§§\nprint(msg)",
      "testCases": [
        {
          "id": 1,
          "input": "oxoo",
          "expectedOutput": "OXOO:75.0%"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 공백 제거, 접두·접미사 판별, 대문자 변환과 역순 슬라이싱이 결합된 코드의 실행 결과를 선택해보세요.",
      "prompt_en": "[Predict Output] Select the exact output of the following code combining strip, prefix/suffix checks, and reverse slicing.",
      "hint_ko": "양쪽 공백을 제거했을 때 \"#\"으로 시작하고 \"#\"으로 끝나지 않는 항목만 골라 맨 앞 \"#\"을 떼고 대문자 역순으로 묶습니다.",
      "hint_en": "Keep items starting with \"#\" and not ending with \"#\", drop the leading \"#\", uppercase, reverse, and join with \"/\".",
      "targetCode": "raw = [\" #Py \", \"js#\", \" #AI#\", \" #Go \"]\nres = []\nfor x in raw:\n    s = x.strip()\n    if s.startswith(\"#\") and not s.endswith(\"#\"):\n        res.append(s[1:].upper()[::-1])\nprint(\"/\".join(res))",
      "choices": [
        "YP/OG",
        "PY/GO",
        "YP/IA/OG",
        "yp/og"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "YP/OG"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] .find(), .count(), ord/chr 문자 이동과 f-string 복합 서식이 결합된 함수의 출력 결과를 선택해보세요.",
      "prompt_en": "[Predict Output] Select the exact output of decode(\"B-2001\") combining .find(), .count(), ord/chr, and f-string formatting.",
      "hint_ko": "첫 글자 \"B\"에서 \"0\"의 개수(3개)만큼 뒤로 이동한 알파벳(\"E\")과 하이픈 뒤 정수 1000의 천 단위 콤마 서식을 확인하세요.",
      "hint_en": "Shift \"B\" forward by the count of \"0\" (3 -> \"E\"), and format 1000 with a thousands comma.",
      "targetCode": "def decode(tag):\n    p = tag.find(\"-\")\n    ch = chr(ord(tag[0]) + tag.count(\"0\"))\n    num = int(tag[p + 1:])\n    return f\"{ch}:{num:,}\"\n\nprint(decode(\"B-1000\"))",
      "choices": [
        "E:1,000",
        "D:1,000",
        "E:1000",
        "C:1,000"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "E:1,000"
        }
      ]
    }
  ]
};
