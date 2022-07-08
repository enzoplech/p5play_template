var caixa
function setup() {
  createCanvas(400,400);
  caixa =createSprite(200,200,50,50)
}

function draw() 

{
  background(30);
if(keyDown(LEFT_ARROW)){
caixa.x = caixa.x -2
}
else if(keyDown(RIGHT_ARROW)){
  caixa.x = caixa.x +2
}
else if(keyDown(UP_ARROW)){
   caixa.y = caixa.y -2
}
else if(keyDown(DOWN_ARROW)){
   caixa.y = caixa.y +2
}
  drawSprites()

}




