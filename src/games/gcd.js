
import { play } from '../index.js';
import { generateNumber, calculateGcd } from '../utils.js';

// Constants for "gdc" game
const taskGCDGame = 'Find the greatest common divisor of given numbers.';
const maxNumber = 100;

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
