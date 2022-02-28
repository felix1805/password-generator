var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var count = Number(prompt("Please enter the amount of characters you would like in your password."));
  
  if (count < 8 || count > 128) { //specified parameters for number of used characters
    alert("You are not within range, enter at least 8 characters to continue.");
    return "";
  }
  var lowercaseletters = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseletters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "12345678901234567890";
  var specialchar = "!@#$%^&*()_+=-{}|\\][\":';<>?/.,";
   //all special case letters applicable for standard keyboard note special case for " and /. 
  
  var pool = lowercaseletters;
  var genPassword = "";

  for (var i = 0; i < count; i++) {
    var random = Math.floor(Math.random() * letters.length);
    genPassword += letters[random];
  }

  console.log(genPassword);

  return genPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
