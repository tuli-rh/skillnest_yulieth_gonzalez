function inscripcion() {
    const btnInscripcion = document.querySelector("#Inscribirse");
    if (btnInscripcion.textContent === "Inscribirse") {
        btnInscripcion.textContent = "Inscrito";
    } else {
        btnInscripcion.textContent = "Inscribirse"
    }
}

function shop() {
    const bolsaCompras = document.querySelector("#shop");
    let cantidad = parseInt(bolsaCompras.innerText);
    bolsaCompras.innerText = cantidad + 1;
    console.log("cantidad");
}