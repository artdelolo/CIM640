var x = 100;
var y = 100;
var xmiddle = x/2;
var ymiddle = y/2;

function setup() {
  // put setup code here
  createCanvas(x,y);
  background("#58FAF4");
  strokeWeight(0);




}

function draw() {
  // put drawing code here

  fill("yellow");
  ellipse(xmiddle, ymiddle+ymiddle*.25, xmiddle+xmiddle*.1,ymiddle+ymiddle*.15, y-y*.75);


}
