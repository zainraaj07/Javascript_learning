// ================================
// Product Price Calculator
// ================================

const product = {
    name: "Iphone 13",
    price: 80000,
    tax: 4000,
    discount: 10
};

// Calculate price after tax
function calculateTax(price, tax) {
    return price + tax;
}

// Calculate price after discount
function calculateDiscount(price, discount) {
    const discountAmount = price * discount / 100;
    return price - discountAmount;
}

// Calculate final product price
function getFinalPrice(product) {
    const priceWithTax = calculateTax(
        product.price,
        product.tax
    );

    const finalPrice = calculateDiscount(
        priceWithTax,
        product.discount
    );

    return finalPrice;
}

// Higher-Order Function / Callback
function processProduct(product, callback) {
    return callback(product);
}

const finalProductPrice = processProduct(
    product,
    getFinalPrice
);

console.log("Product:", product.name);
console.log("Final Price:", finalProductPrice);


// ================================
// 🛍️ Shopping Cart Calculator
// ================================

const cart = {
    product1: 7000,
    product2: 4000,
    product3: 2000,
    tax: 1000,
    discount: 10
};

// Calculate total of all products
function calculateTotal(price1, price2, price3) {
    return price1 + price2 + price3;
}

// Add tax to total
function calculateCartTax(total, tax) {
    return total + tax;
}

// Apply discount to total
function calculateCartDiscount(total, discount) {
    const discountAmount = total * discount / 100;
    return total - discountAmount;
}

// Calculate final shopping cart bill
function getFinalBill(cart) {

    const productTotal = calculateTotal(
        cart.product1,
        cart.product2,
        cart.product3
    );

    const totalWithTax = calculateCartTax(
        productTotal,
        cart.tax
    );

    const finalBill = calculateCartDiscount(
        totalWithTax,
        cart.discount
    );

    return finalBill;
}

// Higher-Order Function / Callback
function processCart(cart, callback) {
    return callback(cart);
}

const finalCartBill = processCart(
    cart,
    getFinalBill
);

console.log("Cart Total:", finalCartBill);