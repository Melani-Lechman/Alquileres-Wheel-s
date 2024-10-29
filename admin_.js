const autos = JSON.parse(localStorage.getItem('autos')) || [];
let autoSeleccionado = null;

// Cargar autos en la tabla
function cargarAutos() {
    const autosContainer = document.getElementById('autosContainer');
    autosContainer.innerHTML = '';

    autos.forEach((auto, index) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${auto.marca}</td>
            <td>${auto.modelo}</td>
            <td>${auto.color}</td>
            <td>$${auto.precioPorDia}</td>
            <td>${auto.categoria}</td>
            <td>${auto.disponibilidad}</td>
            <td>
                <button onclick="seleccionarAuto(${index})">Seleccionar</button>
            </td>
        `;

        autosContainer.appendChild(row);
    });
}

// Seleccionar auto para modificar o eliminar
function seleccionarAuto(index) {
    autoSeleccionado = index;
    const auto = autos[index];

    document.getElementById('marca').value = auto.marca;
    document.getElementById('modelo').value = auto.modelo;
    document.getElementById('color').value = auto.color;
    document.getElementById('precioPorDia').value = auto.precioPorDia;
    document.getElementById('categoria').value = auto.categoria;
    document.getElementById('disponibilidad').value = auto.disponibilidad;
}

// Función para limpiar el formulario
function limpiarFormulario() {
    document.getElementById('marca').value = '';
    document.getElementById('modelo').value = '';
    document.getElementById('color').value = '';
    document.getElementById('precioPorDia').value = '';
    document.getElementById('categoria').value = '';
    document.getElementById('disponibilidad').value = '';
}

// Agregar auto
document.getElementById('agregarAuto').onclick = function () {
    const auto = {
        id: Date.now(),
        marca: document.getElementById('marca').value,
        modelo: document.getElementById('modelo').value,
        color: document.getElementById('color').value,
        precioPorDia: parseFloat(document.getElementById('precioPorDia').value),
        categoria: document.getElementById('categoria').value,
        disponibilidad: document.getElementById('disponibilidad').value,
    };
    autos.push(auto);
    localStorage.setItem('autos', JSON.stringify(autos));
    cargarAutos();
    limpiarFormulario();  // Limpia el formulario después de agregar
};

// Modificar auto
document.getElementById('modificarAuto').onclick = function () {
    if (autoSeleccionado !== null) {
        autos[autoSeleccionado] = {
            ...autos[autoSeleccionado],
            marca: document.getElementById('marca').value,
            modelo: document.getElementById('modelo').value,
            color: document.getElementById('color').value,
            precioPorDia: parseFloat(document.getElementById('precioPorDia').value),
            categoria: document.getElementById('categoria').value,
            disponibilidad: document.getElementById('disponibilidad').value,
        };
        localStorage.setItem('autos', JSON.stringify(autos));
        cargarAutos();
        limpiarFormulario();  // Limpia el formulario después de modificar
    }
};

// Eliminar auto
document.getElementById('eliminarAuto').onclick = function () {
    if (autoSeleccionado !== null) {
        autos.splice(autoSeleccionado, 1);
        localStorage.setItem('autos', JSON.stringify(autos));
        cargarAutos();
        limpiarFormulario();  // Limpia el formulario después de eliminar
        autoSeleccionado = null;
    }
};

// Inicializar la tabla con los autos guardados
cargarAutos();
