import Item from "../Item/Item";

const ItemList = ({productsList}) => {
    return (
        <>
            {productsList.map(producto => <Item key={producto.id} product = {producto}/>)}
        </>
    );
}

export default ItemList;

// este componente recibe como parametros el array de objetos y mediante el .map retorna cada uno de los productos
// con el metodo map hago una transformacion de elemento, en este caso digo quiero que a producto me lo transformes en una card

//generacion del .map de cada uno de nuestros productos o retorno y envío el id del producto como propiedad