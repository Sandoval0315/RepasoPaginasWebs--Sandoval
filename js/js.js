document.addEventListener("scroll", function () {
    let preguntas = document.querySelectorAll(".pregunta");

    preguntas.forEach(pregunta => {
        let speed = 0.5; // Ajusta la velocidad del efecto
        let yOffset = window.scrollY * speed;
        pregunta.style.transform = `translateY(${yOffset}px)`;
    });
});
