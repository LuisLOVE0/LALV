var mysql = require('mysql2');


var conexion = mysql.createConnection({
    host : 'localhost',
    database : 'alumnos4IV7',
    user : 'root', 
    password : 'titolopez5'
});

conexion.connect(function(error){
    if(error){
        throw error;
        console.log('solo juguito contigo');
    }else{
        console.log('si conected');
    }
});

conexion.query('Delete from registro where boleta = 3', function(error,respuesta){
    if(error){
        throw error;
        console.log('Tas mal mijo');
    }else{
        console.log('Registro existoso', respuesta);
    }
});

conexion.query('select * from registro', function(error, respuesta){
    if(error){
        throw error;
        console.log('no tablita');
    }else{
        respuesta.forEach(respuesta => {
            console.log(respuesta);
        })
    }
});

