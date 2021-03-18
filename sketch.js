var database;
var game,player,form,playerCount,gameState = 0
var players, distance = 0
var cars, car1,car2,car3,car4

function setup(){
    createCanvas(displayWidth-10,displayHeight-100);
    //creating database
    database=firebase.database()
    game=new Game()
    game.getState()
    game.start()
    
}

function draw(){
  if(playerCount===4){
      game.updateState(1)
  }
  if(gameState===1){
      clear()
      game.play()
  }
}


