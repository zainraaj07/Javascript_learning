
// ------------------------------------------
// Student Grade & Remarks System
// ------------------------------------------


const student = {
   name : "Zain",
   age : 20,
   percentage : 80
};

let grade;

if (student.percentage >= 80) {
    grade = "A+";
} else if (student.percentage >= 70) {
    grade = "B";
} else if (student.percentage >= 60) {
    grade = "C";
} else if (student.percentage >= 50) {
    grade = "D";
} else {
    grade = "F";
}


let remarks;

switch (grade) {
    case "A+":
        remarks = "Excellent Performance";
        break;

    case "B":
        remarks = "Very Good";
        break;

    case "C":
        remarks = "Good";
        break;

    case "D":
        remarks = "Need Improvement";
        break;

    case "F":
        remarks = "Failed";
        break;

    default:
        remarks = "Invalid Grade";
}

console.log("Student: ",student.name);
console.log("Percentage: ", student.percentage);
console.log("Grade: ", grade);
console.log("Remarks:", remarks);