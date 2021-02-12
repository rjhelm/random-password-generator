// Assignment code here

// Characters
let pickLower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let pickUpper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let pickNumber = [0,1,2,3,4,5,6,7,8,9];
let pickSymbol = [' ','!','"','#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[',']','_','~'];

// Character Questions
let passwordLength = "";
let lowercase;
let uppercase;
let numbers;
let symbols;

// Password Generation
function generatePassword () {
  let passwordLength = (prompt("How many characters would you like your password to contain?"));

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Your password must be a length between 8-128 characters. Please Try Again!");
    return;
  }
  
  alert('Your password will be ${passwordLength} characters long!');

  let lowercase = confirm("If you would like to include lower case characters, press 'OK'.");
  let uppercase = confirm("If you would like to include upper case characters, press 'OK'.");
  let numbers = confirm("If you would like to include numbers, press 'OK'.");
  let symbols = confirm("If you would like to include special characters (e.g -!@#$-), press 'OK',");

    if (!lowercase && !uppercase && !numbers && !symbols) {
      alert("You must include at least one lower case, upper case, number, or special character. Please Try Again!");
      return;
    }
  
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
