// Pseudo Code
// 1. Create arrays for the letters, numbers, and special chars
// 2. Create a prompt for user input how many chars they want for passwrod
// 3. Create a confirm for which characters they want to include
// 4. create a variable to contain the user input
// 5. create a for-loop to generate randomize passwords
// 6. Push randomized generated password to text box

// Assignment code here
const passwordText = document.querySelector("#password");

// object with keys and random character functions as values
const randomFunctionsObject = {
  lowercase: randomLowerCharCodes,
  uppercase: randomUpperCharCodes,
  number: randomNumberCharCodes,
  symbol: randomSymbolCharCodes
}

function randomLowerCharCodes() {
  return String.fromCharCode(Math.floor(Math.random() * 27) + 97);
}

function randomUpperCharCodes() {
  return String.fromCharCode(Math.floor(Math.random() * 27) + 65);
}

function randomNumberCharCodes() {
  return String.fromCharCode(Math.floor(Math.random() * 11) + 48);
}

function randomSymbolCharCodes() {
  const symbols = '!@#$%^&*(){}[]=<>/,.';
  return symbols[Math.floor(Math.random() * symbols.length)];
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(includeLowercase, includeUppercase, includeNumbers, includeSymbols, charAmount) {
  
  // prompt asking how many chars to include in password, then turn input into integer
  var charAmount = parseInt(prompt('How many characters would you like to include in your password? (8-128)'));
  
  // if user input is below 8 or above 128, then alert them they need to choose correct amount - return to beginning
  if (charAmount < 8 || charAmount > 128){
    window.alert("You need to choose an amount between 8 and 128");
    return writePassword();
  };
  
  // window prompts confirming which chars to include in password
  var lowercaseConfirm = window.confirm ("Would you like to include lowercase letters in your password?")
  var uppercaseConfirm = window.confirm ("Would you like to include uppercase letters in your password?")
  var numberConfirm = window.confirm ("Would you like to include numbers in your password?")
  var symbolConfirm = window.confirm ("Would you like to include symbols in your password?")
      
  // turning user confirm values into variables   
  var includeLowercase = lowercaseConfirm
  var includeUppercase = uppercaseConfirm
  var includeNumbers = numberConfirm
  var includeSymbols = symbolConfirm

  
  // console.log(includeLowercase, includeUppercase, includeNumbers, includeSymbols)
  
  // make passwordText element display the value of the generatePassword function 
  passwordText.innerHTML = generatePassword(includeLowercase, includeUppercase, includeNumbers, includeSymbols, charAmount)
};

// function to generate password based on user inputs
function generatePassword(lowercase, uppercase, number, symbol, charAmount) {
  // set up generated password as an empty string for now
  let generatedPassword = ''; 
  // variable to count how many char types the user inputed
  const charTypesWantedCount = lowercase + uppercase + number + symbol;
  // variable that sets array of objects (types) and filters out types with false values with filter method
  const charTypesArray = [{lowercase}, {uppercase}, {number}, {symbol}].filter(item => Object.values(item)[0]);
  
  // console.log(charTypesWantedCount)
  // console.log(charTypesArray)

  // if user doesn't choose any char types, then return empty string
  if (charTypesWantedCount === 0) {
    return '';
  }
  // for loop to generate chars for each type
  for (let i = 0; i < charAmount; i += charTypesWantedCount) {
    // loop through array
    charTypesArray.forEach(type => {
      const funcName = Object.keys(type)[0];
      // console.log(funcName)
      generatedPassword += randomFunctionsObject[funcName]();
    });
  }

  // console.log(generatedPassword);
  const password = generatedPassword.slice(0, charAmount);
  return password;
  };
      
      
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


