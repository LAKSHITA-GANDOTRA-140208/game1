var  dog1_img;
var dog1;
var bg;
var tk
var  ground, ground1, ground2;
var obs1;
var z1_img,z2_img,z3_img;
var zg;
var di;
var visibility=255;
var dog2;
var s1;
var gamestate=0;
function preload(){

dog1_img=loadAnimation("dog1.png","dog2.png");
bg=loadImage("bg.jpg");
tk=loadImage("track.png");
z1_img=loadImage("z1.png")
z2_img=loadImage("z2.png")
z3_img=loadImage("z3.png")
di=loadImage("dog1.png")
s1=loadSound("die.mp3");
}




function setup() {
  createCanvas(1200,600);
 dog1= createSprite(450,500, 50, 50);
 dog1.addAnimation("dog",dog1_img);
 dog1.addAnimation("img",di);
 ground=createSprite(1200,950,1200,1200);
 ground.addImage("ground",tk);
 ground.scale=3;
 ground.velocityX=-10;
 ground1=createSprite(1200,750,1200,1200);
 ground1.addImage("ground",tk);
 ground1.scale=3;
 ground1.velocityX=-10;
 ground2=createSprite(1200,550,1200,1200);
 ground2.addImage("ground",tk);
 ground2.scale=3;
 ground2.velocityX=-10;
 zg=new Group();
 
}

function draw() {
  background(bg); 
  dog1.depth=ground.depth;

  dog1.depth=dog1.depth+2;

  

  if(ground.x<0 && ground1.x<0 && ground2.x<0){
ground.x=1200;
ground1.x=1200;
ground2.x=1200;
  } 
  if(keyDown(UP_ARROW)){
dog1.y=dog1.y-50;
  }
if(keyDown(DOWN_ARROW)){
dog1.y=dog1.y+50;
}

  console.log(dog1.y)
  obs();


  if(dog1.isTouching(zg)){
    dog1.destroy();
   // delayTime(5)
    s1.play();
    
   // dog2=createSprite(450,500,50,50)
    //push();
   // visibility=visibility-5
  //  tint(255,visibility)
 // dog1.changeAnimation("img",di);
//  pop();
    
  }
  drawSprites();
}
function  obs(){

if(frameCount%70===0){
  x=random(1000,1200);
  y=random(520,100);

  
    obs1=createSprite(x,y);
    obs1.velocityX=-8;
  no=Math.round(random(1,3));
  switch(no){
case 1:obs1.addImage("obs",z1_img);
obs1.scale=0.5;
break;
case 2:obs1.addImage("obs",z2_img);
break;
case 3:obs1.addImage("obs",z3_img)
obs1.scale=0.3;
break;


  }
zg.add(obs1);

}

}
