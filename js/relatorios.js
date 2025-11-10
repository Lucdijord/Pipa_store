
// RELATÓRIO DE PIPAS CADASTRADAS
function carregarRelatorioPipas() {
    const tabela = document.getElementById("tabelaPipas");
    tabela.innerHTML = "";

    const pipas = JSON.parse(localStorage.getItem("pipas")) || [];

    pipas.forEach(pipa => {
        const linha = `
            <tr>
                <td>${pipa.id}</td>
                <td><img src="${pipa.imagem}" alt="Pipa ${pipa.id}"></td>
                <td>R$ ${pipa.preco}</td>
            </tr>
        `;

        tabela.innerHTML += linha;
    });
}

carregarRelatorioPipas();