const botaoCriaturas = document.getElementById('criaturas');
const botaoMonstros = document.getElementById('monstros');
const botaoMateriais = document.getElementById('materiais');
const botaoEquipamentos = document.getElementById('equipamentos');
const botaoTesouros = document.getElementById('tesouros');

const divResultados = document.querySelector('.resultados');

const divFiltro = document.querySelector('.filtrar');

const divCarregando = document.querySelector('.carregando');

const totalItensBuscados = document.getElementById('total-itens-buscados');

const input = document.getElementById('input');

const totalElementos = document.getElementById('total-itens');

export {
  botaoCriaturas,
  botaoMonstros,
  botaoMateriais,
  botaoEquipamentos,
  botaoTesouros,
  divResultados,
  divFiltro,
  divCarregando,
  totalItensBuscados,
  input,
  totalElementos
}