// Assignment code here
const lowerCharCodes = arrayMinToMax (97,122);
const upperCharCodes = arrayMinToMax (65,90);
const symbolCharCodes = arrayMinToMax (33,47).concat(arrayMinToMax (58,64)).concat(arrayMinToMax(91.96)).concat(arrayMinToMax(123,126));
const numberCharCodes = arrayMinToMax (48,57);

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword(charAmount, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
  var passwordText = document.querySelector("#password");
  
  var charAmount = parseInt(prompt('How many characters would you like to include in your password? (8-128)'));
  
  if (charAmount < 8 || charAmount > 128){
    window.alert("You need to choose an amount between 8 and 128");
    return writePassword();
  };
  
  var lowercaseConfirm = window.confirm ("Would you like to include lowercase letters in your password?")
  var uppercaseConfirm = window.confirm ("Would you like to include uppercase letters in your password?")
  var numberConfirm = window.confirm ("Would you like to include numbers in your password?")
  var symbolConfirm = window.confirm ("Would you like to include symbols in your password?")
  
  
  var includeLowercase = lowercaseConfirm.value 
  var includeUppercase = uppercaseConfirm.value
  var includeNumbers = numberConfirm.value
  var includeSymbols = symbolConfirm.value
  var password = generatePassword(charAmount, includeLowercase, includeUppercase, includeNumbers, includeSymbols);
  
  passwordText.value = password;
};

function generatePassword(charAmount, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
  let charCodes = '';
  if (includeLowercase) charCodes = charCodes.concat(lowerCharCodes);
  if (includeUppercase) charCodes = charCodes.concat(upperCharCodes);
  if (includeNumbers) charCodes = charCodes.concat(numberCharCodes);
  if (includeSymbols) charCodes = charCodes.concat(symbolCharCodes);
  
  const passwordCharacters = []
  for (var i = 0;i < charAmount; i++) {
    var randomNumber = charCodes[Math.floor(Math.random() * charCodes.length)];
    passwordCharacters.push(JSON.stringify(randomNumber));
  };
  return passwordCharacters.join('')
};

function arrayMinToMax(min,max) {
  const array = []
  for (var i = min; i<= max; i++){
    array.push(i)
  }
  return array
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword) ;
