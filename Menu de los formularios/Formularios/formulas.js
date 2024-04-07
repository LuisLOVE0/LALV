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

document.getElementById("formulariodelbanco2").addEventListener("submit", function(event) {
    event.preventDefault();
    var priventa = parseFloat(document.getElementById("priventa").value);
    var pricomision = priventa * 0.1;
    var segventa = parseFloat(document.getElementById("segventa").value);
    var segcomision = segventa * 0.1;
    var terventa = parseFloat(document.getElementById("terventa").value);
    var tercomision = terventa * 0.1;
    
    document.getElementById("comision1").innerText = "Comisión por Venta 1: $" + pricomision.toFixed(2);
    document.getElementById("comision2").innerText = "Comisión por Venta 2: $" + segcomision.toFixed(2);
    document.getElementById("comision3").innerText = "Comisión por Venta 3: $" + tercomision.toFixed(2);
    document.getElementById("resultado2").style.display = "block";


    if (!validarNumero(Sueldobase)) {
        alert("Por favor, ingresa solo numeros en el apartado de sueldo base.");
        event.preventDefault();
    }
    if (!validarNumero(priventa)) {
        alert("Por favor, ingresa solo numeros en el apartado de venta 1.");
        event.preventDefault();
    }
    if (!validarNumero(segventa)) {
        alert("Por favor, ingresa solo numeros en el apartado de venta 2.");
        event.preventDefault();
    }
    if (!validarNumero(terventa)) {
        alert("Por favor, ingresa solo numeros en el apartado de venta 3.");
        event.preventDefault();
    }
});
