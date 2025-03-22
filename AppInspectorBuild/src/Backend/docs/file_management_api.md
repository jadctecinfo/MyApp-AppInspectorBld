# API de Gestión de Archivos

## Descripción
Esta API permite manejar la carga, descarga y eliminación de archivos en la aplicación.

## Método HTTP
- POST para cargar un nuevo archivo.
- GET para descargar un archivo.
- DELETE para eliminar un archivo.

## Rutas
- `POST /archivos`: Carga un nuevo archivo.
- `GET /archivos/:id`: Descarga un archivo específico.
- `DELETE /archivos/:id`: Elimina un archivo específico.

## Parámetros

### Cargar Archivo
- `archivo`: Archivo a cargar (file, requerido)
- `descripcion`: Descripción del archivo (string, opcional)

### Descargar Archivo
- `id`: ID del archivo a descargar (string, requerido)

### Eliminar Archivo
- `id`: ID del archivo a eliminar (string, requerido)

## Respuesta

### Cargar Archivo
- **201 Created**: Archivo cargado con éxito.
- **400 Bad Request**: Datos de entrada no válidos.
- **500 Internal Server Error**: Error al cargar el archivo.

### Descargar Archivo
- **200 OK**: Archivo descargado con éxito.
- **404 Not Found**: Archivo no encontrado.

### Eliminar Archivo
- **204 No Content**: Archivo eliminado con éxito.
- **404 Not Found**: Archivo no encontrado.

## Ejemplo de uso

### Cargar Archivo
```bash
curl -X POST http://localhost:3000/archivos -F 'archivo=@/path/to/file.pdf' -F 'descripcion=Informe de prueba'
```

### Descargar Archivo
```bash
curl -X GET http://localhost:3000/archivos/1
```

### Eliminar Archivo
```bash
curl -X DELETE http://localhost:3000/archivos/1
