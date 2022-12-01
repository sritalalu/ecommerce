import {useState, createContext} from 'react';


const DarkModeContext = createContext() //Acá genero el contexto

    const DarkModeProvider = (props) =>{
        const [darkMode, setDarkMode] = useState(false);
        // creo la variable

    const toggleDarkMode = () => {
        setDarkMode(!darkMode) 
    }
    //Devuelve true o false dependiendo el valor del dark mode, esta función edita el valor de la funcion

    return(
        <DarkModeContext.Provider value = {{darkMode, toggleDarkMode}}>
            {props.children}
        </DarkModeContext.Provider>   

    )
}

export {DarkModeContext, DarkModeProvider}
















//Para crear el contexto, importo useState y createContext, primero creamos el contexto con const, 2° genero algo que provea todo el contexto (proveedor)