let computerChoice
let humanChoice
let humanScore = 0
let computerScore = 0

function getComputerChoice(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    let randomNumber = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
    if (randomNumber === 1) {
        computerChoice = "Rock"
    } else if (randomNumber === 2) {
        computerChoice = "Paper"
    } else {
        computerChoice = "Scissors"
    }
}

function getHumanChoice(){
    let humanNumber = +prompt("What is your choice? (Between 1 and 3)?")
    if (humanNumber === 1) {
        humanChoice = "Rock"
    } else if (humanNumber === 2) {
        humanChoice = "Paper"
    } else if (humanNumber === 3) {
        humanChoice = "Scissors"
    } else {
        humanChoice = "Please choose a valid number."
    }
}

function playRound() {
    getComputerChoice(1,3)
    getHumanChoice()
    if (humanChoice === computerChoice) {
        result = "That's a tie"
    } else if ((computerChoice === "Rock" && humanChoice === "Scissors") || (computerChoice === "Paper" && humanChoice === "Rock") || (computerChoice === "Scissors" && humanChoice === "Paper")) {
        result = "You lose. " + computerChoice + " wins " + humanChoice;
        computerScore = ++computerScore;
    } else {
        result = "You win. " + humanChoice + " wins " + computerChoice;
        humanScore = ++humanScore;
    }
    console.log(result)
}

function playGame(){
    let games = 0
    while (games < 5){
        ++games;
        playRound(humanChoice,computerChoice)
        console.log("Human Score is: " + humanScore)
        console.log("Computer Score is: " + computerScore)
    }
}

playGame()