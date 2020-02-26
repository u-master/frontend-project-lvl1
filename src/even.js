
import readlineSync from 'readline-sync';

import main from './index.js';

// Constants for "even" module
const MAX_GUESSED = 1000;
const EVEN_ANSWER = 'yes';
const ODD_ANSWER = 'no';

// Generate random number and return it
const guessNumber = () => Math.ceil(Math.random() * MAX_GUESSED);

const getCorrectAnswer = (num) => ((num % 2 === 0) ? EVEN_ANSWER : ODD_ANSWER);

// Interact with user: show guessed number and answer if correct or not
const askIfEvenNumber = (num) => {
  console.log(`Question: ${num}`);
  const answer = readlineSync.question('Your answer: ').trim().toLowerCase();
  const correctAnswer = getCorrectAnswer(num);

  if (correctAnswer === answer) {
    console.log('Correct!');
    return true;
  }
  console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
  return false;
};

// Main function
const even = () => {
  const userName = main();
  let isWin = true;

  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 1; i <= 3 && isWin; i += 1) {
    const number = guessNumber();
    isWin = askIfEvenNumber(number);
  }

  if (isWin) {
    console.log(`Congratulations, ${userName}!`);
    return true;
  }
  console.log(`Let's try again, ${userName}!`);
  return false;
};

export default even;
