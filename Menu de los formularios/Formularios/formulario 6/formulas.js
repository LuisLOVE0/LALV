function calculateAge() {
    var dias = parseInt(document.getElementById("dias").value);
    var meses = parseInt(document.getElementById("meses").value);
    var años = parseInt(document.getElementById("años").value);

    var hoy = new Date();
    var nacimiento = new Date(años, meses - 1, dias);
    
    if (isNaN(nacimiento.getTime())) {
        document.getElementById("resultado").innerHTML = "Por favor, introduce una fecha válida.";
        return;
    }

    var edad = hoy.getFullYear() - nacimiento.getFullYear();
    var m = hoy.getMonth() - nacimiento.getMonth();
    if (m < 0 || (m === 0 && hoy.getDate() < birthDate.getDate())) {
        edad--;
    }

    document.getElementById("resultado").innerHTML = "La edad es: " + edad;
}