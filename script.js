"use strict";

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randNum = Math.floor(Math.random() * 3) + 1;
    if(randNum === 1) {
        return "rock";
    } else if (randNum === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    const input = prompt("Choose Rock, Paper or Scissors: ");
    return input;
}

function playRound(humanChoice, computerChoice) {
    humanChoice.toLowerCase();
    if(humanChoice === computerChoice) {
        console.log("It's a tie! No winner in this round.");
    } else if(humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats scissors.");
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats Rock.");
    } else if(humanChoice ===)
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

// rock rock
// rock paper
// rock scissors
// paper scissors
// paper rock