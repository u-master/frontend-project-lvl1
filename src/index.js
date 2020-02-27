
import readlineSync from 'readline-sync';

/* Common constants */
const DEFAULT_MAX_GUESSED_NUM = 1000;
const DEFAULT_TASK_ITERATIONS = 3;

/* Common functions */

// Generate random number and return it
const guessNumber = (max = DEFAULT_MAX_GUESSED_NUM) => Math.ceil(Math.random() * max);

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
  guessNumber,
  play,
};
export default () => greeting();
