var mouseImg,mouse,catImg,cat;
var gardenImg,garden;
function preload() {
   gardenImg = loadImage("images/garden.png");

   mouseImg = loadAnimation("images/mouse1.png");
   mouseImg2 = loadAnimation("images/mouse2.png",
                            "images/mouse3.png");
   mouseImg3 = loadAnimation("images/mouse4.png");

   catImg = loadAnimation("images/cat1.png");
   catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
   catImg3 = loadAnimation("images/cat4.png");                         
}

function setup(){
    createCanvas(1000,800);

// garden = createSprite(500,400,1000,800);
// garden.addImage(gardenImg); 

cat = createSprite(800,600);
cat.addAnimation("sitting",catImg);
cat.scale = 0.29;

mouse = createSprite(150,600);
mouse.addAnimation("sitting mouse",mouseImg);
mouse.changeAnimation("sitting mouse",mouseImg);
mouse.addAnimation("teasing mouse",mouseImg2);
//mouse.addAnimation("happy mouse",mouseImg3);
mouse.scale = 0.25;

}

function draw() {

    background( gardenImg );
    //Write condition hrry collide


    if(cat.x-mouse.x<(cat.width/2-mouse.width/2))
      {
        cat.addAnimation("happy",catImg3);
        cat.changeAnimation("happy",catImg3);
        cat.velocityX = 0;
        cat.x = mouse.x+150
        mouse.addAnimation("happy mouse",mouseImg3);
        mouse.changeAnimation("happy mouse",mouseImg3);
      } 
      
    
    drawSprites();
}


function keyPressed(){


if(keyCode === LEFT_ARROW){
  mouse.changeAnimation("teasing mouse",mouseImg2)
  cat.velocityX = -4;
  cat.addAnimation("running",catImg2);
  cat.changeAnimation("running",catImg2);
}


}