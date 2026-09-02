
// ========================================
// 1. Basic Callback
// ========================================

function sayHello() {
    console.log("Hello");
}

function runTask(callback) {
    callback();
}

runTask(sayHello);


// ========================================
// 2. Callback with Parameter
// ========================================

function processNumber(number, callback) {
    return callback(number);
}

function double(number) {
    return number * 2;
}

const doubledNumber = processNumber(4, double);

console.log("Doubled Number:", doubledNumber);


// ========================================
// 3. Callback with Multiple Parameters
// ========================================

function calculate(a, b, callback) {
    return callback(a, b);
}

// Addition Callback
function add(a, b) {
    return a + b;
}

// Multiplication Callback
function multiply(a, b) {
    return a * b;
}


// Using multiply as callback
const multiplicationResult = calculate(4, 1, multiply);

console.log("Multiplication:", multiplicationResult);


// Using add as callback
const additionResult = calculate(4, 1, add);

console.log("Addition:", additionResult);


// ========================================
// 4. Greeting Callback
// ========================================

function greet(name, callback) {
    return callback(name);
}

function welcome(name) {
    return "Hello " + name + ", welcome!";
}

const greeting = greet("Zain", welcome);

console.log("Greeting:", greeting);


// ========================================
// 5. Even / Odd Callback
// ========================================

function isEven(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

function isPositive(number) {
    if (number > 0) {
        return "Positive";
    } else {
        return "Negative";
    }
}

function checkNumber(number, callback) {
    return callback(number);
}


// Using isPositive as Callback
const numberStatus = checkNumber(-2, isPositive);

console.log("Number Status:", numberStatus);


// Using isEven as Callback
const evenStatus = checkNumber(7, isEven);

console.log("Even/Odd:", evenStatus);