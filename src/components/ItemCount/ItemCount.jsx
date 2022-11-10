import {useState} from 'react';

const ItemCount = () => {
    const [contador, setContador] = useState(1) 

    const modificarContador = (operacion) => {
        if(operacion === "+"){
                if(contador < 10)
                    setContador(contador + 1) //NUNCA TENGO QUE HACER CONTADOR ++ QUE ES LO MISMO QUE CONTADOR = CONTADOR +1  PORQUE NO SE USAN IGUALDADES PORQUE ES UNA CONSTANTE NUNCA DEBO IGUALAR
        } else{
            if(contador > 1)
                setContador(contador - 1)
        }
        
    }
    return (
        <>
            <button onClick={() => modificarContador("+")} className='boton btn-dark'>+</button>
                {contador}
            <button onClick={() => modificarContador("-")} className='boton btn-light'>-</button>
        </>
    );
}

export default ItemCount;
// si no quiero trabajar con un <div></div> lo que debo hacer es sacrlos y trabajar con los piquitos que se llaman
//FRAGMENTS