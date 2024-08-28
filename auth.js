
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Lógica de autenticación simulada
  if (username === 'admin' && password === 'admin') {
      window.location.href = 'admin.html';
  } else if (username === 'cliente' && password === 'cliente') {
    window.location.href = "index.html";
  } else {
      alert('Credenciales incorrectas');
  }
});

