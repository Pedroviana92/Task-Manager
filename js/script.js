let inputTarefa = document.querySelector('#tarefa-digitada')
let botaoAdd = document.querySelector('#adicionar-tarefa')
let divTarefas = document.querySelector('#tarefas')

let finalizarTarefa = () => {
    let listaBotoes = document.querySelectorAll('.botao-tarefa')

    for(let i=0; i < listaBotoes.length; i++) {
        listaBotoes[i].addEventListener('click', () => {
            listaBotoes[i].parentElement.parentElement.remove()
        })
    }
}



let criarTarefa = () => {
    if(inputTarefa.value.trim() == ' ') {
        return alert('Favor preencher a tarefa')
    }
    let tarefa = `<div class="col-md-4">
    <div class="card-tarefa">
        <div class="texto-tarefa">
            ${inputTarefa.value}
        </div>
        <div class="botao-tarefa">
             <img src="img/check.png" width="32" alt="Botão para finalizar tarefa" title="Botão para finalizar tarefa">
        </div>
    </div>
</div>`
    divTarefas.innerHTML += tarefa
    inputTarefa.value = ' '
    finalizarTarefa()
}


botaoAdd.addEventListener('click', criarTarefa)
inputTarefa.addEventListener('keypress', (event) => {
    if(event.key == 'Enter'){
        criarTarefa()
    }
})
    
  
  

  
    
