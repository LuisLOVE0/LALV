const express = require('express');
const mysql2 = require('mysql2');
const cors = require('cors');

//toda la api la vamos a manejar cpn JSON
//los archivos json tienenn
const {json} = require('express');
const app = express();
app.use(express.json());
app.use(cors());
//establecemos los parametros de la conexion
const conexion = mysql2.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'titolopez5',
    database : 'articulosbs'
});

//vamos a realizar la conexion

conexion.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log('Conexion exitosa');
    }
});


//vamos a empezar por definir las rutas para saber como se va a consumir el servidor

app.get('/', function(req, res){
    res.send('Ruta INICIO');
});

app.get('/api/articulos',(req,res)=>{
    conexion.query('select * from articulos',(error,filas)=>{
        if(error){
    }else{
        res.send(filas);
    }
});
});

app.get('/api/articulos/:id',(req,res)=>{
    conexion.query('select * from articulos where id = ?',[req.params.id],(error,fila)=>{
    if(error){
        throw error;
    } else{
        console.log('conexion exitosa');
    }
    })
})


app.delete('/api/articulos/:id', (res,req)=>{
    conexion.query('delete from articulos where id = ?',[req.params.id],function(error,fila){
        if(error){
            throw error;
        }else{
            res.send(filas);
        }
    })
});

app.post('/api/articulos',(res,req)=>{
    let data ={
        descripcion :  req.body.descripcion,
        precio : req.body.precio,
        stock : req.body.stock
    }
    let sql = "insert into articulos set ?";
    conexion.query(sql,data,function(error,result){
        if(error){
            throw error;
        }else{
            Object.assign(data,{id:result.insertId});
            res.send(data);
        }
    })
});

app.put('/api/articulos/:id', (req, res) => {
    let id = req.params.id;
    let descripcion = req.body.descripcion;
    let precio = req.body.precio;
    let stock = req.body.stock;
    let sql = "UPDATE articulos SET descripcion = ?, precio = ?, stock = ? WHERE id = ?";
    conexion.query(sql, [descripcion, precio, stock, id], function(error, result) {
        if (error) {
            throw error;
        } else {
            res.send(result);
        }
    });
});




const puerto = process.env.PUERTO || 3000
app.listen(puerto, function(){
    console.log('Servidor corriendo en el puerto '+puerto);
})

