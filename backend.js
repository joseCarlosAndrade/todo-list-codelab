// cadastro
var debugging = true

const items = {...localStorage};
console.log("Itens atuais no localstorage: ", items)
class User
{
    /**
     * Classe principal do usuário.
     * 
     * Armazena informações relevantes sobre cada usuário que utilizou o site,
     * como email, senha, o nome e o apelido do usuário.
     * 
     * @param {string} email 
     * @param {string} name 
     * @param {string} nickname 
     * @param {string} password 
     */

    constructor (email, name, nickname, password)
    {
        // Construtor padrão que define os atributos do usuário (cada objeto).
        this.email = email; 
        this.name = name;
        this.nickname = nickname;
        this.password = password;
        this.late_tasks = [];
        this.must_do = [];
        this.could_do = [];
        this.if_time = [];

    }
}

function create_new_user() {
    // Cadastro de um novo usuário, dando retrieve nos elementos correspondentes HTML.
  
    // TODO checar se espaçoes contem caracteres e nao estao vazios
    var email = document.getElementById("email_input").value;
    var name = document.getElementById("nome_input").value;
    var nickname = document.getElementById("nick_input").value;
    var password = document.getElementById("password_input").value;

    if (!localStorage.getItem(nickname)) {
        // Caso usuario nao é encontrado pelo nickname em localstorage.

        const user = {
            email,
            name,
            nickname,
            password,
        };

        //  Desnecessário?
        user_test = new User(email, name, nickname, password);
    
        localStorage.setItem(nickname, JSON.stringify(user));
        //localStorage.setItem(nickname, JSON.stringify(user_test));
        
        // alert("Yay! Username saved!")

        // Redirects to login page
        location.assign("./login.html")
        return true;
    }

    // console.log("Username already exists!");
    // alert("Oops!  Username already in use.")

    return false;
}

// login
function login() {
    if(debugging) console.log("INICIANDO PROCESSO DE LOGIN")

    var username = document.getElementById("usuario_input").value;
    var password = document.getElementById("password_input").value;
  
    const user = {
        username,
        password,
    };

    if (debugging) console.log("DEBUGANDO: ", user)
    
    user_info = JSON.parse(localStorage.getItem(username));
    //user_info = localStorage.getItem(username);
    console.log(user_info);
    console.log(user_info && (user.password == user_info.password));

    if (user_info && (user.password == user_info.password)) {
        sessionStorage.setItem('username', user.username);
        // window.location.href = "index.html";

        if (debugging) console.log("USUARIO RECONHECIDO. redirecionando..")
        // Redirects to main page
        
        location.assign("./home.html")

        // return true;
    }

    // alert("Oops! Invalid username or password!");
    console.log("Invalid username or password");

    return false;
}

// index
const user_task_dict = {
    "late-tasks" : (user, task) => user.late_tasks.push(task),
    "must-do" : (user, task) => user.must_do.push(task),
    "could-do" : (user, task) => user.could_do.push(task),
    "if-time" : (user, task) => user.if_time.push(task),
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

// todo
function insert_task() {
    // get username and user info from current session
    username = sessionStorage.getItem('username');
    user_info = JSON.parse(localStorage.getItem(username));

    // get task name and category from query and create new task (merge with script?)
    let task_name = document.querySelector('#task-input').value;
    let task_category = document.querySelector('#task-category').value;

    let task = new Task(task_name, task_category);
    
    // add new item into user's localStorage
    
    //user = new User(user_info.email, user_info.name, user_info.nickname, user_info.password);
    user_task_dict[task.category](user, task);
    //localStorage.setItem("names", JSON.stringify(user));
}