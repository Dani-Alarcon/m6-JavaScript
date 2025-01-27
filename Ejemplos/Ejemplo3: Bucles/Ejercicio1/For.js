function imprimirNum() {
    let resultat = 0
    for (let cont = 0; cont < 11; cont++) {
        console.log("Valor de i:", cont);
        resultat = resultat + cont;
    }
    document.getElementById("resultat").textContent = resultat;
}