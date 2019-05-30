// домашка по localStorage
// необхідно реалізувати наступне:
// 1. При заповненні полів форми, перше провалідуйте її на свій розсуд
// 2. Якщо все гуд створіть об'єкт з цими даними
// 3. Дані зберегти в localStorage
// 4. Дані стягувати з localStorage і добавляти в таблицю

let form = document.forms['form'];

let getId = x => document.getElementById(x);
let tbody = document.querySelector('.tbody');

let index;

form.login.onblur = function() {
    let login = this.value;
    let reg = /^[a-zA-Z-]+$/;

    if(!login) {
        form.login.style.background = "mistyrose";
    }
    else if(reg.test(`${login}`) == true) {
        form.login.style.background = "aliceblue";
    }
    else {
        form.login.value = "";
        form.login.style.background = "mistyrose";
    }
};

form.password.onblur = function() {
    let pass = this.value;
    let reg = /^[a-zA-Z0-9]{8,16}$/;
    if(!pass) {
        form.password.style.background = "mistyrose";
    }
    else if(reg.test(`${pass}`) == true) {
        form.password.style.background = "aliceblue";
    }
    else {
        form.password.value = "";
        form.password.style.background = "mistyrose";
    }
};

form.email.onblur = function() {
    let email = this.value;
    let reg = /^[\w\.]+@[a-z0-9]+\.[a-z]{1,4}(\.[a-z]{2,4})?$/
    if(!email) {
        form.email.style.background = "mistyrose";
    }
    else if(reg.test(`${email}`) == true) {
        form.email.style.background = "aliceblue";
    }
    else {
        form.email.value = "";
        form.email.style.background = "mistyrose";
    }
};

function useradd(){
    tbody.innerHTML = "";
    users = JSON.parse(localStorage.getItem('users'));
    for(i=0; i<users.length; i++){
        let tableString = `<tr>` +`<td>${i+1}</td>` + `<td>${users[i].login}</td>` + 
        `<td>${users[i].pass}</td>` + `<td>${users[i].email}</td>` + 
        `<td><button type="button" class="edit" id=${i}>Edit</button></td>` + 
        `<td><button type="button" class="delete" id=${i}>Delete</button></td>` + `</tr>`;
        tbody.innerHTML += tableString;
    }
}

users = JSON.parse(localStorage.getItem('users'));
if(users){
    useradd()
}

getId('add').addEventListener('click', function(){
    let loginValue = form.login.value;
    let passValue = form.password.value;
    let emailValue = form.email.value;
    let users = JSON.parse(localStorage.getItem('users'));
    if(users){
        users.push({login:loginValue, pass:passValue, email:emailValue});
    }
    else{
        users = [{login:loginValue, pass:passValue, email:emailValue}];
    }
    localStorage.setItem('users', JSON.stringify(users));
    form.reset();
    form.login.style.background = "";
    form.password.style.background = "";
    form.email.style.background = "";
    useradd();
})

tbody.addEventListener('click', function(){ 
    if (event.target.innerHTML == 'Edit'){
        index = event.target.id;
        users = JSON.parse(localStorage.getItem('users')); 
        form.login.value = users[index].login;
        form.password.value = users[index].password;
        form.email.value = users[index].email;
        getId('add').style.display = "none";
        getId('edit').style.display = "";
    }
})

getId('edit').addEventListener('click', function(){
    users[index].login = form.login.value;
    users[index].password = form.password.value;
    users[index].email = form.email.value;
    localStorage.setItem('users', JSON.stringify(users)); 
    form.reset();
    form.login.style.background = "";
    form.password.style.background = "";
    form.email.style.background = "";
    useradd();
    getId('add').style.display = "";
    getId('edit').style.display = "none";
})

tbody.addEventListener('click', function(){ 
    if (event.target.innerHTML == 'Delete'){
        users = JSON.parse(localStorage.getItem('users'));
        users.splice(event.target.id, 1);
        localStorage.setItem('users', JSON.stringify(users));
        useradd();
    }
})

tbody.addEventListener('click', function(){ 
    if (users.length == 0 && event.target.innerHTML == "Delete"){
        getId('add').style.display = "";
        getId('edit').style.display = "none";
        form.reset();
    } 
})