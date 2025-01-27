function numPrimer() {
    let min = prompt("Introduce el mínimo del rango")
    let max = prompt("Introduce el máximo del rango")

    for (i = min; i <= max; i++) {
        let j = j -1
        let primer = true

        do{
            if (i%j==0) {
                primer = false
            }
            j--
        } while (primer && j > 1)

        if (primer) {
            console.log(i)
        }
    }
}