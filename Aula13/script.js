const input = document.getElementById("taskInput");

const ul = document.getElementById('taskList');

function addTask() {
    if (input.value !== "") { //Aqui informamos que se (if) o input for diferente (!==) de vazio (""), ele irá criar um elemento (createElement) de "li", o texto que ela possui é igual o "input value" ou seja, é o valor do input que será digitado. 
        
        const li = document.createElement("li");
        li.textContent = input.value;
        //Traduzindo esta linha, o texto de lista (li) será criado e deverá ser igual ao valor que será digitado dentro do campo "input"

        const removerBotao = document.createElement ("button");
        //Aqui estamos criando um Botão (button) para remover esses itens de (li);

        removerBotao.onclick = function() { //Criamos uma função que ao clicar neste botão ele irá executar uma função.
            ul.removerChild(li); //A função é pegar o elemento filho (child) da UL, que no caso é a "li" e remove-la.
        };

        ul.appendChild(li); //Estamos adicionando um filho para nossa UL.
        li.appendChild(removerBotao); //Aqui chamamos nossa const "li" e estamos adicionando a ela um filho(appendChild)

        input.value = ""; //Usado para limpar o campo Input, depois de adicionado o item em questão.

    } else { //Caso o campo input estiver vazio, ele irá aparecer esta mensagem.
        alert('Por favor, insira uma tarefa');
    }
}