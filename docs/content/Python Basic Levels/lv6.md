Lv6.
Title_EN: Advanced Arithmetic & Shortcuts
Title_KO: 고급 산술 연산과 복합 대입
Description_EN: Learn various ways to make calculations smarter and faster.
Description_KO: 더하기, 빼기 같은 계산을 더 스마트하고 빠르게 하는 다양한 방법을 배웁니다.

1. 
Guide_EN: // operator returns only the integer quotient.
Guide_KO: // 연산자는 나눗셈의 결과에서 소수점을 버리고 '몫'만 구합니다.
Visual: L6S1_AdvancedArithmeticVisualizer
Template_EN:
print(10 // 3)
print(25 // 4)
print(100 // 9)
Template_KO:
print(10 // 3)
print(25 // 4)
print(100 // 9)

2. 
Guide_EN: % operator returns the remainder of a division.
Guide_KO: % 연산자는 나눗셈을 하고 남은 '나머지'를 구합니다.
Template_EN:
print(10 % 3)
print(25 % 4)
print(100 % 9)
Template_KO:
print(10 % 3)
print(25 % 4)
print(100 % 9)

3. 
Guide_EN: ** operator calculates the power of a number.
Guide_KO: ** 연산자는 앞의 숫자를 뒤의 숫자만큼 '거듭제곱'합니다.
Template_EN:
print(2 ** 3)
print(5 ** 2)
print(10 ** 4)
Template_KO:
print(2 ** 3)
print(5 ** 2)
print(10 ** 4)

4. 
Guide_EN: Use modulo 2 to check if a number is even or odd.
Guide_KO: 2로 나눈 나머지가 0이면 짝수, 1이면 홀수임을 이용합니다.
Template_EN:
print("7 % 2 =", 7 % 2)
print("10 % 2 =", 10 % 2)
print("15 % 2 =", 15 % 2)
Template_KO:
print("7 % 2 =", 7 % 2)
print("10 % 2 =", 10 % 2)
print("15 % 2 =", 15 % 2)

5. 
Guide_EN: Combine floor division and modulo to convert time.
Guide_KO: //와 %를 사용하여 초 단위를 분과 초로 나눌 수 있습니다.
Template_EN:
seconds = 130
print("Min:", seconds // 60)
print("Sec:", seconds % 60)
Template_KO:
seconds = 130
print("분:", seconds // 60)
print("초:", seconds % 60)

6. 
Guide_EN: Modulo 10 extracts the last digit of a number.
Guide_KO: 10으로 나눈 나머지를 구하면 숫자의 마지막 자릿수만 뽑아낼 수 있습니다.
Template_EN:
num = 1234
print("Last digit:", num % 10)
Template_KO:
num = 1234
print("마지막 자리:", num % 10)

7. 
Guide_EN: Calculate area (side squared) and volume (side cubed).
Guide_KO: 변의 길이를 2제곱(** 2)하면 넓이, 3제곱(** 3)하면 부피가 됩니다.
Template_EN:
side = 5
print("Area:", side ** 2)
print("Volume:", side ** 3)
Template_KO:
side = 5
print("넓이:", side ** 2)
print("부피:", side ** 3)

8. 
Guide_EN: Use ** 0.5 to calculate the square root.
Guide_KO: 0.5제곱(** 0.5)을 하면 제곱근(루트)을 구할 수 있습니다.
Template_EN:
print(16 ** 0.5)
print(25 ** 0.5)
print(100 ** 0.5)
Template_KO:
print(16 ** 0.5)
print(25 ** 0.5)
print(100 ** 0.5)

9. 
Guide_EN: Use % to check cycles, like the start of a century.
Guide_KO: % 100이 0인지 확인하여 세기가 바뀌는 해인지 판별합니다.
Template_EN:
year = 2000
print("Start of century?", year % 100 == 0)
Template_KO:
year = 2000
print("세기 시작?", year % 100 == 0)

10. 
Guide_EN: Combine all advanced arithmetic in one logic.
Guide_KO: 지금까지 배운 세 가지 연산자를 혼합하여 계산해 봅니다.
Template_EN:
result = (10 ** 2) // 3 % 5
print("Result:", result)
Template_KO:
result = (10 ** 2) // 3 % 5
print("결과:", result)

11. 
Guide_EN: += adds a value to the current variable.
Guide_KO: += 연산자는 변수의 현재 값에 새로운 값을 더해줍니다.
Visual: L6S11_AugmentedAssignmentVisualizer
Template_EN:
score = 100
score += 50
print("Score:", score)
Template_KO:
score = 100
score += 50
print("점수:", score)

12. 
Guide_EN: -= subtracts a value from the current variable.
Guide_KO: -= 연산자는 변수의 현재 값에서 새로운 값을 뺍니다.
Template_EN:
hp = 100
hp -= 20
print("HP:", hp)
Template_KO:
hp = 100
hp -= 20
print("체력:", hp)

13. 
Guide_EN: *= multiplies the variable by a value.
Guide_KO: *= 연산자는 변수의 현재 값에 새로운 값을 곱합니다.
Template_EN:
price = 500
price *= 3
print("Total Price:", price)
Template_KO:
price = 500
price *= 3
print("총 가격:", price)

14. 
Guide_EN: /= divides the variable by a value.
Guide_KO: /= 연산자는 변수의 현재 값을 새로운 값으로 나눕니다.
Template_EN:
total = 100
total /= 2
print("Half:", total)
Template_KO:
total = 100
total /= 2
print("절반:", total)

15. 
Guide_EN: //= updates the variable with the quotient.
Guide_KO: //= 연산자는 변수의 값을 몫으로 즉시 업데이트합니다.
Template_EN:
num = 123
num //= 10
print("Shortened:", num)
Template_KO:
num = 123
num //= 10
print("줄어든 숫자:", num)

16. 
Guide_EN: %= updates the variable with the remainder.
Guide_KO: %= 연산자는 변수의 값을 나머지로 업데이트합니다.
Template_EN:
days = 15
days %= 7
print("Leftover days:", days)
Template_KO:
days = 15
days %= 7
print("남은 일수:", days)

17. 
Guide_EN: **= updates the variable with the power.
Guide_KO: **= 연산자는 변수의 값을 거듭제곱한 결과로 바꿉니다.
Template_EN:
power = 2
power **= 3
print("Final Power:", power)
Template_KO:
power = 2
power **= 3
print("최종 거듭제곱:", power)

18. 
Guide_EN: Update scores using multiple shortcut operators.
Guide_KO: 여러 복합 대입 연산자를 사용하여 점수를 관리해 봅니다.
Template_EN:
points = 10
points += 5
points *= 2
print("Total Points:", points)
Template_KO:
points = 10
points += 5
points *= 2
print("최종 포인트:", points)

19. 
Guide_EN: Use shortcuts to calculate a shopping discount.
Guide_KO: 복합 대입 연산자를 활용하여 쇼핑 할인 로직을 구현합니다.
Template_EN:
bill = 50000
bill -= 5000
bill /= 2
print("Final Bill:", bill)
Template_KO:
bill = 50000
bill -= 5000
bill /= 2
print("최종 금액:", bill)

20. 
Guide_EN: Final challenge: power then shortcut assignments.
Guide_KO: [종합] 거듭제곱 연산 후 복합 대입으로 결과를 완성합니다.
Template_EN:
n = 5
n **= 2
n //= 3
n %= 4
print("Final Answer:", n)
Template_KO:
n = 5
n **= 2
n //= 3
n %= 4
print("최종 정답:", n)
