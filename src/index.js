
/** Brain games engine and some tools
 *
 * play - main engine function
 *   GET: playObj = {
 *          task,         - String with task description
 *          taskFunction, - Function generated question and answer, it must return taskObj
 *                          taskObj = {
 *                            question,   - String with question
 *                            answer,     - String with answer
 *                          }
 *          iterations,   - Not required. Amout iterations of tasks.
 *                          By default is equal const DEFAULT_TASK_ITERATIONS.
 *        }
 *   RETURN:
 *     true - if win, false - if lost.
 *
 *
 * makeNumber - generate a random number (from 1)
 *   GET: max   - Not required. Max random number.
 *                By default is equal const DEFAULT_MAX_RANDOM_NUM.
 *   RETURN:
 *     random generated number
 *
 *
 * calculateGcd - find greatest common divisor of two numbers
 *   GET: num1, num2  - two numbers
 *   RETURN: GCD of num1 and num2
 *
 */

import readlineSync from 'readline-sync';

/* Common constants */
const DEFAULT_MAX_RANDOM_NUM = 1000;
const DEFAULT_TASK_ITERATIONS = 3;

/* Common functions */

// Generate random number and return it
const makeNumber = (max = DEFAULT_MAX_RANDOM_NUM) => Math.ceil(Math.random() * max);

// Find GDC of two numbers
const calculateGcd = (num1, num2) => {
  const [a, b] = (num1 < num2) ? [num2, num1] : [num1, num2];
  const remains = a % b;
  if (remains === 0 || b === 0) {
    return b;
  }
  return calculateGcd(b, remains);
};

/* Game Engine functions */

// Greeting and get user name
const greeting = () => {
  console.log('Welcome to the Brain Games!\n');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

// Show task for user
const showBrainTask = (task) => console.log(task);

// Show task results
const showBrainResults = (isWin, userName) => {
  if (isWin) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
  return isWin;
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

// Task loop
const taskLoop = (taskFunc, iteration) => {
  let isWin = true;
  for (let i = 1; i <= iteration && isWin; i += 1) {
    const task = taskFunc();
    isWin = askQuestion(task.question, task.answer);
  }
  return isWin;
};

// Play engine
const play = ({
  task,
  taskFunction,
  iterations = DEFAULT_TASK_ITERATIONS,
}) => {
  if (typeof taskFunction !== 'function') {
    return false;
  }
  const userName = greeting();
  showBrainTask(task);
  const isWin = taskLoop(taskFunction, iterations);
  return showBrainResults(isWin, userName);
};

export {
  makeNumber,
  calculateGcd,
  play,
};
export default () => greeting();
