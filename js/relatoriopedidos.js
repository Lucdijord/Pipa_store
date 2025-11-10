document.addEventListener("DOMContentLoaded", () => {
    const tabelaCorpo = document.querySelector("#tabelaPedidos tbody");
    const pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];

    if (pedidos.length === 0) {
        tabelaCorpo.innerHTML = `<tr><td colspan="7" style="text-align:center;">Nenhum pedido encontrado.</td></tr>`;
        return;
    }

    pedidos.forEach(p => {
        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td><img src="${p.imagem}" alt="Pipa" class="pipa-img"></td>
            <td>R$ ${Number(p.preco).toFixed(2)}</td>
            <td>${p.nomeCliente || ""}</td>
            <td>${p.whatsapp || ""}</td>
            <td>${p.endereco || ""}</td>
            <td>${p.observacoes || ""}</td>
            <td>${p.data || "-"}</td>
        `;

        tabelaCorpo.appendChild(tr);
    });
});