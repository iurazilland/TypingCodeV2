Lv7.
Title_EN: Type Casting & Data Types
Title_KO: 타입 캐스팅과 자료형
Description_EN: Learn useful tools that help with math like rounding and absolute values.
Description_KO: 소수점 반올림이나 절대값 구하기 등 수학 계산을 도와주는 편리한 도구들을 익힙니다.

1. 
Guide_EN: str() converts a number to text for joining.
Guide_KO: str()는 숫자를 텍스트로 변환하여 문자열과 연결할 수 있게 합니다.
Visual: L7S1_MathCastingVisualizer
Template_EN:
age = 25
year = 2024
print("Age: " + str(age))
print("Year: " + str(year))
Template_KO:
age = 25
year = 2024
print("나이: " + str(age))
print("연도: " + str(year))

2. 
Guide_EN: int() converts a string to an integer for math.
Guide_KO: int()는 문자열을 정수로 변환하여 계산이 가능하게 합니다.
Template_EN:
price1 = "5000"
price2 = "2500"
print("Total:", int(price1) + int(price2))
Template_KO:
price1 = "5000"
price2 = "2500"
print("총합:", int(price1) + int(price2))

3. 
Guide_EN: float() converts a string to a decimal point number.
Guide_KO: float()는 문자열을 소수점이 있는 실수로 변환합니다.
Template_EN:
rate = "0.75"
bonus = "1.5"
print("Rate:", float(rate))
print("Bonus:", float(bonus))
Template_KO:
rate = "0.75"
bonus = "1.5"
print("비율:", float(rate))
print("보너스:", float(bonus))

4. 
Guide_EN: Use int() to truncate decimal parts from a float.
Guide_KO: int()를 사용하여 실수의 소수점 아래 자리를 버릴 수 있습니다.
Template_EN:
price = 1250.99
discount = 10.5
print("Price:", int(price))
print("Discount:", int(discount))
Template_KO:
price = 1250.99
discount = 10.5
print("가격:", int(price))
print("할인:", int(discount))

5. 
Guide_EN: bool() converts any value to True or False.
Guide_KO: bool()은 어떤 값이든 참(True) 또는 거짓(False)으로 변환합니다.
Template_EN:
print(bool(1))
print(bool(0))
print(bool(99))
Template_KO:
print(bool(1))
print(bool(0))
print(bool(99))

6. 
Guide_EN: Any non-zero number becomes True when cast to bool.
Guide_KO: 0이 아닌 모든 숫자는 불리언으로 변환 시 True가 됩니다.
Template_EN:
print(bool(123))
print(bool(-5))
print(bool(0))
Template_KO:
print(bool(123))
print(bool(-5))
print(bool(0))

7. 
Guide_EN: Empty strings are False, non-empty strings are True.
Guide_KO: 빈 문자열은 False, 내용이 있는 문자열은 True가 됩니다.
Template_EN:
print(bool(""))
print(bool("Hello"))
print(bool(" "))
Template_KO:
print(bool(""))
print(bool("안녕"))
print(bool(" "))

8. 
Guide_EN: Convert number to string to print with labels.
Guide_KO: 숫자를 문자열로 변환하여 라벨과 함께 출력합니다.
Template_EN:
score = 100
level = 5
print("Score: " + str(score))
print("Level: " + str(level))
Template_KO:
score = 100
level = 5
print("점수: " + str(score))
print("레벨: " + str(level))

9. 
Guide_EN: float() adds .0 to an integer value.
Guide_KO: float()는 정수값 뒤에 .0을 붙여 실수로 만듭니다.
Template_EN:
count1 = 10
count2 = 5
print(float(count1))
print(float(count2))
Template_KO:
count1 = 10
count2 = 5
print(float(count1))
print(float(count2))

10. 
Guide_EN: Use int() for division results to get a whole number.
Guide_KO: 나눗셈 결과를 int()로 감싸면 정수 부분만 남습니다.
Template_EN:
print(int(10 / 3))
print(int(20 / 3))
print(int(100 / 9))
Template_KO:
print(int(10 / 3))
print(int(20 / 3))
print(int(100 / 9))

11. 
Guide_EN: input() always returns a string; convert it to use as a number.
Guide_KO: input()은 항상 문자열을 반환하므로 숫자로 쓰려면 변환해야 합니다.
Template_EN:
val1 = "100"
val2 = "200"
print(int(val1) + 50)
print(int(val2) + 50)
Template_KO:
val1 = "100"
val2 = "200"
print(int(val1) + 50)
print(int(val2) + 50)

12. 
Guide_EN: Combining multiple types in one print statement.
Guide_KO: 한 출력문 안에서 여러 타입을 조합하여 출력합니다.
Template_EN:
name = "Alice"
age = 20
print(name + " is " + str(age))
Template_KO:
name = "엘리스"
age = 20
print(name + "는 " + str(age) + "살")

13. 
Guide_EN: str() is essential for concatenating with string variables.
Guide_KO: 문자열 변수와 합칠 때 str() 변환은 필수입니다.
Template_EN:
temp = 25.5
humidity = 60.0
print("Temp: " + str(temp))
print("Humid: " + str(humidity))
Template_KO:
temp = 25.5
humidity = 60.0
print("온도: " + str(temp))
print("습도: " + str(humidity))

14. 
Guide_EN: Convert a decimal string to an integer by casting to float first.
Guide_KO: 소수점 문자열을 정수로 바꾸려면 float로 먼저 변환해야 합니다.
Template_EN:
val = "12.5"
print(int(float(val)))
Template_KO:
val = "12.5"
print(int(float(val)))

15. 
Guide_EN: float() can handle strings with scientific notation.
Guide_KO: float()는 지수 표기법(e)이 포함된 문자열도 처리할 수 있습니다.
Template_EN:
val1 = "1.2e3"
val2 = "5e-2"
print(float(val1))
print(float(val2))
Template_KO:
val1 = "1.2e3"
val2 = "5e-2"
print(float(val1))
print(float(val2))

16. 
Guide_EN: bool(None) always returns False.
Guide_KO: bool(None)은 항상 False를 반환합니다.
Template_EN:
print(bool(None))
print(bool(0))
print(bool(""))
Template_KO:
print(bool(None))
print(bool(0))
print(bool(""))

17. 
Guide_EN: Automatic casting happens in some math operations.
Guide_KO: 일부 수학 연산에서는 자동으로 형변환이 일어납니다.
Template_EN:
print(10 + 5.0)
print(20 - 3.5)
print(5 * 2.0)
Template_KO:
print(10 + 5.0)
print(20 - 3.5)
print(5 * 2.0)

18. 
Guide_EN: Use type() to check the data type after casting.
Guide_KO: 형변환 후 type()을 사용하여 데이터 타입을 확인합니다.
Template_EN:
val1 = int("50")
val2 = float("3.14")
print(type(val1))
print(type(val2))
Template_KO:
val1 = int("50")
val2 = float("3.14")
print(type(val1))
print(type(val2))

19. 
Guide_EN: Formatting floats into strings for clean output.
Guide_KO: 실수를 문자열로 변환하여 깔끔한 출력 형식을 만듭니다.
Template_EN:
pi = 3.14159
e = 2.71828
print("PI: " + str(round(pi, 2)))
print("E: " + str(round(e, 2)))
Template_KO:
pi = 3.14159
e = 2.71828
print("원주율: " + str(round(pi, 2)))
print("자연상수: " + str(round(e, 2)))

20. 
Guide_EN: Complete a data summary using all casting types.
Guide_KO: 모든 형변환 타입을 활용하여 데이터 요약을 완성합니다.
Template_EN:
id_num = 101
active = True
print("ID:" + str(id_num) + " / Active:" + str(active))
Template_KO:
id_num = 101
active = True
print("번호:" + str(id_num) + " / 활성:" + str(active))
