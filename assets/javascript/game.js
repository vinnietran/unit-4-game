

var randomNumber;
var userRandNumber;
var RandNumber = [];
var userScore;
var wins = 0;
var losses = 0;

var images = ['assets/images/greenCrystal.jpg', 'assets/images/yellowCrystal.jpeg',
  'assets/images/redCrystal.jpg', 'assets/images/blueCrystal.jpg']




$(document).ready(function(){

//Generates random numbers at start of game
function startGame() {
  randomNumber = [Math.floor(Math.random() * (120 - 19) + 19)];
  console.log(randomNumber);
  $("#rnd").append(randomNumber);


  //generates numbers for the images 
  for (i = 0; i < images.length; i++) {
    userRandNumber = [Math.floor(Math.random() * (12 - 1) - 0)];
    RandNumber.push(userRandNumber);
    //console.log(userRandNumber);
  }
  console.log(RandNumber);


  for (i = 0; i < images.length; i++) {

    var imageCrystal = $("<img>");
    // First each crystal will be given the class ".crystal-image".
    // This will allow the CSS to take effect.
    imageCrystal.addClass("image-crystal");

    imageCrystal.attr("id", "crystal");
    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    $("#images").append(imageCrystal);

    // Each imageCrystal will be given a src link to the crystal image
    imageCrystal.attr("src", images[i]);

    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
    imageCrystal.attr("data-crystalvalue", RandNumber[i]);
  }
}
startGame()

$(".image-crystal").on("click", function() {
  var crystalValue = ($(this).attr("data-crystalvalue"));
  //crystalValue = parseInt(crystalValue);
  console.log(crystalValue);
 
});
})
