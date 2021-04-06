#!/usr/bin/env node
import readlineSync from 'readline-sync';
import getName from '../cli.js';

const name = getName;

const getAnswer = () => readlineSync.question('Your answer: ');

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const evenOrNot = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let tryCount = 0;
  for (let i = 0; i < 4; i += 1) {
    const randomNumber = getRandomInt;
    const evenNumber = (randomNumber % 2 === 0);
    console.log(`Question: ${randomNumber}`);
    const answer = getAnswer;

    if (answer === 'yes') {
      if (evenNumber === true) {
        console.log('Correct!');
        tryCount += 1;
      } else {
        console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
        break;
      }
    }

    if (answer === 'no') {
      if (evenNumber === false) {
        console.log('Correct!');
        tryCount += 1;
      } else {
        console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
        console.log(`Let's try again, ${name}`);
        break;
      }
    }
    console.log('It is wrong answer.');
    break;
  }

  if (tryCount === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};
export default evenOrNot();
