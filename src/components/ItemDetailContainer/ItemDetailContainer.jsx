import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { consultarDB } from '../../assets/funciones';


const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([]);
    const {id} = useParams()

    useEffect(() => {
        consultarDB('../json/productos.json').then(productos=> {
            const product = productos.find(productoArray => productoArray.id === parseInt(id))
            setProducto(product)
        })
            
    }, []);

    return (
        <div>
            <div className="card mb-3 container detailProduct">
                <ItemDetail producto={producto} />
            </div>
        </div>
    );
}

export default ItemDetailContainer;
// useEffect se utiliza para manejar el estado de mi componente por ende debo aplicar asincronismo
//useParams lo utilizo para consultar el parametro que ingresa por la ruta (id del producto)