var nota = 3;

console.log("He realizado mi examen y ");

// Nota: Este ejemplo NO es equivalente al ejemplo anterior (leer abajo)
switch (nota) {
    case 10:
        calificacion = "Sobresaliente";
        break;
    case 9:
    case 8:
        // tanto para 9 como para 8 ntra aquí, luego con break no sigue evaluando.
        calificacion = "Notable";
        break;
    case 7:
    case 6:
        calificacion = "Bien";
        break;
    case 5:
        calificacion = "Suficiente";
        break;
    case 4:
    case 3:
    case 2:
    case 1:
    case 0:
        calificacion = "Insuficiente";
        break;
    default:
        // Cualquier otro caso
        calificacion = "Nota errónea";
        break;
}

console.log("he obtenido un: ", calificacion);