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
  //* End of Object Constructor

    //* Declare global variables
    var $good = $('#good');
     var $bad = $('#bad');

  //* Call function to initialize game
  racingHandler();

    //* Player handler and check winner handler
    function racingHandler () {
      $(document).on('keydown', function(e) {

         //* Declare all local variables
          var goodPosition = $('#good').position().left;
           var badPosition = $('#bad').position().left;
                var $track = $('#track').width();

        if ( (e.keyCode === 81) && (goodPosition <  ($track * 0.85)) ) {
          $good.animate({left: '+=50px'}, 10);
        }

        else if ( (e.keyCode === 81) && (goodPosition > ($track * 0.85) ) ) {
          $(document).off('keydown');
          alert('Levitating Mabel Wins!!!');
        }

        if ( (e.keyCode === 80) && (badPosition <  ($track * 0.85)) ) {
          $bad.animate({left: '+=50px'}, 10);
        }

        else if ( (e.keyCode === 80) && (badPosition > ($track * 0.85) ) ) {
          $(document).off('keydown');
          alert ('Torpedo Mabel Wins!!!');
        }
      });
    }

      //* Event listener for reset button
      $('.btn').on('click', function() {
        racingHandler();
        $good.css({
          top: 130,
          left: 20,
          position: 'absolute'
        });
        $bad.css({
          top: 270,
          left: 20,
          position: 'absolute'
        });
      });

// * End of document

});
