var bgImg, bathingAnim, brushAnim, eatingAnim, gymmingAnim, sleepingAnim, movingAnim, astronaut;

function preload(){
  bgImg = loadImage("iss.png");
  bathingAnim = loadAnimation("bath1.png","bath2.png");
  brushAnim = loadAnimation("brush.png");
  eatingAnim = loadAnimation("eat1.png","eat2.png","drink1.png","drink2.png");
  gymmingAnim = loadAnimation("gym11.png","gym12.png");
  sleepingAnim = loadAnimation("sleep.png");
  movingAnim = loadAnimation("move.png","move1.png");
}
function setup() {
  createCanvas(800,400);
  astronaut = createSprite(400, 200);
  astronaut.addAnimation("sleep",sleepingAnim);
  astronaut.scale = 0.1;
}

function draw() {
  background(bgImg);

  edges=createEdgeSprites();
  astronaut.bounceOff(edges);

  textSize(15);
  fill("white");
  text("INSTRUCTIONS:",10,25);
  textSize(12);
  text("Up Arrow = Brushing",10,40);
  text("Down Arrow = Gymming",10,50);
  text("Left Arrow = Eating",10,60);
  text("Right Arrow = Bathing",10,70);
  text("m key = moving",10,80);

  if(keyDown(UP_ARROW)){
    astronaut.addAnimation("brush",brushAnim);
    astronaut.changeAnimation("brush");
    astronaut.y = 250;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown(DOWN_ARROW)){
    astronaut.addAnimation("gym",gymmingAnim);
    astronaut.changeAnimation("gym");
    astronaut.x = 400;
    astronaut.y = 250;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown(LEFT_ARROW)){
    astronaut.addAnimation("eat",eatingAnim);
    astronaut.changeAnimation("eat");
    astronaut.frameDelay = 10;
    astronaut.y = 250;
    astronaut.x = 200;
  }
  if(keyDown(RIGHT_ARROW)){
    astronaut.addAnimation("bath",bathingAnim);
    astronaut.changeAnimation("bath");
    astronaut.frameDelay = 10;
    astronaut.y = 250;
    astronaut.x = 600;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("m")){
    astronaut.addAnimation("move",movingAnim);
    astronaut.changeAnimation("move");
    astronaut.velocityX = 1;
    astronaut.velocityY = -1;
  }
  drawSprites();
}