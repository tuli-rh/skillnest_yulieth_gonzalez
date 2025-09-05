// ---------- FUNCIÓN DE INICIAR / CERRAR SESIÓN ----------
function cerrarSesion() {
    // Obtenemos el botón con id="sesion"
    const btnSesion = document.getElementById("sesion");

    // Agregamos un evento al botón para detectar clics
    btnSesion.addEventListener("click", function () {
        // Si el texto actual es "Iniciar sesión"...
        if (btnSesion.textContent === "Iniciar sesión") {
            btnSesion.textContent = "Cerrar sesión"; // ...lo cambiamos
        } else {
            btnSesion.textContent = "Iniciar sesión"; // ...si no, volvemos a ponerlo
        }
    });
}

// ---------- BOTONES DE ACEPTAR Y RECHAZAR SOLICITUDES ----------

// Seleccionamos todos los botones con clase .aceptar y .rechazar
const botonesAceptar = document.querySelectorAll(".aceptar");
const botonesRechazar = document.querySelectorAll(".rechazar");

// Recorremos cada botón de ACEPTAR
botonesAceptar.forEach(boton => {
    boton.addEventListener("click", () => {
        // Obtenemos el nombre de la persona desde la tarjeta de solicitud
        const nombre = boton.closest(".soli").querySelector(".nombre-soli p").innerText;

        // Mostramos mensaje
        alert(`Has aceptado la solicitud de ${nombre}`);

        // Ocultamos la tarjeta de solicitud
        boton.closest(".soli").style.display = "none";
    });
});

// Recorremos cada botón de RECHAZAR
botonesRechazar.forEach(boton => {
    boton.addEventListener("click", () => {
        // Obtenemos el nombre de la persona desde la tarjeta de solicitud
        const nombre = boton.closest(".soli").querySelector(".nombre-soli p").innerText;

        // Mostramos mensaje
        alert(`Has rechazado la solicitud de ${nombre}`);

        // Ocultamos la tarjeta de solicitud
        boton.closest(".soli").style.display = "none";
    });
});
