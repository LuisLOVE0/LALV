function calculateAge() {
    var day = parseInt(document.getElementById("day").value);
    var month = parseInt(document.getElementById("month").value);
    var year = parseInt(document.getElementById("year").value);

    var today = new Date();
    var birthDate = new Date(year, month - 1, day);
    
    if (isNaN(birthDate.getTime())) {
        document.getElementById("result").innerHTML = "Por favor, introduce una fecha válida.";
        return;
    }

    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    document.getElementById("result").innerHTML = "La edad es: " + age;
}