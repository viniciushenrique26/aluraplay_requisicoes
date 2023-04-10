import { conectaApi } from './conectaApi';

async function buscarVideo() {
  evento.preventDefault();

  const dadosDePesquisa = document.querySelector('[data-pesquisa]').value;
  const busca = await conectaApi.buscaVideo(dadosDePesquisa);

  console.log(busca);
}

const botaoDePesquisa = document.querySelector('[data-botao-pesquisa]');

botaoDePesquisa.addEventListener('click', (evento) => buscarVideo(evento));
