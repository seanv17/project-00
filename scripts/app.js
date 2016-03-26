$(document).ready(function() {

/*function resetGame() {
  $('#player1').setAttrs(player1DefaultPosition);
}*/




function player1Move() {
  $(window).on('keyup', function(e) {
    if (e.keyCode === 81) {
      $('#player1').animate({left: "+=50px"}, 100);
    }
    if ( $('#player1').css('left') === "1320px") {
      alert("player 1 wins");
    }
  });
}

function player2Move() {
  $(window).on('keyup', function(e) {
    if (e.keyCode === 80) {
      $('#player2').animate({left: "+=50px"}, 100);
    }
    if ( $('#player2').css('left') === "1320px") {
      alert("player 2 wins");

    }
  });
}


player1Move();
player2Move();

});
