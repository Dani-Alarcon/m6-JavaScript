function init() {
    document.getElementById("masChistes").addEventListener("click",conectaAPI);
    }
    async function conectaAPI(){
        let id = Math.floor(Math.random() * 1025)
        try {
            let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`); // Esperar la respuesta
            let data = await response.json();
            console.log("Pokémon obtenido:", data);
            muestraPokemon(data.name, data.sprites.front_shiny);
        } catch (error) {
            console.error("Error al obtener datos", error);
        }
     
        /*fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
           .then(res => {
               if(res.ok)
                   // respuesta ok, ahora queremos el json con los datos.
                   return res.json()
               })
           .then(function (json) {
               console.log(json);
               //Tratamos la información recibida
               muestraPokemon(json.name, json.sprites.front_shiny);
           });*/
    }
    function muestraPokemon(nombre, imagenURL) {
        console.log(nombre);
        let div = document.getElementById("chistes");
    
        
    
        let p = document.createElement("pa");
        p.textContent = nombre;
    
        let img = document.createElement("img");
        img.src = imagenURL;
        img.alt = nombre;
        img.style.width = "150px";
        img.style.height = "150px";
    
        div.appendChild(p);
        div.appendChild(img);
    }
    