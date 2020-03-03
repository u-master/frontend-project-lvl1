
/** Brain games engine and some tools
 *
 * play - main engine function
 *   GET:   task,          - String with task description
 *          generateRound, - Function generated question and answer, it must return
 *                           round = {
 *                             question,   - String with question
 *                             answer,     - String with answer
 *                           }
 *   RETURN:
 *     true - if win, false - if loose.
 *
 */

import readlineSync from 'readline-sync';

/* Common constants */
const defaultRoundsAmount = 3;

const showAbout = () => {
  console.log(`
    Welcome to the Brain Games!
    Type following commands to start game:
    brain-even
    brain-calc
    brain-gcd
    brain-progression
    brain-prime`);
};

// Play engine
const play = (task, generateRound) => {
  console.log('Welcome to the Brain Games!\n');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(task);
  let isWin = true;
  for (let i = 1; i <= defaultRoundsAmount && isWin; i += 1) {
    const round = generateRound();
    console.log(`Question: ${round.question}`);
    const answer = readlineSync.question('Your answer: ').trim().toLowerCase();
    if (String(round.answer) === answer) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${round.answer}".`);
      isWin = false;
    }
  }
  if (isWin) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
};

export { play };

export default showAbout;
