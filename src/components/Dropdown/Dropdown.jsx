import React from "react";

const Dropdown = () => {
    return (
        <>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Productos
                </a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Sillones</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Sofás</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Deco</a></li>
                </ul>
            </li>

            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Blog
                </a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Tips y Estilos</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Quienes somos</a></li>
                </ul>
            </li>
        </>
            

            
            
    );
};

export default Dropdown;
