// carrito de compra
function carritoCompras() {
    const spanCarrito = document.querySelector("#cart");
    let cantidad = parseInt(spanCarrito.innerText);
    spanCarrito.innerText = cantidad + 1;
    console.log("cantidad");
}

// cambio de imagen
const imagen = document.querySelector("#img");

imagen.addEventListener("mouseover", function () {
    imagen.src = "static/images/comida-mexicana-02.jpg";
});

imagen.addEventListener("mouseout", function () {
    imagen.src = "static/images/comida-mexicana-01.jpg";
});


// boton iniciar sesión

function email() {
    const correoo = document.getElementById("correo");
    const texto = correoo.value;
    if (texto.includes("@gmail.com")) {
        alert("Bienvenido " + texto);
    } else {
        alert("Ingrese un correo valido");
    }
}





