console.log("login.js loaded");
var userLogin = {
  userName: 'JSMaster',
  userPass: 'MasterPass'
}

for (i = 2; i>= 0; i--){
  var userInput = prompt('Hey, ' + userLogin.userName + ', what is your password?');
  if (userInput == userLogin.userPass){
    alert("Correct!");
    break;
  } else {
    if (i==0){
      alert("Your account has been locked.");
    } else {
    alert("Incorrect, you have " + i + " more attempts.");
    }
  }

}
