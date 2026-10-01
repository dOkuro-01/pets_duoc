// Buscamos el formulario por su id
const formulario = document.querySelector("#formulario-contacto");

// Buscamos el campo nombre
const nombre = document.querySelector("#nombre");
const telefono = document.querySelector("#telefono");
const correo = document.querySelector("#correo");
const tipoVivienda = document.querySelector("#tipo-vivienda");

// Buscamos el espacio donde mostraremos el error
const errorNombre = document.querySelector("#error-nombre");
const errorTelefono = document.querySelector("#error-telefono");
const errorCorreo = document.querySelector("#error-correo");
const errorVivienda = document.querySelector("#error-vivienda");
const mensajeFormulario = document.querySelector("#mensaje-formulario");


// Escuchamos cuando el usuario intenta enviar el formulario
formulario.addEventListener("submit", function (evento) {

    // Evita que el formulario se envíe automáticamente
    evento.preventDefault();

    // Revisamos si el nombre está vacío
    if (nombre.value.trim() === "") {
        errorNombre.textContent = "El nombre es obligatorio.";
    } else {
        errorNombre.textContent = "";
    }

    // Revisamos si el teléfono está vacío
    if (telefono.value.trim() === "") {
        errorTelefono.textContent = "El número de teléfono es obligatorio.";
    } else {
        errorTelefono.textContent = "";
    }

    // Revisamos si el correo está vacío
// Revisamos si el correo está vacío o tiene un formato incorrecto
    const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (correo.value.trim() === "") {
        errorCorreo.textContent = "El correo es obligatorio.";
    } else if (!formatoCorreo.test(correo.value.trim())) {
        errorCorreo.textContent = "Ingresa un correo válido.";
    } else {
        errorCorreo.textContent = "";
    }

// Revisamos si seleccionó un tipo de vivienda
    if (tipoVivienda.value === "") {
        errorVivienda.textContent = "Selecciona un tipo de vivienda.";
    } else {
        errorVivienda.textContent = "";
   }

    // Si no hay mensajes de error, mostramos confirmación
    if (
        errorNombre.textContent === "" &&
        errorTelefono.textContent === "" &&
        errorCorreo.textContent === "" &&
        errorVivienda.textContent === ""
    ) {
        mensajeFormulario.textContent = "Formulario completado correctamente.";
    } else {
        mensajeFormulario.textContent = "Revisa los campos antes de continuar.";
    }

});