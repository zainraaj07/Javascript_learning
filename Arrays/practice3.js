// ==========================================
// JavaScript Arrays — Store ManagementS
// Topics: slice(), splice(), map(), filter(), reduce(), forEach()
// ==========================================


const products = [
    { name: "Laptop", price: 80000, category: "Electronics", stock: 5 },
    { name: "Mouse", price: 2500, category: "Accessories", stock: 10 },
    { name: "Keyboard", price: 5000, category: "Accessories", stock: 7 },
    { name: "Monitor", price: 30000, category: "Electronics", stock: 4 },
    { name: "Headphones", price: 8000, category: "Accessories", stock: 8 },
    { name: "Webcam", price: 6000, category: "Electronics", stock: 3 }
];

console.log("========== STORE REPORT ==========");


// Home Page Product
console.log("Home Page Product:");
const homePage= products.slice(0, 3);

console.log(homePage);


// Available Product
console.log("Available Product:");
products.splice(5, 5);

console.log(products);


// Adding New Product
console.log("Adding New Product:");

products.splice(4, 0, {
    name: "Gaming Chair",
    price: 15000,
    category: "Furniture",
    stock: 6
});

console.log(products);


// Discounted Price
console.log("Discounted Price:");

const discountedPrice = products.map(function(product) {

    const discount = product.price * 10 / 100;
    const finalPrice = product.price - discount;

    return {
        name: product.name,
        price: finalPrice
    };
});

console.log(discountedPrice);


// Accessories Product
console.log("Accessories Product:");

const AccessoriesProduct = products.filter(function(product) {
    return product.category === "Accessories";
});

console.log(AccessoriesProduct);


// Total Store Prices
console.log("Total Store Prices:");

const totalPrice = products.reduce(function(sum, product) {
    return sum + product.price;
}, 0);

console.log(totalPrice);


// All Products
console.log("========== ALL NEW PRODUCTS ==========");

const allProduct = products.forEach(function(product) {
    console.log(product);
});