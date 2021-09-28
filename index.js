const read = require('readline-sync');
const chalk = require('chalk');
const fonts = require('cfonts');

// TODO: define color palette

const title = 'Do You Know Me?';
fonts.say(title, {font: 'tiny', align: 'center'});

let userName = read.question('PLease enter your name:\t');
console.log(`Welcome ${userName}, to "${title}" quiz.\n`);

function displayInstructions() {
  console.log(`INSTRUCTIONS:
1. There are 5 questions in the quiz to test how well you know me.
2. For each correct answer you will gain 2 points.
3. For each incorrect answer you will lose 1 point.
4. Correct answer for every question will be displayed after your attempt.\n`);
}

function startQuiz() {
  const start = read
    .question('Are you ready for the challenge? (Y/N)\t')
    .toLowerCase();
  if (start === 'n') {
    console.log('Come back when you are ready!\n');
  } else {
    console.log("Then let's get started!\n");
    displayInstructions();
    game();
    showScores();
  }
}

const questionBank = [
  {
    question: `Which is my favorite sport?
    a. Cricket
    b. Football
    c. Chess
    d. Hockey\n`,
    option: 'c',
    answer: 'c. Chess',
  },
  {
    question: `Which is my favorite genre of music?
    a. Rock
    b. Classical
    c. Pop
    d. Heavy Metal\n`,
    option: 'b',
    answer: 'b. Classical',
  },
  {
    question: `Which is my most used App/Website?
    a. YouTube
    b. Chrome
    c. WhatsApp
    d. VS Code\n`,
    option: 'a',
    answer: 'a. YouTube',
  },
  {
    question: `Which is my favorite color?
    a. Red
    b. White
    c. Green
    d. Blue\n`,
    option: 'white',
    answer: 'b. White',
  },
  {
    question: `Who is my favorite superhero?
    a. Iron Man
    b. Hulk
    c. Spider Man
    d. Shaktimaan\n`,
    option: 'd',
    answer: 'd. Shaktimaan',
  },
];

let userScore = 0;

function evaluateQuiz(question, option, answer) {
  let userAnswer = read.question(question);
  if (userAnswer.toLowerCase() === option) {
    console.log(`Correct Answer 😃`);
    userScore += 2;
  } else {
    console.log(`Incorrect Answer ☹️`);
    console.log(`The correct answer is: ${answer}`);
    userScore -= 1;
  }
  console.log(`----------------------------------------------------------`);
}

// display questions and accept answers
function game() {
  console.log(`----------------------------------------------------------`);
  for (let i in questionBank) {
    let currentQuestion = questionBank[i];
    evaluateQuiz(
      currentQuestion.question,
      currentQuestion.option,
      currentQuestion.answer
    );
  }
}

let highScores = [
  {
    name: 'Madhusudan(Me)',
    score: 10,
  },
  {
    name: 'FriendOne',
    score: 10,
  },
  {
    name: 'FriendTwo',
    score: 7,
  },
];

function showScores() {
  console.log(chalk.underline.bold`\n${userName} scored ${userScore} points.`);
  let highScorer =
    userScore >= 7 ? `Congrats! ${userName} You are a high scorer!\n` : `\n`;
  console.log(highScorer);
  console.log(chalk.underline`Score Board:`);
  highScores.map((user) =>
    console.log(`${user.name} scored ${user.score} points.`)
  );
}

startQuiz();
