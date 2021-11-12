var button = document.getElementsByClassName('login-button')[0];

button.addEventListener("click", function(e){

    e.preventDefault();

    const userInput = document.getElementById('username')
    const userPassword = document.getElementById('password')

    const username = userInput.value;
    const password = userPassword.value;

    console.log(username,password);
})

//rodando o script duas vezes! ?wtf