let allChoices = ["rock", "paper", "scissors"];
let playerChoice;
let computerChoice;
let computerScore = 0;
let playerScore = 0;

//Play a round, return -1 if loss, 0 if draw, 1 if win
function PlayRound(e){
    computerChoice = allChoices[Math.floor(Math.random()*3)];
    playerChoice = e.target.dataset.choice;
    let result;
    if(playerChoice == computerChoice){
        result = 0;
    }
    else{
        switch(playerChoice){
            case "rock":
                result = computerChoice == "paper" ? -1 : 1;
                break;
            case "paper":
                result = computerChoice == "scissors" ? -1 : 1;
                break;
            case "scissors":
                result = computerChoice == "rock" ? -1 : 1;
                break;
        }//end switch
    }//end else
    UpdateScore(result);
}//end PlayRound

function UpdateScore(result){
    if(result == 0){
        resultDiv.textContent = `Both chose ${playerChoice}, It's a draw.`;
    }
    else if(result == 1){
        let text = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
        resultDiv.textContent = `${text} beats ${computerChoice}, You win!`;
        playerScoreDiv.textContent = ++playerScore;
    }
    else{
        let text = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
        resultDiv.textContent = `${text} loses to ${computerChoice}, sorry...`;
        computerScoreDiv.textContent = ++computerScore;
    }
    if(playerScore == 5 || computerScore == 5){
        DeclareWinner();
    }
}//end UpdateScore

function DeclareWinner(){
    //Removes all elements in the container
    let container = document.querySelector('.container');
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }

    const announcement = document.createElement('h1');
    announcement.setAttribute('class', 'announcement');
    container.appendChild(announcement);
    
    if(playerScore > computerScore){
        announcement.textContent = "You Win!";
    }
    else{
        announcement.textContent = "You Lose...";
    }
}//end DeclareWinner

const choices = document.querySelectorAll('button');
choices.forEach(button => button.addEventListener('click', PlayRound));

const resultDiv = document.querySelector('.results');
const playerScoreDiv = document.querySelector('.player .score');
const computerScoreDiv = document.querySelector('.computer .score');

