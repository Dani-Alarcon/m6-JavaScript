// Función para guardar las cookies con los colores seleccionados
function crearCookies() {
    let fondo = document.getElementById('fondo').value;
    let fuente = document.getElementById('fuente').value;

    document.cookie = `fondo=${fondo}; path=/; max-age=31536000`;
    document.cookie = `fuente=${fuente}; path=/; max-age=31536000`;
    document.cookie = `configurada=true; path=/; max-age=31536000`;

    // Recarga la página principal y cierra la ventana
    if (window.opener) {
        window.opener.location.reload();
    }
    window.close();
}

// Código que se ejecuta cuando la ventana emergente ha cargado
document.addEventListener("DOMContentLoaded", () => {
    let botonGuardar = document.getElementById('guardar');
    if (botonGuardar) {
        botonGuardar.addEventListener('click', crearCookies);
    }
});
