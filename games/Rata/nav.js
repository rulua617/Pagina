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
const fullscreenButton = document.getElementById("fullscreen-button");

fullscreenButton.addEventListener("click", () => {
    if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
    }
});

document.addEventListener("fullscreenchange", () => {
    if (document.fullscreenElement) {
        fullscreenButton.style.display = "none";
    } else {
        fullscreenButton.style.display = "block";
    }
});

// Para salir del modo de pantalla completa
document.addEventListener("fullscreenchange", () => {
    if (!document.fullscreenElement) {
        console.log("Modo pantalla completa desactivado");
    }
});