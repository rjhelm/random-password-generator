// Assignment code here

// Character Values
let validLowerCaseCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let validUpperCaseCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let validNumbers = [0,1,2,3,4,5,6,7,8,9];
let validSpecialCharacters = ['#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','['];

// Allow generate button to function and display the generated password
let generateBtn = document.querySelector("#generate");

// Generate button now starts on click and displays password
generateBtn.addEventListener("click", function () {
  userPassword = generatePassword();
  document.getElementById("password").placeholder = userPassword;
});

// Add prompts for the user to select length and characters
function getCharacterOptions() {
  let passwordLength = parseInt(prompt("Please enter the length you would like the password to be! (Must be between 8 and 128 characters!)"));
  // Alert the user again that it must be between 8-128 characters and return to prompt
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Please enter a character length within the given parameters! (Must be between 8 and 128 characters!)");
    return null;
  }
  
  // Ask user what characters they would like to use in password
  let useLowerCaseCharacters = confirm("Would you like your password to include lowercase letters?");
  
  let useUpperCaseCharacters = confirm("Would you like your password to include uppercase letters?");
  
  let useNumbers = confirm("Would you like your password to include numbers?");
  
  let useSpecialCharacters = confirm("Would you like your password to include special characters?");
    // Alerts the user that they must select at least 1 and restarts the prompts
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

// Function to generate password based on users answers 
function generatePassword () {

  // Define the above info to know what characters we are randomizing and the length
  let characterOptions = getCharacterOptions();
 
  if (!characterOptions) return;

  // Use the answer to prompt and generate password with those values
  let validPasswordCharacters = [];

  // Lowercase Characters
  if (characterOptions.useLowerCaseCharacters) {
    validPasswordCharacters = validPasswordCharacters.concat(validLowerCaseCharacters)
  }
    
  // Uppercase Characters
  if (characterOptions.useUpperCaseCharacters) {
    validPasswordCharacters = validPasswordCharacters.concat(validUpperCaseCharacters)
  }

  // Numbers
  if (characterOptions.useNumbers) {
    validPasswordCharacters = validPasswordCharacters.concat(validNumbers)
  }

  // Special Characters
  if (characterOptions.useSpecialCharacters) {
    validPasswordCharacters = validPasswordCharacters.concat(validSpecialCharacters)
  }

  let generatedPassword = [];
  // For loop to randomize based on the user's characters
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

function UserInput(userPassword) {
  document.getElementById("password").textContent = userPassword;
}    
  

