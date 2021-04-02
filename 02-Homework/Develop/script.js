// Assignment Code
var generateBtn = document.querySelector("#generate");

//Variables
// var password = generatePassword();
var passwordText = document.querySelector("#password");
var lengthOfPassword;
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numeric = ["0","1","2","3","4","5","6","7","8","9"];
var special = ["!","@","#","$","%","^","&","*","(",")","-","_","=","+","`","~","[","{","]","}","\\","|",";",":","\'","\"",",","<",".",">","/","?"];

//create length   //User inputs character #
function lengthOfP() {
  var lengthOfPassword = parseInt(prompt("Please enter how many characters are needed in the length of the password."));
  if (lengthOfPassword > 8 && lengthOfPassword < 128){ 
    console.log(lengthOfPassword);
    lowerCaseCase(); 
    return lengthOfPassword;
  } else {
    alert ("Please enter a number larger than 8 and less than 128.")
    lengthOfP();
  }
}

//create variable for lowercase //User responds whether or not they want to have characters
function lowerCaseCase() {
  var lower = prompt("Please select whether you would like lowercase letters in your password.");
    if (lower == "yes"){
    // randomize selection from lowerCase, math floor will pull the largest value from array 
      lower = lowerCase[Math.floor(Math.random()*lowerCase.length)];
      console.log(lower);
      capital();
      }
    else if (lower == "no"){ 
      capital();}
    else {alert("Please type yes or no.")
  lowerCaseCase();}
}

//create function for upperCase
function capital(){
  var cap = prompt("Please select whether you would like uppercase letters in your password.");
    if (cap == "yes"){
  //randomize selection from upperCase, math floor will pull the largest value from array and math.random will work on array length to randomize selection
      cap = upperCase[Math.floor(Math.random()*upperCase.length)];
      console.log(cap);
      numbers();
      }
    else if (cap == "no"){
      numbers();
  } else {alert("Please type yes or no."); 
  capital();}
}

//create numeric
function numbers(){
  var num = prompt("Please select whether you would like numbers in your password.")
    if (num == "yes"){
      num = numeric[Math.floor(Math.random()*numeric.length)];
      console.log(num);
      schar();
      }
    else if (num =="no"){
    schar();
    } else {alert("Please type yes or no.");
    numbers();}
  }

//create special
function schar(){
  var schar = prompt("Please select whether you would like special characters in your password.")
    if (schar == "yes"){
      schar = special[Math.floor(Math.random()*special.length)];
      console.log(schar);
      }
    }

// Write password to the #password input
function writePassword() {}
  console.log("working"); //testing to make sure function is coded

lengthOfP();
lowerCaseCase();
capital();
numbers();
schar();

  

    // return writePassword();
// password(){


// } 
//   writePassword();



//   passwordText.value = password;
  
//     writePassword(); //calls upon what was collected from function
//   }



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
