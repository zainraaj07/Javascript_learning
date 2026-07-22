                                     // ----- LOOPS ----- //

// ------------------------------------------
// Counting Using For Loop
// ------------------------------------------

for (let i = 1; i <= 10; i++) {
    console.log(i);
}


// ------------------------------------------
// Even Number Using For Loop
// ------------------------------------------

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}



// ------------------------------------------
// Table Using For Loop
// ------------------------------------------

let number = 7;

for (let i = 1; i <= 10; i++) {
    console.log(number + "x" + i + "=" + number * i);
}


// ------------------------------------------
// Positive / Negative / Zero
// ------------------------------------------

const numbers = [10, 20, -8, 70, 0, -31];

for (let i = 0; i < numbers.length; i++) {

    let currentnumber = numbers[i];

    if (currentnumber > 0) {
        console.log(currentnumber + "is positive");
    }
    else if (currentnumber < 0) {
        console.log(currentnumber + "is negative");
    } else {
        console.log(currentnumber + "is zero");
    }
    
}



// ------------------------------------------
// Sum Of Numbers
// ------------------------------------------

let sum = 0;

for (let i = 1; i <= 10; i++) {
   sum = sum + i;
}
 
console.log("Total Sum: ", sum);



// ------------------------------------------
// Print Array Students
// ------------------------------------------

const students = ["Zain", "Ali", "Ahmed", "Hamza", "Usman"];

for ( let i = 0 ; i < students.length; i++) {
    console.log("Student " + (i + 1) + ": " + students[i]);
}



// ------------------------------------------
// Pass / Fail System
// ------------------------------------------

const marks = [85, 35, 67, 20, 90, 40];

for (let i = 0; i < marks.length; i++) {
   let currentMarks = marks[i];
    if (currentMarks >= 40) {
        console.log(currentMarks + "Pass");
    }
    else {
        console.log(currentMarks + "Fail");
    }
}


// ------------------------------------------
// Student Result & Grade System
// ------------------------------------------

const student = {
    name: "Zain",
    marks: [80, 75, 90, 65, 85]
};

let total = 0;
for (let i = 0; i < student.marks.length; i++) {
    // let currentmarks = student.marks[i];
   total = total + student.marks[i];
}

let totalPossibleMarks = student.marks.length * 100;

const percentage = total / totalPossibleMarks * 100;

let grade;

if (percentage > 80) {
    grade = "A+";
} 
else if (percentage > 70) {
    grade = "A";
} 
else if (percentage > 60) {
    grade = "B";
}
else if (percentage > 50) {
    grade = "C";
}
else if (percentage > 40) {
    grade = "D";
}
else {
    grade = "F";
}

console.log("Name: ", student.name);
console.log("Total Marks: ", totalPossibleMarks);
console.log("Obtained Marks: ", total);
console.log("Percentage: ", percentage);
console.log("Grade: ", grade);
 

for (let i = 1; i <= 30; i++) {
   if (i % 3 === 0) {
    console.log("Fizz");
   }
   else if (i % 5 === 0) {
    console.log("Buzz");
   }
   else if ( i % 5 && i % 5 === 0) {
    console.log("Fizzbuzz");
   }
   else {
    console.log(i);
   }
}



// ------------------------------------------
// Mini Student Result System
// ------------------------------------------

const Students = [
    { name: "Zain", marks: 85 },
    { name: "Ali", marks: 35 },
    { name: "Ahmed", marks: 72 },
    { name: "Hamza", marks: 45 },
    { name: "Usman", marks: 90 }
];

for (let i = 0; i < Students.length; i++) {
    let currentStudent = Students[i];

let result;
let grades;

if (currentStudent.marks > 40) {
    result = "Pass";
}
else {
    result = "Fail";
}

if (currentStudent.marks > 80 ) {
    grades = "A+";
}
else if (currentStudent.marks > 70) {
    grades = "A";
}
else if (currentStudent.marks > 60) {
    grades = "B";
}
else if (currentStudent.marks > 50) {
    grades = "C";
}
else if (currentStudent.marks > 40) {
    grades = "D";
}
else {
    grades = "F";
}

console.log("Name: ",currentStudent.name);
console.log("Marks: ",currentStudent.marks);
console.log("Result: ", result);
console.log("Grade: ",grades);
console.log("----------------");

}
