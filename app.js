// Variables y constantes
let nombre;
let edad;
let respuestas = []; // Array para almacenar respuestas del usuario

// Función para pedir el nombre
function pedirNombre() {
    nombre = prompt("¿Cuál es tu nombre?");
    while (!nombre || nombre.trim() === "") {
        nombre = prompt("Por favor, ingresa un nombre válido:");
    }
    alert("Bienvenido " + nombre + "! Nos alegra verte.");
}

// Función para pedir la edad con validación
function pedirEdad() {
    edad = prompt("¿Cuántos años tienes?");
    
    // Validar que el usuario ingrese un número
    while (isNaN(edad) || edad === "" || edad === null) {
        edad = prompt("Por favor, ingresa una edad válida (número):");
    }
    
    edad = parseInt(edad); // Convertir a número
    console.log("Edad ingresada:", edad);
}

// Función para preguntar sobre gustos
function preguntarGustos() {
    let leGustaRock = confirm("¿Te gusta el rock?");
    respuestas.push(leGustaRock ? "Le gusta el rock" : "No le gusta el rock");

    let leGustaPop = confirm("¿Te gusta la pop?");
    respuestas.push(leGustaPop ? "Le gusta la pop" : "No le gusta la pop");

    console.log("Respuestas del usuario:", respuestas);
}

// Función para mostrar un mensaje personalizado
function mensajeFinal() {
    alert(`Gracias por participar, ${nombre}. ¡Nos vemos pronto!`);
}

// Ejecución del programa
pedirNombre();
pedirEdad();
preguntarGustos();
mensajeFinal();
