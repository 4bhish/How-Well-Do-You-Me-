var readlineSync = require('readline-sync');

var userName = readlineSync.question("May I have your name? ");

console.log("Welcome " + userName);

console.log("___________________");




var score = 0;

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer === answer) {
    console.log("You are right! ");
    score++;
  }
  else {
    console.log("You are wrong!")
    score--;
  }
  console.log("Your Score: " + score);
  console.log("___________________");
}

var Questions = [{
  question: "What is Abhisheks petname? ",
  answer: "bablu"
},
{
  question: "which is Abhisheks favorite sport? ",
  answer: "football"
},
{
  question: "who is Abhisheks favorite musician? ",
  answer: "kanye west"
},
{
  question: "where he lives? ",
  answer: "solapur"
},
{
  question: "which anime do Abhishek watch most?",
  answer: "one piece"
},
{
  question: "what is Abhisheks favorite hobby?",
  answer: "poetry"
}];

for (var i = 0; i < Questions.length; i++) {
  var newQuestions = Questions[i];
  play(newQuestions.question, newQuestions.answer);
}

if (score > 1) {
  console.log(`You did good,You have scored ${score} marks out 6 Thank you for playing !`);

}
else {
  console.log("Uh oh! better luck next time");
}
