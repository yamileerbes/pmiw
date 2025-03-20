let animacion = [];

let i = 0;

//function preload(){
//animacion = [ loadImage( "data/marina1.png"),
//loadImage("data/marina2.png"),
//loadImage("data/marina3.png"),
//loadImage("data/marina4.png"),
//loadImage("data/marina5.png"),
//loadImage("data/marina6.png"),
//loadImage("data/marina7.png"),
//];


//}

//function setup() {
//createCanvas(600,600);
//frameRate(15);
//}


//function draw() {
//  let fr = frameRate();
// print(fr);
//background(200);
//i++;
//if (i < animacion.length) {
//image (animacion[i], 50,200,500,80);
//} else if (i == animacion.length) {
//i = 0;
//}
  
//}

 //let radio = 40;
 //let x = -radio;
 //let velocidad = 0.5;
 //function setup() {
 //createCanvas(240, 120);
 //ellipseMode(RADIUS);
 //}
 //function draw() {
 //background(0);
 //x += velocidad;  // Aumenta el valor de x
 //arc(x, 60, radio, radio, 0.52, 5.76);
 //}
 
 
 //ME GUSTA ESTE EFECTO
 //function setup() {
 //createCanvas(240, 120);
 //}
 //function draw() {
 //background(204);
 //for (var x = 20; x < width; x += 20) {
 //var mx = mouseX / 10;
 //var desplazamientoA = random(-mx, mx);
 //var desplazamientoB = random(-mx, mx);
 //line(x + desplazamientoA, 20, x - desplazamientoB, 100);
 //}
 //}
 
 //var velocidad = 2.5;
 //var diametro = 20;
 //var x;
 //var y;
 //function setup() {
 //createCanvas(600, 600);
 //x = width/2;
 //y = height/2;
 //background(204);
 //}
 //function draw() {
 //  background(200);
 //x += random(-velocidad, velocidad);
 //y += random(-velocidad, velocidad);
 //ellipse(x, y, diametro, diametro);
 //}
 
//  var momento1 = 2000;
// var momento2 = 4000;
// var x = 0;
 
//function setup() {
// createCanvas(480, 120);
// }
// function draw() {
// var momentoActual = millis();
// background(204);
// if (momentoActual > momento2) {
// x -= 0.5;
 
// } else if (momentoActual > momento1) {
// x += 2;
// }
// ellipse(x, 60, 90, 90);
// }


 var angulo = 0.0;
 var desplazamiento = 160;
 var escalar = 4;
 var velocidad = 0.55;
 function setup() {
 createCanvas(600, 600);
 fill(0);
 background(204);
 }
 function draw() {
 var x = desplazamiento + cos(angulo) * escalar;
 var y = desplazamiento + sin(angulo) * escalar;
 ellipse(x, y, 2, 2);
 angulo += velocidad;
 escalar += velocidad;
 }
