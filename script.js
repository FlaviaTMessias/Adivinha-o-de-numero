// script.js
//Math.random() é uma função nativa do JavaScript que retorna um número decimal (float) aleatório entre 0 (inclusive) e 1 (exclusivo). 

//Math.random() gera um número decimal aleatório entre 0 e 1.Math.floor() arredonda esse número para baixo, ou seja, sempre que você usar Math.floor(Math.random()), o valor será 0 (porque Math.random() nunca chega a 1 e quando você arredonda qualquer número entre 0 e 1, o valor sempre vai ser 0).// 

let numeroAleatorio = Math.floor(Math.random() * 100) + 1; // Número aleatório entre 1 e 100
let tentativas = 0;
const maxTentativas = 10;

const inputNumero = document.getElementById('inputNumero');
const btnChutar = document.getElementById('btnChutar');
const mensagem = document.getElementById('mensagem');
const tentativasTexto = document.getElementById('tentativas');
const resultado = document.getElementById('resultado');
const btnReset = document.getElementById('reset');

// Limpa o campo de entrada quando o usuário clica no campo
inputNumero.addEventListener('click', () => {
  inputNumero.value = '';
});

// Função para verificar o palpite
const verificarPalpite = () => {
  const palpite = parseInt(inputNumero.value);
  tentativas++;
  
  if (palpite < 1 || palpite > 100 || isNaN(palpite)) {
    mensagem.textContent = "Por favor, insira um número válido entre 1 e 100.";
    return;
  }

  if (palpite === numeroAleatorio) {
    resultado.textContent = `Parabéns! Você acertou o número ${numeroAleatorio}!`;
    mensagem.textContent = `Você usou ${tentativas} tentativas.`;
    btnChutar.disabled = true; // Desabilitar o botão após acertar
    btnReset.style.display = 'block'; // Mostrar o botão para reiniciar
  } else if (palpite > numeroAleatorio) {
    mensagem.textContent = "Número muito alto!";
  } else {
    mensagem.textContent = "Número muito baixo!";
  }

  tentativasTexto.textContent = `Tentativas: ${tentativas}`;
  
  // Verificar se o número de tentativas ultrapassou o limite
  if (tentativas >= maxTentativas && palpite !== numeroAleatorio) {
    resultado.textContent = `Você perdeu! O número era ${numeroAleatorio}.`;
    btnChutar.disabled = true;
    btnReset.style.display = 'block';
  }

  // Limpa o campo de entrada após a tentativa
  inputNumero.value = '';
};

// Ação do botão "Chutar"
btnChutar.addEventListener('click', verificarPalpite);

// Permitir que o usuário envie a tentativa pressionando "Enter"
inputNumero.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    verificarPalpite();  // Chama a função de verificação do palpite
  }
});

// Resetar o jogo
btnReset.addEventListener('click', () => {
  tentativas = 0;
  numeroAleatorio = Math.floor(Math.random() * 100) + 1;
  resultado.textContent = '';
  mensagem.textContent = '';
  tentativasTexto.textContent = `Tentativas: 0`;
  inputNumero.value = '';
  btnChutar.disabled = false;
  btnReset.style.display = 'none';
});
