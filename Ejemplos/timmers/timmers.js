const idTimeout = setTimeout(() => console.log('Timeout que se ejecuta al cabo de 5 seg.'), 5000);

//Creamos una función y pasamos parametro
function showMessage(msg) {
 console.log(msg)
}

//especificamos la función que qeuremos que se ejecute, no la ejecitamos --> No ponemos ();
const idTimeoutF = setTimeout(showMessage, 1000, 'Timeout que se ejecuta al cabo de 1 seg.');

let i = 1;
const idInterval = setInterval(() => {
 console.log('Interval cada 3 seg. Ejecución nº: '+ i++);
 if (i === 5) {
   clearInterval(idInterval);
   console.log('Fin de la ejecución del Interval');
 }
}, 3000);