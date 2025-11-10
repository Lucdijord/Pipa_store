// Função para salvar cliente no LocalStorage
document.getElementById("formPipacp").addEventListener("submit", function (e) {
  e.preventDefault();

  // Pega os valores dos campos
  const nome = document.querySelectorAll("#formPipacp input")[0].value.trim();
  const telefone = document.querySelectorAll("#formPipacp input")[1].value.trim();
  const email = document.querySelectorAll("#formPipacp input")[2].value.trim();

  // Validação 
  if (!nome || !telefone) {
    alert("Preencha os campos obrigatórios!");
    return;
  }

  // Cria objeto do novo cliente
  const novoCliente = { nome, telefone, email };

  // Busca lista existente
  const clientes = JSON.parse(localStorage.getItem("clientes")) || [];
  clientes.push(novoCliente);

  // Salva no LocalStorage
  localStorage.setItem("clientes", JSON.stringify(clientes));

  alert("Cliente cadastrado com sucesso!");

  // Limpa os campos
  document.getElementById("formPipacp").reset();
});

