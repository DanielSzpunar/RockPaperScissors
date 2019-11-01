console.log("test");

//Create prompt window
let userChoice = window.prompt("What is your choice?")
//Convert to lowercase
let lowerCaseUserChoice = userChoice.toLowerCase();

/*
let randomNumber = Math.random();
console.log(randomNumber)
let computerChoice = "";
if (randomNumber < 0.333) {
    computerChoice = "rock"
} else if (randomNumber > 0.333 && randomNumber < 0.666) {
    computerChoice = "paper"
} else computerChoice = "scissors"
console.log(computerChoice)
*/

//function to determine computers choice.
let computerChoice = () => {
    let randomNumber = Math.random();
let computerChoice = "";
if (randomNumber < 0.333) {
    computerChoice = "rock"
} else if (randomNumber > 0.333 && randomNumber < 0.666) {
    computerChoice = "paper"
} else computerChoice = "scissors"
    return computerChoice
}

let playRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
        return "tie"
    }
    if (playerSelection === "rock" && computerSelection === "scissors") {
        return "you win."
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "you lose."
    }
    if (playerSelection === "scissors" && computerSelection === "paper") {
        return "you win"
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "you lose"
    }
    if (playerSelection === "paper" && computerSelection === "rock") {
        return "you win."
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "you lose."
    }
}
console.log(`player choice: ${lowerCaseUserChoice} \nComputers choice: ${computerChoice()} `)
console.log(playRound(lowerCaseUserChoice, computerChoice()));

let bestOf5 = () => {
    let total = []

    while (true) {
        total.push(playRound(lowerCaseUserChoice,computerChoice()))
        
    }
    
}











