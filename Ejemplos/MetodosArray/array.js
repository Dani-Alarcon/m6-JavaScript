let nums = [3.4, 7.9, 8.0, 2.5, 5.6, 5.4, 9.0]

//Calcula la nota media
let notaMedia = nums.reduce((total, num) => (total + num / nums.length),0)
console.log('Nota media: ' + notaMedia.toFixed(2))

//Obtén la primera nota superior a 5
let superiorCinco = nums.reduce((num, mayorCinco) => num > 5 ? num : mayorCinco)
console.log('Primera superior a 5: ' + superiorCinco)

//Las notas son sobre 10, cambialas a sobre 20.
let sobreDiezAVeinte = nums.map(num => num * 2)
console.log('Notas sobre 20:' + sobreDiezAVeinte)