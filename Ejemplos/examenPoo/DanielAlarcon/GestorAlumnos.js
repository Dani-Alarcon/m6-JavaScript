import { Alumno } from "./Alumno.js";
// Clase GestorAlumnos
export class GestorAlumnos {
    constructor(alumnos) {
        this.alumnos = alumnos
    }
    agregarAlumno(alumno) {
        this.alumnos.push(alumno)
    }

    buscarAlumno(nombreCompleto) {
        for (let i in this.alumnos) {
            if ((`${this.alumnos[i].nombre} ${this.alumnos[i].apellidos}`) == nombreCompleto) {
                console.log('Alumno encontrado')
                console.log(this.alumnos[i])
                break
            } else {
                console.log(`El alumno/a: ${nombreCompleto} no ha sido encontrado/a`)
            }
        }
    }

    eliminarAlumno(nombreCompleto) {
        for (let i in this.alumnos) {
            if ((`${this.alumnos[i].nombre} ${this.alumnos[i].apellidos}`) == nombreCompleto) {
                console.log('Alumno/a eliminado')
                this.alumnos.splice(i, 1)
                break
            } else {
                console.log(`El alumno/a: ${nombreCompleto} no ha sido encontrado/a`)
            }
        }
    }

    mostrarAlumnosOrdenados() {
        return this.alumnos.sort(function (a, b) {
            if (a.nombre.toLowerCase() < b.nombre.toLowerCase()) { return -1; }
            if (a.nombre.toLowerCase() > b.nombre.toLowerCase()) { return 1; }
            return 0;
        })
    }

    listarAlumnos(/*optativoFiltro*/) {
        this.alumnos.forEach(alumno => {
            console.log(alumno)
        });
    }

    eliminarAlumnosDuplicados() {
        let alumosSet = new Set(this.alumnos)
        return alumosSet
    }
}