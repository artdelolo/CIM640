
var frameAmounts = 4;
var frameArray = [];
var currentFrame = 0;

var interval = 1000;
var prevMillis = 0;
var appear = false;

function preload(){
  //var frameString = "assests/Thatwasclose0.jpg";
  //frameArray[0] = loadImage(frameString);

  for(var frames = 0; frames < frameAmounts; frames++){
    var frameString = "assests/Thatwasclose" + frames + ".jpg";
    frameArray[frames] = loadImage(frameString);
  }
}


function setup(){
  createCanvas(500,500);

}


function draw(){

  image(frameArray[currentFrame],0,0);

  if(millis() - prevMillis > interval){
    currentFrame++;
    prevMillis = millis();
  }

  console.log(currentFrame);

  if (currentFrame > frameAmounts-1){
    currentFrame = 0;
  }

}
