var readlinesync = require('readline-sync')
const chalk = require('chalk');
var userName = readlinesync.question("What's your name? ");

console.log("Hi, Welcome! " + userName + " I'm Abhishek!! Let's see how well you know me.");

var score = 0
 
function play (question, answer){
  var userAnswer = readlinesync.question(chalk.red(question))
  if (userAnswer.toUpperCase() === answer.toUpperCase() ) {
    console.log("YAY! Correct answer (+10 pts) ")
    score += 10
    console.log(chalk.cyan("Score: " + score))
  } else{
    console.log("OOPS! Wrong answer ")
  }
}

let questions = [{
  question: "What is my age ",
  answer : "21"
},{
  question: "My favorite movie? ",
  answer : "Interstellar"
},{
  question: "What's my favorite food ",
  answer : "Noodles"
}, {
  question: "What makes me the happiest? ",
  answer : "Music"
},{
  question: "Where do I live? ",
  answer : "Ghaziabad"
}];

for (var i=0 ; i < questions.length ; i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}

console.log(chalk.green("YAY!! Your final score is " + score));
