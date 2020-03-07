
import { play } from '../engine.js';
import generateNumber from '../generateNumber.js';

// Constants for "prime" game
const taskPrimeGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const maxNumber = 25;

// Check if number is prime
const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  const maxDivisor = Math.floor(num / 2);
  for (let divisor = 2; divisor <= maxDivisor; divisor += 1) {
    if (num % divisor === 0) {
      return false;
    }
  }
  return true;
};

// Find a task solution
const getAnswer = (num) => (isPrime(num) ? 'yes' : 'no');

const generateRound = () => {
  const num = generateNumber(1, maxNumber);
  return {
    question: String(num),
    answer: getAnswer(num),
  };
};

// Main function
const prime = () => play(taskPrimeGame, generateRound);

export default prime;
