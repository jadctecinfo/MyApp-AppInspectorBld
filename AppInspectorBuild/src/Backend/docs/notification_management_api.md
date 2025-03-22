# API de Gestión de Notificaciones

## Descripción
Esta API permite gestionar las notificaciones en la aplicación. Incluye funcionalidades para crear, obtener y eliminar notificaciones para los usuarios.

## Método HTTP
- POST para crear una nueva notificación.
- GET para obtener todas las notificaciones o una notificación específica.
- DELETE para eliminar una notificación.

## Rutas
- `POST /notificaciones`: Crea una nueva notificación.
- `GET /notificaciones`: Obtiene todas las notificaciones.
- `GET /notificaciones/:id`: Obtiene la información de una notificación específica.
- `DELETE /notificaciones/:id`: Elimina una notificación específica.

## Parámetros

### Crear Notificación
- `usuario_id`: ID del usuario al que se dirige la notificación (string, requerido)
- `mensaje`: Mensaje de la notificación (string, requerido)
- `tipo`: Tipo de notificación (string, opcional)
- `fecha`: Fecha de creación de la notificación (string, opcional)

### Obtener Notificación
- `id`: ID de la notificación a obtener (string, requerido)

## Respuesta

### Crear Notificación
- **201 Created**: Notificación creada con éxito.
- **400 Bad Request**: Datos de entrada no válidos.
- **500 Internal Server Error**: Error al crear la notificación.

### Obtener Notificaciones
- **200 OK**: Lista de notificaciones obtenida con éxito.
- **404 Not Found**: No se encontraron notificaciones.

### Obtener Notificación
- **200 OK**: Información de la notificación obtenida con éxito.
- **404 Not Found**: Notificación no encontrada.

### Eliminar Notificación
- **204 No Content**: Notificación eliminada con éxito.
- **404 Not Found**: Notificación no encontrada.

## Ejemplo de uso

### Crear Notificación
```bash
curl -X POST http://localhost:3000/notificaciones -H "Content-Type: application/json" -d '{
  "usuario_id": "1",
  "mensaje": "Tienes un nuevo informe pendiente.",
  "tipo": "información"
}'
```

### Obtener Notificaciones
```bash
curl -X GET http://localhost:3000/notificaciones
```

### Obtener Notificación
```bash
curl -X GET http://localhost:3000/notificaciones/1
```

### Eliminar Notificación
```bash
curl -X DELETE http://localhost:3000/notificaciones/1
