# API de Auditoría Mejorada

## Descripción
Esta API permite registrar y obtener información sobre las acciones realizadas por los usuarios en la aplicación, así como cambios en la configuración y en los datos críticos. Es esencial para mantener un registro de las actividades y mejorar la seguridad.

## Método HTTP
- POST para registrar una nueva acción de auditoría.
- GET para obtener el registro de auditoría.

## Rutas
- `POST /auditoria`: Registra una nueva acción de auditoría.
- `GET /auditoria`: Obtiene el registro de auditoría.

## Parámetros

### Registrar Auditoría
- `usuario_id`: ID del usuario que realiza la acción (string, requerido)
- `accion`: Descripción de la acción realizada (string, requerido)
- `fecha`: Fecha y hora de la acción (string, requerido)
- `cambio`: Descripción del cambio realizado (string, opcional)

## Respuesta

### Registrar Auditoría
- **201 Created**: Acción de auditoría registrada con éxito.
- **400 Bad Request**: Datos de entrada no válidos.
- **500 Internal Server Error**: Error al registrar la auditoría.

### Obtener Auditoría
- **200 OK**: Registro de auditoría obtenido con éxito.

## Ejemplo de uso

### Registrar Auditoría
```bash
curl -X POST http://localhost:3000/auditoria -H "Content-Type: application/json" -d '{
  "usuario_id": "1",
  "accion": "Configuración actualizada",
  "fecha": "2023-10-01T12:00:00Z",
  "cambio": "Se actualizó la configuración del servidor de correo"
}'
```

### Obtener Auditoría
```bash
curl -X GET http://localhost:3000/auditoria
