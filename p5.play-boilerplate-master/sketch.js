var car,wall ; 
var speed,weight ; 
var deformation;

function setup() {
 var canvas =  createCanvas(1600,400);
  

  speed=random(55,90);
  weight=random(400,1500);
  wall=createSprite(1500,350,60,height/2);
  car=createSprite(20,350,30,30);
 wall.shapeColor ="black";
 car.velocityX = speed ; 
 deformation = 0.5*weight*speed*speed /22500 ; 
}


function draw() {
  background(rgb(80,80,80));  

  car.collide(wall);

  if((wall.x - car.x) <= (wall.width/2 + car.width/2)) {
      car.velocityX = 0 ;
      
      if(deformation > 180 )
      {
        car.shapeColor = rgb(255,0,0);
      }
      if(deformation < 180 && deformation  > 100 ) 
      {
        car.shapeColor = rgb(230,230,0);
      }
      if(deformation < 100 ) 
      {
        car.shapeColor = rgb(0,255,0);
      }
    } 
  drawSprites();
}