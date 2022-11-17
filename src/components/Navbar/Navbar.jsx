// la carpeta content va con minuscula porque es una carpeta general, tiene todo el contenido.
//la carpeta Navbar va en mayuscula porque los componenetes comienzan en mayuscula, por convencion los componentes van en mayuscula
//carpeta navbar.css  minuscula no es un componente
//carpeta Navbar.jsx van los componentes por eso en mayuscula
import { Link } from 'react-router-dom';
import './navbar.css';
import Dropdown from '../Dropdown/Dropdown';
import CartWidget from '../CartWidget/CartWidget';


const Navbar = () => {
    return (
        <nav className="nav-edit navbar-expand-lg">
            <div className="invert">
                <Link className='nav-link' to="/">
                    <button className='btn_nube'><img className='logo_nube' src="../img/logo-nube.png" alt=""/></button>
                </Link>      
                <div className="container-fluid">    
                    <Dropdown/>
                </div>          
            </div>
            <CartWidget/> 
        </nav>

        );
}

export default Navbar;
