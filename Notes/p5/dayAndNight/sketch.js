var sun;
var moon;

var r ;
var g ;
var b ;

var cX = 50;
var cY = 50;
var cEdge = 20;
var cDist;

var rectX = 50;
var rectY = 75;
var rectSize = 100;


function preload(){
  sun = loadImage('assets/sun.png');
  moon = loadImage('assets/moon.png');
}

function setup() {
  // put setup code here
  createCanvas(400,400);
}


function draw() {


  // put drawing code here

  /*sunset = 100;

  if(mouseX <= width/2){
    back = "gold";
    sunset = sunset - mouseX;

  }

  if(mouseX >= width/2){
    back = "navy";
  }*/

  background(r,g,b);


  //interface
  strokeWeight(0)
  fill("gold");
  rect(0,350,width/2,350);
  fill("navy");
  rect(width/2,350,width,350);
  fill(255);
  textSize(10);
  text("Move over each area to show a surprise!", width/2,25);
  strokeWeight(3);
  stroke(255);
  line(width/2,350,width/2,height);
  line(0,350,width,350);
  fill(255);
  textAlign(CENTER);
  textSize(30);
  strokeWeight(0);
  text("Day", width/4,385);
  text("Night",width/4+width/2,385);



  //interaction
//  image(sun,100,100);
//  image(moon,200,100);

  /*
  if(true){

  MouseX < width/2;

  }
  */

  if(mouseX > 0  && mouseX <= width/2){
    image(sun,50,50);
    console.log("Day Side");
  }

  if(mouseX >= width/2 && mouseX <= width){
    image(moon,50,50);
    console.log("Night Side");
  }

  fill("gold");
  ellipse(cX,cY,cEdge,cEdge);

  cDist = dist(cX,cY,mouseX,mouseY);
  console.log("cDist: " + "cDist");

  if(cDist < 10){
    r = 255;
    g = 0;
    b = 255;

  }else{
    r = 255;
    g = 255;
    b = 255;

  }


  //
  // if(mouseX > rectX && mouseY < rectX + rectSize){
  //   if(mouseY > rectY && mouseY < rectY + rectSize)
  //   console.log("In Here");
  // }

  if(mouseX > rectX && mouseX < rectX + rectSize && mouseY > rectY && mouseY < rectY + rectSize){
    console.log("In Here");
    r = random(100,256);
    g = random(100,256);
    b = random(100,256);
  }

  fill(r,g,b);
  rect(rectX,rectY,rectSize,rectSize);




}
