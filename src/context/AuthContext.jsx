import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from './CartContext';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { setIsAuth } = useContext(CartContext);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuth') === 'true';
    if (isAuthenticated) {
      setIsAuth(true);
      navigate('/productos');
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let validationErrors = {};

    if (!email) {
      validationErrors.email = 'Email es requerido';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = 'Formato de email no válido';
    }

    if (!password) {
      validationErrors.password = 'Password es requerido';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Simulación de login
    if (email === 'admin@musicalia.com' && password === '1234') {
      localStorage.setItem('isAuth', 'true');
      setIsAuth(true);
      navigate('/admin');
    } else {
      setErrors({ password: 'Credenciales incorrectas' });
    }

    
    console.log('Email enviado:', email);
    console.log('Password enviada:', password);
  };

  return (
    <AuthContext.Provider
      value={{
        email,
        setEmail,
        password,
        setPassword,
        handleSubmit,
        errors,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
