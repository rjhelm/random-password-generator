/*// Assignment code here

// Characters
var pickLower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var pickUpper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var pickNumber = [0,1,2,3,4,5,6,7,8,9];
var pickSymbol = [' ','!','"','#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[',']','_','~'];

// Character Questions
//var passwordLength = "";
//var lowercase;
//var uppercase;
//var numbers;
//var symbols;

// Password Content Options
function characterOptions() {
  // Ask user for password length they would like
  var passwordLength = parseInt(prompt("How many characters would you like your password to contain?(must be between 8 and 128)"));
  // If the response is not between 8 and 128
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Your pass word must be between 8 and 128 characters. Please Try Again!");
    return;
  }
 
  // Ask if user wants lower case characters
  var lowercase = confirm("If you would like to include lower case characters, press 'OK'.");
  // Ask if user wants upper case characters
  var uppercase = confirm("If you would like to include upper case characters, press 'OK'.");
  // Ask if user wants numeric characters
  var numbers = confirm("If you would like to include numbers, press 'OK'.");
  // Ask if user wants special characters
  var symbols = confirm("If you would like to include special characters (e.g -!@#$-), press 'OK',");
  // If the user does not pick 1 of the characters
    if (!lowercase && !uppercase && !numbers && !symbols) {
      alert("You must include at least one lower case, upper case, number, or special character. Please Try Again!");
      return(characterOptions);
    }

  var characterOptions = {
   passwordLength,
   lowercase,
   uppercase,
   numbers,
   symbols
  }

  return characterOptions;
    
}



function generatePassword() {
  
  var options = characterOptions();
  console.log(options)

  var ps = [];
  console.log(ps);

  if (options.lowercase) {
    for (i = 0; i < pickLower.length; i++) {
      ps.push(pickLower[i]);
    }
  }

  if (options.uppercase) {
    for (i= 0; i < pickUpper.length; i++) {
      ps.push(pickUpper[i]);
    }
  }
  
  if (options.numbers) {
    for (i = 0; i < pickNumber.length; i++) {
      ps.push(pickNumber[i]);
    }
  }

  if (options.symbols) {
    for (i = 0; i < pickSymbol.length; i++) {
      ps.push(pickSymbol[i]);
    }
  }

  for (var i = 0; i < options.length; i++) {
    var randomPicker = Math.floor(Math.random() * Math.floor(ps.length))
    ps.push(randomPicker);
  }

  console.log(randomPicker);
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// Write password to the #password input
function writePassword() {
  var writePassword = generatePassword();
  var passwordText = document.querySelector("#password")

  passwordText.value = [];

} */

// Assignment code here
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numberCase = [0,1,2,3,4,5,6,7,8,9];
var specialCharacter = ["#","$","%","&","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[",];

var generateBtn = document.querySelector("#generate");



  // Write password to the #password input

 /* function writePassword() {
   var password = generatePassword();
   var passwordText = document.getElementById("#password");

   passwordText.value = password;
*/
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