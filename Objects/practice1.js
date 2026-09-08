// ==========================================
// 1. Object Basics & Methods
// ==========================================

let student = {
    name: "zain",
    age: 20,
    course: "BSCS",
    university: "Superior University",

    showName() {
        console.log(`Hello ${this.name}`);
    },

    showAge() {
        console.log(`Age : ${this.age}`);
    },

    showUniversity() {
        console.log(`Study in : ${this.university}`);
    }
};


// ==========================================
// Dot & Bracket Notation
// ==========================================

let property = "course";

console.log("\n========== OBJECT METHODS ==========");
student.showName();
student.showAge();
student.showUniversity();

console.log("\n========== BRACKET NOTATION ==========");
console.log(`Course : ${student[property]}`);


// ==========================================
// 2. Object Destructuring
// ==========================================

let product = {
    name: "iPhone",
    price: 250000,
    category: "Mobile",
    stock: 10
};

let {
    name,
    price,
    category,
    stock
} = product;

console.log("\n========== DESTRUCTURING ==========");
console.log(`Name     : ${name}`);
console.log(`Price    : ${price}`);
console.log(`Category : ${category}`);
console.log(`Stock    : ${stock}`);


// ==========================================
// 3. Object.keys()
//    Object.values()
//    Object.entries()
// ==========================================

let laptop = {
    brand: "Dell",
    model: "XPS",
    price: 200000,
    stock: 7
};

console.log("\n========== OBJECT METHODS ==========");

console.log("Keys:");
console.log(Object.keys(laptop));

console.log("\nValues:");
console.log(Object.values(laptop));

console.log("\nEntries:");
console.log(Object.entries(laptop));

console.log("\nTotal Properties:", Object.keys(laptop).length);


// ==========================================
// 4. Spread Operator
// ==========================================

let basicInfo = {
    name: "Zain",
    age: 21
};

let professionalInfo = {
    role: "Full Stack Developer",
    experience: "1 Year"
};

let userInfo = {
    ...basicInfo,
    ...professionalInfo
};


// ==========================================
// 5. Object.assign()
// ==========================================

let userDetails = Object.assign(
    {},
    basicInfo,
    professionalInfo
);


// ==========================================
// Spread vs Object.assign()
// ==========================================

console.log("\n========== SPREAD OPERATOR ==========");
console.log(userInfo);

console.log("\n========== OBJECT.ASSIGN() ==========");
console.log(userDetails);


// ==========================================
// 6. Nested Objects
// ==========================================

let newStudent = {
    name: "Ali",

    education: {
        degree: "BSCS",
        university: "Superior University",
        semester: 5
    }
};

console.log("\n========== NESTED OBJECT ==========");
console.log(`Degree     : ${newStudent.education.degree}`);
console.log(`University : ${newStudent.education.university}`);
console.log(`Semester   : ${newStudent.education.semester}`);


// ==========================================
// END
// ==========================================

console.log("\n==========================================");
console.log("       OBJECTS PRACTICE COMPLETED");
console.log("==========================================");
