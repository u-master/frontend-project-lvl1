
import { play } from '../engine.js';
import generateNumber from '../generateNumber.js';

const amountNumbersInProgression = 10;

const makeProgressionString = (start, step, space) => {
  const resArr = [];
  for (let i = 0, cur = start; i < amountNumbersInProgression; i += 1, cur += step) {
    resArr.push((i === space) ? '..' : `${cur}`);
  }
  return resArr.join(' ');
};

const generateRound = () => {
  const startNum = generateNumber(-1000, 1000);
  const stepProgression = generateNumber(1, 20);
  const guessAtPosition = generateNumber(0, amountNumbersInProgression - 1);

  return {
    question: makeProgressionString(startNum, stepProgression, guessAtPosition),
    answer: String(startNum + stepProgression * guessAtPosition),
  };
};

// Main function
const playProgression = () => play(
  'What number is missing in the progression?',
  generateRound,
);

export default playProgression;
