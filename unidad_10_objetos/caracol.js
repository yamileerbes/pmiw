class caracol{
constructor(x,y,tam){
this.x = x;
this.y = y;
this.tam = tam;
this.click = 0;
}

 dibujar(){
   if (this.click ==1){
     fill(200,20,0);
ellipse(this.x,this.y,this.tam,this.tam);}
else {
  fill(255);
ellipse(this.x,this.y,this.tam,this.tam);}

print(this.click);
}



}
