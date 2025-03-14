let boton = document.getElementById("boton")

boton.addEventListener("click", () => {
    console.log('Click')
})

boton.addEventListener("dblclick", () => {
    alert('Doble click')
})

boton.addEventListener("mouseover", () => {
    console.log('Eje X: ' + screenX + ' Eje Y: '+ screenY )
})

document.addEventListener("keypress", () =>{
    if (shiftKey) {
        text = "The SHIFT key was pressed!";
      } else {
        text = "The SHIFT key was NOT pressed!";
      }
})