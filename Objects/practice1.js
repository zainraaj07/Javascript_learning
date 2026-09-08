
let student = {
    name : "zain",
    age : 20,
    course : "BSCS",
    university : "Superior University",

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

let property = "course";


student.showName();
student.showAge();
student.showUniversity();
console.log(student[property]);


let product = {
    name: "iPhone",
    price: 250000,
    category: "Mobile",
    stock: 10
};

let {name, price, category, stock} = product;

console.log(name);
console.log(price);
console.log(category);
console.log(stock);

let laptop = {
    brand: "Dell",
    model: "XPS",
    price: 200000,
    stock: 7
};

console.log(Object.keys(laptop));
console.log(Object.values(laptop));
console.log(Object.entries(laptop));
console.log(Object.keys(laptop).length);


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
}

let userDetails = Object.assign({},basicInfo,professionalInfo);


console.log(userInfo);
console.log(userDetails);

let newStudent = {
    name: "Ali",

    education: {
        degree: "BSCS",
        university: "Superior University",
        semester: 5
    }
};

console.log(newStudent.education.degree);
console.log(newStudent.education.semester);