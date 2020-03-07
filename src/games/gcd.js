
import { play } from '../engine.js';
import generateNumber from '../generateNumber.js';

// Constants for "gdc" game
const taskGCDGame = 'Find the greatest common divisor of given numbers.';
const maxNumber = 100;

// Find GDC of two numbers
const calculateGcd = (num1, num2) => {
  const [a, b] = ((num1 < num2) ? [num2, num1] : [num1, num2]);
  const remains = a % b;
  if (remains === 0 || b === 0) {
    return b;
  }
  return calculateGcd(b, remains);
};

const generateRound = () => {
  const num1 = generateNumber(1, maxNumber);
  const num2 = generateNumber(1, maxNumber);
  return {
    question: `${num1} ${num2}`,
    answer: String(calculateGcd(num1, num2)),
  };
};

// Main function
const gcd = () => play(taskGCDGame, generateRound);

export default gcd;
