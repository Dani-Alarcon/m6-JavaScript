class TarjetaCredito {
    constructor(num, cvv, caducidad, pin,) {
        this.numTarjeta = num
        this.cvv = cvv
        this.caducidad = caducidad
        this.pin = pin
        this.activada = false
        this.dinero = 0
    }
    /*set numTarjeta(num) {
        this.numTarjeta = num
    }*/

    activar() {
        this.activada = true
        return this.activada
    }
    anular() {
        this.activada = false
        return this.activada
    }
    ingresarDinero(dinero) {
        this.dinero += dinero
        return this.dinero
    }
    pagar(precio) {
        if (this.dinero >= precio) {
            this.dinero -= precio
        } else {
            alert('No puedes pagar esto')
            console.log('Tu saldo se mantendra como estaba')
        }
        return this.dinero
    }
    cambiarPin() {
        this.numTarjeta = prompt('Introduce el nuevo pin de la tarjeta')
        return this.numTarjeta
    }
}

let tarjeta1 = new TarjetaCredito(153415641, 123, '03/26', 123)
let tarjeta2 = new TarjetaCredito(984556413, 456, '04/26', 456)
let tarjeta3 = new TarjetaCredito(454894564, 789, '05/26', 789)

console.log('Activar tarjeta ' + tarjeta1.activar())

let dinero = prompt('Cuanto dinero quieres ingresar en la tarjeta?')
console.log('Tu saldo despues de ingresar es:' + tarjeta1.ingresarDinero(dinero) + '€')

console.log('Tu saldo despues de pagar es: ' + tarjeta1.pagar(10) + '€')

console.log('Ahora tu pin es: ' + tarjeta1.cambiarPin())

console.log(tarjeta1)