function imprimirNum() {
    let minimo = parseInt(prompt("Introduce el mínimo del rango"));
    let maximo = parseInt(prompt("Introduce el máximo del rango"));
    for (let i = minimo; i <= maximo; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}
imprimirNum();