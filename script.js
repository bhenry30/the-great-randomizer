// Assignment code here
// const includeNumbers = 
// const includeSymbols =
// const includeUppercase =
// const includeLowercase =

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  // var password = generatePassword(charAmount, includeLowercase, includeUppercase, includeNumbers, includeSymbols );
  // var passwordText = document.querySelector("#password");

  var promptCharAmount = window.prompt('How many characters would you like to include in your password? (8-128)');
  var charAmount = parseInt(promptCharAmount)

  if (charAmount < 8 || charAmount > 128){
    window.alert("You need to choose an amount between 8 and 128");
    return writePassword();
  }
  
  var symbolConfirm = window.confirm ("Would you like to include symbols in your password?")
  var lowercaseConfirm = window.confirm ("Would you like to include lowercase letters in your password?")
  var uppercaseConfirm = window.confirm ("Would you like to include uppercase letters in your password?")
  var numberConfirm = window.confirm ("Would you like to include numbers in your password?")
  
  var randomNumber = function (min, max) {
    var value = Math.floor(Math.random() * (max - min) + min);
  }

  console.log(symbolConfirm, lowercaseConfirm, uppercaseConfirm, numberConfirm)
  // passwordText.value = password;

}
writePassword();
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
