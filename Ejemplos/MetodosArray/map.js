const modulos = ["m02", "m03", "m04", "m05", "m06", "m07", "m08", "FOL"]
const alumnoNotas = [[8, 9, 4], [9, 10], [6, 8, 10], [4], [8, 4, 7], [], [7, 5, 9, 10],[10]]

//Actualiza las notas de m07 a [7.5, 6]
const map1 = new Map()
map1.set('m07',[7.5, 6])
alumnoNotas[5] = map1.get('m07')
console.log(alumnoNotas)

//Obten un SET de las claves
let modulosSet = new Set(modulos)
console.log(modulosSet)