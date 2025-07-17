import React, { useContext } from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import ProductList from '../components/ProductList'
import loading from '../assets/loading.gif'
import { CartContext } from '../context/CartContext'

const Home = ({ agregarCarrito,  }) => {

  const {cargando} = useContext(CartContext) 

  return (
    <>
      <Header />
      <main>

        <p> Musicalia es más que una tienda de cursos online; es un espacio donde la música y el aprendizaje se encuentran para crear experiencias únicas.</p>
        {
          cargando ? <img src={loading} alt='loading' /> :

          <ProductList />
        }


      </main>



      <Footer />
    </>
  )
}

export default Home
