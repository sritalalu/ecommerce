//import React from 'react'; ESTA PRIMERA LINEA NO ES NECESARIA SI QUIERO PUEDO BORRARLA
import './app.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
//Context
import { DarkModeProvider } from '../context/darkMode';
import { CartContextProvider } from '../context/CartContext';
//components
import Navbar from './Navbar/Navbar';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import Cart from './Cart/Cart';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import Inicio from './Inicio/Inicio';
import Banner from './Banner/Banner';
import Checkout from './Checkout/Checkout'

const App = () => {
  return (
    <>
      <DarkModeProvider>
        <BrowserRouter>
          <CartContextProvider>
          <Navbar/>
            <Routes>
              <Route path='/Banner' element={<Banner/>}/>
              <Route path='/' element={<Inicio/>}/>
              <Route path='/productos' element={<ItemListContainer/>}/>
              <Route path='/product/:id' element={<ItemDetailContainer/>}/>
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/category/:category' element={<ItemListContainer/>}/>
              <Route path='/checkout' element={<Checkout/>}/>
            </Routes>
          </CartContextProvider>
        </BrowserRouter>
      </DarkModeProvider>
    </>  
  );
}

export default App;

//ACA VA POR DEFAULT PORQUE ES UN SOLO ARCHIVO QUE EXPORTO SI FUERAN MAS EXPORTO LAS CLASES O COLOCO *

//EN JSX NO SE TRABAJA CON CLASS, FUNCIONA PERO NO CORRESPONDE, SE USA EL className PORQUE ES LA SINTAXIS DE JSX
// los dos : puntos en la ruta del producto se hace referencia que el id llega como parametro y puede ser algo cambiante id 1, 2 o 3, etc

