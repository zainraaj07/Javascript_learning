# JavaScript Learning Journey 🚀

This repository documents my hands-on JavaScript learning journey. It includes practical exercises and code examples created while building a strong foundation in JavaScript and progressing toward advanced concepts and real-world development.

## 📚 Learning Progress

### ✅ Day 1 — Variables

* `let` and `const`
* Variable declaration and initialization
* Naming conventions
* Practical variable-based exercises

### ✅ Day 2 — Data Types, Arrays & Objects

* Primitive data types: String, Number, Boolean, Undefined, and Null
* Type checking with `typeof` and `Array.isArray()`
* Creating and accessing arrays using indexes
* Creating objects and accessing their properties
* Working with arrays inside objects
* Creating and accessing nested objects

### ✅ — Operators
* Arithmetic, Assignment, Comparison, and Logical Operators
* Difference between == and ===
* Conditional logic using operators
* Practical exercises: Even/Odd, Result, Voting, Login, and Discount systems
* Combining Objects with Operators and Conditions

* ### ✅ Day 3 — Type Conversion

Learned and practiced **explicit type conversion** in JavaScript, focusing on converting values between different data types and understanding their behavior during operations.

#### 📌 Topics Covered

* String to Number conversion using `Number()`
* Number to String conversion using `String()`
* Value to Boolean conversion using `Boolean()`
* Integer conversion using `parseInt()`
* Decimal conversion using `parseFloat()`
* Data type verification using the `typeof` operator
* Performing arithmetic operations after converting string values to numbers
* Understanding the difference between `parseInt()` and `parseFloat()`

#### 💻 Practice Implemented

* Converted string values into numbers
* Converted numeric values into strings
* Verified converted data types using `typeof`
* Converted numeric strings before performing addition
* Extracted integer values using `parseInt()`
* Preserved decimal values using `parseFloat()`

* # 🎓Mini Project Student Result Management System

A console-based JavaScript mini project that simulates a student result management system. It calculates marks, percentage, grades, pass/fail status, verifies student documents, and determines scholarship eligibility using core JavaScript concepts.

## ✨ Features

* Student data management using nested objects
* Total marks and percentage calculation
* Pass/Fail evaluation
* Grade assignment
* Document verification
* Scholarship eligibility check

## 🛠️ Concepts Used

* Variables & Data Types
* Objects & Nested Objects
* Arithmetic, Comparison & Logical Operators
* Conditional Statements (`if`, `else if`, `else`)
* Boolean (Truthy/Falsy)
* Strict Mode

* ### ✅ Day 4 — Conditional Statements & Switch

* `if`, `else if`, and `else` for conditional logic
*  `switch`, `case`, `break`, and `default`
* Built a Student Grade & Remarks System
* Implemented percentage-based grade calculation
* Generated performance remarks using `switch`
* Combined objects and conditional logic in a practical exercise

* ## Day 5 — For Loops

Learned how to use JavaScript `for` loops to repeat code, iterate through numbers, and process data stored in arrays and objects. Practiced combining loops with conditional statements and operators to solve logic-based problems and build small programs.

### Key Concepts

* `for` loop syntax, initialization, condition, and update
* Increment and decrement operations
* Iterating through arrays using indexes
* Accessing and processing array elements
* Combining loops with `if/else` conditions
* Working with objects and arrays together
* Performing calculations inside loops
* Building basic logic-based programs and result systems

These exercises helped strengthen the understanding of iteration, conditional logic, data handling, and problem-solving in JavaScript.

### While Loop Practice

Implemented practical exercises using JavaScript `while` loops to strengthen iteration, condition handling, counters, and loop control.

* Reverse counting from 10 to 1
* Calculating the sum of numbers from 1 to 10
* Generating a multiplication table
* Filtering and counting even numbers within a given range

* # Day 6 — JavaScript Conditions & Loops

A practical collection of JavaScript exercises focused on decision-making and iteration. This section demonstrates how conditions and loops control program flow and handle repetitive tasks efficiently.

## Topics Covered

### Conditions

* `if`, `else if`, and `else`
* `switch` statements
* Ternary operator

### Loops

* `for` loop
* `while` loop
* `do...while` loop
* `break` and `continue`
* Nested loops

## Key Concepts Practiced

* Making decisions using conditional statements
* Repeating tasks efficiently with different loop structures
* Controlling loop execution using `break` and `continue`
* Combining conditions with loops
* Working with nested iterations

# Day - 7 JavaScript Functions 🚀

This directory contains my practical implementation of **JavaScript Functions**, demonstrating how reusable code can simplify problem-solving and improve code organization.

## 📚 Topics Covered

* **Function Declaration** – Defines a reusable function using the `function` keyword.
* **Function Expression** – Stores a function inside a variable for flexible usage.
* **Parameters** – Receive input values when a function is defined.
* **Arguments** – Actual values passed to a function when it is called.
* **Conditional Statements (`if...else`)** – Execute different blocks of code based on conditions.
* **Arithmetic Operators** – Perform mathematical calculations such as addition and multiplication.
* **Comparison Operators** – Compare values and return `true` or `false`.
* **Code Reusability** – Write logic once and reuse it whenever needed.

## 💻 Practice Programs

* Greeting User
* Rectangle Area Calculator
* Largest Number Finder
* Password Strength Checker
* Voting Eligibility Checker
* Basic Calculator

* # JavaScript Arrow Functions 🚀

This directory contains my practical implementation of **Arrow Functions (ES6)**, focusing on writing concise, modern, and reusable JavaScript code. Through real-world coding exercises, I explored how arrow functions simplify function syntax while strengthening problem-solving and logical thinking.

## 📚 What I Learned

* **Arrow Functions** – A shorter and cleaner syntax for writing JavaScript functions introduced in ES6.
* **Parameters & Arguments** – Passing and processing data within functions.
* **Conditional Statements** – Implementing decision-making using `if`, `else if`, and nested `if`.
* **Arithmetic & Comparison Operators** – Performing calculations and evaluating conditions.
* **Logical Operators** – Combining multiple conditions using `&&` and boolean values.
* **Code Reusability** – Organizing logic into reusable functions for better maintainability.

## 💻 Practice Tasks

* 🎓 Student Result Calculator
* 🔐 User Login Validation System
* ⚡ Electricity Bill Calculator with Slab Rates & Surcharge

## 🎯 Skills Strengthened

* Arrow Function Syntax
* Problem Solving
* Decision Making
* Nested Conditions
* Real-World Logic Building
* Clean & Readable JavaScript Code

# Day - 8 JavaScript Functions 🚀

Practice focused on **JavaScript Functions**, with an emphasis on **parameters, arguments, function declarations, and ES6 arrow functions**.

## 📚 What I Practiced

* **Function Declarations** — created and invoked functions using the `function` keyword.
* **Parameters & Arguments** — understood how functions receive and work with dynamic values.
* **Arrow Functions** — practiced the modern ES6 syntax for writing concise functions.
* **Multiple Parameters** — used multiple inputs to perform calculations and return results.
* **Return Values** — learned how functions can process data and return reusable results.

## 💻 Practical Implementation

Created a simple `greet()` function to understand the relationship between parameters and arguments. Then, implemented an arrow function to calculate the total price using `price` and `quantity`.

```js
const totalPrice = (price, quantity) => {
    return price * quantity;
};

console.log(totalPrice(400, 7));
// Output: 2800
```
# JavaScript Functions — Return Statement 🚀

Practice focused on the **`return` statement** and its role in making JavaScript functions reusable and capable of producing values for further operations.

## 📚 Concept

The **`return` statement** terminates a function and sends a value back to the code that called the function. Unlike `console.log()`, which only displays a value, `return` allows the result to be **stored, reused, modified, or passed into another operation**.

### 🔹 Return Value

A function can process the received inputs and return the resulting value. This makes the function **reusable and independent of direct output**.

## 🛠️ Practice Covered

* **Shopping Bill:** Calculated the total price using price and quantity, then reused the returned value in another calculation.
* **Employee Salary:** Calculated the final salary by combining basic salary and bonus.
* Practiced passing multiple arguments and receiving multiple parameters.
* Used arrow functions with returned values.
* Compared the purpose of `return` with `console.log()`.

## 🎯 Key Takeaway

`console.log()` **displays** a value, while `return` **provides a value back to the program** for further use.

Understanding return values is essential for writing **modular, reusable, and maintainable JavaScript code** and provides a foundation for concepts such as **callbacks, array methods, higher-order functions, and React.js**.

* ### ✅ Day 9 — Default & Rest Parameters

A practical collection of JavaScript exercises focused on building reusable functions and understanding modern function concepts through real-world examples.

## Topics Covered

* Arrow Functions
* Function Parameters & Arguments
* Default Parameters
* Return Statements
* Rest Parameters
* Array `reduce()` Method
* Conditional Logic
* Object Return Values

## Exercises

### 1. Student Result Calculator

A reusable function that processes student marks and generates a complete result summary.

**Features:**

* Calculates total obtained marks
* Calculates percentage
* Determines Pass/Fail status
* Uses a default value for total marks
* Returns results as an object

**Concepts:** Arrow Functions, Default Parameters, `reduce()`, Conditional Statements, Return Objects

---

### 2. Shopping Bill Calculator

A billing function that calculates the total cost based on price, quantity, and discount.

**Features:**

* Calculates subtotal
* Applies percentage-based discount
* Calculates final bill
* Assigns Basic, Regular, or Premium categories

**Concepts:** Default Parameters, Arithmetic Operations, Conditional Logic, Return Objects

---

### 3. Rest Parameter

A function demonstrating how the Rest Parameter can handle a dynamic number of arguments.

```javascript
const calculateTotal = (...numbers) => {
    let total = 0;

    for (let number of numbers) {
        total += number;
    }

    return total;
};
```

The `...numbers` syntax collects all arguments into an array, allowing the function to work with different numbers of values.












