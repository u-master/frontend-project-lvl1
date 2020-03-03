
/** Brain games engine and some tools
 *
 * play - main engine function
 *   GET:   task,         - String with task description
 *          taskFunction, - Function generated question and answer, it must return taskObj
 *                          taskObj = {
 *                            question,   - String with question
 *                            answer,     - String with answer
 *                          }
 *   RETURN:
 *     true - if win, false - if lost.
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

/* Game Engine functions */

// Greeting and get user name
const greeting = () => {
  console.log('Welcome to the Brain Games!\n');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

// Interact with user: show guessed question and answer if correct or not
const askQuestion = (question, correctAnswer) => {
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ').trim().toLowerCase();

  if (String(correctAnswer) === answer) {
    console.log('Correct!');
    return true;
  }
  console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
  return false;
};

// Play engine
const play = (task, generateRound) => {
  const userName = greeting();
  console.log(task);
  let isWin = true;
  for (let i = 1; i <= defaultRoundsAmount && isWin; i += 1) {
    const round = generateRound();
    isWin = askQuestion(round.question, round.answer);
  }
  if (isWin) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
  return isWin;
};

export { play };

export default showAbout;
