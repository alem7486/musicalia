import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './styleCart.css'; 

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <div className="cart-container">
      <h2>🛒 Tu carrito musical</h2>

      {Array.isArray(cartItems) && cartItems.length > 0 ? (
        <ul className="cart-list">
          {cartItems.map(item => (
            <li key={item.id} className="cart-item">
              <strong>{item.nombre}</strong> - {item.precio} ARS
              <span className="cantidad-resaltada">🎶 Cantidad: {item.quantity}</span>
              <p>Total por curso: ${item.precio * item.quantity}</p>
              <button onClick={() => removeFromCart(item.id)} className="btn-eliminar">
                ❌ Eliminar
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Tu carrito está vacío 🎵 ¡Agregá algo que suene bien!</p>
      )}
    </div>
  );
};

export default Cart;
