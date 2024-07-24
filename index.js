//Variables
const choices = ['Rock','Paper','Scissors']
const computerDisplay = document.getElementById("computerDisplay")
const playerDisplay = document.getElementById("playerDisplay")
const results = document.getElementById("results")
const playerScoreDisplay = document.getElementById("playerScoreDisplay")
const computerScoreDisplay = document.getElementById("computerScoreDisplay")
let playerScore = 0
let computerScore = 0

//Play Round
function playRound(playerChoice) {
    let computerChoice = choices[Math.floor(Math.random()*3)]
    
    computerDisplay.textContent = `Computer:  ${computerChoice}`;
    playerDisplay.textContent = `Player:  ${playerChoice}`;
    let result = "";

    if (computerChoice == playerChoice){
        result = "You Tie"
    }
    else if (
        playerChoice == "Rock"  && computerChoice == "Scissors" ||
        playerChoice == "Paper"  && computerChoice == "Scissors" ||
        playerChoice == "Scissors"  && computerChoice == "Scissors" ) {
            result = "You Win!"
            playerScore ++
        }
    else {
        result = "You Lose"
        computerScore ++
    }
    results.textContent = result;
    playerScoreDisplay.textContent = `Player Score: ${playerScore}`;
    computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
}


