var myState = 0;
var timer = 0;


function setup() {
  // put setup code here
}

function draw() {
  // put drawing code here
  switch (myState) {
    case 0:
      text("Welcome to my Sustainability Secret! Click to continue.")
      break;

    case 1:
      timer = timer - 1;
      if (timer <= 0) {
        background(random(255), random(255), random(255));
        timer = 200;
      }
      break;

    case 2:
      fill(102);
      rect(81, 81, 63, 63);
      fill(255);
      ellipse(252, 144, 72, 72)
      break;

    case 3:
      background("yellow");
      text("COFFEE! YUM!!!")
      break;

    case 4:
      (function() {
        "use strict";

        var i = 0;
        for (; i < 3; i += 1) {
          setTimeout((function(idx) {
            return function addSmoke() {
              var
                time = 7500,
                smoke = $('<div />', {
                  class: 'smoke smoke' + (idx + 1),
                  css: {
                    opacity: 0
                  }
                });

              // add to viewport
              $(smoke).appendTo('#viewport');

              // animate
              $.when(
                // animate to 100% opacity in half the time (fade in)
                $(smoke).animate({
                  opacity: 1
                }, {
                  duration: time * 0.2,
                  easing: 'linear',
                  queue: false,

                  // animate to 0% opacity in the remaining time (fade out)
                  complete: function() {
                    $(smoke).animate({
                      opacity: 0
                    }, {
                      duration: time * 0.8,
                      easing: 'linear',
                      queue: false
                    });
                  }
                }),

                // animate movement
                $(smoke).animate({
                  bottom: $('#viewport').height()
                }, {
                  duration: time,
                  easing: 'linear',
                  queue: false
                })

                // when all down, remove and add new random smoke
              ).then(function() {
                $(smoke).remove();
                addSmoke();
              });
            };
          }(i % 3)), i * 2500);
        }
      }());
      break;

  }

}

function mouseReleased() {
  if (myState == 0) {
    myState = 1;
  }

}
