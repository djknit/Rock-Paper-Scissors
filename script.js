//Declaring variables
var choices = ["r","p","s"];
var userChoice;
var compChoice;
var userChoiceName;
var compChoiceName;
var wins = 0;
var losses = 0;
var ties = 0;

//Function for relating letters (r,p,s) to game choices
function choiceToName(x) {
    if (x === "r") {
        return("Rock");
    }
    if (x === "p") {
        return("Paper");
    }
    if (x === "s") {
        return("Scissors");
    }
}

var quitGame = false;
//Gameplay
alert("\nWelcome to Rock Paper Scissors. Press ok to begin.\n");
var keepPlaying = true;
while (keepPlaying === true) {
    
    //Get user choice
    userChoice = prompt("\nChoose your move.\n\nEnter 'R' for rock, 'P' for paper, or 'S' for scissors.\n");
    console.log(userChoice);
    if (userChoice === null) {
        quitGame=confirm("Are you sure you want to end this game?");
        keepPlaying = !quitGame;
    }
    else {
        userChoice = userChoice.toLowerCase();
        if ((userChoice !== "r") && (userChoice !== "p") && (userChoice !== "s")) {
            userChoice = prompt("\nInvalid response.\n");
        }
        else {
            userChoiceName = choiceToName(userChoice);
    
            //Randomly select computer choice
            compChoice = choices[Math.floor(Math.random()*choices.length)];
            compChoiceName = choiceToName(compChoice);
            console.log("user " + userChoice);
            console.log("comp " + compChoice);
            
            //Alert choices
            alert("\nYou played " + userChoiceName + ".\n\nComputer plays " + compChoiceName + ".\n");
            
            //Decide round winner, alert result and add score
            if ((userChoice === "r" && compChoice === "s") || (userChoice === "p" && compChoice === "r") || (userChoice === "s" && compChoice === "p")) {
                alert("\nYou win this round.\n");
                wins++;
            }
            else if ((userChoice === "s" && compChoice === "r") || (userChoice === "r" && compChoice === "p") || (userChoice === "p" && compChoice === "s")) {
                alert("\nYou lose this round.\n");
                losses++;
            }
            else {
                alert("\nIt's a tie.\n");
                ties++;
            }

            //Report score
            alert("\nWins " + wins + "\nLosses: "+ losses + "\nTies: " + ties + "\n");
    
            //Confirm user wishes to keep playing
            keepPlaying = confirm("\nKeep playing?\n");
        }
    }
    
}

document.write('<h1 id="game_over"><br>Game Over<h1>');
document.write("<br>Wins: " + wins);
document.write("<br><br>Losses: " + losses);
document.write("<br><br>Ties: " + ties);