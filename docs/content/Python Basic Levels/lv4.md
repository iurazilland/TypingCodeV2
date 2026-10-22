Lv4.
Title_EN: Input & Basic Operations
Title_KO: 입력과 기초 연산
Description_EN: Learn to input information directly and show it on the screen.
Description_KO: 컴퓨터에게 직접 정보를 입력하고, 그 내용을 화면에 보여주는 방법을 익힙니다.

1. 
Guide_EN: input() receives text from the user. (ex: Hello)
Guide_KO: input()은 사용자로부터 텍스트를 입력받습니다. (ex: 안녕하세요)
Visual: L4S1_InputVisualizer
Template_EN:
print("Welcome!")
print("input something")
input()
Template_KO:
print("환영합니다!")
print("무언가 입력하세요")
input()

2. 
Guide_EN: Store user input in a variable for later use. (ex: James)
Guide_KO: 입력을 변수에 저장하여 나중에 사용합니다. (ex: 철수)
Template_EN:
name = input("Enter your name: ")
print("Hello,", name)
print("Welcome!")
Template_KO:
name = input("이름을 입력하세요: ")
print("안녕하세요,", name)
print("환영합니다!")

3. 
Guide_EN: Add a prompt message inside input(). (ex: Pizza)
Guide_KO: input() 안에 안내 메시지를 넣습니다. (ex: 피자)
Template_EN:
food = input("What takes your fancy? ")
print(food, "is a good choice.")
print("Enjoy!")
Template_KO:
food = input("어떤 음식을 좋아하시나요? ")
print(food, "좋은 선택이네요.")
print("맛있게 드세요!")

4. 
Guide_EN: User input is always stored as a string, even if you type numbers. (ex: 100)
Guide_KO: 숫자를 입력해도 항상 문자열로 저장됩니다. (ex: 100)
Template_EN:
data = input("Type a number: ")
print(type(data))
print(data+data)
Template_KO:
data = input("숫자를 입력하세요: ")
print(type(data))
print(data+data)

5. 
Guide_EN: int() converts text to a calculable integer. (ex: 25)
Guide_KO: int()로 텍스트를 계산 가능한 정수로 변환합니다. (ex: 25)
Visual: L4S5_IntInputVisualizer
Template_EN:
year = int(input("Year: "))
next_year = year + 1
print("Next Year:", next_year)
Template_KO:
year = int(input("올해 년도: "))
next_year = year + 1
print("내년:", next_year)

6. 
Guide_EN: float() handles decimal number input. (ex: 175.5)
Guide_KO: float()는 소수점 숫자 입력을 처리합니다. (ex: 175.5)
Template_EN:
height = float(input("Height(cm): "))
print("Height:", height)
print("Type:", type(height))
Template_KO:
height = float(input("키(cm): "))
print("키:", height)
print("타입:", type(height))

7. 
Guide_EN: Wrap input() in int() to convert input instantly. (ex: 2026)
Guide_KO: input()을 int()로 감싸 입력 즉시 변환합니다. (ex: 2026)
Template_EN:
age_str = input("Age: ")
age = int(age_str)
print(age)
Template_KO:
age_str = input("나이: ")
age = int(age_str)
print(age)

8. 
Guide_EN: Take two inputs and compute their sum. (ex: enter 10, then 20)
Guide_KO: 두 입력을 받아 합계를 계산합니다. (ex: 10 입력 후 20 입력)
Template_EN:
a = int(input("A: "))
b = int(input("B: "))
print("Sum:", a + b)
Template_KO:
a = int(input("A값: "))
b = int(input("B값: "))
print("합계:", a + b)

9. 
Guide_EN: Subtract inputs to calculate change. (ex: enter 10000, then 4500)
Guide_KO: 입력값을 빼서 거스름돈을 계산합니다. (ex: 10000 입력 후 4500 입력)
Template_EN:
total = int(input("Total: "))
spent = int(input("Spent: "))
print("Change:", total - spent)
Template_KO:
total = int(input("낸 돈: "))
spent = int(input("쓴 돈: "))
print("거스름돈:", total - spent)

10. 
Guide_EN: Multiply a string by a number to repeat it. (ex: Oh)
Guide_KO: 문자열에 숫자를 곱하면 반복됩니다. (ex: 오)
Template_EN:
echo = input("Say something: ")
repeat = echo * 3
print(repeat)
Template_KO:
echo = input("아무 말이나 해보세요: ")
repeat = echo * 3
print(repeat)

11. 
Guide_EN: Find calculation results using variable inputs. (ex: enter 1500, then 3)
Guide_KO: 변수의 입력값으로 계산 결과를 구합니다. (ex: 1500 입력 후 3 입력)
Template_EN:
price = int(input("Price: "))
count = int(input("Count: "))
print("Total:", price * count)
Template_KO:
price = int(input("가격: "))
count = int(input("개수: "))
print("합계:", price * count)

12. 
Guide_EN: Divide to find each person's share. (ex: enter 30000, then 4)
Guide_KO: 나누기로 1인당 금액을 구합니다. (ex: 30000 입력 후 4 입력)
Template_EN:
bill = int(input("Total Bill: "))
people = int(input("People: "))
print("Each:", bill / people)
Template_KO:
bill = int(input("총 금액: "))
people = int(input("인원 수: "))
print("1인당:", bill / people)

13. 
Guide_EN: Calculate age from birth year. (ex: 1998)
Guide_KO: 태어난 연도로 나이를 계산합니다. (ex: 1998)
Template_EN:
birth_year = int(input("Birth Year: "))
current_year = 2026
print("Age:", current_year - birth_year)
Template_KO:
birth_year = int(input("출생 연도: "))
current_year = 2026
print("나이:", current_year - birth_year)

14. 
Guide_EN: split() splits a string into a list based on spaces.
Guide_KO: split()은 문자열을 공백 기준으로 분리합니다.
Visual: L4S14_SplitVisualizer
Template_EN:
data = "Apple Banana Cherry"
fruits = data.split()
print(fruits)
Template_KO:
data = "사과 바나나 체리"
fruits = data.split()
print(fruits)

15. 
Guide_EN: Split user input into multiple words at once. (ex: Coffee Bread)
Guide_KO: 사용자 입력을 여러 단어로 한 번에 분리합니다. (ex: 커피 빵)
Template_EN:
text = input("Type two words: ")
words = text.split()
print(words)
Template_KO:
text = input("두 단어를 입력하세요: ")
words = text.split()
print(words)

16. 
Guide_EN: Specify a character inside split() to use it as a delimiter.
Guide_KO: split()안에 특정 문자를 넣으면 해당 문자를 구분자로 나눕니다.
Template_EN:
csv = "Red,Green,Blue"
parts = csv.split(",")
print(parts)
Template_KO:
csv = "빨강,초록,파랑"
parts = csv.split(",")
print(parts)

17. 
Guide_EN: Split date string into year, month, day.
Guide_KO: 날짜 문자열을 년, 월, 일로 분리합니다.
Template_EN:
date = "2026-02-10"
y, m, d = date.split("-")
print(y, m, d)
Template_KO:
date = "2026-02-10"
y, m, d = date.split("-")
print(y, m, d)

18. 
Guide_EN: Unpack split results directly into variables. (ex: James 20)
Guide_KO: split 결과를 변수에 직접 언패킹합니다. (ex: 철수 20)
Template_EN:
name, age = input("Name and Age: ").split()
print("Name:", name)
print("Age:", age)
Template_KO:
name, age = input("이름과 나이: ").split()
print("이름:", name)
print("나이:", age)

19. 
Guide_EN: Split first and last name from one input. (ex: Gildong Hong)
Guide_KO: 한 입력에서 성과 이름을 분리합니다. (ex: 길동 홍)
Template_EN:
first, last = input("First and Last Name: ").split()
print("First:", first)
print("Last:", last)
Template_KO:
first, last = input("성과 이름: ").split()
print("이름:", first)
print("성:", last)

20. 
Guide_EN: Use split() to create a profile from a single input. (ex: James 20 Seoul)
Guide_KO: split()을 사용하여 한 번의 입력으로 프로필을 만듭니다. (ex: 철수 20 서울)
Template_EN:
name, age, city = input("Name Age City: ").split()
print("User Profile")
print("-" * 10)
print("Name:", name)
print("Age:", int(age))
print("City:", city)
Template_KO:
name, age, city = input("이름 나이 도시: ").split()
print("유저 프로필")
print("-" * 10)
print("이름:", name)
print("나이:", int(age))
print("도시:", city)
