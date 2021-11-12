var button = document.getElementById('login-btn');

button.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation()

    const userEmail = document.getElementById('email')
    const userPassword = document.getElementById('password')

    const email = userEmail.value;
    const password = userPassword.value;

    verifyEmail(email);
    verifyPassword(password);
})

function verifyEmail(email) {
    let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,3})$/;

    if(!filter.test(email)){
        alert('Por favor, digite um email válido!\n');
        return false;
    }
}

function verifyPassword (password) {
    let filter = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,20}$/;

    if(!filter.test(password)){
        alert('Por favor, digite uma senha válida!\n');
        return false;
    }
}