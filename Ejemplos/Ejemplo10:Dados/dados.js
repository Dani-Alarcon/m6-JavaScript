for (i = 1; i < 5; i++) {
    let num = document.createTextNode(randomDado())

    let cuadrado = document.createElement('p')
    let teclado = document.getElementById('contenedor')

    cuadrado.className = "dados"
    
    cuadrado.addEventListener("click", () => console.log("hola"));
    
    teclado.appendChild(cuadrado)
    cuadrado.appendChild(num)
    ponerColores(cuadrado, i)
    console.log(reconocerNumerosDados())
}

function ponerColores(cuadrado, i){
    switch(i){
        case 1: cuadrado.className = "a1"
        case 2: cuadrado.className = "a2"
        case 3: cuadrado.className = "b1"
        case 4: cuadrado.className = "b2"
    }
    if(i < 3){
        cuadrado.style.backgroundColor = "blue"
    }else{
        cuadrado.style.backgroundColor = "red"
    }
}
function reconocerNumerosDados(){
    let dado1 = document.getElementsByClassName("a1")
    let dado2 = document.getElementsByClassName("a2")
    let dado3 = document.getElementsByClassName("b1")
    let dado4 = document.getElementsByClassName("b2")
    let sumA= dado1.textContent + dado2.textContent
    let sumB = dado3.textContent + dado4.textContent
    if(sumA > sumB){
        return "ganador azul"
    }else{
        console.log(sumA)
        return "ganador rojo"
        
    }
    
}
function randomDado(maxDado = 6){
    return Math.floor(maxDado*Math.random()) + 1
}
