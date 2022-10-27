//import React from 'react'; ESTA PRIMERA LINEA NO ES NECESARIA SI QUIERO PUEDO BORRARLA
import './app.css';
import Navbar from './Navbar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';

const App = () => {
  return (
    <>
      <Navbar/>
      <ItemListContainer/>

    </>
      
  );
}

export default App; 

//ACA VA POR DEFAULT PORQUE ES UN SOLO ARCHIVO QUE EXPORTO SI FUERAN MAS EXPORTO LAS CLASES O COLOCO *

//EN JSX NO SE TRABAJA CON CLASS, FUNCIONA PERO NO CORRESPONDE, SE USA EL className PORQUE ES LA SINTAXIS DE JSX


