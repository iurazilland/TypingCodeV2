import { PracticeRound } from '@/lib/practiceTypes';

// ============================================================================
// 파이썬 기초 11레벨: 복합 대입 연산자 (13단계 표준 구성)
// - 10레벨의 `변수 = 변수 + 값` 패턴을 긴 변수명과 함께 나란히 비교하며 축약 원리 체득
// - [1,3,5,7,9단계] 블록 코딩 개념 도입 (통합 변수 블록의 = 드롭다운 활용)
// - [2,4,6,8,10단계] 빈칸 채우기 타이핑 실습 (fill_blank)
// - [11단계] 버그 수정 (fix_bug)
// - [12단계] 예제 아래 한 줄 코드 추가 작성 (one_line)
// - [13단계] 출력 결과 예측 4지선다 퀴즈 (predict_output)
// ============================================================================
export const PYTHON_LEVEL_11: PracticeRound = {
  id: 'py-basic-r11',
  language: 'python',
  trackId: 'python',
  moduleId: 'py-basic',
  roundNumber: 11,
  title_ko: '11레벨: 복합 대입 연산자 (+=, -=, *=, /=)',
  title_en: 'Level 11: Compound Assignment Operators',
  totalQuestions: 13,
  unlockedBlocks: ['print', 'variable'],
  questions: [
    // ------------------------------------------------------------------------
    // Pair 1 (1~2단계): += 누적 더하기 대입 (변수 = 변수 + 값 축약 인식)
    // ------------------------------------------------------------------------
    {
      id: 1,
      step: 1,
      type: 'block',
      prompt_ko: 'player_score에 100을 저장한 뒤, 둘째 줄은 player_score = player_score + 10으로 10을 더하고, 셋째 줄은 이를 줄여 쓴 += 연산자(player_score += 20)로 20을 더해 130을 출력해보세요.',
      prompt_en: 'Set player_score to 100, add 10 using player_score = player_score + 10, then add 20 using the shorthand player_score += 20 and print 130.',
      hint_ko: '긴 변수명을 두 번 적는 player_score = player_score + 20은 player_score += 20으로 줄여 쓸 수 있습니다. 셋째 블록의 =를 클릭해 +=로 선택하세요.',
      hint_en: 'Instead of repeating a long name in player_score = player_score + 20, shorten it to player_score += 20 by clicking = on the third block.',
      targetCode: 'player_score = 100\nplayer_score = player_score + 10\nplayer_score += 20\nprint(player_score)',
      expectedVariables: { player_score: 130 },
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '130',
        },
      ],
    },
    {
      id: 2,
      step: 2,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '둘째 줄처럼 긴 변수명을 두 번 쓰는 대신, 셋째 줄 빈칸에 복합 대입 기호를 채워 quest_exp에 30을 더하고 100을 출력해보세요.',
      prompt_en: 'Instead of repeating quest_exp twice like line 2, fill in the compound operator on line 3 to add 30 and print 100.',
      hint_ko: 'quest_exp = quest_exp + 30을 줄여 쓰는 복합 대입 연산자는 +=입니다.',
      hint_en: 'The shorthand compound operator for quest_exp = quest_exp + 30 is +=.',
      templateCode: 'quest_exp = 50\nquest_exp = quest_exp + 20\nquest_exp §§ 30\nprint(quest_exp)',
      targetCode: 'quest_exp = 50\nquest_exp = quest_exp + 20\nquest_exp += 30\nprint(quest_exp)',
      expectedVariables: { quest_exp: 100 },
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '100',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // Pair 2 (3~4단계): -= 값 차감 대입 (변수 = 변수 - 값 축약 인식)
    // ------------------------------------------------------------------------
    {
      id: 3,
      step: 3,
      type: 'block',
      prompt_ko: 'health_point에 100을 저장한 뒤, 둘째 줄은 health_point = health_point - 15로 빼고, 셋째 줄은 이를 줄여 쓴 -= 연산자(health_point -= 25)로 차감해 60을 출력해보세요.',
      prompt_en: 'Set health_point to 100, subtract 15 using health_point = health_point - 15, then subtract 25 using health_point -= 25 and print 60.',
      hint_ko: 'health_point = health_point - 25를 줄여 쓰려면 셋째 블록의 =를 클릭해 -=로 바꾸고 오른쪽에 25를 넣으세요.',
      hint_en: 'Click = on the third block and select -= to shorten health_point = health_point - 25.',
      targetCode: 'health_point = 100\nhealth_point = health_point - 15\nhealth_point -= 25\nprint(health_point)',
      expectedVariables: { health_point: 60 },
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '60',
        },
      ],
    },
    {
      id: 4,
      step: 4,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: 'battery_level = battery_level - 25를 줄여 쓰도록 빈칸에 복합 대입 기호를 채워 남은 배터리 55를 출력해보세요.',
      prompt_en: 'Fill in the compound operator that shortens battery_level = battery_level - 25 to print 55.',
      hint_ko: '변수 자신의 값에서 오른쪽 값을 빼서 다시 저장하는 축약 연산자는 -=입니다.',
      hint_en: 'Use -= to shorten subtracting from a variable and reassigning it.',
      templateCode: 'battery_level = 80\nbattery_level §§ 25\nprint(battery_level)',
      targetCode: 'battery_level = 80\nbattery_level -= 25\nprint(battery_level)',
      expectedVariables: { battery_level: 55 },
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '55',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // Pair 3 (5~6단계): *= 배수 곱셈 대입 (변수 = 변수 * 값 축약 인식)
    // ------------------------------------------------------------------------
    {
      id: 5,
      step: 5,
      type: 'block',
      prompt_ko: 'ticket_price에 1000을 저장한 뒤, 둘째 줄은 ticket_price = ticket_price * 2로 2배를 만들고, 셋째 줄은 *= 연산자(ticket_price *= 3)로 3배를 곱해 6000을 출력해보세요.',
      prompt_en: 'Set ticket_price to 1000, double it with ticket_price = ticket_price * 2, then triple it with ticket_price *= 3 and print 6000.',
      hint_ko: 'ticket_price = ticket_price * 3을 줄여 쓴 형태가 ticket_price *= 3입니다. 셋째 블록의 =를 *=로 변경하세요.',
      hint_en: 'ticket_price *= 3 is shorthand for ticket_price = ticket_price * 3. Select *= on the third block.',
      targetCode: 'ticket_price = 1000\nticket_price = ticket_price * 2\nticket_price *= 3\nprint(ticket_price)',
      expectedVariables: { ticket_price: 6000 },
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '6000',
        },
      ],
    },
    {
      id: 6,
      step: 6,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: 'attack_power = attack_power * 4를 줄여 쓰도록 빈칸에 복합 대입 기호를 채워 공격력 48을 출력해보세요.',
      prompt_en: 'Fill in the compound operator that shortens attack_power = attack_power * 4 to print 48.',
      hint_ko: '기존 변수 값에 오른쪽 값을 곱해 다시 저장하는 축약 연산자는 *=입니다.',
      hint_en: 'Use *= to multiply the variable in place.',
      templateCode: 'attack_power = 12\nattack_power §§ 4\nprint(attack_power)',
      targetCode: 'attack_power = 12\nattack_power *= 4\nprint(attack_power)',
      expectedVariables: { attack_power: 48 },
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '48',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // Pair 4 (7~8단계): /= (실수 나눗셈 대입)와 //= (정수 몫 대입)
    // ------------------------------------------------------------------------
    {
      id: 7,
      step: 7,
      type: 'block',
      prompt_ko: 'total_price에 200을 저장한 뒤, 둘째 줄은 total_price = total_price / 2로 나누고, 셋째 줄은 /= 연산자(total_price /= 4)로 나누어 실수 결과 25.0을 출력해보세요.',
      prompt_en: 'Set total_price to 200, divide by 2 using total_price = total_price / 2, then divide by 4 using total_price /= 4 and print 25.0.',
      hint_ko: 'total_price = total_price / 4는 total_price /= 4로 줄여 쓸 수 있으며, 결과는 항상 소수점이 있는 실수(25.0)가 됩니다.',
      hint_en: 'total_price /= 4 shortens total_price = total_price / 4 and stores a float (25.0).',
      targetCode: 'total_price = 200\ntotal_price = total_price / 2\ntotal_price /= 4\nprint(total_price)',
      expectedVariables: { total_price: 25 },
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '25.0',
        },
      ],
    },
    {
      id: 8,
      step: 8,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: 'item_count = item_count // 5를 줄여 쓰도록 세 글자 빈칸을 채워 23을 5로 나눈 정수 몫(4)만 저장하고 출력해보세요.',
      prompt_en: 'Fill in the three-character operator that shortens item_count = item_count // 5 to print the integer quotient 4.',
      hint_ko: '정수 몫 연산자(//)와 대입(=)을 합친 세 글자 복합 대입 연산자는 //=입니다.',
      hint_en: 'Combine floor division (//) with = to write //=.',
      templateCode: 'item_count = 23\nitem_count §§§ 5\nprint(item_count)',
      targetCode: 'item_count = 23\nitem_count //= 5\nprint(item_count)',
      expectedVariables: { item_count: 4 },
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '4',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // Pair 5 (9~10단계): 문자열에 += 사용하여 뒤에 글자 덧붙이기
    // ------------------------------------------------------------------------
    {
      id: 9,
      step: 9,
      type: 'block',
      prompt_ko: 'welcome_msg에 "Hello"를 저장한 뒤, 둘째 줄은 welcome_msg = welcome_msg + " "로 공백을 잇고, 셋째 줄은 += 연산자로 "Python"을 덧붙여 Hello Python을 출력해보세요.',
      prompt_en: 'Set welcome_msg to "Hello", append " " with welcome_msg = welcome_msg + " ", then append "Python" with += and print Hello Python.',
      hint_ko: '문자열도 welcome_msg = welcome_msg + "Python" 대신 welcome_msg += "Python"으로 간편하게 뒤에 이어붙일 수 있습니다.',
      hint_en: 'Strings also support +=: welcome_msg += "Python" shortens welcome_msg = welcome_msg + "Python".',
      targetCode: 'welcome_msg = "Hello"\nwelcome_msg = welcome_msg + " "\nwelcome_msg += "Python"\nprint(welcome_msg)',
      expectedVariables: { welcome_msg: 'Hello Python' },
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'Hello Python',
        },
      ],
    },
    {
      id: 10,
      step: 10,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: 'version_tag = version_tag + " 3"을 줄여 쓰도록 빈칸에 복합 대입 기호를 채워 Python 3을 출력해보세요.',
      prompt_en: 'Fill in the compound operator shortening version_tag = version_tag + " 3" to print Python 3.',
      hint_ko: '문자열 변수 뒤에 다른 문자열을 이어붙여 저장할 때도 += 연산자를 사용합니다.',
      hint_en: 'Use += to concatenate onto an existing string variable.',
      templateCode: 'version_tag = "Python"\nversion_tag §§ " 3"\nprint(version_tag)',
      targetCode: 'version_tag = "Python"\nversion_tag += " 3"\nprint(version_tag)',
      expectedVariables: { version_tag: 'Python 3' },
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'Python 3',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 11단계: 버그 수정 (fix_bug) - =+ 오타(양수 덮어쓰기 버그) 교정
    // ------------------------------------------------------------------------
    {
      id: 11,
      step: 11,
      type: 'typing',
      kind: 'fix_bug',
      prompt_ko: '연산자 순서 실수 때문에 total_gold에 40이 누적되지 않고 덮어써지는 버그를 수정하여 140이 출력되도록 해보세요.',
      prompt_en: 'Fix the operator order bug overwriting total_gold with +40 instead of adding 40 so that 140 is printed.',
      hint_ko: 'total_gold =+ 40은 양수 +40을 그냥 대입하는 코드가 됩니다. total_gold = total_gold + 40을 줄인 +=로 순서를 바로잡으세요.',
      hint_en: 'total_gold =+ 40 simply assigns positive 40. Put the plus sign first as +=.',
      templateCode: 'total_gold = 100\ntotal_gold =+ 40\nprint(total_gold)',
      targetCode: 'total_gold = 100\ntotal_gold += 40\nprint(total_gold)',
      expectedVariables: { total_gold: 140 },
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '140',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 12단계: 예제 아래 한 줄 추가 작성 (one_line)
    // ------------------------------------------------------------------------
    {
      id: 12,
      step: 12,
      type: 'typing',
      kind: 'one_line',
      prompt_ko: '복합 대입으로 점수를 갱신하는 코드 아래에 한 줄을 추가하여 최종 final_score의 값 250을 출력해보세요.',
      prompt_en: 'Type the compound assignment lines and add a line below to print the final_score (250).',
      hint_ko: '세 줄의 점수 계산 코드를 입력한 뒤, 넷째 줄에 print(final_score)를 입력하세요.',
      hint_en: 'Type the three score calculation lines, then add print(final_score) on line 4.',
      templateCode: 'final_score = 100\nfinal_score += 25\nfinal_score *= 2\n§§§§§§§§§§§§§§§§§§',
      targetCode: 'final_score = 100\nfinal_score += 25\nfinal_score *= 2\nprint(final_score)',
      expectedVariables: { final_score: 250 },
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '250',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 13단계: 출력 결과 예측 선택 (predict_output)
    // ------------------------------------------------------------------------
    {
      id: 13,
      step: 13,
      type: 'quiz',
      kind: 'predict_output',
      prompt_ko: '다음 파이썬 코드를 실행했을 때 화면에 출력될 올바른 결과를 선택해보세요.',
      prompt_en: 'Select the exact output that will be printed when the following Python code runs.',
      hint_ko: '10에서 시작해 + 5로 15가 되고, *= 2(energy_level = energy_level * 2)로 30이 된 뒤, //= 4로 30을 4로 나눈 정수 몫 7이 저장됩니다.',
      hint_en: 'Starting at 10: + 5 gives 15, *= 2 gives 30, and //= 4 takes the integer quotient of 30 // 4 = 7.',
      targetCode: 'energy_level = 10\nenergy_level = energy_level + 5\nenergy_level *= 2\nenergy_level //= 4\nprint(energy_level)',
      choices: ['7', '7.5', '5', '20'],
      correctChoiceIndex: 0,
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '7',
        },
      ],
    },
  ],
};
