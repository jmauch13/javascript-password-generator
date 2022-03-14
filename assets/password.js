// Assignment code here




// Array of special characters to be included in password
const specialChars = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];
// Array of numeric characters to be included in password
const numericChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// Array of lowercase characters to be included in password
const lowerCaseChars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
// Array of uppercase characters to be included in password
const upperCaseChars = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

var pass = "";
let allChars = "";



  // prompt for password length
  var passLength = prompt("How many characters would you like for your password?", "choose between 8-128");
  var lengthPick = parseInt(passLength);
  
 function generatePassword() {
  
  if (passLength < 8) {
      alert("Password must be at least 8 characters");
    if (passLength < 8) {
      var passLength = prompt("How many characters would you like for your password?", "choose between 8-128"); 

  } else if (passLength > 128) {
      alert("Password cannot be more than 128 characters");
    var passLength = prompt("How many characters would you like for your password?", "choose between 8-128");
  }

  else 

  // prompt for lowercase confirmation
  lowerCase = confirm("Press OK to include lowercase characters in your password"); {

    if (lowerCase === true) {
      allChars += lowerCase
    }
  }
}

  else 

  // prompt for uppercase confirmation
  upperCase = confirm("Press OK to include uppercase characters in your password"); {

    if (upperCase === true) {
      allChars += upperCase
    }
  }



  // prompt for number confirmation
  numChars = confirm("Press OK to include numbers in your password"); {

    if (numChars === true) {
      allChars += numChars
    }
  }
  


  // prompt for special characters confirmation
  spChars = confirm("Press OK to include special characters in your password"); {

    if (spChars === true) {
      allChars += spChars
    }
    }
  }

for (i = 8; i <= 128; i++) {
    allChars = Math.floor(Math.random() * pass.length + 1)
    allChars += pass.charAt(allChars)
  }
  
   
  


var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//function writePassword() {

//let password = generatePassword();
//let passwordText = document.querySelector("#password");
//passwordText.value = password;

//}
 

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);
