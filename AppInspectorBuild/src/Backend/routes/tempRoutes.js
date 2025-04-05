
import express from 'express';
import bcrypt from 'bcrypt';
import connection from './db.js'; // Importar la conexión a la base de datos
import { createContract, getContracts, getContractById, updateContract, deleteContract } from './controllers/ContractsController.js';
import roleRoutes from './routes/roleRoutes.js'; // Importar las rutas de roles

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

// Rutas para contratos
router.post('/contracts', createContract);
router.get('/contracts', getContracts);
router.get('/contracts/:id', getContractById);
router.put('/contracts/:id', updateContract);
router.delete('/contracts/:id', deleteContract);

// Rutas para roles
router.use('/', roleRoutes); // Usar las rutas de roles

export default router;
