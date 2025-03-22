# API de Autenticación

## Descripción
Esta API permite a los usuarios registrarse, iniciar sesión y cerrar sesión en la aplicación.

## Método HTTP
- POST para registro e inicio de sesión.
- DELETE para cerrar sesión.

## Rutas
- `POST /register`: Registra un nuevo usuario.
- `POST /login`: Inicia sesión de un usuario.
- `DELETE /logout`: Cierra la sesión del usuario.

## Parámetros

### Registro
- `razon_social`: Razón social de la empresa (string, requerido)
- `nit`: Número de identificación tributaria (string, requerido)
- `direccion`: Dirección de la empresa (string, requerido)
- `nombre`: Nombre del representante legal (string, requerido)
- `apellido`: Apellido del representante legal (string, requerido)
- `telefono`: Teléfono de contacto (string, requerido)
- `email`: Correo electrónico (string, requerido)
- `username`: Nombre de usuario (string, requerido)
- `password`: Contraseña (string, requerido)

### Inicio de Sesión
- `username`: Nombre de usuario (string, requerido)
- `password`: Contraseña (string, requerido)

## Respuesta

### Registro
- **201 Created**: Usuario registrado con éxito.
- **500 Internal Server Error**: Error al registrar el usuario.

### Inicio de Sesión
- **302 Found**: Redirige al panel de control.
- **401 Unauthorized**: Credenciales incorrectas.

## Ejemplo de uso

### Registro
```bash
curl -X POST http://localhost:3000/register -H "Content-Type: application/json" -d '{
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

### Inicio de Sesión
```bash
curl -X POST http://localhost:3000/login -H "Content-Type: application/json" -d '{
  "username": "nuevo_usuario",
  "password": "contraseña123"
}'
