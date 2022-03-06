const listaSelecaoPokemons = document.querySelectorAll(".pokemon");
const pokemonsCards = document.querySelectorAll(".pokemon-card");

listaSelecaoPokemons.forEach(pokemon => {
  pokemon.addEventListener("click", () => {
    // remove a classe aberto de todos os cards dos pokemons
    pokemonsCards.forEach(pokemonCard =>
      pokemonCard.classList.remove("aberto")
    );

    // pegar o id do pokemonSelecionado que foi clicado pelo usuário
    const idPokemonSelecionado = pokemon.attributes.id.value;

    // ao clicar em um pokemonSelecionado da lista pegamos o id desse pokemonSelecionado pra saber qual card de pokemonSelecionado abrir
    const idDoCardPokemonParaAbrir = idPokemonSelecionado + "-card";

    const cardPokemonParaAbrir = document.getElementById(idDoCardPokemonParaAbrir);

    cardPokemonParaAbrir.classList.add("aberto");

    // remover a classe ativa que marca o pokemon selecionado
    listaSelecaoPokemons.forEach(pokemonSelecionado =>
      pokemonSelecionado.classList.remove("ativo")
    );

    // adicianr a classe no pokemon selecionado
    const pokemonSelecionado = document.getElementById(idPokemonSelecionado);
    pokemonSelecionado.classList.add("ativo");
  });
});
