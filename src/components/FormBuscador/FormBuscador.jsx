import React from 'react';

const FormBuscador = ({buscador}) => {
    return (
        <form className="d-flex">
            <button className="btn" type="submit"> <img src="./img/buscador.png" alt="" /></button>
            <input className="form-control me-1" type="search" placeholder={buscador} aria-label="Search" />   
        </form>
    );
}

export default FormBuscador;
