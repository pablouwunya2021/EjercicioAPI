-- Crear la base de datos (esto se hace manualmente o con un script externo)
-- CREATE DATABASE incident_tracker;

-- Conectar a la base de datos (esto se hace en pgAdmin o psql antes de ejecutar el resto)
-- \c incident_tracker

-- Crear la tabla incidents
CREATE TABLE incidents (
    id SERIAL PRIMARY KEY,
    reporter VARCHAR(255) NOT NULL,
    description TEXT NOT NULL CHECK (LENGTH(description) >= 10),
    status VARCHAR(50) NOT NULL CHECK (status IN ('pendiente', 'en proceso', 'resuelto')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);