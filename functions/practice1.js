
// ========================================
// 1. Function Declaration
// ========================================

function multiply(a, b) {
    return a * b;
}

const multiplyResult = multiply(4, 9);

console.log("Multiplication:", multiplyResult);


// ========================================
// 2. Function with Condition
// ========================================

function isAdult(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}

const adultStatus = isAdult(17);

console.log("Is Adult:", adultStatus);


// ========================================
// 3. Function with Multiple Parameters
// ========================================

function calculatePrice(price, tax) {
    return price + tax;
}

const finalPrice = calculatePrice(9000, 200);

console.log("Final Price:", finalPrice);


// ========================================
// 4. Arrow Function
// ========================================

const subtract = (a, b) => {
    return a - b;
};

const subtractResult = subtract(7, 1);

console.log("Subtraction:", subtractResult);


// ========================================
// 5. Arrow Function with Division
// ========================================

const divide = (a, b) => {
    return a / b;
};

const divideResult = divide(4, 2);

console.log("Division:", divideResult);


// ========================================
// 6. Arrow Function with One Parameter
// ========================================

const square = (n) => {
    return n * n;
};

const squareResult = square(7);

console.log("Square:", squareResult);


// ========================================
// 7. Arrow Function with Condition
// ========================================

const isEven = (n) => {
    if (n % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
};

const numberType = isEven(3);

console.log("Number is:", numberType);

