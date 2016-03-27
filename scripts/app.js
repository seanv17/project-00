$(document).ready(function() {

    //* Fetch source template and compile
    var source = $('#player-template').html();
    var template = Handlebars.compile(source);

    //* Create player object and run through template
    var playersArray = [
      new Player('images/giphy.gif', 'good'),
      new Player('images/giphy_2.gif', 'bad')
    ];

    //* Render attributes from array to handlebars template
    var renderedHTML = template({ players: playersArray });

      //* Apply attributes to HTML
      $('.playerEntry').append(renderedHTML);

  //* Player Object Constructor
  function Player(playerURL, playerID){

      //* Object Attributes
      this.playerURL = playerURL;
      this.playerID = playerID;
  }

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
      top: 330,
      left: 20,
      position: 'absolute'
    });
  });

    //* Player handler and check winner handler
    $(document).on('keydown', function(e) {

         //* Declare all local variables
          var goodPosition = $('#good').position().left;
           var badPosition = $('#bad').position().left;
                var $track = $('#track').width();

        if ( (e.keyCode === 81) && (goodPosition <  ($track * 0.85)) ) {
          $good.animate({'left': '+=50px'}, 50);
        }

        else if ( (e.keyCode === 81) && (goodPosition > ($track * 0.85) ) ) {
          $(document).off('keydown');
          alert('Levitating Mabel Wins!!!');
        }

        if ( (e.keyCode === 80) && (badPosition <  ($track * 0.85)) ) {
          $bad.animate({left: '+=50px'}, 50);
        }

        else if ( (e.keyCode === 80) && (badPosition > ($track * 0.85) ) ) {
          $(document).off('keydown');
          alert ('Torpedo Mabel Wins!!!');
        }
      });

// * End of document

});
