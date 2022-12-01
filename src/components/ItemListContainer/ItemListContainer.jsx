import {useState, useEffect, useContext} from 'react';
import ItemList from '../ItemList/ItemList.jsx';
import { getProductos } from '../../assets/firebase.js';
import { useParams } from 'react-router-dom';
import { DarkModeContext } from '../../context/darkMode.js';

const ItemListContainer = () => {

        const [productos, setProductos] = useState([]);
        const {category} = useParams()

        const {darkMode, toggleDarkMode} = useContext(DarkModeContext)
        useEffect(() =>{
            if(category){
                getProductos().then(products =>{
                    const productsList = products.filter(prod => prod.idCategoria === category)
                    const cardProductos = ItemList({productsList})
                    setProductos(cardProductos)
                })
            }else{
                getProductos().then(productsList =>{
                    const cardProductos = ItemList({productsList})
                    setProductos(cardProductos)
                })
            }
        },[category]);

        return (
            <div className= {darkMode ? 'row cardProductos darkMode' : 'row cardProductos'}>
                <button className= {darkMode ? 'btn btn-light' : 'btn btn-dark'} onClick= {() => toggleDarkMode()}>Cambiar color</button>
                {productos}
            </div>
    
        );
    }

    export default ItemListContainer;



//es el componente home en el cual consulto mi base de datos
