document.addEventListener('mousemove', (event) => {
    const cajaRoja = document.getElementById('cajaRoja');
    cajaRoja.style.marginRight = `${screenX}px`
    cajaRoja.style.marginTop = `${screenTop}px`
    cajaRoja.style.marginBottom = `${screenY}px`
});
