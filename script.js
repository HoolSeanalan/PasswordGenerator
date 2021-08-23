// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var characters = [];
  var generatedPass = "";

  var passLength = prompt("How long would you like your password to be?", "8-128");

  if (passLength < 8 || passLength > 128) {
    return "Please choose a length between 8 and 128."
  }

  if (confirm('Should your password include lowercase characters?')) {
    characters.push(
      "a", "b", "c",
      "d", "e", "f",
      "g", "h", "i",
      "j", "k", "l",
      "m", "n", "o",
      "p", "q", "r",
      "s", "t", "u",
      "v", "w", "x",
      "y", "z")
  }

  if (confirm('Should your password include uppercase characters?')) {
    characters.push(
      "A", "B", "C",
      "D", "E", "F",
      "G", "H", "I",
      "J", "K", "L",
      "M", "N", "O",
      "P", "Q", "R",
      "S", "T", "U",
      "V", "W", "X",
      "Y", "Z")
  }

  if (confirm('Should your password include numeric characters?')) {
    characters.push(
      "0", "1", "2",
      "3", "4", "5",
      "6", "7", "8",
      "9")
  }

  if (confirm('Should your password include special characters?')) {
    characters.push(
      '\u0020', '\u0021', '\u0022',
      '\u0023', '\u0024', '\u0025',
      '\u0026', '\u0027', '\u0028',
      '\u0029', '\u002A', '\u002B',
      '\u002C', '\u002D', '\u002E',
      '\u002F', '\u003A', '\u003B',
      '\u003C', '\u003D', '\u003E',
      '\u003F', '\u0040', '\u005B',
      '\u005C', '\u005D', '\u005E',
      '\u005D', '\u0060', '\u007B',
      '\u007C', '\u007D', '\u007E')
  }

  if (characters[0] == null){
    return "Please choose at least one character category."
  }

  for (let i = 0; i < passLength; i++) {
    generatedPass = generatedPass + characters[Math.floor(Math.random() * characters.length)]
  }

  return generatedPass;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
