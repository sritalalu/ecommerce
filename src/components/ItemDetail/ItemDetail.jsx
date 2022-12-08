import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({producto}) => {

    const {cart, isInCart, addItem} = useContext(CartContext)

    const onAdd = (contador)=>{
        addItem(producto, contador)
    } 
    return (
                <div className="padre">
                    <div className="contenedor-imagen">
                        <img src={producto.img} className="img-fluid center" alt="imagen_prod"/>
                    </div>
                    <div className="card_fila">
                    <div className="card-body">
                        <h5 className='card-title'>{producto.nombre}</h5>
                        <p className='card-text'>Modelo: {producto.modelo}</p> 
                        <p className='card-text'>Precio: ${producto.precio}</p>
                        <p className='card-text'>Stock: {producto.stock}</p>
                        <ItemCount stock = {producto.stock} onAdd = {onAdd}/>    
                    </div>    
                    </div>
                </div>
    
        )
};

export default ItemDetail;
//Este es nuestro detalle producto