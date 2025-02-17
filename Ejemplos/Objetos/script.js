let tvSamsumg = {
    nombre: 'TV Samsung 42',
    categoria: "Televisores",
    unidades: 4,
    precio: 345.95
}
tvSamsumg.getImporte = function(){
    return this.unidades * this.precio
}
console.log('El importe es: '+ tvSamsumg.getImporte)