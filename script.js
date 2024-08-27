// Selección de elementos
const btnEncriptar = document.querySelector(".btn-encriptar");
const txtEncriptar = document.querySelector(".encriptar");
const aviso = document.querySelector(".texto-aviso");
const respuesta = document.querySelector(".evaluar");
const contenido = document.querySelector(".tarjeta-contenedor");
const btnCopiar = document.querySelector(".btn-copiar");
const btnDesencriptar = document.querySelector(".btn-desencriptar");

// Función para mostrar aviso
function mostrarAviso(mensaje) {
    aviso.style.background = "#0A3871";
    aviso.style.color = "#FFFF";
    aviso.style.fontWeight = "800";
    aviso.textContent = mensaje;

    setTimeout(() => {
        aviso.removeAttribute("style");
    }, 1500);
}

// Función para validar texto
function validarTexto(texto) {
    const caracteres = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g;
    const mayusculas = /[A-Z]/g;

    if (texto === "") {
        mostrarAviso("El campo de texto no debe estar vacío");
        return false;
    } else if (texto.match(caracteres)) {
        mostrarAviso("No debe tener caracteres especiales");
        return false;
    } else if (texto.match(mayusculas)) {
        mostrarAviso("El texto debe ser todo en minúscula");
        return false;
    }

    return true;
}

// Función para encriptar texto
function encriptarTexto(texto) {
    return texto.replace(/e/g, "enter")
                .replace(/i/g, "imes")
                .replace(/a/g, "ai")
                .replace(/o/g, "ober")
                .replace(/u/g, "ufat");
}

// Función para desencriptar texto
function desencriptarTexto(texto) {
    return texto.replace(/enter/g, "e")
                .replace(/imes/g, "i")
                .replace(/ai/g, "a")
                .replace(/ober/g, "o")
                .replace(/ufat/g, "u");
}

// Botón Encriptar
btnEncriptar.addEventListener("click", e => {
    e.preventDefault();
    let texto = txtEncriptar.value;

    if (validarTexto(texto)) {
        respuesta.innerHTML = encriptarTexto(texto);
        btnCopiar.style.visibility = "inherit";
        contenido.remove();
    }
});

// Botón Desencriptar
btnDesencriptar.addEventListener("click", e => {
    e.preventDefault();
    let texto = txtEncriptar.value;

    if (validarTexto(texto)) {
        respuesta.innerHTML = desencriptarTexto(texto);
        btnCopiar.style.visibility = "inherit";
        contenido.remove();
    }
});

// Botón Copiar
btnCopiar.addEventListener("click", e => {
    e.preventDefault();
    let copiar = respuesta;
    copiar.select();
    document.execCommand("copy");
});
