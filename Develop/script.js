// Assignment Code
var chars = window.prompt("Choose between 8 and 128 characters for your password");
var uppercase = window.confirm("Do you want uppercase letters?");
var lowercase = window.confirm("Do you want lowercase letters?");
var specialChars = window.confirm("Do you want special characters?");

console.log(chars);

if (uppercase === true) {
  console.log("Uppercase letters")
}

if (lowercase === true) {
  console.log("Lowercase letters")
}

if (specialChars === true) {
  console.log("Special characters")
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  if (!chars) {
    return;
  }
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);