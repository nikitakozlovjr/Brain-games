import startGame from '../index.js';
import getRandomNum from '../getRandomNum.js';

const description = 'What number is missing in the progression?';

const progressLogic = (progressBegin, progressLength, stepProgress) => {
  let arr = [];
  for (let i = 0; i < progressLength; i += 1) {
    // ------ progression formation. ---------------
    arr.push(progressBegin + (i * stepProgress));
  }
  const pass = arr[Math.floor(Math.random() * arr.length)];
  arr[arr.indexOf(pass)] = '..';
  arr = String(arr.join(' '));
  return [arr, pass];
};

const rulQuestAndAns = () => {
  const progressBegin = getRandomNum(1, 50);
  const progressLength = getRandomNum(5, 10);
  const passNum = getRandomNum(1, 10);
  const [question, currAnswer] = progressLogic(progressBegin, progressLength, passNum);
  const answer = String(currAnswer);
  return [question, answer];
};

const progressGame = () => {
  startGame(description, rulQuestAndAns);
};

export default progressGame;