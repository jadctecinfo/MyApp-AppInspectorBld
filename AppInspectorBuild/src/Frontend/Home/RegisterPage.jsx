import React from 'react';
import RegisterForm from './RegisterForm';
import './RegisterPage.css'; // Archivo CSS para estilos específicos de la página de registro
import imagenCentral from '/src/assets/Images/ImagenCentral.png'; // Importar la imagen

const RegisterPage = () => {
  return (
    <div className="register-page-container">
      <h1 className="register-page-title">Bienvenido a la Página de Registro</h1>
      <div className="register-page-content">
        <img src={imagenCentral} alt="Imagen Corporativa" className="register-page-image" />
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
