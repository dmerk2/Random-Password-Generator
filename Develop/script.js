// Get references to the #generate element
let generateBtn = document.querySelector("#generate");


// Assignment Code
function generatePassword() {
  let choiceChosen = [];
  let charAmount = prompt("Choose between 8 and 128 characters for your password");

  // If character amount is less then 8 or greater than 128 characters
  if (!(charAmount >= 8 && charAmount <= 128)) {
    alert("Please choose the correct amount of characters");
    return;
  }

  let uppercase = confirm("Do you want uppercase letters?");
  let lowercase = confirm("Do you want lowercase letters?");
  let specialChars = confirm("Do you want special characters?");
  let numbers = confirm("Do you want numbers?");

  uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  specialCharsChosen = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
  numbersChosen = ["1234567890"];

  if (uppercase) {
    choiceChosen = choiceChosen.concat(uppercaseLetters)
  }
  if (lowercase) {
    choiceChosen = choiceChosen.concat(lowercaseLetters)
  }
  if (specialChars) {
    choiceChosen = choiceChosen.concat(specialCharsChosen)
  }
  if (numbers) {
    choiceChosen = choiceChosen.concat(numbersChosen)
  }

  console.log(choiceChosen)
 
  let password = "";

  for (let i = 0; i < choiceChosen; i++) {
    password += choiceChosen(Math.floor(Math.random() * choiceChosen))
  }
}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);