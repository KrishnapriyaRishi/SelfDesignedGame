var path,boy,cash,diamonds,jewelry,sword;
var pathImg,boyImg,cashImg,diamondsImg,jewelryImg,swordImg;
var boyImg2;
var bulletImg,bullet;
var zombie;
var zombieImg;
var bulletGroup;
var walk;
var endImg,end;
var bkSong;

var homeImg;
var home;
var muteImg;


var zombie2,zombie3,zombie4,zombie5;
var zombie_Img,zombImg;
var lastZombie;
var zombieGroup;
var arrowZombie;
var eatSound;
//Game States
var PLAY=1;
var END=0;
var gameState=1;
var gun=6;
var score=0;
var mute_btn;

function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("shooting2.png","shooting3.png","shooting4.png");
 boyImg2 = loadImage("man1.png");
  endImg =loadAnimation("end.png");
  bulletImg = loadImage("bullet1.png");
  zombieImg = loadImage("zombie1.png");
  zombie_Img = loadImage("zombie2.png");
  zombImg = loadImage("zombie3.png");
  lastZombie = loadImage("zombie4.png");
arrowZombie = loadImage("zombie5.png");
bkSong = loadSound("bgmusic.mp3");
eatSound = loadSound("eatSound.mp3");
homeImg = loadImage("home.png");
//muteImg = loadImage("mute.png");

 // walk = loadAnimation("zombie1.png","zombie2.png","zombie3.png","zombie4.png","zombie5.png","zombie6.png");


}

function setup(){
  
  createCanvas(1200, 600);


bkSong.play();
bkSong.setVolume(0.5);


//creating boy running
boy = createSprite(231,380,20,20);

boy.addImage(boyImg2)
boy.scale=0.60;

boy.addAnimation("SahilRunning",boyImg);

zombie= createSprite(1111,380,20,20);
zombie.velocityX=-3
zombie.addImage(zombieImg);
zombie.scale = 0.8

zombie2= createSprite(950,400,20,20);
 zombie2.velocityX=-5
 zombie2.addImage(zombie_Img);
 zombie2.scale = 0.3;


 zombie3= createSprite(1100,400,20,20);
  zombie3.velocityX=-4
  zombie3.addImage(zombImg);
  zombie3.scale = 0.1;

  zombie4= createSprite(700,400,20,20);
  zombie4.velocityX=-4
  zombie4.addImage(lastZombie);
  zombie4.scale = 0.5;
  
  zombie5= createSprite(1900,400,20,20);
  zombie5.velocityX=-4
   zombie5.addImage(arrowZombie);
   zombie5.scale = 0.3;

   mute_btn=createImg("mute.png");
 mute_btn.position(1100,20);
 mute_btn.size(50,50);
 mute_btn.mouseClicked(mute);

  
  
 
//zombie.addAnimation("zombies",walk);


bulletGroup = createGroup();
cashG=new Group();
diamondsG=new Group();
jewelryG=new Group();
swordGroup=new Group();

}

function draw() {
  //background(pathImg);

  if(gameState===PLAY){

  background(pathImg);

  textSize(50)
  fill("green")
  text("Gun: "+ gun,30,70);

  fill("red")
  text("Score: "+ score,500,70);
  

 if(keyDown("space")){
  shootBullet();
}



if(zombie.collide(bulletGroup)){

 


    gun=gun-1;
  //score=score+1;

 

  zombie.visible = false;
  bulletGroup.destroyEach();


 
   //fill("red")
   
 
  
   

}

if(zombie2.collide(bulletGroup)){

  gun=gun-1;
  score=score+1;

  


  zombie2.visible = false;
  bulletGroup.destroyEach();

}


if(zombie3.collide(bulletGroup)){

  gun=gun-1;
 score=score+1;



  zombie3.visible = false;
  bulletGroup.destroyEach();
  zombie4.visible=false;

}

if(zombie4.collide(bulletGroup)){

  gun=gun-1;
 score=score+1;

  zombie4.visible = false;
  bulletGroup.destroyEach();

}

if(zombie5.collide(bulletGroup)){

  gun=gun-1;
  score=score+1;

  zombie5.visible = false;
  bulletGroup.destroyEach();

  text("YOU KILLED BOSS" ,500,500)

}

if(gun === 1){

bulletGroup.destroyEach();
gameWin();

  }

if(boy.collide(zombie)){

eatSound.play();

if(zombie=!null){

  zombie=null;
}

  zombie2.visible = false;
  zombie3.visible = false;
  zombie4.visible = false;
  zombie.visible = false;

gameOver()
boy.visible = false;


}

if(boy.collide(zombie2)){

  eatSound.play();

  if(zombie2=!null){

    zombie2=null;
  }
  gameOver()
  bulletGroup.destroyEach();

  boy.visible = false;
  
  zombie2.visible = false;
  zombie3.visible = false;
  zombie4.visible = false;
  zombie.visible = false;
  }
  
  if(boy.collide(zombie3)){

    eatSound.play();

    if(zombie3=!null){

zombie3=null;

    }

    gameOver()
    bulletGroup.destroyEach();

    boy.visible = false;
    
  zombie2.visible = false;
  zombie3.visible = false;
  zombie4.visible = false;
  zombie.visible = false;
    }

    if(boy.collide(zombie4)){

      eatSound.play();

      if(zombie4=!null){

        zombie4=null;
      }
      //eatSound.setVolume(0.1);


      gameOver()
      bulletGroup.destroyEach();

      boy.visible = false;
      
  zombie2.visible = false;
  zombie3.visible = false;
  zombie4.visible = false;
  zombie.visible = false;
      }

      



  edges= createEdgeSprites();
  boy.collide(edges);
  
  //code to reset the background




  }



 
    
  
  drawSprites();
 // textSize(20);
 // fill(255);

  }

  function shootBullet(){
    bullet= createSprite(250, 500, 50,20)
    bullet.y= boy.y-45
    bullet.addImage(bulletImg)
    bullet.scale=0.12
    bullet.velocityX= 5;
    bulletGroup.add(bullet)
  }


function createCash() {
  if (World.frameCount % 200 == 0) {
  var cash = createSprite(Math.round(random(50, 350),40, 10, 10));
  cash.addImage(cashImg);
  cash.scale=0.12;
  cash.velocityY = 3;
  cash.lifetime = 150;
  cashG.add(cash);
  }
}

function createDiamonds() {
  if (World.frameCount % 320 == 0) {
  var diamonds = createSprite(Math.round(random(50, 350),40, 10, 10));
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.03;
  diamonds.velocityY = 3;
  diamonds.lifetime = 150;
  diamondsG.add(diamonds);
}
}

function createjewelry() {
  if (World.frameCount % 410 == 0) {
  var jewelry = createSprite(Math.round(random(50, 350),40, 10, 10));
  jewelry.addImage(jewelryImg);
  jewelry.scale=0.13;
  jewelry.velocityY = 3;
  jewelry.lifetime = 150;
  jewelryG.add(jewelry);
  }
}

function createSword(){
  if (World.frameCount % 530 == 0) {
  var sword = createSprite(Math.round(random(50, 350),40, 10, 10));
  sword.addImage(swordImg);
  sword.scale=0.1;
  sword.velocityY = 3;
  sword.lifetime = 150;
  swordGroup.add(sword);
  }
}

function gameWin(){


    
    swal({
      title: `YOU WON`,
      text: " YOU KILLED BOSE",
      imageUrl:
      "https://raw.githubusercontent.com/vishalgaddam873/p5-multiplayer-car-race-game/master/assets/cup.png",
      imageSize: "100x100",
      confirmButtonText: "Play Again"
      
    },
    function(isConfirm) {
      if (isConfirm) {
        location.reload();
      }
    }

    );
    
    }


    function gameOver(){

      swal({
        title: `Game Over`,
        text: "Oops you lost the game....!!!",
        text: "ZOMBIE EAT YOUR BRAIN  ",
        imageUrl:
          "https://cdn.shopify.com/s/files/1/1061/1924/products/Thumbs_Down_Sign_Emoji_Icon_ios10_grande.png",
        imageSize: "100x100",
        confirmButtonText: "Play Again"
      },
      function(isConfirm) {
        if (isConfirm) {
          location.reload();
        }

      }
      );
      
    }

    function mute(){


      if(bkSong.isPlaying()){
    
        bkSong.stop();
      }else{
    
        bkSong.play();
      }

    }