import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
const Cart = () => {
    const {cart, emptyCart, totalPrice, removeItem} = useContext(CartContext)

    return (
        <>
        <div className='contenedor-cart' >

            { cart.length === 0 ? 
            <div className='contenedor_vacio'>
                <p className='vacio'>Tu carrito está vacío!!!</p>
                <Link to={'/productos'}><button className='btn ver_tienda'>Ir a la tienda</button></Link>
            </div>  
            :
            <div>
                {cart.map((prod, indice) => <div className="card" key={indice} >
                <div className="padre">
                    <div className="contenedor-imagen">
                        <img src={prod.img} className="img-fluid rounded-start" alt="..." />
                    </div>
                <div className="">
                    <div className="card-body">
                        <h5 className="card-title">{prod.nombre}</h5>
                        <p className="card-text">Cantidad: { prod.cant }</p>
                        <p className="card-text">Precio unitario: ${ prod.precio }</p>
                        <p className="card-text">Subtotal: ${ prod.precio * prod.cant }</p>
                    </div>
                    <button className='btn btn_eliminar' onClick={() => removeItem(prod.id)}>Eliminar producto</button>
                </div>
                </div>
                </div>
                )}
            <div className='contenedor-final-cart'>
                <p className='price_total'>Total: ${totalPrice()}</p>
                <div className='botones-carrito'>
                    <button className='btn btn_limpiar' onClick={emptyCart} >Limpiar carrito</button>
                    <Link to='/checkout'>
                        <button className='btn ver_carro'>Finalizar compra</button>
                    </Link>
                </div>
            </div>
            </div> 
        }  
        </div>
        </>
    );

    }
export default Cart;

//Nuestro carrito