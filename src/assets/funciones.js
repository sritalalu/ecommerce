export const consultarDB = async(ruta) =>{
    const promise = await fetch(ruta)
    const productos = await promise.json()
    return productos 
}
