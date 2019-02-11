

var randomNumber;
var userRandNumber;
var userScore;
var wins = 0;
var losses = 0;

$(document).ready(startGame)

//Generates random numbers at start of game
function startGame() {
    randomNumber = [Math.floor(Math.random() * (120 - 19) + 19)];
    //console.log(randomNumber);
    $("#rnd").append(randomNumber);

    //generates numbers for the images 
    userRandNumber = [Math.floor(Math.random() * (12 - 1))];
    console.log(userRandNumber);


}

