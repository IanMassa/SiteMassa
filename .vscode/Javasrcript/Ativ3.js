function contavogais(str){
    let contagem = 0
    const vogais = ['a','e','i','o','u','a','e','i','o','u']
    for(let char of str){
        if (vogais.includes(char)){
            contagem++
        }
    }
    return contagem
}
console.log(contavogais("cavalo"))