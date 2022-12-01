import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
const Cart = () => {
    const {cart, emptyCart, totalPrice, removeItem} = useContext(CartContext)

    return (
        <>
            { cart.length === 0 ? 
            <div>
                <p>Tu carrito está vacío</p>
                <Link to={'/productos'}><button className='btn btn-dark'>Ir a la tienda</button></Link>
            </div>  
            :
            <div>
                {cart.map((prod, indice) => <div className="card mb-3" key={indice} style={{maxWidth: '540px'}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={prod.img} className="img-fluid rounded-start" alt="..." />
                    </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{prod.nombre}</h5>
                        <p className="card-text">Cantidad: { prod.cant }</p>
                        <p className="card-text">Precio unitario: ${ prod.precio }</p>
                        <p className="card-text">Subtotal: ${ prod.precio * prod.cant }</p>
                    </div>
                    <button className='btn btn-danger' onClick={() => removeItem(prod.id)}>Eliminar producto</button>
                </div>
                </div>
                </div>
                )}
            <div>
                <p>Total: ${totalPrice()}</p>
                <button className='btn btn-danger' onClick={emptyCart} >Limpiar carrito</button>
                <Link to='/checkout'>
                    <button className='btn btn-primary'>Finalizar compra</button>
                </Link>
            </div>
            </div> 
        }  
        </>
    );

    }
export default Cart;

//Nuestro carrito