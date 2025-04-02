const express = require('express');
const router = express.Router();
const { Pool } = require('pg');

// Configurar el pool de conexiones
const pool = new Pool({
    host: process.env.PGHOST,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    port: process.env.PGPORT
});

// Crear nuevo incidente
router.post('/', async (req, res) => {
    try {
        const { reporter, description, status = 'pendiente' } = req.body;
        const result = await pool.query(
            'INSERT INTO incidents (reporter, description, status) VALUES ($1, $2, $3) RETURNING *',
            [reporter, description, status]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Obtener todos los incidentes
router.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM incidents');
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Obtener incidente específico
router.get('/:id', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM incidents WHERE id = $1', [req.params.id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'Incidente no encontrado' });
        }
        res.json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Actualizar estado del incidente
router.put('/:id', async (req, res) => {
    try {
        const { status } = req.body;
        if (!status) {
            throw new Error('Debe proporcionar un estado');
        }
        const result = await pool.query(
            'UPDATE incidents SET status = $1 WHERE id = $2 RETURNING *',
            [status, req.params.id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'Incidente no encontrado' });
        }
        res.json(result.rows[0]);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Eliminar incidente
router.delete('/:id', async (req, res) => {
    try {
        const result = await pool.query('DELETE FROM incidents WHERE id = $1 RETURNING *', [req.params.id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'Incidente no encontrado' });
        }
        res.json({ message: 'Incidente eliminado' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;