import express from 'express';
import connection from '../db.js';

const router = express.Router();

router.post('/register', (req, res) => {
    const { razon_social, nit, direccion, nombre, apellido, telefono, email, username, password } = req.body;

    const query = 'INSERT INTO users (razon_social, nit, direccion, nombre, apellido, telefono, email, username, password) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
    const values = [razon_social, nit, direccion, nombre, apellido, telefono, email, username, password];

    connection.query(query, values, (error, results) => {
        if (error) {
            console.error('Error al insertar datos: ', error);
            return res.status(500).json({ message: 'Error al registrar los datos' });
        }
        res.status(201).json({ message: 'Registro exitoso' });
    });
});

export default router;
