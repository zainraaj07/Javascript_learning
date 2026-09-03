 // ==========================================
// JavaScript Arrays — Basic Array Operations
// Topics: Array Basics, push(), unshift(), pop(), shift()
// ==========================================



//1. Shopping Cart
const cart = [];

// Add products
cart.push("Monitor", "Keyboard", "Mouse");

// Add laptop at the beginning
cart.unshift("Laptop");

// Remove last product
cart.pop();

// Remove first product
cart.shift();

// Final cart
console.log("Final Output:", cart);


//2. Restaurant Order Queues
const orders = ["Order#101", "Order#102", "Order#103"];

// Add new order
orders.push("Order#104");
console.log("New Order Added:", orders);

// Add urgent order
orders.unshift("Order#105");
console.log("Urgent Order Added:", orders);

// Complete first order
const completedOrder = orders.shift();
console.log("Completed Order:", completedOrder);
console.log("Remaining Orders:", orders);

// Cancel last order
const cancelledOrder = orders.pop();
console.log("Cancelled Order:", cancelledOrder);
console.log("Remaining Orders:", orders);

// Final order status
console.log("Final Orders:", orders);
console.log("Total Pending Orders:", orders.length);