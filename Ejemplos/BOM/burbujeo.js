document.querySelector('button').addEventListener('click', (evento)=>{
    console.log('Click en el boton')
    evento.stopPropagation()
})

document.querySelector('div').addEventListener('click', ()=>{
    console.log('Click en el div')

})
