
import play from '../engine.js';
import generateNumber from '../generateNumber.js';

// Check if number is prime
const isPrime = (num) => {
  if (num < 2 || (num % 2 === 0 && num !== 2)) {
    return false;
  }
  const maxDivisor = Math.floor(Math.sqrt(num));
  for (let divisor = 3; divisor <= maxDivisor; divisor += 2) {
    if (num % divisor === 0) {
      return false;
    }
  }
  return true;
};

// Find a task solution
const getAnswer = (num) => (isPrime(num) ? 'yes' : 'no');

const generateRound = () => {
  const num = generateNumber(1, 25);
  return {
    question: String(num),
    answer: getAnswer(num),
  };
};

// Main function
const playPrime = () => play(
  'Answer "yes" if given number is prime. Otherwise answer "no".',
  generateRound,
);

export default playPrime;
