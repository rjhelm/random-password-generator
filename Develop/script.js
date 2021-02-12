// Assignment code here

// Characters
let pickLower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let pickUpper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let pickNumber = [0,1,2,3,4,5,6,7,8,9];
let pickSymbol = [' ','!','"','#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[',']','_','~'];

// Character Questions
//let passwordLength = "";
//let lowercase;
//let uppercase;
//let numbers;
//let symbols;

// Password Content Options
function characterOptions() {
  // Ask user for password length they would like
  let passwordLength = parseInt(prompt("How many characters would you like your password to contain?(must be between 8 and 128)"));
  // If the response is not between 8 and 128
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Your pass word must be between 8 and 128 characters. Please Try Again!");
    return;
  }
  // Ask if user wants lower case characters
  let lowercase = confirm("If you would like to include lower case characters, press 'OK'.");
  // Ask if user wants upper case characters
  let uppercase = confirm("If you would like to include upper case characters, press 'OK'.");
  // Ask if user wants numeric characters
  let numbers = confirm("If you would like to include numbers, press 'OK'.");
  // Ask if user wants special characters
  let symbols = confirm("If you would like to include special characters (e.g -!@#$-), press 'OK',");
  // If the user does not pick 1 of the characters
    if (!lowercase && !uppercase && !numbers && !symbols) {
      alert("You must include at least one lower case, upper case, number, or special character. Please Try Again!");
      return;
    }

    let passwordOptions = {
        length: passwordLength,
        lowerCase: lowercase,
        upperCase: uppercase,
        numeric: numbers,
        specialCharacters: symbols
    }

    return passwordOptions;
  
}

function generatePassword() {
  
  var options = characterOptions();
  console.log(options)

  var passPool = [];
  console.log(passPool)

  if (options.lowerCase) {
    for (i = 0; i < pickLower.length; ++i) {
      passPool.push(pickLower[i]);
    }
  }
  if (options.upperCase) {
    for (i= 0; i < pickUpper.length; ++i) {
      passPool.push(pickUpper[i]);
    }
  }
  if (options.numeric) {
    for (i = 0; i < pickNumber.length; ++i) {
      passPool.push(pickNumber[i]);
    }
  }
  if (options.specialCharacters) {
    for (i = 0; i < pickSymbol.length; i++) {
      passPool.push(pickSymbol[i]);
    }
  }

  var password = [];

  for (let i = 0; i < options.length; i++) {
    var randomPicker = Math.floor(Math.random() * Math.floor(passPool.length));
    password.push(passPool[randomPicker])
  }

  console.log(password)

}

// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
