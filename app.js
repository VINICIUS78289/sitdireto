app.js
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Verificação de usuário e senha
    if (username === 'usuario1' && password === 'senha1') {
        window.location.href = 'success.html';
    } else {
        alert('Usuário ou senha incorretos.');
    }
});
