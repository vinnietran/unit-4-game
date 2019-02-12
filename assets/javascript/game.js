

var randomNumber;
var userRandNumber;
var userScore;
var wins = 0;
var losses = 0;
var images = [1,2,3,4]; 



$(document).ready(startGame)

//Generates random numbers at start of game
function startGame() {
    randomNumber = [Math.floor(Math.random() * (120 - 19) + 19)];
    console.log(randomNumber);
    $("#rnd").append(randomNumber);

    //generates numbers for the images 
    for (i=0; i<images.length; i++){
        userRandNumber = [Math.floor(Math.random() * (12 - 1)-0)];
        console.log(userRandNumber);

        var crystals = "red-crystal";

    
        //crystals.attr("data-crystalValue", userRandNumber[i]);
    
      // $("#red-crystal").append(userRandNumber);

        //console.log(userRandNumber);
        }

    

}

$("#red-crystal").on("click", function() {
  var clickValue = $("data-crystalValue");
  console.log(clickValue);

    
});

