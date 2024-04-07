document.getElementById('formulariodeventas').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var Salariobase = parseFloat(document.getElementById('Salariobase').value);

    var venta1 = parseFloat(document.getElementById('venta1').value);
    var venta2 = parseFloat(document.getElementById('venta2').value);
    var venta3 = parseFloat(document.getElementById('venta3').value);
    
    if (isNaN(Salariobase) || isNaN(venta1) || isNaN(venta2) || isNaN(venta3) || Salariobase <= 0 || venta1 < 0 || venta2 < 0 || venta3 < 0) {
        alert("Por favor, ingrese cantidades válidas.");
        return;
    }
    
    var comision = 0.10; // 10% de comisión
    var comisiontotal = (venta1 + venta2 + venta3) * comision;
    var sumasalario = Salariobase + comisiontotal;
    
    document.getElementById('resultado').innerHTML = `
        <p>El total por comisiones es: ${comisiontotal.toFixed(2)}.</p>
        <p>El salario total es: ${sumasalario.toFixed(2)}.</p>
    `;
    
    document.getElementById('resultado').classList.remove('hidden');
});