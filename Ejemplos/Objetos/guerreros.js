class Personaje  {
    constructor(nombre, nivel, puntosDeVida){
        this.nombre = nombre,
        this.nivel = nivel,
        this.puntosDeVida = puntosDeVida
    }
   atacar(){
    return 'Has atacado'
   }
   toString(){
    console.log('To String')
    return this.nombre
   }
   valueOf(){
    console.log('Value Of')
    return this.nivel
   }
  
}

class Guerrero extends Personaje {
    constructor(nombre, nivel, puntosDeVida,fuerza){
        super (nombre, nivel, puntosDeVida)
        this.fuerza = fuerza
    }
   golpeEspada(){
    return 'Has atacado con la espada'
   }
}

class Mago extends Personaje {
    constructor(nombre, nivel, puntosDeVida,mana){
        super (nombre, nivel, puntosDeVida)
        this.mana = mana
    }
   lanzarHechizo(){
    return 'Has lanzadado un hechizo'
   }
}
let guerrero1
let mago1
let llistaPersonajes = [
    guerrero1 = new Guerrero('Dani', 3, 10, 20),
    mago1= new Mago('Dani', 4, 11, 21),
]

let listaOrdenada = llistaPersonajes.sort((a,b) => a.nivel - b.nivel)
console.log(listaOrdenada)

/*Esto no funciona
for(i=0; i<llistaPersonajes.length; i++){
    console.log(llistaPersonajes[i])
    if(typeof i === "Guerrero"){
        console.log(llistaPersonajes[i.golpeEspada()])
    }else if(typeof i === Mago){
        console.log(llistaPersonajes[i.lanzarHechizo()])
    }
}*/