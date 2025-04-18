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

// Play Round
    function playRound(humanChoice, computerChoice) {
        if(gameOver) return;
        let resultMsg = "";
        if (humanChoice === computerChoice) {
            resultMsg = `it's a tie! You both Chose ${humanChoice}`;
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            resultMsg = `🎉 You Win! ${humanChoice} beats ${computerChoice}`;
            humanScore++;
             } else {
                resultMsg = `😞 You Lose! ${computerChoice} beats ${humanChoice}`;
                computerScore++;
             }
             result.innerHTML = resultMsg;
             score.innerHTML = `Score - You: ${humanScore} | computer: ${computerScore}`;
             checkforWinner();
    }
// Event Listner for the rock, paper and scissors button
rock.addEventListener("click", function () {
    playRound("rock", getComputerChoice());
});
paper.addEventListener("click", function () {
    playRound("paper", getComputerChoice());
});
scissors.addEventListener("click", function () {
    playRound("scissors", getComputerChoice());
})

// check for winner 
function checkforWinner() {
    if (humanScore >= 5) {
        winner.innerHTML = "🏆 Congratulations! You won the game!";
        gameOver = true;
    } else if (computerScore >= 5) {
        winner.innerHTML = "💻 The computer won the game. Better luck next time!";
        gameOver = "true";
    }
}