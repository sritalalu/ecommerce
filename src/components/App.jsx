//import React from 'react'; ESTA PRIMERA LINEA NO ES NECESARIA SI QUIERO PUEDO BORRARLA
import './app.css';
import Navbar from './Navbar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemCount from './ItemCount/ItemCount';

const App = () => {
  return (
    <>
      <Navbar/>
      <ItemListContainer/>
      <div className="portada">
        <h1>Sillones, sofás y más!!</h1>
        <h2>Únicos Diseños </h2>
      </div>
      <ItemCount/>
    </>
      
  );
}

export default App; 

//ACA VA POR DEFAULT PORQUE ES UN SOLO ARCHIVO QUE EXPORTO SI FUERAN MAS EXPORTO LAS CLASES O COLOCO *

//EN JSX NO SE TRABAJA CON CLASS, FUNCIONA PERO NO CORRESPONDE, SE USA EL className PORQUE ES LA SINTAXIS DE JSX


