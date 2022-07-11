const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var jogador;
var grupoBorboletas;
var borboleta1Img;
var borboleta2Img;
var borboleta3Img;
var borboleta4Img;
var backgroundImg;
var colisor;
var score = 0;
var START = 0;
var PLAY = 1;
var gameState = START;
var startBackgroundImg;
var borboletaStart,borboletaStartImg;
var setaCima, setaBaixo, setaLeft, setaRight;
var setaCimaImg, setaBaixoImg, setaLeftImg, setaRightImg;
var trofeu, trofeuImg;
var trofeu2;

function preload(){
  backgroundImg = loadImage("backgroundImg.png");
  borboleta1Img = loadImage("borboletaRosa.png");
  borboleta2Img = loadImage("borboletaLaranja.png");
  borboleta3Img = loadImage("borboletaAzulImg.png");
  borboleta4Img = loadImage("borboletaRoxaImg.png");
  startBackgroundImg = loadImage("fundoStart.png");
  borboletaStartImg = loadImage("borboletaStart.png");
  setaCimaImg = loadImage("setaCima.png");
  setaBaixoImg = loadImage("setaBaixo.png");
  setaLeftImg = loadImage("setaLeft.png");
  setaRightImg = loadImage("setaRight.png");
  trofeuImg = loadImage("feedback.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  engine = Engine.create();
  world = engine.world;

  jogador = new Player(windowWidth/2,windowHeight/2 + 150,170,370);
  
  colisor = createSprite(windowWidth/2,windowHeight/2 + 150,170,370);

  grupoBorboletas = new Group();

  borboletaStart = createSprite(windowWidth/2, windowHeight/2 - 40, 20,20);
  borboletaStart.addImage(borboletaStartImg);
  borboletaStart.scale = 0.3;

  setaCima = createSprite(1250,40,10,10);
  setaCima.addImage(setaCimaImg);
  setaCima.scale = 0.1;
  setaCima.tint = "magenta";

  setaBaixo = createSprite(1250,100,10,10);
  setaBaixo.addImage(setaBaixoImg);
  setaBaixo.scale = 0.1;
  setaBaixo.tint = "magenta";

  setaLeft = createSprite(1200,70,10,10);
  setaLeft.addImage(setaLeftImg);
  setaLeft.scale = 0.1;
  setaLeft.tint = "magenta";

  setaRight = createSprite(1300,70,10,10);
  setaRight.addImage(setaRightImg);
  setaRight.scale = 0.1;
  setaRight.tint = "magenta";

  trofeu = createSprite(450,140);
  trofeu.addImage(trofeuImg);
  trofeu.scale = 0.3;

  trofeu2 = createSprite(1100,140);
  trofeu2.addImage(trofeuImg);
  trofeu2.scale = 0.3;
}

function draw() {
  background(startBackgroundImg);  
  Engine.update(engine);
  
  if(gameState === START){
    
    console.log("HelloPlanetEarth");

    trofeu2.visible = false;
    trofeu.visible = false;
    gameState = 0;
    
    background(startBackgroundImg);
      
      fill("purple");
      textSize(60);
      text("CAÇANDO BORBOLETAS", windowWidth/2 - 320, windowHeight/2 - 250);

      textSize(30);
      text("Clique na borboleta abaixo para JOGAR!", windowWidth/2 - 220, windowHeight/2 - 200);

      
    }

  if(gameState === START && mousePressedOver(borboletaStart)){
    gameState = PLAY;
  }
  
  borboletaStart.display();
  if(gameState === PLAY){
    
    background(backgroundImg);
    gameState = 1;

    

    fill("white");
    textSize(40);
    text("PEGUE AS BORBOLETAS ANTES QUE ELAS SOMEM!", 160,50);

    fill("white");
    textSize(45);
    text("SCORE :"+score,40,250);

    if(keyCode === UP_ARROW){
        colisor.y = colisor.y -3;    
          
          }
      if(keyCode === DOWN_ARROW){
        colisor.y = colisor.y +3;    

          }
      if(keyCode === LEFT_ARROW){
        colisor.x = colisor.x -3;    

          }
      if(keyCode === RIGHT_ARROW){
        colisor.x = colisor.x +3;    

            
          }
    
    trofeu2.visible = false;
    trofeu.visible = false;
    colisor.visible = false;
    borboletaStart.visible = false;
    
    colisor.display();
    jogador.display();

    gerarBorboletas();
 
}

colisor.visible = false;

  drawSprites();
}



function gerarBorboletas(){
  if(frameCount % 90 == 0 ){

    
    var borboleta1 = createSprite(30, 130, 20,20);
    borboleta1.velocityX = +5;
    borboleta1.lifetime = 100;

    var rand = Math.round(random(1,1) );
    switch(rand){
      
      case 1 : 
        borboleta1.addImage(borboleta1Img);
      break
    }
    
    if(grupoBorboletas.isTouching(colisor)){
      score = score+1;
    }

    grupoBorboletas.add(borboleta1);
  }

  if(frameCount % 70 == 0){
    var borboleta2 = createSprite(1200,140,20,20);
    borboleta2.velocityX = -5;
    borboleta2.lifetime = 100;

    var rand = Math.round(random(1,1));
    switch(rand){

      case 1 :
        borboleta2.addImage(borboleta3Img);
      break
    }
    
    if(grupoBorboletas.isTouching(colisor)){
      score = score+1;
    }
    grupoBorboletas.add(borboleta2);
  
  }

  if(score === 5){
    
    fill("white");
    textSize(35);
    text("PARABÉNS! Você passou de nível", 500, 150);
    trofeu.visible = true;
    trofeu2.visible = true;

    
  } 

  if(score >= 5){
    if(frameCount % 60 == 0){
      var borboleta3 = createSprite(30,300,20,20);
      borboleta3.velocityX = +5;
      borboleta3.lifetime = 60;

      var rand = Math.round(random(1,1));
      switch(rand){
        case 1 :
          borboleta3.addImage(borboleta4Img);
        break
      }

      if(grupoBorboletas.isTouching(colisor)){
        score = score+1;
      }

      grupoBorboletas.add(borboleta3);
    }
  }

  if(score == 10){
    fill("white");
    textSize(35);
    text("PARABÉNS! Você passou de nível", 500, 150);
    trofeu.visible = true;
    trofeu2.visible = true;
  }

  if(score >= 10){
    if(frameCount % 50 == 0){
      var borboleta4 = createSprite(1200,350,20,20);
      borboleta4.velocityX = -5;
      borboleta4.lifetime = 60;

      var rand = Math.round(random(1,1));
      switch(rand){
        case 1 :
          borboleta4.addImage(borboleta2Img);
        break
      }

      if(grupoBorboletas.isTouching(colisor)){
        score = score+1;
      }

      grupoBorboletas.add(borboleta4);
    }
  }

  
}

