// 1. Cadastro de estudante
const nome = "Samuel Machado Magalhães";
const matricula = "00000000"; // substitua pelo número real, se necessário
const curso = "Análise e Desenvolvimento de Sistemas";
const periodo = "1º período";
const situacaoAcademica = "Ativo";
console.log("EXERCÍCIO 1 — CADASTRO", { nome, matricula, curso, periodo, situacaoAcademica });

// 2. Compra
const preco = 150;
const quantidade = 3;
const valorTotal = preco * quantidade;
console.log("EXERCÍCIO 2 — COMPRA", "Preço:", preco, "Quantidade:", quantidade, "Total:", valorTotal);

// 3. Desconto
const precoOriginal = 200;
const percentualDesconto = 15;
const valorDesconto = precoOriginal * (percentualDesconto / 100);
const precoFinal = precoOriginal - valorDesconto;
console.log("EXERCÍCIO 3 — DESCONTO", "Desconto:", valorDesconto, "Preço final:", precoFinal);

// 4. Comparação de idade
const idade = 18;
console.log("EXERCÍCIO 4 — COMPARAÇÃO", idade > 18, idade < 18, idade === 18, idade >= 18);

// 5. Operadores lógicos
const idadeLogica = 22;
const possuiCadastro = true;
const contaAtiva = true;
console.log("EXERCÍCIO 5 — LÓGICOS", "Idade mínima e cadastro:", idadeLogica >= 18 && possuiCadastro,
  "Conta ativa OU cadastro:", contaAtiva || possuiCadastro,
  "Conta NÃO ativa:", !contaAtiva);

// 6. Par ou ímpar
const numero = 7;
const par = numero % 2 === 0;
console.log("EXERCÍCIO 6 — PAR OU ÍMPAR", numero, par ? "é par" : "é ímpar");
