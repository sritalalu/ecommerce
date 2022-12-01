import { createProducto, getProducto, updateProducto, deleteProducto, createOrdenCompra, getOrdenCompra } from "./firebase";
/*
const producto = {
    
    "id": 47,
    "idCategoria": "sofas",
    "nombre": "Sofá sublime",
    "modelo": "'La curva ideal'",
    "precio": 35000,
    "stock": 5,
    "img": "https://firebasestorage.googleapis.com/v0/b/nube-lila.appspot.com/o/sofanaranja.png?alt=media&token=8c566d5f-37e9-4484-962a-c2867d725ebf"
    
}

//"LaT9LmVv5JIqrOuQrGdV"
//createProducto(producto).then(mensaje => console.log(mensaje))
getProducto("LaT9LmVv5JIqrOuQrGdV").then(prod =>{
    prod.stock -= 3
    updateProducto("LaT9LmVv5JIqrOuQrGdV", prod).then(mensaje =>console.log(mensaje))
})

deleteProducto("LaT9LmVv5JIqrOuQrGdV").then(mensaje=>console.log(mensaje))*/

const cliente ={
    nombre: "Pedro",
    apellido: "Cruz",
    email: "pedro@cruz.com",
    dni: 25585141,
    direccion: "La paz 251"
}

//creo orden de compra
//createOrdenCompra(cliente, 15000, Date.now()).then(orden => console.log(orden))

//CONSULTO ORDEN DE COMPRA
getOrdenCompra("3svidtXHsIH1bj5qgsUm").then(orden => console.log(orden))