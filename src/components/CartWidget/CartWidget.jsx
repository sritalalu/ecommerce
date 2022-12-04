import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {

    const {getItemQuantity} = useContext(CartContext)

    return (
        <>
            <Link to="/Cart" >
                <button className="logo_cart"><img src="../img/logo-cart.png" alt=""/>{ getItemQuantity() >= 1 && <span className="cant_cart">{getItemQuantity()}</span>}</button>
            </Link>
        </>
    );
}

export default CartWidget;
