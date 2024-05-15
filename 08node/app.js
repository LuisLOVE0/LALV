//vamos a crear nuestro propio seridor

var http = require('http');

//todo servidor debe de poder atender peticiones y debe de poder generar reapuestas por lo tanto nuestra funcion debe de tener 2 paramestros request (solicidtudes) response(respuestas)

var servidor = http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    response.write('<h2>Hola mundo este es mi primer zorras servidor que hace exactamente lo mismo que los demas servidpres</h2>');
    console.log('se hizo una peticion web');
    response.end();
});

//en que puesrto va estar funcionando el servidor
servidor.listen(3000);

//ejecutamos en consola
console.log('ejecutando el servidor en puerto 3000');