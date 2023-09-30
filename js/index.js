// Função para rolar a página de volta ao topo
function voltarAoTopo() {
    document.body.scrollTop = 0; // Para navegadores mais antigos
    document.documentElement.scrollTop = 0; // Para navegadores modernos
  }
  
  // Exibir o botão quando o usuário rolar a página para baixo
  window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("voltar-ao-topo").style.display = "block";
    } else {
      document.getElementById("voltar-ao-topo").style.display = "none";
    }
  }