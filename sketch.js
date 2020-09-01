var wall, thickness;
var bullet, speed, weight;


function setup() {
  createCanvas(1600,400);
  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(22, 83);

  bullet = createSprite(50, 200, 50, 50);
  bullet.shapeColor = "white";
  bullet.velocityX = speed;
  
  //console.log(damage);

  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = color(80, 80, 80);

}

function draw() {
  background(0, 0, 0); 

  if (wall.x - bullet.x < wall.width/2 + bullet.width/2){
    bullet.veloxityX = 0;

    var damage = (0.5 * weight * speed * speed)/(thickness * thickness * thickness);

    if (damage > 10) {
      bullet.shapeColor = color(255, 0, 0);    
    } 
    
    if (damage < 10){
      bullet.shapeColor = color(0, 255, 0);
    }
    
  }
  bullet.collide(wall);
  drawSprites();
}  