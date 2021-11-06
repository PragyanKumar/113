//Preload function//
function preload(){}

//Setup function//
function setup(){
canvas = rect(30,20,55,55);
canvas.position(110,250);
video = createCapture(VIDEO);
video.hide();

tint_colour = "";
}

// Draw function//
function draw(){
    image(video,0,0,640,400);
    tint(tint_colour);
}

//Take snapshot function//
function take_snapshot(){
    save('student_name.png')
}

// Filter_tint function//
function Filter_tint(){
    tint_colour = document.getElementById("colour_name").value;
}
