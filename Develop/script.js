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
  numbersChosen = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  console.log(charAmount, uppercase, lowercase, specialChars, numbers);

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
    // return numbersChosen;
  }

  console.log(choiceChosen)

  let password = "";

  for (let i = 0; i < charAmount; i++) {
    Math.floor(Math.random() * charAmount)
  }
  console.log(password);
  // All 4 options chosen
  //   if (uppercase && lowercase && specialChars && numbers) {
  //     choiceChosen = userChoices.concat(uppercaseLetters && lowercaseLetters && specialCharsChosen && numbersChosen);
  //     console.log("All 4 chosen")
  //   }

  //   // 3 Options chosen
  //   if (uppercase && lowercase && specialChars) {
  //     choiceChosen = userChoices.concat(uppercaseLetters && lowercaseLetters && specialCharsChosen);
  //   } else if (uppercase && lowercase && numbers) {
  //     choiceChosen = userChoices.concat(uppercaseLetters && lowercaseLetters && numbersChosen);
  //   } else if (uppercase && lowercase && specialChars) {
  //     choiceChosen = userChoices.concat(uppercaseLetters && lowercaseLetters && specialCharsChosen);
  //   } else if (uppercase && specialChars && numbers) {
  //     choiceChosen = userChoices.concat(uppercaseLetters && specialCharsChosen && numbersChosen);
  //   }

  //   // 2 Options chosen
  //   if (uppercase && lowercase) {
  //     choiceChosen = userChoices.concat(uppercaseLetters && lowercaseLetters);
  //   } else if (uppercase && specialChars) {
  //     choiceChosen = userChoices.concat(uppercaseLetters && specialCharsChosen);
  //   } else if (uppercase && numbers) {
  //     choiceChosen = userChoices.concat(uppercaseLetters && numbersChosen);
  //   } else if (specialChars && numbers) {
  //     choiceChosen = userChoices.concat(specialCharsChosen && numbersChosen);
  //   } else if (lowercase && numbers) {
  //     choiceChosen = userChoices.concat(lowercaseLetters && numbersChosen);
  //   }

  //   // 1 option chosen
  //   if (uppercase) {
  //     choiceChosen = userChoices.concat(uppercaseLetters);
  //   } else if (lowercase) {
  //     choiceChosen = userChoices.concat(lowercaseLetters);
  //   } else if (specialChars) {
  //     choiceChosen = userChoices.concat(specialCharsChosen)
  //   } else if (numbers) {
  //     choiceChosen = userChoices.concat(numbersChosen);
  //   }
  // console.log(choiceChosen)
  //   for (let i = 0; i < password.length; i++) {
  //     choiceChosen += password.password(Math.floor(Math.random()));
  //     console.log(choiceChosen)
  //   }
}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
