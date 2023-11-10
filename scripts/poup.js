document.addEventListener('DOMContentLoaded', function () {
    const popUp = document.getElementById('popUp');
    popUp.style.display = 'none';
});

const popUp = document.getElementById('popUp');
const contenidoPopUp = document.getElementById('contenidoPopUp');
const textoPopUp = document.getElementById('textoPopUp');

const imagenesAleatorias = [
    '../characters/Bien.png',
    '../characters/Dehecho.png',
    '../characters/Pensar.png',
];

function obtenerImagenAleatoria() {
    const indiceAleatorio = Math.floor(Math.random() * imagenesAleatorias.length);
    return imagenesAleatorias[indiceAleatorio];
}

popUp.style.display = 'none';

function mostrarPopUp(texto) {
    textoPopUp.innerText = texto;
    const imagenAleatoria = obtenerImagenAleatoria();
    popUp.style.backgroundImage = `url(${imagenAleatoria})`;
    popUp.style.display = 'flex';
}

function cerrarPopUp() {
    popUp.style.display = 'none';
}


/* barra de busqueda */

    document.getElementById('search').addEventListener('input', function () {
        var searchTerm = this.value.toLowerCase(); 
        var contenedores = document.querySelectorAll('.contenedor');
            contenedores.forEach(function (contenedor) {
            var elementosBoton = contenedor.querySelectorAll('.boton'); 
                var elementosFiltrados = Array.from(elementosBoton).filter(function (elemento) {
                return elemento.textContent.toLowerCase().includes(searchTerm);
            });
    
            var orden = 0;
            elementosBoton.forEach(function (elemento) {
                if (elementosFiltrados.includes(elemento)) {
                    elemento.style.order = orden;
                    orden++;
                } else {
                    elemento.style.order = ''; 
                }
            });
    
            elementosBoton.forEach(function (elemento) {
                if (elementosFiltrados.length === 0 || elementosFiltrados.includes(elemento)) {
                    elemento.style.display = 'block';
                } else {
                    elemento.style.display = 'none';
                }
            });
    
            var tieneElementosVisibles = Array.from(elementosBoton).some(function (elemento) {
                return elemento.style.display !== 'none';
            });
    
            if (contenedor.textContent.toLowerCase().includes(searchTerm) && tieneElementosVisibles) {
                contenedor.style.display = 'flex'; 
            } else {
                contenedor.style.display = 'none';
            }
        });
    });
    