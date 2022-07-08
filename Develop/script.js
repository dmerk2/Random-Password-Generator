// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // Assignment Code
  var choiceChosen;
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

  // If character amount is less then 8 or greater than 128 characters
  if (charAmount < 8 || charAmount > 128) {
    // return;
    alert("Please choose the correct amount of characters");
  }

  // All 4 options chosen
  if (uppercase && lowercase && specialChars && numbers) {
    choiceChosen = userChoices.concat(uppercase && lowercase && specialChars && numbers);
    console.log("uppercase, lowercase, special characters, numbers");

    // 3 Options chosen
  } else if (uppercase && lowercase && specialChars) {
    choiceChosen = userChoices.concat(upercase && lowercase && specialChars);
    console.log("uppercase, lowercase, special characters");
  } else if (uppercase && lowercase && numbers) {
    choiceChosen = userChoices.concat(uppercase && lowercase && numbers);
    console.log("uppercase, lowercase, numbers");
  } else if (uppercase && lowercase && specialChars) {
    choiceChosen = userChoices.concat(uppercase && lowercase && specialChars);
    console.log("uppercase, lowercase, special characters");
  } else if (uppercase && specialChars && numbers) {
    choiceChosen = userChoices.concat(uppercase && specialChars && numbers);
    console.log("uppercase, special characters, numbers");
  }

  // 2 Options chosen
  else if (uppercase && lowercase) {
    choiceChosen = userChoices.concat(uppercase && lowercase);
    console.log("uppercase, lowercase");
  } else if (uppercase && specialChars) {
    choiceChosen = userChoices.concat(uppercase && specialChars);
    console.log("uppercase, special characters");
  } else if (uppercase && numbers) {
    choiceChosen = userChoices.concat(uppercase && numbers);
    console.log("uppercase, numbers");
  } else if (specialChars && numbers) {
    choiceChosen = userChoices.concat(specialChars && numbers);
    console.log("special characters, numbers");
  } else if (lowercase && numbers) {
    choiceChosen = userChoices.concat(lowercase && numbers);
    console.log("lowercase, numbers");
  }

  // 1 option chosen
  else if (uppercase) {
    choiceChosen = userChoices.concat(uppercase);
    console.log("uppercase");
  } else if (lowercase) {
    choiceChosen = userChoices.concat(lowercase);
    console.log("lowercase");
  } else if (specialChars) {
    choiceChosen = userChoices.concat(specialChars)
    console.log("special characters");
  } else if (numbers) {
    choiceChosen = userChoices.concat(numbers);
    console.log("numbers");
  }

  var password = generatePassword(userChoices, choiceChosen, passwordText);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}



function generatePassword(userChoices, choiceChosen, passwordText) {
  for (var i = 0; i < userChoices.length; i++) {
    var userChoices = choiceChosen[Math.floor(Math.random() * choiceChosen.length)];
    passwordText;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
this.innerHTML = password;