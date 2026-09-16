console.log("================================");
console.log("       DIGITAL DASHBOARD");
console.log("================================");

let date = new Date();
let laterDate = new Date();
let beforeDate = new Date();

let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
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

console.log("Today is", days[date.getDay()]);

console.log(
    "Date:",
    date.getDate() + "/" +
    (date.getMonth() + 1) + "/" +
    date.getFullYear()
);

console.log(
    "Current Time:",
    hour + ":" +
    date.getMinutes() + ":" +
    date.getSeconds() + " " +
    period
);

console.log("\n--------------------------------");

laterDate.setDate(date.getDate() + 5);

console.log(
    "5 Days Later:",
    laterDate.getDate() + "/" +
    (laterDate.getMonth() + 1) + "/" +
    laterDate.getFullYear()
);

beforeDate.setDate(date.getDate() - 5);

console.log(
    "5 Days Before:",
    beforeDate.getDate() + "/" +
    (beforeDate.getMonth() + 1) + "/" +
    beforeDate.getFullYear()
);

console.log("--------------------------------");

let count = 0;

let timer = setInterval(() => {
    count++;
    console.log("Counter:", count);

    if (count === 5) {
        clearInterval(timer);
        console.log("Counter Finished!");
        console.log("================================");
    }
}, 1000);