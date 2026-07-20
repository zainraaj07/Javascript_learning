"use strict";

// ==========================================
// 1. STUDENT DATA
// ==========================================

const student = {
   name : "zain",
   rollNo : "su92-bscsm-s24-152",
   age : 20,
   hasCnic : true,
   hasDocument: true,

   subjectMarks: {
    Math : 70,
    English : 84,
    Computer : 81,
    Physics : 68,
    Urdu : 81
   }
};

// ==========================================
// 3. RESULT CALCULATION
// ==========================================

const totalMarks = 500;

const obtainedMarks = student.subjectMarks.Math +
                      student.subjectMarks.English +
                      student.subjectMarks.Computer +
                      student.subjectMarks.Physics +
                      student.subjectMarks.Urdu

const percentage = obtainedMarks / totalMarks * 100;

// ==========================================
// 4. PASS / FAIL
// ==========================================

let isPass;
let result;

 if(percentage >= 40 &&
           student.subjectMarks.Math >= 33 &&
           student.subjectMarks.English >= 33 &&
           student.subjectMarks.Computer >= 33 &&
           student.subjectMarks.Physics >= 33 &&
           student.subjectMarks.Urdu >= 33
) {
    result = "Pass";
    isPass = true;
} else { 
    result = "Fail";
    isPass = false;
}

// ==========================================
// 5. GRADE
// ==========================================

let grade;
 if (percentage >= 80) {
    grade = "A+";
} else if (percentage >= 70 && percentage < 80) {
    grade = "A";
} else if (percentage >= 60 && percentage < 70) {
    grade = "B";
} else if (percentage >= 50 && percentage < 60) {
    grade = "C";
} else if (percentage >= 40 && percentage < 50) {
    grade = "D";
} else {
    grade = "F";
}

// ==========================================
// 6. DOCUMENT VERIFICATION
// ==========================================

let document;
if( student.hasDocument) {
   document = "Verified";
} else {
   document = "Not Verified";
}

// ==========================================
// 7. SCHOLARSHIP ELIGIBILITY
// ==========================================

let status;
if (percentage >= 80 &&
    student.subjectMarks.Computer > 80 &&
    isPass) {
    status = "Eligible";
} else {
    status = "Not Eligible";
}

// ==========================================
// 8. FINAL OUTPUT
// ==========================================

console.log("\n ---- STUDENT RESULT SYSTEM ----")
console.log("Student Name :", student.name);
console.log("Roll Number :", student.rollNo);

console.log("\n ----- MARKS -----")
console.log("Math: ", student.subjectMarks.Math);
console.log("English: ", student.subjectMarks.English);
console.log("Computer: ", student.subjectMarks.Computer);
console.log("Physics: ", student.subjectMarks.Physics);
console.log("Urdu: ",student.subjectMarks.Urdu);

console.log("\n ----- RESULT -----")
console.log("Total Marks :", totalMarks);
console.log("Obtained Marks :", obtainedMarks);
console.log("Percentage :", parseInt(percentage)+ "%");
console.log("Result: ", result);
console.log("Grade: ", grade);

console.log("\n ----- OTHER DETAILS -----");
console.log("Document Status: ", document);
console.log("Scholarship Status: ", status);


