import express from 'express';
import bcrypt from 'bcrypt';
import connection from './db.js'; // Importar la conexión a la base de datos
import { createContract, getContracts, getContractById, updateContract, deleteContract } from './controllers/ContractsController.js';

const router = express.Router();

// Ruta para registrar un nuevo usuario
router.post('/register', async (req, res) => {
    const { username, password, nombre, apellido, edad, direccion, telefono, email, razon_social, nit } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10); // Hash de la contraseña

    const query = 'INSERT INTO users (username, password, nombre, apellido, edad, direccion, telefono, email, razon_social, nit) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    connection.query(query, [username, hashedPassword, nombre, apellido, edad, direccion, telefono, email, razon_social, nit], (error) => {
        if (error) {
            return res.status(500).send('Error al registrar el usuario: ' + error.message);
        }
        res.status(201).send('Usuario registrado con éxito');
    });
});

// Ruta para iniciar sesión
router.post('/login', (req, res) => {
    const { username, password } = req.body;

    const query = 'SELECT * FROM users WHERE username = ?';
    connection.query(query, [username], async (error, results) => {
        if (error) {
            return res.status(500).send('Error al iniciar sesión: ' + error.message);
        }
        if (results.length === 0) {
            return res.status(401).send('Credenciales incorrectas');
        }

        const user = results[0];
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(401).send('Credenciales incorrectas');
        }

        // Aquí se puede establecer una sesión o token
        res.status(200).send('Inicio de sesión exitoso');
    });
});

// Ruta para obtener todos los usuarios
router.get('/users', (req, res) => {
    const query = 'SELECT * FROM users';
    connection.query(query, (error, results) => {
        if (error) {
            return res.status(500).send('Error al obtener usuarios: ' + error.message);
        }
        res.status(200).json(results);
    });
});

// Rutas para contratos
router.post('/contracts', createContract);
router.get('/contracts', getContracts);
router.get('/contracts/:id', getContractById);
router.put('/contracts/:id', updateContract);
router.delete('/contracts/:id', deleteContract);

export default router;
