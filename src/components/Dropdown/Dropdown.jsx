import React from "react";

const Dropdown = () => {
    return (
        
        <>

            <button className="navbar-toggler btn_responsive" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
            <a className="nav-link" href="#">Inicio</a>
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <div className="dropdown">
                        <button className="btn dropdown-toggle btn_drop" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Productos
                        </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Sillones</a></li>
                        <li><hr className="linea_div" /></li>
                        <li><a className="dropdown-item" href="#">Sofás</a></li>
                        <li><hr className="linea_div" /></li>
                        <li><a className="dropdown-item" href="#">Deco</a></li>
                    </ul>
                    </div>
                    </li>
                    <div className="dropdown">
                        <button className="btn dropdown-toggle btn_drop" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Blog
                        </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Tips y Estilos</a></li>
                        <li><hr className="linea_div" /></li>
                        <li><a className="dropdown-item" href="#">Nosotros</a></li>
                    </ul>
                    </div>

                    <li className="nav-item">
                        <a className="nav-link" href="#">Contacto</a>
                    </li>
                    </ul>
                </div>
            
        </> 
    );
};

export default Dropdown;
