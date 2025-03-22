# API de Gestión de Roles y Permisos

## Descripción
Esta API permite gestionar los roles y permisos de los usuarios en la aplicación, facilitando un control más granular sobre las acciones que cada rol puede realizar.

## Método HTTP
- POST para crear un nuevo rol.
- GET para obtener información sobre roles y permisos.
- PUT para actualizar un rol o permiso.
- DELETE para eliminar un rol o permiso.

## Rutas
- `POST /roles`: Crea un nuevo rol.
- `GET /roles`: Obtiene todos los roles.
- `GET /roles/:id`: Obtiene un rol específico.
- `PUT /roles/:id`: Actualiza un rol específico.
- `DELETE /roles/:id`: Elimina un rol específico.

## Parámetros

### Crear Rol
- `nombre`: Nombre del rol (string, requerido)
- `descripcion`: Descripción del rol (string, opcional)
- `permisos`: Lista de permisos asociados al rol (array, opcional)

### Actualizar Rol
- `id`: ID del rol a actualizar (string, requerido)
- `nombre`: Nombre del rol (string, opcional)
- `descripcion`: Descripción del rol (string, opcional)
- `permisos`: Lista de permisos asociados al rol (array, opcional)

## Respuesta

### Crear Rol
- **201 Created**: Rol creado con éxito.
- **400 Bad Request**: Datos de entrada no válidos.
- **500 Internal Server Error**: Error al crear el rol.

### Obtener Roles
- **200 OK**: Lista de roles obtenida con éxito.

### Obtener Rol
- **200 OK**: Rol obtenido con éxito.
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
  "descripcion": "Rol con acceso completo",
  "permisos": ["crear_usuario", "eliminar_usuario"]
}'
```

### Obtener Roles
```bash
curl -X GET http://localhost:3000/roles
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
