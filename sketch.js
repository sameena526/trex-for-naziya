var fixedRect, movingRect;
function setup() {
  createCanvas(800,400);
   fixedRect=createSprite(200,100,100,50);
   fixedRect.shapeColor="green";
   fixedRect.debug=true;
   movingRect=createSprite(500,100,50,100);
   movingRect.shapeColor="green";
   movingRect.debug=true;
}

function draw() {
  background(0);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2){
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
  }
  else{
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
  }
   console.log(movingRect.x);
  drawSprites();
}