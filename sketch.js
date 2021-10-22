var bongo;
var a,b,c;

function setup() {
  createCanvas(400,400);
  bongo= createSprite (200,200,20,20);
}

function draw() 
{
  background(a,b,c);
a=20;
b=30;
c=80;
  bongo.velocityX=3;
drawSprites();
}




