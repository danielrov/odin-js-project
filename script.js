let computerChoice
let humanChoice
let humanScore = 0
let computerScore = 0
let result

const buttons = document.querySelectorAll(".btn");

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
      humanChoice = button.textContent;
      playGame();
    });
  });

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

function playRound() {
    getComputerChoice(1,3)
    if (humanChoice === computerChoice) {
        result = "That's a tie"
    } else if ((computerChoice === "Rock" && humanChoice === "Scissors") || (computerChoice === "Paper" && humanChoice === "Rock") || (computerChoice === "Scissors" && humanChoice === "Paper")) {
        result = "You lose. " + computerChoice + " wins " + humanChoice;
        computerScore = ++computerScore;
    } else {
        result = "You win. " + humanChoice + " wins " + computerChoice;
        humanScore = ++humanScore;
    }

    const results = document.querySelector(".results");
    const resultItem = document.createElement("p");
    resultItem.textContent = result;
    results.appendChild(resultItem);
    
    const score = document.querySelector(".score");
    score.textContent = `Human: ${humanScore} Computer: ${computerScore}`;

    if (humanScore === 5 || computerScore === 5) {
        const finalResult = document.createElement("h3");
        if (humanScore === 5) {
            finalResult.textContent = "You win!";
            results.insertBefore(finalResult,results.firstChild);
            buttons.forEach(function(button) {
                button.disabled = true
            });
        } else {
            finalResult.textContent = "You lose!";
            results.insertBefore(finalResult,results.firstChild);
            buttons.forEach(function(button) {
                button.disabled = true
            });}
        const reloadButton = document.createElement("button");
        reloadButton.textContent = "Play again!";
        results.insertBefore(reloadButton,results.firstChild)
        reloadButton.addEventListener("click", function() {
              location.reload();
            });
    };
}

function playGame(){
    playRound()
}