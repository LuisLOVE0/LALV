document.getElementById("formulariodelbanco").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var Capitalinicial = parseFloat(document.getElementById("Capitalinicial").value);
    
    var monthlyProfit = Capitalinicial * 0.02;
    
    document.getElementById("Ganancia").innerText = "$" + monthlyProfit.toFixed(2);
    document.getElementById("resultado").style.display = "block";
})