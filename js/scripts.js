// scripts.js
document.addEventListener("DOMContentLoaded", () => {
    const hero = document.querySelector(".hero");
    let lastX = 50; // Valor predeterminado (50% del ancho)
    let lastY = 50; // Valor predeterminado (50% de la altura)

    // Escuchar el evento mousemove solo dentro del contenedor principal
    hero.addEventListener("mousemove", (e) => {
        if (e.target !== hero) return; // Evita aplicar el efecto si el mouse está sobre un elemento secundario

        const { clientWidth: width, clientHeight: height } = hero;
        const { offsetX, offsetY } = e;
        lastX = (offsetX / width) * 100;
        lastY = (offsetY / height) * 100;

        // Cambiar la posición del fondo según la ubicación del mouse
        hero.style.backgroundPosition = `${lastX}% ${lastY}%`;
    });

    // Restablecer el fondo a la última posición cuando el mouse sale de la sección
    hero.addEventListener("mouseleave", () => {
        hero.style.backgroundPosition = `${lastX}% ${lastY}%`;
    });
});

