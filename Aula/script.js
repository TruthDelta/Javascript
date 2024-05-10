// let nome = prompt ('Qual é o seu nome?');
// let função = prompt ('Com o que você trabalhar?');
// alert('é um grande prazer te conhecer ' + nome + ', profissional em ' + função);

let aspasSimples = 'estamos criando uma string com aspas simples;'
//String em resumo são textos que podem ser utilizados no Javascript e para utiliza-lo podemos usar com aspas simples, duplas ou string template.
let aspasDuplas = "String com aspas duplas";
//Exemplo de string com aspas duplas..

let templateLiteral = `String interpolation allows embedding expressions like ${1 + 1}.`;
//Essa é a uma string template, basicamente usados em casos onde há necessidade de realizar uma ação aritimética(como no exemplo) ou quando guardamos alguma variável dentro dela.
//O Símbolo "${}" em Javascript é usado para interpolar variavéis, ou seja para retornar o valor dela.


const variavelNova = 'Valor deste variável é 20';

console.log(variavelNova);

let stringTemplate = `String Template usada para ${1 + 1}`
console.log(stringTemplate);