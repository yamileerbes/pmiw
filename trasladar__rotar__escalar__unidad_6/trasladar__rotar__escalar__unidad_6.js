let x =0.0;
let jake;
function setup() {
createCanvas(600,600);
background(150);
jake = loadImage("data/jake.png");

}


function draw() {
  frameRate (15);
  x += 2;
 translate(mouseX, mouseY);
scale(mouseX / x);
  //rotate(x);

image(jake,-10,-10,60,120);

}
//let angulo = 0.0;
//let anguloDireccion = 1;
//let velocidad = 0.005;
//function setup() {
//createCanvas(600, 600);
//}
//function draw() {
//background(204);
//translate(40, 50); // Mover a la posición inicial
//rotate(angulo);
//strokeWeight(12);
//line(0, 0, 80, 0);
//translate(80, 0); //Mover a la siguiente articulación
//rotate(angulo * 2.0);
//strokeWeight(6);
//line(0, 0, 60, 0);
//translate(60, 0); // Mover a la siguiente articulación
//rotate(angulo * 2.5);
//strokeWeight(3);
//line(0, 0, 40, 0);
//angulo += velocidad * anguloDireccion;
//if ((angulo > QUARTER_PI) || (angulo < 0)) {
//anguloDireccion *= -1;
//}
//}
