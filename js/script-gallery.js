//CODIGO PARA AMPLIAR LAS IMAGENES DE LA SECCIÓN GALLERY
const imagen1 = document.getElementById("portfolio_1");
const imagen2 = document.getElementById("portfolio_2");
const imagen3 = document.getElementById("portfolio_3");
const imagen4 = document.getElementById("portfolio_4");
const imagen5 = document.getElementById("portfolio_5");
const imagen6 = document.getElementById("portfolio_6");
const imagen7 = document.getElementById("portfolio_7");
const marcoImagenCompleta = document.getElementById("marco-imagen-completa");
const imagenCompleta = document.getElementById("imagen-completa");
const collage = document.getElementById("collage");

function mostrarImagenCompleta(){
    console.log(this.id);
    let imagenSeleccionada = this.id;
    marcoImagenCompleta.style.display="flex";
    imagenCompleta.src="./../img/"+imagenSeleccionada+".jpg";
    collage.style.filter="blur(5px) grayscale(100%)";
    imagenCompleta.addEventListener("click",ocultarImagenCompleta);
}
function ocultarImagenCompleta(){
    marcoImagenCompleta.style.display="none";
    collage.style.filter="blur(0px) grayscale(0%)";
}

imagen1.addEventListener("click",mostrarImagenCompleta);
imagen2.addEventListener("click",mostrarImagenCompleta);
imagen3.addEventListener("click",mostrarImagenCompleta);
imagen4.addEventListener("click",mostrarImagenCompleta);
imagen5.addEventListener("click",mostrarImagenCompleta);
imagen6.addEventListener("click",mostrarImagenCompleta);
imagen7.addEventListener("click",mostrarImagenCompleta);