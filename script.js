// Assignment code here
// Declare object for user's choices on password requirements
var userPasswordChoices = {
  lowercase: "abcdefghijklmnopqrstuvqxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  number: "0123456789",
  specialChar: "!@#$%^&*"
};
// generatePassword function that will create password based on user choices via prompts and confirmations
function generatePassword() {
// first, I need to use a prompt to gather data from the user - how long they want their password to be btwn 8 and 128
  var userLength = prompt("How long do you want your password to be? Please enter a number between 8 and 128.")
// if user inputs a number not in the given range, the function needs to kick them out and ask them to start over with a number in the given range
  if (userLength < 8 || userLength > 128) {
    alert("You have chosen an invalid length, please start over.");
    return;
    // return ends the function right here
  }
  else {
    // rest of the function will go here, once they've selected a valid password length
    // user confirms if they want lowercase letters in their password
    var userLowercase = confirm("Press 'OK' if you want to include lowercase letters in your password. Press 'CANCEL' if you do not");
    if (userLowercase) {
      userPasswordChoices.lowercase += password;
      };
      var password = "";
    for (i = 0; i < userLength; i++) {
      password += userPasswordChoices[Math.floor(Math.random() * userLength)]
    }
    return password;
    }
    
  }
  


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button - will run everything once the generate button is clicked since the generatePassword function is called inside the writePassword function
generateBtn.addEventListener("click", writePassword);