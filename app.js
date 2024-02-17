async function fetchData(){

    try{

        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const pokemonStat = document.getElementById("stats");
        const pokemonsHp = document.getElementById("hp");
        const pokemonsattack = document.getElementById("attack");
        const pokemonsdef = document.getElementById("def");
        const pokemonssatt = document.getElementById("satt");
        const pokemonssdef = document.getElementById("sdef");
        const pokemonsspeed = document.getElementById("speed");
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok){
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");
        const pokemonStats = data.types[0].type.name;
        const pokemonHp = data.stats[0].base_stat;
        const pokemonAttack = data.stats[1].base_stat;
        const pokemonDefence = data.stats[2].base_stat;
        const pokemonSpecialAttack = data.stats[3].base_stat;
        const pokemonSpecialDefence = data.stats[4].base_stat;
        const pokemonSpeed = data.stats[5].base_stat;
        imgElement.src = pokemonSprite; 
        imgElement.style.display = "block";
        pokemonsHp.innerHTML = `HP: ${pokemonHp}<br>`;
        pokemonsattack.innerHTML = `ATTACK: ${pokemonAttack}<br>`;
        pokemonsdef.innerHTML = `DEFENCE: ${pokemonDefence}<br>`;
        pokemonssatt.innerHTML = `S.ATTACK: ${pokemonSpecialAttack}<br>`;
        pokemonssdef.innerHTML = `S.DEFENCE: ${pokemonSpecialDefence}<br>`;
        pokemonsspeed.innerHTML = `Speed: ${pokemonSpeed}<br>`;
    }
    catch(error){
        console.error(error);
    }
}