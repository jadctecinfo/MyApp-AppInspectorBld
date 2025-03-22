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
    <div className="text-left bg-[#4f1f59] text-white font-poppins p-5 min-h-screen flex flex-col">
      <header className="flex items-center justify-between">
        <img src={logo} alt="Logo" className="home-logo" />
        <h1 className="home-title">AppInspectorBuild</h1>
        <div className="ml-auto mr-[3cm] mb-2.5 cursor-pointer">
          <span className="login-text" onClick={handleLoginClick}>LOGIN</span>
          
        </div>
        {showLoginForm && <div style={{ marginTop: '10px' }}><LoginForm /></div>} {/* Mostrar el formulario aquí */}
      </header>
      <hr className="separator" />
      <main className="flex flex-col items-center flex-grow">
        <img src={imagenCentral} alt="Imagen Central" className="central-image" />
        <div className="mt-4">
          <Link to="/register">
            <button className="bg-purple-700 text-white px-6 py-2 rounded hover:bg-purple-800 transition-colors">REGISTRARSE</button>
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
