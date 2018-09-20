var sun;
var moon;

var r ;
var g ;
var b ;

var cX = 100
;
var cY = 250;
var cEdge = 20;
var cDist;

var rectX = 50;
var rectY = 75;
var rectSize = 100;


var sunShow = false;

var sunButton;

function preload(){
  sun = loadImage('assets/sun.png');
  moon = loadImage('assets/moon.png');
}

function setup() {
  // put setup code here
  createCanvas(400,400);
  sunButton = createButton("Press to show/hide sun");
  sunButton.position(500,100);
  sunButton.mousePressed(function(){
   if(sunShow == false){
     sunShow = true;
   }else{
     sunShow = false;
   }
 });
}

function draw(){

  // put drawing code here
  background(255);
  fill(r,g,b);
  rect(rectX,rectY,rectSize,rectSize);
  imageMode (CENTER);

  image(sun,cX,cY,sun.width/4,sun.height/4);

  if(sunShow == true){
  image(sun,200,200);
}

}

function mousePressed(){
  if(mouseX > rectX && mouseX < rectX + rectSize && mouseY > rectY && mouseY < rectY + rectSize){
    console.log("In Here");
      r = random(100,256);
      g = random(100,256);
      b = random(100,256);
    }

    var sunDist = dist(mouseX,mouseY,cX,cY);
    console.log("sunDist" + sunDist);

    if (sunDist < 40){
      if(sunShow == false){
        sunShow = true;
      } else {
        sunShow = false;
      }
  }
}
