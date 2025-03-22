# API de Integración con Terceros

## Descripción
Esta API permite la integración con servicios externos, facilitando la comunicación y el intercambio de datos entre la aplicación y otros sistemas.

## Método HTTP
- POST para enviar datos a un servicio externo.
- GET para recibir datos de un servicio externo.

## Rutas
- `POST /integracion`: Envía datos a un servicio externo.
- `GET /integracion`: Obtiene datos de un servicio externo.

## Parámetros

### Enviar Datos
- `servicio`: Nombre del servicio externo (string, requerido)
- `datos`: Datos a enviar (object, requerido)

### Obtener Datos
- `servicio`: Nombre del servicio externo (string, requerido)

## Respuesta

### Enviar Datos
- **201 Created**: Datos enviados con éxito.
- **400 Bad Request**: Datos de entrada no válidos.
- **500 Internal Server Error**: Error al enviar los datos.

### Obtener Datos
- **200 OK**: Datos obtenidos con éxito.
- **404 Not Found**: Servicio no encontrado.

## Ejemplo de uso

### Enviar Datos
```bash
curl -X POST http://localhost:3000/integracion -H "Content-Type: application/json" -d '{
  "servicio": "servicio_externo",
  "datos": {
    "clave": "valor"
  }
}'
```

### Obtener Datos
```bash
curl -X GET http://localhost:3000/integracion?servicio=servicio_externo
