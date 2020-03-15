
import play from '../engine.js';
import generateNumber from '../generateNumber.js';

const progressionLength = 10;

const getQuestion = (progression, indexHidden) => progression.map(
  (e, i) => (i === indexHidden ? '..' : String(e)),
).join(' ');

const makeProgression = (start, step) => {
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
};

const generateRound = () => {
  const start = generateNumber(-1000, 1000);
  const step = generateNumber(1, 20);
  const progression = makeProgression(start, step);
  const hiddenElementIndex = generateNumber(0, progressionLength - 1);
  return {
    question: getQuestion(progression, hiddenElementIndex),
    answer: String(progression[hiddenElementIndex]),
  };
};

// Main function
const playProgression = () => play(
  'What number is missing in the progression?',
  generateRound,
);

export default playProgression;
