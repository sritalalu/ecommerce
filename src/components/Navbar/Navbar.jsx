// la carpeta content va con minuscula porque es una carpeta general, tiene todo el contenido.
//la carpeta Navbar va en mayuscula porque los componenetes comienzan en mayuscula, por convencion los componentes van en mayuscula
//carpeta navbar.css  minuscula no es un componente
//carpeta Navbar.jsx van los componentes por eso en mayuscula

import Dropdown from '../Dropdown/Dropdown';
import FormBuscador from '../FormBuscador/FormBuscador';
import './navbar.css';
import ContactForm from './ContactForm/ContactForm';

const Navbar = () => {
    return (
        <nav id="barra" className="navbar navbar-expand-lg navbar-light bg-traslucent">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"> <img id='logo' src="./img/logo-nube.png" alt="" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
                </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                </li>
                <Dropdown/>
                <ContactForm/>
            </ul>
                    
                <FormBuscador/>

            </div>
                <ul className="navbar-nav me-auto">
                    <li className='nav-item'>
                    <a className="nav-link"  href="#"> <button id="cart"> <img src="./img/carrito.png" alt="" /></button></a>
                    </li>
                </ul>
            </div>
                    
        </nav>

        );
}

export default Navbar;
