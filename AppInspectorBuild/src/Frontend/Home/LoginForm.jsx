import { useState } from 'react';
import './LoginForm.css'; // Asegúrate de tener este archivo CSS

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica para manejar el inicio de sesión
        console.log('Email:', email);
        console.log('Password:', password);
        // Implementar lógica de autenticación aquí
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="login-form-container">
            <h2 className="form-title">Iniciar Sesión</h2>
            <form onSubmit={handleSubmit} className="login-form">
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Contraseña:</label>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="form-input"
                    />
                    <button type="button" onClick={toggleShowPassword} className="toggle-password">
                        {showPassword ? 'Hide' : 'Show'}
                    </button>
                </div>
                <button type="submit" className="submit-button">Login</button>
            </form>
            <div className="forgot-password">
                <a href="/forgot-password">¿Olvidaste tu contraseña?</a>
            </div>
        </div>
    );
};

export default LoginForm;
