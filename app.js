// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array para almacenar los nombres de los amigos
let amigos = [];

// Capturar elementos del DOM
let input = document.getElementById("amigo");
let lista = document.getElementById("listaAmigos");
let resultado = document.getElementById("resultado");

// Función para agregar amigos a la lista
function agregarAmigo() {
    let nuevoAmigo = input.value.trim(); // Capturar y limpiar el valor del input

    if (nuevoAmigo === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nuevoAmigo); // Agregar al array
    actualizarLista(); // Actualizar la lista en el HTML
    input.value = ""; // Limpiar el campo de entrada
}

// Función para actualizar la lista de amigos en el HTML
function actualizarLista() {
    lista.innerHTML = ""; // Limpiar la lista antes de actualizar

    amigos.forEach(amigo => {
        let li = document.createElement("li"); // Crear elemento <li>
        li.textContent = amigo; // Asignar el nombre
        lista.appendChild(li); // Agregar a la lista
    });
}

// Función para sortear un amigo aleatoriamente
function sortearAmigo() {
    if (amigos.length === 0) {
        resultado.innerHTML = "<li>No hay amigos en la lista.</li>";
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length); // Generar índice aleatorio
    let amigoSorteado = amigos[indiceAleatorio]; // Obtener el nombre
    resultado.innerHTML = `<li> 🎉El amigo seleccionado es: <strong>${amigoSorteado}</strong> 🎉</li>`;
}

// Permitir añadir amigos con la tecla "Enter"
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        agregarAmigo();
    }
});








