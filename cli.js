import readlineSync from 'readline-sync';

const getName = () => {
  const name = readlineSync.question('May I have your name? ');
  return name;
  // const greeting = `Hello, ${name}!`;
  // return greeting;
};
export default getName();
