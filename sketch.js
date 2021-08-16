var boy,boy_leftandright;

var pathImage;

function preload(){
  
   boy_leftandright = loadAnimation("runner-1.png","runner-2.png")

   pathImage = loadImage("path.png")

   
}

function setup(){

  createCanvas(400,400);
  
    path = createSprite (200,200,30,40);

    path.addImage (pathImage)

    path.velocityY = 4

    path.scale = 1.2

    boy = createSprite (300,180,50,80);

    boy.addAnimation("leftandright",boy_leftandright)

    boy.scale = 0.07

     leftBoundary = createSprite(0,0,100,800);

     leftBoundary.visible = false;
   
     rightBoundary = createSprite(410,0,100,800);

     rightBoundary.visible = false;

  }


function draw() {
 
  background(0);

   path.velocityY = 4;

   boy.x = World.mouseX;

   edges = createEdgeSprites();

   boy.collide(edges[3]);

   boy.collide(leftBoundary);

   boy.collide(rightBoundary);

  
  if (path.y > 400){

    path.y = height/2;
  }
  

drawSprites()
}