// Botón de iniciar/cerrar sesión
function cerrarSesion() {
    const btnSesion = document.querySelector("#sesion");
    if (btnSesion.textContent === "Iniciar sesión") {
        btnSesion.textContent = "Cerrar sesión";
    } else {
        btnSesion.textContent = "Iniciar sesión"
    }
}


// Alternar imagen
const imagen = document.querySelector("#img");

imagen.addEventListener("mouseover", function () {
    imagen.src = "static/images/spider-man.png";
});

imagen.addEventListener("mouseout", function () {
    imagen.src = "static/images/zelda.png";
});