
function verificaOresultadoValido(chute) {
  const numero = +chute;

  if (chuteForInvalido(numero)) {
    elementoChute.innerHTML = '<div class="invalido">Valor inválido</div>';
    return
  }

  if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
    elementoChute.innerHTML = `<div class="invalido"> Valor inválido: o número secreto precisa estar entre ${menorValor} e ${maiorValor}</div>`
    return
  }

  if (numero === numeroSecreto) {
    document.body.innerHTML = `
      <div class="body">
      <h1>Você acertou</h1>
      <h2>O número secreto era ${numeroSecreto}</h2>
      <button id="jogar-novamente" class="btn-jogar"><i class="ph ph-arrows-clockwise"></i></button>
      </div>
    `
  } else if (numero < numeroSecreto) {
    elementoChute.innerHTML += `<div>O número secreto é maior <i class="ph ph-arrow-up"></i></div>`
  } else {
    elementoChute.innerHTML += `<div>O número secreto é menor <i class="ph ph-arrow-down"></i></div>`
  }
}

function chuteForInvalido(numero) {
  return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
  return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
  if (e.target.id == 'jogar-novamente') {
    window.location.reload()
  }
})