// Standard category
var cur_category = "must_do" // could_do ; if_time

function set_category(category)
{   

    let new_b = document.querySelector(`#${category}`)
    let old_b = document.querySelector(`#${cur_category}`)
    new_b.setAttribute("class", "btn btn_tasks btn_destaque")
    old_b.setAttribute("class", "btn btn_tasks")

    cur_category = category
}

function insert_new_task() {
    // get username and user info from current session
    username = sessionStorage.getItem('username');
    user_info = JSON.parse(localStorage.getItem(username));

    // get task name and category from query and create new task (merge with script?)
    let task_data = document.querySelector('#data_input').value;
    let task_title= document.querySelector('#titulo_input').value;

    let task = new Task(task_title, cur_category, task_data);
    console.log(task)
    // add new item into user's localStorage
    
    //user = new User(user_info.email, user_info.name, user_info.nickname, user_info.password);
    user_task_dict[task.category](user, task);
    //localStorage.setItem("names", JSON.stringify(user));
}