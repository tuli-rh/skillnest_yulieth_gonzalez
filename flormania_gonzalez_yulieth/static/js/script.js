function iniciarSesion() {
    alert("Bienvenido a la tienda de flores");
}

function comprar() {
    const comprar = document.querySelector("#compra");
    comprar.remove();
}


const enviaFlores = document.querySelector("#enviaFlores");

enviaFlores.addEventListener("mouseover", function () {
    enviaFlores.innerHTML = "Envía Bouquets";
});

enviaFlores.addEventListener("mouseout", function () {
    enviaFlores.innerHTML = "Envía Flores";
});
