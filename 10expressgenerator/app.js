//tenemos que tener las librerias
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
 //vamos a crear las primeras rutas

 var indexRouter = require('./routes/index');
 var userRouter = require('./routes/index');
const { nextTick } = require('process');

 var app = express();
//para decirle al codigo 
 app.set('views', path.join(__dirname, 'views'));
//tengo que definir el tipo de plantilla
app.set('views engine', 'ejs');

app.use('/', indexRouter);
//SI HAY MAS RUTAS 
app.use('/users',userRouter);

//vamos a definir los directorios publicos

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//por si hay un error 404

app.use(function(req,res,next){
    next(createError(404));
});

app.use(function(req,res,err,next){
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err: {};

    //vamos a un error 500

    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;