// Pseudo Code
// 1. Create arrays for the letters, numbers, and special char
// 2. Create a prompt for user input how many chars they want for passwrod
// 3. Create a confirm for which characters they want to include
// 4. create a variable to contain the user input
// 5. create a for-loop to generate randomize passwords
// 6. Push randomized generated password to text box

// Assignment code here
const passwordText = document.querySelector("#password");

const randomFunc = {
  lower: randomLowerCharCodes,
  upper: randomUpperCharCodes,
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
  
  
      var charAmount = parseInt(prompt('How many characters would you like to include in your password? (8-128)'));
      
      if (charAmount < 8 || charAmount > 128){
        window.alert("You need to choose an amount between 8 and 128");
        return writePassword();
      };
      
      var lowercaseConfirm = window.confirm ("Would you like to include lowercase letters in your password?")
      var uppercaseConfirm = window.confirm ("Would you like to include uppercase letters in your password?")
      var numberConfirm = window.confirm ("Would you like to include numbers in your password?")
      var symbolConfirm = window.confirm ("Would you like to include symbols in your password?")
      
      
      var includeLowercase = lowercaseConfirm
      var includeUppercase = uppercaseConfirm
      var includeNumbers = numberConfirm
      var includeSymbols = symbolConfirm
      // var password = generatePassword(charAmount, includeLowercase, includeUppercase, includeNumbers, includeSymbols);
      
      console.log(includeLowercase, includeUppercase, includeNumbers, includeSymbols)
      
      // passwordText.innerText = password;
      passwordText.innerHTML = generatePassword(includeLowercase, includeUppercase, includeNumbers, includeSymbols, charAmount)
    };
    
function generatePassword(lower, upper, number, symbol, charAmount) {
      let generatedPassword = '';
      const typesCount = lower + upper + number + symbol;
      const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);
      
      console.log(typesCount)
      console.log(typesArr)

      if (typesCount === 0) {
        return '';
      }

      for (let i = 0; i < charAmount; i += typesCount) {
        typesArr.forEach(type => {
          const funcName = Object.keys(type)[0];
          console.log(funcName)
          generatedPassword += randomFunc[funcName]();
        });
      }

      console.log(generatedPassword);
      const finalPassword = generatedPassword.slice(0, charAmount);
      return finalPassword;
      // if (includeLowercase == true) { charCodes = charCodes.concat(randomLowerCharCodes); }
      // if (includeUppercase == true) { charCodes = charCodes.concat(randomUpperCharCodes); }
      // if (includeNumbers == true) { charCodes = charCodes.concat(randomNumberCharCodes); }
      // if (includeSymbols == true) { charCodes = charCodes.concat(randomSymbolCharCodes); }
      
      //   const passwordCharacters = []
      //   for (let i = 0;i < charAmount; i++) {
        //     let randomNumber = charCodes[Math.floor(Math.random() * charCodes.length)];
        //     passwordCharacters.push(String.fromCharCode(randomNumber));
        //     console.log(passwordCharacters)
        //   };
        //   return passwordCharacters.join('')
      };
      
      
      // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


