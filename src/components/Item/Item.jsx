import { Link } from "react-router-dom";

const Item = ({product}) => {
    return (
        <div className="card cardProducto"> 
                        <img src={`../img/${product.img}`} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{product.nombre}</h5>
                            <p className="card-text">Modelo: {product.modelo}</p>
                            <p className="card-text">Precio: ${product.precio}</p>
                            <p className="card-text">Stock: {product.stock}</p>
                            <button className='btn btn-dark'> <Link className='nav-link' to={`/product/${product.id}`}>Ver producto</Link></button>
                        </div>
        </div>
    );
}

export default Item;

//este componente (item) genera la card de bs, recibe un producto como parametro y genera toda la card