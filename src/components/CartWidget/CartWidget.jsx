import { Link } from "react-router-dom";

const CartWidget = () => {
    return (
        <>
            <Link to="/Cart" >
                <button className='logo_cart'> <img src="../img/logo-cart.png" alt=""/></button>
            </Link>
        </>
    );
}

export default CartWidget;
