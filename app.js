// create the player and the computer moves as variables
// 1. Get the player move
    // - prompt, user inputs their move in the browser
// 2. Get the computer move
    // - use a random number to select a move from an array
// 3. Check the result using both moves
    // if the moves are the same, the result is a draw
    // paper beats rock, rock beats scissors, scissors beats paper
    // player wins, computers wins or a draw are the options
// 4. Display the result
    // - alert!
// 5. Reset the game (bonus)
    // Ask the user if they want to play again
// EXTENSION:
    // Display the scores to the user after the round
    // Make the game best of 5

window.onload = () => {
    const allDivs = document.querySelectorAll(".action");
    const moves = ["rock" , "paper" , "scissors"];
    const para = document.querySelector("#message");

    allDivs.forEach(button => {
        button.addEventListener("click", (event) => {
            const playerMove = event.target.innerHTML.toLowerCase();
            const computerMove = moves[Math.floor((Math.random() * 3))];
          
            console.log(playerMove, computerMove);
            
            if (playerMove == computerMove) {
                para.innerHTML = "Draw";
                console.log("hello");
            }else if ((playerMove == "paper") && (computerMove == "rock")){
                para.innerHTML = "computer chose rock, player wins";
            }else if ((playerMove == "scissors") && (computerMove == "paper" )){
                para.innerHTML = "computer chose paper ,player wins";
            }else if ((playerMove == "paper") && (computerMove == "scissors" )){
                para.innerHTML = "player chose paper, computer wins";
            } else if((playerMove == "rock") && (computerMove == "paper")){
                para.innerHTML = "player chose rock, computer wins"; 
            } else if((playerMove == "rock") && (computerMove == "scissors")){
                para.innerHTML = "computer chose scissors, player wins"; 
            } else if((playerMove == "scissors") && (computerMove == "rock")){
                para.innerHTML = "player chose scissors, computer wins"; 
            }
           
        
    })
})
}