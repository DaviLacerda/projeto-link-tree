// Modal script
const modal = document.getElementById('modalContainer');
const modalForm = document.querySelector('form');
const modalBtn = document.getElementById('modalBtn');
const closeModal = document.getElementById('closeModal');
const title = document.getElementById('title');
const togglePassword = document.getElementById('togglePassword');

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
    transformLabel(password, 'password-label');
    dynamicSizePassword();
});

email.addEventListener('keyup', () => {
    transformLabel(email, 'email-label')
})

togglePassword.addEventListener('click', () => {
    togglePassword.classList.toggle('fa-eye-slash');
    if(password.type === 'password'){
        password.type = 'text';
    }
    else{
        password.type = 'password'
    }
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
    
    const filePicker = document.getElementById('filePicker');
    const bgPicker = document.getElementById('bgPicker');
    const linkPicker = document.getElementById('linkPicker');
    const textPicker = document.getElementById('textPicker');
    
    const image = document.getElementById('main-image')
    const bgColor = document.querySelector('body');
    const linkColor = document.querySelectorAll('[class=link]')
    const textColor = document.querySelectorAll('[class=link]');

    filePicker.addEventListener('change', () => {
        changeMainImage(image);
    });

    bgPicker.addEventListener('input', () => {
        bgColor.style.backgroundColor = bgPicker.value;
    });

    linkPicker.addEventListener('input', () => {
        for(let i = 0; i < linkColor.length; i++){
            linkColor[i].style.backgroundColor = linkPicker.value;
        }
        modalBtn.style.backgroundColor = linkPicker.value;
    });

    textPicker.addEventListener('input', () => {
        for(let i = 0; i < textColor.length; i++){
            textColor[i].style.color = textPicker.value;
            textColor[i].style.borderColor = textPicker.value;
        }
        title.style.color = textPicker.value;
        modalBtn.style.color = textPicker.value;
        modalBtn.style.borderColor = textPicker.value;
    });
}

function createColorModal() {
    modalForm.style.display = 'none';

    // create the HTML tags
    const container = document.createElement('div');

    const h1 = createTagsText('h1', 'Change the website!');
    const span = createTagsText('span', '&times;')
    const imageText = createTagsText('p', 'Change the image:');
    const bgText = createTagsText('p', 'Background color:')
    const linkText = createTagsText('p', 'Button color:')
    const text = createTagsText('p', 'Text and border color:')

    // add the id and class tags (for CSS)
    container.classList.add('container');

    span.id = 'closeModal';
    span.onclick = function() {
        modal.style.display = 'none'
    }

    //file picker
    const changeImage = createInput('file', 'filePicker', 'filePicker');
    changeImage.accept = 'image/png, image/jpeg'

    // colors pickers
    const colorPickerBg = createInput('color', 'bgPicker', 'colorPicker');
    const colorPickerLink = createInput('color', 'linkPicker', 'colorPicker');
    const colorPickerText = createInput('color', 'textPicker', 'colorPicker');

    // append all these tags to the HTML (modal)
    modal.appendChild(container);

    appendElementsToHTML(container, [span, h1, imageText, changeImage, bgText, colorPickerBg, linkText, colorPickerLink, text, colorPickerText]);
}

//create ColorPicker -> tag(HTML Tag), type(type of input), id(HTML id), classList(to attribute a div.class)
function createInput(type,id,classList) {
    const colorPicker = document.createElement('input');
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

function changeMainImage(image) {
    const [fileInput] = filePicker.files;
    if(fileInput){
        let url = URL.createObjectURL(fileInput);
        var img = new Image;
      
        img.onload = function() {
            if(img.width <= 512 && img.height <= 512){
                image.src = url;
            }
            else{
                alert('Only images smaller than 512x512 are accepted!')
            }
        };
        img.src = url;
    }
}

function transformLabel(input ,param) {
    let label = document.getElementById(param);
    if(input.value !== ''){
        label.style.transform = 'translateY(-24px)';
    }
    else{
        label.style.transform = 'translateY(0px)';
    }
}