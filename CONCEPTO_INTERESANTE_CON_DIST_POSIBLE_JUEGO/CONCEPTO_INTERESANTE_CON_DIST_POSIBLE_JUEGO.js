
let objJuego;

function setup() {
createCanvas(600,600);
 objJuego= new juego();
}


function draw() {
  background(200);
objJuego.dibujar();
}
