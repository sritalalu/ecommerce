import {useState, useEffect, useContext} from 'react';
import {useParams} from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getProducto } from '../../assets/firebase';


const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([]);
    const {id} = useParams()

    useEffect(() => {
        getProducto(id).then(prod => {
            setProducto(prod)
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
//aca esta nuestro producto el cual consulto a la base de datos y seteo