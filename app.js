let totalGamesPlayed = 0;
let wins = 0;
let losses = 0;
let ties = 0;

let userChoiceFunc = () => {
    let userChoiceString = window.prompt("What is your choice?")
    let userChoice = userChoiceString.toLowerCase();
    return userChoice;
}
//function to determine computers choice.
let computerChoiceFunc = () => {
    let randomNumber = Math.random();
let computerChoice = "";
if (randomNumber < 0.333) {
    computerChoice = "rock"
} else if (randomNumber > 0.333 && randomNumber < 0.666) {
    computerChoice = "paper"
} else computerChoice = "scissors"
    return computerChoice;
}

let playRound = (playerSelection, computerSelection) => {
    
    if (playerSelection === computerSelection) {
        return "tie"
    }
    if (playerSelection === "rock" && computerSelection === "scissors") {
        return "you win"
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "you lose"
    }
    if (playerSelection === "scissors" && computerSelection === "paper") {
        return "you win"
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "you lose"
    }
    if (playerSelection === "paper" && computerSelection === "rock") {
        return "you win"
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "you lose"
    }
}
let displayStats = (win, lost, tie) => {
console.log("wins: " + win);
console.log("losses: " + lost);
console.log("draws: " + tie);

    if (win > lost) {
    return "You won!";
    } else if (lost > win) {
        return"You lost!";
    } else {
        return "Draw!";
    }
}
let bestOf5 = () => {
    var round = 1;
    var userScore = 0;
    var computerScore = 0;
    var draw = 0;

    while (round <= 5 ) {
        let playerChoice = userChoiceFunc();
        let computerChoice = computerChoiceFunc();
        let game = playRound(playerChoice,computerChoice);
        if (game === "you win") {
            userScore++
        } else if (game === "you lose") {
            computerScore++
        } else draw++; 
        
        console.log("game: " + round);
        console.log("player Selection: " + playerChoice)
        console.log("computer Selection: " + computerChoice)
        console.log("Winner of game " + round + " is " + game);
        round++;
    }
    console.log(displayStats(userScore, computerScore, draw))
}

function playGame() {
let userChoice = document.getElementById("userChoiceInput").value.toLowerCase();
let computerChoice = computerChoiceFunc();
let game = playRound(userChoice, computerChoice);
document.getElementById("output").innerHTML = `
<p>Your Choice: ${userChoice}</p>
<p>Computer's Choice: ${computerChoice}</p>
<p> ${game.charAt(0).toUpperCase() + game.slice(1)}</p>
`;
}

function winPercentage(totalGamesPlayed, wins) {
    let winPercentage = (100 * wins) / totalGamesPlayed;
    return winPercentage.toFixed(2) + "%";

}

function updateScore(gameResult) {
    if (gameResult === "you win") {
        wins++;
        totalGamesPlayed++;
        document.getElementById("wins").innerHTML = wins;
        document.getElementById("totalGamesPlayed").innerHTML = totalGamesPlayed;
    } else if  (gameResult === "you lose") {
        losses++;
        totalGamesPlayed++;
        document.getElementById("losses").innerHTML = losses;
        document.getElementById("totalGamesPlayed").innerHTML = totalGamesPlayed;
    } else if (gameResult === "tie"){
        ties++;
        totalGamesPlayed++;
        document.getElementById("draws").innerHTML = ties;
        document.getElementById("totalGamesPlayed").innerHTML = totalGamesPlayed;
    }
    document.getElementById("winPercentage").innerHTML = winPercentage(totalGamesPlayed, wins);
    winPercentage(totalGamesPlayed, wins);
}

function resetTextInput() {
    document.getElementById("userChoiceInput").value = "";
}

function playGamev2() {
    let userChoice = document.getElementById("userChoiceInput").value.toLowerCase();
    let computerChoice = computerChoiceFunc();
    let game = playRound(userChoice, computerChoice);

    let template = `
    <p>${userChoice.charAt(0).toUpperCase() + userChoice.slice(1)} vs. ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} = ${game.charAt(0).toUpperCase() + game.slice(1)}
    </p>
    `
    let outputTemplate = document.getElementById("output");
    outputTemplate.insertAdjacentHTML("beforeend", template);

    updateScore(game);
    resetTextInput();
}








