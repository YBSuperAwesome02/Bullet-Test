var bullet, wall
var speed, weight
var damage, thickness

function setup() {
  createCanvas(1600,400);
  
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  
  bullet=createSprite(50, 200, 75, 25);
  bullet.shapeColor=color(0, 0, 0)
  wall=createSprite(1350,200,thickness,height/2);
  wall.shapeColor=color(80, 80, 80)

  bullet.velocityX=speed

  damage=(0.5 * weight * speed * speed) / (thickness * thickness * thickness)
}

function draw() {
  background(0,0,0);  
  if(wall.x-bullet.x<bullet.width/2+wall.width/2){
    bullet.velocityX=0
    damage=(0.5 * weight * speed * speed) / (thickness * thickness * thickness)
    if(damage<100){
      bullet.shapeColor=color(0,255,0)
    }
    if(damage>100 || damage<180){
      bullet.shapeColor=color(230,230,0)
    }
    if(damage>180){
      bullet.shapeColor=color(255,0,0)
    }
  }
  drawSprites();
  //damage()
}

/*function damage() {
 
  if(damage<100){
    bullet.shapeColor(0,255,0)
  }
  if(damage>100 || damage<180){
    bullet.shapeColor(230,230,0)
  }
  if(damage>180){
    bullet.shapeColor(255,0,0)
  }
}*/