window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSpeak)

function onSpeak(e){
  const result = e.results[0][0].transcript
  const box = document.querySelector('#chute')
  box.innerHTML = `
  <div>Você disse:</div>
  <span class="box">${result}</span>
  `
}