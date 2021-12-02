var START = 1;
var TEXT = 2;
var PLAY = 3;
var END = 0;
var gameState = START;

//ash
var ash,ash2,ash3,ash4,ash5;
var ash_right,ash_walk_right,ash_left,ash_walk_left,ash_jump_left,ash_jump_right,ash_back;
var ash_pokeball1,ash_pokeball2,ash_pokeball3;
var pokeball_right,pokeball_left_right_foot;
//james
var james;
var james_image;
//pikachu
var pikachu;
var pikachu_image;
var pikachu_battle;
var pikachu_battle_image;
//rattata
var rattata1,rattata2,rattata3,rattata4,rattata5,rattata6,rattata7;
var rattata_image,rattata_flip;
//greninja
var greninja;
var greninja_images;
// master ball
var masterball,masterball2;
var masterball_image;
//cage
var cage;
var cage_image;
//stage
var stand1,stage1_image,stand2,stage2_image,stand3,stage3_image,stand4,stage4_image,stand5,stage5_image,stand6,stage6_image;
//ladder
var ladder1,ladder2,ladder3,ladder4,ladder5,ladder6,ladder7;
var ladder_image;

//angle
var angle = 45;

// ground
var ground1,ground2,ground3,ground4,ground5,ground6,ground7;

//life count
var life1,life2,life3;
var life_image;
var lives = 3;

//time

var time = 350;
var time2 = 300;

//pokemon battle
var battle;
var battle_image;

//new foe
var foe;
var foe_image;

// moves
var giga_impact,giga_impact_image;
var feint_attack;
var hydro_pump;
var iron_tail,iron_tail_image;
var night_slash;
var quick_attack,quick_attack_image;
var surf;
var thunderbolt,thunderbolt_image;

// greninja health

var greninja_health;
var greninja_full_health_image;


// pikachu health

var pikachu_health;
var pikachu_full_health_image;

// pressed the button

var time4 = 90;


// pokemon logo
var pokemon;
var pokemon_image;

// title
var delta_diamond;
var delta_diamond_image;

// start

var start;
var start_image;

// sounds
let background_music;

let jump;

let catching;

let life_lost;

let new_foe;

let attack;

let battle_music;

let over;

// text

let write = 'The aim of the game is to climb to the top of the tower and save pikachu.You must avoid all obstacles. The obstacles are a group of rattata blocking the way up. You must jump over the rattata to get past. Along the way you will find two masterballs.If you pick up the masterballs you will be immune to the rattata to the amount of time you have.The amount of time is listed on the top right of your screen. Also on the top right you have your lives. If you touch a rattata without a masterball then you will lose a life and start at the beginning. If you lose all three of your lives then the game is over. But if you reach the top you will battle against another pokemon. Press Space to start the game';


 //health bar

 let health = 100;
 let maxHealth = 100;

 let health2 = 100;
 let maxHealth2 = 100;

 //restart
 var gameover,gameover_image;
 var restart,restart_image;

 
 


function preload(){

// sounds
soundFormats("mp3");
battle_music = loadSound("sound/battle_music.mp3");
background_music = loadSound("sound/background.mp3");

jump = loadSound("sound/jump.mp3");

catching = loadSound("sound/catching.mp3");

life_lost = loadSound("sound/life_lost.mp3");

new_foe = loadSound("sound/new_foe.mp3");

attack = loadSound("sound/attacking.mp3");



over = loadSound("sound/game_over.mp3");

//pokemon logo
pokemon_image = loadImage("images/pokemon_logo.png");

// Detla Diamond
delta_diamond_image = loadImage("images/delta_diamond.png");

// start
start_image = loadImage("images/start.png");



// all of the ash images
  ash_right = loadImage("images/right.png");
  ash_walk_right = loadAnimation("images/right_right_foot.png","images/right_left_foot.png");
  ash_left = loadImage("images/left.png");
  ash_walk_left = loadAnimation("images/left_left_foot.png","images/left_right_foot.png");
  ash_jump_left = loadImage("images/left_right_foot.png");
  ash_jump_right = loadImage("images/right_left_foot.png");
  ash_back = loadImage("images/back.png");
// all the stages
stage1_image = loadImage("images/stage1.png");


stage2_image = loadImage("images/stage2.png");


stage3_image = loadImage("images/stage3.png");


stage4_image = loadImage("images/stage4.png");

stage5_image = loadImage("images/stage5.png");

stage6_image = loadImage("images/stage6.png");



// all the ladders
ladder_image = loadImage("images/ladder.png");



// all the james images
james_image = loadImage("images/james front.png");


// the pikachu images
pikachu_image = loadAnimation("images/pikachu1.png","images/pikachu2.png","images/pikachu3.png","images/pikachu4.png","images/pikachu5.png","images/pikachu6.png","images/pikachu7.png","images/pikachu8.png","images/pikachu9.png","images/pikachu10.png","images/pikachu11.png","images/pikachu12.png","images/pikachu13.png","images/pikachu14.png","images/pikachu15.png","images/pikachu17.png","images/pikachu17.png");



// all of the rattata images
rattata_image = loadAnimation("images/rattata1.png","images/rattata2.png","images/rattata3.png","images/rattata4.png");
rattata_flip = loadAnimation("images/rattata1_flip.png","images/rattata2_flip.png","images/rattata3_flip.png","images/rattata4_flip.png");


//the greninja images
greninja_images = loadAnimation("images2/greninja_0.png","images2/greninja_1.png","images2/greninja_2.png","images2/greninja_3.png","images2/greninja_4.png","images2/greninja_5.png","images2/greninja_6.png","images2/greninja_7.png","images2/greninja_8.png","images2/greninja_9.png","images2/greninja_10.png","images2/greninja_11.png","images2/greninja_12.png","images2/greninja_13.png","images2/greninja_14.png","images2/greninja_15.png","images2/greninja_16.png","images2/greninja_17.png","images2/greninja_18.png","images2/greninja_19.png","images2/greninja_20.png","images2/greninja_21.png","images2/greninja_22.png","images2/greninja_23.png","images2/greninja_24.png","images2/greninja_25.png","images2/greninja_26.png","images2/greninja_27.png","images2/greninja_28.png","images2/greninja_29.png","images2/greninja_30.png","images2/greninja_31.png","images2/greninja_32.png","images2/greninja_33.png","images2/greninja_34.png","images2/greninja_35.png","images2/greninja_36.png","images2/greninja_37.png","images2/greninja_38.png","images2/greninja_39.png","images2/greninja_40.png")


//the cage image
cage_image = loadImage("images/cage.png");

// the masterball image
masterball_image = loadImage("images/master ball.png");

// life image
life_image = loadImage("images/front.png");

//ash pokeball image
pokeball_right = loadImage("images/pokeball_right.png");
pokeball_left_right_foot = loadAnimation("images/pokeball_left_foot.png","images/pokeball_right_foot.png");

//pokemon stage
battle_image = loadImage("images/battle_ground.jpg");

// new foe
foe_image = loadImage("images/new_foe.jpg");

//pikachu battle image
pikachu_battle_image = loadAnimation("images3/pikachu_01.png","images3/pikachu_02.png","images3/pikachu_03.png","images3/pikachu_04.png","images3/pikachu_05.png","images3/pikachu_06.png","images3/pikachu_07.png","images3/pikachu_08.png","images3/pikachu_09.png","images3/pikachu_10.png","images3/pikachu_11.png","images3/pikachu_12.png","images3/pikachu_13.png","images3/pikachu_14.png","images3/pikachu_15.png","images3/pikachu_16.png","images3/pikachu_17.png","images3/pikachu_18.png","images3/pikachu_19.png","images3/pikachu_20.png","images3/pikachu_21.png","images3/pikachu_22.png","images3/pikachu_23.png","images3/pikachu_24.png","images3/pikachu_25.png","images3/pikachu_26.png","images3/pikachu_27.png","images3/pikachu_28.png","images3/pikachu_29.png","images3/pikachu_30.png","images3/pikachu_31.png","images3/pikachu_32.png","images3/pikachu_33.png","images3/pikachu_34.png","images3/pikachu_35.png","images3/pikachu_36.png","images3/pikachu_37.png","images3/pikachu_38.png","images3/pikachu_39.png","images3/pikachu_40.png","images3/pikachu_41.png","images3/pikachu_42.png","images3/pikachu_43.png","images3/pikachu_44.png","images3/pikachu_45.png","images3/pikachu_46.png","images3/pikachu_47.png","images3/pikachu_48.png","images3/pikachu_49.png","images3/pikachu_50.png","images3/pikachu_51.png","images3/pikachu_52.png","images3/pikachu_53.png","images3/pikachu_54.png","images3/pikachu_55.png","images3/pikachu_56.png","images3/pikachu_57.png","images3/pikachu_58.png","images3/pikachu_59.png","images3/pikachu_60.png","images3/pikachu_61.png","images3/pikachu_62.png","images3/pikachu_63.png","images3/pikachu_64.png")

//moves

giga_impact_image = loadImage("images/giga_impact.jpg");
iron_tail_image = loadImage("images/iron_tail.jpg");
quick_attack_image = loadImage("images/quick_attack.jpg");
thunderbolt_image = loadImage("images/thunderbolt.png");


// healths
greninja_full_health_image = loadImage("images/greninja_full.jpg");


pikachu_full_health_image = loadImage("images/pikachu_full_health.jpg");


//restart
gameover_image = loadImage("images/gameOver.png");
restart_image = loadImage("images/restart.png");

}

function setup() {
  createCanvas(800,900);
  

// restart

gameover = createSprite(400,350,100,100);
gameover.addImage("gameover",gameover_image);
gameover.scale = 0.5;
gameover.visible = false;

restart = createSprite(400,400,100,100);
restart.addImage("restart",restart_image);
restart.scale = 0.5;
restart.visible = false;




  // pokemon logo

  pokemon = createSprite(400,300,50,50);
  pokemon.addImage("logo",pokemon_image);
  pokemon.scale = 0.5;

  // delta diamond
  delta_diamond = createSprite(400,450,50,50);
  delta_diamond.addImage("title",delta_diamond_image);
  delta_diamond.scale = 0.5;

  //start
  start = createSprite(400,550,50,50);
  start. addImage("start",start_image);
  start.scale = 0.5;
  



  // the james sprites
  james = createSprite(230,160,30,30);
  james.addImage("front",james_image);
  james.scale = 0.14;
  james.visible = false;


// the ground

ground1 = createSprite(400,900,790,5);
ground1.visible = false;

ground2 = createSprite(350,785,700,5);
ground2.rotation = angle - 42;
ground2.visible = false;


ground3 = createSprite(430,640,700,5);
ground3.rotation = angle - 47;
ground3.visible = false;


ground4 = createSprite(350,500,700,5);
ground4.rotation = angle - 42;
ground4.visible = false;

ground5 = createSprite(430,340,700,5);
ground5.rotation = angle - 47;
ground5.visible = false;

ground6 = createSprite(550,210,300,5);
ground6.rotation = angle - 42;
ground6.visible = false;

ground7 = createSprite(200,200,400,5);
ground7.visible = false;

//the stands
  stand1 = createSprite(350,800,300,5);
stand1.addImage("stage1", stage1_image);
stand1.scale = 0.5;
stand1.visible = false;


stand2 = createSprite(430,650,300,5);
stand2.addImage("stage2", stage2_image);
stand2.scale = 0.75;
stand2.visible = false;


stand3 = createSprite(350,510,300,5);
stand3.addImage("stage3", stage3_image);
stand3.scale = 0.75;
stand3.visible = false;




stand4 = createSprite(430,350,300,5);
stand4.addImage("stage4", stage4_image);
stand4.scale = 0.75;
stand4.visible = false;

stand5 = createSprite(350,220,300,5);
stand5.addImage("stage5", stage5_image);
stand5.scale = 0.75;
stand5.visible = false;


stand6 = createSprite(430,100,300,5);
stand6.addImage("stage6", stage6_image);
stand6.scale = 0.75;
stand6.visible = false;

// the master ball
masterball = createSprite(100,560,30,30);
masterball.addImage("masterball1",masterball_image);
masterball.scale = 0.11;
masterball.visible = false;

//masterball.debug = true;
masterball.setCollider("circle",0,0,130);

masterball2 = createSprite(100,270,30,30);
masterball2.addImage("masterball1",masterball_image);
masterball2.scale = 0.11;
masterball2.visible = false;

//masterball2.debug = true;
masterball2.setCollider("circle",0,0,130);


// the ladders
ladder1 = createSprite(716,880,10,50);
ladder1.addImage("ladder1",ladder_image);
ladder1.scale = 0.3;
ladder1.visible = false;

ladder2 = createSprite(50,720,10,50);
ladder2.addImage("ladder2",ladder_image);
ladder2.scale = 0.27;
ladder2.visible = false;

ladder3 = createSprite(725,580,10,50);
ladder3.addImage("ladder3",ladder_image);
ladder3.scale = 0.27;
ladder3.visible = false;

ladder4 = createSprite(50,420,10,50);
ladder4.addImage("ladder4",ladder_image);
ladder4.scale = 0.27;
ladder4.visible = false;

ladder5 = createSprite(725,280,10,50);
ladder5.addImage("ladder5",ladder_image);
ladder5.scale = 0.27;
ladder5.visible = false;

ladder6 = createSprite(370,100,10,70);
ladder6.addImage("ladder6",ladder_image);
ladder6.scale = 0.36;
ladder6.visible = false;






// pikachu
pikachu = createSprite(120,130,30,30);
pikachu.addAnimation("pikachu",pikachu_image);
pikachu.scale = 0.13;
pikachu.visible = false;


//cage
cage = createSprite(120,130,30,30);
cage.addImage("cage",cage_image);
cage.scale = 0.6;
cage.visible = false;


//rattata
rattata1 = createSprite(600,770,30,30);
rattata1.addAnimation("rattata",rattata_image);
rattata1.addAnimation("rattata_flip",rattata_flip);
rattata1.scale = 0.19;
rattata1.velocityX = 1;
rattata1.visible = false;

rattata2 = createSprite(200,540,30,30);
rattata2.addAnimation("rattata",rattata_image);
rattata2.addAnimation("rattata_flip",rattata_flip);
rattata2.scale = 0.19;
rattata2.velocityX = -1;
rattata2.velocityY = rattata2.velocityY + 0.8;
rattata2.visible = false;



rattata3 = createSprite(650,500,30,30);
rattata3.addAnimation("rattata",rattata_image);
rattata3.addAnimation("rattata_flip",rattata_flip);
rattata3.scale = 0.19;
rattata3.velocityX = -1;
rattata3.velocityY = rattata3.velocityY + 0.8;
rattata3.visible = false;

rattata4 = createSprite(230,400,30,30);
rattata4.addAnimation("rattata",rattata_image);
rattata4.addAnimation("rattata_flip",rattata_flip);
rattata4.scale = 0.19;
rattata4.velocityX = -1;
rattata4.velocityY = rattata4.velocityY + 0.8;
rattata4.visible = false;

rattata5 = createSprite(550,400,30,30);
rattata5.addAnimation("rattata",rattata_image);
rattata5.addAnimation("rattata_flip",rattata_flip);
rattata5.scale = 0.19;
rattata5.velocityX = -1;
rattata5.velocityY = rattata5.velocityY +0.8;
rattata5.visible = false;

rattata6 = createSprite(320,250,30,30);
rattata6.addAnimation("rattata",rattata_image);
rattata6.addAnimation("rattata_flip",rattata_flip);
rattata6.scale = 0.19;
rattata6.velocityX = -1;
rattata6.velocityY = rattata6.velocityY + 0.8;
rattata6.visible = false;

rattata7 = createSprite(590,250,30,30);
rattata7.addAnimation("rattata",rattata_image);
rattata7.addAnimation("rattata_flip",rattata_flip);
rattata7.scale = 0.19;
rattata7.velocityX = -1;
rattata7.velocityY = rattata7.velocityY +0.8;
rattata7.visible = false;


// the ash sprites
ash = createSprite(100, 860, 30, 30);
ash.addImage("right",ash_right);
ash.scale = 0.11;
ash.addAnimation("right_walk",ash_walk_right);
ash.scale = 0.11;
ash.addAnimation("left_walk",ash_walk_left);
ash.scale = 0.11;
ash.addImage("left",ash_left);
ash.scale = 0.11;
ash.addImage("left_jump",ash_jump_left);
ash.scale = 0.11;
ash.addImage("right_jump",ash_jump_right);
ash.scale = 0.11;
ash.addImage("back",ash_back);
ash.scale = 0.11;
ash.addImage("pokeball_left",pokeball_right);
ash.scale = 0.11;
ash.addAnimation("pokeball_left_right_foot",pokeball_left_right_foot);
ash.scale = 0.11;
ash.visible = false;

// life sprite

life1 = createSprite(600,100,80,80);
life1.addImage("life",life_image);
life1.scale = 0.13;
life1.visible = false;

life2 = createSprite(655,100,80,80);
life2.addImage("life",life_image);
life2.scale = 0.13;
life2.visible = false;

life3 = createSprite(705,100,80,80);
life3.addImage("life",life_image);
life3.scale = 0.13;
life3.visible = false;

//battle ground
battle = createSprite(400,400,100,100);
battle.addImage("battle",battle_image);
battle.scale = 2;
battle.visible = false;

//geninja
greninja = createSprite(660,240,100,100);
greninja.addAnimation("greninja",greninja_images);
greninja.scale = 2;
greninja.visible = false;

//foe
foe = createSprite(400,400,100,100);
foe.addImage("foe",foe_image);
foe.scale = 0.55;
foe.visible = false;

// pikachu battle
pikachu_battle = createSprite(200,400,100,100);
pikachu_battle.addAnimation("pikachu_battle",pikachu_battle_image);
pikachu_battle.scale = 0.5;
pikachu_battle.visible = false;


// moves
giga_impact = createSprite(20,600,100,50);
giga_impact.addImage("giga",giga_impact_image);
giga_impact.scale = 0.7;
giga_impact.visible = false;


iron_tail = createSprite(20,660,100,50);
iron_tail.addImage("iron",iron_tail_image);
iron_tail.scale = 0.7;
iron_tail.visible = false;


quick_attack = createSprite(200,600,100,50);
quick_attack.addImage("quick",quick_attack_image);
quick_attack.scale = 0.7;
quick_attack.visible = false;


thunderbolt = createSprite(200,660,100,50);
thunderbolt.addImage("thunder",thunderbolt_image);
thunderbolt.scale = 0.7;
thunderbolt.visible = false;



// health

greninja_health = createSprite(100,130,100,100);
greninja_health.addImage("full",greninja_full_health_image);
greninja_health.scale = 0.5;
greninja_health.visible = false;

pikachu_health = createSprite(640,630,100,100);
pikachu_health.addImage("full",pikachu_full_health_image);
pikachu_health.scale = 0.7;
pikachu_health.visible = false;




}

function draw() {
    

  if(gameState === START){
    background(185,242,255);
    
    
    if(mousePressedOver(start)){
      pokemon.visible = false;
      start.visible = false;
      delta_diamond.visible = false;
      gameState = TEXT;
    }
    
  
  }
  else if(gameState === TEXT){
    fill("black");
    textSize(30);
    text(write, 100, 100, 600, 800);

    if(keyDown("space")){
      gameState = PLAY;
      background_music.play();
      background_music.loop();
      background_music.setVolume(0.1);
      userStartAudio();
      
    }
  }
  else if(gameState === PLAY){
  background("black");
  
  // rattata collide
 rattata1.collide(ground2);
 rattata2.collide(ground3);
 rattata3.collide(ground3);
 rattata4.collide(ground4);
 rattata5.collide(ground4);
 rattata6.collide(ground5);
 rattata7.collide(ground5);

  
  // bring back all of the sprites
  ground1.visible = true;
  ground2.visible = false;
  ground3.visible = false;
  ground4.visible = false;
  ground5.visible = false;
  ground6.visible = false;
  ground7.visible = false;
  stand1.visible = true
  stand2.visible = true;
  stand3.visible = true;
  stand4.visible = true;
  stand5.visible = true;
  stand6.visible = true;
  rattata1.visible = true;
  rattata2.visible = true;
  rattata3.visible = true;
  rattata4.visible = true;
  rattata5.visible = true;
  rattata6.visible = true;
  rattata7.visible = true;
  ash.visible = true;
  masterball.visible = true;
  masterball2.visible = true;
  ladder1.visible = true;
  ladder2.visible = true;
  ladder3.visible = true;
  ladder4.visible = true;
  ladder5.visible = true;
  ladder6.visible = true;
  pikachu.visible = true;
  cage.visible = true;
  james.visible = true;
  life1.visible = true;
  life2.visible = true;
  life3.visible = true;
 
  // background music
  
 
 

 

 textSize(25);
 fill("white");
 text("lives:" + lives,570,50);
 
 



//ash gravity
 ash.velocityY = ash.velocityY +0.8;
// ash collide
 //ash.debug = true;
 ash.setCollider("rectangle",0,0,400,450);
ash.collide(ground1);
ash.collide(ground2);
ash.collide(ground3);
ash.collide(ground4);
ash.collide(ground5);
ash.collide(ground6);
ash.collide(ground7);



//rattata moving
if(rattata1.x>590){
 rattata1.changeAnimation("rattata");
 rattata1.velocityX = -1;
rattata1.velocityY = rattata1.velocityY +0.8; 

}

if (rattata1.x<100) {
 rattata1.changeAnimation("rattata_flip");
 rattata1.velocityX = 1;
 rattata1.velocityY = rattata1.velocityY +0.8;
 
} 

if(rattata2.x>450){
 rattata2.changeAnimation("rattata");
 rattata2.velocityX = -1;
rattata2.velocityY = rattata2.velocityY +0.8; 

}

if (rattata2.x<100) {
 rattata2.changeAnimation("rattata_flip");
 rattata2.velocityX = 1;
 rattata2.velocityY = rattata2.velocityY +0.8;
 
} 

if(rattata3.x>700){
 rattata3.changeAnimation("rattata");
 rattata3.velocityX = -1;
rattata3.velocityY = rattata3.velocityY +0.8; 

}

if (rattata3.x<450) {
 rattata3.changeAnimation("rattata_flip");
 rattata3.velocityX = 1;
 rattata3.velocityY = rattata3.velocityY +0.8;
 
} 

if(rattata4.x>420){
 rattata4.changeAnimation("rattata");
 rattata4.velocityX = -1;
rattata4.velocityY = rattata4.velocityY +0.8; 

}

if (rattata4.x<100) {
 rattata4.changeAnimation("rattata_flip");
 rattata4.velocityX = 1;
 rattata4.velocityY = rattata4.velocityY +0.8;
 
} 

if(rattata4.x>420){
 rattata4.changeAnimation("rattata");
 rattata4.velocityX = -1;
rattata4.velocityY = rattata4.velocityY +0.8; 

}

if (rattata5.x<430) {
 rattata5.changeAnimation("rattata_flip");
 rattata5.velocityX = 1;
 rattata5.velocityY = rattata5.velocityY +0.8;
 
} 
if(rattata5.x>680){
 rattata5.changeAnimation("rattata");
 rattata5.velocityX = -1;
rattata5.velocityY = rattata5.velocityY +0.8; 

}

if (rattata6.x<100) {
 rattata6.changeAnimation("rattata_flip");
 rattata6.velocityX = 1;
 rattata6.velocityY = rattata6.velocityY +0.8;
 
} 
if(rattata6.x>420){
 rattata6.changeAnimation("rattata");
 rattata6.velocityX = -1;
rattata6.velocityY = rattata6.velocityY +0.8; 

}

if (rattata7.x<430) {
 rattata7.changeAnimation("rattata_flip");
 rattata7.velocityX = 1;
 rattata7.velocityY = rattata7.velocityY +0.8;
 
} 
if(rattata7.x>750){
 rattata7.changeAnimation("rattata");
 rattata7.velocityX = -1;
rattata7.velocityY = rattata7.velocityY +0.8; 

}


// ash moving
if(keyDown("RIGHT_ARROW")){
 ash.changeAnimation("right_walk");
 ash.animation.play();
 
 ash.velocityX = 3;
   
}
else{
 ash.changeImage("right");
 
 ash.velocityX = 0;

}

if(keyDown("LEFT_ARROW")){
 ash.changeAnimation("left_walk");
 
 ash.velocityX = -3; 
 
}


if(keyDown("UP_ARROW")&&("LEFT_ARROW")){
 ash.changeImage("left_jump");

 ash.velocityY = -10;

 ash.velocityY = ash.velocityY + 0.8;

 jump.play();
 jump.setVolume(0.1);
 userStartAudio();
 
}


if(keyDown("UP_ARROW")&&("RIGHT_ARROW")){
 ash.changeImage("right_jump");

 ash.velocityY = -10;

 ash.velocityY = ash.velocityY + 0.8;

 jump.play();
 jump.setVolume(0.1);
 userStartAudio();
}


if(ash.isTouching(ladder1)){
 if(keyDown("UP_ARROW")){
   ash.changeImage("back");
   ash.velocityY = -4;

   ash.velocityY = ash.velocityY +0.8;
   jump.stop();
 }
}
else if(ash.isTouching(ladder2)){
 if(keyDown("UP_ARROW")){
   ash.changeImage("back");
   ash.velocityY = -4;

   ash.velocityY = ash.velocityY +0.8;
   jump.stop();
 }
}
else if(ash.isTouching(ladder3)){
 if(keyDown("UP_ARROW")){
   ash.changeImage("back");
   ash.velocityY = -4;

   ash.velocityY = ash.velocityY +0.8;
   jump.stop();
 }
}
else if(ash.isTouching(ladder4)){
 if(keyDown("UP_ARROW")){
   ash.changeImage("back");
   ash.velocityY = -4;

   ash.velocityY = ash.velocityY +0.8;
   jump.stop();
 }
}
else if(ash.isTouching(ladder5)){
 if(keyDown("UP_ARROW")){
   ash.changeImage("back");
   ash.velocityY = -4;

   ash.velocityY = ash.velocityY +0.8;
   jump.stop();
 }
}


// the collition of ash and rattata

if(ash.isTouching(rattata1)){
  life_lost.play();
  life_lost.setVolume(0.3);
 lives= lives - 1;
 ash.x = 100;
 ash.y = 860;
}
else if(ash.isTouching(rattata2)){
  life_lost.play();
  life_lost.setVolume(0.3);
 lives= lives - 1;
 ash.x = 100;
 ash.y = 860;
}
else if(ash.isTouching(rattata3)){
  life_lost.play();
  life_lost.setVolume(0.3);
 lives= lives - 1;
 ash.x = 100;
 ash.y = 860;
}
else if(ash.isTouching(rattata4)){
  life_lost.play();
  life_lost.setVolume(0.3);
 lives= lives - 1;
 ash.x = 100;
 ash.y = 860;
}
else if(ash.isTouching(rattata5)){
  life_lost.play();
  life_lost.setVolume(0.3);
 lives= lives - 1;
 ash.x = 100;
 ash.y = 860;
}
else if(ash.isTouching(rattata6)){
  life_lost.play();
  life_lost.setVolume(0.3);
 lives= lives - 1;
 ash.x = 100;
 ash.y = 860;
}
else if(ash.isTouching(rattata7)){
  life_lost.play();
  life_lost.setVolume(0.3);
 lives= lives - 1;
 ash.x = 100;
 ash.y = 860;
}

//lives picture removal

if(lives === 2){
 life1.destroy();
}

if(lives === 1){
 life2.destroy();
}

if(lives === 0){
 life3.destroy();
}


//ash with pokeball

if(ash.isTouching(masterball)){
 masterball.visible = false;
 masterball.setCollider("rectangle",0,0,600,100);
 masterball.x = ash.x;
 masterball.y = ash.y;
 textSize(25);
 fill("white");
 text("Time:" + time,650,150);
 time = time -1;
 ash.changeImage("pokeball_left");
 if(keyDown("RIGHT_ARROW")){
   ash.changeAnimation("pokeball_left_right_foot");
   ash.animation.play();
   
   ash.velocityX = 3;
 }
 if(keyDown("LEFT_ARROW")){
   ash.changeAnimation("left_walk");
   
   ash.velocityX = -3; 
 }
 if(masterball.isTouching(rattata1)){
   rattata1.destroy();
   catching.play();
   catching.setVolume(0.3);
   userStartAudio();
 }
 else if(masterball.isTouching(rattata2)){
  rattata2.destroy();
  catching.play();
  catching.setVolume(0.3);
  userStartAudio();
  }
 else if(masterball.isTouching(rattata3)){
   rattata3.destroy();
   catching.play();
   catching.setVolume(0.3);
   userStartAudio();
  }
 else if(masterball.isTouching(rattata4)){
   rattata4.destroy();
   catching.play();
   catching.setVolume(0.3);
   userStartAudio();
  }
 else if(masterball.isTouching(rattata5)){
  rattata5.destroy();
  catching.play();
  catching.setVolume(0.3);
  userStartAudio();
  }
 else if(masterball.isTouching(rattata6)){
  rattata6.destroy();
  catching.play();
  catching.setVolume(0.3);
  userStartAudio();
  }
 else if(masterball.isTouching(rattata7)){
   rattata7.destroy();
   catching.play();
   catching.setVolume(0.3);
   userStartAudio();
  }
  
}



if(ash.isTouching(masterball2)){
 
 masterball2.visible = false;
 masterball2.setCollider("rectangle",0,0,600,100);
 masterball2.x = ash.x;
 masterball2.y = ash.y;
 textSize(25);
 fill("white");
 text("Time:" + time2,650,150);
 time2 = time2 -1;
 ash.changeImage("pokeball_left");
 if(keyDown("RIGHT_ARROW")){
   ash.changeAnimation("pokeball_left_right_foot");
   ash.animation.play();
   
   ash.velocityX = 3;
 }
 if(keyDown("LEFT_ARROW")){
   ash.changeAnimation("left_walk");
   
   ash.velocityX = -3; 
 }
 if(masterball2.isTouching(rattata1)){
   rattata1.destroy();
   catching.play();
   catching.setVolume(0.3);
   userStartAudio();
 }
 else if(masterball2.isTouching(rattata2)){
  rattata2.destroy();
  catching.play();
   catching.setVolume(0.3);
   userStartAudio();
  }
 else if(masterball2.isTouching(rattata3)){
   rattata3.destroy();
   catching.play();
   catching.setVolume(0.3);
   userStartAudio();
  }
 else if(masterball2.isTouching(rattata4)){
   rattata4.destroy();
   catching.play();
   catching.setVolume(0.3);
   userStartAudio();
  }
 else if(masterball2.isTouching(rattata5)){
  rattata5.destroy();
  catching.play();
   catching.setVolume(0.3);
   userStartAudio();
  }
 else if(masterball2.isTouching(rattata6)){
  rattata6.destroy();
  catching.play();
   catching.setVolume(0.3);
   userStartAudio();
  }
 else if(masterball2.isTouching(rattata7)){
   rattata7.destroy();
   catching.play();
   catching.setVolume(0.3);
   userStartAudio();
  }
  
}
if(time === 0){
 masterball.destroy();
}
if(time2 === 0){
 masterball2.destroy();
}

if(lives === 0){
  gameState = END;
}

// the second stage 

if(ash.collide(ground6)){
 createCanvas(1500,800);
 background_music.stop();
 ash.destroy();
 james.destroy();
 ladder1.destroy();
 ladder2.destroy();
 ladder3.destroy();
 ladder4.destroy();
 ladder5.destroy();
 ladder6.destroy();
 ground1.destroy();
 ground2.destroy();
 ground3.destroy();
 ground4.destroy();
 ground5.destroy();
 ground6.destroy();
 ground7.destroy();
 stand1.destroy();
 stand2.destroy();
 stand3.destroy();
 stand4.destroy();
 stand5.destroy();
 stand6.destroy();
 cage.destroy();
 pikachu.destroy();
 rattata1.destroy();
 rattata2.destroy();
 rattata3.destroy();
 rattata4.destroy();
 rattata5.destroy();
 rattata6.destroy();
 rattata7.destroy();
 masterball.destroy();
 masterball2.destroy();
 life1.destroy();
 life2.destroy();
 life3.destroy();

 foe.visible = true;
 new_foe.play();
 new_foe.setVolume(0.7);

 foe.lifetime = 150;
 
  battle_music.play();
  battle_music.setVolume(0.3);
   userStartAudio();
 
 
 
     
}
if(foe.lifetime === 0){

  

  
  foe.destroy();
  new_foe.stop();
 
  
  background("grey");
 
  textSize(20);
  text("greninja health",930,400);
 
 
  textSize(20);
  text("pikachu health",100,800);
  
 
 
  
  updateHealth2(health,maxHealth);
  updateHealth(health2,maxHealth2);
 
  
   
  battle.visible = true;
  greninja.visible = true;
  pikachu_battle.visible = true;
 
 
  giga_impact.visible = true;
  iron_tail.visible = true;
  quick_attack.visible = true;
  thunderbolt.visible = true;
 
  greninja_health.visible = true;
  pikachu_health.visible = true;
 

   }
 
   if(mousePressedOver(giga_impact)){
   attack.play();
   attack.setVolume(0.3);
   health -= 10;
   }
     else if(mousePressedOver(iron_tail)){
   attack.play();
   attack.setVolume(0.3);
  health -= 10;
   }
     else if(mousePressedOver(quick_attack)){
     attack.play();
     attack.setVolume(0.3);
  health -= 5;
   }
     else if(mousePressedOver(thunderbolt)){
     attack.play();
     attack.setVolume(0.3);
     health -= 20;
     }

 if(health <= 0){
  gamseState = END;
  }

}
else if(gameState === END){
  restart.visible = true;
  gameover.visible = true;

  ground1.visible = false;
  ground2.visible = false;
  ground3.visible = false;
  ground4.visible = false;
  ground5.visible = false;
  ground6.visible = false;
  ground7.visible = false;
  stand1.visible = false;
  stand2.visible = false;
  stand3.visible = false;
  stand4.visible = false;
  stand5.visible = false;
  stand6.visible = false;
  rattata1.visible = false;
  rattata2.visible = false;
  rattata3.visible = false;
  rattata4.visible = false;
  rattata5.visible = false;
  rattata6.visible = false;
  rattata7.visible = false;
  ash.visible = false;
  masterball.visible = false;
  masterball2.visible = false;
  ladder1.visible = false;
  ladder2.visible = false;
  ladder3.visible = false;
  ladder4.visible = false;
  ladder5.visible = false;
  ladder6.visible = false;
  pikachu.visible = false;
  cage.visible = false;
  james.visible = false;
  life1.visible = false;
  life2.visible = false;
  life3.visible = false;
 
  
  if(mousePressedOver(restart)){
    gameState === PLAY;

  restart.visible = false;
  gameover.visible = false;
  lives = 3;
  }
}


  
  drawSprites();
}



function updateHealth(health2,maxHealth2){
  stroke(0);
  strokeWeight(4);
  noFill();
  rect(100,750 ,200,15);
  noStroke();
  fill(255,0,0);

  rect(100,750, map(health2, 0 , maxHealth2, 0, 200), 15);
  console.log(health2);
  

}

function updateHealth2(health,maxHealth){
  stroke(0);
  strokeWeight(4);
  noFill();
  rect(930,450,200,15);
  noStroke();
  fill(255,0,0);

  rect(930,450, map(health, 0 , maxHealth, 0, 200), 15);
  console.log(health);
  
  
  

}