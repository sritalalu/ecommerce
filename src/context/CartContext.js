import { useState, createContext} from 'react';

const CartContext = createContext([])

const CartContextProvider = (props) =>{
    const [cart, setCart] = useState([]);

    const isInCart = (id) =>{
        return cart.find(prod => prod.id === id)
    }

    const addItem = (producto, cantidad) =>{
        if(isInCart(producto.id)){
            const indice = cart.findIndex(prod => prod.id === producto.id)
            const aux = [...cart]
            aux[indice].cant = cantidad;
            setCart(aux)

        }else{
            const nuevoProducto= {
                ...producto,
                cant: cantidad,
            }
            setCart([...cart, nuevoProducto])
        }
    }
        console.log(cart)
    
        const emptyCart = () =>{
        return setCart([]) //estoy seteando el carrito y le envío un array vacío lo que hace que se limpie el carrito
    }

    const removeItem = (id) =>{
        return setCart(cart.filter(prod => prod.id !== id)) //filtra todos los productos cuyo id sea distinto al id ingresado
    }

    const getItemQuantity = () =>{
        return cart.reduce((acum, prod)=> acum += prod.cant, 0)                 
    }                   

    const totalPrice = () =>{
        return cart.reduce((acum, prod) => acum += (prod.cant * prod.precio), 0)
    }

    return(
        <CartContext.Provider value={{cart, isInCart, addItem, emptyCart, removeItem, getItemQuantity, totalPrice}} >
            {props.children}
        </CartContext.Provider>

    )
        
}

export { CartContext, CartContextProvider}

//... operador express hace una copia del elemento