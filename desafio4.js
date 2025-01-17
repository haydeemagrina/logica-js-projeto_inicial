console.log('Boas-vindas');
let nome = 'Haydée';
console.log(`Olá, ${nome}`);
alert(`Olá, ${nome}`);
let resposta = prompt('Qual a linguagem de programação que você mais gosta?');
console.log(resposta);

let valor1 = 70;
let valor2 = 24;
let resultado1 = valor1 + valor2;
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado1}`);
let resultado2 = valor1 - valor2;
console.log(`A diferença de ${valor1} e ${valor2} é igual a ${resultado2}`);
let idade = prompt('Qual a sua idade?');
if (idade >=18) {
    console.log('Você é maior de idade');
} else {
    console.log('você é menor de idade');
};

let numero = prompt('Digite um número');
if (numero < 0) {
    console.log('o número é negativo');
} else {
    if (numero == 0) {
        console.log('o número é zero');
    } else {
        console.log('o número é positivo');
    }
};

let contador = 1;
while (contador <= 10) {
    console.log(contador);
    contador++
};

let nota = 8
if (nota >= 7) {
    console.log('Aprovado!');
} else {
    console.log('Reprovado!');
};

let random = Math.random();
console.log(random);

console.log(parseInt(random * 10 + 1));

console.log(parseInt(random * 1000 + 1));