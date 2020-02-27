
import {
  guessNumber,
  calculateGdc,
  play,
} from './index.js';

// Constants for "gdc" task
const BRAIN_TASK = 'Find the greatest common divisor of given numbers.';
const MAX_GUESSED_NUMBERS = 100;

const generateTask = () => {
  const [num1, num2] = [guessNumber(MAX_GUESSED_NUMBERS), guessNumber(MAX_GUESSED_NUMBERS)];
  return {
    question: `${num1} ${num2}`,
    answer: String(calculateGdc(num1, num2)),
  };
};

// Main function
const gcd = () => {
  const gdcObj = {
    task: BRAIN_TASK,
    taskFunction: generateTask,
  };
  return play(gdcObj);
};

export default gcd;
