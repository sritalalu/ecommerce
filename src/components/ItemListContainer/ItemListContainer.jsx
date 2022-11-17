import {useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList.jsx'
import { consultarDB } from '../../assets/funciones';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

        const [productos, setProductos] = useState([]);
        const {category} = useParams()
        useEffect(() =>{
            if(category){
                consultarDB('../json/productos.json').then(products =>{
                    const productsList = products.filter(prod => prod.idCategoria === category)
                    const cardProductos = ItemList({productsList})
                    setProductos(cardProductos)
                })
            }else{
                consultarDB('./json/productos.json').then(productsList =>{
                    const cardProductos = ItemList({productsList})
                    setProductos(cardProductos)
                })
            }
        },[category]);

    return (
        <div className='row'>
            {productos}
        </div>
    );
}

export default ItemListContainer;

//es el componente home en el cual consulto mi base de datos
