


document.addEventListener("DOMContentLoaded", function () {
    const codigoHTML = `
    <!DOCTYPE html>
    <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>¡Hola, Mundo!</title>
        </head>
        <body>
            <h1>¡Hola, Mundo!</h1>
            <p>Esta es nuestra primera página web.</p>
        </body>
    </html>
    `;

    const iframe = document.getElementById("preview");
    if (iframe) {
        iframe.srcdoc = codigoHTML;
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const codigoHTML = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Título Principal</title>
    </head>
    <body>
        <h1>Título Principal</h1>
        <p>Este es un párrafo de texto.</p>
        <a href="https://www.ejemplo.com">Enlace de Ejemplo</a>
        <img src="../recursos-lecciones/imagen.png" alt="Descripción de la Imagen">
        <ul>
            <li>Elemento 1</li>
            <li>Elemento 2</li>
        </ul>
        <ol>
            <li>Elemento A</li>
            <li>Elemento B</li>
        </ol>
    </body>
    </html>
    `;

    const iframe2 = document.getElementById("preview2");
    if (iframe2) {
        iframe2.srcdoc = codigoHTML;
    }
});

// Otros scripts que me proporcionaste

document.addEventListener('DOMContentLoaded', function () {
    var botonesCopiar = document.querySelectorAll('.btnCopiar');

    botonesCopiar.forEach(function (btnCopiar) {
        btnCopiar.addEventListener('click', function () {
            var codigoElement = btnCopiar.closest('.codigo-container').querySelector('.codigo code');
            var codigoTexto = codigoElement.textContent;

            var textarea = document.createElement('textarea');
            textarea.value = codigoTexto;
            document.body.appendChild(textarea);

            textarea.select();
            document.execCommand('copy');

            document.body.removeChild(textarea);
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const btnMenu = document.getElementById("btn-menu");
    const menuContainer = document.getElementById("menu");
    const closeMenu = document.getElementById("close-menu");

    if (btnMenu && menuContainer && closeMenu) {
        btnMenu.addEventListener("click", () => {
            menuContainer.style.display = "flex";
        });

        closeMenu.addEventListener("click", () => {
            menuContainer.style.display = "none";
        });

        window.addEventListener("click", (e) => {
            if (menuContainer.style.display === "flex" && e.target !== btnMenu && !menuContainer.contains(e.target)) {
                menuContainer.style.display = "none";
            }
        });
    }
});


/* seccion de botones-elementos html y css */

document.addEventListener('DOMContentLoaded', function () {
    const popUp=document.getElementById('popUp');
    popUp.style.display='none';
});
const popUp = document.getElementById('popUp');
const contenidoPopUp = document.getElementById('contenidoPopUp');
const textoPopUp = document.getElementById('textoPopUp');
popUp.style.display='none'

function mostrarPopUp(texto) {
    textoPopUp.innerText = texto;
    popUp.style.display = 'flex';
}


function cerrarPopUp() {
    popUp.style.display = 'none';
}