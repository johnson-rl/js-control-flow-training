console.log("security_questions.js loaded");

var securityQuestions = [
  {question: 'What is your name?', expectedAnswer: 'Sir Ryan'},
  {question: 'What is your quest?', expectedAnswer: 'To seek the grail'},
  {question: 'What is your favorite color?', expectedAnswer: 'blue'},
  {question: 'What is the average velocity of an unladen swallow?', expectedAnswer: "I don't know that"},
]

for (var i = 0; i<securityQuestions.length; i++){
  var userAnswer = prompt(securityQuestions[i].question);
  if (userAnswer != securityQuestions[i].expectedAnswer){
    alert("Ahhhhhhhhhhhhhhhhhh!!!");
    var failedAnswer = true;
    break;
  }
}

if (failedAnswer!=true){
  alert("You may pass");
}
