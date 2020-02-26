
import readlineSync from 'readline-sync';

const main = () => {
  console.log('Welcome to the Brain Games!\n');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const even = () => {
  const MAX_GUESSED = 1000;
  const EVEN_ANSWER = 'yes';
  const ODD_ANSWER = 'no';

  const guessNumber = () => Math.ceil(Math.random() * MAX_GUESSED);

  const getCorrectAnswer = (num) => ((num % 2 === 0) ? EVEN_ANSWER : ODD_ANSWER);

  const askIfEvenNumber = (num) => {
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ').trim().toLowerCase();
    const correctAnswer = getCorrectAnswer(num);
    if (correctAnswer === answer) {
      console.log('Correct!');
      return true;
    }
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
    return false;
  };

  const userName = main();
  let isWin = true;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 1; i <= 3 && isWin; i += 1) {
    const number = guessNumber();
    isWin = askIfEvenNumber(number);
  }
  if (isWin) {
    console.log(`Congratulations, ${userName}!`);
    return true;
  }
  console.log(`Let's try again, ${userName}!`);
  return false;
};

export { even };
export default main;
