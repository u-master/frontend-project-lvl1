
import {
  guessNumber,
  play,
} from './index.js';

// Constants for "even" task
const BRAIN_TASK = 'Answer "yes" if the number is even, otherwise answer "no".';
const EVEN_ANSWER = 'yes';
const ODD_ANSWER = 'no';

const answerTask = (num) => ((num % 2 === 0) ? EVEN_ANSWER : ODD_ANSWER);
const generateTask = () => {
  const num = guessNumber();
  return {
    question: String(num),
    answer: answerTask(num),
  };
};

// Main function
const even = () => {
  const evenObj = {
    task: BRAIN_TASK,
    taskFunction: generateTask,
  };
  return play(evenObj);
};

export default even;
