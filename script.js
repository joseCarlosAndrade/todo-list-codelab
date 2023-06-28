var late_task_list = [];
var must_do_task_list = [];
var could_do_task_list = [];
var if_time_task_list = [];


var task_dict = {
    "late-tasks" : (task) => late_task_list.push(task),
    "must-do" : (task) => must_do_task_list.push(task),
    "could-do" : (task) => could_do_task_list.push(task),
    "if-time" : (task) => if_time_task_list.push(task),
    _ : console.log('Categoria invalida') // TODO: NAO FUNCIONA! DESCOBRIR CHAVE DEFAULT

}

class Task
{
    constructor (task_name, task_category)
    {
        this.task_name = task_name; 
        this.category = task_category;
        this.finished = false;
    }
}

function add_task()
{
    let task_name = document.querySelector('#task-input').value;
    let task_category = document.querySelector('#task-category').value;


    let task = new Task(task_name, task_category);
    // console.log(task.task_name + task.category)

    task_dict[task.category](task);

    update_showing_tasks(task);
}

function update_showing_tasks(task)
{
    let task_node = document.createElement('p');
    task_node.setAttribute("id", 0);
    task_node.textContent = task.task_name
    console.log(task_node)
    let task_element = document.querySelector(`#${task.category}`);
    task_element.appendChild(task_node)

}

// TODO: Funcao para trocar tasks de categoria
// TODO: Interface para seleçao de categoria
// TODO: Marcar se a tarefa esta concluida ou nao

// TODO: Fazer cada task virar uma DIV ao inves de um <p>
//      <div id="task01"> CHECKBOX - <p> NOME DA TASK <\p> <\div>