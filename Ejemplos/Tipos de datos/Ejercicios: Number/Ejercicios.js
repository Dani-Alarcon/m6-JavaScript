let num1 = prompt("Introduce un número");
let num2 = prompt("Introduce otro número");

function mayor(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

alert(`El número mayor es ${mayor(num1, num2)}`);


// Ejercicio 2


function multiplicar(num1, num2) {
    let resultado = 0;
    for (let i = 0; i < num2; i++) {
        resultado += num1;
    }
    return resultado;
}

alert(`El resultado de la multiplicacion es: ${multiplicar(num1, num2)}`);

let nota1 = parseFloat(prompt("Introduce la primera nota"));
let nota2 = parseFloat(prompt("Introduce la segunda nota"));
let nota3 = parseFloat(prompt("Introduce la tercera nota"));

function notaMedia(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3;
}

alert(`El resultado de la media de las notas es: ${notaMedia(nota1, nota2, nota3).toFixed(2)}`);

let dado1 = Math.floor(Math.random() * 6) + 1;
let dado2 = Math.floor(Math.random() * 6) + 1;

let dado3 = Math.floor(Math.random() * 6) + 1;
let dado4 = Math.floor(Math.random() * 6) + 1;

if (dado1 + dado2 > dado3 + dado4) {
    alert(`El primer jugador ha ganado con ${dado1 + dado2}`);
} else {
    alert(`El segundo jugador ha ganado con ${dado3 + dado4}`);
}
