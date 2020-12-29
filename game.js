var gamePattern = [];

var buttonColors = ["red", "blue", "green", "yellow"];

var userClickedPattern = [];

$(".btn").click(function () {

    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);

    playSound(userChosenColor);

    animatePress(userChosenColor);
});




function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();


}

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");

    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
    }, 100);

}


function checkAnswer(currrentLevel) {
    if (gamePattern[currrentLevel] === userClickedPattern[currrentLevel]) {



        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }

    } else {
        playSound("wrong");

        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        }, 200);

        $("#level-title").text("Game over!! ,Press any key to restart");

    }

}


function nextSequence() {

    userClickedPattern=[];

    level++;
    $("#level-title").text("Level " + level);

    var randomNumber = (Math.floor(Math.random() * 4));

    var randomChosenColor = buttonColors[randomNumber];

    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColor);

}