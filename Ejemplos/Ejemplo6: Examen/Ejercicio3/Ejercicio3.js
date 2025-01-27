let parrafoPrimero = document.createElement('p');
let parrafoPrimeroTexto = document.createTextNode('Este es un párrafo añadido');
parrafoPrimero.appendChild(parrafoPrimeroTexto);

let miDiv = document.getElementById('contenedor');

miDiv.appendChild(parrafoPrimero);