
/** Brain games engine and some tools
 *
 * play - main engine function
 *   GET:   description,          - String with task description
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

const roundsNumber = 3;

// Play engine
const play = (description, generateRound) => {
  console.log('Welcome to the Brain Games!\n');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);
  for (let i = 0; i < roundsNumber; i += 1) {
    const { question, answer } = generateRound();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ').trim().toLowerCase();
    if (answer !== userAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default play;
