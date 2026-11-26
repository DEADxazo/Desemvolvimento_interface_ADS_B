const campo = document.getElementById("idade");
const saida = document.getElementById("resultado");
document.getElementById("verificar").addEventListener("click", () => {
    const texto = campo.value.trim();
    if (texto === "") { saida.textContent = "Informe a idade."; return; }
    const idade = Number(texto);
    if (!Number.isInteger(idade) || idade < 0 || idade > 120) {
        saida.textContent = "Idade inválida. Use um número inteiro entre 0 e 120."; return;
    }
    saida.textContent = idade >= 18 ? "Maior de idade." : "Menor de idade.";
});
