function calcularDescuento() {
    var totalCompraInput = document.getElementById("totalCompra");
    var totalAPagarOutput = document.getElementById("totalAPagar");
    var totalCompra = parseFloat(totalCompraInput.value);
    if (isNaN(totalCompra)) {
        alert("Por favor, ingrese un número válido para el total de la compra.");
        totalCompraInput.value = "";
        totalCompraInput.focus();
        return;
    }
    var descuento = totalCompra * 0.15;
    var totalAPagar = totalCompra - descuento;
    totalAPagarOutput.value = totalAPagar.toFixed(2);
}