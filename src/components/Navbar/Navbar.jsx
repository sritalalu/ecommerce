// la carpeta content va con minuscula porque es una carpeta general, tiene todo el contenido.
//la carpeta Navbar va en mayuscula porque los componenetes comienzan en mayuscula, por convencion los componentes van en mayuscula
//carpeta navbar.css  minuscula no es un componente
//carpeta Navbar.jsx van los componentes por eso en mayuscula

import Dropdown from '../Dropdown/Dropdown';
import './navbar.css';

const Navbar = () => {
    return (
        <nav className="nav-edit navbar-expand-lg">
            <div className="invert">
                <img className='logo_nube' src="./img/logo-nube.png" alt="" />    
                <div className="container-fluid">
                    
                    <Dropdown/>
                </div>           
            </div>
            <button className='logo_cart'> <img src="./img/logo-cart.png" alt=""/></button>
        </nav>

        );
}

export default Navbar;
