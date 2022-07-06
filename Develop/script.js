// Assignment Code
let userChoice;
let charAmount = window.prompt("Choose between 8 and 128 characters for your password");
let uppercase = window.confirm("Do you want uppercase letters?");
let lowercase = window.confirm("Do you want lowercase letters?");
let specialChars = window.confirm("Do you want special characters?");
let numbers = window.confirm("Do you want numbers?");
specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", ";", "?"];
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S" , "T", "U", "V", "W", "X", "Y", "Z"];

// If condition is true then apply to password
if (uppercase) {
  console.log("Uppercase letters", uppercase)
} else {
  console.log("No uppercase letters")
}

if (lowercase) {
  console.log("Lowercase letters")
} else {
  console.log("No lowercase letters")
}

if (specialChars) {
  console.log("specialChars")
} else {
  console.log("No special characters")
}

if (numbers) {
  console.log("numbers")
} else {
  console.log("No numbers")
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