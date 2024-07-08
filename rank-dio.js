//Calculadora de partidas rankeadas
// Declaração de variaveis
let vitorias = 5
let derrotas = 10
let saldoVitoria = ""
let nivel = ""
// Validar as variaveis
if (vitorias < 0){
  console.log("O número de vitórias não pode ser menor que 0")
}
if (derrotas < 0){ 
  console.log("O número de derrotas não pode ser menor que 0")
}
// função para calcular o saldo de vitórias
calcularSaldo(vitorias, derrotas)

function calcularSaldo(numV,numD){
  saldo = numV - numD
  return saldo
}
saldoVitoria = saldo
// definição do ranking
if (saldo <=10) {
    nivel = "Ferro"
}
else if (saldo >= 11 && saldo <=20) {
    nivel = "Bronze"
}
else if (saldo >= 21 && saldo <=50) {
    nivel = "Prata"
}
else if (saldo >= 51 && saldo <=80) {
    nivel = "Ouro"
}
else if (saldo >= 81 && saldo <=90) {
    nivel = "Diamante"
}
else if (saldo >= 91 && saldo <=100) {
    nivel = "Lendário"
}
else {
    nivel = "Imortal"
}

console.log( `O Herói tem de saldo ${saldoVitoria} de está no nível de ${nivel}`)