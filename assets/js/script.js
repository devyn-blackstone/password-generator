// look through the winow for id=generate when the generateBtn is clicked
var generateBtn = document.querySelector("#generate");

// this writes the password generated from the generatePassword function. this asks the window to look for the id=password to display the output
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// goes through all the options for making up the password
function generatePassword(){
  // assign variables to all the options
  var passwordPassword = ""
  var characters = prompt("Choose a length of at least 8 charaters and no more than 128 characters", "");
  var lowerCaseLetters = "qwertyuiopasdfghjklzxcvbnm";
  lowerCaseLetters = lowerCaseLetters.split('') ;
  var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  upperCaseLetters = upperCaseLetters.split('');
  var numbers = "1234567890";
  numbers = numbers.split('');
  var special = "!@#$%^&*()";
  special = special.split('');


  // popup window to insert amount of characters the user wants to use - must be between 8 - 128
  while(true){
  if(characters > 7 && characters < 129){
    alert("continue");
    break;
  }
  else {
    alert("read the rules!");
    characters = prompt("Choose a length of at least 8 charaters and no more than 128 characters", "");
  };
};
  
  // alerts to confirm if user wants to use options
  var useLowerCase = confirm("Do you want to use lowercase letters?")
  var useUpperCase = confirm("Do you want to use uppercase letters?")
  var useNumbers = confirm("Do you want to use numbers?")
  var useSpecial = confirm("Do you want to use special characters?")

  // for loop based on number of characters entered to use. 

  for(i=0; i<characters; i++){
    if(useLowerCase === true){
      var amountOfLowerCase = Math.floor(Math.random() * lowerCaseLetters.length)
      passwordPassword += lowerCaseLetters[amountOfLowerCase]
    }
    if(useUpperCase === true){
      var amountOfUpperCase = Math.floor(Math.random() * upperCaseLetters.length)
      passwordPassword += upperCaseLetters[amountOfUpperCase]
    }
    if(useNumbers === true){
      var amountOfNumbers = Math.floor(Math.random() * numbers.length)
      passwordPassword += numbers[amountOfNumbers]
    }
    if(useSpecial === true){
      var amountOfSpecial = Math.floor(Math.random() * special.length)
      passwordPassword += special[amountOfSpecial]
    }
  } 
  return passwordPassword;

}

// when you click the generate button it runs the criteria to get your password
generateBtn.addEventListener("click", writePassword)

