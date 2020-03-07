
import { play } from '../engine.js';
import generateNumber from '../generateNumber.js';

// Constants for "progression" task
const taskPrimeGame = 'What number is missing in the progression?';
const amountNumbersInProgression = 10;
const maxStepProgression = 20;
const minStartNumber = -1000;
const maxStartNumber = 1000;

const makeProgressionString = (start, step, space) => {
  const resArr = [];
  for (let i = 0, cur = start; i < amountNumbersInProgression; i += 1, cur += step) {
    resArr.push((i === space) ? '..' : `${cur}`);
  }
  return resArr.join(' ');
};

const generateRound = () => {
  const startNum = generateNumber(minStartNumber, maxStartNumber);
  const stepProgression = generateNumber(1, maxStepProgression);
  const guessAtPosition = generateNumber(0, amountNumbersInProgression - 1);

  return {
    question: makeProgressionString(startNum, stepProgression, guessAtPosition),
    answer: String(startNum + stepProgression * guessAtPosition),
  };
};

// Main function
const progression = () => play(taskPrimeGame, generateRound);

export default progression;
