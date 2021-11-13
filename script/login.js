var button = document.getElementById('login-btn');
var password = document.getElementById('password')

//button.addEventListener = ações a serem realizar ao clicar no botão de login
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
        document.getElementById('alert').innerHTML = 'Senha inválida!'
    }

    else{
        document.getElementById('alert').innerHTML = ''
        document.getElementById('sizePassword').innerHTML = ''
        window.location.href='admin.html'
    }
});


//verifyEmail = verifica se o email a ser inserido é válido
//portanto, deve haver o caracter '@', um '.' e após ele,
//no mínimo dois caracteres e no máximo 4
function verifyEmail(email) {
    let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})$/;

    if(!filter.test(email)){
        return false;
    }
};

//verifyPassword = verifica se a senha a ser inserida é válida
//ao dizer válida, diz-se pelo menos 1 letra maiuscula, um número, e com 
//tamanho mínimo de 6 caracteres e máximo de 20
function verifyPassword (password) {
    let filter = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,20}$/;

    if(!filter.test(password)){
        return false;
    }
};

password.addEventListener('keyup',function () {
    if(password.value.length === 0){
        document.getElementById('sizePassword').innerHTML = ''
    }


    if(password.value.length > 0 && password.value.length < 6){
        document.getElementById('sizePassword').innerHTML = 'Senha Fraca'
        document.getElementById('sizePassword').style.color = '#ff0000'
    }

    if(password.value.length > 6 && password.value.length < 12){
        document.getElementById('sizePassword').innerHTML = 'Senha Moderada'
        document.getElementById('sizePassword').style.color = '#0000ff'
    }

    if(password.value.length > 12 && password.value.length < 20){
        document.getElementById('sizePassword').innerHTML = 'Senha Forte'
        document.getElementById('sizePassword').style.color = '#008f00'
    }
});