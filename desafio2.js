let dia = prompt('Qual é o dia da semana');
if (dia == 'sábado' || dia == 'domingo') {
    alert('Bom final de Semana');
}
 else{
    alert('Boa Semana')
};

let numero = prompt('Digite um número positivo ou negativo');
if (numero >= 0) {
    alert(`o número ${numero} é positivo`);
}
else {
    alert(`o número ${numero} é negativo`);
}

let pontos = 90;
if (pontos >= 100) {
    alert('parabéns você venceu!');
}
else {
    alert('Tente novamente para ganhar');
};

let saldo = 1000000.00;
alert(`seu saldo é: ${saldo}`)

let nome = prompt('Digite seu nome');
alert(`Bem vindo ${nome}`);