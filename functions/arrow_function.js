// ==========================================
// 1 — Student Result Calculator
// ==========================================

const calculateResult = (mark1, mark2, mark3, mark4, mark5) => {

   let obtainedMarks = mark1 + mark2 + mark3 + mark4 + mark5;
   let totalMarks = 500;
   let percentage = (obtainedMarks/ totalMarks) * 100;

   let grade;

   if (percentage >= 80) {
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
   else {
    grade = "F";
   }

   console.log("========== Student Result ==========");
   console.log("Total Marks: ", totalMarks);
   console.log("Obtained Marks: ", obtainedMarks);
   console.log("Percentage: ",percentage);
   console.log("Grade: ", grade);
    console.log("");
};

calculateResult(80,87,57,39,90);



// ==========================================
// 2 — User Login Validation
// ==========================================

const greetUser = (userName, password, isActive) => {

    if (userName === "Admin" &&
        password.length >= 8 &&
        isActive
    ) {
        console.log("Login Successful")
    } 
    else {
        console.log("Invalid User");
    }
} 

greetUser("Admin", "admin123123", true);



// ==========================================
// 3 — Electricity Bill Calculator
// =========================================

const calculateBill = (customerName, unitConsumed) => {

    let bill = 0;
    let surCharge = 0;
    let finalBill = 0;

    if (unitConsumed <= 100) {

        bill = unitConsumed * 10;
    }
    else if (unitConsumed <= 200) {

         bill = (100 * 10) + ((unitConsumed - 100) * 15);
       
     }
    else {   

          bill = (100 * 10) + 
          (100 * 15) + 
          ((unitConsumed - 200) * 20);
        
    }

    if (bill > 5000) {

        surCharge = bill * 0.10;
        finalBill = bill + surCharge;
    }
    else {

        finalBill = bill;
    }

    console.log("========== Electricity Bill ==========");
    console.log("Customer Name:", customerName);
    console.log("Unit Consumed:", unitConsumed);
    console.log("Original Bill: Rs.", bill);
    console.log("SurCharges: Rs.", surCharge);
    console.log("Final Bill: Rs.", finalBill);
    
}


calculateBill("Zain", 350);