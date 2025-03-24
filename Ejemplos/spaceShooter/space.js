document.addEventListener('mousemove', (event) => {
    const cajaRoja = document.getElementById('cajaRoja');
    cajaRoja.style.left = `${event.clientX}px`
    cajaRoja.style.right = `${event.clientY}px`
    
});