
import play from '../index.js';
import { generateNumber } from '../utils.js';

// Constants for "even" game
const taskEvenGame = 'Answer "yes" if the number is even, otherwise answer "no".';
const answerEven = 'yes';
const answerOdd = 'no';

const isEven = (num) => (num % 2 === 0);
const answerTask = (num) => (isEven(num) ? answerEven : answerOdd);
const generateTask = () => {
  const num = generateNumber();
  return {
    question: String(num),
    answer: answerTask(num),
  };
};

// Main function
const even = () => play(taskEvenGame, generateTask);

export default even;
