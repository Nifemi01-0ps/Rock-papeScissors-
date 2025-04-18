// Player Score
computerScore = 0;
humanScore = 0;
gameOver = false;

// Dom Element Reference
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
const result = document.querySelector("#result");
const score = document.querySelector("#score");
const winner = document.querySelector("#winner");

// Get Computer Choice
function getComputerChoice() {
    let randomMove = Math.random();
    if (randomMove < 0.33) {
        return "rock";
    } else if (randomMove < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

//PlayRound
function playRound(humanChoice, computerChoice) {
    if (gameOver) {
        return;
    }
    let resultMsg = "";
    if (humanChoice === computerChoice) {
        resultMsg = `🤝 it's a tie! You both chose ${humanChoice}`;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        resultMsg = `🎉 You Win! ${humanChoice} beats ${computerChoice}`;
        humanScore++;
    } else {
        resultMsg = `😞 You Lose! ${computerChoice} beats ${humanChoice}`;
        humanScore++;
    }
    result.innerHTML = resultMsg;
    score.innerHTML = `Score: You: ${humanScore} | computer: ${computerScore}`;
    checkforWinner();

}

