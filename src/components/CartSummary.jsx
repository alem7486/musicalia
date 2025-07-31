import { useContext } from 'react';
import { AdminContext } from '../context/AdminContext';
import '../styles/CartSummary.css';

const CartSummary = () => {
  const { carrito, eliminarDelCarrito } = useContext(AdminContext);

  const calcularTotal = () => {
    return carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
  };

  return (
    <div className="cart-panel">
      <h2>🛒 Carrito de compras musical</h2>
      {carrito.length === 0 ? (
        <p>No hay productos en el carrito 🎺</p>
      ) : (
        <ul className="cart-list">
          {carrito.map((item) => (
            <li key={item.id} className="cart-card">
              <h3>{item.nombre}</h3>
              <p>💲 {item.precio} ARS</p>
              <p>🎵 Cantidad: {item.cantidad}</p>
              <button onClick={() => eliminarDelCarrito(item.id)}>
                Quitar del carrito 🗑️
              </button>
            </li>
          ))}
        </ul>
      )}
      <h3 className="cart-total">🎧 Total: ${calcularTotal()} ARS</h3>
    </div>
  );
};

export default CartSummary;
