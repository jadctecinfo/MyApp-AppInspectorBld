import mysql from 'mysql2';
import winston from 'winston'; // Importar winston para el logging

// Configuración del logger
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'error.log', level: 'error' })
    ]
});

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'appinspectorbuild',
    port: 3306
});

connection.connect((err) => {
    if (err) {
        logger.error('Error conectando a la base de datos: ' + err.stack + ' - Verifica que la contraseña y el servidor MySQL estén funcionando.');
        return;
    }
    logger.info('Conectado a la base de datos como ID ' + connection.threadId);
});

export default connection;
