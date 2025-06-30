const form = document.getElementById('form');
const input = document.getElementById('name-empresa');
const saudacao = document.getElementById('saudacao');
const mensagem = document.getElementById('mensagem');

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nomeEmpresa = input.value.trim();
  if(nomeEmpresa){
    saudacao.innerHTML = `Seja bem-vindo(a), <strong>${nomeEmpresa}</strong>!<br>É um prazer ajudar vocês.`;
    mensagem.classList.remove('hidden');
    form.parentElement.classList.add('hidden');
  }
})