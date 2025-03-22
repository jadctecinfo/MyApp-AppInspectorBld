# API de Gestión de Informes

## Descripción
Esta API permite gestionar la información de los informes en la aplicación. Incluye funcionalidades para crear, actualizar, eliminar y obtener información sobre los informes.

## Método HTTP
- POST para crear un nuevo informe.
- GET para obtener información de un informe.
- PUT para actualizar la información de un informe.
- DELETE para eliminar un informe.

## Rutas
- `POST /informes`: Crea un nuevo informe.
- `GET /informes/:id`: Obtiene la información de un informe específico.
- `PUT /informes/:id`: Actualiza la información de un informe específico.
- `DELETE /informes/:id`: Elimina un informe específico.

## Parámetros

### Crear Informe
- `actividad_id`: ID de la actividad asociada (string, requerido)
- `usuario_id`: ID del usuario que crea el informe (string, requerido)
- `resumen`: Resumen del informe (string, requerido)
- `estado`: Estado del informe (string, requerido)
- `pago_salud`: Información sobre el pago de salud (boolean, requerido)
- `pago_pension`: Información sobre el pago de pensión (boolean, requerido)
- `pago_riesgos_profesionales`: Información sobre el pago de riesgos profesionales (boolean, requerido)
- `pdf_pago`: Archivo PDF asociado al informe (file, requerido)

### Actualizar Informe
- `id`: ID del informe a actualizar (string, requerido)
- `resumen`: Resumen del informe (string, opcional)
- `estado`: Estado del informe (string, opcional)
- `pago_salud`: Información sobre el pago de salud (boolean, opcional)
- `pago_pension`: Información sobre el pago de pensión (boolean, opcional)
- `pago_riesgos_profesionales`: Información sobre el pago de riesgos profesionales (boolean, opcional)
- `pdf_pago`: Archivo PDF asociado al informe (file, opcional)

## Respuesta

### Crear Informe
- **201 Created**: Informe creado con éxito.
- **400 Bad Request**: Datos de entrada no válidos.
- **500 Internal Server Error**: Error al crear el informe.

### Obtener Informe
- **200 OK**: Información del informe obtenida con éxito.
- **404 Not Found**: Informe no encontrado.

### Actualizar Informe
- **200 OK**: Informe actualizado con éxito.
- **404 Not Found**: Informe no encontrado.
- **500 Internal Server Error**: Error al actualizar el informe.

### Eliminar Informe
- **204 No Content**: Informe eliminado con éxito.
- **404 Not Found**: Informe no encontrado.

## Ejemplo de uso

### Crear Informe
```bash
curl -X POST http://localhost:3000/informes -H "Content-Type: application/json" -F 'actividad_id=1' -F 'usuario_id=1' -F 'resumen=Informe de prueba' -F 'estado=Pendiente' -F 'pago_salud=true' -F 'pago_pension=true' -F 'pago_riesgos_profesionales=true' -F 'pdf_pago=@/path/to/file.pdf'
```

### Obtener Informe
```bash
curl -X GET http://localhost:3000/informes/1
```

### Actualizar Informe
```bash
curl -X PUT http://localhost:3000/informes/1 -H "Content-Type: application/json" -d '{
  "estado": "Aprobado"
}'
```

### Eliminar Informe
```bash
curl -X DELETE http://localhost:3000/informes/1
