import React from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import { Link } from 'react-router-dom'
import escuelaImg from '../assets/escuela-musicalia.jpg' // asegurate de tener esta imagen en tu carpeta de assets

const Home = () => {
  return (
    <>
      <Header />

      <main className="inicio">
        <div className="descripcion">
          <h1>Musicalia es el lugar ideal para aprender música online </h1>
          <Link to="/Productos" className="btnVerCursos">Ver todos los cursos</Link>
        </div>

        <div className="imagenEscuela">
          <img src={escuelaImg} alt="Escuela Musicalia" />
        </div>
      </main>

      <Footer />
    </>
  )
}

export default Home
