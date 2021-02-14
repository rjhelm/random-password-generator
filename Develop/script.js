// Assignment code here
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numberCase = [0,1,2,3,4,5,6,7,8,9];
var specialCharacter = ["#","$","%","&","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[",];

var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function () {
  ps = generatePassword();
  document.getElementById("password").placeholder = ps;
});
// Add prompts for the user to select length and characters
function characterOptions() {
  var passwordLength = parseInt(prompt("Please enter the length you would like the password to be! (Must be between 8 and 128 characters!)"));
  // Alert the user again that it must be between 8-128 characters and return to prompt
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a character length within the given parameters! (Must be between 8 and 128 characters!)");
    return;
  }
  // Prompt for lowercase
  var lowercase = confirm("Would you like your password to include lowercase letters?");
  // Prompt for uppercase
  var uppercase = confirm("Would you like your password to include uppercase letters?");
  // Prompt for numbers
  var numbers = confirm("Would you like your password to include numbers?");
  // Prompt for special characters
  var special = confirm("Would you like your password to include special characters?");
    if (!lowercase && !uppercase && !numbers && !special) {
      alert("Your must select at least 1 of the previous options. Please try again.");
      return;
    }
      
    
   var pickCharacters = {
     length: passwordLength,
     lowercase: lowerCase,
     uppercase: upperCase,
     numbers: numberCase,
     special: specialCharacter,
   }; 
    
    return pickCharacters;

}

function generatePassword () {

  var characters = characterOptions();
  console.log(characters)

  var pass = [];
  console.log(pass)

  if (characters.lowercase) {
    for (i = 0; i < lowerCase.length; i++) {
      pass.push(lowerCase[i]);
    }
  }
    
    
  if (characters.uppercase) {
  for (i = 0; i < upperCase.length; i++) {
      pass.push(upperCase[i]);
    }
  }

  if (characters.numbers) {
    for (i = 0; i < numberCase.length; i++) {
      pass.push(numberCase[i]);
    }
  }

  if (characters.special) {
    for (i = 0; i < specialCharacter.length; i++); {
      pass.push(specialCharacter[i]);
    }
  }

  var password = [];

  for (var i = 0; i < characters.length; i++) {
    var randomGenerate = Math.floor(Math.random() * Math.floor(pass.length));
    password.push(pass[randomGenerate]);
  }
  var ps = password.join("");
  UserInput(ps);
  return ps;
}

function UserInput(ps) {
    document.getElementById("password").textContent = ps;

}    
  
// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);
//password.addEventListener("click", generatePassword);

// Write password to the #password input
/* function writePassword() {
  var writePassword = generatePassword();
  var passwordText = document.querySelector("#password")

  passwordText.value = [];

} */
