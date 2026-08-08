// =============================================
// 1 - Shopping Bill 
// =============================================

const calculateBill = (price, quantity) => {
    return price * quantity;
}

const bill = calculateBill (100,2);
const finalBill = calculateBill (100,2) + 300;

console.log(bill);
console.log(finalBill);



// =============================================
// 2 - Employee Salary
// =============================================

const calculateSalary = (basicSalary, bonus) => {
     return basicSalary + bonus;
}

const finalSalary = calculateSalary (30000,1700);
console.log(finalSalary);