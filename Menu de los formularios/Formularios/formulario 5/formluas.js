document.getElementById("Formdegenero").addEventListener("submit", function(event) {
    event.preventDefault();
    var hombres = parseInt(document.getElementById("hombres").value);
    var mujeres = parseInt(document.getElementById("mujeres").value);

    if (isNaN(hombres) || isNaN(mujeres)) {
        alert("Ingresa solo números.");
        return;
    }

    var total = hombres + mujeres;
    var Porcentajedehombres = (hombres / total) * 100;
    var Porcentajedemujeres = (mujeres / total) * 100;

    document.getElementById("resultado").innerHTML = "<h2>Porcentaje de Hombres: " + Porcentajedehombres.toFixed(2) + "%</h2><p>Porcentaje de Mujeres: " + Porcentajedemujeres.toFixed(2) + "%</p>";
});