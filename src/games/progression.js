
import { play } from '../engine.js';
import generateNumber from '../generateNumber.js';

const makeProgressionString = (progression, position) => progression.map(
  (e, i) => (i === position ? '..' : String(e)),
).join(' ');

const makeProgression = (start, step, length) => {
  const progression = [];
  let currentValue = start;
  for (let i = 0; i < length; i += 1) {
    progression.push(currentValue);
    currentValue += step;
  }
  return progression;
};

const generateRound = () => {
  const start = generateNumber(-1000, 1000);
  const step = generateNumber(1, 20);
  const length = 10;
  const progression = makeProgression(start, step, length);
  const position = generateNumber(0, length - 1);
  return {
    question: makeProgressionString(progression, position),
    answer: String(progression[position]),
  };
};

// Main function
const playProgression = () => play(
  'What number is missing in the progression?',
  generateRound,
);

export default playProgression;
