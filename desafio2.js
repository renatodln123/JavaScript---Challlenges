// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.

function twoArgs(num1, num2) {
    return num1 + num2;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.

var varTwoArgs = twoArgs(5, 5)

// Qual o valor atualizado dessa variável?

console.log(varTwoArgs)

// Declare uma nova variável, sem valor.

var newVar

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/

function addValue() {

    newVar = 'VALOR'
    return "O valor da variável agora é: "+newVar
}

// Invoque a função criada acima.

console.log(addValue())


// Qual o retorno da função? (Use comentários de bloco).

// O valor retornado é:
//     " O valor da variável agora é: VALOR"

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/

function multi(numb1, numb2, numb3) {
    if ( numb1 == undefined || numb2 == undefined || numb3 == undefined) 
        return "Preencha todos os valores corretamente"
    
    return ( numb1 * numb2 * numb3 ) +2
}



// Invoque a função criada acima, passando só dois números como argumento.

console.log(multi(2, 5))

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).

// Preencha todos os valores corretamente

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.

console.log(multi(2, 4, 6))

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).

//50

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/

function func(arg1, arg2, arg3) {
    if ( arg2 == undefined && arg3 == undefined)
        return arg1
    else if (arg3 == undefined)
        return arg1 + arg2
    else if (arg1 != undefined && arg2 != undefined && arg3 != undefined)
        return (arg1 + arg2) / arg3
    else if (arg1 == undefined && arg2 == undefined && arg3 == undefined)
        return false
    return null
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.

console.log(func(2))
console.log(func(2, 4))
console.log(func(2, 5, 7))
console.log(func())
