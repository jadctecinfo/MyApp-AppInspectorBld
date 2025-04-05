import connection from '../db.js';

// Crear un nuevo rol
export const createRole = (req, res) => {
    const { nombre } = req.body;
    const query = 'INSERT INTO roles (nombre) VALUES (?)';
    
    connection.query(query, [nombre], (error) => {
        if (error) {
            return res.status(500).send('Error al crear el rol: ' + error.message);
        }
        res.status(201).send('Rol creado con éxito');
    });
};

// Obtener todos los roles
export const getRoles = (req, res) => {
    const query = 'SELECT * FROM roles';
    
    connection.query(query, (error, results) => {
        if (error) {
            return res.status(500).send('Error al obtener roles: ' + error.message);
        }
        res.status(200).json(results);
    });
};

// Obtener un rol por ID
export const getRoleById = (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM roles WHERE id = ?';
    
    connection.query(query, [id], (error, results) => {
        if (error) {
            return res.status(500).send('Error al obtener el rol: ' + error.message);
        }
        if (results.length === 0) {
            return res.status(404).send('Rol no encontrado');
        }
        res.status(200).json(results[0]);
    });
};

// Actualizar un rol por ID
export const updateRole = (req, res) => {
    const { id } = req.params;
    const { nombre } = req.body;
    const query = 'UPDATE roles SET nombre = ? WHERE id = ?';
    
    connection.query(query, [nombre, id], (error) => {
        if (error) {
            return res.status(500).send('Error al actualizar el rol: ' + error.message);
        }
        res.status(200).send('Rol actualizado con éxito');
    });
};

// Eliminar un rol por ID
export const deleteRole = (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM roles WHERE id = ?';
    
    connection.query(query, [id], (error) => {
        if (error) {
            return res.status(500).send('Error al eliminar el rol: ' + error.message);
        }
        res.status(200).send('Rol eliminado con éxito');
    });
};
