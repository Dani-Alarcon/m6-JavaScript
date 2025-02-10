//Problema 1
let sumarPares= [2,4,5,6,7,8,3,1,10,4]
let sumaTotal = 0
for(i in sumarPares.length){
    comprovarPar(sumarPares, i, sumaTotal)
}

function comprovarPar(array, iterador, total){
    if(array[iterador] % 2 == 0){
        total += array[iterador]
    }
}

//Problema 2

let ordenDatos = ["Rodriguez", "8", 9, '5',4, 'Clara']

ordenDatos.concat(6.5)

//Problema 3

let filterWords1 = ["Bob", "Alex", "Zoello"]
let filterWords2 = ["León", "Zebra", "Gacela"];
let filterWords3 = ["Mercedes", "Bmw", "Audi", "Porche"];

let todoJunto = filterWords1.concat(filterWords2, filterWords3)
console.log("Array al principio: " + todoJunto)
for(elemento of todoJunto){
    mirarZ(elemento, todoJunto)
    console.log("Palabras SIN z: "+ elemento)
}

function mirarZ(elemento, arrayPalabras){
    let eliminados
    if (elemento.startsWith('Z')){
        eliminados = arrayPalabras.splice(elemento, 1)
        console.log("Palabras CON z "+ eliminados)
    }
}