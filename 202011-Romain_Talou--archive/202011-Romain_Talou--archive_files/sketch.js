let y = 0;

let theta = 0;
var gravity = 0.1;
let speed = 0;
let counter = 250;



let r = (100);

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  img = loadImage('Images/grid.png');

}

function draw() {
  background(255);
    camera(0,0,0);

  //   let dirX = (mouseX / width - 0.5) * 2;
  //   let dirY = (mouseY / height - 0.5) * 2;
  // directionalLight(250, 250, 250, -dirX, -dirY, -0.5);



translate(0, y+(-windowHeight/2+(3*r)), 0);
push();
  rotateZ(theta * 100 * 0.001);
  rotateX(theta * 300 * 0.001);
  rotateY(theta * 100 * 0.001);
  texture(img);

  sphere(r);
  pop();



theta += 0.05;

if (counter > 0) {
   counter--;
 }



 if (counter == 0){
   y = y + speed;
   speed = speed + gravity;
     if (y > windowHeight/2+(r/2)) {
        speed = speed * -0.95;
        }
  }

}



function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
