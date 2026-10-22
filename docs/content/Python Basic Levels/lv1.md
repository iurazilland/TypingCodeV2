Lv1.
Title_EN: The First Step (Print)
Title_KO: 첫 번째 단계 (Print)
Description_EN: Learn the basics of outputting text and numbers to the screen using the print() function.
Description_KO: 파이썬에서 글자와 숫자를 화면에 출력하는 가장 기본적이고 중요한 방법을 배웁니다.

1. 
Guide_EN: Display text with print() and double quotes.
Guide_KO: print()와 큰따옴표로 텍스트를 출력합니다.
Visual: L1S1_PrintVisualizer
Template_EN:
print("Hello, World!")
print("Welcome to Python.")
print("Typing practice starts now.")

Template_KO:
print("안녕하세요!")
print("파이썬의 세계에 오신 것을 환영합니다.")
print("지금부터 타자 연습을 시작합니다.")

2. 
Guide_EN: Join multiple items with commas; spaces auto-insert.
Guide_KO: 쉼표로 여러 데이터를 연결하면 공백이 자동 삽입됩니다.
Visual: L1S2_CommaVisualizer
Template_EN:
print("Apple", "Banana", "Cherry")
print("Python", "is great")
print("Result:", "Success!")
Template_KO:
print("사과", "바나나", "체리")
print("파이썬은", "정말 멋져요")
print("결과:", "성공!")

3. 
Guide_EN: Use # for notes to prevent SyntaxErrors.
Guide_KO: 주석(메모)은 에러를 막기 위해 #을 사용하여야 합니다.
Visual: L1S3_CommentVisualizer
Template_EN:
# This is a comment
print("Hello, World!")
# Comments are ignored
Template_KO:
# 이것은 주석입니다
print("안녕하세요!")
# 주석은 실행되지 않아요

4. 
Guide_EN: \n makes a newline, \t makes a tab space.
Guide_KO: \n은 줄바꿈, \t는 탭 간격을 만듭니다.
Visual: L1S4_EscapeVisualizer
Template_EN:
print("Line 1\nLine 2")
print("Column 1\tColumn 2")
print("Special\nNewline\tTab")
Template_KO:
print("첫 번째 줄\n두 번째 줄")
print("1번 열\t2번 열")
print("특수문자\n줄바꿈\t탭")

5. 
Guide_EN: Use print() to create a blank line.
Guide_KO: print()를 사용하여 빈 줄을 만듭니다.
Template_EN:
print("Part 1")
print()
print("Part 2")
print("Done.")
Template_KO:
print("1부")
print()
print("2부")
print("완료.")

6. 
Guide_EN: Use sep to change the separator (default is a space).
Guide_KO: sep은 항목 사이의 구분자를 변경합니다. 기본값은 공백입니다.
Visual: L1S6_SeparatorVisualizer
Template_EN:
print("Py", "thon", sep="")
print("010", "1234", "5678", sep="-")
print("A", "B", "C", sep=",")
Template_KO:
print("파이", "썬", sep="")
print("010", "1234", "5678", sep="-")
print("가", "나", "다", sep=",")

7. 
Guide_EN: Use end to specify the trailing character (default is \n).
Guide_KO: end는 print함수 끝에 올 문자를 지정합니다. 기본값은 줄바꿈(\n)입니다.
Visual: L1S7_EndVisualizer
Template_EN:
print("Wait", end="...")
print("Done!")
print("Loading", end=" ")
print("Complete")
Template_KO:
print("잠시만요", end="...")
print("완료!")
print("로딩 중", end=" ")
print("성공")

8. 
Guide_EN: Using identical quotes inside will cause an error.
Guide_KO: 같은 형식의 따옴표를 내부에 사용하면 에러가 발생합니다.
Visual: L1S8_QuotesVisualizer
Template_EN:
print("Double quotes")
print('Single quotes')
print("He said, 'Hi'")
print('She said, "Hello"')
Template_KO:
print("큰따옴표")
print('작은따옴표')
print("그가 말했습니다, '안녕'")
print('그녀가 말했습니다, "안녕하세요"')

9. 
Guide_EN: Put a backslash (\) before special characters to print them.
Guide_KO: 특수문자를 출력할 땐 문자 앞에 역슬래시(\)를 붙여줍니다.
Template_EN:
print("I\'m a boy")
print("He said, \"Hi\"")
print("Path: C:\\Users\\Name")
print("Symbol: \\ and \' and \"")
Template_KO:
print("I\'m a boy")
print("그가 말했습니다, \"안녕\"")
print("경로: C:\\Users\\Name")
print("기호들: \\ 그리고 \' 그리고 \"")

10. 
Guide_EN: Numbers and math inside print() auto-calculate.
Guide_KO: print() 안의 숫자와 수식은 자동 계산됩니다.
Template_EN:
print(10, 20, 30)
print(15 + 5)
print(100 - 45)
print(10 / 4, 8 * 9)
Template_KO:
print(10, 20, 30)
print(15 + 5)
print(100 - 45)
print(10 / 4, 8 * 9)

11. 
Guide_EN: Use a comma to print text and calculation results together.
Guide_KO: 쉼표를 사용해 텍스트와 수식 계산 결과를 한 번에 출력해 보세요.
Template_EN:
print("15 + 5 =", 15 + 5)
print("100 - 45 =", 100 - 45)
print("8 * 9 =", 8 * 9)
Template_KO:
print("15 + 5 =", 15 + 5)
print("100 - 45 =", 100 - 45)
print("8 * 9 =", 8 * 9)

12. 
Guide_EN: Use + to join strings and * to repeat them.
Guide_KO: +는 문자열을 연결하고, *는 숫자만큼 반복합니다.
Visual: L1S12_StringMathVisualizer
Template_EN:
print("Py" + "thon")
print("Python" * 3)
print("=" * 20)
print("Loading" + "..." * 3)
Template_KO:
print("파이" + "썬")
print("파이썬" * 3)
print("=" * 20)
print("로딩 중" + "..." * 3)

13. 
Guide_EN: Combine strings and math results in one line.
Guide_KO: 문자열과 계산 결과를 한 줄에 결합하여 출력합니다.
Template_EN:
print("10 + 20 =", 10 + 20)
print("Score:", 100 + 50)
print("Level:", 1, "Status: OK")
print("Total Items:", 5 * 3, "pcs")
Template_KO:
print("10 + 20 =", 10 + 20)
print("점수:", 100 + 50)
print("레벨:", 1, "상태: 정상")
print("전체 아이템:", 5 * 3, "개")

14. 
Guide_EN: Combine sep and end for precise text layout.
Guide_KO: sep과 end를 합쳐 텍스트 레이아웃을 정밀 제어합니다.
Template_EN:
print("A", "B", sep=",", end="!")
print()
print("Py", "thon", sep=".", end=" ")
print("is fun")
Template_KO:
print("가", "나", sep=",", end="!")
print()
print("파이", "썬", sep=".", end=" ")
print("은 즐거워")

15. 
Guide_EN: Triple quotes (""") print text exactly as you format it.
Guide_KO: 삼중 따옴표(""")는 입력한 형식대로 출력합니다.
Template_EN:
print("""[ MENU ]
1. Start
2. Option
3. Exit""")
print('''
-------
Success
-------
''')
Template_KO:
print("""[ 메뉴 ]
1. 시작
2. 옵션
3. 종료""")
print('''
-------
성공
-------
''')

16. 
Guide_EN: Use symbols in sep to visualize flow or menus.
Guide_KO: sep에 기호를 넣어 흐름이나 메뉴를 시각화합니다.
Template_EN:
print("Login", "Connect", "Success", sep=" >> ")
print("Step 1", "Step 2", "Step 3", sep=" -> ")
print("Loading", "Finish", sep=" ... ")
print("Red", "Green", "Blue", sep=" | ")
Template_KO:
print("로그인", "접속 중", "성공", sep=" >> ")
print("1단계", "2단계", "3단계", sep=" -> ")
print("로딩 중", "완료", sep=" ... ")
print("빨강", "초록", "파랑", sep=" | ")

17. 
Guide_EN: Mix text and calculations in one print.
Guide_KO: 텍스트와 계산을 한 print에 섞어 출력합니다.
Template_EN:
print("Price:", 1000, "Won")
print("Total Apples:", 10 + 20, "pcs")
print("Power Left:", 100 - 30, "%")
print("Goal:", 7 * 7, "score")
Template_KO:
print("가격:", 1000, "원")
print("전체 사과:", 10 + 20, "개")
print("남은 에너지:", 100 - 30, "%")
print("목표 점수:", 7 * 7, "점")

18. 
Guide_EN: Use \t to align data in table-like columns.
Guide_KO: \t로 데이터를 표처럼 정렬합니다.
Template_EN:
print("NAME\tRANK\tSCORE")
print("Alice\tS\t9900")
print("Bob\tA\t8800")
print("John\tB\t7700")
Template_KO:
print("이름\t등급\t점수")
print("Alice\tS\t9900")
print("Bob\tA\t8800")
print("John\tB\t7700")

19. 
Guide_EN: Design text borders with + and * operators.
Guide_KO: +와 * 연산자로 텍스트 테두리를 디자인합니다.
Template_EN:
print("+" + "-" * 18 + "+")
print("|  System Online   |")
print("+" + "-" * 18 + "+")
print("Copyright (c) 2026")
Template_KO:
print("+" + "-" * 18 + "+")
print("|  시스템 가동 중   |")
print("+" + "-" * 18 + "+")
print("저작권 (c) 2026")

20. 
Guide_EN: Review all Level 1 output techniques.
Guide_KO: 1레벨의 모든 출력 기법을 총복습합니다.
Template_EN:
print("Level 1 Success!", end="\n" + "=" * 16 + "\n")
print("Language:", "Python", sep=" - ")
print("Progress:", "####", sep=" ", end=" 100%\n")
print("Next Goal: Level 2")
Template_KO:
print("1레벨 성공!", end="\n" + "=" * 16 + "\n")
print("사용 언어:", "파이썬", sep=" - ")
print("진행도:", "####", sep=" ", end=" 100%\n")
print("다음 목표: 2레벨")
