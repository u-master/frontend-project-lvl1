
import {
  guessNumber,
  play,
} from './index.js';

// Constants for "calc" task
const BRAIN_TASK = 'What is the result of the expression?';
const OPERATIONS = [
  {
    operation: '+',
    calculationFunction: ((a, b) => a + b),
  },
  {
    operation: '-',
    calculationFunction: ((a, b) => a - b),
  },
  {
    operation: '*',
    calculationFunction: ((a, b) => a * b),
  },
];

const generateTask = () => {
  const [operand1, operand2] = [guessNumber(), guessNumber()];
  const { operation, calculationFunction } = OPERATIONS[guessNumber(OPERATIONS.length) - 1];
  return {
    question: `${operand1} ${operation} ${operand2}`,
    answer: calculationFunction(operand1, operand2),
  };
};


const calc = () => {
  const calcObj = {
    task: BRAIN_TASK,
    taskFunction: generateTask,
  };
  return play(calcObj);
};

export default calc;
