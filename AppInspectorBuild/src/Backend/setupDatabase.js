import express from 'express';
import cors from 'cors'; // Importar cors para permitir solicitudes desde otros orígenes

const app = express();

// Configuración de CORS
app.use(cors());

export default app;
