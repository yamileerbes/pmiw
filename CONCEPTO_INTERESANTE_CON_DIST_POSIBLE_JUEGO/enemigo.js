class enemigo{
constructor(){
this.x=0;
this.y=0;
this.z=0;
}

dibujar(){
  fill(0);
  rectMode(CENTER);
rect(this.x,this.y,80);
let d = dist(this.x,this.y,mouseX,mouseY);
if (d<=20){
this.x=mouseX;
this.y=mouseY;
} else if (d>20){
this.x=0;
this.y=0;
}
}


}
