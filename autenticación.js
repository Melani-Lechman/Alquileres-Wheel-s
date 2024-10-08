// Evento para el botón de Login
document.getElementById('signIn').addEventListener('click', function(event) {
    event.preventDefault(); // Evitar comportamiento por defecto

    // Obtener valores de los campos
    const username = document.getElementById('name').value;
    const password = document.getElementById('password').value;

    // Lógica de autenticación simulada
    if (username === 'admin' && password === 'admin') {
        window.location.href = 'admin.html';  // Redirigir al panel de administrador
    } else if (username !== 'admin' && password !== 'admin') {
        window.location.href = 'cliente.html';  // Redirigir al panel de cliente
    } else {
        alert('Credenciales incorrectas');  // Mostrar mensaje de error
    }
});
