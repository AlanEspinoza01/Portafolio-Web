// Información de contacto
const contacto = {
    nombre: "Alan Espinoza Arredondo", // Nombre de contacto
    profesion: "Analista Programador", // Profesión
    correo: "alan.espinoza07@inacapmail.cl", // Correo electrónico
    telefono: "99999999", // Teléfono de contacto
    resumen: "Programador Junior" // Resumen profesional
};

// Insertar información de contacto en el HTML
document.getElementById('contacto').innerHTML = `
    <p>Nombre: ${contacto.nombre}</p>
    <p>Profesión: ${contacto.profesion}</p>
    <p>Correo: ${contacto.correo}</p>
    <p>Teléfono: ${contacto.telefono}</p>
    <p>Resumen: ${contacto.resumen}</p>
`;

document.addEventListener("DOMContentLoaded", function() {
    var logo = document.getElementById("logo");
    var header = document.querySelector("header");

    window.addEventListener("scroll", function() {
        // Verificar si el usuario se ha desplazado más allá de la cabecera
        if (window.scrollY > header.offsetHeight) {
            logo.classList.add("fijo");
        } else {
            logo.classList.remove("fijo");
        }
    });
});



// Carrusel de Conocimientos
const conocimientos = ["Visual Studio Code", "Microsoft PowerPoint", "Microsoft Oficce", "Microsoft Excel", "Geogebra", "Adobe Photoshop", "Canva"]; // Array de conocimientos
const listaConocimientos = document.getElementById('lista-conocimientos'); // Seleccionar el elemento de lista de conocimientos
conocimientos.forEach(conocimiento => { // Iterar sobre cada conocimiento
    const li = document.createElement('li'); // Crear un elemento de lista
    li.textContent = conocimiento; // Asignar el nombre del conocimiento al texto del elemento de lista
    listaConocimientos.appendChild(li); // Añadir el conocimiento a la lista en el HTML
});


// Slider de Intereses
let currentSlide = 0; // Índice de la diapositiva actual
const slides = document.querySelectorAll('.slide'); // Seleccionar todas las diapositivas

document.querySelector('.prev').addEventListener('click', () => { // Añadir evento al botón anterior
    console.log('Prev button clicked'); // Imprimir en consola cuando se hace clic
    changeSlide(-1); // Cambiar a la diapositiva anterior
});

document.querySelector('.next').addEventListener('click', () => { // Añadir evento al botón siguiente
    console.log('Next button clicked'); // Imprimir en consola cuando se hace clic
    changeSlide(1); // Cambiar a la diapositiva siguiente
});

function changeSlide(n) {
    console.log('Change slide called with:', n); // Imprimir en consola el cambio de diapositiva
    currentSlide += n; // Ajustar el índice de la diapositiva

    if (currentSlide < 0) { // Si el índice es menor que 0
        currentSlide = slides.length - 1; // Ir a la última diapositiva
    }

    if (currentSlide >= slides.length) { // Si el índice es mayor que el número de diapositivas
        currentSlide = 0; // Volver a la primera diapositiva
    }

    console.log('Current slide index:', currentSlide); // Imprimir el índice actual de la diapositiva
    document.querySelector('.slider-content').style.transform = `translateX(-${currentSlide * 100}%)`; // Mover el slider
}

// Carrusel de Lenguajes
let carouselIndex = 0; // Índice del carrusel
const carouselContent = document.querySelector('.carrusel-content'); // Seleccionar el contenido del carrusel
const totalLenguajes = carouselContent.children.length; // Obtener el número total de lenguajes

// Clonar los elementos del carrusel al final
for (let i = 0; i < totalLenguajes; i++) {
    const clone = carouselContent.children[i].cloneNode(true); // Clonar el elemento
    carouselContent.appendChild(clone); // Añadir el clon al final del carrusel
}

// Ajustar el índice para empezar en la posición correcta
const initialOffset = totalLenguajes; // Calcular el desplazamiento inicial
carouselContent.style.transform = `translateX(-${initialOffset * 110}px)`; // Aplicar el desplazamiento inicial

function moveCarousel() {
    carouselIndex++; // Incrementar el índice del carrusel
    carouselContent.style.transition = 'transform 0.5s ease-in-out'; // Aplicar la transición
    carouselContent.style.transform = `translateX(-${(initialOffset + carouselIndex) * 110}px)`; // Mover el carrusel

    if (carouselIndex >= totalLenguajes) { // Si el índice alcanza el total de lenguajes
        setTimeout(() => {
            carouselContent.style.transition = 'none'; // Desactivar la transición
            carouselIndex = 0; // Reiniciar el índice
            carouselContent.style.transform = `translateX(-${initialOffset * 110}px)`; // Reposicionar el carrusel

            setTimeout(() => {
                carouselContent.style.transition = 'transform 0.5s ease-in-out'; // Reactivar la transición
            }, 50); // Pequeño retraso para asegurar que el cambio ocurra sin que se note
        }, 500); // Ajusta este valor para que coincida con el tiempo de la transición
    }
}

// Mueve el carrusel automáticamente cada 2 segundos
setInterval(moveCarousel, 2000); // Configurar el intervalo para mover el carrusel automáticamente



// Función para validar RUT chileno
function validarRUT() {
    // Obtener el valor del RUT ingresado
    var rut = document.getElementById("rut").value;

    // Separar el número del dígito verificador
    var rutParts = rut.split("-");
    var rutNumber = rutParts[0];
    var dv = rutParts[1];

    // Calcular el dígito verificador esperado
    var suma = 0;
    var multiplo = 2;
    for (var i = rutNumber.length - 1; i >= 0; i--) {
        suma += rutNumber.charAt(i) * multiplo;
        multiplo = multiplo < 7 ? multiplo + 1 : 2;
    }
    var dvEsperado = 11 - (suma % 11);
    dvEsperado = dvEsperado == 11 ? 0 : dvEsperado == 10 ? "K" : dvEsperado;

    // Verificar si el dígito verificador ingresado es correcto
    if (dv.toUpperCase() == dvEsperado.toString().toUpperCase()) {
        document.getElementById("resultado-rut").innerText = "RUT válido";
    } else {
        document.getElementById("resultado-rut").innerText = "RUT inválido";
    }
}
