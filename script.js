const userScore = 0;
const compScore = 0;

function computerPlay() {
    const choice = ["rock", "paper", "scissors"];
    const computerSelect = choice[Math.floor(Math.random() *choice.length)];
    return computerSelect;

}

function playRound(playerSelection, computerSelection) {
   if (playerSelection === "paper" && computerSelection === "rock" ||
   playerSelection === "scissors" && computerSelection === "paper" ||
   playerSelection === "rock" && computerSelection === "scissors" ) {
        console.log(`"You Win! ${playerSelection} beats ${computerSelection}!"`)

   } else if (playerSelection === computerSelection) {
        console.log("What a draw!");

   } else {
        console.log(`"You Lose! ${computerSelection} beats ${playerSelection}!"`);
    }
}

function game() {
    
    for (let i= 0; i < 5; i++){

    }
}


const playerSelection= "rock";
const computerSelection =computerPlay();
playRound(playerSelection, computerSelection);