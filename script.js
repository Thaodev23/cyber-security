// Author: Joey Thao
// Collaborators: Jason Yang
// Date: 10/3/2023
// Description: Developing a code in JavaScript to generate a password that will allow for maximum security purposes.

// Assignment Code

// Below initialize the default number. This variable also represent the number of characters for the password. Variable also represent an item. Below are also the global variables.
var numberChar = 0;
var useLowChar = false;
var useUpperCaseChar = false;
var useSpecialChar = false;
var useNumber = false;
var lowCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialChar = "!@#$%^&*()-_+={}\|/?\";:.,<>~`";
var number = "0123456789";


// The expression is expressed in the prompt through the function. Function split line of codes into smaller tasks.
function generatePassword () {
 numberChar = prompt ("Please enter the number of characters for your password between 8 and 128");
while (numberChar < 8 || numberChar > 128 || numberChar===null || isNaN (numberChar) || numberChar===undefined) 
{
  numberChar = prompt ("Please enter the number of characters for your password between 8 and 128");
}

useLowChar = confirm ("Will you allow lower case letters");
useUpperCaseChar = confirm ("Will you allow upper case letters");
useSpecialChar = confirm ("will you allow special characters");
useNumber = confirm ("will you allow numbers");

// Below are the various arrays that were used in the if then statement.
var password = [];
var array =[];
var lowCaseArr = lowCase.split ("");
var upperCaseArr = upperCase.split ("");
var specialCharArr = specialChar.split ("");
var numberArr = number.split ("");
var charCount = 0;

if (useLowChar) {
  array = [...array,...lowCaseArr];
  var lowChar = chooseElement(lowCaseArr);
  password.push(lowChar);
  charCount++;
}

if (useUpperCaseChar) {
  array = [...array,...upperCaseArr];
  var upperChar = chooseElement(upperCaseArr);
  password.push(upperChar);
  charCount++;
}

if (useSpecialChar) {
  array = [...array,...specialCharArr];
  var special1 = chooseElement(specialCharArr);
  password.push(special1);
  charCount++;
}

if (useNumber) {
  array = [...array,...numberArr];
  var number1 = chooseElement(numberArr);
  password.push(number1);
  charCount++;
}

for (var i = 0; i < numberChar-charCount; i++) {
  var char1 = chooseElement(array);
  password.push(char1);
}

// The shuffle allows for random pick of characters.
shuffle (password);
password = password.join("");

// console.log (array);
// console.log (password);

return password;

}

// The function chooseElement code below is credited for geeksforgeeks.org
function chooseElement(arr) {
  return arr[(Math.floor(Math.random() * arr.length))];
}

// The function shuffle code below is credited for stackoverflow.com.
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  while (currentIndex > 0) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
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
