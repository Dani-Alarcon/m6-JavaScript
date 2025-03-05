//Eliminar duplicados de un array utilizando un Set
const numeros = [1, 2, 3, 4, 4, 5, 6, 6, 7]
const numerosUnicos = eliminarDuplicados(numeros)
console.log('Sin duplicados')
console.log(numerosUnicos)

function eliminarDuplicados(numeros) {
    let numerosConSet = new Set(numeros)
    return numerosConSet
}
//Comprobar si dos arrays tienen elementos en común utilizando un Set
const array1 = [1, 2, 3, 4, 5]
const array2 = [4, 5, 6, 7, 8]
console.log('Hay elementos duplicados en los arrays? ' + tienenElementosEnComun(array1, array2))

function tienenElementosEnComun(array1, array2) {
    let setArray1 = new Set(array1)
    let setArray2 = new Set(array2)
    let repetido = false

    /**
     * Con FOR OF
    for(let elemento of setArray1){
        if(setArray2.has(elemento)){
            return true
        }
    }*/

    //Con forEach
    array2.forEach(element => {
        if (setArray1.has(element)) {
            repetido = true
        }
    }) 
    return repetido

}
function renderHtml(id, info) {
    let elemento = document.getElementById(id)
    elemento.innerHTML += `<p>$(info)</p>`

}
