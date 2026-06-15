const localStorageKey = "to-do-list"
let input;

// Verifica se a tarefa já existe no localStorage, retornando true ou false
function validateNewTask () 
{
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")

    let inputValue = document.getElementById('input-new-task').value

    let exists  = values.find(x => x.name == inputValue)

    return !exists ? false : true;
}

// Adiciona novas tarefas a lista de tarefas, verificando se o input é válido e se a tarefa já existe, e atualiza a lista de tarefas exibida na tela
function newTask () 
{
    input = document.getElementById('input-new-task') // Pega o valor do input e armazena na variável input
    input.style.border = ''

    // Validação para verificar se o input está vazio ou se a tarefa já existe
    if(!input.value)
    {
        input.style.border = '2px solid red'
        alert("You must put something in the task");
    }
    else if(validateNewTask()) // Verifica se a tarefa já existe
    {
        alert('This task already exists')
    }
    else // Se a tarefa for válida, ela é adicionada à lista
    {

        let dadosTarefa = { // Cria um objeto com os dados da nova tarefa
            name: input.value
        };

        fetch("http://localhost:3000/tarefas", { // Envia uma requisição POST para o servidor para adicionar a nova tarefa
        method: "POST", 
        headers: {
        "Content-Type": "application/json" 
        },
        body: JSON.stringify(dadosTarefa) 
        })
        
        // O código a seguir é responsável por adicionar a nova tarefa ao localStorage e atualizar a lista de tarefas exibida na tela
        let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]") // pega o valor do localStorage e armazena na variável values, se o localStorage estiver vazio, ele cria um array vazio
        values.push({ // Adiciona a nova tarefa ao array values
            name: input.value
        });
        localStorage.setItem(localStorageKey,JSON.stringify(values)) // Armazena o array values no localStorage, convertendo-o para uma string JSON
        showValues()
    }
    console.log(input.value);
    input.value = ''
}

function showValues() // Exibe as tarefas armazenadas no localStorage na tela
{
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]"); // pega o valor do localStorage e armazena na variável values, se o localStorage estiver vazio, ele cria um array vazio
    let list = document.getElementById('to-do-list'); 
    list.innerHTML = ''
    for (let i = 0; i < values.length; i++) // Loop para percorrer o array values e exibir cada tarefa na tela
    {
        list.innerHTML += `<li>
            ${values[i]['name']}
        <button id='btn-ok' onclick="removeItem('${values[i]['name']}')">ok</button>
        </li>`
    }
}
function removeItem (data) // Remove a tarefa do localStorage e atualiza a lista de tarefas exibida na tela
{
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]") // pega o valor do localStorage e armazena na variável values, se o localStorage estiver vazio, ele cria um array vazio
    let index = values.findIndex(x => x.name == data)
    values.splice(index,1)
    localStorage.setItem(localStorageKey,JSON.stringify(values))
    showValues()
}

showValues()