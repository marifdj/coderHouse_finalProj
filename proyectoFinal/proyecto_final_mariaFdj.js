/*
Codifica una función cuyas instrucciones permitan ordenar una colección (array).
Preferentemente, recibir el criterio de ordenamiento por parámetro,
y mostrar el resultado del procesamiento en una salida.
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
    let valor1 = prompt('Ingresar el producto que quiere seleccionar');
    if(valor1=== 'IPA' && valor !=null){
        alert('Su cerveza elegida es IPA!');
    }
    if (valor1==='Honey' && valor !=null){
        alert('Su cerveza es Honey!')
    }else{
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