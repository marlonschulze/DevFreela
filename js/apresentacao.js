const saudacao = document.getElementById('saudacao');
const mensagem = document.getElementById('mensagem');

const nomeEmpresa = localStorage.getItem('empresa');


if(nomeEmpresa){
  saudacao.innerHTML = `Seja Bem-vindo(a) <strong style="color: #2563eb">${nomeEmpresa}</strong>!<br>É um prazer ajudar vocês`
}