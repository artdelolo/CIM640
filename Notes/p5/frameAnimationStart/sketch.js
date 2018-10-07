
var frameAmounts = 4;
var frameArray = [];
var currentFrame = 0;

var interval = 1000;
var prevMillis = 0;
var appear = false;

var interval2 = 10;
var prevMillis2 = 0;
var counter = 0;

var sun;
var moon;

var controls = {
  "play" : [50,400,50,"green"],
  "stop" : [110,400,50,"red"],
  "sun" : [170,400,50,"blue"],
  "moon" : [230,400,50,"yellow"],
  "fwd" : [50,340,50,"pink"],
  "back" : [110,340,50,"purple"]
};

var state = "stop";

function preload(){
  //var frameString = "assests/Thatwasclose0.jpg";
  //frameArray[0] = loadImage(frameString);

  for(var frames = 0; frames < frameAmounts; frames++){
    var frameString = "assests/Thatwasclose" + frames + ".jpg";
    frameArray[frames] = loadImage(frameString);
  }

  sun = loadImage('assests/sun.png');
  moon = loadImage('assests/moon.png');

}


function setup(){
  createCanvas(500,500);

  console.log(controls["play"]);
  console.log(controls["play"][3]);

}


function draw(){

  image(frameArray[currentFrame],0,0);


  if(millis() - prevMillis > interval && state == "play"){
    currentFrame++;
    prevMillis = millis();
  }

  if( state == "sun"){

    image(sun,50,50,100,100);
    fill (244, 217, 66 ,100);
    rect (0,0,500,500);
  } else if (state == "moon") {

        image(moon,400,50,100,100);
        fill (59, 78, 221 ,100);
        rect (0,0,500,500);
  }

  /*if(millis() - prevMillis2 > interval2){
    counter++
    prevMillis2 = millis();
  }


  if(counter > width){
    counter = 0;
  }

  ellipse(counter,height/2,20,20);
  console.log(currentFrame);
  */

  if (currentFrame > frameAmounts-1){
    currentFrame = 0;
  }

  for(var keys in controls){
    fill(controls[keys][3]);
    rect(controls[keys][0],controls[keys][1],controls[keys][2],controls[keys][2]);


  if(mouseX > controls[keys][0] && mouseX < controls[keys][0] + controls[keys][2]
    && mouseY > controls[keys][1] && mouseY < controls[keys][1]+controls[keys][2]){

    console.log(fill);

    fill (127,200);
    rect(controls[keys][0],controls[keys][1],controls[keys][2],controls[keys][2]);

  }
}

  for (var keys in controls){

    if(mouseX > controls[keys][0] && mouseX < controls[keys][0]+controls[keys][2]
      && mouseY > controls[keys][1] && mouseY < controls[keys][1]+controls[keys][2]){

      //rect(controls[keys][0],controls[keys][1],controls[keys][2],controls[keys][2]);

      state = keys;
    }

  }
}

function mousePressed(){

for( var keys in controls){
  if(mouseX > controls[keys][0] && mouseX < controls[keys][0]+controls[keys][2]
    && mouseY > controls[keys][1] && mouseY < controls[keys][1]+controls[keys][2]){

  state = keys;

  if(state == "fwd"){
    currentFrame++
    if (currentFrame >= frameArray.length){
      currentFrame = 0
    }
  }else if (state == "back") {

    currentFrame--
    if (currentFrame < 0) {
      currentFrame = frameArray.length - 1;
    }
  }
}
}
}
