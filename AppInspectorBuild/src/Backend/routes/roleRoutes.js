import express from 'express';
import { createRole, getRoles, getRoleById, updateRole, deleteRole } from '../controllers/RolesController.js';

const router = express.Router();

// Ruta para crear un nuevo rol
router.post('/roles', createRole);

// Ruta para obtener todos los roles
router.get('/roles', getRoles);

// Ruta para obtener un rol por ID
router.get('/roles/:id', getRoleById);

// Ruta para actualizar un rol por ID
router.put('/roles/:id', updateRole);

// Ruta para eliminar un rol por ID
router.delete('/roles/:id', deleteRole);

export default router;
