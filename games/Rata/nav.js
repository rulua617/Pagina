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