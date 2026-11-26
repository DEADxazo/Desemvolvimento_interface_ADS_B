const saida = document.getElementById("resultado");
document.getElementById("calcular").addEventListener("click", () => {
    const campos = ["nota1", "nota2", "nota3"].map(id => document.getElementById(id).value.trim());
    if (campos.some(n => n === "")) { saida.textContent = "Preencha todas as notas."; return; }
    const notas = campos.map(Number);
    if (notas.some(n => !Number.isFinite(n) || n < 0 || n > 10)) { saida.textContent = "Notas inválidas. Cada nota deve estar entre 0 e 10."; return; }
    const media = notas.reduce((soma, n) => soma + n, 0) / 3;
    saida.textContent = `Média: ${media.toFixed(2)} — ${media >= 6 ? "Aprovado" : "Recuperação"}.`;
});
