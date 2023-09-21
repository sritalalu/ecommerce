import { Link } from "react-router-dom";

const Item = ({product}) => {
    return (
        <div className="card mb-3 cardProducto"> 
                        <img src={product.img} className="" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{product.nombre}</h5>
                            <p className="card-text">Modelo: {product.modelo}</p>
                            <p className="card-text">Precio: ${new Intl.NumberFormat('de-DE').format(product.precio)}</p>
                            <div className="container_boton">
                                <button className='btn ver_producto'> <Link className='nav_ver' to={`/product/${product.id}`}>Ver producto</Link></button>
                            </div>
                            
                        </div>
        </div>
    );
}

export default Item;

//este componente (item) genera la card de bs, recibe un producto como parametro y genera toda la card