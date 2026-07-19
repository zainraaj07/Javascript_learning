
  //           JAVASCRIPT CONVERSION           //   

 
  
  // ------------------------------------------
// 1. String To Number
// ------------------------------------------ 

let age = "19";

let convertAge = Number(age);
console.log(convertAge);
console.log(typeof convertAge);



  // ------------------------------------------
// 2. Number To String
// ------------------------------------------

let myAge = 20;

let convertMyAge = String(myAge);
console.log(convertMyAge);
console.log(typeof convertMyAge);




  // ------------------------------------------
// 3.  String to Number Conversion & Addition
// ------------------------------------------

console.log("\n ---- Conversion Addition ---- ");

let num1 = "20";
let num2 = "30";

let convertNum1 = Number(num1);
let convertNum2 = Number(num2);

let sum = convertNum1 + convertNum2;

console.log("Number1: ", convertNum1);
console.log(typeof convertNum1);
console.log("Number2: ", convertNum2);
console.log(typeof convertNum2);
console.log("Sum is: ", sum);



  // ------------------------------------------
// 4.  ParseInt & ParseFloat
// ------------------------------------------

let n = "123.3";

console.log("\n ---- ParseInt Value ---- ");
console.log(parseInt (n));
console.log("\n ---- ParseFloat Value ---- ");
console.log(parseFloat(n));
