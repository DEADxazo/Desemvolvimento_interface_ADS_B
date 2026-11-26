// Laboratório 1 — cadastro de usuário
const usuario = { nome: "Samuel Machado Magalhães", email: "samuel.estudante@email.com", idade: 19, ativo: true };
const anoNascimento = 2026 - usuario.idade; // estimativa; pode variar conforme aniversário
const cadastroEl = document.getElementById("cadastro");
document.getElementById("mostrarCadastro").addEventListener("click", () => {
  cadastroEl.innerHTML = `<p><strong>Nome:</strong> ${usuario.nome}</p><p><strong>E-mail:</strong> ${usuario.email}</p><p><strong>Idade:</strong> ${usuario.idade}</p><p><strong>Usuário ativo:</strong> ${usuario.ativo ? "Sim" : "Não"}</p><p><strong>Ano de nascimento estimado:</strong> ${anoNascimento}</p>`;
  console.log("DADOS DO USUÁRIO", usuario, "Ano de nascimento estimado:", anoNascimento);
});

// Laboratório 2 — calculadora de operações
const botaoCalc = document.getElementById("btnCalcular");
botaoCalc.addEventListener("click", () => {
  const campo1 = document.getElementById("numero1"); const campo2 = document.getElementById("numero2"); const out = document.getElementById("resultadoCalc");
  if (campo1.value.trim() === "" || campo2.value.trim() === "") { out.textContent = "Preencha os dois números."; return; }
  const a = Number(campo1.value), b = Number(campo2.value);
  const divisao = b === 0 ? "Não é possível dividir por zero." : a / b;
  out.innerHTML = `<p><strong>Soma:</strong> ${a + b}</p><p><strong>Subtração:</strong> ${a - b}</p><p><strong>Multiplicação:</strong> ${a * b}</p><p><strong>Divisão:</strong> ${divisao}</p>`;
});

// Laboratório 3 — média de três notas e validação
 document.getElementById("calcularMedia").addEventListener("click", () => {
  const inputs = ["nota1", "nota2", "nota3"].map(id => document.getElementById(id)); const out = document.getElementById("resultadoMedia");
  if (inputs.some(input => input.value.trim() === "")) { out.textContent = "Erro: preencha todas as notas."; return; }
  const notas = inputs.map(input => Number(input.value));
  if (notas.some(nota => !Number.isFinite(nota) || nota < 0 || nota > 10)) { out.textContent = "Erro: as notas devem estar entre 0 e 10."; return; }
  const media = notas.reduce((soma, nota) => soma + nota, 0) / notas.length;
  out.innerHTML = `<p><strong>Média:</strong> ${media.toFixed(2).replace(".", ",")}</p><p>${media >= 6 ? "Resultado: média igual ou superior a 6." : "Resultado: média inferior a 6."}</p>`;
});

// Exercícios de fixação — resultados no console
 document.getElementById("executarExercicios").addEventListener("click", () => {
  console.clear();
  console.log("EXERCÍCIO 1 — Cadastro de estudante"); const nome = "Samuel"; const matricula = "2026ADS001"; const curso = "ADS"; const periodo = "1º período"; const situacao = "Cursando"; console.log({nome, matricula, curso, periodo, situacao});
  console.log("EXERCÍCIO 2 — Compra"); const preco = 150; const quantidade = 3; console.log("Total:", preco * quantidade);
  console.log("EXERCÍCIO 3 — Desconto"); const precoOriginal = 200; const desconto = precoOriginal * 0.15; console.log("Desconto:", desconto, "Preço final:", precoOriginal - desconto);
  console.log("EXERCÍCIO 4 — Comparações"); const idade = 18; console.log(">18", idade > 18, "<18", idade < 18, "===18", idade === 18, ">=18", idade >= 18);
  console.log("EXERCÍCIO 5 — Operadores lógicos"); const idadeTeste = 22, possuiCadastro = true, contaAtiva = true; console.log("Idade mínima e cadastro:", idadeTeste >= 18 && possuiCadastro, "Conta ativa OU cadastro:", contaAtiva || possuiCadastro, "Cadastro e conta não ativa:", possuiCadastro && !contaAtiva);
  console.log("EXERCÍCIO 6 — Par ou ímpar"); const numero = 7; console.log(numero % 2 === 0 ? "Par" : "Ímpar");
  document.getElementById("statusExercicios").textContent = "Exercícios executados! Abra o Console do navegador (F12) para ver os resultados.";
});

// Quiz baseado na autoavaliação do material da aula
const perguntas = [
 {q:"Qual tecnologia controla o comportamento de uma página?", op:["HTML","CSS","JavaScript","SQL"], correta:2},
 {q:"Qual declaração permite reatribuir valores?", op:["const","let","class","return"], correta:1},
 {q:"Qual o tipo de dado de 'ADS'?", op:["Number","Boolean","String","Null"], correta:2},
 {q:"Quanto vale 10 % 3?", op:["3","1","0","10"], correta:1},
 {q:"Qual operador compara valor e tipo?", op:["=","==","===","!="], correta:2},
 {q:"Qual método localiza um elemento HTML por ID?", op:["console.log()","document.getElementById()","typeof","Number()"], correta:1},
 {q:"Qual operador lógico representa E?", op:["||","!","&&","="], correta:2},
 {q:"Qual função converte texto numérico em número?", op:["String()","Number()","Boolean()","typeof"], correta:1}
];
const quizEl = document.getElementById("quiz");
perguntas.forEach((pergunta, i) => { const bloco = document.createElement("div"); bloco.className="quiz-question"; bloco.innerHTML=`<p>${i+1}. ${pergunta.q}</p>`+pergunta.op.map((op,j)=>`<label><input type="radio" name="q${i}" value="${j}"> ${String.fromCharCode(65+j)}) ${op}</label>`).join(""); quizEl.appendChild(bloco); });
document.getElementById("corrigirQuiz").addEventListener("click", () => { let pontos=0, respondidas=0; perguntas.forEach((p,i)=>{const escolhido=document.querySelector(`input[name="q${i}"]:checked`); if(escolhido){respondidas++; if(Number(escolhido.value)===p.correta)pontos++;}}); document.getElementById("resultadoQuiz").textContent=`Você acertou ${pontos} de ${perguntas.length}. Respondidas: ${respondidas}/${perguntas.length}.`; });
