//Problema 1
let sumarPares = [2, 4, 5, 6, 7, 8, 3, 1, 10, 4]
let sumaTotal = 0
for (i in sumarPares.length) {
    comprovarPar(sumarPares, i, sumaTotal)
}

function comprovarPar(array, iterador, total) {
    if (array[iterador] % 2 == 0) {
        total += array[iterador]
    }
}

//Problema 2

let ordenDatos = ["Rodriguez", "8", 9, '5', 4, 'Clara']

function problema2(ordenDatos) {
    let nombre = ordenDatos.pop()
    ordenDatos.unshift(nombre)

    let suma = 0

    for (let i = 2; i < ordenDatos.length; i++) {
        let num = parseInt(ordenDatos[i])
        suma += num

    }
    let media = suma / (ordenDatos.length - 2)
    ordenDatos.push(media)

    return ordenDatos
}
console.log(problema2(ordenDatos))


//Problema 3

let filterWords1 = ["Bob", "Alex", "Zoello"]
let filterWords2 = ["León", "Zebra", "Gacela"];
let filterWords3 = ["Mercedes", "Bmw", "Audi", "Porche"];

let todoJunto = filterWords1.concat(filterWords2, filterWords3)
console.log("Array al principio: " + todoJunto)

mirarZ(todoJunto)

function mirarZ(arrayPalabras) {
    let eliminados = []
    for (elemento of arrayPalabras) {
        if (!elemento.startsWith('Z')) {
        eliminados.push(elemento)
    }
    }
}