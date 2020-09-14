
var player,player2;
var life = 100;
var complife = 100;
var buton,title;
var play =1,end = 0;
var gameState =0;
function preload(){
  backimg = loadImage("ring.jpg");
  playerimg = loadImage("plaimg/man1.png");
  playerimg2 = loadImage("plaimg/man2.png");
  playerimg3 = loadImage("plaimg/man3.png");
  playerimg4 = loadImage("plaimg/man4.png");
  compimg = loadImage("compimg/1.png");
  compimg2 = loadImage("compimg/2.png");
  compimg3 = loadImage("compimg/3.png");
  compimg4 = loadImage("compimg/4.png");
   
}


function setup() {
  createCanvas(1200,600);
  player = createSprite(200,400,10,10);
  player.addImage(playerimg4);
  player.scale = 0.5;
  player2 = createSprite(700,400,10,10);
  player2.addImage(compimg3);
  player2.scale = 0.5;
   buton = createButton("play");
   buton.position(400,200);   
   fill("red");
   title = createElement('h1');
   title.html("Real Boxing Game")
   title.position(400,20);       
}

function draw() {
 
  
    
   buton.mousePressed(()=>{
 
    title.hide();
    buton.hide();
     gameState = play;
   });

  
   if(gameState === play){
    background(backimg);
    textSize(23);
    fill("green");
    text("Your Life:"+life,180,40);
    textSize(23);
    fill("red");
    text("Comp Life:"+complife,780,40);
    drawSprites();
    
   }
   playercontrols();
   

}


function playercontrols(){
if(keyDown(75)){
  player.addImage(playerimg3);
}
else{
  player.addImage(playerimg4);
}
if(keyDown(RIGHT_ARROW)){
  player.x+=10
    }
    else{
   player.x+=0
    }

  if(keyDown(LEFT_ARROW)){
  player.x+=-10
  }
   else{
       player.x+=0
        }  
    if(player.x<=0){
      player.x = 200;
    }

}

function compcontrols(){

}
