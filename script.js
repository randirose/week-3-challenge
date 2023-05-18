// Assignment code here

// Declare object for user's choices on password requirements
var userPasswordChoices = {
  lowercase: "abcdefghijklmnopqrstuvqxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  number: "0123456789",
  specialChar: "!@#$%^&*_+}:?/><,."
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

    // alert to let user know they must choose at least 1 character type
    alert("Please choose at least 1 of the following options to include in your password. Press 'OK' to continue.");

    // user confirms if they want each character type in their password, if they do, empty string userPassword concatenates (adds to the end) the selected string (property of userPasswordChoices object)
    var userLowercase = confirm("Press 'OK' if you want to include lowercase letters in your password. Press 'CANCEL' if you do not");
    if (userLowercase) {
      var nextRandomItem = getRandomLowercase();
      function getRandomLowercase() {
        var raw = Math.random();
        var index = raw * userPasswordChoices.lowercase.length;
        index = Math.floor(index);
        var item = userPasswordChoices.lowercase[index];
        return item;
      }
      password += nextRandomItem;
      userPassword += userPasswordChoices.lowercase;
      }
      
     
    var userUppercase = confirm("Press 'OK' if you want to include UPPERCASE letters in your password. Press 'CANCEL' if you do not");
    if (userUppercase) {
      userPassword += userPasswordChoices.uppercase;
    }
    var userNumber = confirm("Press 'OK' if you want to include numbers in your password. Press 'CANCEL' if you do not");
    if (userNumber) {
      userPassword += userPasswordChoices.number;
    }
    var userSpecialChar = confirm("Press 'OK' if you want to include special characters in your password. Press 'CANCEL' if you do not");
    if (userSpecialChar) {
      userPassword += userPasswordChoices.specialChar;
    }

    // if statement, adding condition that says if the user doesn't select any character types, they will receive an alert telling them they must choose at least 1 type, and kicks them out of the function
    if (!userLowercase && !userUppercase && !userNumber && !userSpecialChar) {
      alert("You must choose at least one character type for your password, please start again.");
      return;
    }

    // now that userPassword has concatenated all the strings together (that the user said they wanted to include), we can use it in a with the Math.random function, multiplying it by the full length of the concatenated userPassword string to generate a random string to then use in the for loop, which keeps it to the user-requested length
    let userLengthFinal = userLength - password.length;
    for (i = 0; i < userLengthFinal; i++) {
      let randomPassword = Math.floor(Math.random() * userPassword.length);
      password += userPassword[randomPassword];
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

// added this additional event listener to automatically select the generated password when you click inside the text box, so the user can easily copy it
var copyText = document.getElementById("password");
var selectText = function() {
  copyText.select();
}
copyText.addEventListener("focus", selectText);
