var button = document.getElementById('login-btn');

button.addEventListener("click", (e) => {
    e.preventDefault();

    const userEmail = document.getElementById('email')
    const userPassword = document.getElementById('password')

    const email = userEmail.value;
    const password = userPassword.value;

    if(email.length === 0 || password.length === 0){
        document.getElementById('alert').innerHTML = 'Preencha os campos vazios!'
    }

    else if(verifyEmail(email) === false){
        document.getElementById('alert').innerHTML = 'Email inválido!'
    }

    else if(verifyPassword(password) === false){
        document.getElementById('alert').innerHTML = 'Senha incorreta!'
    }

    else{
        document.getElementById('alert').innerHTML = ''
    }
});

function verifyEmail(email) {
    let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,3})$/;

    if(!filter.test(email)){
        return false;
    }
};

function verifyPassword (password) {
    let filter = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,20}$/;

    if(!filter.test(password)){
        return false;
    }
};