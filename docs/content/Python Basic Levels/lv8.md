Lv8.
Title_EN: Logic & Priority
Title_KO: 논리 연산과 연산자 우선순위
Description_EN: Learn to combine multiple conditions using and, or, and not.
Description_KO: 여러 개의 조건을 '그리고', '또는' 등으로 묶어서 판단하는 방법을 배웁니다.

1. 
Guide_EN: and: True only when both sides are True.
Guide_KO: and: 양쪽 모두 True일 때만 True입니다.
Template_EN:
age = 25
has_ticket = True
print("Can enter?", (age >= 18) and has_ticket)
Template_KO:
age = 25
has_ticket = True
print("입장 가능한가요?", (age >= 18) and has_ticket)

2. 
Guide_EN: or: True if at least one side is True.
Guide_KO: or: 한쪽만 True여도 True입니다.
Template_EN:
is_weekend = True
is_holiday = False
print("Can rest?", is_weekend or is_holiday)
Template_KO:
is_weekend = True
is_holiday = False
print("쉴 수 있나요?", is_weekend or is_holiday)

3. 
Guide_EN: not flips True to False and vice versa.
Guide_KO: not은 True↔False를 뒤집습니다.
Template_EN:
is_locked = True
is_open = not is_locked
print("Is open?", is_open)
Template_KO:
is_locked = True
is_open = not is_locked
print("열려 있나요?", is_open)

4. 
Guide_EN: Chain and for strict multi-condition checks.
Guide_KO: and를 연결하여 엄격한 다중 조건을 확인합니다.
Template_EN:
score = 95
attendance = 100
print("Scholarship:", (score > 90) and (attendance > 90))
Template_KO:
score = 95
attendance = 100
print("장학금 대상:", (score > 90) and (attendance > 90))

5. 
Guide_EN: or accepts any one of several valid options.
Guide_KO: or는 여러 유효 옵션 중 하나만 맞으면 됩니다.
Template_EN:
color = "red"
is_valid = (color == "red") or (color == "blue")
print("Valid color?", is_valid)
Template_KO:
color = "빨강"
is_valid = (color == "빨강") or (color == "파랑")
print("유효한 색상인가요?", is_valid)

6. 
Guide_EN: Combine not with comparisons for inequality.
Guide_KO: not과 비교 연산을 결합하여 부등을 판별합니다.
Template_EN:
user = "guest"
is_admin = not (user != "admin")
print("Is admin?", is_admin)
Template_KO:
user = "손님"
is_admin = not (user != "관리자")
print("관리자입니까?", is_admin)

7. 
Guide_EN: and has higher priority than or.
Guide_KO: and가 or보다 우선순위가 높습니다.
Template_EN:
a, b, c = True, False, False
result = a or b and c
print("Result:", result)
Template_KO:
a, b, c = True, False, False
result = a or b and c
print("결과:", result)

8. 
Guide_EN: Use parentheses to override default priority.
Guide_KO: 괄호로 기본 우선순위를 변경합니다.
Template_EN:
a, b, c = True, True, False
result = (a or b) and c
print("Result:", result)
Template_KO:
a, b, c = True, True, False
result = (a or b) and c
print("결과:", result)

9. 
Guide_EN: Check if a value falls within a range.
Guide_KO: 값이 범위 안에 있는지 확인합니다.
Template_EN:
val = 15
in_range = (val >= 10) and (val <= 20)
print("In range 10-20?", in_range)
Template_KO:
val = 15
in_range = (val >= 10) and (val <= 20)
print("10-20 범위 안입니까?", in_range)

10. 
Guide_EN: Check if a value is outside a range.
Guide_KO: 값이 범위 밖인지 확인합니다.
Template_EN:
val = 5
out_range = (val < 10) or (val > 20)
print("Out of range?", out_range)
Template_KO:
val = 5
out_range = (val < 10) or (val > 20)
print("범위 밖입니까?", out_range)

11. 
Guide_EN: Both conditions must be True for access.
Guide_KO: 접근을 위해 두 조건 모두 True여야 합니다.
Template_EN:
has_id = True
is_active = True
print("Access granted:", has_id and is_active)
Template_KO:
has_id = True
is_active = True
print("접근 허용:", has_id and is_active)

12. 
Guide_EN: not on a value checks if it's empty/zero.
Guide_KO: not으로 값이 비어있거나 0인지 확인합니다.
Template_EN:
msg = "Hello"
is_empty = not msg
print("Is empty?", is_empty)
Template_KO:
msg = "안녕하세요"
is_empty = not msg
print("비어 있나요?", is_empty)

13. 
Guide_EN: Mix arithmetic results with logical checks.
Guide_KO: 산술 결과와 논리 검사를 혼합합니다.
Template_EN:
x = 10
y = 20
print("Logic result:", (x + y > 25) and (x > 5))
Template_KO:
x = 10
y = 20
print("논리 결과:", (x + y > 25) and (x > 5))

14. 
Guide_EN: or provides a fallback when primary fails.
Guide_KO: or는 기본값이 실패할 때 대안을 제공합니다.
Template_EN:
is_guest = False
is_member = True
print("Can comment?", is_guest or is_member)
Template_KO:
is_guest = False
is_member = True
print("댓글 작성이 가능한가요?", is_guest or is_member)

15. 
Guide_EN: Parentheses clarify complex multi-condition logic.
Guide_KO: 괄호로 복잡한 다중 조건 논리를 명확히 합니다.
Template_EN:
key_1, key_2, key_3 = True, False, True
unlocked = key_1 and (key_2 or key_3)
print("Unlocked:", unlocked)
Template_KO:
key_1, key_2, key_3 = True, False, True
unlocked = key_1 and (key_2 or key_3)
print("잠금 해제:", unlocked)

16. 
Guide_EN: Non-zero numbers are truthy in Python.
Guide_KO: 파이썬에서 0이 아닌 숫자는 참입니다.
Template_EN:
count = 5
has_items = bool(count) and (count > 0)
print("Has items:", has_items)
Template_KO:
count = 5
has_items = bool(count) and (count > 0)
print("아이템이 있나요?", has_items)

17. 
Guide_EN: Combine day and price conditions for a sale.
Guide_KO: 요일과 가격 조건을 결합하여 세일을 판단합니다.
Template_EN:
day, price = "Mon", 5000
is_sale = (day == "Mon") or (price > 10000)
print("Is sale?", is_sale)
Template_KO:
day, price = "월요일", 5000
is_sale = (day == "월요일") or (price > 10000)
print("세일 중인가요?", is_sale)

18. 
Guide_EN: Math then comparison then logic — priority order.
Guide_KO: 수학 → 비교 → 논리 순서로 실행됩니다.
Template_EN:
math1 = 10 + 5 > 12
math2 = 2 * 3 == 6
print("Logic Result:", math1 and math2)
Template_KO:
math1 = 10 + 5 > 12
math2 = 2 * 3 == 6
print("논리 결과:", math1 and math2)

19. 
Guide_EN: Nested parentheses for deep logic chains.
Guide_KO: 중첩 괄호로 깊은 논리 사슬을 제어합니다.
Template_EN:
a, b, c, d = True, False, True, False
logic = (a and b) or (c and (not d))
print("Deep Logic:", logic)
Template_KO:
a, b, c, d = True, False, True, False
logic = (a and b) or (c and (not d))
print("복합 논리 결과:", logic)

20. 
Guide_EN: Build a login permission system with all operators.
Guide_KO: 모든 연산자로 로그인 권한 시스템을 구축합니다.
Template_EN:
login, admin, blocked = True, False, False
can_edit = login and (admin or not blocked)
print("Can Edit:", can_edit)
Template_KO:
login, admin, blocked = True, False, False
can_edit = login and (admin or not blocked)
print("편집 가능 여부:", can_edit)
