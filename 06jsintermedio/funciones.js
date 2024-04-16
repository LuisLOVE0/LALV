/*java script maneja variables del siguiente mdoo :
    var -> es una variable de acceso local que cualquiera puede hacer uso de ella
    let -> es una variable "protegida" solo se puede hacer uso dentro de l funcion es una funcion local mas no global
    const -> es una constante, significa que su valor no puede cambiaar
    ejemplo 
  
var x = "hola";
let x = "habia una vez";

if (true){
    
    
    //es independeiente
}

console.log(x);

*/

//quiero desarrollar una funcion de suma 

/*function suma(n1, n2){
    return n1+n2;

}
console.log(`Esta es la suma: ${suma(4,5)}`);


//funciones flecha, las funciones flecha nos ayudan a poder realizar operaciones de una forma mas sencilla y su estructura es la siguiente;
//"cadena" -> id,clase,nombre,atributo
//const sumarflecha =  (n1,n2) => n1+n2;
//console.log(`Esta es la suma: ${sumarflecha(10,5)}`);
*/

const razasdeperro = [
    "gran danes",
    "pastor aleman",
    "chihuahua",
    "betoven",
    "dalmata",
    "pitbull",
    "san bernardo"
];

//queremos recorrerolo e imprimirlo
//for
/*
for (let i = 0; i < razasdeperro.length; i++){
    console.log(razasdeperro[i]);
}

//

for(const raza of razasdeperro){
    console.log(raza);
}

//

for(const indice in razasdeperro){
    console.log(razasdeperro[indice]);
}
for(const indice in razasdeperro){
    console.log(razasdeperro);
}
*/

//forEach itera sobre los elementos del arreglo y no devuelve nada es decir, lo recorre y no devuelve nada todos 
//los forEach son funciones flecha por defecto
//
//razasdeperro.forEach((raza, indice, razasdeperro) => console.log(raza));
//la estructura general d((raza, indice, arreglooriginal)=>loquequieroque haga)

//funcion map
//itera sobre los elementos del arreglo y regresa un arreglo diferente con el cual podemos jugar

//const razasdeperrosenmayusculas = razasdeperro.map((raza)=>console.log(raza.toUpperCase()));

//FIND
//nos permite realizar una busqueda de un elemento dentro del arreglo, si no lo encuentra, lo retorna si no lanza un "undefine"

//por ejemplo yo quiero buscar dentro del arreglo si existe la raz chihuahua o san bernardo o cualquiera
/*
if(razasdeperro.find((raza)=>raza==="chihuahua")){
    console.log("la raza que se encuentra dentro del arreglo");
    console.log(razasdeperro);
}else{
    //hay que meterlo
    razasdeperro.push("chihuahua");
    console.log(razasdeperro);
}
*/

//find index 
//es muy similar al anterior realiza una busqueda del elemento, pero en lugar de regresar el elemento, regresa su indice, si no lo encuentra, nos devuelve un -1
//esta funcion es particularmente util en elementos que necesitamos modificar de un arreglo, dentro de una copiA
