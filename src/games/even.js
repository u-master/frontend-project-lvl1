
import play from '../engine.js';
import generateNumber from '../generateNumber.js';

// Check if number is even
const isEven = (num) => (num % 2 === 0);

const getAnswer = (num) => (isEven(num) ? 'yes' : 'no');

const generateRound = () => {
  const num = generateNumber(1, 1000);
  return {
    question: String(num),
    answer: getAnswer(num),
  };
};

// Main function
const playEven = () => play(
  'Answer "yes" if the number is even, otherwise answer "no".',
  generateRound,
);

export default playEven;
