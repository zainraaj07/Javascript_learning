// Product prices as strings
let product1 = "1999.99";
let product2 = "199.50";
let product3 = "8499.75";

// Product quantities as strings
let quantity1 = "3";
let quantity2 = "9";
let quantity3 = "1";

// Convert price strings into decimal numbers
let price1 = parseFloat(product1);
let price2 = parseFloat(product2);
let price3 = parseFloat(product3);

// Convert quantity strings into whole numbers
let qnty1 = parseInt(quantity1);
let qnty2 = parseInt(quantity2);
let qnty3 = parseInt(quantity3);

// Calculate total price of each product
let totalOne = price1 * qnty1;
let totalTwo = price2 * qnty2;
let totalThree = price3 * qnty3;

// Calculate subtotal of all products
let subTotal = totalOne + totalTwo + totalThree;

// Generate random discount between 5% and 20%
let discount = Math.floor(Math.random() * 16) + 5;

// Calculate discount amount
let discountAmount = (subTotal * discount) / 100;

// Calculate final bill after discount
let finalBill = subTotal - discountAmount;

// Find the highest product total
let highest = Math.max(totalOne, totalTwo, totalThree);

// Find the lowest product total
let lowest = Math.min(totalOne, totalTwo, totalThree);

// Display product totals with 2 decimal places
console.log("Product 1 Total:", totalOne.toFixed(2));
console.log("Product 2 Total:", totalTwo.toFixed(2));
console.log("Product 3 Total:", totalThree.toFixed(2));

// Display subtotal
console.log("Subtotal:", subTotal.toFixed(2));

// Display random discount percentage
console.log("Discount:", discount + "%");

// Display discount amount
console.log("Discount Amount:", discountAmount.toFixed(2));

// Display final bill
console.log("Final Bill:", finalBill.toFixed(2));

// Display highest and lowest product totals
console.log("Highest:", highest.toFixed(2));
console.log("Lowest:", lowest.toFixed(2));