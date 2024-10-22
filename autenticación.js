document.addEventListener('DOMContentLoaded', function() {
    const registerButton = document.getElementById('signUp');
    const loginButton = document.getElementById('signIn');
    const emailInput = document.getElementById('emailInput');
    const title = document.getElementById('title');

    // Alternar entre Login y Registro
    loginButton.onclick = function() {
        emailInput.style.display = "none";  // Ocultar campo de email en login
        title.innerHTML = "Login";  // Cambiar título a "Login"
    };

    registerButton.onclick = function() {
        emailInput.style.display = "block";  // Mostrar campo de email en registro
        title.innerHTML = "Registro";  // Cambiar título a "Registro"
    };

    // Función para registrar usuarios
    registerButton.addEventListener('click', function(event) {
        event.preventDefault();  // Evitar recargar la página
        const email = document.getElementById('email').value;
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (!email || !username || !password) {
            alert('Por favor, completa todos los campos.');
            return;
        }

        let users = JSON.parse(localStorage.getItem('users')) || [];

        const userExists = users.some(user => user.username === username || user.email === email);
        if (userExists) {
            alert('El nombre de usuario o correo ya existe.');
            return;
        }

        users.push({ email, username, password });
        localStorage.setItem('users', JSON.stringify(users));

        alert('Usuario registrado con éxito.');
        document.getElementById('registerForm').reset();  // Limpiar el formulario después de registrar
    });

    // Función para iniciar sesión
    loginButton.addEventListener('click', function(event) {
        event.preventDefault();  // Evitar recargar la página
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (!username || !password) {
            alert('Por favor, completa todos los campos.');
            return;
        }

        // Verificar si es AdminMelani
        if (username === 'AdminMelani' && password === '43644141') {
            alert('Bienvenido AdminMelani.');
            window.location.href = "admin.html";  // Redirigir a la página de admin
            return;
        }

        const users = JSON.parse(localStorage.getItem('users')) || [];

        const validUser = users.find(user => user.username === username && user.password === password);
        if (validUser) {
            alert('Inicio de sesión exitoso.');
            window.location.href = "cliente.html";  // Redirigir a otra página
        } else {
            alert('Nombre de usuario o contraseña incorrectos.');
        }
    });
});
