const botao = document.getElementById("calcular");
botao.addEventListener("click", function () {
  const campos = [document.getElementById("nota1"), document.getElementById("nota2"), document.getElementById("nota3")];
  const resultado = document.getElementById("resultado");
  if (campos.some(campo => campo.value === "")) {
    resultado.textContent = "Erro: preencha todas as notas.";
    return;
  }
  const notas = campos.map(campo => Number(campo.value));
  if (notas.some(nota => nota < 0 || nota > 10)) {
    resultado.textContent = "Erro: todas as notas devem estar entre 0 e 10.";
    return;
  }
  const media = (notas[0] + notas[1] + notas[2]) / 3;
  resultado.textContent = `Média: ${media.toFixed(2)}`;
});
