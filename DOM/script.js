
"use strict";

// 1. Select heading and change its text
const title = document.getElementById("title");

console.log(title);

title.textContent = "Hello Zain! I Am Learning DOM JavaScript";


// 2. Select the first paragraph
const paragraph = document.querySelector(".p");

console.log(paragraph);


// 3. Select all paragraphs and print them
const allParagraphs = document.querySelectorAll(".p");

allParagraphs.forEach((paragraph) => {
    console.log(paragraph);
});


// 4. Add HTML content inside the box
const box = document.getElementById("box");

box.innerHTML = `
    <h2>My Skills</h2>
    <p>HTML</p>
    <p>CSS</p>
    <p>JavaScript</p>
`;


// 5. Add a CSS class to the main title
title.classList.add("highlight");

// Remove the class when needed:
// title.classList.remove("highlight");


// 6. Toggle the heading's highlight class on button click
const heading = document.getElementById("heading");
const toggleButton = document.getElementById("toggleBtn");

toggleButton.addEventListener("click", () => {
    heading.classList.toggle("highlight");
});


// 7. Create a new paragraph and append it to the container
const container = document.getElementById("container");

const newParagraph = document.createElement("p");

newParagraph.textContent = "I am a new paragraph";

container.appendChild(newParagraph);


// 8. Enable the disabled button
const submitButton = document.getElementById("submitBtn");

submitButton.removeAttribute("disabled");
