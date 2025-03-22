import connection from '../db.js';

export const createContract = async (contractData) => {
    const { Descripcion, Estado, Plantilla } = contractData;
    const query = 'INSERT INTO contratos (Descripcion, Estado, Plantilla) VALUES (?, ?, ?)';
    return new Promise((resolve, reject) => {
        connection.query(query, [Descripcion, Estado, Plantilla], (error) => {
            if (error) return reject(error);
            resolve();
        });
    });
};

export const getContracts = async () => {
    const query = 'SELECT * FROM contratos';
    return new Promise((resolve, reject) => {
        connection.query(query, (error, results) => {
            if (error) return reject(error);
            resolve(results);
        });
    });
};

export const getContractById = async (id) => {
    const query = 'SELECT * FROM contratos WHERE Id = ?';
    return new Promise((resolve, reject) => {
        connection.query(query, [id], (error, results) => {
            if (error) return reject(error);
            resolve(results[0] || null);
        });
    });
};

export const updateContract = async (id, contractData) => {
    const { Descripcion, Estado, Plantilla } = contractData;
    const query = 'UPDATE contratos SET Descripcion = ?, Estado = ?, Plantilla = ? WHERE Id = ?';
    return new Promise((resolve, reject) => {
        connection.query(query, [Descripcion, Estado, Plantilla, id], (error) => {
            if (error) return reject(error);
            resolve();
        });
    });
};

export const deleteContract = async (id) => {
    const query = 'DELETE FROM contratos WHERE Id = ?';
    return new Promise((resolve, reject) => {
        connection.query(query, [id], (error) => {
            if (error) return reject(error);
            resolve();
        });
    });
};
