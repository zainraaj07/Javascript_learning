                                
   //           JAVASCRIPT OPERATORS           //                       


 
// ------------------------------------------
// 1. Arithmetic Operators
// ------------------------------------------  

let a = 4;
let b = 10;

console.log("\n '---- Arithmetic Operators ---- ");

console.log("Addition :",a+b);
console.log("Subtraction :",a-b);
console.log("Multiply :",a*b);
console.log("Division :",a/b);
console.log("Power :",a**b);
console.log("Remainder :",a%b);


// ------------------------------------------
// 2. Even or Odd Check
// ------------------------------------------

let number = 4;
console.log("\n --- Even or Odd Check --- ");

if ( number % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}


// ------------------------------------------
// 3. Positive, Negative, or Zero Check
// ------------------------------------------

let number1 = 2;
console.log("\n ---- Number Sign Check ----- ")

if (number1 > 0) {
    console.log("Positive");
} else if (number1 < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}


// ------------------------------------------
// 4. Assignment Operators
// ------------------------------------------

let balance = 7800;
console.log("\n--- Assignment Operators ---");

balance += 200;
console.log("After adding 200:", balance);

balance -= 800;
console.log("After subtracting 800:", balance);

balance *= 2;
console.log("After multiplying by 2:", balance);



// ------------------------------------------
// 5. Student Result Using Object & Operators
// ------------------------------------------

const student = {
    fullName : "Zain Ijaz",
    totalMarks : 1200,
    obtainedMarks : 1034
};

const percentage = student.obtainedMarks / student.totalMarks * 100;

console.log("\n--- Student Result ---");

console.log(student);
console.log(percentage);

if (percentage >= 40) {
    console.log("Pass");
} else {
    console.log("Fail");
}


// ------------------------------------------
// 6. Voting Eligibility
// ------------------------------------------

let age = 19;
const hasCnic = true;

console.log("\n--- Voting Eligibility ---");

if (age >= 18 && hasCnic) {
    console.log("Elgible For Vote");
} else {
    console.log("Not Eligible");
}


// ------------------------------------------
// 7. Login System
// ------------------------------------------

const userName = "zainraj";
const password = "123123";

const username = "zainraj";
const Password = "123123";

console.log("\n--- Login System ---");

if (userName === username && password === Password) {
    console.log("Login successfuly");
} else {
    console.log("Invalid User");
}



// ------------------------------------------
// 8. Shopping Discount
// ------------------------------------------

let shopping = {
    fullName : "Zain Ijaz",
    totalAmmount : 9000,
    isMember : true,
    hasCoupon : false
}
console.log("\n--- Shopping Discount System ---");
console.log(shopping);

 if (shopping.totalAmmount > 5000 && shopping.isMember || shopping.hasCoupon) {
    console.log ("Discount Avaliable");
 } else {
    console.log("No Discount");
 }

