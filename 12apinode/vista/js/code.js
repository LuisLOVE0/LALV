/*este proyecto yiene como fin consumir una base de datos, significa que el proyecto esta dividido
en dos partes l aplicacion visual para el usuario y la api con mysql*/
//url donde se ecnuentra la api

const url = "http://localhost:3000/api/articulos";
const contenedor = document.querySelector('tbody');
let resultados = '';

//elementos del modal

const modalArticulo = new bootstrap.Modal(document.getElementById('modalArticulo'));
const formArticulo = document.getElementById('form');
const descripcion = document.getElementById('descripcion');
const precio = document.getElementById('precio');
const stock = document.getElementById('stock');

let opcion = '';
btnCrear.addEventListener('click',()=>{
    descripcion.value = '';
    precio.value = '';
    stock.value = '';
    //vamos a usar el metodo de boost trap
    modalArticulo.show();
    //vamos a darle opciones a nuestro boton
    opcion = 'crear';
});


    
const mostrar = (articulos)=>{
    articulos.forEach(articulo=>{
        resultados +=`
        <tr>
            <td> ${articulo.id}</td>
            <td> ${articulo.descripcion}</td>
            <td> ${articulo.precio}</td>
            <td> ${articulo.stock}</td>
            <td class="text-center"> <a class="btnEditar btn btn-primary">Editar</a>
            <a class="btnBorrar btn btn-danger">Borrar</a></td>
        </tr>
        `
    });
    contenedor.innerHTML = resultados;
};
fetch(url)
    .then(response => response.json())
    .then(data => mostrar(data))
    .catch(error => console.log(error));
const on = (element,event,selector,handler)=>{
    console.log(element);
    console.log(event);
    console.log(selector);
    console.log(handler);
    element.addEventListener(event, e =>{
        if(e.target.closest(selector)){
            handler(e);
        }
        })
}


on(document, 'click', '.btnBorrar', e =>{
    //identificar la fila
    const fila = e.target.parentNode.parentNode;
    const id = fila.firstElementChild.innerHTML;
    alertify.confirm("Estas seguro de borrar este registro?",function(){
        fetch(url+id,{
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(()=> location.reload())
    }), function(){
        alertify.error('Cancelado');
    }
});

let idForm = 0;
on(document, 'click', '.btnEditar', e => {
    const fila = e.target.parentNode.parentNode;
    idForm = fila.children[0].innerHTML;
    const descripcionForm = fila.children[1].innerHTML;
    const precioForm = fila.children[2].innerHTML;
    const stockForm = fila.children[3].innerHTML;
    
    //ya que los identifique para obtener el valor
    descripcion.value = descripcionForm;
    precio.value = precioForm;
    stock.value = stockForm;
    opcion = 'editar';
    modalArticulo.show();
})