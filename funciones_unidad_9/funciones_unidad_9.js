 
 
 
 function setup() {
 createCanvas(600, 600);
 }
 
 function draw() {
 background(204);
for (let x = 30; x < width -30 ; x+= 100){
 lechuza(x,110); 
}
 }
 
 function lechuza (x,y){
 push();
 translate(x, y);
 stroke(0);
 strokeWeight(70);
 line(0, -35, 0, -65); // Cuerpo
 noStroke();
 fill(204);
 ellipse(-17.5, -65, 35, 35);  // Pupila izquierda
 ellipse(17.5, -65, 35, 35);   // Pupila derecha
 arc(0, -65, 70, 70, 0, PI);   // Barbilla
 fill(0);
 ellipse(-14, -65, 8, 8);  // Ojo izquierdo
 ellipse(14, -65, 8, 8);   // Ojo derecho
 quad(0, -58, 4, -51, 0, -44, -4, -51); // Pico
 pop();
 }
 
