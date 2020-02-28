
import {
  makeNumber,
  calculateGcd,
  play,
} from './index.js';

// Constants for "gdc" task
const BRAIN_TASK = 'Find the greatest common divisor of given numbers.';
const MAX_GUESSED_NUMBERS = 100;

const generateTask = () => {
  const [num1, num2] = [makeNumber(MAX_GUESSED_NUMBERS), makeNumber(MAX_GUESSED_NUMBERS)];
  return {
    question: `${num1} ${num2}`,
    answer: String(calculateGcd(num1, num2)),
  };
};

// Main function
const gcd = () => {
  const gcdObj = {
    task: BRAIN_TASK,
    taskFunction: generateTask,
  };
  return play(gcdObj);
};

export default gcd;
