function imprimirNum() {
    let numero = prompt ("Introdueix un número")
    let resultat = 0
    for (let i = 0; i <= numero; i++) {
        resultat = resultat + i;
    }
    console.log("El resultado de la suma és: ", resultat)
}
imprimirNum()