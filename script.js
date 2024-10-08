document.getElementById("boton").addEventListener("click", function() {
    const marca = document.getElementById("marca").value;
    const modelo = document.getElementById("modelo").value;
    const año = document.getElementById("año").value;
    const color = document.getElementById("color").value;
    const tipo = document.getElementById("tipo").value;
    const precioPorDia = document.getElementById("precio_por_dia").value;

    if (tipo === "") {
        alert("Por favor selecciona un tipo de auto.");
        return;
    }

    const auto = {
        marca,
        modelo,
        año,
        color,
        precioPorDia
    };

    // Guardar en el archivo HTML correspondiente
    const tipoArchivo = `${tipo}.html`;

    // Simulación de guardar datos en el archivo HTML
    // Aquí se debería implementar un método para almacenar datos en el backend
    fetch(tipoArchivo, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(auto)
    })
    .then(response => {
        if (response.ok) {
            alert("Auto agregado correctamente.");
            // Limpiar el formulario
            document.getElementById("marca").value = "";
            document.getElementById("modelo").value = "";
            document.getElementById("año").value = "";
            document.getElementById("color").value = "";
            document.getElementById("tipo").value = "";
            document.getElementById("precio_por_dia").value = "";
        } else {
            alert("Error al agregar el auto.");
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Error en la comunicación con el servidor.");
    });
});
