function setup() {
  createCanvas(800,400);
  movingRect=createSprite(400, 200, 50, 20);
  movingRect.shapeColor='red'
  movingRect.debug=true

   fixedRect=createSprite(400,200,20,50);
   fixedRect.shapeColor='red'
    fixedRect.debug=true

}

function draw() {
  background("black");
  
  movingRect.x=World.mouseX
  movingRect.y=World.mouseY

  if(movingRect.x-fixedRect.x <= movingRect.width/2 + fixedRect.width/2
    && fixedRect.x-movingRect.x <= movingRect.width/2 + fixedRect.width/2
    && movingRect.y-fixedRect.y <= movingRect.height/2 + fixedRect.height/2
    && fixedRect.y-movingRect.y <= movingRect.height/2 + fixedRect.height/2 ){
      fixedRect.shapeColor='yellow'
      movingRect.shapeColor='yellow'
  }
else{
  fixedRect.shapeColor='red'
  movingRect.shapeColor='red'
}
  drawSprites();
}



