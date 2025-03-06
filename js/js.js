document.addEventListener("DOMContentLoaded", function () {
    let preguntas = document.querySelectorAll(".pregunta");

    preguntas.forEach(pregunta => {
        pregunta.addEventListener("click", function () {
            let respuesta = this.nextElementSibling;
            respuesta.classList.toggle("activa");
            if (respuesta.classList.contains("activa")) {
                respuesta.style.maxHeight = respuesta.scrollHeight + "px";
            } else {
                respuesta.style.maxHeight = null;
            }
        });
    });
});
