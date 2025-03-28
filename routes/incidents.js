const express = require('express');
const router = express.Router();

// Almacenamiento en memoria
let incidents = [];
let idCounter = 1;

// Validaciones
const validateIncident = (incident) => {
    if (!incident.reporter) {
        throw new Error('El nombre del reportero es obligatorio');
    }
    if (!incident.description || incident.description.length < 10) {
        throw new Error('La descripción debe tener al menos 10 caracteres');
    }
    if (incident.status && !['pendiente', 'en proceso', 'resuelto'].includes(incident.status)) {
        throw new Error('Estado inválido');
    }
};

// Crear nuevo incidente
router.post('/', (req, res) => {
    try {
        const incident = {
            id: idCounter++,
            reporter: req.body.reporter,
            description: req.body.description,
            status: req.body.status || 'pendiente',
            created_at: new Date()
        };
        
        validateIncident(incident);
        incidents.push(incident);
        res.status(201).json(incident);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Obtener todos los incidentes
router.get('/', (req, res) => {
    res.json(incidents);
});

// Obtener incidente específico
router.get('/:id', (req, res) => {
    const incident = incidents.find(i => i.id === parseInt(req.params.id));
    if (!incident) {
        return res.status(404).json({ message: 'Incidente no encontrado' });
    }
    res.json(incident);
});

// Actualizar estado del incidente
router.put('/:id', (req, res) => {
    try {
        const incident = incidents.find(i => i.id === parseInt(req.params.id));
        if (!incident) {
            return res.status(404).json({ message: 'Incidente no encontrado' });
        }

        // Solo permitir actualizar el status
        if (!req.body.status) {
            throw new Error('Debe proporcionar un estado');
        }
        incident.status = req.body.status;
        validateIncident(incident);
        res.json(incident);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Eliminar incidente
router.delete('/:id', (req, res) => {
    const incidentIndex = incidents.findIndex(i => i.id === parseInt(req.params.id));
    if (incidentIndex === -1) {
        return res.status(404).json({ message: 'Incidente no encontrado' });
    }
    
    incidents.splice(incidentIndex, 1);
    res.json({ message: 'Incidente eliminado' });
});

module.exports = router;