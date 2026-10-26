Lv1.
Title_EN: print() & Basic Arithmetic
Title_KO: print() 함수와 기본 사칙연산
Description_EN: Learn to output numbers and perform basic arithmetic operations (+, -, *, /) with parentheses using the print() function.
Description_KO: print() 함수를 사용하여 숫자를 출력하고, 사칙연산(+, -, *, /) 및 괄호 우선순위를 적용하여 계산 결과를 출력하는 방법을 배웁니다.

---

### [블록 모드] 1~5단계: 블록 조립으로 개념 잡기

1.
Guide_KO: 숫자 10을 화면에 출력해보세요.
Guide_EN: Output the number 10 on the screen.
Hint_KO: 도구 상자의 함수 카테고리에서 print() 블록을 꺼내 시작 블록에 연결하고, 안쪽 슬롯에 10을 입력하세요.
Code:
print(10)
Output:
10

2.
Guide_KO: 10 + 5 덧셈식을 계산하여 결과(15)를 출력해보세요.
Guide_EN: Calculate and print the addition result of 10 + 5.
Hint_KO: print() 블록의 입력 슬롯에 10 + 5를 입력하면 파이썬이 덧셈을 계산하여 15를 출력합니다.
Code:
print(10 + 5)
Output:
15

3.
Guide_KO: 곱셈 기호(*)를 사용해 4 * 5를 계산하여 출력해보세요.
Guide_EN: Use the asterisk (*) operator to calculate and print 4 * 5.
Hint_KO: 파이썬에서 곱셈은 키보드의 별표(*) 기호를 사용합니다. 4 * 5를 넣으면 20이 출력됩니다.
Code:
print(4 * 5)
Output:
20

4.
Guide_KO: 10 + 20 / 4를 계산하여 출력해보세요. (곱셈과 나눗셈은 덧셈보다 먼저 계산됩니다)
Guide_EN: Calculate and print 10 + 20 / 4. (Multiplication and division evaluate before addition)
Hint_KO: 수학의 사칙연산 규칙과 동일하게 20 / 4(5.0)가 먼저 계산된 후 10이 더해져 15.0이 출력됩니다.
Code:
print(10 + 20 / 4)
Output:
15.0

5.
Guide_KO: (10 + 20) * 3을 계산하여 출력해보세요. (괄호 안의 식이 가장 먼저 계산됩니다)
Guide_EN: Calculate and print (10 + 20) * 3. (Expressions inside parentheses evaluate first)
Hint_KO: 괄호 ()로 묶은 10 + 20(= 30)이 가장 먼저 계산되고, 그 결과에 3을 곱해 90이 출력됩니다.
Code:
print((10 + 20) * 3)
Output:
90

---

### [타이핑 모드] 6~10단계: 1~5번 유형의 문제형 반복 (빈칸 채우기 & 오타 수정)

6. [빈칸 채우기]
Guide_KO: 빈칸을 채워 숫자 77을 화면에 출력해보세요.
Guide_EN: Fill in the blank to print the number 77.
Hint_KO: print() 함수의 괄호 안에 출력하고 싶은 두 자리 숫자 77을 입력하세요.
Template:
print(§§)
Target:
print(77)
Output:
77

7. [빈칸 채우기]
Guide_KO: 빈칸을 채워 20 + 30의 덧셈 결과를 출력해보세요.
Guide_EN: Fill in the blank to print the addition result of 20 + 30.
Hint_KO: 더하기 기호(+) 뒤에 더할 숫자 30을 입력하세요.
Template:
print(20 + §§)
Target:
print(20 + 30)
Output:
50

8. [오타 수정]
Guide_KO: 수학 기호 x 대신 파이썬 곱셈 기호(*)를 사용하여 6 * 7의 결과를 출력해보세요.
Guide_EN: Fix the typo using the Python multiplication operator (*) instead of x to print 6 * 7.
Hint_KO: 키보드의 별표(*) 기호가 파이썬의 곱셈 연산자입니다. 알파벳 x를 *로 고쳐보세요.
Template:
print(6 x 7)
Target:
print(6 * 7)
Output:
42

9. [빈칸 채우기]
Guide_KO: 빈칸에 나눗셈 기호(/)를 넣어 50 + 100 / 2의 계산 결과(100.0)를 출력해보세요.
Guide_EN: Fill in the slash (/) to print the result of 50 + 100 / 2 (100.0).
Hint_KO: 빈칸에 슬래시(/)를 입력하면 100 / 2(50.0)가 먼저 계산된 후 50이 더해집니다.
Template:
print(50 + 100 § 2)
Target:
print(50 + 100 / 2)
Output:
100.0

10. [빈칸 채우기]
Guide_KO: 빈칸에 괄호 ()를 채워 2 + 3을 먼저 계산한 뒤 4를 곱한 결과(20)를 출력해보세요.
Guide_EN: Fill in the parentheses () so that 2 + 3 evaluates first before multiplying by 4.
Hint_KO: 괄호 (와 ) 사이에 2 + 3을 감싸면 덧셈이 곱셈보다 먼저 계산되어 20이 출력됩니다.
Template:
print(§2 + 3§ * 4)
Target:
print((2 + 3) * 4)
Output:
20
