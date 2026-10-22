Lv5. [Challenge]
Title_EN: Python Basics Mastery
Title_KO: 파이썬 기초 종합 평가
Description_EN: A comprehensive test covering Print, Variables, Booleans, and Input operations from Level 1 to 4.
Description_KO: Lv.1부터 Lv.4까지 배운 출력, 변수, 불리언, 입력 처리를 종합적으로 테스트합니다.

### Q1. [Blank] Custom Separator / 구분자 출력
Guide_EN: Fill in the blank to print "Ready->Set->Go".\nThe 'sep' option specifies the value between strings.
Guide_KO: 빈칸을 채워 "Ready->Set->Go"를 출력하세요.\nsep 옵션은 문자열 사이의 값을 지정할 때 사용합니다.
Template:
print("Ready", "Set", "Go", sep="^^")
TestCases:
Input: (None)
Output: Ready->Set->Go

### Q2. [Blank] Boolean Logic / 논리 연산
Guide_EN: Fill in the blank to check if the 'level' variable is between 1 and 10. \nIt prints a Boolean (True, False) value.
Guide_KO: 빈칸을 채워 `level` 변수가 1 이상 10 이하의 범위에 있는지 확인하세요.\n두 조건을 모두 만족해야 하므로 적절한 논리 연산자가 필요합니다.
Template:
level = 5
is_valid = level >= 1 ^^^ level <= 10
print(is_valid)
TestCases:
Input: (None)
Output: True

### Q3. [Blank] Check Type / 자료형 확인
Guide_EN: Fill in the blank to identify the data type of the 'pi' variable. \nUse the function that identifies the Type of a variable.
Guide_KO: 빈칸을 채워 `pi` 변수의 자료형을 출력하세요.\n변수의 데이터 타입을 확인해주는 내장 함수를 사용합니다.
Template:
pi = 3.14
print(^^^^(pi))
TestCases:
Input: (None)
Output: <class 'float'>

### Q4. [Fix] String Addition Bug / 문자열 덧셈 버그 수정
Guide_EN: Fix the code to print the sum of the numbers. \nType conversion of the input string is required.
Guide_KO: 틀린 곳을 수정하여 숫자의 덧셈 결과를 출력하도록 하세요.\ninput()으로 받은 값은 문자열이므로 계산을 위해 정수형(int) 변환이 필요합니다.
Template:
a = str(input())
print(a + a)
TestCases:
Input: 10
Output: 20

### Q5. [Fix] Logic Error / 논리 연산 오류 수정
Guide_EN: Fix the code to make it True. \nWatch out for the difference between 'equal' and 'not equal' symbols.
Guide_KO: 틀린 곳을 수정하여 결과가 True가 되도록 로직을 고쳐보세요.\n'같다(==)'와 '다르다(!=)' 기호의 의미 차이에 주의해야 합니다.
Template:
code = "B"
is_valid = code != "B"
print(is_valid)
TestCases:
Input: (None)
Output: True

### Q6. [Fix] String Variables / 문자열 변수
Guide_EN: Fix the code to assign the first word 'a' of the split input to 'result'. \nThe assignment statement has the variable and value reversed.
Guide_KO: 틀린 곳을 수정하여 분리된 입력값 중 첫 번째 단어 `a`를 `result` 변수에 대입되도록 하세요.\n대입문의 좌변과 우변의 변수 위치가 서로 바뀌어 있습니다.
Template:
a, b = input().split()
a = result
print(result)
TestCases:
Input: Hello World
Output: Hello
Input: Python Language
Output: Python
Input: Data Science
Output: Data
Input: Typing Code
Output: Typing
Input: Open Source
Output: Open
Input: Coffee Time
Output: Coffee
Input: Blue Sky
Output: Blue
Input: Fast Learner
Output: Fast
Input: Green Tree
Output: Green
Input: Simple Life
Output: Simple

### Q7. [Line] String Multiplication / 문자열 반복
Guide_EN: Write a one-line code to print 10 hyphens ("-"). \nStrings can be printed repeatedly with multiplication (*).
Guide_KO: 한 줄의 코드를 작성하여 하이픈("-") 10개를 출력하세요.\n문자열은 곱하기(*) 연산자를 사용해 원하는 횟수만큼 반복할 수 있습니다.
Template:

print(line)
TestCases:
Input: (None)
Output: ----------

### Q8. [Line] Multi Assignment / 다중 할당
Guide_EN: Write a one-line code to assign 100, 200, and 300 to variables a, b, and c respectively. \nYou can put multiple values into variables using commas (,).
Guide_KO: 한 줄의 코드를 작성하여 변수 a, b, c에 각각 100, 200, 300을 할당하세요.\n콤마(,)를 사용하면 여러 값을 한 번에 여러 변수에 넣을 수 있습니다.
Template:

print(a, b, c)
TestCases:
Input: (None)
Output: 100 200 300

### Q9. [Full Code] Simple Calculator / 간단한 계산기
Guide_EN: Write code to add 10 to the number obtained via input() and print it. \nDon't forget the process of converting the string to a number.
Guide_KO: 코드를 작성하여 입력받은 숫자 값에 10을 더한 결과를 출력하세요.\n문자열 상태로는 계산이 불가능하므로 반드시 숫자로 형변환해야 합니다.
Template:
n = int(input())

TestCases:
Input: 50
Output: 60
Input: 0
Output: 10
Input: -10
Output: 0
Input: 100
Output: 110
Input: -5
Output: 5
Input: 999
Output: 1009
Input: 1
Output: 11
Input: 25
Output: 35
Input: -20
Output: -10
Input: 1234
Output: 1244

### Q10. [Full Code] User Info Parser / 유저 정보 파싱
Guide_EN: Write code to receive a character via input() and repeat it 3 times for output. \nMultiplying a string by a number repeats it.
Guide_KO: 코드를 작성하여 문자를 입력받아 해당 문자를 3회 반복해 출력하세요.\n문자열에 숫자를 곱하면 해당 횟수만큼 문자가 반복되어 생성됩니다.
Template:
text = input()

TestCases:
Input: Great
Output: GreatGreatGreat
Input: a
Output: aaa
Input: 123
Output: 123123123
Input: Hi
Output: HiHiHi
Input: !
Output: !!!
Input: Python
Output: PythonPythonPython
Input: AB
Output: ABABAB
Input: Test
Output: TestTestTest
Input: Ok
Output: OkOkOk
Input: Wow
Output: WowWowWow
