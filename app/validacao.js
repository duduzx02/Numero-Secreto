
function verificaOresultadoValido(chute) {
  const numero = +chute;

  if (chuteForInvalido(numero)) {
    elementoChute.innerHTML = '<div class="invalido">Valor inválido</div>';
  }

  if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
    elementoChute.innerHTML = `<div class="invalido"> Valor inválido: o número secreto precisa estar entre ${menorValor} e ${maiorValor}</div>` 
  }

  if (numero === numeroSecreto){
    document.body.innerHTML = `
      <div class="body">
      <h1>Você acertou</h1>
      <h2>O número secreto era ${numeroSecreto}</h2>
      </div>
    `
  }
}

function chuteForInvalido(numero) {
  return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero){
  return numero > maiorValor || numero < menorValor 
}