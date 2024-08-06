async function fetchPokemonData(pokemonName) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
  const pokemonData = await response.json();
  console.log(pokemonData);
  return pokemonData;
}

document.addEventListener("DOMContentLoaded", async ()=>{
  const pikachuData = await fetchPokemonData("pikachu");
  const pokemonInfoElement = document.getElementById("pokemon-info");

  pokemonInfoElement.innerHTML = `
      <h2>${pikachuData.name}</h2>
      <img src="${pikachuData.sprites.front_default}" alt="${pikachuData.name}">
      <h3>Abilities</h3>
      <ul>
        ${pikachuData.abilities.map(a => `<li>${a.ability.name}</li>`).join("")}
      </ul>
      <h3>Base Experience</h3>
      <p>${pikachuData.base_experience}</p>
      <h3>Sounds:</h3>
      <audio src="${pikachuData.cries.latest}" controls></audio><br>
      <audio src="${pikachuData.cries.legacy}" controls></audio>
    `
})

