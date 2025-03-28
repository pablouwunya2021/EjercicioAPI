require('dotenv').config();
const express = require('express');
const incidentRoutes = require('./routes/incidents');

const app = express();

// Middleware
app.use(express.json());

// Rutas
app.use('/incidents', incidentRoutes);

// Manejo de errores 404
app.use((req, res) => {
    res.status(404).json({ message: 'Ruta no encontrada' });
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});