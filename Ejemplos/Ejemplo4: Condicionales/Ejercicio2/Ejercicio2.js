function numSecret() {
    let numSecreto = Math.floor(Math.random() * 101);
    let acertado = false
    let intentos = 0
    do {
        let numUsuario = prompt("Adivina el número")
    
        if (numUsuario > numSecreto) {
            confirm ("El numero a adivinar es mas pequeño")
            intentos++
        } else if (numUsuario < numSecreto){
            confirm ("El numero a adivinar es mas grande")
            intentos++
        } else if (numUsuario == numSecreto){
            confirm ("Has adivinado el numero")
            intentos++
            acertado = true
        }
    
    } while (acertado = true)
    alert("Intentos: ", intentos)
}
numSecret();