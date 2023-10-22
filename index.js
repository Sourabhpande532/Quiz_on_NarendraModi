const readlineSync = require("readline-sync");
let score = 0
const userDetails = readlineSync.question("What's your Name ?");
console.log("Welcome " + userDetails + " On Quiz Competation, Let's Check How do you know about Narendra Modi ")

function play(question,answer){
  const userInput = readlineSync.question(question);
  if(userInput === answer){
   console.log("You'r Right !")
   score = score+1;
   console.log("your current score : " + score)
   console.log("------------") 
  }else{
     console.log("You'r Wrong !")
     console.log("------------") 

  }
}

const questionsAnswer = [
  {
  question: "What is full name of Narendra Modi ?",
  answer: "Narendra Damodardas Modi"
  },
  {
  question: "Where and when was Narendra modi Born ? ",
  answer: "17 September 1950 in Vadnagar"
  },
  {
  question: "Who is Narendra Modi ?",
  answer: "pm"
  },
  {
  question: "Does Narendra Modi Sprirtual ?",
  answer: "yes"
  },
  {
  question: "What is the name of PM's mother? ",
  answer: "Hiraben Modi"
  },
]

  for(let i=0; i<questionsAnswer.length; i++){
  let currentOne = questionsAnswer[i]
  play(currentOne.question,currentOne.answer)
  }

console.log("Your total score is : " + score)