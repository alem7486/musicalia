import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from './estaticos/Header';
import Footer from './estaticos/Footer';
import { CartContext } from '../context/CartContext';

const DetallesProducto = () => {
  const { productos } = useContext(CartContext);
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

useEffect(() => {
  const productoContext = productos?.find(p => p.id == id);
  if (productoContext) {
    setProducto(productoContext);
  } else {
    fetch(`https://684f521bf0c9c9848d2aae6c.mockapi.io/ecommerce/productos/${id}`)
      .then(res => res.json())
      .then(data => setProducto(data))
      .catch(err => console.error('Error al cargar desde MockAPI:', err));
  }
}, [id, productos]); 

  if (!producto) {
    return (
      <>
        <Header />
        <div style={{ padding: '2rem', textAlign: 'center' }}>
          <p>Cargando detalles del curso 🎶...</p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <section
        style={{
          maxWidth: '600px',
          margin: '32px auto',
          padding: '2rem',
          border: '1px solid #eee',
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
          background: '#fff',
        }}
      >
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#333' }}>
          {producto.nombre}
        </h1>
        {producto.imagen && (
          <img
            src={producto.imagen}
            alt={producto.nombre}
            style={{
              width: '100%',
              maxHeight: '300px',
              objectFit: 'cover',
              borderRadius: '8px',
              marginBottom: '1.5rem',
            }}
          />
        )}
        <p style={{ fontSize: '1.1rem', marginBottom: '1rem', color: '#555' }}>
          {producto.descripcion}
        </p>
        <p style={{ fontWeight: 'bold', fontSize: '1.3rem', color: '#007b55' }}>
          Precio: ${producto.precio}
        </p>
        <details style={{ marginBottom: '1.5rem' }}>
          <summary style={{ fontWeight: 'bold', color: '#333' }}>
            Detalles del producto
          </summary>
          <ul style={{ paddingLeft: '1.5rem', color: '#555' }}>
            <li>Marca: Acme</li>
            <li>Categoría: {producto.categoria || 'Sin categoría'}</li>
            <li>SKU: {producto.id * 1250}</li>
            <li>Fecha de lanzamiento: {new Date().toLocaleDateString('es-ES', {
              day: 'numeric',
              month: 'long',
              year: 'numeric'
            })}</li>
          </ul>
        </details>
        <p style={{ fontSize: '1rem', color: '#888', marginBottom: '1.5rem' }}>
          Stock: {producto.stock}
        </p>
        <Link
          to="/Productos"
          style={{
            display: 'inline-block',
            padding: '0.5rem 1.5rem',
            background: '#007bff',
            color: '#fff',
            borderRadius: '6px',
            textDecoration: 'none',
            fontWeight: 'bold',
            marginTop: '1rem',
          }}
        >
          Volver a cursos
        </Link>
      </section>
      <Footer />
    </>
  );
};

export default DetallesProducto;
