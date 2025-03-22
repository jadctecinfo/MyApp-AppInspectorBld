# API de Reportes Avanzados

## Descripción
Esta API permite generar reportes personalizados basados en los datos de la aplicación, incluyendo filtros y opciones de exportación.

## Método HTTP
- POST para generar un nuevo reporte.
- GET para obtener un reporte específico.

## Rutas
- `POST /reportes`: Genera un nuevo reporte.
- `GET /reportes/:id`: Obtiene un reporte específico.

## Parámetros

### Generar Reporte
- `filtros`: Filtros para personalizar el reporte (object, requerido)
- `tipo`: Tipo de reporte a generar (string, requerido)

### Obtener Reporte
- `id`: ID del reporte a obtener (string, requerido)

## Respuesta

### Generar Reporte
- **201 Created**: Reporte generado con éxito.
- **400 Bad Request**: Datos de entrada no válidos.
- **500 Internal Server Error**: Error al generar el reporte.

### Obtener Reporte
- **200 OK**: Reporte obtenido con éxito.
- **404 Not Found**: Reporte no encontrado.

## Ejemplo de uso

### Generar Reporte
```bash
curl -X POST http://localhost:3000/reportes -H "Content-Type: application/json" -d '{
  "filtros": {
    "fecha_inicio": "2023-01-01",
    "fecha_fin": "2023-12-31",
    "usuario_id": "1"
  },
  "tipo": "informe_anual"
}'
```

### Obtener Reporte
```bash
curl -X GET http://localhost:3000/reportes/1
