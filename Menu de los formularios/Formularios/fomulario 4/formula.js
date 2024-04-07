document.getElementById("calificacion").addEventListener("submit", function(event) {
    event.preventDefault();
    var parcial1 = parseFloat(document.getElementById("parcial1").value);
    var parcial2 = parseFloat(document.getElementById("parcial2").value);
    var parcial3 = parseFloat(document.getElementById("parcial3").value);
    var examenFinal = parseFloat(document.getElementById("examenFinal").value);
    var trabajoFinal = parseFloat(document.getElementById("trabajoFinal").value);
    var calificacionFinal = 0.55 * ((parcial1 + parcial2 + parcial3) / 3) + 0.30 * examenFinal + 0.15 * trabajoFinal;
    document.getElementById("resultado").innerHTML = "Su calificación final es: " + calificacionFinal.toFixed(2);
});