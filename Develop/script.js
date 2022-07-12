// Assignment Code.
let generateBtn = document.querySelector("#generate");

// Arrays
let lowercase = "abcdefghijklmnopqrstuvwxyz";
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let specialCharacters = "!#$%&'()*+,-./:;<=>?@[^_`{|}~";
let numbers = "0123456789";

// Write password to the #password input.
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// This section contains prompts to ask and answer questions about what to include in the password
let generatePassword = function () {
  let passLength = (window.prompt("How many characters would you like your password to contain?  Enter a number between 8-128"));
  console.log(passLength);
  if (!(passLength >= 8 && passLength <= 128)) {
    alert("Enter a number between 8-128.")
    return "Please enter the correct amount of characters";
  }
  let acceptableChars = "";
  let passSpecChars = confirm("Would you like to include special characters.");
  if (passSpecChars) {
    acceptableChars += specialCharacters
  };
  let passNumChars = confirm("Would you like to include numeric characters.");
  if (passNumChars) {
    acceptableChars += numbers
  };
  let passLowChars = confirm("Would you like to include lowercase characters.");
  if (passLowChars) {
    acceptableChars += lowercase
  };
  let passUpChars = confirm("Would you like to include uppercase characters.");
  if (passUpChars) {
    acceptableChars += uppercase
  };
  console.log(acceptableChars);
  let passwd = "";
  for (i = 0; i < passLength; i++) {
    console.log(passwd);
    passwd += acceptableChars.charAt(Math.floor(Math.random() * acceptableChars.length));
  };
  return passwd;
}