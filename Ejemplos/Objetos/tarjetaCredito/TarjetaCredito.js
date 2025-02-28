class TarjetaCredito{
    constructor(num, cvv, caducidad, pin){
        this.numTarjeta = num
        this.cvv = cvv
        this.caducidad = caducidad
        this.pin = pin
    }
    set numTarjeta(num){
        this.numTarjeta = num
    }
    activar(){}
    anular(){}
    pagar(){}
    cambiarPin(){}
}