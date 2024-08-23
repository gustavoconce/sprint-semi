function logar() {

    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    console.log(login);
    console.log(senha);
    
    
    if (login === 'admin' && senha === 'admin'){
        location.href = './home/home.html';
    }

    else {
        alert('Login ou senha inválidos!');
    }

}
