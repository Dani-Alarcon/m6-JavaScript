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
    let text = ''
    if (event.key == "Enter") {
        text = "Click en ENTER";
      } else {
        text = "No click en ENTER";
      }
      console.log(text)
})