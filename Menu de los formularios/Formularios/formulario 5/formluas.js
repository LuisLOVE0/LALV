document.getElementById("genderForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var maleCount = parseInt(document.getElementById("maleCount").value);
    var femaleCount = parseInt(document.getElementById("femaleCount").value);

    if (isNaN(maleCount) || isNaN(femaleCount)) {
        alert("Por favor ingresa números válidos para el número de hombres y mujeres.");
        return;
    }

    var total = maleCount + femaleCount;
    var malePercentage = (maleCount / total) * 100;
    var femalePercentage = (femaleCount / total) * 100;

    document.getElementById("result").innerHTML = "<h2>Porcentaje de Hombres: " + malePercentage.toFixed(2) + "%</h2><p>Porcentaje de Mujeres: " + femalePercentage.toFixed(2) + "%</p>";
});