const form = document.getElementById('form');
const input = document.getElementById('name-empresa');

form.addEventListener("submit", function(e) {
  e.preventDefault();
  
  const nomeEmpresa = input.value.trim();
  if(nomeEmpresa) {
    localStorage.setItem('empresa', nomeEmpresa);

    window.location.href = "/html/apresentacao.html";
  }
})