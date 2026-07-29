// ==========================================
// 1 - Rectangle Area
// ==========================================


let calculateArea = function (length, width) {
    console.log("Area:", length * width);
};

calculateArea(3,6);
console.log("");



// ==========================================
//2 - Largest Number
// ==========================================

const findLargest = function (a, b) {
    if(a > b){
        console.log(a, "is greater");
    }
    else {
        console.log(b, "is greater");
    }
};

findLargest(3,1);
console.log("");



// ==========================================
// 3 - Greeting User
// ==========================================

const greetUser = function (name) {
  console.log("Hello, " +  name + " Welcome Back");
}

greetUser("zain!");
console.log("");



// ==========================================
// 4 - Password Strength Checker
// ==========================================

const checkPassword = function (password) {
    if(password.length >= 8) {
        console.log("Strong Password");
    }
    else {
        console.log("Weak Password");
    }
}

checkPassword("hizain801");