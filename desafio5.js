/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arrTest = ['R', 'E', 'N', 'A', 'T', 'O'];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function returnArray (arr) {
    return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/

console.log(returnArray(['R', 'E', 'N', 'A', 'T', 'O'][1]))

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/

function arrFunc(arr, index) {
    return arr[index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/

var differentArr = ['Oi', 5, {a:2}, true, [5]]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/

console.log(arrFunc(differentArr, 0))
console.log(arrFunc(differentArr, 1))
console.log(arrFunc(differentArr, 2))
console.log(arrFunc(differentArr, 3))
console.log(arrFunc(differentArr, 4))

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/

function showBooks( nameBook ) {
    var books = {
    // APRESENTAÇÃO DOS LIVROS
        harryPotter: {
            quantidadePaginas: 300,
            autor: 'Jk Rolling',
            editora: 'Fundação bradesco',
        },

        naruto: {
            quantidadePaginas: 500,
            autor: 'Masashi Kishimoto',
            editora: 'Shonnen jump',
        },

        percyJackson: {
            quantidadePaginas: 250,
            autor: 'josé de abreu',
            editora: 'Genebra'
        }
    }
    // BODY FUNCTION
    if ( nameBook == undefined )
        return books7
    return books[nameBook];
}



/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/

console.log(showBooks())

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/



/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
// ?

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
// ?