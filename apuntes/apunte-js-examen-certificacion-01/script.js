function mostrarMensajeAlerta() {
    // 1. Muestra una alerta
    alert("Este es un mensaje de alerta.");
}

function seleccionarItem(event) {
    // 1. (Importante) Evita que el enlace recargue la página
    event.preventDefault();
    // 2. Obtén el elemento exacto que fue clickeado
    const enlaceClickeado = event.target;
    // 3. Obtener el texto de ese elemento
    const textoItem = enlaceClickeado.textContent;
    // 4. Actualiza el encabezado
    document.querySelector("#textoItem").textContent = textoItem;
}

function cambiarEstilosElemento(boton) {
    // 1. Cambia el texto del botón
    boton.innerText = "Con estilos";
    // 2. Cambia el color de fondo del botón
    boton.style.backgroundColor = "#000";
    // 3. Cambia el color del texto del botón
    boton.style.color = "#fff";
}