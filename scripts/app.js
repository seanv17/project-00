$(document).ready(function() {

});

function player1Move (keystrokes) {
  $(window).on('keyup', function(e) {
    if (e.keyCode === 81) {
      if ($('#player1').css("right") >= "5") {
          $('#player1').animate({left: "+=50px"}, 'fast');
      } else {
        alert("player 1 wins!!!");
      }
    }
  });
}

function player2Move (keystrokes) {
  $(window).on('keyup', function(e) {
    if (e.keyCode === 80) {
      console.log("You pressed P!");
    }
  });
}

player1Move();
player2Move();
