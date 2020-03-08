
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
  for (let i = 0; i < defaultRoundsAmount; i += 1) {
    const { question, answer } = generateRound();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ').trim().toLowerCase();
    if (answer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export { play };

export default showAbout;
