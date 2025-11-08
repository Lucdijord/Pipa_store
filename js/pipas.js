// ---------------------------
// 1. Pipas iniciais no localStorage
// ---------------------------
if (!localStorage.getItem("pipas")) {
    const pipasIniciais = [
        { id: 1, preco: 5, imagem: "../img/1.jpg" },
        { id: 2, preco: 10, imagem: "../img/2.jpg" },
        { id: 3, preco: 5, imagem: "../img/3.jpg" },
        { id: 4, preco: 10, imagem: "../img/4.jpg" },
        { id: 5, preco: 5, imagem: "../img/5.jpg" },
        { id: 6, preco: 5, imagem: "../img/6.jpg" }
    ];
    localStorage.setItem("pipas", JSON.stringify(pipasIniciais));
}

// ---------------------------
// 2. Carregar pipas na LANDING PAGE
// ---------------------------
function carregarPipas() {
    const container = document.getElementById("listaPipas");
    if (!container) return;

    container.innerHTML = "";

    const pipas = JSON.parse(localStorage.getItem("pipas")) || [];

    pipas.forEach(pipa => {
        container.innerHTML += `
            <div class="card">
                <img src="${pipa.imagem}" alt="Pipa">
                <p>R$ ${pipa.preco}</p>
                <a href="../cadastros/cadastro_pedidos.html?id=${pipa.id}" class="btn">Fazer pedido</a>
            </div>
        `;
    });
}

// ---------------------------
// 3. Carregar pipas no ADMIN
// ---------------------------
function carregarPipasAdmin() {
    const container = document.getElementById("listaPipasAdmincp");
    if (!container) return;

    container.innerHTML = "";

    const pipas = JSON.parse(localStorage.getItem("pipas")) || [];

    pipas.forEach(pipa => {
        container.innerHTML += `
            <div class="card-admincp">
                <img src="${pipa.imagem}" alt="Pipa">
                <p>R$ ${pipa.preco}</p>
                <button class="btn-excluircp" onclick="excluirPipa(${pipa.id})">Excluir</button>
            </div>
        `;
    });
}

// ---------------------------
// 4. Cadastrar nova pipa (admin)
// ---------------------------
function cadastrarPipaAdmin(event) {
    event.preventDefault();

    const preco = parseFloat(document.getElementById("precoPipacp").value);
    const imagem = document.getElementById("imgPipacp").value.trim();

    if (isNaN(preco) || !imagem) {
        alert("Preencha todos os campos corretamente!");
        return;
    }

    const pipas = JSON.parse(localStorage.getItem("pipas")) || [];

    const novaPipa = {
        id: pipas.length > 0 ? pipas[pipas.length - 1].id + 1 : 1,
        preco,
        imagem
    };

    pipas.push(novaPipa);
    localStorage.setItem("pipas", JSON.stringify(pipas));

    document.getElementById("formPipacp").reset();
    carregarPipasAdmin();
    carregarPipas();
}

// ---------------------------
// 5. Excluir pipa (admin)
// ---------------------------
function excluirPipa(id) {
    if (!confirm("Tem certeza que deseja excluir esta pipa?")) return;

    let pipas = JSON.parse(localStorage.getItem("pipas")) || [];
    pipas = pipas.filter(p => p.id !== id);

    localStorage.setItem("pipas", JSON.stringify(pipas));

    carregarPipasAdmin();
    carregarPipas();
}

// ---------------------------
// 6. Inicialização
// ---------------------------
document.addEventListener("DOMContentLoaded", () => {
    carregarPipas();
    carregarPipasAdmin();

    const form = document.getElementById("formPipacp");
    if (form) form.addEventListener("submit", cadastrarPipaAdmin);
});
