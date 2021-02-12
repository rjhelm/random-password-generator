// Assignment code here

// Variables 
var passwordCharacters 
var passwordLength = "";
var lowercase;
var uppercase;
var numbers;
var symbols;

// Password Generation
function generatePassword () {
  var passwordLength = (prompt("How many characters would you like your password to contain?"));

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Your password must be a length between 8-128 characters. Please Try Again!");
    return;
  }
  
  alert('Your password will be ${passwordLength} characters long!');

  var lowercase = confirm("If you would like to include lower case characters, press 'OK'.");
  var uppercase = confirm("If you would like to include upper case characters, press 'OK'.");
  var numbers = confirm("If you would like to include numbers, press 'OK'.");
  var symbols = confirm("If you would like to include special characters (e.g -!@#$-), press 'OK',");

    if (!lowercase && !uppercase && !numbers && !symbols) {
      alert("You must include at least one lower case, upper case, number, or special character. Please Try Again!");
      return;
    }

}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
