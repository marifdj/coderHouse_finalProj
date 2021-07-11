/*
>>Objetivos generales:
Codificar la funcionalidad inicial del simulador. 
Identificar el flujo de trabajo del script en términos de captura de entradas ingresadas por el usuario, procesamiento esencial del simulador y notificación de resultados en forma de salida.
>>Objetivos específicos:
Capturar entradas mediante prompt().
Declarar variables y objetos necesarios para simular el proceso seleccionado.
Crear funciones y/o métodos para realizar operaciones (suma, resta, concatenación, división, porcentaje, etc).
Efectuar una salida, que es el resultado de los datos procesados, la cual puede hacerse por alert() o console.log().

*/

//Array de bebidas
class Bebida {
    constructor(nombre, precio) {
        this.nombre  = nombre.toUpperCase();
        this.precio  = parseFloat(precio);
    }
        sumaIva() {
        this.precio = this.precio * 1.21;
    }
}

function saludar(){
    alert('Los sabores de cerveza son: IPA, Honey y Negra')    
    let valor = prompt('Ingresar el producto que quiere seleccionar');
    if(valor=== 'IPA' && valor !=null){
        alert('Su cerveza elegida es IPA!');
    }
    if (valor==='Honey' && valor !=null){
        alert('Su cerveza es Honey!')
    }
    if (valor==='Negra' && valor !=null){
        alert('Su cerveza es Negra!')
        }
    }
 saludar();   
//Declaramos un array de productos para almacenar objetos
const productos = [];

productos.push(new Bebida("Honey", 850));
productos.push(new Bebida("IPA", 340));
productos.push(new Bebida("Negra", 350));


for (const producto of productos) {
    producto.sumaIva();
    console.log(producto);
}


var ordenarMenorPrecio= [];
ordenarMenorPrecio= productos.map(elemento => elemento );
var ordenarMenorPrecio = productos;
ordenarMenorPrecio.sort(function(a, b){
return a.precio - b.precio;
})

console.log('Ordenados por menor valor');
console.log(ordenarMenorPrecio);