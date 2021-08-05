const readlineSync = require("readline-sync");
const chalk= require('chalk');

//take username input
console.log(chalk.magenta.bold("================================"));
console.log("   ",chalk.bgRedBright("     BOLLY ")+chalk.inverse.whiteBright.bold(" QUIZ      "));
console.log(chalk.magenta("================================\n\n"));
const userName= readlineSync.question(chalk.cyanBright("Enter your gameplay username : "));

console.clear();

//welcome and rules
console.log(chalk.magenta("================================"));
console.log("   ",chalk.bgRedBright.bold("     BOLLY ")+chalk.inverse.whiteBright.bold(" QUIZ      "));
console.log(chalk.magenta("================================\n\n"));
console.log(chalk.hex('#DEADED')("  Hi "+chalk.red.bold.underline(userName)+" welcome to the "+chalk.cyanBright.bold("LEVEL-1 of BOLLY-QUIZ")+".\nEnter 1, 2, 3 or 4 for each question to answer. For each correct answer you will get "),chalk.bgYellow(" 3 points.\n\n"));

//start game
var score = 0;
function checkAnswer(question,answer,options,qno){

  console.log(chalk.inverse.red(qno+"."),chalk.redBright(question))
  var userAnswer = readlineSync.keyInSelect(options, 
                                          chalk.cyan("Enter your option "), 
                                          {cancel : false}
                                          );
  if(options[userAnswer] == answer){
    console.log(chalk.inverse.green("\n "+ userName +", you are right!!! 😏 \n"))
    score = score + 3
  }
  else{
    console.log(chalk.bgRed("\n "+ userName +", you are wrong 😑 \n"))
  }
  console.log(chalk.yellow("Score : ",score,"\n"))
  console.log(chalk.magenta("=================================\n"))
}

var questionsArr = [
  {question : "The story of Kabhi Khushi Kabhie Gham revolves around the trials and tribulations of which family?",
  options : ["The Malhotras", "The Oberois", "The Kapoors", "The Raichands"],
  answer : "The Raichands"},
  {question : "In the movie Piku, what does Amitabh Bachchan's character (Bhashkor Banerjee) suffer from?",
  options : ["Alzheimer's","Arthritis","Chronic Constipation","Cancer"],
  answer : "Chronic Constipation"},
  {question : "In Hera Pheri, what was Paresh Rawal's character called?",
  options : ["Devi Prasad","Baburao","Raju","Shyam"],
  answer : "Baburao"},
  {question : "In Dear Zindagi, what does Shah Rukh Khan's character, Dr Jehangir Khan, do?",
  options : ["Therapist","Actor","Architect","Journalist"],
  answer : "Therapist"},
  {question : "In the movie Kahaani, which Indian city does Vidya Bagchi visit in order to search for her missing husband?",
  options : ["Chennai","Mumbai","Kolkata","Agra"],
  answer : "Kolkata"},
  {question : "In Jab We Met, what is the name of Geet's cousin?",
  options : ["Preet", "Simran", "Priya", "Roop"],
  answer : "Roop"},
  {question : "Who directed Dil Chahta Hai?",
  options : ["Zoya Akhtar","Farhan Akhtar","Amir Khan","Reema Kagti"],
  answer : "Farhan Akhtar"},
  {question : "Which cities does Rani visit when she goes on her 'solo' honeymoon in Queen?",
  options : ["Paris and London","London and New York","Tokyo and Shanghai","Paris and Amsterdam"],
  answer : "Paris and Amsterdam"},
  {question : "In Chak De! India, how many minutes, according to coach Kabir Khan, does the team have?",
  options : [69,70,50,30],
  answer : 70},
  {question : "Who played the role of stree in the movie stree? : ",
  options : ["Flora Saini","Atmaja Pandey","Sunita Rajwar","Mystery"],
  answer : "Flora Saini"},];

for(var i = 0;i<questionsArr.length;i++){
  if(i==3){
    if(score>5){
      console.clear();
      console.log(chalk.magenta("================================"));
      console.log("   ",chalk.bgRedBright.bold("     BOLLY ")+chalk.inverse.whiteBright.bold(" QUIZ      "));
      console.log(chalk.magenta("================================\n\n"));
      console.log(chalk.inverse.green(" Congrats "+userName+", you have cleared LEVEL-1. 🎉 "));
      console.log(chalk.yellowBright("\n----------- LEVEL-2 -------------\n"));
    }
    else{
      console.log(chalk.red(userName +", you failed to clear this LEVEL.\n"));
      break;
    }
  }
  else if(i==7){
    if(score>14){
      console.clear();
      console.log(chalk.magenta("================================"));
      console.log("   ",chalk.bgRedBright.bold("     BOLLY ")+chalk.inverse.whiteBright.bold(" QUIZ      "));
      console.log(chalk.magenta("================================\n\n"));
      console.log(chalk.inverse.green(" Congrats "+userName+", you have cleared LEVEL-2. 🎉 "));
      console.log(chalk.yellowBright("\n----------- LEVEL-3 ------------\n"));
    }
    else{
      console.log(chalk.red(userName +", you failed to clear this LEVEL.\n"));
      break;
    }
  }
    checkAnswer(questionsArr[i].question,questionsArr[i].answer,questionsArr[i].options,i+1)
}


//final score and leaderboard
var highScores = [
  {
    name : 'Vijay',
    score : 24
  },
  {
    name : 'Pani',
    score : 21
  }
]
console.log(chalk.inverse.yellow("Final score : ",score,"\n"))
console.log('Check out the high scores: ');
console.table(highScores);
var high = false;

highScores.forEach( person => {
  if(score >  person.score){
    high = true;
  }
})

if(high){
 console.log(chalk.green("\nYay! "+ userName +", you made a high score! Your name will be added to the leaderboard."));
 console.log("Just send me a screenshot of the scores!");
}
else{
  console.log(chalk.red("\n "+userName+", you failed to beat the highscore."))
}
