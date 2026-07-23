// ------------------------------------------
// Do While Loop
// ------------------------------------------

let i = 1;

do {
    console.log(i);
    i++;
} while (i <= 5);



// ------------------------------------------
// Break & Continue Loop
// ------------------------------------------

for (let i = 1; i <= 10; i++) {

    if (i === 3) {
        continue;
    }
    if (i === 7) {
        break;
    }
    console.log(i);
}



// ------------------------------------------
// Nested Loop
// ------------------------------------------

for (let i = 1; i <= 3; i++) {
    
    for (let j = 1; j <= 2; j++ ) {
        console.log(i,j);
    }
}


// ------------------------------------------
// Complete Topics Task
// ------------------------------------------

for (let i = 1; i<= 10; i++) {

    if (i === 5) {
        console.log("Five Skipped");
        continue;
    }
    if (i === 9) {
        console.log("Loop Break");
        break;
    }

    if (i % 2 === 0) {
        console.log(i, "Even");
    }
    else {
        console.log(i, "Odd");
    }
}