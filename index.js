

var userClickedPattern = [];
var randomPattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var started = false;
var level = 0;


function checkAnswer(currentLevel){
    
    if (randomPattern[currentLevel] === userClickedPattern[currentLevel]) {

          if (userClickedPattern.length === randomPattern.length){
  
          setTimeout(function () {
            nextSequence();
          }, 1000);
  
        }
  
      }
    }
function nextSequence(){
    userClickedPattern = [];
    $("#level-title").text("Level "+level);
    var randomNumber = Math.floor(Math.random());
    var randomChosenColor = buttonColors[randomNumber];
    randomPattern.push(randomChosenColor);

    $("#"+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
}
function playSound(name){
    var audio = new Audio(name+".mp3");
    audio.play();
}
function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColour).removeClass("pressed");
    }, 100);
}

$(document).keypress(function(){
    if(!started){
        $("#level-title").text("Level "+level);
        nextSequence();
        started = true;
    }
})
function startOver() {
    level = 0;
    randomPattern = [];
    started = false;
  }


