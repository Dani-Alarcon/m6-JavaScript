function guardarLocal() {
    let fondo = document.getElementById('fondo').value
    let fuente = document.getElementById('fuente').value

    localStorage.setItem('fondo', fondo)
    localStorage.setItem('fuente', fuente)
    localStorage.setItem('configurado', true)

    if (window.opener) {
        window.opener.location.reload()
    }
    window.close()
}

document.addEventListener("DOMContentLoaded", () => {
    let botonGuardar = document.getElementById('guardar')
    if (botonGuardar) {
        botonGuardar.addEventListener('click', guardarLocal)
    }
});
