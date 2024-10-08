CREATE DATABASE CarRentalDB;

USE CarRentalDB;

-- Tabla de usuarios
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    password VARCHAR(100),
    tipo ENUM('admin', 'cliente') NOT NULL
);

-- Tabla de autos
CREATE TABLE autos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    marca VARCHAR(50),
    modelo VARCHAR(50),
    año INT,
    precio_por_dia DECIMAL(10, 2),
    disponibilidad BOOLEAN DEFAULT TRUE
);

-- Tabla de reservas
CREATE TABLE reservas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT,
    id_auto INT,
    fecha_reserva DATE,
    fecha_devolucion DATE,
    total DECIMAL(10, 2),
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id),
    FOREIGN KEY (id_auto) REFERENCES autos(id)
);
