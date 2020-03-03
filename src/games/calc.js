
import play from '../index.js';
import { generateNumber } from '../utils.js';

// Constants for "calc" task
const taskCalcGame = 'What is the result of the expression?';
const defaultMaxNumber = 1000;

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
  const operand1 = generateNumber(1, defaultMaxNumber);
  const operand2 = generateNumber(1, defaultMaxNumber);
  const { operation, calculationFunction } = OPERATIONS[generateNumber(0, OPERATIONS.length - 1)];
  return {
    question: `${operand1} ${operation} ${operand2}`,
    answer: calculationFunction(operand1, operand2),
  };
};


const calc = () => play(taskCalcGame, generateTask);

export default calc;
