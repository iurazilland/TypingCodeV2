Lv2.
Title_EN: Variables & Data Types
Title_KO: 변수와 자료형 기초
Description_EN: Learn to use 'variables' like boxes to store and retrieve data.
Description_KO: 데이터를 상자에 담아두듯 저장하고, 필요할 때 꺼내 쓰는 '변수'의 개념을 익힙니다.

1. 
Guide_EN: A variable is like a box that stores data.
Guide_KO: 변수는 데이터를 저장하는 상자와 같습니다.
Visual: L2S1_VariableBoxVisualizer
Template_EN:
score = 100
level = 2
print("Level:", level)
print("Score:", score)
Template_KO:
score = 100
level = 2
print("레벨:", level)
print("점수:", score)

2. 
Guide_EN: Store text (String) data in variables.
Guide_KO: 문자열(String) 데이터를 변수에 저장합니다.
Template_EN:
player_name = "TypingMaster"
rank = "Diamond"
print("Player:", player_name)
print("Rank:", rank)
Template_KO:
player_name = "타이핑마스터"
rank = "다이아몬드"
print("플레이어:", player_name)
print("등급:", rank)

3. 
Guide_EN: Decimal numbers use the Float data type.
Guide_KO: 소수점 숫자는 실수(Float) 자료형을 사용합니다.
Template_EN:
gravity = 9.81
temperature = 36.5
print("Gravity:", gravity)
print("Temp:", temperature)
Template_KO:
gravity = 9.81
temperature = 36.5
print("중력:", gravity)
print("온도:", temperature)

4. 
Guide_EN: Reassigning a variable replaces the old value.
Guide_KO: 변수에 새 값을 넣으면 이전 값이 교체됩니다.
Visual: L2S4_VariableReassignVisualizer
Template_EN:
hp = 100
print("HP:", hp)
hp = 50
print("After damage:", hp)
Template_KO:
hp = 100
print("체력:", hp)
hp = 50
print("데미지 입은 후:", hp)

5. 
Guide_EN: Copy a value from one variable to another.
Guide_KO: 한 변수의 값을 다른 변수에 복사합니다.
Template_EN:
coffee_price = 4500
latte_price = coffee_price
print("Coffee:", coffee_price)
print("Latte:", latte_price)
Template_KO:
coffee_price = 4500
latte_price = coffee_price
print("커피:", coffee_price)
print("라떼:", latte_price)

6. 
Guide_EN: Assign multiple variables in one line with commas.
Guide_KO: 쉼표로 한 줄에 여러 변수를 할당합니다.
Template_EN:
x, y, z = 10, 20, 30
print("X:", x)
print("Y:", y)
print("Z:", z)
Template_KO:
x, y, z = 10, 20, 30
print("X:", x)
print("Y:", y)
print("Z:", z)

7. 
Guide_EN: Initialize multiple variables to the same value.
Guide_KO: 여러 변수를 같은 값으로 초기화합니다.
Template_EN:
width = height = length = 100
print("Width:", width)
print("Height:", height)
print("Volume:", width * height * length)
Template_KO:
width = height = length = 100
print("가로:", width)
print("세로:", height)
print("부피:", width * height * length)

8. 
Guide_EN: Use snake_case for multi-word variable names.
Guide_KO: 여러 단어 변수명은 snake_case로 작성합니다.
Template_EN:
user_email = "test@example.com"
is_logged_in = True
print("Email:", user_email)
print("Logged In:", is_logged_in)
Template_KO:
user_email = "test@example.com"
is_logged_in = True
print("이메일:", user_email)
print("로그인 여부:", is_logged_in)

9. 
Guide_EN: type() tells you a variable's data type.
Guide_KO: type()은 변수의 자료형을 알려줍니다.
Visual: L2S9_TypeVisualizer
Template_EN:
print(type(10))
print(type("Hi"))
print(type(3.14))
Template_KO:
print(type(10))
print(type("안녕"))
print(type(3.14))

10. 
Guide_EN: Do arithmetic using variable names.
Guide_KO: 변수 이름으로 사칙연산을 수행합니다.
Template_EN:
base = 10
bonus = 5
total = base + bonus
print("Total:", total)
Template_KO:
base = 10
bonus = 5
total = base + bonus
print("합계:", total)

11. 
Guide_EN: Join strings with +, and repeat them with *.
Guide_KO: +로 문자열을 연결하고, *로 반복합니다.
Template_EN:
first_name = "Guido"
last_name = "van Rossum"
full_name = first_name + " " + last_name
print("Creator:", full_name)
Template_KO:
first_name = "Guido"
last_name = "van Rossum"
full_name = first_name + " " + last_name
print("창시자:", full_name)

12. 
Guide_EN: Booleans represent True or False only.
Guide_KO: 불리언은 True 또는 False만 나타냅니다.
Template_EN:
is_active = True
is_admin = False
print("Active:", is_active)
print("Admin:", is_admin)
Template_KO:
is_active = True
is_admin = False
print("활성 상태:", is_active)
print("관리자 여부:", is_admin)

13. 
Guide_EN: Swap two variables with a, b = b, a.
Guide_KO: a, b = b, a로 두 변수를 교환합니다.
Visual: L2S13_VariableSwapVisualizer
Template_EN:
a = 10
b = 99
print("Before:", a, b)
a, b = b, a
print("After:", a, b)
Template_KO:
a = 10
b = 99
print("변경 전:", a, b)
a, b = b, a
print("변경 후:", a, b)

14. 
Guide_EN: Constants use ALL_CAPS by convention.
Guide_KO: 상수는 관례상 대문자로 작성합니다.
Template_EN:
PI = 3.14159
MAX_USERS = 5000
print("PI:", PI)
print("Max Users:", MAX_USERS)
Template_KO:
PI = 3.14159
MAX_USERS = 5000
print("원주율:", PI)
print("최대 사용자:", MAX_USERS)

15. 
Guide_EN: None represents "no value at all".
Guide_KO: None은 "값이 없음"을 나타냅니다.
Template_EN:
result = None
print("Initial:", result)
result = "Success"
print("Updated:", result)
Template_KO:
result = None
print("초기값:", result)
result = "성공"
print("수정된 값:", result)

16. 
Guide_EN: del removes a variable completely.
Guide_KO: del은 변수를 완전히 삭제합니다.
Template_EN:
temp_data = "Temporary"
print(temp_data)
del temp_data
print("Data deleted!")
Template_KO:
temp_data = "임시 데이터"
print(temp_data)
del temp_data
print("데이터가 삭제되었습니다!")

17. 
Guide_EN: Convert strings to integers with int().
Guide_KO: int()로 문자열을 정수로 변환합니다.
Template_EN:
score_str = "100"
bonus = 50
total = int(score_str) + bonus
print("Total Score:", total)
Template_KO:
score_str = "100"
bonus = 50
total = int(score_str) + bonus
print("총점:", total)

18. 
Guide_EN: Add to itself: total = total + value.
Guide_KO: 자기 자신에 값을 더합니다: total = total + value.
Template_EN:
total = 0
total = total + 10
total = total + 20
print("Total:", total)
Template_KO:
total = 0
total = total + 10
total = total + 20
print("합계:", total)

19. 
Guide_EN: Use clear, descriptive variable names.
Guide_KO: 명확하고 설명적인 변수명을 사용합니다.
Template_EN:
days_in_week = 7
hours_in_day = 24
total_hours = days_in_week * hours_in_day
print("Hours per week:", total_hours)
Template_KO:
days_in_week = 7
hours_in_day = 24
total_hours = days_in_week * hours_in_day
print("주당 총 시간:", total_hours)

20. 
Guide_EN: Combine all variable skills into a receipt.
Guide_KO: 모든 변수 기술을 영수증으로 종합합니다.
Template_EN:
item_name = "Potion"
item_count = 5
price = 50
total_price = item_count * price
print("Item:", item_name)
print("Total:", total_price, "Gold")
Template_KO:
item_name = "포션"
item_count = 5
price = 50
total_price = item_count * price
print("아이템:", item_name)
print("합계:", total_price, "골드")
