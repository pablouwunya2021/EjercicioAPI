require('dotenv').config();
const express = require('express');
const incidentRoutes = require('./routes/incidents');

const app = express();

app.use(express.json());
app.use('/incidents', incidentRoutes);

app.use((req, res) => {
    res.status(404).json({ message: 'Ruta no encontrada' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});