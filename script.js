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
    // return ends the function right here and put 'undefined' in the text box
  
    }
  else {
    // rest of the function will go here, once they've selected a valid password length

    // declare password variable as empty string, and another variable userPassword to concatenate property strings from above onto before randomizing
    var password = "";
    var userPassword = "";
    

    // user confirms if they want lowercase letters in their password, if they do, empty string userPassword concatenates (adds to the end) the lowercase string (property of userPasswordChoices object)
    var userLowercase = confirm("Press 'OK' if you want to include lowercase letters in your password. Press 'CANCEL' if you do not");
    if (userLowercase) {
      userPassword += userPasswordChoices.lowercase;
      };
    // user confirms if they want uppercase letters in their password, if they do, empty string userPassword concatenates (adds to the end) the uppercase string (property of userPasswordChoices object)
    var userUppercase = confirm("Press 'OK' if you want to include uppercase letters in your password. Press 'CANCEL' if you do not");
    if (userUppercase) {
      userPassword += userPasswordChoices.uppercase;
    }
    // user confirms if they want numbers in their password, if they do, empty string userPassword concatenates (adds to the end) the numbers string (property of userPasswordChoices object)
    var userNumber = confirm("Press 'OK' if you want to include numbers in your password. Press 'CANCEL' if you do not");
    if (userNumber) {
      userPassword += userPasswordChoices.number;
    }
    var lengthOfPassword = trimFunction(userLength, userPassword);
    for (i = 0; i < userLength; i++) {
      password += userPassword[Math.floor(Math.random() * lengthOfPassword)]
    }
    return password;
    }
    
  }
  console.log(password);


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