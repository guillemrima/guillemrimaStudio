let galeria = document.getElementById("galeria");
let galeriaMarco = document.getElementById("galeria-sobremi");
let carruselImagenes = 2;

function cambioImagenes(){
    if(carruselImagenes<6){
        galeria.src = "./../img/aboutme/foto-"+carruselImagenes+".jpg";
        carruselImagenes++;
    }else{
        carruselImagenes = 1;
        galeria.src = "./../img/aboutme/foto-"+carruselImagenes+".jpg";
        carruselImagenes++;
    }

}
