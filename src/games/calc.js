
import play from '../engine.js';
import generateNumber from '../generateNumber.js';

const operations = [
  {
    operator: '+',
    calculate: (a, b) => a + b,
  },
  {
    operator: '-',
    calculate: (a, b) => a - b,
  },
  {
    operator: '*',
    calculate: (a, b) => a * b,
  },
];

const generateRound = () => {
  const operand1 = generateNumber(1, 1000);
  const operand2 = generateNumber(1, 1000);
  const { operator, calculate } = operations[generateNumber(0, operations.length - 1)];
  return {
    question: `${operand1} ${operator} ${operand2}`,
    answer: calculate(operand1, operand2),
  };
};


const playCalc = () => play(
  'What is the result of the expression?',
  generateRound,
);

export default playCalc;
