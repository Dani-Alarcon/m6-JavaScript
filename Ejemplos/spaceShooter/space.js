
document.addEventListener('mousemove', (event) => {
    const cajaRoja = document.getElementById('cajaRoja');
    cajaRoja.style.left = `${event.clientX}px`
    cajaRoja.style.right = `${event.clientY}px`
    console.log('El raton se mueve')
});

document.addEventListener("keypress", (event) => {
    if (event.key === " ") {
        dispararBala();
        console.log('Click en espacio')
    }
});

function dispararBala() {
    const cajaRoja = document.getElementById('cajaRoja');
    const bala = document.createElement("div");
    bala.classList.add("bala");
    document.body.appendChild(bala);

    let x = cajaRoja.offsetLeft + cajaRoja.width / 2;
    let y = cajaRoja.offsetTop;

    bala.style.left = `${x}px`;
    bala.style.top = `${y}px`;

    let intervalo = setInterval(() => {
        y -= 5;
        bala.style.top = `${y}px`
        if (y < 0) {
            clearInterval(intervalo);
            bala.remove();
        }
    }, 20);
    console.log('Se ha disparado')

}