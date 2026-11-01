export type SpeedCodingLanguage = 'python' | 'javascript' | 'c' | 'java' | 'sql';

export interface SpeedCodingSnippet {
  id: string;
  language: SpeedCodingLanguage;
  languageLabel: string;
  fileName: string;
  titleKo: string;
  titleEn: string;
  descKo: string;
  descEn: string;
  code: string;
}

export const SPEED_CODING_LANGUAGES: Array<{
  id: 'all' | SpeedCodingLanguage;
  labelKo: string;
  labelEn: string;
  badge: string;
  color: string;
}> = [
  { id: 'python', labelKo: 'Python', labelEn: 'Python', badge: '🐍', color: '#3b82f6' },
  { id: 'javascript', labelKo: 'JavaScript', labelEn: 'JavaScript', badge: '🌐', color: '#f59e0b' },
  { id: 'c', labelKo: 'C언어', labelEn: 'C', badge: '⚡', color: '#06b6d4' },
  { id: 'java', labelKo: 'Java', labelEn: 'Java', badge: '☕', color: '#ef4444' },
  { id: 'sql', labelKo: 'SQL', labelEn: 'SQL', badge: '🗄️', color: '#10b981' },
  { id: 'all', labelKo: '전체 (25)', labelEn: 'All (25)', badge: 'ALL', color: '#38bdf8' },
];

export const SPEED_CODING_SNIPPETS: SpeedCodingSnippet[] = [
  // ================= PYTHON (5) =================
  {
    id: 'py-gugudan',
    language: 'python',
    languageLabel: 'Python',
    fileName: 'gugudan.py',
    titleKo: '구구단 3단 출력하기',
    titleEn: 'Multiplication Table',
    descKo: 'for 반복문과 f-문자열로 깔끔하게 구구단을 출력하는 기본 코드',
    descEn: 'Print a multiplication table using a for loop and f-strings',
    code: `dan = 3
print(f"Table {dan}")

for i in range(1, 10):
    result = dan * i
    print(f"{dan} x {i} = {result}")`,
  },
  {
    id: 'py-cart-discount',
    language: 'python',
    languageLabel: 'Python',
    fileName: 'cart_total.py',
    titleKo: '장바구니 합계와 할인 계산',
    titleEn: 'Shopping Cart Discount',
    descKo: '상품 가격 합계를 구하고 조건문으로 할인 금액을 적용하는 코드',
    descEn: 'Sum item prices and apply a conditional discount threshold',
    code: `prices = [12000, 8500, 15000, 6000]
total = sum(prices)

if total >= 30000:
    discount = int(total * 0.1)
else:
    discount = 0

final_pay = total - discount
print(f"Total: {total}, Pay: {final_pay}")`,
  },
  {
    id: 'py-even-average',
    language: 'python',
    languageLabel: 'Python',
    fileName: 'even_stats.py',
    titleKo: '짝수 필터링과 평균 구하기',
    titleEn: 'Even Filter & Average',
    descKo: '리스트 컴프리헨션으로 짝수만 골라 개수와 평균을 계산하는 코드',
    descEn: 'Filter even numbers with a list comprehension and compute average',
    code: `numbers = [14, 27, 32, 41, 56, 63, 78]
evens = [n for n in numbers if n % 2 == 0]

count = len(evens)
average = round(sum(evens) / count, 1)

print("Even list:", evens)
print(f"Count: {count}, Avg: {average}")`,
  },
  {
    id: 'py-grade-report',
    language: 'python',
    languageLabel: 'Python',
    fileName: 'grade_book.py',
    titleKo: '딕셔너리 성적 등급 판별',
    titleEn: 'Student Grade Checker',
    descKo: '딕셔너리에 저장된 학생별 점수를 순회하며 학점을 부여하는 코드',
    descEn: 'Iterate over a score dictionary and assign letter grades',
    code: `scores = {"Alice": 94, "Bob": 82, "Chris": 75}

for name, score in scores.items():
    if score >= 90:
        grade = "A"
    elif score >= 80:
        grade = "B"
    else:
        grade = "C"
    print(f"{name}: {score} ({grade})")`,
  },
  {
    id: 'py-coffee-class',
    language: 'python',
    languageLabel: 'Python',
    fileName: 'coffee_order.py',
    titleKo: '클래스로 만드는 커피 주문기',
    titleEn: 'Coffee Order Class',
    descKo: '생성자와 메서드로 샷 추가 및 주문 요약을 처리하는 객체지향 예제',
    descEn: 'Track drink shots and total price with a clean Python class',
    code: `class CoffeeOrder:
    def __init__(self, menu, price):
        self.menu = menu
        self.price = price
        self.shots = 1

    def add_shot(self):
        self.shots += 1
        self.price += 500

order = CoffeeOrder("Latte", 4500)
order.add_shot()
print(order.menu, order.shots, order.price)`,
  },

  // ================= JAVASCRIPT (5) =================
  {
    id: 'js-todo-filter',
    language: 'javascript',
    languageLabel: 'JavaScript',
    fileName: 'todo_list.js',
    titleKo: '할 일 목록 완료 항목 추출',
    titleEn: 'Completed Todo Filter',
    descKo: '배열의 filter와 map 메서드로 완료된 작업 제목만 추려내는 코드',
    descEn: 'Extract completed task titles using array filter and map',
    code: `const todos = [
    { id: 1, title: "Setup project", done: true },
    { id: 2, title: "Write tests", done: false },
    { id: 3, title: "Deploy app", done: true }
];

const finished = todos
    .filter((item) => item.done)
    .map((item) => item.title);

console.log("Done:", finished.join(", "));`,
  },
  {
    id: 'js-score-summary',
    language: 'javascript',
    languageLabel: 'JavaScript',
    fileName: 'score_stats.js',
    titleKo: '배열 점수 합계와 최고점 찾기',
    titleEn: 'Score Sum & Max Finder',
    descKo: 'for...of 반복문으로 배열의 총합과 최고 점수를 한 번에 구하는 코드',
    descEn: 'Compute total and maximum score in a single for...of loop',
    code: `const scores = [78, 92, 85, 96, 88];
let total = 0;
let maxScore = scores[0];

for (const s of scores) {
    total += s;
    if (s > maxScore) {
        maxScore = s;
    }
}

console.log("Total:", total, "Max:", maxScore);`,
  },
  {
    id: 'js-currency-calc',
    language: 'javascript',
    languageLabel: 'JavaScript',
    fileName: 'currency.js',
    titleKo: '화살표 함수 환율 변환기',
    titleEn: 'Currency Converter Function',
    descKo: '기본 매개변수와 화살표 함수로 원화 금액을 달러로 환산하는 코드',
    descEn: 'Convert KRW amounts to USD using an arrow function',
    code: `const toUsd = (krw, rate = 1350) => {
    return Number((krw / rate).toFixed(2));
};

const amounts = [13500, 27000, 50000];
for (const won of amounts) {
    const usd = toUsd(won);
    console.log(won, "KRW =", usd, "USD");
}`,
  },
  {
    id: 'js-profile-badge',
    language: 'javascript',
    languageLabel: 'JavaScript',
    fileName: 'user_card.js',
    titleKo: '객체 구조 분해 프로필 포맷터',
    titleEn: 'Object Destructuring Formatter',
    descKo: '객체 구조 분해 할당으로 사용자 정보를 보기 좋게 출력하는 함수',
    descEn: 'Format user profile strings cleanly with object destructuring',
    code: `function formatUser({ name, role, level }) {
    const tag = role.toUpperCase();
    return "[" + tag + "] " + name + " (Lv." + level + ")";
}

const member = { name: "Mina", role: "dev", level: 7 };
const badge = formatUser(member);
console.log(badge);`,
  },
  {
    id: 'js-counter-class',
    language: 'javascript',
    languageLabel: 'JavaScript',
    fileName: 'counter.js',
    titleKo: '클래스 스텝 카운터 구현',
    titleEn: 'Step Counter Class',
    descKo: '증가·초기화 메서드를 가진 깔끔한 ES6 클래스 기본 패턴',
    descEn: 'ES6 class encapsulating increment, reset, and value access',
    code: `class StepCounter {
    constructor(step = 1) {
        this.count = 0;
        this.step = step;
    }

    increment() {
        this.count += this.step;
        return this.count;
    }
}

const counter = new StepCounter(5);
console.log(counter.increment(), counter.increment());`,
  },

  // ================= C LANGUAGE (5) =================
  {
    id: 'c-sum-loop',
    language: 'c',
    languageLabel: 'C언어',
    fileName: 'sum_loop.c',
    titleKo: '1부터 10까지 합계 출력',
    titleEn: 'Sum from 1 to 10',
    descKo: '표준 입출력 헤더와 for 반복문으로 누적 합계를 계산하는 C 기본 코드',
    descEn: 'Standard C program summing integers 1 through 10 with printf',
    code: `#include <stdio.h>

int main(void) {
    int sum = 0;
    for (int i = 1; i <= 10; i++) {
        sum += i;
    }
    printf("Sum: %d\\n", sum);
    return 0;
}`,
  },
  {
    id: 'c-max-array',
    language: 'c',
    languageLabel: 'C언어',
    fileName: 'max_score.c',
    titleKo: '배열에서 최고 점수 찾기',
    titleEn: 'Maximum Value in Array',
    descKo: '정수 배열을 순회하며 가장 큰 값과 인덱스를 찾는 프로그램',
    descEn: 'Scan an integer array to find the highest score',
    code: `#include <stdio.h>

int main(void) {
    int scores[5] = {72, 88, 95, 64, 91};
    int max = scores[0];

    for (int i = 1; i < 5; i++) {
        if (scores[i] > max) {
            max = scores[i];
        }
    }
    printf("Top score: %d\\n", max);
    return 0;
}`,
  },
  {
    id: 'c-even-odd-count',
    language: 'c',
    languageLabel: 'C언어',
    fileName: 'even_odd.c',
    titleKo: '짝수와 홀수 개수 세기',
    titleEn: 'Even and Odd Counter',
    descKo: '나머지 연산자(%)로 배열 속 짝수와 홀수의 개수를 각각 집계',
    descEn: 'Count even and odd integers in an array using modulo',
    code: `#include <stdio.h>

int main(void) {
    int nums[6] = {12, 7, 25, 18, 30, 11};
    int even = 0, odd = 0;

    for (int i = 0; i < 6; i++) {
        if (nums[i] % 2 == 0) even++;
        else odd++;
    }
    printf("Even: %d, Odd: %d\\n", even, odd);
    return 0;
}`,
  },
  {
    id: 'c-rect-function',
    language: 'c',
    languageLabel: 'C언어',
    fileName: 'rect_area.c',
    titleKo: '함수로 직사각형 넓이와 둘레 계산',
    titleEn: 'Rectangle Area & Perimeter',
    descKo: '사용자 정의 함수를 분리해 넓이와 둘레를 반환받아 출력하는 코드',
    descEn: 'Define helper functions for rectangle area and perimeter',
    code: `#include <stdio.h>

int get_area(int w, int h) {
    return w * h;
}

int get_perimeter(int w, int h) {
    return 2 * (w + h);
}

int main(void) {
    printf("Area: %d\\n", get_area(8, 5));
    printf("Perimeter: %d\\n", get_perimeter(8, 5));
    return 0;
}`,
  },
  {
    id: 'c-swap-pointer',
    language: 'c',
    languageLabel: 'C언어',
    fileName: 'swap_ptr.c',
    titleKo: '포인터로 두 변수 값 교환하기',
    titleEn: 'Pointer Variable Swap',
    descKo: '주소 전달(&)과 역참조(*)로 두 정수의 값을 맞바꾸는 핵심 예제',
    descEn: 'Swap two integer variables in-place via pointer addresses',
    code: `#include <stdio.h>

void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

int main(void) {
    int x = 10, y = 20;
    swap(&x, &y);
    printf("x = %d, y = %d\\n", x, y);
    return 0;
}`,
  },

  // ================= JAVA (5) =================
  {
    id: 'java-array-avg',
    language: 'java',
    languageLabel: 'Java',
    fileName: 'Main.java',
    titleKo: '향상된 for문 평균 점수 계산',
    titleEn: 'Array Average with For-Each',
    descKo: '정수 배열의 합계를 구하고 실수 형변환으로 정확한 평균을 출력',
    descEn: 'Sum an array with a for-each loop and print its double average',
    code: `public class Main {
    public static void main(String[] args) {
        int[] scores = {80, 92, 76, 88, 94};
        int sum = 0;

        for (int s : scores) {
            sum += s;
        }
        double avg = (double) sum / scores.length;
        System.out.println("Average: " + avg);
    }
}`,
  },
  {
    id: 'java-grade-check',
    language: 'java',
    languageLabel: 'Java',
    fileName: 'GradeCheck.java',
    titleKo: '조건문 학점 판별 프로그램',
    titleEn: 'Grade Conditional Check',
    descKo: 'if-else 조건 분기로 점수 구간에 맞는 등급 문자열을 출력',
    descEn: 'Assign a letter grade from a numeric score using if-else',
    code: `public class GradeCheck {
    public static void main(String[] args) {
        int score = 87;
        String grade;

        if (score >= 90) {
            grade = "A";
        } else if (score >= 80) {
            grade = "B";
        } else {
            grade = "C";
        }
        System.out.println("Grade: " + grade);
    }
}`,
  },
  {
    id: 'java-multiples-sum',
    language: 'java',
    languageLabel: 'Java',
    fileName: 'Multiples.java',
    titleKo: '3의 배수 합계와 개수 구하기',
    titleEn: 'Sum of Multiples of 3',
    descKo: '1부터 30까지 순회하며 3의 배수만 골라 합계와 개수를 집계',
    descEn: 'Count and sum multiples of 3 between 1 and 30',
    code: `public class Multiples {
    public static void main(String[] args) {
        int sum = 0;
        int count = 0;

        for (int i = 1; i <= 30; i++) {
            if (i % 3 == 0) {
                sum += i;
                count++;
            }
        }
        System.out.println("Count: " + count + ", Sum: " + sum);
    }
}`,
  },
  {
    id: 'java-reverse-langs',
    language: 'java',
    languageLabel: 'Java',
    fileName: 'ReversePrint.java',
    titleKo: '문자열 배열 역순 출력하기',
    titleEn: 'Reverse String Array Loop',
    descKo: '마지막 인덱스부터 0까지 감소하는 반복문으로 배열을 거꾸로 출력',
    descEn: 'Iterate backward from array end index down to zero',
    code: `public class ReversePrint {
    public static void main(String[] args) {
        String[] langs = {"Python", "Java", "C", "SQL"};

        for (int i = langs.length - 1; i >= 0; i--) {
            System.out.println((i + 1) + ": " + langs[i]);
        }
    }
}`,
  },
  {
    id: 'java-book-class',
    language: 'java',
    languageLabel: 'Java',
    fileName: 'BookApp.java',
    titleKo: '도서 클래스 생성자와 정보 출력',
    titleEn: 'Book Class & Constructor',
    descKo: '필드, 생성자, 출력 메서드를 갖춘 기본 Java 객체 생성 패턴',
    descEn: 'Instantiate a Java object with fields, constructor, and method',
    code: `class Book {
    String title;
    int price;

    Book(String title, int price) {
        this.title = title;
        this.price = price;
    }

    void printInfo() {
        System.out.println(title + " - " + price + " KRW");
    }
}`,
  },

  // ================= SQL (5) =================
  {
    id: 'sql-top-students',
    language: 'sql',
    languageLabel: 'SQL',
    fileName: 'top_students.sql',
    titleKo: '우수 성적 학생 목록 조회',
    titleEn: 'High-Scoring Students Query',
    descKo: 'WHERE 조건과 ORDER BY 정렬로 90점 이상 학생을 성적순 조회',
    descEn: 'Select students scoring 90 or above ordered by highest score',
    code: `SELECT
    student_id,
    name,
    major,
    score
FROM students
WHERE score >= 90
ORDER BY score DESC, name ASC
LIMIT 10;`,
  },
  {
    id: 'sql-dept-salary',
    language: 'sql',
    languageLabel: 'SQL',
    fileName: 'dept_salary.sql',
    titleKo: '부서별 인원수와 평균 급여 집계',
    titleEn: 'Department Headcount & Salary',
    descKo: 'GROUP BY와 HAVING으로 3명 이상인 부서의 평균 급여를 산출',
    descEn: 'Group employees by department and filter groups with HAVING',
    code: `SELECT
    department,
    COUNT(*) AS emp_count,
    ROUND(AVG(salary), 0) AS avg_salary
FROM employees
WHERE is_active = TRUE
GROUP BY department
HAVING COUNT(*) >= 3
ORDER BY avg_salary DESC;`,
  },
  {
    id: 'sql-customer-orders',
    language: 'sql',
    languageLabel: 'SQL',
    fileName: 'recent_orders.sql',
    titleKo: '고객 주문 내역 JOIN 조회',
    titleEn: 'Customer Orders INNER JOIN',
    descKo: '고객 테이블과 주문 테이블을 조인해 결제 완료 주문을 최신순 조회',
    descEn: 'Join customers and orders tables to list completed purchases',
    code: `SELECT
    c.name AS customer_name,
    o.id AS order_id,
    o.total_price,
    o.order_date
FROM customers AS c
JOIN orders AS o
    ON o.customer_id = c.id
WHERE o.status = 'PAID'
ORDER BY o.order_date DESC;`,
  },
  {
    id: 'sql-book-stock',
    language: 'sql',
    languageLabel: 'SQL',
    fileName: 'book_stock.sql',
    titleKo: '도서 재고 상태 CASE 분류',
    titleEn: 'Book Stock Status with CASE',
    descKo: 'CASE 조건문으로 수량에 따라 품절·부족·여유 상태를 표시하는 쿼리',
    descEn: 'Label inventory levels dynamically using a CASE expression',
    code: `SELECT
    book_id,
    title,
    stock,
    CASE
        WHEN stock = 0 THEN 'SOLD_OUT'
        WHEN stock < 5 THEN 'LOW_STOCK'
        ELSE 'IN_STOCK'
    END AS stock_status
FROM books
ORDER BY stock ASC;`,
  },
  {
    id: 'sql-create-books',
    language: 'sql',
    languageLabel: 'SQL',
    fileName: 'create_books.sql',
    titleKo: '도서 테이블 생성과 데이터 추가',
    titleEn: 'Create & Insert Books Table',
    descKo: '테이블 스키마를 정의하고 샘플 도서 행을 삽입한 뒤 조회하는 SQL',
    descEn: 'Create a books table, insert sample rows, and query them',
    code: `CREATE TABLE books (
    id INTEGER PRIMARY KEY,
    title TEXT NOT NULL,
    price INTEGER DEFAULT 0
);

INSERT INTO books (id, title, price)
VALUES (1, 'Clean Code', 32000), (2, 'SQL Guide', 25000);

SELECT id, title, price FROM books;`,
  },
];
