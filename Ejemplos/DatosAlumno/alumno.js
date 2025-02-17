const modulos = ["m02", "m03", "m04", "m05", "m06", "m07", "m08", "FOL"]
const alumnoNotas = [[8, 9, 4], [9, 10], [6, 8, 10], [4], [8, 4, 7], [], [7, 5, 9, 10],[10]]
const alumno = ["David", "López Fernandez", "DAWe", "29 / 04 / 2003"];

/*Crea la web y el script que permita visualizar
los datos personales --> cargaDatos();
las notas en lista de módulos y lista de uf's --> cargaNotas();*/

function cargaDatos(){
    //for(let i = 0; i < alumno.length; i++){}
    //alumno[i] --> David
    let contenedor = document.getElementById("datosAlumno")
    for(let dato of alumno){
        //dato --> David
        let parrafo = document.createElement("p")
        parrafo.textContent = dato
        contenedor.appendChild(parrafo)
        
    }
    creaElemento(contenedor, alumno[0] + " "+ alumno[1])
    
}
function creaElemento(contenedor, texto){
    let parrafo = document.createElement("p")
    parrafo.textContent = texto
    contenedor.appendChild(parrafo)
}
