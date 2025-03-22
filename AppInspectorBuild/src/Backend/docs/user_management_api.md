# API de Gestión de Usuarios

## Descripción
Esta API permite gestionar la información de los usuarios en la aplicación. Incluye funcionalidades para crear, actualizar, eliminar y obtener información de los usuarios.

## Método HTTP
- POST para crear un nuevo usuario.
- GET para obtener información de un usuario.
- PUT para actualizar la información de un usuario.
- DELETE para eliminar un usuario.

## Rutas
- `POST /users`: Crea un nuevo usuario.
- `GET /users/:id`: Obtiene la información de un usuario específico.
- `PUT /users/:id`: Actualiza la información de un usuario específico.
- `DELETE /users/:id`: Elimina un usuario específico.

## Parámetros

### Crear Usuario
- `razon_social`: Razón social de la empresa (string, requerido)
- `nit`: Número de identificación tributaria (string, requerido)
- `direccion`: Dirección de la empresa (string, requerido)
- `nombre`: Nombre del representante legal (string, requerido)
- `apellido`: Apellido del representante legal (string, requerido)
- `telefono`: Teléfono de contacto (string, requerido)
- `email`: Correo electrónico (string, requerido)
- `username`: Nombre de usuario (string, requerido)
- `password`: Contraseña (string, requerido)

### Actualizar Usuario
- `id`: ID del usuario a actualizar (string, requerido)
- `razon_social`: Razón social de la empresa (string, opcional)
- `nit`: Número de identificación tributaria (string, opcional)
- `direccion`: Dirección de la empresa (string, opcional)
- `nombre`: Nombre del representante legal (string, opcional)
- `apellido`: Apellido del representante legal (string, opcional)
- `telefono`: Teléfono de contacto (string, opcional)
- `email`: Correo electrónico (string, opcional)
- `username`: Nombre de usuario (string, opcional)
- `password`: Contraseña (string, opcional)

## Respuesta

### Crear Usuario
- **201 Created**: Usuario creado con éxito.
- **400 Bad Request**: Datos de entrada no válidos.
- **500 Internal Server Error**: Error al crear el usuario.

### Obtener Usuario
- **200 OK**: Información del usuario obtenida con éxito.
- **404 Not Found**: Usuario no encontrado.

### Actualizar Usuario
- **200 OK**: Usuario actualizado con éxito.
- **404 Not Found**: Usuario no encontrado.
- **500 Internal Server Error**: Error al actualizar el usuario.

### Eliminar Usuario
- **204 No Content**: Usuario eliminado con éxito.
- **404 Not Found**: Usuario no encontrado.

## Ejemplo de uso

### Crear Usuario
```bash
curl -X POST http://localhost:3000/users -H "Content-Type: application/json" -d '{
  "razon_social": "Empresa S.A.S.",
  "nit": "123456789",
  "direccion": "Calle Falsa 123",
  "nombre": "Juan",
  "apellido": "Pérez",
  "telefono": "123456789",
  "email": "juan.perez@example.com",
  "username": "nuevo_usuario",
  "password": "contraseña123"
}'
```

### Obtener Usuario
```bash
curl -X GET http://localhost:3000/users/1
```

### Actualizar Usuario
```bash
curl -X PUT http://localhost:3000/users/1 -H "Content-Type: application/json" -d '{
  "telefono": "987654321"
}'
```

### Eliminar Usuario
```bash
curl -X DELETE http://localhost:3000/users/1
