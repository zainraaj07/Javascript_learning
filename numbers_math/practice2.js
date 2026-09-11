// Convert all marks from strings to numbers
let marks = ["78.5", "91.7", "65.4", "88.9", "73.6", "95.2"];

let newMarks = marks.map(marks => parseFloat(marks));

// Calculate total marks
let total = newMarks.reduce((sum, mark) => sum + mark, 0);

// Calculate average marks
let average = total / newMarks.length;

// Find highest and lowest marks
let highest = Math.max(...newMarks);
let lowest = Math.min(...newMarks);

// Round average to nearest whole number
let nearestNum = Math.round(average);

// Generate random number between 5 and 105
let randomNumber = (Math.random() * 100) + 1;

// Display results
console.log("Marks:", newMarks);
console.log("Total:", total);
console.log("Average:", average.toFixed(3));
console.log("Highest:", highest);
console.log("Lowest:", lowest);
console.log("Nearest Number:", nearestNum);
console.log("Random Number:", randomNumber.toFixed(2));