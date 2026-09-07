// ==========================================
// JavaScript Arrays — Ecommerce Mini Project
// ==========================================


// Products Array
let products = [
    { name: "Laptop", price: 120000, category: "Electronics", stock: 5 },
    { name: "Mouse", price: 2500, category: "Electronics", stock: 20 },
    { name: "Keyboard", price: 5000, category: "Electronics", stock: 0 },
    { name: "Chair", price: 15000, category: "Furniture", stock: 8 },
    { name: "Desk", price: 25000, category: "Furniture", stock: 3 }
];


// 1. Increase every product price by 10%
const updatedPrice = products.map(product => {
    return product.price * 1.10;
});

console.log("1. Updated Prices:", updatedPrice);


// 2. Find products with price greater than 10,000
let result = products.filter(product => {
    return product.price > 10000;
});

console.log("2. Products Above 10,000:", result);


// 3. Find the Mouse product
let mouseProduct = products.find(product => {
    return product.name === "Mouse";
});

console.log("3. Mouse Product:", mouseProduct);


// 4. Find the index of Chair
let charindex = products.findIndex(product => {
    return product.name === "Chair";
});

console.log("4. Chair Index:", charindex);


// 5. Check if any product is out of stock
let stock = products.some(product => {
    return product.stock === 0;
});

console.log("5. Any Product Out of Stock:", stock);


// 6. Check if all products are in stock
let checkStock = products.every(product => {
    return product.stock >= 1;
});

console.log("6. All Products In Stock:", checkStock);


// 7. Calculate total price of all products
const totalPrice = products.reduce((sum, product) => {
    return sum + product.price;
}, 0);

console.log("7. Total Product Price:", totalPrice);


// 8. Sort products from lowest to highest price
// [...products] creates a copy so original array is not modified
const ascendingPrice = [...products].sort((a, b) => {
    return a.price - b.price;
});

console.log("8. Price: Low → High");
console.table(ascendingPrice);


// 9. Sort products from highest to lowest price
const decendingPrice = [...products].sort((a, b) => {
    return b.price - a.price;
});

console.log("9. Price: High → Low");
console.table(decendingPrice);


// 10. Get all product names
let productArray = products.map(product => {
    return product.name;
});


// 11. Convert product names array into a single string
let productName = productArray.join(", ");

console.log("10. Product Names:", productName);