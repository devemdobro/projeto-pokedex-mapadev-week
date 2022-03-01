const listaPokemons = document.querySelectorAll('.pokemon')
const pokemonCard = document.querySelectorAll('.pokemon-card')

listaPokemons.forEach(card => {
    
    card.addEventListener('click', () => {

        pokemonCard.forEach(pokemonCard => pokemonCard.classList.remove('aberto'))
        // pegar o pokemonSelecionado que foi clicado pelo usuário
        const pokemonSelecionadoId = card.attributes.id.value;

        // ao clicar em um pokemonSelecionado da lista pegamos o id desse pokemonSelecionado pra saber qual card de pokemonSelecionado abrir 
        const idDoCardParaAbrir = pokemonSelecionadoId + '-card';

        const cardParaAbrir = document.getElementById(idDoCardParaAbrir)
        cardParaAbrir.classList.add('aberto')

        // remover a classe ativa que marca o pokeo]mon selecionado
        listaPokemons.forEach(pokemonSelecionado => pokemonSelecionado.classList.remove('ativo'))

        const pokemonSelecionado = document.getElementById(pokemonSelecionadoId);
        console.log(pokemonSelecionado)
        // adicianr a classe no pokemon selecionado
        pokemonSelecionado.classList.add('ativo')
    })
})


