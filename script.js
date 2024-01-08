/* 
    Javascript for Challenge 05 
    Developer - Steve Hannay 
    First Created - 5th January 2024

    The following code generates a new Password when the user clicks on the webpages "Generate Password" button

    - The user is prompted to select various criteria for a new password (using altert/prompt/confirm).
    - The user input is validated before being accepted. 
    - A new password is generated using the criteria entered by the user together with random character selection.
    - The newly generated password is displayed to the user on the webpage (textarea id="password")
*/



// Declarations
// ------------


// Array of special characters to be included in password
var specialCharacters = [
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
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
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
var upperCasedCharacters = [
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

var newPassword = ""
var lengthOfPassword = 0



// Generate Password
// -----------------


// Main Function - Write password to the #password input
// note : this function is triggered by the event handler for the "generate" button
function writePassword() {

  // Get Password Options from the User
  getPasswordOptions()

  // Generate a New Password
  var password = generatePassword();

  // Display the New Password on the Webpage (textarea id="password")
  var passwordText = document.querySelector('#password');
  passwordText.value = password;

  alert("writePassword function completed")

}


// Prompt user for password options
function getPasswordOptions() {

  var userInput = ""

  // (1) Ask user what Length the new password should be 
  // - must be least 8 characters but no more than 128
  // - repeat prompting user until a valid length is entered
  while(lengthOfPassword === 0) {

    // get input
    userInput = prompt("Please enter the Length of the new password (between 8 and 128)")
    if (userInput != false){
      alert("TEST")
      // userInput = userInput.trim()
    }

    // validate input
    if (userInput &&  isNaN(userInput)) {

      // user did not enter a number
      alert("'" + userInput + "' is not a valid Length as it is not a number")

    }
    else if (userInput === null) {
     
      alert("USER PRESSED CANCEL")

    }
    else {
      alert("'" + userInput + "' IS A NUMBER")
    }
    

    lengthOfPassword = 99

  }


}


// Generate password with user input
function generatePassword() {


}



// Utility Functions
// -----------------


// Get a random element from an array
function getRandom(arr) {

}



// Event Handling
// --------------


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

