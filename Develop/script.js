// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

for(var i = 0; i = passwordText.length; i++) {
  writePassword += passwordText.charAt(Math.floor(Math.random() * i))
}

  passwordText.value = password;

}
console.log(writePassword)
console.log(generatePassword())

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);