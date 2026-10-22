Lv9.
Title_EN: Membership & Identity
Title_KO: 멤버십과 정체성 연산자 (in, is)
Description_EN: Learn smart ways to check if specific data exists in a list.
Description_KO: 리스트 안에 특정 데이터가 들어있는지 확인하고 비교하는 똑똑한 방법을 익힙니다.

1. 
Guide_EN: 'is' checks if two variables point to the same object (identity). 'in' checks for inclusion. (ex: Hello)
Guide_KO: 'is'는 두 변수가 완전히 같은 대상인지(정체성)를 확인하고, 'in'은 어떤 값이 포함되어 있는지를 확인합니다. (ex: 안녕하세요)
Template_EN:
msg = input("Message: ")
has_hello = "Hello" in msg
print("Contains 'Hello':", has_hello)
Template_KO:
msg = input("메시지: ")
has_hello = "안녕" in msg
print("'안녕' 포함 여부:", has_hello)

2. 
Guide_EN: Convert a number to str to check for a specific digit.
Guide_KO: 숫자를 문자열로 변환(str)하여 특정 숫자가 포함되었는지 확인합니다.
Template_EN:
num = 12345
num_str = str(num)
print("Has '3'?", "3" in num_str)
Template_KO:
num = 12345
num_str = str(num)
print("'3'이 있나요?", "3" in num_str)

3. 
Guide_EN: Check if a letter is in a list of vowels.
Guide_KO: 특정 문자가 모음 리스트(a, e, i, o, u)에 포함되는지 확인합니다.
Template_EN:
char = "e"
vowels = "aeiou"
print("Is vowel?", char in vowels)
Template_KO:
char = "e"
vowels = "aeiou"
print("모음인가요?", char in vowels)

4. 
Guide_EN: Use 'not in' to verify a value is missing from a string.
Guide_KO: 'not in'을 사용하여 특정 단어가 포함되지 않았음을 확인합니다.
Template_EN:
text = "Python is Great"
no_java = "Java" not in text
print("No Java?", no_java)
Template_KO:
text = "파이썬은 최고야"
no_java = "Java" not in text
print("Java가 없나요?", no_java)

5. 
Guide_EN: 'is' checks if two variables point to the same object.
Guide_KO: 'is'는 두 변수가 완전히 동일한 객체를 가리키는지 확인합니다.
Template_EN:
a = [1, 2, 3]
b = a
print("Same object?", a is b)
Template_KO:
a = [1, 2, 3]
b = a
print("같은 객체인가요?", a is b)

6. 
Guide_EN: Different lists with same values are NOT the same object.
Guide_KO: 값은 같더라도 서로 다른 리스트는 'is'로 비교 시 False가 나옵니다.
Template_EN:
a = [1, 2, 3]
b = [1, 2, 3]
print("Equality (==):", a == b)
print("Identity (is):", a is b)
Template_KO:
a = [1, 2, 3]
b = [1, 2, 3]
print("값 비교 (==):", a == b)
print("정체성 비교 (is):", a is b)

7. 
Guide_EN: Small integers might be cached (interned) in Python.
Guide_KO: 파이썬은 작은 정수를 효율적으로 관리하기 위해 같은 주소를 사용하기도 합니다.
Template_EN:
x = 100
y = 100
print("Small int is:", x is y)
Template_KO:
x = 100
y = 100
print("작은 정수 is:", x is y)

8. 
Guide_EN: Larger integers created separately are usually different objects.
Guide_KO: 큰 숫자는 각각 생성되므로 'is' 비교 시 False가 나올 확률이 높습니다.
Template_EN:
x = 1000
y = 1000
print("Large int is:", x is y)
Template_KO:
x = 1000
y = 1000
print("큰 정수 is:", x is y)

9. 
Guide_EN: 'is not' checks if two objects are distinct.
Guide_KO: 'is not'은 두 객체가 서로 다른 정체성을 가졌는지 확인합니다.
Template_EN:
a = [10]
b = [10]
print("Distinct?", a is not b)
Template_KO:
a = [10]
b = [10]
print("다른 객체인가요?", a is not b)

10. 
Guide_EN: None is a singleton; always use 'is' to check for it.
Guide_KO: None은 항상 'is'를 사용하여 비교하는 것이 파이썬의 관례입니다.
Template_EN:
val = None
is_none = val is None
print("Is None?", is_none)
Template_KO:
val = None
is_none = val is None
print("None 인가요?", is_none)

11. 
Guide_EN: Check if a user's chosen name is in a banned list. (ex: root)
Guide_KO: 사용자가 선택한 이름이 금지어 목록에 있는지 확인합니다. (ex: 관리자)
Template_EN:
banned = "admin root superuser"
name = input("Enter name: ")
print("Banned?", name.lower() in banned)
Template_KO:
banned = "관리자 운영자 해커"
name = input("이름 입력: ")
print("금지어인가요?", name in banned)

12. 
Guide_EN: Verify if a character is part of the special symbols.
Guide_KO: 특정 문자가 특수 기호 그룹 안에 포함되는지 확인합니다.
Template_EN:
special = "!@#$%"
char = "@"
print("Is special?", char in special)
Template_KO:
special = "!@#$%"
char = "@"
print("특수문자인가요?", char in special)

13. 
Guide_EN: Boolean results of 'is' can be used in logic.
Guide_KO: 'is' 연산의 결과는 다른 논리 연산과 조합할 수 있습니다.
Template_EN:
obj = None
check = obj is None or obj == 0
print("Check:", check)
Template_KO:
obj = None
check = obj is None or obj == 0
print("체크:", check)

14. 
Guide_EN: Search for a substring within another string.
Guide_KO: 긴 문장 안에 특정 핵심 단어가 들어있는지 검색합니다.
Template_EN:
doc = "The quick brown fox jumps over the lazy dog."
has_fox = "fox" in doc
print("Has 'fox'?", has_fox)
Template_KO:
doc = "파이썬 코딩은 창의적인 활동입니다."
has_coding = "코딩" in doc
print("'코딩' 포함?", has_coding)

15. 
Guide_EN: Use 'in' with a list (conceptually, though we use strings here).
Guide_KO: 여러 단어 중 하나에 해당하는지 'in'으로 간단히 확인합니다.
Template_EN:
colors = "red blue green"
my_color = "red"
print("In palette?", my_color in colors)
Template_KO:
colors = "빨강 파랑 초록"
my_color = "빨강"
print("팔레트에 있나요?", my_color in colors)

16. 
Guide_EN: Comparing string identity vs equality.
Guide_KO: 문자열의 내용 비교(==)와 정체성 비교(is)를 실습합니다.
Template_EN:
s1 = "hello"
s2 = "hello"
print("s1 == s2:", s1 == s2)
print("s1 is s2:", s1 is s2)
Template_KO:
s1 = "안녕"
s2 = "안녕"
print("내용 같음:", s1 == s2)
print("정체성 같음:", s1 is s2)

17. 
Guide_EN: Check if 'http' is present in a URL.
Guide_KO: URL 주소 안에 'http'라는 통신 규약이 포함되어 있는지 확인합니다.
Template_EN:
url = "https://www.python.org"
is_http = "http" in url
print("Web protocol?", is_http)
Template_KO:
url = "https://www.python.org"
is_http = "http" in url
print("웹 프로토콜?", is_http)

18. 
Guide_EN: Use 'is not None' for robust variable checks.
Guide_KO: 변수에 값이 들어있는지(None이 아닌지) 확인할 때 'is not'을 씁니다.
Template_EN:
data = "Something"
has_data = data is not None
print("Has data?", has_data)
Template_KO:
data = "데이터"
has_data = data is not None
print("데이터 있음?", has_data)

19. 
Guide_EN: Complex search: multiple words in a string.
Guide_KO: 여러 단어가 동시에 들어있는지 논리 연산과 함께 확인합니다.
Template_EN:
text = "Python is fun and fast"
is_fun_fast = "fun" in text and "fast" in text
print("Fun & Fast?", is_fun_fast)
Template_KO:
text = "파이썬은 즐겁고 빠릅니다"
is_fun_fast = "즐겁" in text and "빠름" in text
print("즐겁고 빠름?", is_fun_fast)

20. 
Guide_EN: Final challenge: input membership and identity check. (ex: apple)
Guide_KO: [복습] 입력받은 값이 특정 그룹에 속하는지, 그리고 특정 객체인지 확인합니다. (ex: 사과)
Template_EN:
choice = input("Choice: ")
valid = "apple banana"
print("Is valid?", choice in valid)
print("Is apple?", choice is "apple")
Template_KO:
choice = input("선택: ")
valid = "사과 바나나"
print("유효함?", choice in valid)
print("사과임?", choice == "사과")
