var box;
function setup() {
  createCanvas(400,400);
  box= createSprite(200,200,30,40);
}

function draw() 
{
  background(30);
drawSprites();
if (keyIsDown(LEFT_ARROW)){
  box.position.x = box.position.x -5;
}
}




