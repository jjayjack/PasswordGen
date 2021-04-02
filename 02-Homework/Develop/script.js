// Assignment Code
var generateBtn = document.querySelector("#generate");

//Variables
// var password = generatePassword();
var passwordText = document.querySelector("#password");
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numeric = ["0","1","2","3","4","5","6","7","8","9"];
var special = ["!","@","#","$","%","^","&","*","(",")","-","_","=","+","`","~","[","{","]","}","\\","|",";",":","\'","\"",",","<",".",">","/","?"];

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
function writePassword() {}
  console.log("working"); //testing to make sure function is coded
  lengthOfP();
  lowerCaseCase();
  upperCaseCase();
  numbers();
  schar();
// set variable for each function to run on for loop
  var used
  var lengthOfPassword = lengthOfP();
  var lowCase = lowerCaseCase();
  var uppCase = upperCaseCase();
  var numnum = numbers();
  var charsp = schar();
  var used = [];
  var type = [];
// initial expression: for each character selected by the user, pick at out values from each selection
// condition expression: condition must stay true to run - true until < lengthOfPassword
// set up increment expression to make sure that each var is run through
//need statements to execute -- runs through and collects variables chosen by user into an array
  if (lowCase == true) {
// randomize selection from lowerCase, math floor will pull the largest value from array 
    var low = lowerCase[Math.floor(Math.random()*lowerCase.length)];
//add variables to array 
      used.push(low);
      //create array from what was inputted into array -- tells program it needs to keep track of type
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
      //only have one value from each 

//
  for (x = 0; x < lengthOfPassword - type.length; x ++) {
    //Running code to randomize which math.floor will return the largest integer within 0-1 multiplied by the amount of values within the array
    var random = Math.floor(Math.random() * type.length); 
    // create array of the typeof data within array used
    if (type [random] == "low"){

    } 

    
    


  }

    // return writePassword();
// password(){


//   writePassword();



//   passwordText.value = password;
  
//     writePassword(); //calls upon what was collected from function
//   }



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
