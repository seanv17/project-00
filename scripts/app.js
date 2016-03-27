$(document).ready(function() {

  // ! ---  Pseudo Code Plan --- ! //

  // If goodGuys position is less than racetrack width * .85 & keypress for Q is pressed
  // move goodGuys by 50px at 100(speed)
  // else if
  // else if goodGuys position width is greater than track, goodGuys win

  // Inverse for badGuys
  // If badGuys position is less than racetrack width * .85 & keypress for P is pressed
  // move badGuys by 50px at 100(speed)
  // else if badGuys position width is greater than track, bad Guys win

    //* Declare global variables

    var $good = $('#good');
     var $bad = $('#bad');

  //* Event listener for reset button

  $('.btn').on('click', function() {
    $good.css({
      top: 190,
      left: 20,
      position: 'absolute'
    });
    $bad.css({
      top: 190,
      left: 20,
      position: 'absolute'
    });
  });

    //* Player handler and check winner handler

    $(document).on('keydown', function(e) {

         //* Declare all local variables

          var goodPosition = $('#good').position().left;
           var badPosition = $('#bad').position().left;
            var $goodTrack = $('#goodTrack').width();
             var $badTrack = $('#badTrack').width();

        if ( (e.keyCode === 81) && (goodPosition <  ($goodTrack * 0.85)) ) {
          $good.animate({'left': '+=50px'}, 50);
        }

        else if ( (e.keyCode === 81) && (goodPosition > ($goodTrack * 0.85) ) ) {
          $(document).off('keydown');
          alert('Levitating Mabel Wins!!!');
        }

        if ( (e.keyCode === 80) && (badPosition <  ($badTrack * 0.85)) ) {
          $bad.animate({left: '+=50px'}, 50);
        }

        else if ( (e.keyCode === 80) && (badPosition > ($badTrack * 0.85) ) ) {
          $(document).off('keydown');
          alert ('Torpedo Mabel Wins!!!');
        }
      });

// * End of document

});
