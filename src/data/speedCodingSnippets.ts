export type SpeedCodingLanguage = 'python' | 'javascript' | 'c' | 'java' | 'sql';

export interface SpeedCodingSnippet {
  id: string;
  language: SpeedCodingLanguage;
  languageLabel: string;
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
  { id: 'all', labelKo: '전체 로테이션 (25)', labelEn: 'All Rotation (25)', badge: 'ALL', color: '#38bdf8' },
  { id: 'python', labelKo: 'Python (5)', labelEn: 'Python (5)', badge: '🐍', color: '#3b82f6' },
  { id: 'javascript', labelKo: 'JavaScript (5)', labelEn: 'JavaScript (5)', badge: '🌐', color: '#f59e0b' },
  { id: 'c', labelKo: 'C언어 (5)', labelEn: 'C (5)', badge: '⚡', color: '#06b6d4' },
  { id: 'java', labelKo: 'Java (5)', labelEn: 'Java (5)', badge: '☕', color: '#ef4444' },
  { id: 'sql', labelKo: 'SQL (5)', labelEn: 'SQL (5)', badge: '🗄️', color: '#10b981' },
];

export const SPEED_CODING_SNIPPETS: SpeedCodingSnippet[] = [
  // ================= PYTHON (5) =================
  {
    id: 'py-binary-search',
    language: 'python',
    languageLabel: 'Python',
    titleKo: '이진 탐색 (Binary Search)',
    titleEn: 'Binary Search',
    descKo: '정렬된 리스트에서 목표 인덱스를 O(log N)으로 탐색하는 표준 코드',
    descEn: 'Find a target index in a sorted list in O(log N) time',
    code: `def binary_search(nums, target):
    left, right = 0, len(nums) - 1
    while left <= right:
        mid = (left + right) // 2
        if nums[mid] == target:
            return mid
        elif nums[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1`,
  },
  {
    id: 'py-word-counter',
    language: 'python',
    languageLabel: 'Python',
    titleKo: '단어 빈도수 집계기',
    titleEn: 'Word Frequency Counter',
    descKo: '딕셔너리를 활용해 문장 속 단어 등장 횟수와 최빈 단어를 계산',
    descEn: 'Count word occurrences and extract the most frequent word',
    code: `def top_word(sentence):
    counts = {}
    for raw in sentence.lower().split():
        word = raw.strip(".,!?")
        if word:
            counts[word] = counts.get(word, 0) + 1
    if not counts:
        return None
    return max(counts, key=counts.get)`,
  },
  {
    id: 'py-bracket-validator',
    language: 'python',
    languageLabel: 'Python',
    titleKo: '스택 괄호 짝 검사기',
    titleEn: 'Stack Bracket Validator',
    descKo: '스택 자료구조로 열리고 닫히는 괄호 쌍의 유효성을 검증',
    descEn: 'Validate matching brackets using a list-backed stack',
    code: `def is_valid_brackets(text):
    pairs = {")": "(", "]": "[", "}": "{"}
    stack = []
    for ch in text:
        if ch in "([{":
            stack.append(ch)
        elif ch in pairs:
            if not stack or stack.pop() != pairs[ch]:
                return False
    return len(stack) == 0`,
  },
  {
    id: 'py-fib-memo',
    language: 'python',
    languageLabel: 'Python',
    titleKo: '메모이제이션 피보나치',
    titleEn: 'Memoized Fibonacci',
    descKo: '중복 재귀 호출을 캐시 딕셔너리로 제거한 동적 계획법 패턴',
    descEn: 'Dynamic programming Fibonacci with dictionary memoization',
    code: `def fibonacci(n, memo=None):
    if memo is None:
        memo = {0: 0, 1: 1}
    if n in memo:
        return memo[n]
    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo)
    return memo[n]

result = [fibonacci(i) for i in range(8)]
print(result)`,
  },
  {
    id: 'py-score-report',
    language: 'python',
    languageLabel: 'Python',
    titleKo: '학생 성적 평균 및 합격 필터링',
    titleEn: 'Student Score Summary',
    descKo: '리스트 컴프리헨션과 내장 집계 함수로 합격자 명단 추출',
    descEn: 'Filter passing students and calculate class average',
    code: `def summarize_scores(records, cutoff=80):
    if not records:
        return {"avg": 0.0, "passed": []}
    total = sum(item["score"] for item in records)
    avg = round(total / len(records), 2)
    passed = [item["name"] for item in records if item["score"] >= cutoff]
    return {"avg": avg, "passed": passed}`,
  },

  // ================= JAVASCRIPT (5) =================
  {
    id: 'js-debounce',
    language: 'javascript',
    languageLabel: 'JavaScript',
    titleKo: '디바운스 이벤트 제어 함수',
    titleEn: 'Debounce Utility',
    descKo: '연속 입력 이벤트를 일정 시간 지연시켜 불필요한 호출을 방지',
    descEn: 'Delay rapid input callbacks until typing pauses',
    code: `function debounce(fn, delayMs = 250) {
    let timerId = null;
    return function (...args) {
        if (timerId !== null) {
            clearTimeout(timerId);
        }
        timerId = setTimeout(() => {
            fn.apply(this, args);
        }, delayMs);
    };
}`,
  },
  {
    id: 'js-group-by',
    language: 'javascript',
    languageLabel: 'JavaScript',
    titleKo: '배열 키 그룹화 (groupBy)',
    titleEn: 'Array GroupBy Reducer',
    descKo: 'Array.prototype.reduce를 사용해 객체 배열을 카테고리별로 분류',
    descEn: 'Group an array of objects by property key using reduce',
    code: `function groupBy(items, key) {
    return items.reduce((acc, item) => {
        const groupName = String(item[key] ?? "other");
        if (!acc[groupName]) {
            acc[groupName] = [];
        }
        acc[groupName].push(item);
        return acc;
    }, {});
}`,
  },
  {
    id: 'js-fetch-retry',
    language: 'javascript',
    languageLabel: 'JavaScript',
    titleKo: '비동기 Fetch 재시도 헬퍼',
    titleEn: 'Async Fetch with Retry',
    descKo: '네트워크 요청 실패 시 지정된 횟수만큼 안전하게 재시도',
    descEn: 'Retry failed HTTP requests with async/await backoff',
    code: `async function fetchWithRetry(url, retries = 3) {
    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            const res = await fetch(url);
            if (!res.ok) throw new Error("HTTP " + res.status);
            return await res.json();
        } catch (err) {
            if (attempt === retries) throw err;
        }
    }
}`,
  },
  {
    id: 'js-event-emitter',
    language: 'javascript',
    languageLabel: 'JavaScript',
    titleKo: '경량 이벤트 버스 클래스',
    titleEn: 'Mini Event Emitter',
    descKo: 'Map과 Set으로 구현하는 구독(on) 및 발행(emit) 패턴',
    descEn: 'Publish-subscribe pattern built with native Map and Set',
    code: `class EventBus {
    constructor() {
        this.listeners = new Map();
    }
    on(event, handler) {
        if (!this.listeners.has(event)) {
            this.listeners.set(event, new Set());
        }
        this.listeners.get(event).add(handler);
    }
    emit(event, payload) {
        this.listeners.get(event)?.forEach((fn) => fn(payload));
    }
}`,
  },
  {
    id: 'js-cart-summary',
    language: 'javascript',
    languageLabel: 'JavaScript',
    titleKo: '장바구니 결제 금액 계산기',
    titleEn: 'Cart Checkout Calculator',
    descKo: '품절 상품을 제외하고 할인율과 무료 배송 기준을 적용',
    descEn: 'Filter active items, apply discount, and compute shipping',
    code: `function calculateCheckout(items, discountRate = 0.1) {
    const subtotal = items
        .filter((item) => item.inStock && item.qty > 0)
        .reduce((sum, item) => sum + item.price * item.qty, 0);
    const discounted = Math.round(subtotal * (1 - discountRate));
    const shipping = discounted >= 30000 || discounted === 0 ? 0 : 3000;
    return { subtotal, total: discounted + shipping };
}`,
  },

  // ================= C LANGUAGE (5) =================
  {
    id: 'c-pointer-swap',
    language: 'c',
    languageLabel: 'C언어',
    titleKo: '포인터 변수 교환과 배열 역순 뒤집기',
    titleEn: 'Pointer Swap & Reverse Array',
    descKo: '포인터 참조로 배열 양끝 원소를 제자리(in-place)에서 교환',
    descEn: 'Reverse an integer array in-place using pointer dereferencing',
    code: `void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

void reverse_array(int arr[], int size) {
    for (int i = 0; i < size / 2; i++) {
        swap(&arr[i], &arr[size - 1 - i]);
    }
}`,
  },
  {
    id: 'c-bubble-sort',
    language: 'c',
    languageLabel: 'C언어',
    titleKo: '조기 종료 버블 정렬',
    titleEn: 'Early-Exit Bubble Sort',
    descKo: '교환 발생 여부를 추적해 이미 정렬된 경우 즉시 종료',
    descEn: 'Bubble sort with a swapped flag for O(N) best-case exit',
    code: `void bubble_sort(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        int swapped = 0;
        for (int j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                int tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
                swapped = 1;
            }
        }
        if (!swapped) break;
    }
}`,
  },
  {
    id: 'c-gcd-lcm',
    language: 'c',
    languageLabel: 'C언어',
    titleKo: '유클리드 호제법 최대공약수 & 최소공배수',
    titleEn: 'Euclidean GCD & LCM',
    descKo: '나머지 연산 반복문으로 빠르고 안전하게 최대공약수를 계산',
    descEn: 'Compute greatest common divisor and least common multiple',
    code: `int gcd(int a, int b) {
    while (b != 0) {
        int r = a % b;
        a = b;
        b = r;
    }
    return a;
}

long long lcm(int a, int b) {
    if (a == 0 || b == 0) return 0;
    return (long long)(a / gcd(a, b)) * b;
}`,
  },
  {
    id: 'c-string-count',
    language: 'c',
    languageLabel: 'C언어',
    titleKo: '문자열 모음 및 숫자 카운터',
    titleEn: 'String Vowel & Digit Counter',
    descKo: '널 종료 문자열을 포인터로 순회하며 문자 종류를 분류',
    descEn: 'Walk a null-terminated C string via char pointer',
    code: `int count_digits(const char *str) {
    int count = 0;
    while (*str != '\\0') {
        if (*str >= '0' && *str <= '9') {
            count++;
        }
        str++;
    }
    return count;
}`,
  },
  {
    id: 'c-array-stats',
    language: 'c',
    languageLabel: 'C언어',
    titleKo: '배열 최댓값·최솟값 동시 탐색',
    titleEn: 'Array Min & Max Finder',
    descKo: '단일 루프로 최솟값과 최댓값을 포인터 출력 매개변수에 저장',
    descEn: 'Find min and max in a single pass using output pointers',
    code: `void find_min_max(const int arr[], int n, int *min_out, int *max_out) {
    if (n <= 0) return;
    *min_out = arr[0];
    *max_out = arr[0];
    for (int i = 1; i < n; i++) {
        if (arr[i] < *min_out) *min_out = arr[i];
        if (arr[i] > *max_out) *max_out = arr[i];
    }
}`,
  },

  // ================= JAVA (5) =================
  {
    id: 'java-two-sum',
    language: 'java',
    languageLabel: 'Java',
    titleKo: 'HashMap 두 수의 합 (Two Sum)',
    titleEn: 'Two Sum with HashMap',
    descKo: '보수(complement)를 해시맵에 기록해 O(N)에 인덱스 쌍 반환',
    descEn: 'Find two indices that sum to target in O(N) using HashMap',
    code: `public int[] twoSum(int[] nums, int target) {
    Map<Integer, Integer> seen = new HashMap<>();
    for (int i = 0; i < nums.length; i++) {
        int need = target - nums[i];
        if (seen.containsKey(need)) {
            return new int[] { seen.get(need), i };
        }
        seen.put(nums[i], i);
    }
    return new int[] { -1, -1 };
}`,
  },
  {
    id: 'java-palindrome',
    language: 'java',
    languageLabel: 'Java',
    titleKo: '투 포인터 회문(Palindrome) 판별',
    titleEn: 'Two-Pointer Palindrome Check',
    descKo: '영문자와 숫자만 비교하여 대소문자 구분 없이 회문 여부 확인',
    descEn: 'Case-insensitive alphanumeric palindrome check',
    code: `public boolean isPalindrome(String s) {
    int left = 0, right = s.length() - 1;
    while (left < right) {
        while (left < right && !Character.isLetterOrDigit(s.charAt(left))) left++;
        while (left < right && !Character.isLetterOrDigit(s.charAt(right))) right--;
        if (Character.toLowerCase(s.charAt(left)) != Character.toLowerCase(s.charAt(right))) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}`,
  },
  {
    id: 'java-bank-account',
    language: 'java',
    languageLabel: 'Java',
    titleKo: '캡슐화 계좌 클래스',
    titleEn: 'Encapsulated BankAccount',
    descKo: '예외 검증이 포함된 입출금 메서드와 잔액 보호 객체지향 설계',
    descEn: 'Object-oriented account balance encapsulation with guards',
    code: `public class BankAccount {
    private long balance;

    public BankAccount(long initialBalance) {
        this.balance = Math.max(0, initialBalance);
    }
    public boolean withdraw(long amount) {
        if (amount <= 0 || amount > balance) return false;
        balance -= amount;
        return true;
    }
    public long getBalance() {
        return balance;
    }
}`,
  },
  {
    id: 'java-stream-filter',
    language: 'java',
    languageLabel: 'Java',
    titleKo: 'Java Stream 데이터 정제 파이프라인',
    titleEn: 'Stream Filter & Sort Pipeline',
    descKo: '공백 제거, 소문자 변환, 중복 제거 및 정렬을 선언형으로 처리',
    descEn: 'Clean, deduplicate, and sort tags with Java Streams',
    code: `public List<String> normalizeTags(List<String> rawTags) {
    return rawTags.stream()
        .filter(Objects::nonNull)
        .map(tag -> tag.trim().toLowerCase())
        .filter(tag -> !tag.isEmpty())
        .distinct()
        .sorted()
        .collect(Collectors.toList());
}`,
  },
  {
    id: 'java-bfs-queue',
    language: 'java',
    languageLabel: 'Java',
    titleKo: 'ArrayDeque 너비 우선 탐색 (BFS)',
    titleEn: 'BFS Traversal with ArrayDeque',
    descKo: '인접 리스트 그래프에서 시작 정점부터 방문 순서를 기록',
    descEn: 'Breadth-first graph traversal using ArrayDeque and boolean[]',
    code: `public List<Integer> bfs(List<List<Integer>> graph, int start) {
    List<Integer> order = new ArrayList<>();
    boolean[] visited = new boolean[graph.size()];
    Queue<Integer> queue = new ArrayDeque<>();
    visited[start] = true;
    queue.offer(start);
    while (!queue.isEmpty()) {
        int cur = queue.poll();
        order.add(cur);
        for (int next : graph.get(cur)) {
            if (!visited[next]) {
                visited[next] = true;
                queue.offer(next);
            }
        }
    }
    return order;
}`,
  },

  // ================= SQL (5) =================
  {
    id: 'sql-top-learners',
    language: 'sql',
    languageLabel: 'SQL',
    titleKo: '상위 학습자 리더보드 집계 쿼리',
    titleEn: 'Top Learners Leaderboard Query',
    descKo: 'JOIN과 GROUP BY로 유저별 완료 레벨 수와 최근 학습일을 조회',
    descEn: 'Aggregate cleared levels per user with INNER JOIN and ORDER BY',
    code: `SELECT
    p.id,
    p.display_name,
    COUNT(c.level_number) AS cleared_count,
    MAX(c.cleared_at) AS last_cleared_at
FROM public.profiles AS p
JOIN public.user_cleared_levels AS c
    ON c.user_id = p.id
GROUP BY p.id, p.display_name
HAVING COUNT(c.level_number) >= 5
ORDER BY cleared_count DESC, last_cleared_at DESC
LIMIT 20;`,
  },
  {
    id: 'sql-monthly-revenue',
    language: 'sql',
    languageLabel: 'SQL',
    titleKo: '월별 주문 매출 및 평균 객단가 리포트',
    titleEn: 'Monthly Revenue & AOV Report',
    descKo: 'DATE_TRUNC와 집계 함수로 결제 완료 주문의 월간 지표 산출',
    descEn: 'Summarize paid orders by month using DATE_TRUNC',
    code: `SELECT
    DATE_TRUNC('month', created_at) AS order_month,
    COUNT(*) AS total_orders,
    SUM(amount) AS gross_revenue,
    ROUND(AVG(amount), 2) AS avg_order_value
FROM orders
WHERE status = 'paid'
    AND created_at >= CURRENT_DATE - INTERVAL '6 months'
GROUP BY DATE_TRUNC('month', created_at)
ORDER BY order_month DESC;`,
  },
  {
    id: 'sql-window-rank',
    language: 'sql',
    languageLabel: 'SQL',
    titleKo: '언어 트랙별 타수 순위 윈도우 함수',
    titleEn: 'Track Ranking with DENSE_RANK',
    descKo: 'PARTITION BY 윈도우 함수로 각 언어 내 상위 3위 기록 추출',
    descEn: 'Rank top 3 speed coders per language using DENSE_RANK',
    code: `WITH ranked_records AS (
    SELECT
        user_id,
        language,
        MAX(best_cpm) AS top_cpm,
        DENSE_RANK() OVER (
            PARTITION BY language
            ORDER BY MAX(best_cpm) DESC
        ) AS rnk
    FROM public.user_speed_records
    GROUP BY user_id, language
)
SELECT user_id, language, top_cpm, rnk
FROM ranked_records
WHERE rnk <= 3;`,
  },
  {
    id: 'sql-stock-case',
    language: 'sql',
    languageLabel: 'SQL',
    titleKo: 'CASE 조건식을 활용한 재고 상태 분류',
    titleEn: 'Inventory Status with CASE',
    descKo: '남은 수량 구간에 따라 품절·부족·정상 라벨을 동적으로 부여',
    descEn: 'Classify product stock levels using a SQL CASE expression',
    code: `SELECT
    product_id,
    product_name,
    stock_qty,
    CASE
        WHEN stock_qty = 0 THEN 'OUT_OF_STOCK'
        WHEN stock_qty < 10 THEN 'LOW_STOCK'
        ELSE 'AVAILABLE'
    END AS stock_status
FROM products
WHERE is_active = TRUE
ORDER BY stock_qty ASC, product_id ASC;`,
  },
  {
    id: 'sql-unsolved-problems',
    language: 'sql',
    languageLabel: 'SQL',
    titleKo: 'NOT EXISTS 미해결 추천 문제 조회',
    titleEn: 'Unsolved Problems via NOT EXISTS',
    descKo: '사용자가 아직 풀지 않은 입문 문제를 안전하게 필터링하는 패턴',
    descEn: 'Find beginner problems not yet solved by a given user',
    code: `SELECT
    prob.id,
    prob.title,
    prob.difficulty
FROM problems AS prob
WHERE prob.difficulty = 'beginner'
    AND NOT EXISTS (
        SELECT 1
        FROM public.user_problem_solves AS s
        WHERE s.problem_id = prob.id
            AND s.user_id = $1
    )
ORDER BY prob.id ASC
LIMIT 10;`,
  },
];
