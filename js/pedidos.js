// Função para buscar o ID da URL
function getParametro(nome) {
  const params = new URLSearchParams(window.location.search);
  return params.get(nome);
}

// Variável global para guardar a pipa carregada
let pipaSelecionada = null;

// Carrega os dados da pipa selecionada
function carregarPipa() {
  const id = parseInt(getParametro("id"));
  const pipas = JSON.parse(localStorage.getItem("pipas")) || [];
  const pipa = pipas.find(p => p.id === id);

  if (pipa) {
    pipaSelecionada = pipa; 
    document.getElementById("pipaImagem").src = pipa.imagem;
    // se preco for inteiro, mostra com duas casas
    const precoFormatado = (typeof pipa.preco === "number")
      ? pipa.preco.toFixed(2)
      : Number(pipa.preco).toFixed(2);
    document.getElementById("pipaPreco").textContent = `Preço: R$ ${precoFormatado}`;
  } else {
    document.querySelector(".produto").innerHTML = "<p>Pipa não encontrada!</p>";
  }
}

// Gera um objeto pedido e salva no localStorage
function salvarPedidoNoLocalStorage(pedido) {
  const pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];
  pedidos.push(pedido);
  localStorage.setItem("pedidos", JSON.stringify(pedidos));
}

// Evento para envio do pedido
document.getElementById("formPedido").addEventListener("submit", (e) => {
  e.preventDefault();

  // se a pipa não foi carregada, não prossegue
  if (!pipaSelecionada) {
    document.getElementById("mensagem").textContent = "Erro: pipa não selecionada.";
    return;
  }

  const nome = document.getElementById("nomeCliente").value.trim();
  const whatsapp = document.getElementById("whatsappCliente").value.trim();
  const endereco = document.getElementById("enderecoCliente").value.trim();
  const obs = document.getElementById("observacoesCliente").value.trim();

  // cria objeto do pedido (sem nome da pipa, apenas imagem e preço)
  const pedido = {
    imagem: pipaSelecionada.imagem,
    preco: typeof pipaSelecionada.preco === "number" ? pipaSelecionada.preco : Number(pipaSelecionada.preco),
    nomeCliente: nome,
    whatsapp: whatsapp,
    endereco: endereco,
    observacoes: obs,
    data: new Date().toLocaleString()
  };

  // salva no localStorage
  salvarPedidoNoLocalStorage(pedido);

  // Exibe mensagem de sucesso
  document.getElementById("mensagem").textContent = "✅ Pedido finalizado com sucesso!";

  // Limpa o formulário
  document.getElementById("formPedido").reset();

});

carregarPipa();