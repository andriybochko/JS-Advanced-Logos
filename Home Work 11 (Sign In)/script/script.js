let getId = id => document.getElementById(id);

function registration(){
    let emailValue = getId('emailSignIn').value;
    let passValue = getId('passwordSignIn').value;
    let users = JSON.parse(localStorage.getItem('users'))
    if(emailValue && passValue){
        if(users){
            if(users.find(x => x.email===emailValue)){
                alert('This email already register')
                getId('emailSignIn').value = "";
                getId('passwordSignIn').value = "";
                return;
            }
            users.push({email:emailValue, pass:passValue})
        }
        else{
            users = [{email:emailValue, pass:passValue}]
        }
        localStorage.setItem('users', JSON.stringify(users))
        getId('emailSignIn').value = "";
        getId('passwordSignIn').value = "";
    }
    else {
        alert('Write validate email and password')
    }    
}

function toLogin(){
    getId('signIn').style.display = "none";
    getId('login').style.display = "";
}

function toRegistration(){
    getId('signIn').style.display = "";
    getId('login').style.display = "none";
}

function login(){
    let emailValue = getId('emailLogin').value;
    let passValue = getId('passwordLogin').value;
    let users = JSON.parse(localStorage.getItem('users'))
    if(emailValue && passValue){
        if(users){
            if(users.find(x => x.email===emailValue && x.pass===passValue)){
                getId('user').innerHTML = emailValue;
                getId('emailLogin').value = "";
                getId('passwordLogin').value = "";
                getId('login').style.display = "none";
                getId('profile').style.display = "";
                return;
            }
            else{
                alert('You have a problem with email or password')
            }
        }
        else{
            alert('Localstorage is empty')
        }
    }
    else {
        alert('Write email and password')
    }
}

function toLogOut(){
    getId('profile').style.display = "none";
    getId('login').style.display = "";
}