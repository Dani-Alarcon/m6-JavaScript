function abrirVentana() {
    if (!localStorage.getItem('configurado')) {
        const features = "left=200,top=200,width=400,height=350";
        window.open('localStorageVentana.html', 'ventana', features);
    }
}

function aplicarEstilos() {
    document.body.style.backgroundColor = localStorage.getItem('fondo');

    let titulo = document.getElementById('titulo');
    if (titulo) titulo.style.color = localStorage.getItem('fuente');

}

document.addEventListener("DOMContentLoaded", () => {
    abrirVentana();
    aplicarEstilos();
});