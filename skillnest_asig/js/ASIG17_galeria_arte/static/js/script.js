function cerrarSesion() {
   const btnSesion = document.querySelector("#btnSesion");
   btnSesion.innerText = "Cerrar sesión"
   console.log("btnSesion");

   
}


const imagen = document.querySelector("#img");

imagen.addEventListener("mouseover", function () {
   imagen.src = "static/images/noche-estrellada-sobre-el-ródano.png";
});

imagen.addEventListener("mouseout", function () {
   imagen.src = "static/images/campo-de-trigo-con-cipreses.png";
});

