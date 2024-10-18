let mostrador = document.getElementById("mostrador");
let seleccion = document.getElementById("seleccion");
let imgSeleccionada = document.getElementById("img");
let modeloSeleccionado = document.getElementById("modelo");
let descripSeleccionada = document.getElementById("descripcion");
let precioSeleccionado = document.getElementById("precio");

function cargar(item){
    quitarBordes();
    mostrador.style.width = "60%";
    seleccion.style.width = "40%";
    seleccion.style.opacity = "1";
    item.style.border = "2px solid blue";

    imgSeleccionada.src = item.getElementsByTagName("img")[0].src;

    modeloSeleccionado.innerHTML =  item.getElementsByTagName("p")[0].innerHTML;

    descripSeleccionada.innerHTML = "Descripción del modelo ";

    precioSeleccionado.innerHTML =  item.getElementsByTagName("span")[0].innerHTML;


}
function cerrar(){
    mostrador.style.width = "100%";
    seleccion.style.width = "0%";
    seleccion.style.opacity = "0";
    quitarBordes();
}
function quitarBordes(){
    var items = document.getElementsByClassName("item");
    for(i=0;i <items.length; i++){
        items[i].style.border = "none";
    }
}

/* Js de animaciones pag */

const elementosAAnimar = document.querySelectorAll('[data-animation]');

function triggerAnimation2(entries) {
    entries.forEach(entry => {
       const elemento = entry.target;
       if (entry.isIntersecting) {
          elemento.classList.add('unset'); // 
       }
    });
}

const option = {
    root: null,
    rootMargin: "0px",
    threshold: 0 
};

const observar = new IntersectionObserver(triggerAnimation2, option);

elementosAAnimar.forEach(elemento => {
    observar.observe(elemento);
});
