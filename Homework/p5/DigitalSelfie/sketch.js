var x = 400;
var y = 400;
var xmiddle = x/2;
var ymiddle = y/2;
var hairColor = 0;
var r;
var g;
var b;
var rb;
var gb;
var bb;

function setup() {
  // put setup code here
  createCanvas(x,y);
  background("#58FAF4");
}

function draw() {

  rb = mouseX/1.5;
  gb = mouseY/1.5;
  bb = mouseX+mouseY/3;


  background(rb,gb,bb);
  // put drawing code here

  // Pick colors randomly
  fill(0);

  //base hair
  strokeWeight(0);
  fill(r,g,b);
  quad(x-x*.75, y-y*.75, x-x*.25, y-y*.75, xmiddle+xmiddle*.7, ymiddle, xmiddle*.3, ymiddle);
  quad(xmiddle*.3, ymiddle, xmiddle+xmiddle*.7, ymiddle, xmiddle+xmiddle*.625, ymiddle+ymiddle*.2, xmiddle*.45, ymiddle+ymiddle*.2);

  //face
  fill("#edccad");
  rect(xmiddle-xmiddle*.1,xmiddle,xmiddle*.2,ymiddle-ymiddle*.4);
  fill("#f7d6b7");
  rect(xmiddle*.712,y-y*.75,xmiddle*0.575,ymiddle*.38)
  arc(xmiddle, ymiddle-ymiddle*.125, xmiddle*0.575, ymiddle*0.575, 0, PI);
  strokeWeight(2);
  point(xmiddle+xmiddle*.1,ymiddle+ymiddle*.05);

  //tophair
  fill(0);
  strokeWeight(0);
  fill(r,g,b);
  quad(xmiddle-xmiddle*.125, ymiddle*.25, xmiddle+xmiddle*.275, ymiddle*.15, x-x*.25, y-y*.75, xmiddle*.7, y-y*.75);
  quad(x-x*.75, y-y*.75, x*.65, ymiddle*.35, xmiddle-xmiddle*.15, ymiddle*.45, xmiddle-xmiddle*.4, ymiddle*.7);
  triangle(xmiddle*.8, y-y*.75, x-x*.25, y-y*.75, x-x*.25,ymiddle-ymiddle*.15);

  //body
  fill("#f7d6b7");
  ellipse(xmiddle-xmiddle*.3,ymiddle+ymiddle*.4,xmiddle*.3,ymiddle*.3);
  ellipse(xmiddle+xmiddle*.3,ymiddle+ymiddle*.4,xmiddle*.3,ymiddle*.3);
  rect(xmiddle-xmiddle*.45,ymiddle+ymiddle*.4,xmiddle*.15,ymiddle);
  rect(xmiddle+xmiddle*.3,ymiddle+ymiddle*.4,xmiddle*.15,ymiddle);
  fill(0);
  rect(xmiddle*.7,ymiddle+ymiddle*.25,xmiddle-xmiddle*.4,ymiddle);
  rect(xmiddle-xmiddle*.45,ymiddle+ymiddle*.4,xmiddle*.15,ymiddle*.1);
  rect(xmiddle+xmiddle*.3,ymiddle+ymiddle*.4,xmiddle*.15,ymiddle*.1);
  quad(xmiddle-xmiddle*.45,ymiddle+ymiddle*.45, xmiddle-xmiddle*.3,ymiddle+ymiddle*.45, xmiddle-xmiddle*.3,ymiddle+ymiddle*.6, xmiddle-xmiddle*.52,ymiddle+ymiddle*.6);
  quad(xmiddle+xmiddle*.3,ymiddle+ymiddle*.45, xmiddle+xmiddle*.45,ymiddle+ymiddle*.45, xmiddle+xmiddle*.52,ymiddle+ymiddle*.6, xmiddle+xmiddle*.3,ymiddle+ymiddle*.6);
  fill("#f7d6b7");
  arc(xmiddle, ymiddle+ymiddle*.25, x-x*.8, y-y*.85, 0, PI);
  strokeWeight(2);
  stroke(60);
  line(xmiddle*.7,ymiddle+ymiddle*.45,xmiddle*.7,y)
  line(xmiddle+xmiddle*.3,ymiddle+ymiddle*.45,xmiddle+xmiddle*.3,y);

  //FEATURES
  strokeWeight(0);
  fill("pink");
  triangle(xmiddle, ymiddle-ymiddle*.025, xmiddle, ymiddle-ymiddle*.2, xmiddle+xmiddle*.050,ymiddle-ymiddle*.025);
  fill(0);
  arc(xmiddle-xmiddle*.15, ymiddle*.8, xmiddle*.1, ymiddle*.1, 0, PI);
  arc(xmiddle+xmiddle*.15, ymiddle*.8, xmiddle*.1, ymiddle*.1, 0, PI);
  noFill();
  strokeWeight(3);
  arc(xmiddle, ymiddle*.825, xmiddle*.085, xmiddle*.04, PI, 0);
  arc(xmiddle-xmiddle*.15, ymiddle*.8, xmiddle*.225, ymiddle*.075, PI, 0);
  arc(xmiddle+xmiddle*.15, ymiddle*.8, xmiddle*.225, ymiddle*.075, PI, 0);
  arc(xmiddle-xmiddle*.15, ymiddle*.8, xmiddle*.225, ymiddle*.2, 0, PI);
  arc(xmiddle+xmiddle*.15, ymiddle*.8, xmiddle*.225, ymiddle*.2, 0, PI);
  strokeWeight(0);
  fill("red");
  arc(xmiddle,ymiddle+ymiddle*.05, xmiddle*.125, ymiddle*.075, PI, 0)
  arc(xmiddle, ymiddle+ymiddle*.06, xmiddle*.075, ymiddle*.065, 0, PI);

  //necklace
  noFill();
  strokeWeight(3);
  stroke("gold");
  arc(xmiddle, ymiddle+ymiddle*.25, x-x*.9, y-y*.7, 0, PI);
  fill(80);
  quad(xmiddle,ymiddle+ymiddle*.56, xmiddle+xmiddle*.04,ymiddle+ymiddle*.65, xmiddle,ymiddle+ymiddle*.68, xmiddle-xmiddle*.04,ymiddle+ymiddle*.65);



}

function mousePressed(){
  r = random(255);
  g = random(255);
  b = random(255);
}
