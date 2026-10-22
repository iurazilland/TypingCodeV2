Lv3.
Title_EN: Numbers, Strings & Booleans
Title_KO: 숫자, 문자열과 불리언
Description_EN: Distinguish between data types and learn to judge truth with logic.
Description_KO: 글자, 숫자 등 데이터의 종류를 구별하고, 참과 거짓을 판단하는 방법을 배웁니다.

1. 
Guide_EN: Numbers in quotes are strings, not integers.
Guide_KO: 따옴표 안에 있는 숫자는 정수가 아닌 문자로 저장됩니다.
Visual: L3S1_TypeDifferenceVisualizer
Template_EN:
age = 25
age_text = "25"
print(age)
print(age_text)
Template_KO:
age = 25
age_text = "25"
print(age)
print(age_text)

2. 
Guide_EN: Strings join with +, while integers are added together.
Guide_KO: 문자열은 +로 이어붙여지고, 정수는 산술적으로 더해집니다.
Template_EN:
print("10" + "20")
print(10 + 20)
print("5" + "5")
Template_KO:
print("10" + "20")
print(10 + 20)
print("5" + "5")

3. 
Guide_EN: Check if a number is an 'int' or a 'str' using type().
Guide_KO: type()을 사용해 숫자가 정수(int)인지 문자열(str)인지 확인합니다.
Template_EN:
n1 = 123
n2 = "123"
print(type(n1))
print(type(n2))
Template_KO:
n1 = 123
n2 = "123"
print(type(n1))
print(type(n2))

4. 
Guide_EN: Strings can be repeated with *, while integers are multiplied.
Guide_KO: 문자열에 *를 쓰면 반복되고, 정수에 쓰면 곱해집니다.
Template_EN:
print("7" * 3)
print(7 * 3)
print("A" * 5)
Template_KO:
print("7" * 3)
print(7 * 3)
print("A" * 5)

5. 
Guide_EN: Variable reassignment can change the data type.
Guide_KO: 변수에 다른 타입의 값을 넣으면 변수의 타입이 즉시 변경됩니다.
Template_EN:
data = 777
print(type(data))
data = "Lucky"
print(type(data))
Template_KO:
data = 777
print(type(data))
data = "럭키"
print(type(data))

6. 
Guide_EN: len() works on string numbers, but not on integers.
Guide_KO: len()은 문자형 숫자에는 동작하지만 정수에는 동작하지 않습니다.
Template_EN:
print(len("1000"))
word = "Python"
print(len(word))
Template_KO:
print(len("1000"))
word = "파이썬"
print(len(word))

7. 
Guide_EN: Comparing a string "10" and integer 10 results in False.
Guide_KO: 문자열 "10"과 정수 10을 비교하면 결과는 거짓(False)입니다.
Template_EN:
print("10" == 10)
print(10 == 10)
print("10" == "10")
Template_KO:
print("10" == 10)
print(10 == 10)
print("10" == "10")

8. 
Guide_EN: Booleans (True, False) are essential for making decisions.
Guide_KO: 불리언(True, False)은 프로그래밍의 논리 판단에 필수적입니다.
Visual: L3S8_LogicOverviewVisualizer
Template_EN:
is_ready = True
is_over = False
print(is_ready)
print(is_over)
Template_KO:
is_ready = True
is_over = False
print(is_ready)
print(is_over)

9. 
Guide_EN: Use == and != to compare if values are equal or different.
Guide_KO: ==와 !=를 사용하여 값이 같은지 혹은 다른지 비교합니다.
Template_EN:
print(10 == 10)
print("Py" == "py")
print(5 != 10)
Template_KO:
print(10 == 10)
print("Py" == "py")
print(5 != 10)

10. 
Guide_EN: Use comparison operators to check values and sizes.
Guide_KO: 비교 연산자를 사용하여 값의 크기와 상태를 확인합니다.
Template_EN:
hp = 40
print(hp < 50)
print(hp >= 100)
Template_KO:
hp = 40
print(hp < 50)
print(hp >= 100)

11. 
Guide_EN: Non-zero numbers and content-filled strings are True.
Guide_KO: 0이 아닌 숫자나 내용이 있는 문자열은 True로 평가됩니다.
Template_EN:
print(bool(1))
print(bool(0))
print(bool("Hi"))
print(bool(""))
Template_KO:
print(bool(1))
print(bool(0))
print(bool("안녕"))
print(bool(""))

12. 
Guide_EN: not flips a Boolean: True becomes False and vice versa.
Guide_KO: not은 불리언 값을 정반대로 뒤집어 줍니다.
Template_EN:
is_alive = True
print(not is_alive)
print(not False)
Template_KO:
is_alive = True
print(not is_alive)
print(not False)

13. 
Guide_EN: and is True only if both conditions are met.
Guide_KO: and는 양쪽 조건이 모두 참일 때만 결과가 참이 됩니다.
Visual: L3S13_AndOperatorVisualizer
Template_EN:
print(True and True)
print(True and False)
print(10 > 5 and 2 < 1)
Template_KO:
print(True and True)
print(True and False)
print(10 > 5 and 2 < 1)

14. 
Guide_EN: or is True if at least one condition is met.
Guide_KO: or는 한쪽 조건만 참이어도 결과가 참이 됩니다.
Visual: L3S14_OrOperatorVisualizer
Template_EN:
print(True or False)
print(False or False)
print(10 > 5 or 2 < 1)
Template_KO:
print(True or False)
print(False or False)
print(10 > 5 or 2 < 1)

15. 
Guide_EN: Use and to check if a value falls within a specific range.
Guide_KO: and를 사용하여 값이 특정 범위 내에 있는지 확인합니다.
Template_EN:
score = 92
is_a = score >= 90 and score <= 100
print(is_a)
Template_KO:
score = 92
is_a = score >= 90 and score <= 100
print(is_a)

16. 
Guide_EN: or is useful for checking multiple valid options.
Guide_KO: or는 여러 개의 유효한 옵션 중 하나라도 맞는지 확인할 때 유용합니다.
Template_EN:
color = "red"
is_hot = color == "red" or color == "orange"
print(is_hot)
Template_KO:
color = "빨강"
is_hot = color == "빨강" or color == "오렌지"
print(is_hot)

17. 
Guide_EN: Combine comparison and logic for complex checks.
Guide_KO: 비교와 논리 연산을 조합하여 복잡한 조건을 체크합니다.
Template_EN:
age = 15
has_ticket = True
print(age >= 12 and has_ticket)
Template_KO:
age = 15
has_ticket = True
print(age >= 12 and has_ticket)

18. 
Guide_EN: Logical operators prioritize expressions inside parentheses.
Guide_KO: 논리 연산자도 괄호를 우선으로 연산합니다.
Template_EN:
print(True or False and False)
print((True or False) and False)
print(True and True or False)
Template_KO:
print(True or False and False)
print((True or False) and False)
print(True and True or False)

19. 
Guide_EN: Uppercase and lowercase strings are strictly different.
Guide_KO: 문자열에서 대문자와 소문자는 엄격히 다른 값입니다.
Template_EN:
print("Apple" == "apple")
print("Python" == "python")
print("Hello" == "Hello")
Template_KO:
print("Apple" == "apple")
print("Python" == "python")
print("Hello" == "Hello")

20. 
Guide_EN: Create a simple pass/fail logic for a game system.
Guide_KO: 게임 시스템을 위한 간단한 통과/실패 논리를 구성해 봅니다.
Template_EN:
id = "admin"
pw = "1234"
success = id == "admin" and pw == "1234"
print("Login:", success)
Template_KO:
id = "admin"
pw = "1234"
success = id == "admin" and pw == "1234"
print("로그인:", success)
