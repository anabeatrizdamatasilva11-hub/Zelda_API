import { criaCard } from "./card.js";
import { divCarregando, divFiltro, divResultados, input, totalElementos, totalItensBuscados } from "./elementos-html.js";

let resultadosOriginal;
let resultadosFiltrado;

async function buscarNaApi(categoria) {
  divFiltro.style.display = 'none';
  divCarregando.style.display = 'block';
  divResultados.innerHTML = '';

  try {
    const response = await fetch(`https://botw-compendium.herokuapp.com/api/v3/compendium/category/${categoria}`);
    const dados = await response.json();

    resultadosOriginal = dados.data;

    dados.data.forEach(element => {
      const card = criaCard(element);
      divResultados.appendChild(card);
    });
    
    // for (let index = 0; index < dados.data.length; index++) {
    //   const card = criaCard(dados.data[index]);
    //   divResultados.appendChild(card);
    // }

    totalItensBuscados.textContent = dados.data.length;

    totalElementos.textContent = dados.data.length;

    divCarregando.style.display = 'none';
    divFiltro.style.display = 'block';
  } catch(erro) {
    console.log('Ocorreu um erro ao buscar os dados na API: ', erro)
  }
}

function filtrarResultados() {
  divResultados.innerHTML = '';

  const elementosFiltrados = resultadosOriginal.filter(function(posicaoAtual) {
    const valorDigitado = input.value.toLowerCase();
    const nome = posicaoAtual.name.toLowerCase();

    if (nome.includes(valorDigitado)) {
      return posicaoAtual;
    } else {
      return false;
    }
  });

  elementosFiltrados.forEach(element => {
    const card = criaCard(element);
    divResultados.appendChild(card);
  });

  totalItensBuscados.textContent = elementosFiltrados.length;
  totalElementos.textContent = elementosFiltrados.length;
}

export {
  buscarNaApi,
  filtrarResultados
}