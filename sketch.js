var movingRect,fixedRect;
var rect1,rect2,rect3,rect4

function setup() {
  createCanvas(600,600);

  movingRect = createSprite(100,300,90,40);
  movingRect.shapeColor = "red";

  fixedRect = createSprite(300,300,30,70);
  fixedRect.shapeColor = "red"
  movingRect.velocityX  = 4
  fixedRect.velocityX = -4

  rect1 = createSprite(100,100,50,50);
  rect1.shapeColor = "red";

  rect2 = createSprite(200,100,50,50);
  rect2.shapeColor = "red";

  rect3 = createSprite(300,100,50,50)
  rect3.shapeColor = "blue"

  rect4 = createSprite(400,100,50,50)
  rect4.shapeColor = "green"
  rect3.velocityX = 4
  rect4.velocityX = -4
}


function draw() {
  background("skyblue"); 
  bounceOff(rect3,rect4)
  
  rect1.x = mouseX;
  rect1.y = mouseY;

  
  /*if(isTouching(rect1,rect2))
  {
    rect1.shapeColor = "black";
    rect2.shapeColor = "black"
  }
  else{
    rect1.shapeColor = "red";
    rect2.shapeColor = "red"
  }*/
  console.log(movingRect.x - fixedRect.x)


  drawSprites();
}


