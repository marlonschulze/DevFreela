document.addEventListener("DOMContentLoaded", function (){
  const form = document.getElementById('form-calculadora');
  const res = document.getElementById('resultado');
  const valorEst = document.getElementById('valor-estimado');
  const btnWhats = document.getElementById('btn-whatsapp');

  form.addEventListener('submit' , function (e){
    e.preventDefault();

    const tipo = document.getElementById('tipo').value;
    const dias = parseInt(document.getElementById('dias').value);
    const extras = Array.from(document.querySelectorAll("input[name='extras']:checked")).map(e => e.value);

    if(!tipo || !dias || dias <= 0){
      alert('Por favor, preencha todos os campos corretamente!');
      return;
    }

    let valorMin = 0;
    let valorMax = 0;

    switch(tipo){
      case "landing":
        valorMin = 300;
        valorMax = 600;
        break;
      case "site":
        valorMin = 700;
        valorMax = 1100;
        break;
      case "loja":
        valorMin =  1200;
        valorMax =  1800;
        break;
    }

    if(dias < 5){
      valorMin *= 1.3;
      valorMax *= 1.3;
    }

    const extraMin = extras.length * 100;
    const extraMax = extras.length * 150;
    valorMin += extraMin;
    valorMax += extraMax;

    const valorFormMin = `R$ ${valorMin.toFixed(2).replace(".", ",")}`;
    const valorFormMax = `R$ ${valorMax.toFixed(2).replace(".",",")}`;
    valorEst.textContent = `Valor estimado: ${valorFormMin} - ${valorFormMax}`;

    res.classList.remove('hidden');

    const textoTipo = formatarTipo(tipo);
    const textoExtras = extras.length > 0 ? ` Incluindo: ${extras.join(", ")}.` : "";
    const mensagem = `Olá! Gostaria de contratar um projeto com os seguintes detalhes:\n\n` +
    `Tipo: ${textoTipo}\n` +
    `Prazo: ${dias} dia(s)\n` +
    (extras.length > 0 ? `Extras: ${extras.join(", ")}\n\n` : `\n`) + 
    `Estou pronto para conversar!`;

     const numero = "5551995563343";
    const linkWhatsapp = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    btnWhats.addEventListener('click', function(e){
      e.preventDefault();
      document.getElementById('redirect').classList.remove('redirect-class');

      setTimeout(() => {
        window.location.href = linkWhatsapp;
      }, 3000);
    });
  });

  function formatarTipo(tipo) {
    switch (tipo) {
      case "landing": return "Landing Page";
      case "site": return "Site Institucional";
      case "loja": return "Loja Virtual";
      default: return "";
    }
  }
});
