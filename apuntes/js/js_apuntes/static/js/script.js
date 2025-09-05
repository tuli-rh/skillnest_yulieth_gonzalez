// Botón "Iniciar sesion"
function cambiarSesion() {
    const btnSesion = document.querySelector("#btnSesion");
    btnSesion.innerText = "Cerrar sesion"
    console.log("btnSesion");
}
 
// Like
function darLike() {
    const spanLike = document.querySelector("#like");
    let cantidad = parseInt(spanLike.innerText);
    spanLike.innerText = cantidad + 1;
    console.log("cantidad");
}


// Cambiarimagen al pasar el cursor sobre esta
const imagen = document.querySelector("#imagen");

imagen.addEventListener("mouseover", function() {
    imagen.src = "static/images/img2.jpg";
});

imagen.addEventListener("mouseout", function() {
    imagen.src = "static/images/img1.jpg";
});

































