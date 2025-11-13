document.getElementById("formLogin").addEventListener("submit", function(e){
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const msgErro = document.getElementById("msgErro");

    // Informações de login
    const adminUser = "admin";
    const adminPass = "1234";

    if(username === adminUser && password === adminPass){
        // Salva info de sessão
        sessionStorage.setItem("adminLogado", "true");

        // Redireciona para página de admin
        window.location.href = "../admin.html";
    } else {
        msgErro.textContent = "Usuário ou senha incorretos!";
    }
});


// redireciona para a landing page
document.getElementById("btnVoltar").addEventListener("click", function() {
    window.location.href = "../index.html"; 
});

