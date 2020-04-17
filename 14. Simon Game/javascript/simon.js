var h1 = $("h1")
var green = $(".green");
var blue = $(".blue");
var red = $(".red");
var yellow = $(".yellow");
var inGame = false;
var playerCanChoose = false;
var playerAnswers = new Array();
var gameAnswers = new Array();


function checkAnswer(){
  for (var i = 0 ; i< playerAnswers.length ; i++){
    if(playerAnswers[i] == gameAnswers[i]){
      if(i == gameAnswers.length-1){
        setTimeout(() => {
          startGame();
        }, 500);

      }
    }
    
    else {
      returnToMainScreen();
    }
  }
}

function returnToMainScreen (){
  var audio = new Audio('sounds/wrong.mp3');
  audio.play()
  playerCanChoose  = false;
  inGame = false;
  playerAnswers = new Array();
  gameAnswers = new Array();
  h1.text("Press 'Enter' To Play");
}

green.mousedown(function (e) { 
  var audio = new Audio('sounds/green.mp3');
  audio.play()
  green.removeClass("green");
  green.removeClass("green-hover");
  green.addClass("green-clicked");

});

green.mouseup(function (e) { 
    green.addClass("green");
    green.addClass("green-hover");
    green.removeClass("green-clicked");
    if(playerCanChoose == true){
      playerAnswers.push(1);
      checkAnswer();
    }
    
 });

 blue.mousedown(function (e) { 
    var audio = new Audio('sounds/blue.mp3');
    audio.play()
    blue.removeClass("blue");
    blue.removeClass("blue-hover");
    blue.addClass("blue-clicked");

  });
  
  blue.mouseup(function (e) { 
      blue.addClass("blue");
      blue.addClass("blue-hover");
      blue.removeClass("blue-clicked");
      if(playerCanChoose == true){
        playerAnswers.push(2);
        checkAnswer();
      }
   });
  

   red.mousedown(function (e) { 
    var audio = new Audio('sounds/red.mp3');
    audio.play()
    red.removeClass("red");
    red.removeClass("red-hover");
    red.addClass("red-clicked");
  });
  
  red.mouseup(function (e) { 
      red.addClass("red");
      red.addClass("red-hover");
      red.removeClass("red-clicked");
      if(playerCanChoose == true){
        playerAnswers.push(3);
        checkAnswer();
      }
  
   });
 
   yellow.mousedown(function (e) { 
    var audio = new Audio('sounds/yellow.mp3');
    audio.play()
    yellow.removeClass("yellow");
    yellow.removeClass("yellow-hover");
    yellow.addClass("yellow-clicked");
  });
  
  yellow.mouseup(function (e) { 
      yellow.addClass("yellow");
      yellow.addClass("yellow-hover");
      yellow.removeClass("yellow-clicked");
      if(playerCanChoose == true){
        playerAnswers.push(4);
        checkAnswer();
      }
  });

  $(document).on('keypress',function(e) {
    if(e.which == 13 && inGame == false) {
      startGame();
    }
});

function startGame(){
  playerAnswers = new Array();
  var randomNumber = Math.floor(Math.random() * 4 + 1); 
  gameAnswers.push(randomNumber);
  var audio = new Audio('sounds/green.mp3');
  audio.play()
  h1.text("Level "+ gameAnswers.length);
  inGame = true;
  gameAnimation();
}

function gameAnimation(){
    blipAnimation(gameAnswers[gameAnswers.length - 1]);
     playerCanChoose = true;

}

function blipAnimation(colorCode){
  if(colorCode == 1){
    green.fadeOut(500).fadeIn(500);
  }
  else if(colorCode == 2){
    blue.fadeOut(500).fadeIn(500);
  }
  else if(colorCode == 3){
    red.fadeOut(500).fadeIn(500);
  }
  else if(colorCode == 4){
    yellow.fadeOut(500).fadeIn(500);
  }
}


