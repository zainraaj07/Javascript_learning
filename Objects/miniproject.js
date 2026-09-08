// ==========================================
// Student Management System
// ==========================================

let student = {
    name: "Zain Ijaz",
    age: 20,
    email: "zainraaj791@gmail.com",
    course: "BSCS",
    semastor: 5,

    address: {
        city: "Lahore",
        country: "Pakistan"
    },

    skills: [
        "HTML",
        "CSS",
        "JAVASCRIPT",
        "REACT.js",
        "PHP",
        "MYSQL",
        "WORDPRESS"
    ]
};


// ==========================================
// Bracket Notation
// ==========================================

let email = "email";
let age = "age";

console.log("\n========== BRACKET NOTATION ==========");
console.log("Email     :", student[email]);
console.log("Age       :", student[age]);


// ==========================================
// Update Properties
// ==========================================

let updateSemastor = "semastor";
let updateCity = "city";

student[updateSemastor] = 6;
student.address[updateCity] = "Karachi";


// ==========================================
// Add New Property
// ==========================================

student.phone = "03104896942";


// ==========================================
// Destructuring
// ==========================================

let {
    name: userName,
    email: userEmail,
    course: userCourse,
    semastor: userSemastor
} = student;

console.log("\n========== DESTRUCTURING ==========");
console.log("Name      :", userName);
console.log("Email     :", userEmail);
console.log("Course    :", userCourse);
console.log("Semester  :", userSemastor);


// ==========================================
// Student Information
// ==========================================

console.log("\n========== STUDENT INFORMATION ==========");
console.log("Name      :", student.name);
console.log("Age       :", student.age);
console.log("Course    :", student.course);
console.log("Semester  :", student.semastor);
console.log("Phone     :", student.phone);


// ==========================================
// Address
// ==========================================

console.log("\n========== ADDRESS ==========");
console.log("City      :", student.address.city);
console.log("Country   :", student.address.country);


// ==========================================
// Skills
// ==========================================

console.log("\n========== SKILLS ==========");
console.log(student.skills.join(" | "));


// ==========================================
// Object.keys()
// ==========================================

console.log("\n========== OBJECT KEYS ==========");
console.log(Object.keys(student));

console.log("Total Properties:", Object.keys(student).length);


// ==========================================
// Object Copy using Spread Operator
// ==========================================

let studentCopy = {
    ...student
};

studentCopy.course = "BBA";
studentCopy.semastor = 3;


// ==========================================
// Original vs Copy
// ==========================================

console.log("\n========== ORIGINAL STUDENT ==========");
console.log(student);

console.log("\n========== STUDENT COPY ==========");
console.log(studentCopy);


// ==========================================
// Final Profile
// ==========================================

console.log("\n==========================================");
console.log("           STUDENT PROFILE");
console.log("==========================================");

console.log("Name       :", student.name);
console.log("Age        :", student.age);
console.log("Email      :", student.email);
console.log("Course     :", student.course);
console.log("Semester   :", student.semastor);
console.log("City       :", student.address.city);
console.log("Country    :", student.address.country);
console.log("Phone      :", student.phone);
console.log("Skills     :", student.skills.join(", "));

console.log("==========================================");

