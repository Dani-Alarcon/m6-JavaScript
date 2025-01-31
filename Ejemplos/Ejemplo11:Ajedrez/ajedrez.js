//Ajedrez solo con un for
let tablero = document.getElementById("tablero")

for (let i = 0; i < 64; i++) {
    let num = document.createTextNode("")
    let cuadrado = document.createElement('p')
    cuadrado.className = "casilla"

    estilosTablero(i, cuadrado)
    fichas(i, num)

    tablero.appendChild(cuadrado)
    cuadrado.appendChild(num)
}

function estilosTablero(i, cuadrado) {
    if (parseInt(i / 8) % 2 == 0) {
        if (i % 2 == 0) {
            fondoNegro(cuadrado)
        } else {
            fondoBlanco(cuadrado)
        }
    } else {
        if (i % 2 == 0) {
            fondoBlanco(cuadrado)
        } else {
            fondoNegro(cuadrado)
        }
    }
}

function fichas(i, num) {
    if (i < 16) {
        num.textContent = "O"
    } else if (i >= 48) {
        num.textContent = "X"
    }
}

function fondoNegro(cuadrado) {
    cuadrado.style.backgroundColor = 'black'
    cuadrado.style.color = 'white'

}

function fondoBlanco(cuadrado) {
    cuadrado.style.backgroundColor = 'white'
    cuadrado.style.color = 'black'
}
