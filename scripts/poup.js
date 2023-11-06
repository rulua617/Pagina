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