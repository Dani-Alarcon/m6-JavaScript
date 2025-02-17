/* EXERCICI 1 */
for (i = 0; i < 10; i++) {
    let num = document.createTextNode(i)
    let cuadrado = document.createElement('p')
    cuadrado.appendChild(num)
    let teclado = document.getElementById('contenedor')
    estilosNumerico(cuadrado, teclado);
    teclado.appendChild(cuadrado)
}

function estilosNumerico(cuadrado, teclado) {
    cuadrado.style.color = 'white'
    cuadrado.style.backgroundColor = '#008B8B'
    cuadrado.style.height = '50px'
    cuadrado.style.width = '50px'
    cuadrado.style.fontSize = '45px'
    cuadrado.style.textAlign = 'center'
    cuadrado.style.margin = '5px'
    cuadrado.style.borderRadius = '5px'

    teclado.style.display = 'grid'
    teclado.style.gridTemplateColumns = 'auto auto auto'
    teclado.style.grid = '3'
    teclado.style.width = '100px'

    if (i % 3 == 0) {
        cuadrado.style.backgroundColor = '#FED801';
    }

    if (i % 2 == 0) {
        cuadrado.style.backgroundColor = 'blue'
    }
}

/* EXERCICI 2 */
for (i = 1; i < 2; i++) {
    for (j = 65; j < 91; j++) {
        let letra = String.fromCharCode(j)
        let letras = document.createTextNode(letra)
        let cuadro = document.createElement('p')
        cuadro.appendChild(letras)
        let teclado = document.getElementById('contenedor2')
        estilosAlfabetico(cuadro, teclado, letra);
        teclado.appendChild(cuadro)
    }
}

function estilosAlfabetico(cuadro, teclado, letra) {
    cuadro.style.color = 'white'
    cuadro.style.backgroundColor = '#FF8C00'
    cuadro.style.height = '50px'
    cuadro.style.width = '50px'
    cuadro.style.fontSize = '45px'
    cuadro.style.textAlign = 'center'
    cuadro.style.margin = '5px'
    cuadro.style.borderRadius = '5px'

    teclado.style.display = 'grid'
    teclado.style.gridTemplateColumns = 'auto auto auto auto auto auto auto auto'
    teclado.style.grid = '3'
    teclado.style.width = '100px'

    if (letra == 'A' || letra == 'E' || letra == 'I' || letra == 'O'|| letra == 'U') {
        cuadro.style.backgroundColor = '#008000'
    }
}