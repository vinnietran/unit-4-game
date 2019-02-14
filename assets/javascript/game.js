

var randomNumber;
var userRandNumber;
var RandNumber = [];
var userScore = 0;
var wins = 0;
var losses = 0;

var images = ['assets/images/greenCrystal.jpg', 'assets/images/yellowCrystal.jpeg',
  'assets/images/redCrystal.jpg', 'assets/images/blueCrystal.jpg']

$(document).ready(function () {

  //Generates random numbers at start of game
  function startGame() {
    randomNumber = [Math.floor(Math.random() * (120 - 19) + 19)];
    randomNumber = parseInt(randomNumber);
    $("#rnd").append(randomNumber);

    //generates numbers for the images 
    for (i = 0; i < images.length; i++) {
      userRandNumber = [Math.floor(Math.random() * (12 - 1) + 1)];
      RandNumber.push(userRandNumber);
    }
  }

  // generates images with appropriate attributes, using src's from the images array
  function generateImages() {
    for (i = 0; i < images.length; i++) {
      var imageCrystal = $("<img>");
      imageCrystal.addClass("image-crystal");
      imageCrystal.attr("id", "crystal");
      $("#images").append(imageCrystal);
      imageCrystal.attr("src", images[i]);
      imageCrystal.attr("data-crystalvalue", RandNumber[i]);
    }
  }

  // function to clear out the appropriate elements and to set necessary variable back to 0 or null 
  function resetGame() {
    $("#images").text("");
    $("#rnd").text("");
    $("#score").text("");
    userScore = 0;
    RandNumber = [];
    imageCrystal = "";
    startGame();
    generateImages();
  }

  startGame();
  generateImages();

  // on click function
  $(document).on("click", ".image-crystal", function () {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);

    // clear win/loss message content after each game
    $("#message").text("");

    //increase user score with value of image attr
    userScore += crystalValue;

    $("#score").text(userScore);

    //check to see if the user wins or loses
    if (userScore === randomNumber) {
      wins++
      $("#w").text(wins);
      $("#message").text("YOU WIN!!!!!");
      resetGame();

    }

    else if (userScore > randomNumber) {
      losses++
      $("#l").text(losses);
      $("#message").text("YOU LOSE!!!!!");
      resetGame();
    }

  });

})
