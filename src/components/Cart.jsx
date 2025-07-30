// Cart.jsx
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="cart-container">
      <h2>🛒 Tu carrito musical</h2>

      {Array.isArray(cart) && cart.length > 0 ? (
        <ul>
          {cart.map(item => (
            <li key={item.id}>
              <strong>{item.nombre}</strong> - {item.precio} ARS
              {item.cantidad && <span> 🎶 Cantidad: {item.cantidad}</span>}
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
