import { buscarNaApi, filtrarResultados } from "./chamadas-api.js";
import { botaoCriaturas, botaoEquipamentos, botaoMateriais, botaoMonstros, botaoTesouros, input } from "./elementos-html.js";

botaoCriaturas.addEventListener('click', function() {
  buscarNaApi('creatures')
});

botaoMonstros.addEventListener('click', function() {
  buscarNaApi('monsters')
});

botaoEquipamentos.addEventListener('click', function() {
  buscarNaApi('equipment')
});

botaoMateriais.addEventListener('click', function() {
  buscarNaApi('materials')
});

botaoTesouros.addEventListener('click', function() {
  buscarNaApi('treasure')
});

input.addEventListener('input', filtrarResultados)