//Declaring variables
var choices = ["r","p","s"];
var userChoice;
var compChoice;
var userChoiceName;
var compChoiceName;
var roundResult;
var pastTense;
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

//Listening for user input
document.onkeyup = function(event) {
    userChoice = event.key;
    console.log(userChoice);
    document.getElementById("instructions").innerHTML = "";
    userChoice = userChoice.toLowerCase()
    if (userChoice !== "r" && userChoice !== "p" && userChoice !== "s") {
        document.getElementById("instructions").innerHTML = "Invalid input received. Please enter 'r', 'p', or 's'.";
    }
    else {
        userChoiceName = choiceToName(userChoice);
    
        //Randomly select computer choice
        compChoice = choices[Math.floor(Math.random()*choices.length)];
        compChoiceName = choiceToName(compChoice);
        console.log("user " + userChoice);
        console.log("comp " + compChoice);

        //Decide round winner, alert result and add score
        if ((userChoice === "r" && compChoice === "s") || (userChoice === "p" && compChoice === "r") || (userChoice === "s" && compChoice === "p")) {
            roundResult = "You win this round.";
            wins++;
            pastTense = "You won.";
        }
        else if ((userChoice === "s" && compChoice === "r") || (userChoice === "r" && compChoice === "p") || (userChoice === "p" && compChoice === "s")) {
            roundResult = "You lose this round.";
            losses++;
            pastTense = "You lost.";
        }
        else {
            roundResult = "It's a tie.";
            ties++;
            pastTense = "It was a tie.";
        }

        alert("You played " + userChoiceName + ".\n\nThe computer plays " + compChoiceName + ".\n\n" + roundResult);

        document.getElementById("last_round").innerHTML = "Most recent round:  You played " + userChoiceName + ". The computer played " + compChoiceName + ". " + pastTense;
        document.getElementById("wins").innerHTML = "Wins: " + wins;
        document.getElementById("losses").innerHTML = "Losses: " + losses;
        document.getElementById("ties").innerHTML = "Ties: " + ties;
    }
}

