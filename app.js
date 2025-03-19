// Variables y constantes
let nombre;
let edad;
let respuestas = [];

// Preguntas de gustos
const preguntasGustos = [
    "¿Te gusta el rock?",
    "¿Te gusta el pop?",
    "¿Te gusta el reggaetón?",
    "¿Te gusta el jazz?"
];

// Función para pedir el nombre
function pedirNombre() {
    nombre = prompt("¿Cuál es tu nombre?");
    while (!nombre || !isNaN(nombre)) {
        nombre = prompt("Por favor, ingresa un nombre válido (no números):");
    }
    alert("¡Bienvenido " + nombre + "! Nos alegra verte.");
}

// Función para pedir la edad con validación mejorada
function pedirEdad() {
    let entrada = prompt("¿Cuántos años tienes?");
    
    while (!/^\d+$/.test(entrada) || parseInt(entrada) <= 0) {
        entrada = prompt("Por favor, ingresa una edad válida (número entero positivo):");
    }
    
    edad = parseInt(entrada);
    console.log("Edad ingresada:", edad);
}

// Mostrar preguntas de gustos en el DOM
function mostrarPreguntasGustos() {
    const contenedorPreguntas = document.getElementById('preguntasContainer');
    const seccionPreguntas = document.getElementById('preguntasGustos');

    contenedorPreguntas.innerHTML = ""; 
    respuestas = []; 

    preguntasGustos.forEach((pregunta, index) => {
        const preguntaElemento = document.createElement('div');
        preguntaElemento.innerHTML = `
            <p>${pregunta}</p>
            <button class="boton-respuesta" id="btnSi-${index}" onclick="guardarRespuesta(${index}, true)">Sí</button>
            <button class="boton-respuesta no" id="btnNo-${index}" onclick="guardarRespuesta(${index}, false)">No</button>
        `;
        contenedorPreguntas.appendChild(preguntaElemento);
    });

    seccionPreguntas.classList.remove('oculto');
}

// Función para guardar las respuestas y marcar visualmente el botón
function guardarRespuesta(index, respuesta) {
    respuestas[index] = respuesta ? `Sí: ${preguntasGustos[index]}` : `No: ${preguntasGustos[index]}`;

    // Mostrar en consola
    console.log(`Pregunta: "${preguntasGustos[index]}" → Respuesta: ${respuestas[index]}`);

    // Marcar botón seleccionado
    document.getElementById(`btnSi-${index}`).classList.remove('seleccionado');
    document.getElementById(`btnNo-${index}`).classList.remove('seleccionado');
    if (respuesta) {
        document.getElementById(`btnSi-${index}`).classList.add('seleccionado');
    } else {
        document.getElementById(`btnNo-${index}`).classList.add('seleccionado');
    }

    // Si se respondieron todas las preguntas, mostrar mensaje final
    if (respuestas.length === preguntasGustos.length) {
        mensajeFinal();
    }
}

// Función para mostrar un mensaje personalizado y guardar datos en localStorage
function mensajeFinal() {
    let mensajeGustos = respuestas.join(" | ");

    const datosUsuario = { nombre, edad, respuestas };
    localStorage.setItem("datosUsuario", JSON.stringify(datosUsuario));

    const resultados = document.getElementById("resultados");
    const infoUsuario = document.getElementById("infoUsuario");

    infoUsuario.innerHTML = `
        Nombre: ${nombre} <br>
        Edad: ${edad} años <br>
        Gustos: ${mensajeGustos}
    `;
    resultados.classList.remove("oculto");

    alert(`Gracias por participar, ${nombre}. ¡Nos vemos pronto!`);
}

// Mostrar datos almacenados en localStorage al recargar la página
window.addEventListener('load', () => {
    const datosGuardados = JSON.parse(localStorage.getItem("datosUsuario"));
    if (datosGuardados) {
        const resultados = document.getElementById("resultados");
        const infoUsuario = document.getElementById("infoUsuario");

        infoUsuario.innerHTML = `
            Nombre: ${datosGuardados.nombre} <br>
            Edad: ${datosGuardados.edad} años <br>
            Gustos: ${datosGuardados.respuestas.join(" | ")}
        `;
        resultados.classList.remove("oculto");
    }
});

// Iniciar la encuesta con un botón
document.getElementById('iniciarEncuesta').addEventListener('click', () => {
    pedirNombre();
    pedirEdad();
    mostrarPreguntasGustos();
});
