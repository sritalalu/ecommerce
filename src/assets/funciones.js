import { cargarBDD, getProductos } from "./firebase"


export const consultarDB = async(ruta) =>{
    const promise = await fetch(ruta)
    const productos = await promise.json()
    return productos 
}

//cargarBDD()
