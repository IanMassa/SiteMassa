/*Crie uma função que receba a idade da pessoa e retorne a quantidade de dias, crie
uma validação para não permitir número negativo, e quando tiver retorna uma
mensagem de erro.*/

function CalcularDias() {
   
    resultado = (idade * 365)
    return resultado
}

const idade = (23) //Insira a Idade aqui

if (idade > 0){
    console.log("De acordo com sua idade, você tem "+CalcularDias()+" dias de vida")
} else {
    console.log("ERRO! AS IDADES NÃO PODEM SER NEGATIVAS")
}