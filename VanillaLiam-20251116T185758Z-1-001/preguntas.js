const formulario = document.getElementById("formulario");
const pregunta = document.getElementById("pregunta");
const puntuacion = document.getElementById("puntuacion");
const verdadero = document.getElementById("verdadero");
const falso = document.getElementById("falso");
const atras = document.getElementById("atras");

atras.addEventListener("click", function() {
    window.location.href = "bienvenida.html";
});

formulario.addEventListener("submit", function(event) {
    const textoPregunta = pregunta.value.trim();
    const valorPuntuacion = puntuacion.value;
    let respuesta = null;
    if (verdadero.checked) respuesta = true;
    else if (falso.checked) respuesta = false;
    if (textoPregunta === "") {
        alert("tienes que poner alguna pregunta");
    }
    if (respuesta === null) {
        alert("no has puesto ni verdadero ni falso");
    }
    if (valorPuntuacion === "" || valorPuntuacion < 0 || valorPuntuacion > 9) {
        alert("la puntuación tiene que ser un numero entre 0 y 9");
    }
    const nuevaPregunta = {
        pregunta: textoPregunta,
        respuesta: respuesta,
        puntuacion: Number(valorPuntuacion)
    };
    let preguntasGuardadas = localStorage.getItem("preguntas");

    if (preguntasGuardadas) {
        preguntasGuardadas = JSON.parse(preguntasGuardadas);
    } else {
        preguntasGuardadas = [];
    }

preguntasGuardadas.push(nuevaPregunta);
    setTimeout(function() {
        localStorage.setItem("preguntas", JSON.stringify(preguntasGuardadas));
        alert("pregunta grabada");
    }, 5000);
});
