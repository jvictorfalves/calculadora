// Função para inserir números ou operadores na tela
function insert(num) {
  const tela = document.querySelector(".tela"); // Seleciona o elemento da tela
  if (tela.innerHTML === "Erro!") { // Verifica se a tela está exibindo "Erro!" (indicando erro anterior)
    tela.innerHTML = ""; // Limpa a tela se estiver exibindo erro
  }
  tela.innerHTML += num; // Adiciona o número ou operador na tela
}

// Função para limpar a tela
function clean() {
  document.querySelector(".tela").innerHTML = ""; // Limpa o conteúdo da tela
}

// Função para apagar o último caractere inserido
function back() {
  let tela = document.querySelector(".tela").innerHTML; // Obtém o conteúdo da tela
  document.querySelector(".tela").innerHTML = tela.substring(0, tela.length - 1); // Remove o último caractere
}

// Função para calcular o resultado da expressão na tela
function calcular() {
  let tela = document.querySelector(".tela").innerHTML; // Obtém o conteúdo da tela
  try {
    if (tela) { // Verifica se há algo na tela (se a expressão não está vazia)
      const result = eval(tela); // Avalia a expressão matemática na tela
      // Verifica se o resultado é infinito ou NaN
      if (result === Infinity || result === -Infinity || isNaN(result)) {
        document.querySelector(".tela").innerHTML = "Ops... Algo deu errado!"; // Exibe mensagem de erro se o resultado for inválido
      } else {
        document.querySelector(".tela").innerHTML = result; // Exibe o resultado na tela
      }
    } else {
      document.querySelector(".tela").innerHTML = "Cadê os números? "; // Exibe mensagem de erro caso não haja números na tela
    }
  } catch (error) {
    document.querySelector(".tela").innerHTML = "Erro! "; // Exibe mensagem de erro caso ocorra alguma exceção no cálculo
  }
}
