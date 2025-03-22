# API de Gestión de Sesiones

## Descripción
Esta API permite gestionar las sesiones de usuario, permitiendo a los usuarios ver y cerrar sesiones activas.

## Método HTTP
- GET para obtener las sesiones activas.
- DELETE para cerrar una sesión.

## Rutas
- `GET /sesiones`: Obtiene todas las sesiones activas.
- `DELETE /sesiones/:id`: Cierra una sesión específica.

## Parámetros

### Cerrar Sesión
- `id`: ID de la sesión a cerrar (string, requerido)

## Respuesta

### Obtener Sesiones
- **200 OK**: Lista de sesiones obtenida con éxito.

### Cerrar Sesión
- **204 No Content**: Sesión cerrada con éxito.
- **404 Not Found**: Sesión no encontrada.

## Ejemplo de uso

### Obtener Sesiones
```bash
curl -X GET http://localhost:3000/sesiones
```

### Cerrar Sesión
```bash
curl -X DELETE http://localhost:3000/sesiones/1
