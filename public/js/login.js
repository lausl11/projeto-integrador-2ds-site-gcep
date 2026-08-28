function verificarEmail() {
    const email = document.getElementById("email").value.trim().toLowerCase();

    if (email.endsWith("@escola.pr.gov.br")) {
        console.log("Email válido! Redirecionando para a página de login...");
        window.location.href = "index.html";
    } else {
        alert("Email inválido! O email deve terminar com @escola.pr.gov.br");
    }
}