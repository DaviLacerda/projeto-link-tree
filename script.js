// Modal script
const modal = document.getElementById('modalContainer');
const modalForm = document.querySelector('form');
const modalBtn = document.getElementById('formBtn');
const closeModal = document.getElementById('closeModal');

// Login validation script
const loginButton = document.getElementById('loginButton');

// Events
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

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    formValidation();
});

password.addEventListener('keyup',function () {
    dynamicSizePassword();
});

// Functions

function formValidation() {
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const alert = document.getElementById('alert');
    
    if(email.value.length === 0 || password.value.length === 0){
        alert.innerHTML = 'Preencha os campos vazios!'

        if(email.value.length === 0 && password.value.length === 0){
            email.style.borderColor = '#f00'
            password.style.borderColor = '#f00'
        }
    
        else if(email.value.length === 0){
            email.style.borderColor = '#f00'
            password.style.borderColor = '#000'
        }
    
        else{
            password.style.borderColor = '#f00'
            email.style.borderColor = '#000'
        }
    }

    else{
        if(password.value.length < 6){
            alert.innerHTML = 'Tamanho da senha: 6-20 caracteres!'
            password.style.borderColor = '#f00'
        }
    
        else if(verifyEmail(email.value) === false){
            alert.innerHTML = 'Email inválido!'
            email.style.borderColor = '#f00'
            password.style.borderColor = '#000'
        }
    
        else if(verifyPassword(password.value) === false){
            alert.innerHTML = 'Senha inválida!'
            password.style.borderColor = '#f00'
            email.style.borderColor = '#000'
        }
    
        else{
            alert.innerHTML = ''
            document.getElementById('sizePassword').innerHTML = ''
            changeElements();
        }
    }
}


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



function dynamicSizePassword() {
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
}

function changeElements () {
    createColorModal();
    
    const bgPicker = document.getElementById('bgPicker');
    const linkPicker = document.getElementById('linkPicker');
    const textPicker = document.getElementById('textPicker');

    const bgColor = document.querySelector('body');
    const linkColor = document.querySelectorAll('[id=link]')
    const textColor = document.querySelectorAll('[id=link]');

    bgPicker.addEventListener('input', function() {
        bgColor.style.backgroundColor = bgPicker.value;
    });

    linkPicker.addEventListener('input', function() {
        for(let i = 0; i < linkColor.length; i++){
            linkColor[i].style.backgroundColor = linkPicker.value;
        }
    });

    textPicker.addEventListener('input', function() {
        for(let i = 0; i < textColor.length; i++){
            textColor[i].style.color = textPicker.value;
            textColor[i].style.borderColor = textPicker.value;
        }
    });
}

function createColorModal() {
    modalForm.style.display = 'none';

    // create the HTML tags
    const container = document.createElement('div');

    const h1 = createTagsText('h1', 'Change your colors!');
    const span = createTagsText('span', '&times;')
    const bgText = createTagsText('p', 'Background color:')
    const linkText = createTagsText('p', 'Link color:')
    const text = createTagsText('p', 'Text and border color:')

    // add the id and class tags (for CSS)
    container.classList.add('container');

    span.id = 'closeModal';
    span.onclick = function() {
        modal.style.display = 'none'
    }

    const colorPickerBg = createColorPicker('input', 'color', 'bgPicker', 'colorPicker');
    const colorPickerLink = createColorPicker('input', 'color', 'linkPicker', 'colorPicker');
    const colorPickerText = createColorPicker('input', 'color', 'textPicker', 'colorPicker');

    // append all these tags to the HTML (modal)
    modal.appendChild(container);

    appendElementsToHTML(container, [span, h1, bgText, colorPickerBg, linkText, colorPickerLink, text, colorPickerText]);
}

//create ColorPicker -> tag(HTML Tag), type(type of input), id(HTML id), classList(to attribute a div.class)
function createColorPicker(tag, type,id,classList) {
    const colorPicker = document.createElement(tag);
    colorPicker.type = type;
    colorPicker.id = id;
    colorPicker.classList.add(classList);

    return colorPicker;
}

//create tags where need a HTML content
function createTagsText (tag, text) {
    const content = document.createElement(tag);
    content.innerHTML = text;

    return content;
}

//append 'b' elements to 'a' in HTML
function appendElementsToHTML(a, b) {
    for (let i = 0; i < b.length; i++){
        a.appendChild(b[i]);
    }
}