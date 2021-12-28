const moves = ["rock", "paper", "scissor"]
let computerPlay = () => {

    let move = moves[Math.floor(Math.random() * moves.length)];
    console.log(moves.length);
    return move;
}

let playRound = (playerMove, computerMove) => {
    computerMove = computerMove.toLowerCase();
    playerMove = playerMove.toLowerCase();
    let result;
    if(playerMove === "rock"){
        switch(computerMove){
            case("paper"):
                result = "lose";
                break;
            case("scissor"):
                result = "win";
                break;
            default:
                result = "tie";
        }
    }
    if(playerMove === "scissor"){
        switch(computerMove){
            case("rock"):
                result = "lose";
                break;
            case("paper"):
                result = "win";
                break;
            default:
                result = "tie";
        }
    }
    if(playerMove === "paper"){
        switch(computerMove){
            case("scissor"):
                result = "lose";
                break;
            case("rock"):
                result = "win";
                break;
            default:
                result = "tie";
        }
    }
    return result;
}

let game = () => {
    let keepPlaying = true;
    let computerMove;
    let playerMove;
    let playerScore = 0;
    let computerScore = 0;

    while(playerScore < 5 && computerScore < 5){
        computerMove = computerPlay();
        playerMove = prompt("Rock, paper, or scissor?");
        let result = playRound(playerMove, computerMove);
        console.log(result);
        console.log(computerMove);
        switch(result){
            case("win"):
                playerScore++;
                break;
            case("lose"):
                computerScore++;
                break;
        }
        console.log(`Player Score: ${playerScore}, Computer Score : ${computerScore}`);
    }
    playerScore === 5 ? console.log("Player won!") : console.log("Computer won!");

}
game();