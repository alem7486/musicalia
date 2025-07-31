import { useContext } from 'react';
import CartSummary from '../components/CartSummary';
import { AdminContext } from '../context/AdminContext';
import './CartSummary.css'; //
import CartSummary from '../components/CartSummary';

const AdminPanel = () => {
  const { productos, loading, carrito } = useContext(AdminContext);

  return (
    <div className="admin-panel">
      <h1>🎛️ Tus compras en Musicalia</h1>

      <section className="productos-section">
        <h2>📦 Productos disponibles</h2>
        {loading ? (
          <p>Cargando productos... 🎹</p>
        ) : (
          <ul>
            {productos.map((p) => (
              <li key={p.id}>
                {p.nombre} - ${p.precio} ARS
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="carrito-section">
        <CartSummary /> {/* Componente que ya armamos */}
      </section>
    </div>
  );
};

export default AdminPanel;
