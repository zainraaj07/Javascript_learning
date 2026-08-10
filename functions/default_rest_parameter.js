const calculateMarks = (name, marks, totalMarks = 500) => {

    const obtainedMarks = marks.reduce((total, mark) => {
        return total + mark;
    }, 0);

    console.log(obtainedMarks);

    const percentage = (obtainedMarks / totalMarks) * 100;

    let result;

    if (percentage >= 50) {
        result = "Pass";
    } else {
        result = "Fail";
    }

    return {
        name: name,
        obtainedMarks: obtainedMarks,
        percentage: percentage,
        result: result
    };
};

console.log(
    calculateMarks("Zain", [80, 79, 91, 88, 70])
);

console.log(
    calculateMarks("Ali", [70, 80, 90, 76, 79], 450)
);




const calculateBill = (price, quantity = 1, discount = 0) => {
  
    const subtotal = price * quantity;
    const discountAmount = (subtotal * discount) / 100;
    const finalBill = subtotal - discountAmount;

    let category;
    if(finalBill > 5000) {
        category = "Premium";
    }
    else if(finalBill > 2000) {
        category = "Regular";
    }
    else {
        category = "Baic";
    }

    return {
        subtotal : subtotal,
        discountAmount : discountAmount,
        finalBill : finalBill,
        category : category
    };

};

console.log(calculateBill(3000));
console.log(calculateBill(7000,3));
console.log(calculateBill(1000,3,30));