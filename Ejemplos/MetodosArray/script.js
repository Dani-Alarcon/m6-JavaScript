//Ejemplo de everey y some
let arrayNotas = [5.2, 3.9, 6, 9.75, 7.5, 3]
let todosAprobados = arrayNotas.every(nota => nota >= 5) // false
let algunAprobado = arrayNotas.some(nota => nota >= 5)   // true
//1: Muestra el valor mas grande
let numbers = [3, 27, 95, 7, 25, 95, 81]
numeroMayor(numbers)

function numeroMayor(numbers) {
    let numeroMasGrande = 0
    numbers.forEach(numero => {
        if (numero > numeroMasGrande) {
            numeroMasGrande = numero
        }

    })
    console.log('El numero mas grande es: ' + numeroMasGrande)
}
//2: Muestra por pantalla el string más largo.
let myStrings = ['first', 'second', 'third', 'fourth',
    'reallyLongString', 'sixth']
stringLargo(myStrings)
function stringLargo(myStrings) {
    let stringMasLargo = ""
    myStrings.forEach(string => {
        if (string.length > stringMasLargo.length) {
            stringMasLargo = string
        }

    })
    console.log('El string mas largo es: ' + stringMasLargo)
}

//3: dias con M
let arrayDias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes',
    'Sabado', 'Domingo']
diasConM(arrayDias)
function diasConM(arrayDias) {
    arrayDias.forEach(dia => {
        if (dia.startsWith('M')) {
            console.log('Dias con M: ' + dia)
        }
    })
}

//4: Meses con vocal

let arrayMeses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio',
    'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
mesesVocal(arrayMeses)

function mesesVocal(arrayMeses) {
    arrayMeses.forEach(mes => {
        if (mes.startsWith('A') || mes.startsWith('E') || mes.startsWith('I')
            || mes.startsWith('O') || mes.startsWith('U')) {
            console.log('Meses con vocal: ' + mes)
        }
    })
}

