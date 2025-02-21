const alumno2 = {
    nombre: "Aina",
    apellidos: "Garcia López",
    edad: 21,
    curso: "DAMv1"
};

/*
let propiedad = "nombre"
console.log(alumno2[propiedad])

propiedad = prompt("Dime una propiedad para mostrar", "apellidos")
console.log(alumno2[propiedad])

propiedad = prompt("Añade un nuevo campo", "curso")
let valor = prompt("Introduce el valor del campo", "1ero")
alumno2[propiedad] = valor

console.log(alumno2)


function printAlumno(alumno2) {
    var result = ``;
    for (var p in alumno2) {
        result += `${p} = ${alumno2[p]}\n`; 
    }
    return result
}
console.log(printAlumno(alumno2))//nombre = Aina apellidos = Garcia López edad = 21 curso = DAMv1


alumno2.getInfo = function() {
    return 'El alumno ' + this.nombre + ' ' + this.apellidos + ' tiene ' + this.edad + ' años'
}
console.log(alumno2.getInfo()); // El alumno Aina Garcia López tiene 21 años

// ¿Existe la propiedad?
console.log(alumno2.notas); //undefined
console.log(alumno2.notas?.m4); //undefined
console.log(alumno2.hasOwnProperty("apellidos")); //true
console.log("edad" in alumno2); //true
console.log("fecha nacimiento" in alumno2); //false
let p = "telefono2";
console.log(p in alumno2); //true


// Más métodos
console.log(Object.keys(alumno2))
console.log(Object.values(alumno2))
console.log(Object.entries(alumno2))


const alumno3 = {
    name: "Manz",
    life: 99,
    power: 10,
    talk: function() {
      return "Hola!";
    }
};

console.log(Object.keys(alumno3))
console.log(Object.values(alumno3))
console.log(Object.entries(alumno3))

const keys = ["name", "life", "power", "talk"];
const values = ["Manz", 99, 10, function() { return "Hola" }];
const entries = [];

for (let i of Object.keys(keys)) {
    const key = keys[i];
    const value = values[i];
    entries.push([key, value]);
    console.log(keys[i])
}

const alumno4 = Object.fromEntries(entries);
*/

let employees = `[
    { "firstName":"John", "lastName":"Doe" },
    { "firstName":"Anna", "lastName":"Smith" },
    { "firstName":"Peter", "lastName":"Jones" }
]`;
let object = JSON.parse(employees); // Adapta el JSON a un objecte
console.log(object)

let employees2 = [
    { "firstName":"John", "lastName":"Doe" },
    { "firstName":"Anna", "lastName":"Smith" },
    { "firstName":"Peter", "lastName":"Jones" }
];
let object2 = employees2;
console.log(object2)