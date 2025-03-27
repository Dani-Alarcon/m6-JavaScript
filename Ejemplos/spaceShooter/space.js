document.addEventListener('mousemove', (event) => {
    const cajaRoja = document.getElementById('cajaRoja');
    cajaRoja.style.left = `${event.clientX}px`;
    cajaRoja.style.top = `${event.clientY}px`;
    console.log('El ratón se mueve');
});

document.addEventListener("keydown", (event) => {
    if (event.code === "Space") {
        dispararBala();
        console.log('Click en espacio');
    }
});

function dispararBala() {
    const cajaRoja = document.getElementById('cajaRoja');
    const bala = document.createElement("div");
    bala.classList.add("bala");
    document.body.appendChild(bala);

    let x = cajaRoja.offsetLeft + cajaRoja.offsetWidth / 2 - 2.5;  // Centrar la bala
    let y = cajaRoja.offsetTop;

    bala.style.left = `${x}px`;
    bala.style.top = `${y}px`;

    let intervalo = setInterval(() => {
        y -= 5;
        bala.style.top = `${y}px`;
        if (y < 0) {
            clearInterval(intervalo);
            bala.remove();
        }
    }, 20);
    console.log('Se ha disparado');
}
