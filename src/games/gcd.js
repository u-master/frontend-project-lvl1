
import { play } from '../engine.js';
import generateNumber from '../generateNumber.js';

// Constants for "gdc" game
const taskGCDGame = 'Find the greatest common divisor of given numbers.';
const maxNumber = 100;

// Find GDC of two numbers
const calculateGcd = (num1, num2) => {
  const remains = num1 % num2;
  if (remains === 0 || num2 === 0) {
    return num2;
  }
  return calculateGcd(num2, remains);
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
