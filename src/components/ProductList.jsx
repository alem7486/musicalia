import React, { useContext, useState } from 'react';
import Productos from './Productos';
import { CartContext } from '../context/CartContext';
import './styleProductos.css'; // Asegurate de tener estilos para .pagination y .active

const ProductList = () => {
  const { productos } = useContext(CartContext);


  const ProductList = ({ productos }) => (
  <div className="carousel-container">
    {productos.map(producto => (
      <Productos key={producto.id} producto={producto} />
    ))}
  </div>
);

  // Estados de paginación
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  //Cálculo de productos actuales
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = productos.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(productos.length / productsPerPage);

  return (
    <div>
      <h2 className="tituloGrid">Nuestros cursos musicales 🎵</h2>

      <div className="cardsContainer">
        {currentProducts.map(producto => (
          <Productos key={producto.id} producto={producto} />
        ))}
      </div>

      {/* 🎼 Paginador visual */}
      <div className="pagination">
        <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
          🎶 Anterior
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            className={currentPage === i + 1 ? 'active' : ''}
          >
            {i + 1} 🎷
          </button>
        ))}

        <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>
          Siguiente 🎸
        </button>
      </div>
    </div>
  );
};

export default ProductList;