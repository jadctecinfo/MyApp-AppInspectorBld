# API de Gestión de Roles

## Descripción
Esta API permite gestionar la información de los roles en la aplicación. Incluye funcionalidades para crear, actualizar, eliminar y obtener información sobre los roles.

## Método HTTP
- POST para crear un nuevo rol.
- GET para obtener información de un rol.
- PUT para actualizar la información de un rol.
- DELETE para eliminar un rol.

## Rutas
- `POST /roles`: Crea un nuevo rol.
- `GET /roles/:id`: Obtiene la información de un rol específico.
- `PUT /roles/:id`: Actualiza la información de un rol específico.
- `DELETE /roles/:id`: Elimina un rol específico.

## Parámetros

### Crear Rol
- `nombre`: Nombre del rol (string, requerido)
- `descripcion`: Descripción del rol (string, opcional)

### Actualizar Rol
- `id`: ID del rol a actualizar (string, requerido)
- `nombre`: Nombre del rol (string, opcional)
- `descripcion`: Descripción del rol (string, opcional)

## Respuesta

### Crear Rol
- **201 Created**: Rol creado con éxito.
- **400 Bad Request**: Datos de entrada no válidos.
- **500 Internal Server Error**: Error al crear el rol.

### Obtener Rol
- **200 OK**: Información del rol obtenida con éxito.
- **404 Not Found**: Rol no encontrado.

### Actualizar Rol
- **200 OK**: Rol actualizado con éxito.
- **404 Not Found**: Rol no encontrado.
- **500 Internal Server Error**: Error al actualizar el rol.

### Eliminar Rol
- **204 No Content**: Rol eliminado con éxito.
- **404 Not Found**: Rol no encontrado.

## Ejemplo de uso

### Crear Rol
```bash
curl -X POST http://localhost:3000/roles -H "Content-Type: application/json" -d '{
  "nombre": "Administrador",
  "descripcion": "Rol con acceso completo a la aplicación"
}'
```

### Obtener Rol
```bash
curl -X GET http://localhost:3000/roles/1
```

### Actualizar Rol
```bash
curl -X PUT http://localhost:3000/roles/1 -H "Content-Type: application/json" -d '{
  "descripcion": "Rol con acceso limitado"
}'
```

### Eliminar Rol
```bash
curl -X DELETE http://localhost:3000/roles/1
