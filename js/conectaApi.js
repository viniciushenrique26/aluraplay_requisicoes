async function listaVideos() {
  const conexao = await fetch('http://localhost:3000/videos');
  const conexaoConvertida = await conexao.json(); //converte todos os dados em formato de bytes e transforma em json
  return conexaoConvertida;
}

//exportando function
export const conectaApi = {
  listaVideos,
};
