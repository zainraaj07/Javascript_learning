// ==========================================
// JavaScript String Analyzer
// ==========================================

let message = "     JavaScript is a powerful programming language     ";
let name = "Zain Ijaz";
let course = "BSCS";

// 1. Remove extra spaces
const cleanText = message.trim();

// 2. String length
const length = cleanText.length;

// 3. Uppercase
const upperCase = cleanText.toUpperCase();

// 4. Lowercase
const lowerCase = cleanText.toLowerCase();

// 5. Check if JavaScript exists
const containsJavaScript = cleanText.includes("JavaScript");

// 6. Check if text starts with JavaScript
const startsWithJavaScript = cleanText.startsWith("JavaScript");

// 7. Check if text ends with language
const endsWithLanguage = cleanText.endsWith("language");

// 8. Replace powerful with popular
const updatedText = cleanText.replace("powerful", "popular");

// 9. Extract JavaScript
const javascript = cleanText.slice(0, 10);

// 10. Extract programming language
const programmingLanguage = cleanText.slice(24, 44);

// 11. Convert text into words array
const words = cleanText.split(" ");

// 12. Total words
const totalWords = words.length;


// ==========================================
// Output
// ==========================================

console.log("================================");
console.log("        STRING ANALYZER");
console.log("================================");

console.log("Original Text          :", message);
console.log("Clean Text             :", cleanText);
console.log("Length                 :", length);
console.log("Uppercase              :", upperCase);
console.log("Lowercase              :", lowerCase);
console.log("Contains JavaScript    :", containsJavaScript);
console.log("Starts With JavaScript :", startsWithJavaScript);
console.log("Ends With language     :", endsWithLanguage);
console.log("Updated Text           :", updatedText);
console.log("JavaScript             :", javascript);
console.log("Programming Language   :", programmingLanguage);
console.log("Words                  :", words);
console.log("Total Words            :", totalWords);

console.log("================================");

console.log(`My name is ${name} and I am learning ${course}.`);