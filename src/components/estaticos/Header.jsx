import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import CartDrawer from '../CartDrawer';
import './styleEstatico.css';
import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {
  const [isCartOpen, setCartOpen] = useState(false);

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
          <div className="logo">
            <NavLink className="logo-text" to="/">MUSICALIA</NavLink>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="link" to="/">Inicio</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="link" to="/acercade">Quiénes somos</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="link" to="/productos">Cursos</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="link" to="/contacto">Contactanos</NavLink>
                </li>
                <li className="nav-item">
                  <button
                    className="btnCart link"
                    onClick={() => setCartOpen(true)}
                    style={{ background: 'none', border: 'none' }}
                  >
                    <FaShoppingCart color='red' />
                  </button>
                </li>
                <li className="nav-item">
                  <NavLink className="link" to="/login">
                    <i className="fa-solid fa-right-to-bracket"></i>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="link" to="/admin">
                    <i className="fa-solid fa-user-tie"></i>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    
      {isCartOpen && (
        <CartDrawer
          isCartOpen={isCartOpen}
          toggleCart={() => setCartOpen(false)}
        />
      )}
    </>
  );
};

export default Header;
