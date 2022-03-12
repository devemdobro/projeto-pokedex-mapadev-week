/*
   quando clicar no pokemon da listagem temos que esconder o cartão do pokemon aberto 
   e mostrar o cartão correspondente ao que foi selecionado na listagem
   
	 pra isso vamos precisar trabalhar com dois elementos da tela
	 1 - listagem
   2 - cartão do pokemon 

   pra isso a gente precisa criar duas variáveis no JS pra trabalhar com os elementos da tela
   
   e outra coisa que precisamos trabalhar é o evento de clique do usuário na listagem

	 quando o usuario clicar no pokemon da lisatgem precisamos:
   - remover a classe aberto só do cartão que tá aberto
   - ao clicar em um pokemon da lista pegamos o id desse pokemon pra saber qual 
    cartão abrir
   - remover a classe ativa que marca o pokemon selecionado
   - adicinar a classe no pokemon selecionado

*/

const listaSelecaoPokemons = document.querySelectorAll(".pokemon");
const pokemonsCards = document.querySelectorAll(".cartao-pokemon");

listaSelecaoPokemons.forEach(pokemon => {
  pokemon.addEventListener("click", () => {
    // remover a classe aberto só do cartão que tá aberto
    const cartaoPokemonAberto = document.querySelector(".aberto");
    cartaoPokemonAberto.classList.remove("aberto")

    // pegar o id do pokemonSelecionado que foi clicado pelo usuário
    const idPokemonSelecionado = pokemon.attributes.id.value;

    // ao clicar em um pokemonSelecionado da lista pegamos o id desse pokemonSelecionado pra saber qual cartão de pokemonSelecionado abrir
    const idDoCardPokemonParaAbrir = "cartao-" + idPokemonSelecionado;
    const cartaoPokemonParaAbrir = document.getElementById(idDoCardPokemonParaAbrir);
    cartaoPokemonParaAbrir.classList.add("aberto");

    //remover a classe ativa que marca o pokemon selecionado
    const pokemonAtivoNaListagem = document.querySelector(".ativo");
    pokemonAtivoNaListagem.classList.remove("ativo");

    //adicinar a classe no pokemon selecionado
    const pokemonSelecionado = document.getElementById(idPokemonSelecionado);
    pokemonSelecionado.classList.add("ativo");
  });
});
