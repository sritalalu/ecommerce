import React from "react";
import { Link } from 'react-router-dom';

const Dropdown = () => {
    return (
        
        <>
            <button className="navbar-toggler btn_responsive" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <Link className="nav-link" to="/">Inicio</Link>
                <Link className="nav-link" to="/productos">Tienda</Link>
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <div className="dropdown">
                            <button className="btn dropdown-toggle btn_drop" type="button" data-bs-toggle="dropdown" >
                                Productos
                            </button>
                        
                    <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" to="/category/sillones">Sillones</Link></li>
                        <li><hr className="linea_div" /></li>
                        <li><Link className="dropdown-item" to="/category/sofas">Sofás</Link></li>
                        <li><hr className="linea_div" /></li>
                        <li><Link className="dropdown-item" to="/category/decoracion">Deco</Link></li>
                    </ul>
                    </div>
                    </li>
                    {/*<div className="dropdown">
                        <button className="btn dropdown-toggle btn_drop" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Blog
                        </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Tips y Estilos</a></li>
                        <li><hr className="linea_div" /></li>
                        <li><a className="dropdown-item" href="#">Nosotros</a></li>
                    </ul>
                    </div>*/}

                    <li className="nav-item">
                        <a className="nav-link" href="#">Contacto</a>
                    </li>
                    </ul>
                </div>
            
        </> 
    );
};

export default Dropdown;
