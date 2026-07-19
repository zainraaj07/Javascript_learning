const name = 'zain'
let age = 20
let city = 'lahore'
const country = 'pakistan'

console.log('name :', name)
console.log('age :', age)
console.log('city :', city)
console.log('country', country) //personal information
  


 //Reassign value
let score = 40;
// console.log(score)
score = 30;
console.log('Score is : ', score)


// //code error
// const accountId = 123;
// accountId = 456; // in const value never changed

// console.log(accountId);



//let vs var scope
if(true) {
    let number1 = 30;
    var number2 = 40;

    console.log(number1)  //let defined inside the scope 
}
// console.log(number1)
console.log(number2)




//shopping bill
let productPrice = 1300
let amount = 3

 let totalPrice = productPrice * amount
console.log('Total Price : ', totalPrice)



//student Result with Object Method
 let totalResult = {
    StudentName : 'zain',
    Math : 90,
    English : 80,
    Physics : 80,

    
}
//total marks 
const totalMarks = totalResult.Math +
                 totalResult.English +
                 totalResult.Physics;

//print 
console.log('Student Name :', totalResult.StudentName)
console.log('Math :', totalResult.Math)
console.log('English :', totalResult.English)
console.log('Physics :', totalResult.Physics)
console.log('Total Marks :', totalMarks);



//swapping values
let a = 10;
let b = 30;

let temp = a;
a = b;
b = temp;
console.log('a :', a);
console.log('b :', b);