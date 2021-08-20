// .includes()

const books = ["Alf", "Life of Pi", "Power of Now"];

console.log(books.includes("Alf")); // prints true

// .contains()

const body = document.querySelector("body");
const circle = document.querySelector(".circle");

console.log(body.contains(circle)); // prints true

// doesn't work to use includes and contains interchangeably
