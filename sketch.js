var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  car = createSprite(100,200,50,50);
  car.shapeColor = "red";
  car.velocityX = 5;
  wall = createSprite(600,200,30,300);
  wall.shapeColor = "pink"
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor ="red";
    fixedRect.shapeColor = "red"
  }
  else{
    movingRect.shapeColor ="green";
    fixedRect.shapeColor = "green"
  }
  
  if(isTouching(car,wall)){
    car.velocityX = 0;
  }

  drawSprites();
}
function isTouching(object1,object2){ //getting the values from the instruction which calls this function
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
      return true;
  }
  else {
      return false;
  }
}