// Assignment code here
// Array of special characters to be included in password
var specialChars = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];
// Array of numeric characters to be included in password
var numericChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// Array of lowercase characters to be included in password
var lowerCaseChars = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];
// Array of uppercase characters to be included in password
var upperCaseChars = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

var passLength = "";
var lowerCase;
var upperCase;
var numChars;
var spChars;

function generatePassword() {

// need to loop back to ask again if length requirements not met
 var passLength = prompt("How many characters would you like for your password?", "choose between 8-128");
  if (passLength < 8) {
    alert("Password must be at least 8 characters");
  

} else if (passLength > 128) {
    alert("Password cannot be more than 128 characters");
  
}


  var lowerCase = prompt("Would you like to include lowercase characters?", "yes or no");

  if (lowerCase) {
    console.log(lowerCaseChars);
    }
  

  var upperCase = prompt("Would you like to include uppercase characters?", "yes or no");

  if (upperCase) {
    console.log(upperCaseChars);
  }

  var numChars = prompt("Would you like to include numbers in your password?", "yes or no");

  if (numChars) {
    console.log(numericChars);
  }

  var spChars = prompt("Would you like to include special characters?", "yes or no");

  if (spChars) {
    console.log(specialChars);
  }
}









//function that gets password options getpasswordoptions()



//function that gets a random number and we can use this whenever we want to pick a random element form one of the the arrays above by index
//function randomNumGenerator(input) {
var createPassword = "";
for (var i = 0; i < passLength; i++) {
  passChar[
    Math.floor(Math.random() * passChar.length)];
    createPassword += passChar[
      Math.floor(Math.random() * passChar.length)];
  }
//function generate password

//function write password

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
