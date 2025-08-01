import React, { useState, useContext } from 'react';
import { CartContext } from "../context/CartContext";
import './styleProductos.css';

const Productos = ({ producto }) => {
  const [cantidadSeleccionada, setCantidadSeleccionada] = useState(1);
  const { addToCart } = useContext(CartContext);

  const handleAgregar = () => {
    const cantidad = parseInt(cantidadSeleccionada);
    if (isNaN(cantidad) || cantidad < 1) return;

    addToCart({
      ...producto,
      quantity: cantidad
    });
  };

  return (
    <div className="producto-card">
      <img
        src={producto.imagen}
        alt={producto.nombre}
        className="imagen-curso"
        onError={(e) => {
          e.target.src = 'https://via.placeholder.com/300x200?text=Sin+imagen';
        }}
      />

      <h3>{producto.nombre}</h3>
      <p className="precio">${producto.precio}</p>

      <div className="cantidad-selector">
        <label>Cantidad: </label>
        <input
          type="number"
          min="1"
          value={cantidadSeleccionada}
          onChange={(e) => setCantidadSeleccionada(e.target.value)}
        />
      </div>

      <button className="btn-agregar" onClick={handleAgregar}>
        🎶 Agregar al carrito
      </button>
    </div>
  );
};

export default Productos;
