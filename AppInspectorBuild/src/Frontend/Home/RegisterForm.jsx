import React, { useState } from 'react';
import './RegisterForm.css'; // Archivo CSS para estilos específicos del formulario

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    razon_social: '',
    nit: '',
    direccion: '',
    nombre: '',
    apellido: '',
    telefono: '',
    email: '',
    username: '',
    password: ''
  });
  const [successMessage, setSuccessMessage] = useState(''); // Estado para manejar mensajes de éxito
  const [errorMessage, setErrorMessage] = useState(''); // Estado para manejar mensajes de error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:5174/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then(response => {
        if (response.ok) {
            setSuccessMessage('Los datos se han registrado con éxito...!!!'); // Mensaje de éxito
            setFormData({ // Limpiar el formulario después del registro
                razon_social: '',
                nit: '',
                direccion: '',
                nombre: '',
                apellido: '',
                telefono: '',
                email: '',
                username: '',
                password: ''
            });
        } else {
            setErrorMessage('Error al registrar los datos. Inténtalo de nuevo.'); // Mensaje de error
        }
    })
    .catch((error) => {
        console.error('Error:', error);
        setErrorMessage('Error en la conexión. Inténtalo de nuevo más tarde.'); // Mensaje de error
    });
  };

  return (
    <div className="register-form-container">
      <h2 className="form-title">Registro de Contratista</h2>
      {successMessage && <p className="success-message">{successMessage}</p>} {/* Mostrar mensaje de éxito */}
      {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Mostrar mensaje de error */}
      <form className="register-form" onSubmit={handleSubmit}>
        <h3>Información de la Razón Social</h3>
        <label htmlFor="razon_social">Razón Social:</label>
        <input type="text" id="razon_social" name="razon_social" required onChange={handleChange} />
        
        <label htmlFor="nit">NIT:</label>
        <input type="text" id="nit" name="nit" required onChange={handleChange} />
        
        <label htmlFor="direccion">Dirección:</label>
        <input type="text" id="direccion" name="direccion" required onChange={handleChange} />
        
        <h3>Datos del Representante Legal</h3>
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" required onChange={handleChange} />
        
        <label htmlFor="apellido">Apellido:</label>
        <input type="text" id="apellido" name="apellido" required onChange={handleChange} />
        
        <label htmlFor="telefono">Teléfono:</label>
        <input type="tel" id="telefono" name="telefono" required onChange={handleChange} />
        
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required onChange={handleChange} />
        
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" required onChange={handleChange} />
        
        <label htmlFor="password">Contraseña:</label>
        <input type="password" id="password" name="password" required onChange={handleChange} />
        
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default RegisterForm;
