// Modal script
const modal = document.getElementById('modalContainer');
const modalForm = document.querySelector('form');
const modalBtn = document.getElementById('formBtn');
const closeModal = document.getElementById('closeModal');

// Login validation script
const button = document.getElementById('loginButton');

modalBtn.onclick = function() {
    modal.style.display = 'flex';
}

closeModal.onclick = function() {
    modal.style.display = 'none'
}

window.onclick = function(event) {
    if(event.target == modal){
        modal.style.display = 'none';
    }
}

button.addEventListener("click", (e) => {
    e.preventDefault();

    const userEmail = document.getElementById('email')
    const userPassword = document.getElementById('password')

    const email = userEmail.value;
    const password = userPassword.value;

    
    if(email.length === 0 || password.length === 0){
        document.getElementById('alert').innerHTML = 'Preencha os campos vazios!'

        if(email.length === 0 && password.length === 0){
            document.getElementById('email').style.borderColor = '#f00'
            document.getElementById('password').style.borderColor = '#f00'
        }
    
        else if(email.length === 0){
            document.getElementById('email').style.borderColor = '#f00'
            document.getElementById('password').style.borderColor = '#000'
        }
    
        else{
            document.getElementById('password').style.borderColor = '#f00'
            document.getElementById('email').style.borderColor = '#000'
        }
    }

    else{
        if(password.length < 6){
            document.getElementById('alert').innerHTML = 'Tamanho da senha: 6-20 caracteres!'
            document.getElementById('password').style.borderColor = '#f00'
        }
    
        else if(verifyEmail(email) === false){
            document.getElementById('alert').innerHTML = 'Email inválido!'
            document.getElementById('email').style.borderColor = '#f00'
            document.getElementById('password').style.borderColor = '#000'
        }
    
        else if(verifyPassword(password) === false){
            document.getElementById('alert').innerHTML = 'Senha inválida!'
            document.getElementById('password').style.borderColor = '#f00'
            document.getElementById('email').style.borderColor = '#000'
        }
    
        else{
            document.getElementById('alert').innerHTML = ''
            document.getElementById('sizePassword').innerHTML = ''
            changeBg();
        }
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
    let sizePassword = document.getElementById('sizePassword');

    if(password.value.length < 6){
        sizePassword.innerHTML = ''
    }

    else if(password.value.length >= 6 && password.value.length < 10){
        sizePassword.innerHTML = 'Senha Fraca'
        sizePassword.style.color = '#f00'
    }

    else if(password.value.length > 10 && password.value.length < 14){
        sizePassword.innerHTML = 'Senha Moderada'
        sizePassword.style.color = '#00f'
    }

    else if(password.value.length > 14 && password.value.length <= 20){
        sizePassword.innerHTML = 'Senha forte'
        sizePassword.style.color = '#080'
    }
});

function changeBg () {
    createColorsPickers();
    
    const bgPicker = document.getElementById('bgPicker');
    const linkPicker = document.getElementById('linkPicker');
    const textPicker = document.getElementById('textPicker');

    const bgColor = document.querySelector('body');
    const linkColor = document.querySelectorAll('[id=link]')
    const textColor = document.querySelectorAll('[id=link]');

    bgPicker.addEventListener('change', function() {
        bgColor.style.backgroundColor = bgPicker.value;
    });

    linkPicker.addEventListener('change', function() {
        for(let i = 0; i < linkColor.length; i++){
            linkColor[i].style.backgroundColor = linkPicker.value;
        }
    });

    textPicker.addEventListener('change', function() {
        for(let i = 0; i < textColor.length; i++){
            textColor[i].style.color = textPicker.value;
            textColor[i].style.borderColor = textPicker.value;
        }
    });
}

function createColorsPickers () {
    modalForm.style.display = 'none';

    const container = document.createElement('div');
    const h1 = document.createElement('h1');

    const bgText = document.createElement('p');
    const linkText = document.createElement('p');
    const text = document.createElement('p');

    const colorPickerBg = document.createElement('input');
    const colorPickerLink = document.createElement('input');
    const colorPickerText = document.createElement('input');

    container.classList.add('container');

    h1.textContent = 'Change your colors!'
    bgText.textContent = 'Backgroung color:'
    linkText.textContent = 'Link color:'
    text.textContent = 'Text and border color:'

    colorPickerBg.type = 'color';
    colorPickerBg.id = 'bgPicker'
    colorPickerBg.classList.add('colorPicker');

    colorPickerLink.type = 'color';
    colorPickerLink.id = 'linkPicker'
    colorPickerLink.classList.add('colorPicker');

    colorPickerText.type = 'color';
    colorPickerText.id = 'textPicker'
    colorPickerText.classList.add('colorPicker');

    modal.appendChild(container);
    
    container.appendChild(h1);

    container.appendChild(bgText);
    container.appendChild(colorPickerBg);

    container.appendChild(linkText);
    container.appendChild(colorPickerLink);

    container.appendChild(text);
    container.appendChild(colorPickerText);
}