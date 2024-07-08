// Criar um código que mostre o rank baseado no XP do personagem
// Nome do personagem
let nomePersonagem = "FXGhost"
// quantidade de XP do personagem
let xpPersonagem = 11000
// Rank do personagem
let rank = ""

if (xpPersonagem <= 1000) {
    rank = "Ferro"
}
else if (xpPersonagem >= 1001 && xpPersonagem <= 2000){
    rank = "Bronze"
}
else if (xpPersonagem >= 2001 && xpPersonagem <= 3000){
    rank = "Prata"
}
else if (xpPersonagem >= 3001 && xpPersonagem <= 4000){
    rank = "Ouro"
}
else if (xpPersonagem >= 4001 && xpPersonagem <= 5000){
    rank = "Platina"
}
else if (xpPersonagem >= 5001 && xpPersonagem <= 7000){
    rank = "Diamante"
}
else if (xpPersonagem >= 7001 && xpPersonagem <= 9000){
    rank = "Ascendente"
}
else if (xpPersonagem >= 9001 && xpPersonagem <= 10000) {
    rank = "Imortal"
}
else {
    rank = "Radiante"
}

// mensagem final
console.log("O Herói de nome " + nomePersonagem + " está no nível de " + rank);
