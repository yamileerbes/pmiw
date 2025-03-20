
let objeto;
function setup() {
createCanvas(600,600);


}


function draw() {
  background(200);
  objeto = new caracol(mouseX,mouseY,50);
objeto.dibujar();
}

function mousePressed(){
  this.click ++;
   if (this.click > 2) {
  this.click = 0;
  }
  }
