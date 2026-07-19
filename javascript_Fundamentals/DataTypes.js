                                       //PERSONAL INFORMATION


// Personal Details
const name = 'zain';                   //String
const age  = 20;                       //Number
const city = 'lahore';
const email = 'zraaaj09@gmail.com';
const isMale = true;                   //Boolean

//special Data Types
const phoneNumber = null;              
let company;                           //Undefined


console.log("\n --- Personal Information --- ");

console.log("Name:", name);
console.log("Age:", age);
console.log("City:", city);
console.log("Email:", email);
console.log("Male:", isMale);

//Data Types
console.log("\n --- Data Types--- ");

console.log("Name:", typeof name);
console.log("Age:", typeof age);
console.log("IsMale:", typeof isMale);
console.log("Phone Number:" ,typeof phoneNumber);
console.log("Company:", typeof company);


                                //  ---- Student Profile ---- //
//Object
const student = {
    name : "zain",
    age  : 20,
    city : "Lahore",
    skills: ["Wordpress", "MongoDB", "Node.js"],   //Array in object
    isStudent : true 
};

const skills = ["HTML&CSS", "JavaScript", "React.js", "MySql"];  //Array

console.log("\n ---- Personal Information ---- ");
console.log(student);
console.log("Name:", student.name);
console.log("City:", student.city);
console.log("My Skills:", skills);
console.log(skills[0],skills[2]);        //Display Skills With Indexes
console.log(typeof student);
console.log(typeof skills);
console.log(Array.isArray(skills));
console.log(student.skills);
console.log(student.skills[0], student.skills[2]);         


                               // ---- Product Information ---- // 
//Object
const product = {
    productName : "iPhone",
    price : 70000,
    inStock : true,
    categories : ["Electronics", "Phones", "Watches"],
//Nested Object 
    details: {
        brand : "Apple",
        warranty: "7 Days"
    }
};

console.log("\n ---- Product Details ---- ");

console.log(product);                                           
console.log("Product Name:", product.productName);
console.log("Product Category:", product.categories[1]);
console.log("Brand:", product.details.brand);
console.log("Warranty:", product.details.warranty);
console.log(Array.isArray(product.categories));