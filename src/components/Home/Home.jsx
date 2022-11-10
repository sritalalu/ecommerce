import {useState} from 'react';

const Home = () => {
    const [productos, setProductos] = useState([]);
    const consultarDB = () =>{
        fetch('./json/productos.json')
        .then(promesa => promesa.json())
        .then(productos => {
            const cardProductos = productos.map(product => 
                <div className="card cardProducto">
                    <img src={`./img/${product.img}`} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{product.nombre}</h5>
                        <p className="card-text">Modelo: {product.modelo}</p>
                        <p className="card-text">Precio: {product.precio}</p>
                        <p className="card-text">Stock: {product.stock}</p>
                        
                    </div>
                </div>
                )
                console.log(cardProductos)
                setProductos(cardProductos)   
        })
    }

    consultarDB().then(productos => console.log(productos))
    return (
        <>
            {productos}
        </>
    );
}

export default Home;
