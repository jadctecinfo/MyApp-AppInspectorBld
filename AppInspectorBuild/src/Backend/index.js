import express from 'express';
import connection from './db.js'; // Importar la conexión a la base de datos
import routes from './routes.js'; // Importar las rutas
import registerRoutes from './routes/register.js'; // Importar la nueva ruta de registro

const app = express();
const PORT = 5174; // Cambiar el puerto a 5174

app.use(express.json());

// Usar las rutas definidas
app.use('/', routes);
app.use('/', registerRoutes); // Usar la nueva ruta de registro

// Rutas básicas
app.get('/', (req, res) => {
    res.send('¡Bienvenido al backend!');
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
