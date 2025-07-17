import React, { useContext } from 'react'
import Productos from './Productos'
import { CartContext } from '../context/CartContext'
const ProductList = ({ agregarCarrito }) => {

    const {productos} = useContext(CartContext) 

    return (
        <>
            <h2>Cursos</h2>
            <div style={{display:'flex', flexWrap:'wrap', justifyContent:'space-evenly'}}>
                {
                    productos.map(producto => (
                        <Productos key={producto.id} producto={producto}/>
                    ))
                }
            </div>


        </>
    )
}

export default ProductList
