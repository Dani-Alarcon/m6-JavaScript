const numeros = [1, 2, 3, 4, 4, 5, 6, 6, 7]
const numerosUnicos = eliminarDuplicados(numeros)
console.log(numerosUnicos)

function eliminarDuplicados(numeros){
    let numerosConSet = new Set(numeros)
    return numerosConSet
}

const array1 = [1, 2, 3, 4, 5]
const array2 = [4, 5, 6, 7, 8]
console.log(tienenElementosEnComun(array1, array2))

function tienenElementosEnComun(array1, array2){
    let setArray1 = new Set(array1)
    let setArray2 = new Set(array2)
    for(let elemento of setArray1){
        if(setArray2.has(elemento)){
            return true
        }
    }
    setArray1.forEach(elemento => {
        if(setArray2.has(elemento)){
            return true
        }
    })
}