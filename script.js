console.log("Hello World");

// alert("Hurray!");

// const likesPizza = confirm("Do you like pizza?");
// console.log(likesPizza);

// const userChoice = prompt("Please choose R, P, or S.");
// console.log(userChoice);

// console.log(Math.random());

// Choices
const userChoice = prompt("Please choose R, P, or S.");
console.log(userChoice);

const choices = ['R','P','S'];

const randomChoice = Math.floor(Math.random() * choices.length)

const computerChoice = choices[randomChoice];
console.log(computerChoice);

// Algorithm
if (userChoice === computerChoice) {
  console.log ("Tie");
} else if (userChoice === 'R' && computerChoice === 'S' ||
  userChoice === 'P' && computerChoice === 'R' ||
  userChoice === 'S' && computerChoice === 'P') {
    console.log("Win!");
} else {
  console.log("You Lose :(");
}