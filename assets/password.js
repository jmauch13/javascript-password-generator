// Assignment code here

function generatePassword() {
// Array of special characters to be included in password
var specialChars = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];
// Array of numeric characters to be included in password
var numericChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// Array of lowercase characters to be included in password
var lowerCaseChars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
// Array of uppercase characters to be included in password
var upperCaseChars = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

// variables to generate password
var passLength = "";
var lowerCase;
var upperCase;
var numChars;
var spChars;




  // prompt for password length
  var passLength = prompt("How many characters would you like for your password?", "choose between 8-128");
  var lengthPick = parseInt(passLength);
  

  if (passLength < 8) {
      alert("Password must be at least 8 characters");
    if (passLength < 8) {
      var passLength = prompt("How many characters would you like for your password?", "choose between 8-128"); 

  } else if (passLength > 128) {
      alert("Password cannot be more than 128 characters");
    var passLength = prompt("How many characters would you like for your password?", "choose between 8-128");
  }

  

  // 
  var confirmOptions = [];
  let length = confirmOptions.length;

  // prompt for lowercase confirmation
  lowerCase = confirm("Press OK to include lowercase characters in your password");

    if (lowerCase === true) {
      confirmOptions.push("lowerCase");
    }

  // prompt for uppercase confirmation
  upperCase = confirm("Press OK to include uppercase characters in your password");

    if (upperCase === true) {
      confirmOptions.push("upperCase");
    }
    

  // prompt for number confirmation
  numChars = confirm("Press OK to include numbers in your password");

    if (numChars === true) {
      confirmOptions.push("numChars");
    }
    

  // prompt for special characters confirmation
  spChars = confirm("Press OK to include special characters in your password");

    if (spChars === true) {
      confirmOptions.push("spChars");
    }
  }


  var randomPassword = "";
  var allChars = [];
  //combine arrays
  //arr1.concat(arr2);
  for (let i = 0; i < confirmOptions.length; i++) {
    if (confirmOptions[i] === "lowerCase") {
      allChars = allChars.concat(lowerCaseChars);
      
    }
  }

  for (let i = 0; i < confirmOptions.length; i++) {
    if (confirmOptions[i] === "upperCase") {
      allChars = allChars.concat("upperCase");
    }
  }

  for (let i = 0; i < confirmOptions.length; i++) {
    if (confirmOptions[i] === "numChars") {
      allChars = allChars.concat("numChars");
    }
  }

  for (let i = 0; i < confirmOptions.length; i++) {
    if (confirmOptions[i] === "spChars") {
      allChars = allChars.concat("spChars");
    }
  }

  // Get random characters and add to random password
  for (let i = 0; i < passLength; i++) {
    var random = Math.floor(Math.random() * allChars.length);
    randomPassword += allChars[random];
    }
  }

  

      
 // }
    //end of code, final step: 
    //return randomPassword;



//display password


//math floor rounds up and math random picks a random number
//[Math.floor(Math.random() * allChars.length)];
  
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
