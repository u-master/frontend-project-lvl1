
import { play } from '../index.js';
import { generateNumber } from '../utils.js';

// Constants for "even" game
const taskEvenGame = 'Answer "yes" if the number is even, otherwise answer "no".';
const maxNumber = 1000;

const isEven = (num) => (num % 2 === 0);
const getAnswer = (num) => (isEven(num) ? 'yes' : 'no');
const generateRound = () => {
  const num = generateNumber(1, maxNumber);
  return {
    question: String(num),
    answer: getAnswer(num),
  };
};

// Main function
const even = () => play(taskEvenGame, generateRound);

export default even;
