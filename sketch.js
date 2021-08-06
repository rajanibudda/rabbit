var garden,rabbit;
var gardenImg,rabbitImg;
var apples, leaves, applesImage, leavesImage, redLeaf, redleafImage

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");

  applesImage = loadImage("apple.png");
  leavesImage = loadImage("orangeLeaf.png");
  redleafImage = loadImage("redImage.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}
//function to spawn the apples
function createApples(){
if(frameCount % 50 == 0){
  apples = createSprite(300,200,20,20)
  apples.velocityY=4
  apples.addImage(applesImage);
  apples.y = Math.round(random(10,200))
  apples.scale = 0.1;
  apples.lifetime = 150;
  
}

}

//function to spawn the leaves
function createLeaves(){
  if(frameCount % 50 == 0){
    leaves = createSprite(100,225,20,20)
    leaves.velocityY=4;
    leaves.addImage(leavesImage);
    leaves.y = Math.round(random(20,220))
    leaves.scale = 0.1;
    leaves.lifetime = 150;
    
  }
  

}

//function to spawn the redleaves
function createredLeaves(){
  if(frameCount % 50 == 0){
    redLeaf = createSprite(200,105,20,20);
    redLeaf.velocityY=4;
    redLeaf.addImage(redleafImage);
    redLeaf.y = Math.round(random(10,220))
    redLeaf.scale = 0.1;
    redLeaf.lifetime = 150;
    
  }
  

}

function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  rabbit.x = mouseX
  
  createApples();
  createLeaves();
  createredLeaves();
  
  drawSprites();
}