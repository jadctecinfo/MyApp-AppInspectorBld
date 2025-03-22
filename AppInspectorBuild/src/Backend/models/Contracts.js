import connection from '../db.js';

const createContractsTable = () => {
    const query = `
        CREATE TABLE IF NOT EXISTS contratos (
            Id INT AUTO_INCREMENT PRIMARY KEY,
            Descripcion VARCHAR(255) NOT NULL,
            Estado VARCHAR(50) NOT NULL,
            Fecha_Creacion DATETIME DEFAULT CURRENT_TIMESTAMP,
            Plantilla VARCHAR(255) NOT NULL
        )
    `;
    connection.query(query, (error) => {
        if (error) {
            console.error('Error al crear la tabla contratos:', error);
        } else {
            console.log('Tabla contratos creada con éxito.');
        }
    });
};

export { createContractsTable };
