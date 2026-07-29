// ==========================================
// 1 - Function Declaration
// ==========================================

function greetUser() {
    console.log("Welcome to JavaScript");
}

greetUser();
console.log("");



// ==========================================
// 2 - Function with Parameter
// ==========================================

function showAge(age) {
    console.log("Your age is", age);
}

showAge(22);
console.log("");



// ==========================================
// 3 - Access Global Variable
// ==========================================

let userName = "zain";

function showName() {
    console.log("Your Name is", userName);
}

showName();
console.log("");



// ==========================================
// 4 - Simple Calculator
// ==========================================

function calculate(a, b) {
    console.log("Addition:", a + b);
    console.log("Subtraction:", a - b);
    console.log("Multiplication:", a * b);
    console.log("Division:", a / b);  
}

calculate(2,4);
console.log("");



// ==========================================
// 5 - Voting Eligibility
// ==========================================

function vote(age) {
    if(age >= 18) {
        console.log("eligible For Vote");
    }
    else {
        console.log("Not Eligible");
    }
}

vote(15);