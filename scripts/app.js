$(document).ready(function() {

  // ! ---  Pseudo Code Plan --- ! //

  //If goodGuys position is less than racetrack width * .90 & keypress for Q is pressed
  // move goodGuys by 50px at 100(speed)
  // else if
  // else if goodGuys position width is greater than track, goodGuys win

  // Inverse for badGuys
  // If badGuys position is less than racetrack width * .90 & keypress for P is pressed
  // move badGuys by 50px at 100(speed)
  // else if badGuys position width is greater than track, bad Guys win

    $(document).on("keydown", function(e) {

    // Declare all variables
             var $goodGuys = $('#goodGuys');
              var $badGuys = $('#badGuys');
      var goodGuysPosition = $('#goodGuys').position().left;
       var badGuysPosition = $('#badGuys').position().left;
            var $goodTrack = $('#goodTrack').width();
             var $badTrack = $('#badTrack').width();

        if ( (e.keyCode === 81) && (goodGuysPosition <  ($goodTrack * 0.85)) ) {
          $goodGuys.animate({'left': '+=50px'}, 200);
        }

        else if ( (e.keyCode === 81) && (goodGuysPosition > ($goodTrack * 0.85) ) ) {
          $(document).off('keydown');
          alert('Hippy Mabel Wins!!!');
        }

        if ( (e.keyCode === 80) && (badGuysPosition <  ($badTrack * 0.82)) ) {
          $badGuys.animate({left: '+=50px'}, 200);
        }

        else if ( (e.keyCode === 80) && (badGuysPosition > ($badTrack * 0.82) ) ) {
          $(document).off('keydown');
          alert ('Torpedo Mabel Wins!!!');
        }
      });
});
