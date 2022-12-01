import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {

    const {getItemQuantity} = useContext(CartContext)

    return (
        <>
            <Link to="/Cart" >
                <p> {getItemQuantity()} </p>
                <button className='logo_cart'> <img src="../img/logo-cart.png" alt=""/></button>
            </Link>
        </>
    );
}

export default CartWidget;
