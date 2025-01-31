//Ajedrez solo con un for
let tablero = document.getElementById("tablero");

for (let i = 0; i < 64; i++) {
    let num = document.createTextNode("");
    let cuadrado = document.createElement('p');
    cuadrado.className = "casilla";

    estilosTablero(i, cuadrado, num);

    tablero.appendChild(cuadrado);
    cuadrado.appendChild(num);
}

function estilosTablero(i, cuadrado, num) {
   
    if (parseInt(i / 8) % 2 == 0) {
        if (i % 2 == 0) {
            cuadrado.style.backgroundColor = 'black';
            cuadrado.style.color = 'white';
        } else {
            cuadrado.style.backgroundColor = 'white';
            cuadrado.style.color = 'black';
        }
    } else {
        if (i % 2 == 0) {
            cuadrado.style.backgroundColor = 'white';
            cuadrado.style.color = 'black';
        } else {
            cuadrado.style.backgroundColor = 'black';
            cuadrado.style.color = 'white';
        }
    }

    if (i < 16) {
        num.textContent = "O";  
    } else if (i >= 48) {
        num.textContent = "X";  
    }
}
