/*story: 
alien in forest---gets ready to fly ship---spots ghost---power of ship low---collects food---escapes from ghost
*/
var bg, bdImg;
var alien, alienImg;
var ghost, ghoatImg;

function preload(){
bgImg = loadImage("bg.jpg");
alienImg = loadImage("aliennn.png");
ghostImg = loadImage("ghost2.png");
}

function setup() {
  createCanvas(displayWidth,displayHeight);

  bg = createSprite(displayWidth/2,displayHeight/2-170,200,200);
  bg.addImage(bgImg);
  bg.scale = 0.5;
  bg.velocityX = -2;

//create player n add image
alien = createSprite(200,displayHeight-130,10,10);
alien.addImage(alienImg);
alien.scale = 0.4;
//alien.velocityX = 7;

/* create enemy n add image
ghost = createSprite(500,600,10,10);
ghost.addImage(ghostImg);
ghost.scale = 0.2; */

}

function draw() {
  background("orange");

if(bg.x < displayWidth/2-200){
  bg.x  = displayWidth/2 + 250 ;
}
  drawSprites();
}

// when pressed space make the monkey jump
function keyPressed(){
  if(keyCode === 32){
      alien.velocityY = -2;
  }
} 