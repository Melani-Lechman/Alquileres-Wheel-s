CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  password VARCHAR(255) NOT NULL,
  tipo ENUM('admin', 'cliente') NOT NULL
);
CREATE TABLE autos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  marca VARCHAR(50) NOT NULL,
  modelo VARCHAR(50) NOT NULL,
  anio INT NOT NULL,
  precio_por_dia DECIMAL(10, 2) NOT NULL,
  disponible BOOLEAN DEFAULT TRUE
);
CREATE TABLE reservas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  usuario_id INT,
  auto_id INT,
  fecha_inicio DATE,
  fecha_fin DATE,
  FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
  FOREIGN KEY (auto_id) REFERENCES autos(id)
);
