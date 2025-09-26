// eliminar elemento 
function aceptar() {
    const aceptar = document.getElementById("cookies");
    aceptar.style.display = "none";
}

// cambiar imagen 
const imagen = document.querySelector("#img");

imagen.addEventListener("mouseover", function () {
    imagen.src = "img/noche-estrellada-sobre-el-ródano.png";
});

imagen.addEventListener("mouseout", function () {
    imagen.src = "img/campo-de-trigo-con-cipreses.png";
});

// cambiar texto 

function cerrarSesion() {
    const btnSesion = document.querySelector("#sesion");
    if (btnSesion.textContent === "Iniciar sesión") {
        btnSesion.textContent = "Cerrar sesión";
    } else {
        btnSesion.textContent = "Iniciar sesión"
    }
}

//  mostrar mensaje de alerta 
window.onload = function () {
    alert("cargando el reporte del clima")
}
// contador 

function incremento() {
    const spanMas = document.querySelector("#incremento");
    let cantidad = parseInt(spanMas.innerText);
    spanMas.innerText = cantidad + 1;
    console.log("cantidad");
}
function menos() {
    const spanMenos = document.querySelector("#menos");
    let cantidad = parseInt(spanMenos.innerText);
    spanMenos.innerText = cantidad - 1;
    console.log("cantidad");
}

// Recorremos cada botón de ACEPTAR 




