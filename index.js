//Computer Choice
function getComputerChoice() {
    let choice = Math.floor(Math.random()*3);
    if (choice == 0) {
        return "Rock"
    }
    if (choice == 1){
        return "Paper"
    }
    if (choice == 2) {
        return "Scissors"
    }
}

//Players Choice
function getPlayerChoice() {
    let playerChoice = prompt("Pick a Choice: 0 = Rock, 1 = Paper, 2 = Scissors ");
    if (playerChoice === '0') {
        return "Rock"
    }   
    else if (playerChoice == '1') {
        return "Paper"
    }
    else if (playerChoice == '2'){
        return "Scissors"
    }
        
}

//Score Variables
let playerScore = 0;
let computerScore = 0;

let playerSelection = getPlayerChoice()
let computerSelection = getComputerChoice()

//Play Round
function playRound (playerSelection,computerSelection) {
    if (playerSelection === computerSelection) {
        return "You Tied"
    }
    else if (
        playerSelection == "Rock" && computerSelection == "Scissors" ||
        playerSelection == "Paper" && computerSelection == "Rock" ||
        playerSelection == "Scissors" && computerSelection == "Paper" ) {
            playerScore ++
            return "You Win!"
        }
    else {
        computerScore ++
        return "You Lose"
    }
}


