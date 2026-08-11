// =============================================
// 1. Student Result Calculator
// =============================================

const calculateResult = (name, marks, totalMarks = 500) => {

    const obtainedMarks = marks.reduce((total, mark) => {
        return total + mark;
    }, 0);

    const percentage = (obtainedMarks / totalMarks) * 100;

    let result;

    if (percentage >= 50) {
        result = "Pass";
    } else {
        result = "Fail";
    }

    return {
        name,
        obtainedMarks,
        percentage: percentage.toFixed(2),
        result
    };
};


// Student Results
console.log(calculateResult("Zain", [80, 79, 91, 88, 70]));

console.log(calculateResult(
    "Ali",
    [70, 80, 90, 76, 79],
    450
));


// =============================================
// 2. Shopping Bill Calculator
// =============================================

const calculateBill = (price, quantity = 1, discount = 0) => {

    const subtotal = price * quantity;

    const discountAmount = (subtotal * discount) / 100;

    const finalBill = subtotal - discountAmount;

    let category;

    if (finalBill > 5000) {
        category = "Premium";
    } else if (finalBill > 2000) {
        category = "Regular";
    } else {
        category = "Basic";
    }

    return {
        subtotal,
        discountAmount,
        finalBill,
        category
    };
};


// Shopping Bills
console.log(calculateBill(3000));

console.log(calculateBill(7000, 3));

console.log(calculateBill(1000, 3, 30));



// =============================================
// Rest Parameter
// =============================================

const calculateTotal = (...numbers) => {
    let total = 0;

    for (let number of numbers) {
        total += number;
    }

    return total;
};

console.log(calculateTotal(10, 20, 30));
console.log(calculateTotal(5, 10, 15, 20, 25));