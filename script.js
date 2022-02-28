var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var count = Number(prompt("Please enter the amount of characters you would like in your password."));

  if (count < 8 || count > 128) { //specified parameters for number of used characters
    alert("You are not within range, enter at least 8 characters to continue.");
    
  }
  var lowercaseletters = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseletters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "12345678901234567890";
  var specialchar = "!@#$%^&*()_+=-{}|\\][\":';<>?/.,"; //all special case letters applicable for standard keyboard note special case for " and /. 
  
  var pool = lowercaseletters; //lowercase letters are the default starting point, further characters to be specified according to user demands.
  if (confirm("Would you like your password to contain Upper case letters?")) {
    pool += uppercaseletters;
  }
  if (confirm("Would you like your password to contain numbers?")) {
    pool += numbers;
  }
  if (confirm("Would you like your password to contain special characters?")) {
    pool += specialchar;
  }
  
  var genPassword = "";
  for (var i = 0; i < count; i++) {
    var random = Math.floor(Math.random() * pool.length);
    genPassword += pool[random];
  }
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
