//primero tenemos que importar las librerias

var expresss = require('express');

//temenos que realizar una instancia del obejto, para poder hacer uso de experess

var app = expresss();

//para node tenemos que utilizar rutas de acceso a

app.get('/',function(req,res){
    //debemos generar una respuesta del sitio
    res.send('Ruta de inicio zorra');
});

//levantamos el servidor

app.listen(3000, function(req,rep){
    console.log("Servidor inicializado en el puerto 3000");
});