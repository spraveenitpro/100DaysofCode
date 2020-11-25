//import "./styles.css";

const baseURL = "https://pokeapi.co/api/v2/pokemon/";

const app = document.createElement("div");
app.id = "app";
document.body.appendChild(app);

const loading = document.createElement("p");
loading.innerText = "Loading...";
loading.classList.add("loading");
let currentPokemon = 1;

async function loadAndRenderPokemon() {
  // Clear the existing Pokemon.
  const pokemonElement = document.getElementById("pokemonContainer");
  pokemonElement.remove();

  // Show the loading element
  app.appendChild(loading);

  const pokemon = await getPokemon();
  loading.remove();
  app.appendChild(createPokemon(pokemon));
}
function goPrev() {
  if (currentPokemon <= 1) return;
  currentPokemon -= 1;
  loadAndRenderPokemon();
}
function goNext() {
  if (currentPokemon >= 893) return;
  currentPokemon += 1;
  loadAndRenderPokemon();
}
function createButtons() {
  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("button-container");
  const prevButton = document.createElement("button");
  prevButton.innerText = "Prev.";
  buttonContainer.appendChild(prevButton);

  const nextButton = document.createElement("button");
  nextButton.innerText = "Next";
  buttonContainer.appendChild(nextButton);
  nextButton.addEventListener("click", goNext);
  prevButton.addEventListener("click", goPrev);

  return buttonContainer;
}
async function getPokemon() {
  const response = await fetch(`${baseURL}${currentPokemon}`);
  const result = await response.json();
  return result;
}

function createPokemon(pokemon) {
  const pokemonElement = document.createElement("div");
  pokemonElement.id = "pokemonContainer";
  pokemonElement.classList.add("pokemon-container");

  const pokemonImage = document.createElement("img");

  // Get the dream world sprite, falling back on the official artwork and then the default artwork.
  // Set the src attribute directly on the element.
  pokemonImage.src =
    pokemon.sprites?.other?.dream_world?.front_default ||
    pokemon.sprites?.other?.["official-artwork"]?.front_default ||
    pokemon.sprites?.front_default;
  pokemonImage.classList.add("pokemon-image");
  pokemonElement.appendChild(pokemonImage);

  const pokemonInfo = document.createElement("div");
  pokemonElement.appendChild(pokemonInfo);

  const pokemonId = document.createElement("p");
  pokemonId.classList.add("pokemon-id");
  pokemonId.innerText = pokemon.id;
  pokemonInfo.appendChild(pokemonId);

  const pokemonName = document.createElement("p");
  // Capitalize the first character
  pokemonName.innerText = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  pokemonName.classList.add("pokemon-name");
  pokemonInfo.appendChild(pokemonName);

  const pokemonTypes = document.createElement("div");
  pokemonTypes.classList.add("pokemon-types");
  // Loop over all of the types and create a type badge.
  pokemon.types.forEach((type) => {
    const typeElement = document.createElement("div");
    typeElement.classList.add(type.type.name);
    typeElement.innerText = type.type.name;
    pokemonTypes.appendChild(typeElement);
  });
  pokemonInfo.appendChild(pokemonTypes);
  const buttons = createButtons();
  pokemonElement.appendChild(buttons);
  return pokemonElement;
}

async function init() {
  app.appendChild(loading);
  const pokemon = await getPokemon(1);
  loading.remove();

  app.appendChild(createPokemon(pokemon));
}
init();
