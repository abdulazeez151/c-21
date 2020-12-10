var thickness,wall;
var bullet,speed,weight;

function setup() {
  createCanvas(800,400);

  thickness=random(22,83);
  
  speed=random(223,321);
  weight=random(30,52);

wall =createSprite(1200,200,thickness,height/2);
wall.shapeColor=(80,80,80);
}

function draw() {
  background(0);  

if(hasCollided(Lbullet,Lwall)){
  bullet.velocityX=0;
  var damage=.5 * weight * speed* speed/(thickness *thickness *thickness);
}

if(damage>10){
  wall.shapeColor=color(255,0,0);
}

if(damage<10){
  wall.shapeColor=color(0,255,0);
}

  drawSprites();
}

function hasCollided(Lbullet,Lwall){

}