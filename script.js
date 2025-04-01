"use strict";

const input = document.querySelectorAll('button');
const showCompScore = document.querySelector('#computer-score');
const showHumanScore = document.querySelector('#human-score');
const showText = document.querySelector('#text');
let computerScore = 0;
let humanScore = 0;

showCompScore.textContent = `Computer score: ${computerScore}`;
showHumanScore.textContent = `Human score: ${humanScore}`;
showText.textContent = `Make your choice. Whoever gets 5 points, wins the game.`

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

function updateScore() {
    showCompScore.textContent = `Computer score: ${computerScore}`;
    showHumanScore.textContent = `Human score: ${humanScore}`;
}

function resetGame() {
    computerScore = 0;
    humanScore = 0;
}

function playRound() {
    
    let computerChoice = getComputerChoice();
    let humanChoice = this.name;
        
    if(humanChoice === computerChoice) {
        showText.textContent = "It's a tie! No winner in this round.";
        
    } else if(humanChoice === "rock" && computerChoice === "scissors") {
        showText.textContent = "You win! Rock beats scissors.";
        humanScore += 1;
        updateScore()
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        showText.textContent = "You lose! Paper beats Rock.";
        computerScore += 1;
        updateScore()
    } else if(humanChoice === "paper" && computerChoice === "rock") {
        showText.textContent = "You win! Paper beats Rock";
        humanScore += 1;
        updateScore()
    } else if(humanChoice === "paper" && computerChoice === "scissors") {
        showText.textContent = "You loose! Scissors beats Paper.";
        computerScore += 1;
        updateScore()
    } else if(humanChoice === "scissors" && computerChoice === "rock") {
        showText.textContent = "You loose! Rock beats Scissors.";
        computerScore += 1;
        updateScore()
    } else {
        showText.textContent = "You win! Scissors beats Paper.";
        humanScore += 1;
        updateScore()
    }  
        

    if(humanScore === 5) {
        
        showText.textContent = "You won the game, congratulations!";
        resetGame();
        updateScore();
    } else if (computerScore === 5){
        
        showText.textContent = "Computer won this game, better luck next time!";
        resetGame();
        updateScore();
    }

}   

input.forEach(btn => btn.addEventListener('click',playRound));