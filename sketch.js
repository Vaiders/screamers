let STATE;
let CURRENT_PLAYER = 1;

let mic;
var timer;

function setup() {
    createCanvas(680, 480);

    // Create an Audio input
    mic = new p5.AudioIn();

    // start the Audio Input.
    // By default, it does not .connect() (to the computer speakers)
    mic.start();
    // setInterval(screamNow,1000);


    STATE = "new_game"
}

function draw() {
    background(200);
    console.log()

    if (STATE = "new_game"){


      STATE = "player_1"
    }

    if (STATE = "player_1") {


      STATE = "flying";
    }

    if (STATE = "player_2") {


      STATE = "flying";
    }

    if (STATE = "flying") {

      if (hit = 1){
        STATE = "hit";
      } else if (miss = 1){
        STATE = "miss";
      }

    }

    if (STATE = "hit"){

      if (won = 1) {
        STATE = "won";
      } else if (won = 0) {
        STATE = "next_player";
      }
    }

    if (STATE = "next_player") {

        if (CURRENT_PLAYER = 1) {
            CURRENT_PLAYER = 2;
            STATE = "player_2";
        } else if (CURRENT_PLAYER = 2) {
            CURRENT_PLAYER = 1;
            STATE = "player_1";
        }
    }


}
