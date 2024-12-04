"use strict";

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
    if(input.toLowerCase() === "rock" || input.toLowerCase() === "paper" || input.toLowerCase() === "scissors") {
        return input;
    } else {
        alert("You can choose only Rock Paper or Scissors!");
        return getHumanChoice();
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();

    function nextRound() {
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
     }
    

    function playRound(humanChoice, computerChoice) {
        humanChoice.toLowerCase();
        if(humanChoice === computerChoice) {
            console.log("It's a tie! No winner in this round.");
        } else if(humanChoice === "rock" && computerChoice === "scissors") {
            console.log("You win! Rock beats scissors.");
            humanScore += 1;
        } else if (humanChoice === "rock" && computerChoice === "paper") {
            console.log("You lose! Paper beats Rock.");
            computerScore +=1;
        } else if(humanChoice === "paper" && computerChoice === "rock") {
            console.log("You win! Paper beats Rock");
            humanScore += 1;
        } else if(humanChoice === "paper" && computerChoice === "scissors") {
            console.log("You loose! Scissors beats Paper.");
            computerScore += 1;
        } else if(humanChoice === "scissors" && computerChoice === "rock") {
            console.log("You loose! Rock beats Scissors.");
            computerScore += 1;
        } else {
            console.log("You win! Scissors beats Paper.")
            humanScore += 1;
        }  
    }
    playRound(humanSelection, computerSelection);
    nextRound();
    playRound(humanSelection, computerSelection);
    nextRound();
    playRound(humanSelection, computerSelection);
    nextRound();
    playRound(humanSelection, computerSelection);
    nextRound();
    playRound(humanSelection, computerSelection);

    if(humanScore === computerScore) {
        console.log("Your score is: " + humanScore);
        console.log("Computers score is: " + computerScore);
        console.log("The game was a tie. No winner this time.");
    } else if(humanScore > computerScore) {
        console.log("Your score is: " + humanScore);
        console.log("Computers score is: " + computerScore);
        console.log("You won the game, congratulations!");
    } else {
        console.log("Your score is: " + humanScore);
        console.log("Computers score is: " + computerScore);
        console.log("Computer won this game, better luck next time!");
    }
    
}
playGame();
