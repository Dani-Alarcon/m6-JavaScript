// Clase Alumno
const ponderacionesDAM = [0.3, 0.2, 0.3, 0.2]
const ponderacionesDAWe = [0.2, 0.4, 0.2, 0.2]

export class Alumno {
    constructor(nombre, apellidos, fechaNacimiento, email, ciclo, notas) {
        this.nombre = nombre
        this.apellidos = apellidos
        this.fechaNacimiento = fechaNacimiento
        this.email = email
        this.ciclo = ciclo
        this.notas = notas
    }
    calcularEdad() {
        const hoy = new Date()
        let edad = hoy.getFullYear() - this.fechaNacimiento.getFullYear()
        const mesDiferencia = hoy.getMonth() - this.fechaNacimiento.getMonth()
        if(mesDiferencia < 0 || (mesDiferencia<0 && hoy.getDate() < this.fechaNacimiento.getDate())){
            edad--
        }
        return edad
    }
    calcularMedia(ponderacion) {
        if (typeof ponderacion != String) {
            let notaMedia = this.notas.reduce((total, nota, i) => total + nota * ponderacion[i], 0)
            return notaMedia.toFixed(2)
        } else {
            return 'No hay ponderacion para ese ciclo'
        }

    }
    elegirPonderacion() {
        if (this.ciclo == 'DAWe') {
            return ponderacionesDAWe
        } else if (this.ciclo == 'DAM') {
            return ponderacionesDAM
        } else {
            return 'No hay ponderacion para ese ciclo'
        }
    }
    toString() {
        return `Nombre completo: ${this.nombre} ${this.apellidos},
         Fecha de nacimiento: ${this.fechaNacimiento}, 
         Ciclo: ${this.ciclo}`
    }

}