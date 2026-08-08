// ==========================================
// 1 - Parameter & Argument
// ==========================================

function greet(name) {                                 //name is parameter
   console.log(name);
}
greet("Zain");                                         //zain is argument 



// =============================================
// 2 - Parameter & Argument with arrow function
// =============================================

let total;
const totalPrice = (price,quantity) => {
      total = price * quantity;
}

totalPrice(400,7);
console.log(total);