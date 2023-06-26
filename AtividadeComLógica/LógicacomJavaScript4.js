/*Escreva uma função que recebe um valor booleano ou numérico. Se o parâmetro
fornecido for booleano, o retorno deve ser o inverso.Por exemplo, se a entrada for
false, retorna true. Se o parâmetro for numérico, o retorno deve ser o número
inverso. Exemplo: se fornecer 1, o retorno deve ser -1. Se o parâmetro de entrada
não for de nenhum dos tipos, retorna “Booelano ou Número esperados, mas o
parâmetro é do tipo (tipo do parâmetro).*/

function invertValor(parametro) {
    if (typeof parametro === 'boolean') {
      return !parametro;
    } else if (typeof parametro === 'number') {
      return -parametro;
    } else {
      return "Boolean ou número esperados, mas o tipo é " + typeof parametro;
    }
  }
console.log(invertValor(true)); //insira aq a informação/número desejado