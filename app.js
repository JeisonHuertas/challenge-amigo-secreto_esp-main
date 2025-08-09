// El principal objetivo de este desafío es fortalecer habilidades en lógica de programación.

// Lista que contendá los nombres de los amigos que el usuario ingrese
let amigos = [];

//Funcion que permite al usuario añadir amigos a la lista
function agregarAmigo () {

    //Captura del nombre introducido en el campo de texto por el usuario
    let campoNombreAmigo = document.getElementById("amigo");
    let nombreAmigo = campoNombreAmigo.value;

    //Validación campo vacío o nombre inválido
    if (nombreAmigo === "" || nombreAmigo === " ") {
        alert("Por favor, inserte un nombre.");
    } else {
        //Agregar nombre a la lista
        amigos.push(nombreAmigo);
    }

    //Limpiar Campo
    campoNombreAmigo.value = "";
}

