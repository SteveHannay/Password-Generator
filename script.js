/* 
    Javascript for Challenge 05 
    Developer - Steve Hannay 
    First Created - 5th January 2024

    The following code generates a new Password when the user clicks on the webpages "Generate Password" button :

    - The user is prompted to select various criteria for a new password (using altert/prompt/confirm).
    - The user input is validated before being accepted. 
    - A new password is generated using the criteria entered by the user together with random character selection.
    - The newly generated password is displayed to the user on the webpage (textarea id="password")

    The requirements specified for the Challenge are as follows :

    * Generate a password when the button is clicked
    * Present a series of prompts for password criteria
    * Length of password
      * At least 8 characters but no more than 128.
    * Character types
      * Lowercase
      * Uppercase
      * Numeric
      * Special characters ($@%&*, etc)
    * Code should validate for each input and at least one character type should be selected
    * Once prompts are answered then the password should be generated and displayed in an alert or written to the page
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

// Variables for user selections
var lengthOfPassword 
var characterType_Lowercase 
var characterType_Uppercase 
var characterType_Numeric 
var characterType_SpecialCharacters



// Generate Password
// -----------------


// MAIN Function - Write password to the #password input
// note : this function is triggered by the event handler for the "generate" button
function writePassword() {

  // Initialise variables and reset screen
  lengthOfPassword = 0
  characterType_Lowercase = false
  characterType_Uppercase = false
  characterType_Numeric = false
  characterType_SpecialCharacters = false

  // Get Password Options from the User
  getPasswordOptions()

  // Generate a New Password using the Password Options
  var password = generatePassword();

  // Display the New Password on the Webpage (textarea id="password") and using an Alert
  var passwordText = document.querySelector('#password');
  passwordText.value = password;

  alert("Your new password = " + password)

}


// Prompt user for password options
function getPasswordOptions() {

  var userInput = ""

  // (1) Ask user what LENGTH the new password should be 
  // - user must enter a length of at least 8 characters but no more than 128
  // - keep prompting user until a valid length is entered
  while(lengthOfPassword === 0) {

    // Get user input
    userInput = prompt("Please enter the Length of the new password (between 8 and 128)")

    // Validate user input
    if (userInput &&  isNaN(userInput)) {
      // - user ented a string that is not a number
      alert("'" + userInput + "' is not a valid Length as it is not a number")
    }
    else if (userInput.trim() == "") {
      // - user entered nothing
      alert("You didnt enter a value.")
    }
    else if (userInput === null) {
      // - user pressed cancel
      alert("You pressed Cancel.")
    }
    else {

      // - user entered a number - this must be checked to ensure it is between 8 and 128 (inclusive)
      if (userInput < 8) {
        // number is too high
        alert("You entered " + userInput + ". Length must not be less than 8")
      } 
      else if (userInput > 128){
        // number is too low
        alert("You entered " + userInput + ". Length must not be more than 128")
      }
      else {
        // number is valid - SET USER INPUT AS THE LENGTH OF PASSWORD
        lengthOfPassword = userInput
      }
      
    }
  }

  // (2) Ask user what CHARACTER TYPES the new password should use 
  // - user must select at least one character type
  // - keep prompting user until at least one character type is selected
  var characterTypesSelected = false
  while(characterTypesSelected == false) {

    // Get user input and set character types
    if (confirm("Include Lowercase?")){characterType_Lowercase = true}
    if (confirm("Include Uppercase?")){characterType_Uppercase = true}
    if (confirm("Include Numeric?")){characterType_Numeric = true}
    if (confirm("Include Special Characters ($@%&*, etc)?")){characterType_SpecialCharacters = true}

    // Validate user input
    if (characterType_Lowercase == false && characterType_Uppercase == false && 
    characterType_Numeric == false && characterType_SpecialCharacters == false){
        alert("Please select at least one Chracter Type")
    }
    else{
      characterTypesSelected = true  
    }

  }

}


// Generate password from user input
function generatePassword() {

  var searchArray = []
  var newPassword = ""
  var randomCharacter = ""

  // Create an array of all the possible characters
  if (characterType_Lowercase == true) {
    searchArray = lowerCasedCharacters
  }
  if (characterType_Uppercase == true) {
    searchArray = searchArray.concat(upperCasedCharacters)
  }
  if (characterType_Numeric == true) {
    searchArray = searchArray.concat(numericCharacters)
  }
  if (characterType_SpecialCharacters == true) {
    searchArray = searchArray.concat(specialCharacters)
  }
  console.log(searchArray) // for debugging

  // Repeat for the Length of the new password
  for (let i = 1; i <= (lengthOfPassword); i++) {

    // return a random character from the search array
    randomCharacter = getRandom(searchArray)

    // concatonate the random character to form the new password
    newPassword = newPassword + randomCharacter
    
  }

  // Return the new password
  return newPassword

}



// Utility Functions
// -----------------


// Return the value of a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random()*arr.length)];
}



// Event Handling
// --------------


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

