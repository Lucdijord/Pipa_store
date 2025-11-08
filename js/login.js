document.getElementById("formLogin").addEventListener("submit", function(e){
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const msgErro = document.getElementById("msgErro");

    // Credenciais fixas (apenas para exemplo)
    const adminUser = "admin";
    const adminPass = "1234";

    if(username === adminUser && password === adminPass){
        // Salva info de sessão
        sessionStorage.setItem("adminLogado", "true");

        // Redireciona para página de admin
        window.location.href = "../cadastros/cadastro_pipas.html";
    } else {
        msgErro.textContent = "Usuário ou senha incorretos!";
    }
});

document.getElementById("btnVoltar").addEventListener("click", function() {
    window.location.href = "../index.html"; // redireciona para a landing page
});

