const keyboard = document.getElementById("contenedor");
const output = document.getElementById("output");

for (i = 0; i < 10; i++) {
    let num = document.createTextNode(i)

    let cuadrado = document.createElement('p')
    let teclado = document.getElementById('contenedor')

    estilosNumerico(cuadrado, teclado);

    const keyButton = document.createElement("div");
    keyButton.textContent = i;
    
    cuadrado.addEventListener("click", () => handleKeyClick(num.textContent));
    
    teclado.appendChild(cuadrado)
    cuadrado.appendChild(num)
}

function handleKeyClick(i) {
    if (i === "Esborrar") {
        // Esborra l'últim dígit
        output.value = output.value.slice(0, -1) || 0;
    } else if (i === "Enter") {
        // Mostra el valor actual a la consola
        console.log("Valor introduït:", output.value);
        alert(`Valor introduït: ${output.value}`);
        output.value = 0; // Reinicia el quadre de text
    } else {
        // Afegeix el número seleccionat
        if (output.value === 0) {
            output.value = i;
        } else {
            output.value += i;
        }
    }
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