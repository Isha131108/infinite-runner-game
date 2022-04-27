var bg,bgimg 
var boy;boyimg
var sweetimg,chocolateimg;
var sweet,chocolate;
var score;

function preload(){
bgimg=loadImage("background.png");
sweetimg=loadImage("sweet.png");
chocolateimg=loadImage("chocolate.png");
boyimg=loadImage("Running-1.png","Running-2.png");
}

function setup() {
createCanvas(600,400);
boy=createSprite(180,180,20,20);
boy.addImage(boyimg);
boy.scale=0.2

bg=createSprite(300,200,400,20);
bg.addImage(bgimg);
bg.velocityX=-3;

sweet=createSprite(500,300)
sweet.addImage(sweetimg);
sweet.scale = 0.1

chocolate=createSprite(300,300)
chocolate.addImage(chocolateimg)
chocolate.scale = 0.2
}

function draw() {
   
    text("score: "+ score, 500,50);
    if(chocolate.isTouching(boy)){
        

    }
    
    
    
    

if(bg.x<0){
bg.x=width/2
}



 drawSprites()
}