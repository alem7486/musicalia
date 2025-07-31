import React from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import { Link } from 'react-router-dom'
import escuelaImg from '../assets/escuela-musicalia.jpg' 
import escuelaImg2 from '../assets/escuela-musicalia2.jpg'
const Home = () => {
  return (
    <>
      <Header />

      <main className="inicio">
        <div className="descripcion">
          <h1>¡Musicalia es el lugar ideal para aprender música online!</h1>
          <p>Contamos con un gran equipo de profesores que te van a ayudar a desarrollar tu talento.</p>
        </div>

        <div className="imagenEscuela">
          <img src={escuelaImg} alt="Escuela Musicalia" />
           <img src={escuelaImg2} alt="" srcset="Escuela Musicalia 2" />
        </div>

        <div>
          <br /> <br />
          <Link to="/Productos" className="btnVerCursos">Ver todos los cursos</Link>
          </div>
      </main>

      <Footer />
    </>
  )
}

export default Home
