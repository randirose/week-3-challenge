// Assignment code here
// Declare object for user's choices on password requirements
var pwChoices = {
  lowercase: "abcdefghijklmnopqrstuvqxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  number: "0123456789",
  specialChar: "!@#$%^&*"
};


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);