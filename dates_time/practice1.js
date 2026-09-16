let date = new Date();

let days = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday"
];

let hour = date.getHours();
let period;

if (hour >= 12) {
    period = "PM";
} else {
    period = "AM";
}

if (hour === 0) {
    hour = 12;
} else if (hour > 12) {
    hour = hour - 12;
}

console.log(
    "Today is",
    days[date.getDay()] + ",",
    date.getDate() + "/" +
    (date.getMonth() + 1) + "/" +
    date.getFullYear()
);

console.log(
    "Time:",
    hour + ":" +
    date.getMinutes() + ":" +
    date.getSeconds() + " " +
    period
);

date.setDate(date.getDate() - 5);

console.log(
    "Before 5 days:",
    date.getDate() + "/" +
    (date.getMonth() + 1) + "/" +
    date.getFullYear()
);

// Runs only once after 2 seconds
setTimeout(() => {
    console.log("Hello Zain");
}, 2000);

console.log("Start");

// Runs repeatedly every 3 seconds
setTimeout(() => { 
    console.log("Hello");
}, 3000);

console.log("End");

let count = 0;

let timer = setInterval(() => {
    count ++;
    console.log(count);

    if (count === 10) {
        clearInterval(timer);
    }
},1000)