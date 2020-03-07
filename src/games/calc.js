
import { play } from '../engine.js';
import generateNumber from '../generateNumber.js';

// Constants for "calc" game
const taskCalcGame = 'What is the result of the expression?';
const maxNumber = 1000;

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

const generateRound = () => {
  const operand1 = generateNumber(1, maxNumber);
  const operand2 = generateNumber(1, maxNumber);
  const { operation, calculationFunction } = OPERATIONS[generateNumber(0, OPERATIONS.length - 1)];
  return {
    question: `${operand1} ${operation} ${operand2}`,
    answer: calculationFunction(operand1, operand2),
  };
};


const calc = () => play(taskCalcGame, generateRound);

export default calc;
