function abrirVentana(){
    const features= "left = 200, right = 200, height = 350, width = 400"
    open('cookiesVentana.html', 'ventana', features)
}

document.addEventListener("DOMContentLoaded", ()=>{
    abrirVentana()
})

function crearCookies(){
    let fondo = document.getElementsByName('fondo')
    let fuente = document.getElementsByName('fuente')
    document.cookie = `fondo=${fondo}`
    document.cookie = `fuente=${fuente}`
}

document.getElementById('guardar').addEventListener('click', ()=>{
    crearCookies()
})
