const tipo = document.getElementById('tipo');
// Obtener el contenedor donde se mostrarán los autos
const autosList = document.getElementById('autos-list');

// Obtener los autos del almacenamiento local
const autos = JSON.parse(localStorage.getItem('autos')) || [];

// Verificar si hay autos guardados
if (autos.length === 0) {
    autosList.innerHTML = '<p>No hay autos disponibles.</p>';
} else {
    // Crear un listado de autos
    autos.forEach(auto => {
        const autoElement = document.createElement('div');
        autoElement.innerHTML = `
            <h3>${auto.marca} ${auto.modelo}</h3>
            <p>Año: ${auto.año} ${auto.color}</p>
            <p>Precio por día: $${auto.precioPorDia}</p>
            <hr>
        `;
        autosList.appendChild(autoElement);
    });
}

