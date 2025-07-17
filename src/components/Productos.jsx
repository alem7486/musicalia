import React, { useState, useContext } from 'react';
import './styleProductos.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Productos = ({ producto }) => {
  const { handleAddToCart } = useContext(CartContext);
  const [cantidad, setCantidad] = useState(producto.cantidad);

  const increase = () => {
    if (cantidad + producto.cantidad <= producto.stock) {
      setCantidad(prev => prev + 1);
    }
  };

  const decrease = () => {
    setCantidad(prev => (prev > 1 ? prev - 1 : prev));
  };

  return (
    <section className='card'>
      <div className='imganContainer'>
        <img src={producto.imagen} alt={producto.nombre} className='imagen' />
      </div>

      <h3 className='nombre'> {producto.nombre}</h3>
      <p className='precio'>${producto.precio}</p>
      <p className='stock'>Disponibles: {producto.stock}</p>

      <div className='cantidadContainer'>
        <button className='qtyButton' onClick={decrease}>−</button>
        <span>{cantidad}</span>
        <button className='qtyButton' onClick={increase}>+</button>
      </div>

      <button
        className='btnAdd'
        style={{ display: cantidad === 0 ? 'none' : 'block' }}
        onClick={() => handleAddToCart({ ...producto, cantidad })}
      >
        🎼 Agregar al carrito
      </button>

      <Link className='verMas' to={`/productos/${producto.id}`}>Ver más detalles</Link>
    </section>
  );
};

export default Productos;
