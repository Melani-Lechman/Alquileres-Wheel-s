 
  // Ruta para añadir un auto
  app.post('/autos', verificarAdmin, (req, res) => {
    const { marca, modelo, anio, precio_por_dia } = req.body;
    db.query('INSERT INTO autos (marca, modelo, anio, precio_por_dia) VALUES (?, ?, ?, ?)', [marca, modelo, anio, precio_por_dia], (err, result) => {
      if (err) throw err;
      res.send('Auto añadido');
    });
  });
  
  // Ruta para borrar un auto
  app.delete('/autos/:id', verificarAdmin, (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM autos WHERE id = ?', [id], (err, result) => {
      if (err) throw err;
      res.send('Auto borrado');
    });
  });
  
  // Ruta para modificar un auto
  app.put('/autos/:id', verificarAdmin, (req, res) => {
    const { id } = req.params;
    const { marca, modelo, anio, precio_por_dia, disponible } = req.body;
    db.query('UPDATE autos SET marca = ?, modelo = ?, anio = ?, precio_por_dia = ?, disponible = ? WHERE id = ?', [marca, modelo, anio, precio_por_dia, disponible, id], (err, result) => {
      if (err) throw err;
      res.send('Auto modificado');
    });
  });
  

// Ruta para obtener autos disponibles
app.get('/autos', (req, res) => {
    db.query('SELECT * FROM autos WHERE disponible = TRUE', (err, results) => {
      if (err) throw err;
      res.json(results);
    });
  });
  
  // Ruta para reservar un auto
  app.post('/reservas', (req, res) => {
    const { auto_id, fecha_inicio, fecha_fin } = req.body;
    const userId = req.user.userId; // Obtener ID de usuario del token
    db.query('INSERT INTO reservas (usuario_id, auto_id, fecha_inicio, fecha_fin) VALUES (?, ?, ?, ?)', [userId, auto_id, fecha_inicio, fecha_fin], (err, result) => {
      if (err) throw err;
      res.send('Reserva realizada');
    });
  });
  
  // Ejemplo de cómo hacer una solicitud AJAX para obtener autos disponibles
fetch('/autos')
.then(response => response.json())
.then(data => {
  // Código para mostrar los autos en la interfaz
});

// Ejemplo de cómo enviar una solicitud para reservar un auto
document.getElementById('reservarBtn').addEventListener('click', function () {
const autoId = document.getElementById('autoId').value;
const fechaInicio = document.getElementById('fechaInicio').value;
const fechaFin = document.getElementById('fechaFin').value;

fetch('/reservas', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + token
  },
  body: JSON.stringify({ auto_id: autoId, fecha_inicio: fechaInicio, fecha_fin: fechaFin })
})
.then(response => response.text())
.then(data => {
  alert(data);
});
});
