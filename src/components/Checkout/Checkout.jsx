
import React from "react";

const Checkout = () => {
        const datosForm = React.useRef() //hago la referencia porque no quiero consultar el form vacío sino cuando el usuario haga click en finalizar compra
        const consultarFormulario = (e) =>{
            e.preventDefault()
            console.log(datosForm)
            const dataForm = new FormData(datosForm.current) //con dataForm sólo traigo los datos no el form completo
            const valores = Object.fromEntries(dataForm)
            console.log(valores)
            e.target.reset()
        }
    return (
        <div className="container">
            <form onSubmit={consultarFormulario} ref={datosForm}>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre y Apellido</label>
                    <input type="text" className="form-control" name="nombre"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="dni" className="form-label">DNI</label>
                    <input type="number" className="form-control" name="dni" />
                </div>
                <div className="mb-3">
                    <label htmlFor="telefono" className="form-label">Teléfono</label>
                    <input type="number" className="form-control" name="telefono" />
                </div>
                <div className="mb-3">
                    <label htmlFor="direccion" className="form-label">Dirección</label>
                    <input type="text" className="form-control" name="direccion" />
                </div>
                <button type="submit" className="btn btn-primary">Finalizar compra</button>
            </form>
        </div>
    );
}

export default Checkout;
//Cuando hago agregar producto se nos abre este form