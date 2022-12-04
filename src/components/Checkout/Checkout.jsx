
import React, {useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { createOrdenCompra, getProducto, updateProducto } from '../../assets/firebase';
import { CartContext } from '../../context/CartContext';
import {toast } from 'react-toastify';
import { useState } from 'react';

const Checkout = () => {

        //VALIDAR EMAIL
        const [email, setEmail] = useState(" ");
        const [confirmarEmail, setConfirmarEmail] = useState(" ");

        const datosForm = React.useRef() //hago la referencia porque no quiero consultar el form vacío sino cuando el usuario haga click en finalizar compra
        let navigate = useNavigate()
        const {cart, emptyCart, totalPrice} = useContext(CartContext);

        const consultarFormulario = (e) =>{
            e.preventDefault()
            const dataForm = new FormData(datosForm.current) //con dataForm sólo traigo los datos no el form completo
            const valores = Object.fromEntries(dataForm)
            const aux = [...cart]
            aux.forEach(producto =>{
                getProducto(producto.id)
                .then(prod => {
                    prod.stock -= producto.cantidad
                    updateProducto(producto.id, prod)
                })
            })


            createOrdenCompra(valores, totalPrice(), new Date().toISOString().slice(0, 10)).then(orden =>{
                toast.success(`Su orden ${orden.id} fue creada con éxito`)
                emptyCart()
                e.target.reset()
                navigate("/")

            }).catch(error =>{
                toast.error(`Su orden no pudo ser creada`)
                console.error(error)
            }) 
        }
    return (
        <div className="container">
            <form onSubmit={consultarFormulario} ref={datosForm}>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input type="text" className="form-control" name="nombre"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="apellido" className="form-label">Apellido</label>
                    <input type="text" className="form-control" name="apellido"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" 
                        onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="confirmar-email" className="form-label">Confirmar Email</label>
                    <input type="email" className="form-control" name="confirmar-email" 
                        onChange={(e) => setConfirmarEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="dni" className="form-label">DNI</label>
                    <input type="number" className="form-control" name="dni" />
                </div>
                <div className="mb-3">
                    <label htmlFor="direccion" className="form-label">Dirección</label>
                    <input type="text" className="form-control" name="direccion" />
                </div>
                {  email === confirmarEmail ?
                    <button type="submit" className="btn ver_carro">Finalizar</button>
                    :
                    <div>
                        <button type="submit" className="btn ver_carro" disabled>Finalizar</button>
                    </div>  
                }
                
            </form>
        </div>
    );
}

export default Checkout;
//Cuando hago agregar producto se nos abre este form