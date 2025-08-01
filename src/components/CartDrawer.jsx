import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './styleCart.css';

const CartDrawer = ({ isCartOpen, toggleCart }) => {
  const { cartItems, removeFromCart, getTotal } = useContext(CartContext);

  return (
    <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`}>
      <div className="cart-header">
        <h2>🎵 Tu carrito musical</h2>
        <button className="close-button" onClick={toggleCart}>✖</button>
      </div>

      <div className="cart-content">
        {cartItems.length > 0 ? (
          cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <p><strong>{item.nombre}</strong> × {item.quantity}</p>
              <p>Total: ${item.precio * item.quantity}</p>
              <button
                onClick={() => removeFromCart(item.id)}
                className="btn-eliminar"
              >
                ❌ Eliminar
              </button>
            </div>
          ))
        ) : (
          <p>🎶 El carrito está vacío</p>
        )}
      </div>

      <div className="cart-footer">
        <p>Total: ${getTotal()}</p>
        <button className="btnCheckout">✅ Finalizar compra</button>
      </div>
    </div>
  );
};

export default CartDrawer;
