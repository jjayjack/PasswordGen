// Assignment Code
var generateBtn = document.querySelector("#generate");

//Variables
// var password = generatePassword();
var passwordText = document.querySelector("#password");
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numeric = ["0","1","2","3","4","5","6","7","8","9"];
var special = ["!","@","#","$","%","^","&","*","(",")","-","_","=","+","`","~","[","{","]","}","\\","|",";",":","\'","\"",",","<",".",">","/","?"];

var charSets = {
  lower: "abcdefghijklmnopqrstuvwxyz",
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numeric: "1234567890",
  special: "!@#$%^&*()-_=+[{]}\|;:\'\",<.>/?",
  available: ""
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());

//create length   //User inputs character #
function lengthOfP() {
  var lengthOfPassword = parseInt(prompt("Please enter how many characters are needed in the length of the password."));
  if (lengthOfPassword > 8 && lengthOfPassword < 128){ 
    return lengthOfPassword;
  } else {
    alert ("Please enter a number larger than 8 and less than 128.")
    lengthOfP();
  }
}

//User responds whether or not they want to have lowercase letters
function lowerCaseCase() {
  var lower = confirm("Please select whether you would like lowercase letters in your password.");
  // press ok to mark true
  return lower
}

//User responds whether or not they want uppercase letters
function upperCaseCase(){
  var cap = confirm("Please select whether you would like uppercase letters in your password.");
    return cap 
}


//User responds whether or not they want numbers
function numbers(){
  var num = confirm("Please select whether you would like numbers in your password.");
    return num
}

//User responds whether or not they want special characters
function schar(){
  var schar = confirm("Please select whether you would like special characters in your password.");
    return schar
}

// Write password to the #password input
function writePassword() {
  console.log("working"); //testing to make sure function is coded
//collecting data from User
  var lengthOfPassword = lengthOfP();
  var lowCase = lowerCaseCase();
  var uppCase = upperCaseCase();
  var numnum = numbers();
  var charsp = schar();
  var used = [];
  var type = [];
  var passwordToReturn = ""

    // initial expression: for each character selected by the user, pick at out values from each selection
   // condition expression: condition must stay true to run - true until < lengthOfPassword
   // set up increment expression to make sure that each var is run through
   //need statements to execute -- runs through and collects variables chosen by user into an array
  if (lowCase == true) {
    charSets.available += charSets.lower;
// randomize selection from lowerCase, math floor will pull the largest value from array 
    var low = lowerCase[Math.floor(Math.random()*lowerCase.length)];
//add variables to array 
      used.push(low);
      //adding values to array from what was randomly chosen -- tells program it needs to keep track of type ""
      type.push("low");
      }

  if (uppCase == true) {
//randomize selection from upperCase, math floor will pull the largest value from array and math.random will work on array length to randomize selection
    var cap = upperCase[Math.floor(Math.random()*upperCase.length)];
      used.push(cap);
      type.push("cap");     
      }

  if (numnum == true) {
//randomize selection from numeric
    var num = numeric[Math.floor(Math.random()*numeric.length)];
      used.push(num);
      type.push("num");
      }

  if (charsp == true) {
//randomize selection from special characters
    var schar = special[Math.floor(Math.random()*special.length)];
      used.push(schar);
      type.push("schar");
      }
//from if statements only have one value from each 

//starting loop which runs through each variable selected by user until password is less than the length of password minus the array length, 
//after each instance the loop will move up by one
  // for (x = 0; x < lengthOfPassword - type.length; x ++) {
  //   console.log();
  //   //Running code to randomize which math.floor will return the largest integer within 0-1 multiplied by the amount of values within the array
  //   // create array of the typeof data within array used
  //   var random = Math.floor(Math.random() * type.length); 

  //   //within the array random from the array type equals is low
  //   if (type [random] == "low"){
  //     //randomize order values collected
  //     var lowerC = random[Math.floor(Math.random()*random.length)];

  //   } 

    
    
    
    
  
  // set variable for each function to run on for loop
  for (var i = 0; i < parseInt(lengthOfPassword); i++ ){
    // we want to get one random character from charset.available
      // we need a random number between 0 and charset.available.length
    var randomIndex = Math.floor(Math.random()*charSets.available.length);
    console.log(randomIndex);
      // use random number to get a character from the charset.avaialbe
    var randomChar = charSets.available[randomChar];
    console.log(randomChar);
    passwordToReturn += randomChar;
    console.log(passwordToReturn);
  }
  return password();
    // return writePassword();
// password(){


//   writePassword();


}
//   passwordText.value = password;
  
//     writePassword(); //calls upon what was collected from function
//   }



