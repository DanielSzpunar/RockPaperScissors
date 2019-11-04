console.log("test");

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
bestOf5();











