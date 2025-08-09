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
        actualizarListaAmigos();
    }

    //Limpiar Campo Nombre Amigo
    campoNombreAmigo.value = "";
}

//Funcion para actualizar la lista de amigos en pantalla
function actualizarListaAmigos() {
    let listaAmigos = document.querySelector('#listaAmigos');
    //Limpiar lista existente, evita duplicidad en los datos
    listaAmigos.innerHTML = '';

    //Recorrer la lista de nombre de amigos almacenada por el usuario
    for (let i = 0; i < amigos.length; i++) {
        //Crear el elemento li para añadirlo en la lista ul
        let nuevoLi = document.createElement("li");
        //asignarle el nombre según la iteración
        nuevoLi.textContent = amigos[i];
        //Añadir a la lista el elemento
        listaAmigos.appendChild(nuevoLi); 
    }

}

//Función para sortear el amigo secreto
function sortearAmigo() {

    //Validación lista de amigos vacía
    if (amigos.length == 0) {
        alert("Añade nombres a tu lista de amigos");
    } else {
        //Definición de indice para asignar posición en la lista
        let indice = Math.floor(Math.random()*amigos.length)+1;
        //Mostrar el amigo sorteado en pantalla
        document.getElementById("resultado").innerHTML = `El amigo secreto sorteado es: ${amigos[indice-1]}`;

    }
}

