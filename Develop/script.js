// Assignment code here

// Character Values
let validLowerCaseCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let validUpperCaseCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let validNumbers = [0,1,2,3,4,5,6,7,8,9];
let validSpecialCharacters = ['#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','['];

// Allow generate button to function and display the generated password
let generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function () {
  ps = generatePassword();
  document.getElementById("password").placeholder = ps;
});

// Add prompts for the user to select length and characters
function getCharacterOptions() {
  let passwordLength = parseInt(prompt("Please enter the length you would like the password to be! (Must be between 8 and 128 characters!)"));
  // Alert the user again that it must be between 8-128 characters and return to prompt
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Please enter a character length within the given parameters! (Must be between 8 and 128 characters!)");
    return null;
  }
  
  // Prompt for lowercase
  let useLowerCaseCharacters = confirm("Would you like your password to include lowercase letters?");
  // Prompt for uppercase
  let useUpperCaseCharacters = confirm("Would you like your password to include uppercase letters?");
  // Prompt for numbers
  let useNumbers = confirm("Would you like your password to include numbers?");
  // Prompt for special characters
  let useSpecialCharacters = confirm("Would you like your password to include special characters?");
  
    if (!useLowerCaseCharacters && !useUpperCaseCharacters && !useNumbers && !useSpecialCharacters) {
      alert("Your must select at least 1 of the previous options. Please try again.");
      return null;
    }
      
   return {
     passwordLength,
     useLowerCaseCharacters,
     useUpperCaseCharacters,
     useNumbers,
     useSpecialCharacters, 
    }; 

}

// Generates the password based on the user's choices
function generatePassword () {

  let characterOptions = getCharacterOptions();
 
  if (!characterOptions) return;

  let validPasswordCharacters = [];

  if (characterOptions.useLowerCaseCharacters) {
    validPasswordCharacters = validPasswordCharacters.concat(validLowerCaseCharacters)
  }
    
  if (characterOptions.useUpperCaseCharacters) {
    validPasswordCharacters = validPasswordCharacters.concat(validUpperCaseCharacters)
  }

  if (characterOptions.useNumbers) {
    validPasswordCharacters = validPasswordCharacters.concat(validNumbers)
  }

  if (characterOptions.useLowerCaseCharacters) {
    validPasswordCharacters = validPasswordCharacters.concat(validSpecialCharacters)
  }

  let generatedPassword = [];

  for (let i = 0; i < characterOptions.passwordLength; i++) {
    let randomGenerate = Math.floor(
      Math.random() * Math.floor(validPasswordCharacters.length)
    );
    generatedPassword.push(validPasswordCharacters[randomGenerate]);
  }

  let userPassword = generatedPassword.join("");
  UserInput(userPassword);
  return userPassword;
}

function UserInput(ps) {
  document.getElementById("password").textContent = ps;
}    
  

