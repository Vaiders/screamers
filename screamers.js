let x = 50
var animated = false
var content

function setup() {

  
    noLoop()


    createCanvas(680,420);
    ellipse(50, 400, 80, 80);
    ellipse(560, 400, 80, 80);

    var button1 = createButton("Start Screaming");
    button1.mousePressed(recordScream)

    

}


function draw () {

        stroke(50)
        fill(100)
        ellipse(x, 400, 24,24)
        x = x+1
    
    }



function recordScream() {
        loop()

        var timeleft = 3;

        
        var downloadTimer = setInterval(function(){
        background(255, 255 ,255 )
        content = "Time Remaining " + timeleft + "Seconds";
        text(content, 10, 10, 70, 80)

        timeleft--;
        console.log(timeleft)
        if(timeleft <= -1) {
            clearInterval(downloadTimer);
            noLoop();
            
        }
        },1000);

        redraw();

}

function reset() {
    y = 0
}