function listaPropiedades(obj) {
    let result = ``;
    for (let p in obj) {
            result += `${p} = ${obj[p]}\n`;
    }
    return result;
 }
 
//Ejercicio 1
let tvSamsumg = {
    nombre: 'TV Samsung 42',
    categoria: "Televisores",
    unidades: 4,
    precio: 345.95
}
tvSamsumg.getImporte = function(){
    return this.unidades * this.precio
}
console.log('El importe es: '+ tvSamsumg.getImporte())

//Ejercicio 2

/*tvSamsumg.resolucion = prompt("¿Que resolucion tiene la tele?")
console.log("Resolucion de la tele: " + tvSamsumg.resolucion + " pixeles")*/

//Ejercicio 3

let coche = {
    marca: 'Toyota',
    modelo: 'Corolla',
    año: 2020,
    encendido: false,
    arrancar: function(){
        return this.encendido = true
    },
    apagar: function(){
        return this.encendido = false
    },
    recorrer: function(km){
        return this.kilometraje + km
    }
}
console.log("¿El coche esta encendido? " + coche.arrancar())
console.log("¿El coche esta encendido? " + coche.apagar())

coche.kilometraje = 0

console.log('El kilometraje inicial es: '+ coche.kilometraje)

console.log('Ahora el kilometraje es: '+ coche.recorrer(3))

//Ejercicio 4

let usuarios = [
    {nombre: 'Dani',
        edad: 18,
        email: 'daniel.alarcon.7e6@itb.cat'
    },
    {nombre: 'Juan',
        edad: 25,
        email: 'juan@email.com'
    }
    
]