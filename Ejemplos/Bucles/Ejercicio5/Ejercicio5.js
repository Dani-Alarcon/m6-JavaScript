function trianguloConsola() {
    const asterisco = "*"
    const espaiBlanc = " "
    const base = 11

    console.log(espaiBlanc.repeat(base/2) + "*" )


    for (let i = 3; i <= base; i += 2) {
        const espacios = (base - i) / 2; 
        console.log(espaiBlanc.repeat(espacios) + asterisco.repeat(i));
    }

    const espaciosFinal = (base - 2) / 2; 
    console.log(espaiBlanc.repeat(espaciosFinal) + "||")
}
trianguloConsola()