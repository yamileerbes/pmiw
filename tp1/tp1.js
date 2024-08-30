
//Yamile Nazarena Erbes 
//94700/7
//https://youtu.be/w4s5ycPdVEU

let img;

function preload() {
  img = loadImage("data/optic.jpeg");  //importante poner la carpeta donde esta guardada la imagen, sino se queda en loading...
}

function setup() {
  createCanvas(800, 400);
  image(img, 0, 0, 400, 400);
}

function draw() {
  print(mouseX + "," + mouseY);
  efecto(40, width / 40);
}

function click(m) {
  if (m) {
    return true;
  } else {
    return false;
  }
}

function teclap(tecla) {
  if (keyCode === tecla) {
    return true;
  } else {
    return false;
  }
}

function efecto( cant, tam) {
  for (let a = 20; a < cant; a++) {
    for (let l = 0; l < cant; l++) {
      noStroke();
      //se calcula la distancia entre el centro de las ellipses y el centro de la segunda mitad de la pantalla
      let d = dist( a * tam + tam / 2, l * tam + tam / 2, width / 2 + width / 4, height / 2);
      //se mapea el rango entre 0, (la distancia entre el centro de la segunda mitad y el mouse), 220 y 0. variable de color
      let colors = map(d, 0, dist(width / 2 + width / 4, height / 2, mouseX, mouseY),220,0);
      let cambiocolor = click(mouseIsPressed);
      if (cambiocolor) {
        fill(10, 88, 48);
        rect(a * tam, l * tam, tam, tam);
        //efecto del click
        fill(colors, random(0, 255), random(0, 255));
        ellipse(a * tam + tam / 2, l * tam + tam / 2, tam - 8, tam - 6);
      } else {
        fill(10, 88, 48);
        rect(a * tam, l * tam, tam, tam);
        //efecto degrade
        fill(colors, 58, 33);
        ellipse(a * tam + tam / 2, l * tam + tam / 2, tam - 8, tam - 6);
      }

      let fondoloco = teclap(UP_ARROW);
      {
        {
          if (fondoloco && (a + l) % 2 == 0) {
            //efecto loco grilla y ellipse
            fill(random(0, 255), colors, random(0, 255));
            rect(a * tam, l * tam, tam, tam);
            fill(colors, random(0, 255), random(0, 255));
            ellipse(a * tam + tam / 2, l * tam + tam / 2, tam - 8, tam - 6);
          }
        }
      }

      let reinicio = teclap(DOWN_ARROW) 
      {
        if (reinicio) {
          fondoloco = false;
        }
      
    }
     let reinicioMouse = teclap (LEFT_ARROW)
     {
        if (reinicioMouse){
          mouseX = 0;
          mouseY = 0;
        }
  }
  }
  }
}
