//PRIMER FORMULARIO DE JS
document.getElementById("formulariodelbanco").addEventListener("submit", function(event) {
    event.preventDefault();
    var Capitalinicial = parseFloat(document.getElementById("Capitalinicial").value);
    var Montoganado = Capitalinicial * 0.02;
    
    document.getElementById("Ganancia1").innerText = "$" + Montoganado.toFixed(2);
    document.getElementById("resultado1").style.display = "block";

    if (!validarNumero(Capitalinicial)) {
        alert("Por favor, ingresa solo numeros en el apartado de capital inicial.");
        event.preventDefault();
    }
});

function validarNumero(input) {
    return !isNaN(input);
}
//SEGUNDO FORMULARIO DE JS
