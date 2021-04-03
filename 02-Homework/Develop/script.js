// Assignment Code
var generateBtn = document.querySelector("#generate");

//Variables
var passwordText = document.querySelector("#password");
var passwordToReturn =""
var charSets = {
  lower: "abcdefghijklmnopqrstuvwxyz",
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numeric: "12345678901234567890",
  special: "!@#$%^&*()-_=+[{]}\|;:\'\",<.>/?",
  available: ""
}



// Write password to the #password input
function writePassword() { //triggering that function should start once event occurs
//collecting data from User
  var lengthOfPassword = lengthOfP();
  var lowCase = lowerCaseCase();
  var uppCase = upperCaseCase();
  var numnum = numbers();
  var charsp = schar();
  passwordToReturn = "";
  charSets.available -="";

  generatePassword(); console.log("textarea ", passwordToReturn);

  if (lowCase == true) { //floor makes product into whole number
    var lowlow = charSets.lower[Math.floor(Math.random() * charSets.lower.length)];
    passwordToReturn += lowlow; 
    charSets.available += charSets.lower;
      }

  if (uppCase == true) {
    var cap = charSets.upper[Math.floor(Math.random()*charSets.upper.length)];
    passwordToReturn += cap;
    charSets.available += charSets.upper;
      }

  if (numnum == true) {
    var num = charSets.numeric[Math.floor(Math.random()*charSets.numeric.length)];
    passwordToReturn += num;
    charSets.available += charSets.numeric;
    console.log(num);
      }

  if (charsp == true) {
    var spech = charSets.special[Math.floor(Math.random()*charSets.special.length)];
    passwordToReturn += spech;
    charSets.available += charSets.special;
      console.log(spech);}

var initial = passwordToReturn.length;
  for (var i = 0; i < parseInt(lengthOfPassword) - initial; i++ ){
    var randomIndex = Math.floor(Math.random()*charSets.available.length);    // we need a random number between 0 and charset.available.length 
    var randomChar = charSets.available[randomIndex];   // we want to get one random character from charset.available   
    passwordToReturn += randomChar;}
  generatePassword();};
  

function generatePassword(){
  document.getElementById("password").value = passwordToReturn;
    }
  

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//create length   //User inputs character #
function lengthOfP() {
  var lengthOfPassword = parseInt(prompt("Please enter how many characters are needed in the length of the password."));
  if (lengthOfPassword > 8 && lengthOfPassword < 128){ 
    return lengthOfPassword; 
  } else { 
    alert ("Please enter a number larger than 8 and less than 128.");
    return lengthOfP();}
} 


//User responds whether or not they want to have lowercase letters
function lowerCaseCase() {
  var lowerCase = confirm("Please select whether you would like lowercase letters in your password.");
  // press ok to mark true
  return lowerCase;
}

//User responds whether or not they want uppercase letters
function upperCaseCase(){
  var upperCase = confirm("Please select whether you would like uppercase letters in your password.");
    return upperCase;
}

//User responds whether or not they want numbers
function numbers(){
  var numeric = confirm("Please select whether you would like numbers in your password.");
    return numeric;
}

//User responds whether or not they want special characters
function schar(){
  var special = confirm("Please select whether you would like special characters in your password.");
    return special;
}



