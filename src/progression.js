import {
  makeNumber,
  play,
} from './index.js';

// Constants for "progression" task
const BRAIN_TASK = 'What number is missing in the progression?';
const AMOUNT_NUMBERS_IN_PROGRESSION = 10;
const MAX_STEP_PROGRESSION = 20;

const makeProgressionString = (start, step, space) => {
  const resArr = [];
  for (let i = 0, cur = start; i < AMOUNT_NUMBERS_IN_PROGRESSION; i += 1, cur += step) {
    resArr.push((i === space) ? '..' : `${cur}`);
  }
  return resArr.join(' ');
};

const generateTask = () => {
  const startNum = makeNumber();
  const stepProgression = makeNumber(MAX_STEP_PROGRESSION);
  const guessAtPosition = makeNumber(AMOUNT_NUMBERS_IN_PROGRESSION) - 1;

  return {
    question: makeProgressionString(startNum, stepProgression, guessAtPosition),
    answer: String(startNum + stepProgression * guessAtPosition),
  };
};

// Main function
const progression = () => {
  const progressionObj = {
    task: BRAIN_TASK,
    taskFunction: generateTask,
  };
  return play(progressionObj);
};

export default progression;
