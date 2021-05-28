var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10;
var wall11,wall12,wall13,wall14,wall15,wall16,wall17,wall18,wall19,wall20;





function setup() {
  createCanvas(500,600);

  wall1=createSprite(40,90,8,150)
  wall2=createSprite(247,20,420,10)
  wall3=createSprite(453,90,8,150)
  wall4=createSprite(246,60,8,75)
  wall5=createSprite(86,170,100,10)
  wall6=createSprite(131,215,10,80)
  wall7=createSprite(86,260,100,10)
  wall8=createSprite(407,170,100,10)
  wall9=createSprite(357,210,10,90)
  wall10=createSprite(402,260,100,10)
  wall11=createSprite(86,303,100,10)
  wall12=createSprite(134,343,10,90)
  wall13=createSprite(86.5,388,105,10)
  wall14=createSprite(38,468,8,170)
  wall15=createSprite(241.5,555,415,10)
  wall16=createSprite(450,479,8,163)
  wall17=createSprite(401.5,397,105,10)
  wall18=createSprite(350,357,10,90)
  wall19=createSprite(400,314,110,10)
}

function draw() {
  background("black");  
  drawSprites();
   text(mouseX + " " + mouseY,200,200);

}