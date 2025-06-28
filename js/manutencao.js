document.addEventListener("DOMContentLoaded", function () {
  const buttons = this.querySelectorAll('.btn-contratar');
  const num = "5551995563343";

  buttons.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('clicado')
      const plano = this.dataset.plano;
      const preco = this.dataset.preco;

      const mensagem = `Olá! Gostaria de contratar o *${plano}* no valor de *R$ ${preco}*.`;
      const link = `https://wa.me/${num}?text=${encodeURIComponent(mensagem)}`;
      
      window.location.href = link;
    })
  })
})