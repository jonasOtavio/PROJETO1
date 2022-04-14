var caixa 






function setup() {
  createCanvas(400,400);
  caixa=createSprite(200,200,30,30)
}

function draw() 
{
  background(30);
  if(keyCode===(UP_ARROW)){
    caixa.y-=2
  }
  if(keyCode===DOWN_ARROW){
    caixa.y+=2
  }
drawSprites()
}




