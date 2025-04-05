import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import imagenCentral from '/src/assets/Images/ImagenCentral.png';
import logo from '/src/assets/Images/LogoAPP.png';
import './Home.css';
import LoginForm from './LoginForm'; // Importar el nuevo componente
import { Link } from 'react-router-dom'; // Importar Link para la navegación

const Home = () => {
  const { showLoginForm, handleLoginClick } = useContext(AuthContext);

  return (
    <div className="home-container">
      <header className="home-header">
        <img src={logo} alt="Logo" className="home-logo" />
        <h1 className="home-title">AppInspectorBuild</h1>
        <div className="ml-auto mr-[3cm] mb-2.5 cursor-pointer">
          <span className="login-text" onClick={handleLoginClick}>LOGIN</span>
        </div>
        {showLoginForm && <div style={{ marginTop: '10px' }}><LoginForm /></div>} {/* Mostrar el formulario aquí */}
      </header>
      <hr className="separator" />
      <main className="home-body">
        <img src={imagenCentral} alt="Imagen Central" className="central-image" />
        <div className="button-container">
          <Link to="/register">
            <button className="register-button">REGISTRARSE</button>
          </Link>
        </div>
        <p className="home-description">Gestión de contratos y actividades con terceros de empresas de obra civil.</p>
      </main>
      <hr className="footer-separator" />
      <footer className="mt-auto py-4">
        <p className="home-description">© 2023 AppInspectorBuild. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Home;
