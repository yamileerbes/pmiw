//let num = 580;
//let x = [];
//let y = []

//function setup(){
//createCanvas(600,600);
//noStroke();
//for(let i = 0; i < num; i++){
//x[i] = 0;
//y[i] = 0;
//}

//}

//function draw(){
//  background(0);
//for (let i = num-1; i > 0; i--) {
// x[i] = x[i-1];
// y[i] = y[i-1];
// }
// x[0] = mouseX; // Define el primer elemento
// y[0] = mouseY; // Define el primer elemento
// for (let i = 0; i < num; i++) {
// fill(i * 4);
// ellipse(x[i], y[i], 40, 40);
// }


//}


//let bichos = [];

// function setup() {
// createCanvas(600, 600);
// background(204);
// for (let i = 0; i < random(50,100); i++) {
// let x = random(0,width);
// let y = random(0,height);
// let r = i + 2;
// bichos[i] = new JitterBug(x, y, r);
// }
// }
 
// function draw() {
// for (let i = 0; i < bichos.length; i++) {
// bichos[i].mover();
// bichos[i].mostrar();
// }
// }
 
 
 //para cargar muchas imagenes contenidas en un arreglo
  let numeroCuadros = 12; // El número de cuadros
 let imagenes = []; // Crea el arreglo
 let cuadroActual = 0;
 
 function preload() {
 for (let i = 0; i < numeroCuadros; i++) {
   //no entendi nada que es nf(), solo sé que pone ceros (0)¿ AAAA 4 son los numeros y si hay 1 solo numero van a haber 3 ceros, si el 4 fuera un 5 y hubiera un 1 seria 4 ceros y un 1
 let nombreImagen = "frame-" + nf(i, 4) + ".png";
 imagenes[i] = loadImage(nombreImagen); // Carga cada imagen
 }
 }
 
 function setup() {
 createCanvas(240, 120);
 frameRate(24);
 }
 
 function draw() {
 image(imagenes[cuadroActual], 0, 0);
 cuadroActual++; // Siguiente cuadro
 if (cuadroActual == imagenes.length) {
 cuadroActual = 0;  // Retorna al primer cuadro
 }
 }
 
 
