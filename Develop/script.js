// Assignment Code
let generateBtn = document.querySelector("#generate");
let password = "";
let uppercase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
let lowercase = ["abcdefghijklmnopqrstuvwxyz;"];
let specialChars = ["`~!@#$%^&*()_+=-?><"];
let numbers = ["1234567890"];


// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function newPassword () {
  let passwrd = "";
  let chars = ["abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+=-=`"];
  for (let i = 1; i < 8; i++) {
    let j = Math.floor(Math.random() * chars.length ++);
    passwrd += chars.charAt(j)
  }
  return passwrd;
}

var generatePassword = function() {
  var passLength = window.prompt("How many characters would you like your password to contain?");
  console.log(passLength);
  if (passLength < 8) {
    window.alert("Password length must be at least 8 characters.");
    return;
    } else if (passLength > 128) {
    window.alert("Password length must be less than 129 characters.");
    return;
  }
  var passSpecChars = window.confirm("Click Ok to confirm to include special characters.");
  var passNumChars = window.confirm("Click Ok to confirm to include numeric characters.");
  var passLowChars = window.confirm("Click Ok to confirm to include lowercase characters.");
  var passUpChars = window.confirm("Click Ok to confirm to include uppercase characters.");
console.log(passSpecChars);
var acceptableChars = "";
}

let generatePassword = function () {
  let passLength = prompt("How many characters would you like your password (8-128)?")
  if (passLenth < 8 || passLength > 128) {
    alert("You much choose between 8 and 128 characters")
  } 
  return;
}


let passSpecChars = confirm("Do you want special characters?")
let passNumChars = confirm("Do you want numbers?")
let passLowChars = confim("Do you want lowercase letters?")
let passUpChars = confirm("Do you want uppercase letters?")
let acceptableChars = "";



// // Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   // Assignment Code
//   var password = "";
//   var choiceChosen;
//   var userChoices = [];
//   var charAmount = parseInt(prompt("Choose between 8 and 128 characters for your password"));
//   var uppercase = parseInt(confirm("Do you want uppercase letters?"));
//   var lowercase = parseInt(confirm("Do you want lowercase letters?"));
//   var specialChars = parseInt(confirm("Do you want special characters?"));
//   var numbers = parseInt(confirm("Do you want numbers?"));

//   uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
//   lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//   specialChars = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
//   numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//   // If character amount is less then 8 or greater than 128 characters
//   if (charAmount < 8 || charAmount > 128) {
//     // return;
//     alert("Please choose the correct amount of characters");
//   }

//   // All 4 options chosen
//   if (uppercase && lowercase && specialChars && numbers) {
//     choiceChosen = userChoices.concat(uppercase && lowercase && specialChars && numbers);
//   }
//   // 3 Options chosen
//   if (uppercase && lowercase && specialChars) {
//     choiceChosen = userChoices.concat(uppercase && lowercase && specialChars);
//   } else if (uppercase && lowercase && numbers) {
//     choiceChosen = userChoices.concat(uppercase && lowercase && numbers);
//   } else if (uppercase && lowercase && specialChars) {
//     choiceChosen = userChoices.concat(uppercase && lowercase && specialChars);
//   } else if (uppercase && specialChars && numbers) {
//     choiceChosen = userChoices.concat(uppercase && specialChars && numbers);
//   }

//   // 2 Options chosen
//   if (uppercase && lowercase) {
//     choiceChosen = userChoices.concat(uppercase && lowercase);
//   } else if (uppercase && specialChars) {
//     choiceChosen = userChoices.concat(uppercase && specialChars);
//   } else if (uppercase && numbers) {
//     choiceChosen = userChoices.concat(uppercase && numbers);
//   } else if (specialChars && numbers) {
//     choiceChosen = userChoices.concat(specialChars && numbers);
//   } else if (lowercase && numbers) {
//     choiceChosen = userChoices.concat(lowercase && numbers);
//   }

//   // 1 option chosen
//   if (uppercase) {
//     choiceChosen = userChoices.concat(uppercase);
//   } else if (lowercase) {
//     choiceChosen = userChoices.concat(lowercase);
//   } else if (specialChars) {
//     choiceChosen = userChoices.concat(specialChars)
//   } else if (numbers) {
//     choiceChosen = userChoices.concat(numbers);
//   }

//   for (var i = 0; i < password.length; i++) {
//     choiceChosen += password.password(Math.floor(Math.random()));
//   }


//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);


// // Start working code
// // User input variables: 
// var enter;
// var confirmNumber;
// var confirmCharacter;
// var confirmUppercase;
// var confirmLowercase;
// // Start Password variable values: 
// // Special characters 
// character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
// // Numeric characters
// number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// // Alphabetical characters
// alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// // Space is for the Uppercase conversion
// space = [];
// // Choices declared outside the if statement so they can be concatenated upon condition
// var choices;
// // converts letters to uppercase 
// var toUpper = function (x) {
//     return x.toUpperCase();
// };
// // creates a variable for uppercase conversion
// alpha2 = alpha.map(toUpper);

// var get = document.querySelector("#generate");

// get.addEventListener("click", function () {
//     ps = generatePassword();
//     document.getElementById("password").placeholder = ps;
// })