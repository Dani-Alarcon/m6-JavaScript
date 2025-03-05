// Ejercicios para practicar los métodos del Array
// Ejercicio 1
const miArrayEx1 = ['hola', 'que', 'tal', 'estas', 'tu', 'bien', 'gracias'] 
//Función que recibe un array y que comprueba si todos los elementos de una array son de tipo String
function todoString(miArrayEx1) {
    let todosStrings = true 
    miArrayEx1.forEach(palabra => {
        if (typeof palabra !== 'string') {
            todosStrings = false 
        }
    }) 
    return todosStrings 
}

console.log("Ejercicio 1") 
console.log(todoString(miArrayEx1)) 

// Ejercicio 2
const miArrayEx2 = [0, 2, 4, 6, 8, 10, 12, 14, 16] 
//Función que recibe un array y que comprueba que todos los elementos de una array son pares.
function todoPar(miArrayEx2) {
    let todosPares = true 
    miArrayEx2.forEach(numero => {
        if (numero % 2 !== 0) {
            todosPares = false 
        }
    }) 
    return todosPares 
}

console.log("Ejercicio 2") 
console.log(todoPar(miArrayEx2)) 


// Ejercicio 3
const miArrayEx3 = ['hola', 'que', 'tal', 'estas', 'tu', 'bien', 'gracias'] 
//Función que recibe un array y que comprueba si al menos un elemento del array tiene una longitud mayor que dos.
function longitudMayorA2(miArrayEx3) {
    let encontrado = false 
    miArrayEx3.forEach(elemento => {
        if (elemento.length > 2) {
            encontrado = true 
        }
    }) 
    return encontrado 
}

console.log("Ejercicio 3") 
console.log(longitudMayorA2(miArrayEx3)) 

// Ejercicio 4
const miArrayEx4 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 
//Función que recibe un array y que comprueba si al menos un número es par.
function alMenosUnPar(miArrayEx4) {
    let encontrado = false 
    miArrayEx4.forEach(numero => {
        if (numero % 2 === 0) {
            encontrado = true 
        }
    }) 
    return encontrado 
}

console.log("Ejercicio 4") 
console.log(alMenosUnPar(miArrayEx4)) 

// Ejercicio 5
const miArrayEx5 = ['hola', 'dani', 'como', 'estas', '?', 'bien', 'adios'] 
//Función que recibe un array y que devuelve un nuevo array con la longitud de cada string que hay dentro del array.
function longitudStrings(miArrayEx5) {
    return miArrayEx5.map(item => item.length) 
}

console.log("Ejercicio 5") 
console.log(longitudStrings(miArrayEx5)) 


//Ejercicio 6
const miArrayEx6 = [1, 2, 3, 4, 5, 6, 7]
//Función que recibe un array y un número y que devuelve todos los elementos del array multiplicado por dicho número pasado por  parámetro.
function multiplicarArray(miArrayEx6) {
    let numUsuari = prompt('Introduce un numero(Ejercicio 6)')
    return miArrayEx6.map(num => num * numUsuari)
}
console.log("Ejercicio 6") 
console.log(longitudStrings(miArrayEx6)) 

//Ejercicio 7
const miArrayEx7 = ['zapato', 'gato', 'zarza', 'paco']
//Función que recibe un array y que devuelve un nuevo array con solo los elementos que empiezan por Z.
function filtrarPrimeraLetra(miArrayEx7) {
    return miArrayEx7.filter(palabra => palabra.startsWith('z'))
}
console.log("Ejercicio 7")
console.log(filtrarPrimeraLetra(miArrayEx7)) 

//Ejercicio 8
const miArrayEx8 = [77, 55, 43, 22, 5, 15, 25,]
//Función que recibe un array y que devuelve un nuevo array con solo los elementos que sean múltiplos de 5.
function multiplos5(miArrayEx8) {
    return miArrayEx8.filter(multiple => multiple = multiple % 5 == 0)
}
console.log("Ejercicio 8")
console.log(multiplos5(miArrayEx8)) 

//Ejercicio 9
const miArrayEx9 = ['zapato', 'gato', 'zarza', 'paco', 'si']
function filtrarLong(miArrayEx9) {
    return miArrayEx9.find(long => long.length >= 5)
}
console.log("Ejercicio 9")
console.log(filtrarLong(miArrayEx9)) 

//Ejercicio 10
const miArrayEx10 = ['pepe', 'zapato', 'gato', 'zarza', 'paco', 'si']
function filtrarUltimaLetra(miArrayEx10) {
    return miArrayEx10.reverse().find(palabra => palabra.startsWith('p'))
}
console.log("Ejercicio 10")
console.log(filtrarUltimaLetra(miArrayEx10)) 

//Ejercicio 11
const miArrayEx11 = ['pepe', 'tapa', 'gato', 'tacon', 'paco', 'si']
function filtrarPosicion(miArrayEx11) {
    return miArrayEx11.findIndex(palabra => palabra.startsWith('t'))
}
console.log("Ejercicio 11")
console.log(filtrarPosicion(miArrayEx11)) 

//Ejercicio 12
const miArrayEx12 = [77, 55, 4, 22, 5, 15, 20,]
function filtrarUltimoPar(miArrayEx12) {
    return miArrayEx12.reverse().find(numPar => numPar % 2 == 0)
}
console.log("Ejercicio 12")
console.log(filtrarUltimoPar(miArrayEx12)) 


//Ejercicio 13
const miArrayEx13 = [1, 2, 3, 4, 5, 6, 7]
function sumaElementos(miArrayEx13) {
    let sumaFinal = 0
    miArrayEx13.forEach(num => {
        sumaFinal = num + sumaFinal
    }) 
    return sumaFinal
}
console.log("Ejercicio 13")
console.log(longitudStrings(miArrayEx13)) 
//Ejercicio 14
const miArrayEx14 = [20, 17, 13, 8, 9, 12, 2]
function restaElementos(miArrayEx14) {
    return miArrayEx14.reduce((acumulador, num) => acumulador - num) 
}
console.log("Ejercicio 14")
console.log(restaElementos(miArrayEx14)) 

//Ejercicio 15
const miArrayEx15 = [3, 9, 9, 11, 13, 17, 20]
function restaElementosReverse(miArrayEx15) {
    return miArrayEx15.reverse().reduce((acumulador, num) => acumulador - num) 
}
console.log("Ejercicio 15")
console.log(longitudStrings(miArrayEx15)) 