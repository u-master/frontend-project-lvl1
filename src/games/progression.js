
import play from '../engine.js';
import generateNumber from '../generateNumber.js';

const getQuestion = (progression, indexHidden) => progression.map(
  (e, i) => (i === indexHidden ? '..' : String(e)),
).join(' ');

const makeProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
};

const generateRound = () => {
  const start = generateNumber(-1000, 1000);
  const step = generateNumber(1, 20);
  const length = 10;
  const progression = makeProgression(start, step, length);
  const indexHidden = generateNumber(0, length - 1);
  return {
    question: getQuestion(progression, indexHidden),
    answer: String(progression[indexHidden]),
  };
};

// Main function
const playProgression = () => play(
  'What number is missing in the progression?',
  generateRound,
);

export default playProgression;
