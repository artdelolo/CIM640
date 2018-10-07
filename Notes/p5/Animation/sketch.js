var xPos = 0;
var yPos = 0;
var ballSize = 20;

var trigger = false;
var trigger2 = false;

var speed = 5;

function setup() {
  // put setup code here
  createCanvas(500,500);
  xPos = width/2;
}

function draw() {
  // put drawing code here

  background(255)

  ellipse(xPos,yPos, ballSize, ballSize);



  if (trigger == false){
    xPos+=speed;
  }else{
    xPos-=speed;
  }

  if(trigger2 == false){
    yPos+=speed;
  }else {
    yPos-=speed;
  }

  if(xPos > width){
    trigger = true;
  }

  if(xPos < 0){
    trigger = false;
  }

  if(yPos > height){
    trigger2 = true
  }
  if(yPos < 0){
    trigger2 = false;
  }

//  if(yPos > height){
//    yPos--;
//  }
}
