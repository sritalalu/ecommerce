// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, getDoc, doc, updateDoc, deleteDoc } from "firebase/firestore"


const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: "nube-lila.firebaseapp.com",
    projectId: "nube-lila",
    storageBucket: "nube-lila.appspot.com",
    messagingSenderId: "521609135852",
    appId: "1:521609135852:web:bf3951267f1b20fc0d47c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getFirestore()

//CRUD

//LEER PRODUCTO
const getProductos = async() =>{
    const productos = await getDocs(collection(database, "productos")) 
    const items = productos.docs.map(prod => {return {...prod.data(), id:prod.id}})
    return items
}

const getProducto = async(id) =>{
    const prod = await getDoc(doc(database, "productos", id)) 
    const item =  {...prod.data(), id:prod.id}
    return item
}


const cargarBDD = async () => {                  //CREO LA BASE
    const promise  = await fetch('./json/productos.json')
    const productos = await promise.json()
    productos.forEach(async (prod) => {
        await addDoc(collection(database, "productos"), {
            nombre: prod.nombre,
            modelo: prod.modelo,
            idCategoria: prod.idCategoria,
            stock: prod.stock,
            precio: prod.precio,
            img: prod.img
        })
    })
}

//CREAR PRODUCTO
const createProducto = async (objProducto) => {
    const estado = await addDoc(collection(database, "productos"), {
        nombre: objProducto.nombre,
        modelo: objProducto.modelo,
        idCategoria: objProducto.idCategoria,
        stock: objProducto.stock,
        precio: objProducto.precio,
        img: objProducto.img
    })

    return estado
}

//ACTUALIZAR PRODUCTO

const updateProducto = async (id, info) =>{    //id porque quiero actualizar un solo producto
    const estado = await  updateDoc(doc(database, "productos", id), info)
    return estado
}                                

//Eliminar producto
const deleteProducto = async (id) =>{
    const estado = await deleteDoc(doc(database, "productos", id))
    return estado
}

//CEAR Y LEER ORDENES DE COMPRA

const createOrdenCompra = async (cliente, precioTotal, fecha) => {
    const ordenCompra = await addDoc(collection(database, "ordenCompra"), {
        nombre: cliente.nombre,
        apellido: cliente.apellido,
        email: cliente.email,
        dni: cliente.dni ,
        direccion:  cliente.direccion,
        fecha: fecha,
        precioTotal: precioTotal
    })

    return ordenCompra
}

const getOrdenCompra = async (id) =>{
    const item = await getDoc(doc(database, "ordenCompra"), id)
    const ordenCompra = {...item.data(), id: item.id}
    return ordenCompra
}

export {cargarBDD, getProductos, getProducto, createProducto, updateProducto, deleteProducto, createOrdenCompra, getOrdenCompra}




