1. Faça um programa que peça uma nota, entre zero e dez. Mostre uma mensagem caso o valor seja inválido e continue pedindo até que o usuário informe um valor válido.

let nota;
while (true) {
  nota = parseFloat(prompt("Digite uma nota entre 0 e 10:"));
  if (nota >= 0 && nota <= 10) {
    break;
  } else {
    document.write("Valor inválido. Tente novamente.");
  }
}
document.write("Nota válida: " + nota);

2. Crie um loop que imprima todos os números de 1 a 100.

let i = 1;
while (i <= 100) {
  document.write(i + "<br>");
  i++;
}

3. Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do 
usuário, mostrando uma mensagem de erro e voltando a pedir as informações.

let usuario, senha;
while (true) {
  usuario = prompt("Digite o nome de usuário:");
  senha = prompt("Digite a senha:");
  if (usuario !== senha) {
    break;
  } else {
    document.write("Erro: A senha não pode ser igual ao nome de usuário.");
  }
}
document.write("Usuário e senha válidos.");

4. Faça um programa que leia e valide as seguintes informações:
Nome: maior que 3 caracteres;
Idade: entre 0 e 150;
Salário: maior que zero;
Sexo: 'f' ou 'm';
Estado Civil: 's', 'c', 'v', 'd'.
Dica: se sua variável é texto, o tamanho dela está armazenado em: texto.length.

let nome, idade, salario, sexo, estadoCivil;
do {
  nome = prompt("Digite o nome (maior que 3 caracteres):");
} while (nome.length <= 3);
do {
  idade = parseInt(prompt("Digite a idade (entre 0 e 150):"));
} while (idade < 0 || idade > 150);
do {
  salario = parseFloat(prompt("Digite o salário (maior que 0):"));
} while (salario <= 0);
do {
  sexo = prompt("Digite o sexo ('f' ou 'm'):");
} while (sexo !== 'f' && sexo !== 'm');
do {
  estadoCivil = prompt("Digite o estado civil ('s', 'c', 'v', 'd'):");
} while (!['s', 'c', 'v', 'd'].includes(estadoCivil));

document.write("Informações válidas.");

5. Supondo que a população de um país A seja de 80.000 habitantes com uma taxa anual de crescimento 
de 3% e que a população de B seja de 200.000 habitantes com uma taxa de crescimento de 1,5%, 
faça um programa que calcule o número de anos necessários para que a população do país A ultrapasse
ou iguale a população do país B, mantidas as taxas de crescimento.

let populacaoA = 80000;
let populacaoB = 200000;
let taxaCrescimentoA = 0.03;
let taxaCrescimentoB = 0.015;
let anos = 0;

while (populacaoA <= populacaoB) {
  populacaoA += populacaoA * taxaCrescimentoA;
  populacaoB += populacaoB * taxaCrescimentoB;
  anos++;
}
document.write("Número de anos necessários para a população de A ultrapassar a de B: " + anos);

6.Altere o programa anterior permitindo ao usuário informar as populações e as taxas de crescimento iniciais.
Valide a entrada e permita repetir a operação.

let populacaoA = parseInt(prompt("Informe a população do país A:"));
let populacaoB = parseInt(prompt("Informe a população do país B:"));
let taxaCrescimentoA = parseFloat(prompt("Informe a taxa de crescimento anual do país A (%):")) / 100;
let taxaCrescimentoB = parseFloat(prompt("Informe a taxa de crescimento anual do país B (%):")) / 100;

let anos = 0;
while (populacaoA <= populacaoB) {
  populacaoA += populacaoA * taxaCrescimentoA;
  populacaoB += populacaoB * taxaCrescimentoB;
  anos++;
}
document.write("Número de anos para a população de A ultrapassar a de B: " + anos);

7. Faça um programa que imprima na tela os números de 1 a 20, um abaixo do outro. 
Depois modifique o programa para que ele mostre os números um ao lado do outro.
// Números um abaixo do outro
for (let i = 1; i <= 20; i++) {
  document.write(i + "<br>");
}
// Números um ao lado do outro
for (let i = 1; i <= 20; i++) {
  document.write(i + " ");
}
 8. Faça um programa que leia 5 números e informe o maior número.

let maiorNumero = -Infinity; 
for (let i = 0; i < 5; i++) {
  let numero = parseInt(prompt("Digite o número " + (i + 1) + ":"));
  if (numero > maiorNumero) {
    maiorNumero = numero;
  }
}
documet.twrite("O maior número é: " + maiorNumero);

9. Faça um programa que leia 5 números e informe a soma e a média dos números.

let soma = 0;
for (let i = 0; i < 5; i++) {
  let numero = parseInt(prompt("Digite o número " + (i + 1) + ":"));
  soma += numero;
}
let media = soma / 5;
documet.twrite("A soma dos números é: " + soma);
documet.twrite("A média dos números é: " + media);

10. Faça um programa que imprima na tela apenas os números ímpares entre 1 e 50.

for (let i = 1; i <= 50; i += 2) {
  document.write(i + "<br>");
}

11. Faça um programa que receba dois números inteiros e gere os números inteiros que estão no intervalo 
compreendido por eles.

let num1 = parseInt(prompt("Digite o primeiro número:"));
let num2 = parseInt(prompt("Digite o segundo número:"));

document.write("Números no intervalo entre " + num1 + " e " + num2 + ":<br>");

let inicio = Math.min(num1, num2) + 1;
let fim = Math.max(num1, num2);

for (let i = inicio; i < fim; i++) {
  document.write(i + "<br>");
}

12. Altere o programa anterior para mostrar no final a soma dos números.

let num1 = parseInt(prompt("Digite o primeiro número:"));
let num2 = parseInt(prompt("Digite o segundo número:"));
let soma = 0;

document.write("Números no intervalo entre " + num1 + " e " + num2 + ":<br>");

let inicio = Math.min(num1, num2) + 1;
let fim = Math.max(num1, num2);

for (let i = inicio; i < fim; i++) {
  document.write(i + "<br>");
  soma += i;
}

document.write("A soma dos números no intervalo é: " + soma + "<br>");

13.Desenvolva um gerador de tabuada, capaz de gerar a tabuada de qualquer número inteiro entre 1 e 10. 

let numero = parseInt(prompt("Digite um número entre 1 e 10 para ver a tabuada:"));

if (numero >= 1 && numero <= 10) {
  let resultado = "";
  for (let i = 1; i <= 10; i++) {
    resultado += `${numero} x ${i} = ${numero * i}<br>`;
  }
  document.write("Tabuada de " + numero + ":<br>" + resultado);
} else {
  document.write("Por favor, digite um número entre 1 e 10.");
}

14.Faça um programa que peça dois números, base e expoente, calcule e mostre o primeiro número elevado ao segundo número.
Não utilize a função de potência da linguagem.

let base = parseInt(prompt("Digite a base:"));
let expoente = parseInt(prompt("Digite o expoente:"));
let resultado = 1;

for (let i = 0; i < expoente; i++) {
  resultado *= base;
}

document.write(`${base} elevado a ${expoente} é: ${resultado}<br>`);

15. Faça um programa que peça 10 números inteiros, calcule e mostre a quantidade de números pares e a quantidade de números ímpares.

let contadorPar = 0;
let contadorImpar = 0;

for (let i = 1; i <= 10; i++) {
  let numero = parseInt(prompt(`Digite o ${i}º número inteiro:`));

  if (numero % 2 === 0) {
    contadorPar++;
  } else {
    contadorImpar++;
  }
}

document.write(`Quantidade de números pares: ${contadorPar}<br>`);
document.write(`Quantidade de números ímpares: ${contadorImpar}`);

16. Gere a sequência de Fibonacci até o n-ésimo termo.
  
let n = parseInt(prompt("Digite o número de termos da sequência de Fibonacci:"));
let fibonacci = [0, 1];

for (let i = 2; i < n; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

document.write("Sequência de Fibonacci até o " + n + "º termo: " + fibonacci.join(", ") + "<br>");

17. Gere a sequência de Fibonacci até que o valor seja maior que 500.

let fibonacci = [0, 1];

while (fibonacci[fibonacci.length - 1] <= 500) {
  fibonacci.push(fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2]);
}

document.write("Sequência de Fibonacci até o valor maior que 500: " + fibonacci.join(", ") + "<br>");

18. Calcule o fatorial de um número inteiro fornecido pelo usuário. Ex.: 5! = 5 × 4 × 3 × 2 × 1 = 120.

let numero = parseInt(prompt("Digite um número para calcular o fatorial:"));
let fatorial = 1;

if (numero < 0) {
  document.write("Fatorial não existe para números negativos.");
} else {
  for (let i = 1; i <= numero; i++) {
    fatorial *= i;
  }
  document.write(`O fatorial de ${numero} é: ${fatorial}<br>`);
}

19. Determine o menor, o maior e a soma dos valores de um conjunto de N números fornecidos.
  
let numeros = [4, 8, 13, 27, 39];
let menor = numeros[0];
let maior = numeros[0];
let soma = 0;

for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] < menor) menor = numeros[i];
  if (numeros[i] > maior) maior = numeros[i];
  soma += numeros[i];
}

document.write(`Menor valor: ${menor}<br>`);
document.write(`Maior valor: ${maior}<br>`);
document.write(`Soma dos valores: ${soma}<br>`);

20. Altere o programa anterior para aceitar apenas números entre 0 e 1000.

const numeros = [20, 400, 75, 1600, 10, 200, 3000, -15];
let menor = null;
let maior = null;
let soma = 0;

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] >= 0 && numeros[i] <= 1000) {
    if (menor === null || numeros[i] < menor) menor = numeros[i];
    if (maior === null || numeros[i] > maior) maior = numeros[i];
    soma += numeros[i];
  }
}

if (menor !== null) {
  document.write(`Menor valor: ${menor}<br>`);
  document.write(`Maior valor: ${maior}<br>`);
  document.write(`Soma dos valores: ${soma}`);
} else {
  document.write("Nenhum número no intervalo entre 0 e 1000.");
}

21. Permita ao usuário calcular o fatorial várias vezes e limite o fatorial a números inteiros positivos menores 
que 16.

let continuar;
do {
  let numero = parseInt(prompt("Digite um número inteiro positivo menor que 16 para calcular o fatorial:"));
  if (numero >= 0 && numero < 16) {
    let fatorial = 1;
    for (let i = 1; i <= numero; i++) {
      fatorial *= i;
    }
    document.write(`O fatorial de ${numero} é: ${fatorial}<br>`);
  } else {
    document.write("Número inválido! Digite um número entre 0 e 15.<br>");
  }
  continuar = prompt("Deseja calcular outro fatorial? (s/n)").toLowerCase();
} while (continuar === 's');
document.write("Programa encerrado.");

22. Determine se um número inteiro é primo.

let numero = parseInt(prompt("Digite um número inteiro:"));
let isPrimo = true;

if (numero <= 1) {
    isPrimo = false;
} else {
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            isPrimo = false;
            break;
        }
    }
}
document.write(isPrimo ? `${numero} é um número primo.` : `${numero} não é um número primo.`);

23. Modifique o programa para indicar, caso o número não seja primo, por quais números ele é divisível.
  
let numero = parseInt(prompt("Digite um número inteiro para verificar se é primo:"));
let divisores = [];

if (numero <= 1) {
  document.write(`${numero} não é um número primo.`);
} else {
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      divisores.push(i);
      if (i !== numero / i) divisores.push(numero / i); 
    }
  }
  if (divisores.length === 0) {
    document.write(`${numero} é um número primo.`);
  } else {
    document.write(`${numero} não é um número primo. Ele é divisível por: ${divisores.join(", ")}.`);
  }
}

24. Exiba todos os números primos entre 1 e N.
let N = 50;
let primos = [];

for (let i = 2; i <= N; i++) {
  let isPrime = true;
  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) primos.push(i);
}
document.write("Os números primos entre 1 e " + N + " são: " + primos.join(", ") + "<br>");
console.log(primos);

25. Calcule a média aritmética de N notas fornecidas.
  
let notas = [8.5, 8, 7, 6, 10];
let somaNotas = notas.reduce((total, nota) => total + nota, 0);
let media = somaNotas / notas.length;

document.write(`A média aritmética das notas é: ${media.toFixed(2)}<br>`);
console.log(`A média aritmética é: ${media}`);

26. Solicite a idade de N pessoas e determine se a média indica uma turma jovem (0-25), adulta (26-60)
ou idosa (acima de 60).

const totalPessoas = parseInt(prompt("Quantas pessoas estão na turma?"));
let idades = [];
let somaIdades = 0;

for (let i = 1; i <= totalPessoas; i++) {
    const idade = parseInt(prompt(`Digite a idade da pessoa ${i}:`));
    idades.push(idade);
    somaIdades += idade;
}
const mediaIdade = somaIdades / totalPessoas;
let classificacao = mediaIdade <= 25 ? "jovem" : mediaIdade <= 60 ? "adulta" : "idosa";

document.write(`A média de idade da turma é ${mediaIdade.toFixed(2)}, classificando a turma como ${classificacao}.`);
console.log(`A média de idade é ${mediaIdade.toFixed(2)}, a turma é ${classificacao}.`);

27. Simule uma eleição com três candidatos e exiba o número de votos de cada um ao final.
const totalEleitores = parseInt(prompt("Digite o número total de eleitores:"));
let votos = [0, 0, 0]; // Votos para os candidatos 1, 2 e 3

for (let i = 1; i <= totalEleitores; i++) {
    let voto;
    do {
        voto = parseInt(prompt(`Eleitor ${i}, vote no candidato (1, 2 ou 3):`));
    } while (![1, 2, 3].includes(voto));
    votos[voto - 1]++;
}

document.write("Resultado da eleição:<br>");
document.write(`Candidato 1: ${votos[0]} votos<br>`);
document.write(`Candidato 2: ${votos[1]} votos<br>`);
document.write(`Candidato 3: ${votos[2]} votos<br>`);

28. Calcule o número médio de alunos por turma, considerando que cada turma tem no máximo 40 alunos.

const totalAlunos = parseInt(prompt("Informe o número total de alunos:"));
const capacidadeMaximaTurma = 40;

let numTurmas = Math.ceil(totalAlunos / capacidadeMaximaTurma);
let mediaAlunosPorTurma = totalAlunos / numTurmas;

document.write(`Número total de alunos: ${totalAlunos}<br>`);
document.write(`Número de turmas necessárias: ${numTurmas}<br>`);
document.write(`Média de alunos por turma: ${mediaAlunosPorTurma.toFixed(2)}<br>`);

29. Calcule o valor total investido por um colecionador em CDs e o valor médio gasto em cada um.

let numeroCDs = parseInt(prompt("Digite o número de CDs:"));
let precoPorCD = parseFloat(prompt("Digite o preço de cada CD:"));

let valorTotal = numeroCDs * precoPorCD;
let valorMedio = valorTotal / numeroCDs;

document.write(`Número de CDs: ${numeroCDs}<br>`);
document.write(`Preço por CD: R$ ${precoPorCD.toFixed(2)}<br>`);
document.write(`Valor total investido: R$ ${valorTotal.toFixed(2)}<br>`);
document.write(`Valor médio por CD: R$ ${valorMedio.toFixed(2)}<br>`);

30. Monte uma tabela de preços de 1 a 50 itens, onde cada item custa R$ 1,99, para uma loja de R$ 1,99.

let precoItem = 1.99;

document.write("Tabela de Preços: <br>");
for (let quantidade = 1; quantidade <= 50; quantidade++) {
  let precoTotal = (quantidade * precoItem).toFixed(2);
  document.write(`Quantidade: ${quantidade} - Preço Total: R$ ${precoTotal}<br>`);
}

31. Monte uma tabela de preços de pães para uma padaria, onde o preço do pão é informado pelo usuário.

let precoDoPao = parseFloat(prompt("Informe o preço do pão: "));
let tabela = "<h3>Tabela de Preços de Pães</h3><table border='1'><tr><th>Quantidade</th><th>Preço Total</th></tr>";

for (let i = 1; i <= 50; i++) {
    let precoTotal = (i * precoDoPao).toFixed(2);
    tabela += `<tr><td>${i}</td><td>R$ ${precoTotal}</td></tr>`;
}

tabela += "</table>";
document.write(tabela);

32. Implemente uma caixa registradora rudimentar para uma loja de conveniência.

let total = 0;
let continuar = true;

while (continuar) {
    let precoItem = parseFloat(prompt("Digite o preço do item: R$"));
    let quantidade = parseInt(prompt("Digite a quantidade:"));

    total += precoItem * quantidade;

    continuar = confirm("Deseja adicionar outro item?");
}

document.write(`Total a pagar: R$ ${total.toFixed(2)}`);

33. Informe a menor, a maior e a média das temperaturas de um conjunto indeterminado de valores.

let temperaturas = [];
let continuar = true;

while (continuar) {
    let temp = parseFloat(prompt("Digite uma temperatura (ou cancele para terminar):"));
    if (!isNaN(temp)) {
        temperaturas.push(temp);
        continuar = confirm("Deseja adicionar mais uma temperatura?");
    } else {
        continuar = false;
    }
}

let menor = Math.min(...temperaturas);
let maior = Math.max(...temperaturas);
let media = temperaturas.reduce((a, b) => a + b, 0) / temperaturas.length;

document.write(`Menor temperatura: ${menor}°<br>`);
document.write(`Maior temperatura: ${maior}°<br>`);
document.write(`Média das temperaturas: ${media.toFixed(2)}°<br>`);

34. Verifique se um número é primo (com foco em criptografia).

let numero = parseInt(prompt("Digite um número para verificar se é primo:"));

function isPrimo(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

document.write(isPrimo(numero) ? `${numero} é um número primo.` : `${numero} não é um número primo.`);

35. Gere uma lista dos números primos entre 1 e um número fornecido pelo usuário.

let numero = parseInt(prompt("Digite um número:"));
let primos = [];

for (let i = 2; i <= numero; i++) {
    if (isPrimo(i)) {
        primos.push(i);
    }
}

document.write(`Números primos até ${numero}: ${primos.join(", ")}<br>`);

function isPrimo(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

36. Gere a tabuada de um número qualquer, com intervalos informados pelo usuário.

let numero = parseInt(prompt("Digite o número para gerar a tabuada:"));
let inicial = parseInt(prompt("Digite o número inicial do intervalo:"));
let final = parseInt(prompt("Digite o número final do intervalo:"));

for (let i = inicial; i <= final; i++) {
    document.write(`${numero} x ${i} = ${numero * i}<br>`);
}

37. Calcule o mais alto, o mais baixo, o mais gordo e o mais magro cliente de uma academia e informe as médias de 
altura e peso.
  
let numClientes = parseInt(prompt("Quantos clientes deseja registrar?"));
let maisAlto = -Infinity, maisBaixo = Infinity, maisGordo = -Infinity, maisMagro = Infinity;
let somaAltura = 0, somaPeso = 0;

for (let i = 0; i < numClientes; i++) {
    let altura = parseFloat(prompt("Digite a altura do cliente (em metros):"));
    let peso = parseFloat(prompt("Digite o peso do cliente (em kg):"));

    somaAltura += altura;
    somaPeso += peso;

    if (altura > maisAlto) maisAlto = altura;
    if (altura < maisBaixo) maisBaixo = altura;
    if (peso > maisGordo) maisGordo = peso;
    if (peso < maisMagro) maisMagro = peso;
}

let mediaAltura = somaAltura / numClientes;
let mediaPeso = somaPeso / numClientes;

document.write(`Mais alto: ${maisAlto}m<br>`);
document.write(`Mais baixo: ${maisBaixo}m<br>`);
document.write(`Mais gordo: ${maisGordo}kg<br>`);
document.write(`Mais magro: ${maisMagro}kg<br>`);
document.write(`Média de altura: ${mediaAltura.toFixed(2)}m<br>`);
document.write(`Média de peso: ${mediaPeso.toFixed(2)}kg<br>`);

38. Calcule o salário atual de um funcionário contratado em 1995 com aumento anual variável, baseado em seu
salário inicial.

let salarioInicial = parseFloat(prompt("Digite o salário inicial do funcionário:"));
let anoAtual = new Date().getFullYear();
let anosTrabalhados = anoAtual - 1995;

let salario = salarioInicial;

for (let i = 1; i <= anosTrabalhados; i++) {
    let aumento = parseFloat(prompt(`Informe o aumento para o ano ${1995 + i}:`));
    salario += salario * (aumento / 100);
}

document.write(`Salário atual do funcionário: R$ ${salario.toFixed(2)}`);

39. Realize uma estatística de acidentes de trânsito em cinco cidades e analise os resultadoslet acidentes = {};
let cidades = ["Cidade A", "Cidade B", "Cidade C", "Cidade D", "Cidade E"];

cidades.forEach(cidade => {
    let numeroAcidentes = parseInt(prompt(`Digite o número de acidentes em ${cidade}:`));
    acidentes[cidade] = numeroAcidentes;
});

let totalAcidentes = Object.values(acidentes).reduce((a, b) => a + b, 0);
let mediaAcidentes = totalAcidentes / cidades.length;

document.write("Estatísticas de acidentes de trânsito:<br>");
for (let cidade in acidentes) {
    document.write(`${cidade}: ${acidentes[cidade]} acidentes<br>`);
}

document.write(`Total de acidentes: ${totalAcidentes}<br>`);
document.write(`Média de acidentes por cidade: ${mediaAcidentes.toFixed(2)}<br>`);

40. Exiba uma tabela de uma dívida com base em juros e número de parcelas.



















