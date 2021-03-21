var car,wall,speed,weight,deformation;
function setup() {
  createCanvas(1600,400);
  car=createSprite(50, 200, 50, 50);
  car.shapeColor="grey"
  wall=createSprite(1500,200,40,height/2);
  speed=random(55,90);
  weight=random(400,1500);
  car.velocityX=speed;
}

function draw() {
  background("black");
  deformation=0.5*weight*speed*speed/22500;
  if(isTouching(car,wall)){
    car.velocityX=0;
  if(deformation<100){
   car.shapeColor="green";
  }
   if(deformation>100&&deformation<180){
    car.shapeColor="yellow";
  }
   if (deformation>180){
    car.shapeColor="red";
  }

  }
 text("deformation="+deformation,300,100);
  drawSprites();
}