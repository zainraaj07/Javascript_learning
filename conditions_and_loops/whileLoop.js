// ------------------------------------------
// Task 1 — Reverse Counting
// ------------------------------------------

let number = 10;

console.log("\n--- Reverse Counting ---");

while (number >= 1){
    console.log(number);
    number--;
}



// ------------------------------------------
// Task 2 — Sum of 1 to 10
// ------------------------------------------

var i = 1;
let sum = 0;

console.log("\n--- Sum of Numbers ---");

while (i <= 10) {
    sum += i;
    i++;
   
}

 console.log("Sum: ", sum);


// ------------------------------------------
//  Task 3 — Multiplication Table Using While Loop
// ------------------------------------------

 var i = 1;
 let num = 5;

console.log("\n--- Multiplication Table of 5 ---");

 while ( i <= 10) {
    console.log(num + "x" + i + "=" + num * i);
    i++;
 }



 // ------------------------------------------
// Task 4 — Even Numbers and Total Count
// ------------------------------------------

 var i = 1;
 let count = 0;

console.log("\n--- Even Numbers from 1 to 20 ---");

 while ( i <= 20) {
    if (i % 2 === 0) {
        console.log(i);
        count++;
       
    }
     i++;
 }

 console.log(count);