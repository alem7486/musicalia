import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';


const Cart = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-container">
      <h2>🛒 Tu carrito musical</h2>

      {cartItems.length === 0 ? (
        <p>Tu carrito está vacío 🎶</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              <strong>{item.nombre}</strong> - {item.precio} ARS
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
