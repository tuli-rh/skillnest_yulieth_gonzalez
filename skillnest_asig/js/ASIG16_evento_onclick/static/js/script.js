// Función que permite mostrar un mensaje de alerta
function verPerfil() {
    //Código (logica)
    alert("Este es un perfil de usuario.");
}

// Funciín que permite cambiar el texto de un elemneto (botón)
function cerrarSesion() {
    const btnSesion = document.getElementById("sesion");
    btnSesion.addEventListener("click", function () {
        if (btnSesion.textContent === "Iniciar sesión") {
            btnSesion.textContent = "Cerrar sesión";
        } else {
            btnSesion.textContent = "Iniciar sesión"
        }
    });
}

function darLike1() {
    const spanLike = document.querySelector("#like");
    let cantidad = parseInt(spanLike.innerText);
    spanLike.innerText = cantidad + 1;
    console.log("cantidad");
}

function darLike2() {
    const spanLike = document.querySelector("#like2");
    let cantidad = parseInt(spanLike.innerText);
    spanLike.innerText = cantidad + 1;
    console.log("cantidad");
}
