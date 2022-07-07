// Assignment Code
var enter;
var userChoices = [];
var charAmount = parseInt(prompt("Choose between 8 and 128 characters for your password"));
var uppercase = parseInt(confirm("Do you want uppercase letters?"));
var lowercase = parseInt(confirm("Do you want lowercase letters?"));
var specialChars = parseInt(confirm("Do you want special characters?"));
var numbers = parseInt(confirm("Do you want numbers?"));

uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
specialChars = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
  // If characters are lower then 8 or greater then 128 characters alert user
  if (charAmount < 8 || charAmount > 128) {
    // return;
    console.log("Please enter the correct amount of characters");
  }

  // All 4 options chosen
  if (uppercase && lowercase && specialChars && numbers) {
    // enter = userChoices.concat(uppercase && lowercase && specialChars && numbers);
    console.log("all 4");

    // 3 Options chosen
  } else if (uppercase && lowercase && specialChars) {
    enter = userChoices.concat(upercase && lowercase && specialChars);
    console.log("uppercase, lowercase, special characters");
  } else if (uppercase && lowercase && numbers) {
    console.log("uppercase, lowercase, numbers");
  } else if (uppercase && lowercase && specialChars) {
    console.log("uppercase, lowercase, special characters");
  } else if (uppercase && specialChars && numbers) {
    console.log("uppercase, special characters, numbers");
  }

  // 2 Options chosen
  else if (uppercase && lowercase) {
    console.log("uppercase, lowercase");
  } else if (uppercase && specialChars) {
    console.log("uppercase, special characters");
  } else if (uppercase && numbers) {
    console.log("uppercase, numbers");
  } else if (specialChars && numbers) {
    console.log("special characters, numbers");
  } else if (lowercase && numbers) {
    console.log("lowercase, numbers");
  }

  // 1 option chosen
  else if (uppercase) {
    console.log("uppercase");
  } else if (lowercase) {
    console.log("lowercase"); 
  } else if (specialChars) {
    console.log("special characters");
  } else if (numbers) {
    console.log("numbers");
  }


// Write password to the #password input
function writePassword() {


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
this.innerHTML = password;
console.log(password);