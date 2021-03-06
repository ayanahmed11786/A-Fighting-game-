var database;
var gameState = 0, playerCount;

var allPlayers;

var fighters;

var backgroundImg

var form, player, game;

var fighter1, fighter2;
var fg1Img, fg2Img;

var fg1jumpImg, fg1hittedImg , fg1fallImg, fg1standupImg, fg1walkImg, fg1punchImg,
    fg1kickImg;

var fg2jumpImg, fg2hittedImg, fg2fallImg, fg2standupImg, fg2walkImg, fg2punchImg,
    fg2kickImg;

function preload(){

  backgroundImg = loadImage("arena.png");

  //standing images
  fg1Img = loadAnimation("left/stand/0.png","left/stand/1.png","left/stand/2.png",
  "left/stand/3.png","left/stand/4.png","left/stand/5.png","left/stand/6.png",
  "left/stand/7.png","left/stand/8.png");

  fg2Img = loadAnimation("right/stand/0.png","right/stand/1.png","right/stand/2.png",
  "right/stand/3.png","right/stand/4.png","right/stand/5.png","right/stand/6.png",
  "right/stand/7.png","right/stand/8.png");

  //jumping Images
  fg1jumpImg = loadAnimation("left/jumping/0.png","left/jumping/1.png","left/jumping/2.png",
  "left/jumping/3.png","left/jumping/4.png","left/jumping/5.png",);

  fg2jumpImg = loadAnimation("right/jumping/0.png","right/jumping/1.png","right/jumping/2.png",
  "right/jumping/3.png","right/jumping/4.png","right/jumping/5.png",);

  //player's hitted Images
  fg1hittedImg = loadAnimation("left/hitted/0.png","left/hitted/1.png","left/hitted/2.png",);

  fg2hittedImg = loadAnimation("right/hitted/0.png","right/hitted/1.png","right/hitted/2.png",);

  //player gets fall after hitted Images
  fg1fallImg = loadAnimation("left/fall/0.png","left/fall/1.png","left/fall/2.png","left/fall/3.png",
  "left/fall/4.png","left/fall/5.png","left/fall/6.png",);

  fg2fallImg = loadAnimation("right/fall/0.png","right/fall/1.png","right/fall/2.png","right/fall/3.png",
  "right/fall/4.png","right/fall/5.png","right/fall/6.png",);

  //player stands after being hitted
  fg1standupImg = loadAnimation("left/stand-up/0.png","left/stand-up/1.png","left/stand-up/2.png",
  "left/stand-up/3.png",);

  fg2standupImg = loadAnimation("right/stand-up/0.png","right/stand-up/1.png","right/stand-up/2.png",
  "right/stand-up/3.png","right/stand-up/4.png",);

  //walking images
  fg1walkImg = loadAnimation("left/walk/0.png","left/walk/1.png","left/walk/2.png","left/walk/3.png",
  "left/walk/4.png","left/walk/5.png","left/walk/6.png","left/walk/7.png","left/walk/8.png",);

  fg2walkImg = loadAnimation("right/walk/0.png","right/walk/1.png","right/walk/2.png","right/walk/3.png",
  "right/walk/4.png","right/walk/5.png","right/walk/6.png","right/walk/7.png","right/walk/8.png",);

  //punching images
  fg1punchImg = loadAnimation("left/low-punch/0.png","left/low-punch/1.png","left/low-punch/2.png",
  "left/low-punch/3.png","left/low-punch/4.png",);

  fg2punchImg = loadAnimation("right/low-punch/0.png","right/low-punch/1.png","right/low-punch/2.png",
  "right/low-punch/3.png","right/low-punch/4.png",);

  //kicking images
  fg1kickImg = loadAnimation("left/low-kick/0.png","left/low-kick/1.png","left/low-kick/2.png",
  "left/low-kick/3.png","left/low-kick/4.png","left/low-kick/5.png",);

  fg2kickImg = loadAnimation("right/low-kick/0.png","right/low-kick/1.png","right/low-kick/2.png",
  "right/low-kick/3.png","right/low-kick/4.png","right/low-kick/5.png",);
  
}

function setup() {
  createCanvas(800,400);

 database = firebase.database();
 console.log(database);

  game = new Game();
  game.getState();
  game.start();

}

function draw() {
  background("yellow");  

  if(playerCount === 2){
    game.update(1);
  }

  if(gameState === 1){
    clear();
    game.play();
  }


}