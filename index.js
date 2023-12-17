function calcularRank(vitorias, derrotas) {
    const saldoRankeadas = vitorias - derrotas;
    let resultado;

    if (vitorias < 10) {
        resultado = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        resultado = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        resultado = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        resultado = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        resultado = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        resultado = "Lendário";
    } else {
        resultado = "Imortal";
    }

    return resultado;
}

// Exemplo de uso da função
const vitoriasJogador = 60;
const derrotasJogador = 20;
const resultadoRankeadas = calcularRank(vitoriasJogador, derrotasJogador);
console.log(`Resultado das rankeadas: ${resultadoRankeadas}`);
