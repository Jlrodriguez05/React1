import React from 'react';
import "../Components/Layout/Styles.css";
import { useState } from "react";
import { Link } from 'react-router-dom';

const FormularioPago = ({ sumaP, variable, cantp }) => {

    
    const [tipoPago, setTipoPago] = useState('Ahorro');

    const handleTipoPago = (event) => {
      setTipoPago(event.target.value);
    };
    return (
<div>
<div className="formulario">

<div className="one">
       <form  style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>

           <label>Datos del Cliente</label>

           <label>Nombre</label>
           <input
           type="text" placeholder="Por favor ingrese nombre..."/>
           
           <label>Telefono</label>
           <input 
           type="number" placeholder="Escriba su numero Cel..."/>

           <label>Email</label>
           <input 
           type="email"
           placeholder="Escriba su email..."/>
           
       </form>
       </div>
       <div className="two">

<form style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
 
 <label>Datos de Entrega</label>
 
 <label>Recibe:</label>
 <input 
 type="text" placeholder="Nombre de quien recibe..."/>
 
 <label>Ciudad</label>
 <input 
 type="text" placeholder="Ciudad Destino"/>
 <label>Direccion</label>
 <input 
 type="text" placeholder="Direccion de entrega..."/>
 </form>
 </div>
 
 <div className="three">
<form style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
   
<label>Datos Bancarios</label>
<label>Tipo de Pago</label>
       <select value={tipoPago} onChange={handleTipoPago}>
         <option value="">Seleccione...</option>
         <option value="ahorro">Ahorro</option>
         <option value="credito">Crédito</option>
         <option value="efectivo">Efectivo</option>
       </select>
<label>Nombre del Titular</label>
<input 
type="text" placeholder="Nombre del titular..."/>
<label>Valor a pagar:</label>
<p>Total USD:<split>{sumaP}</split></p>




{tipoPago !== "efectivo" && (
    <>
<label>Numero de Cuenta</label>
<input 
type="text" placeholder=" Ingrese numero de cuenta"/>
<label>Fecha de Exp</label>
<input 
type="text" placeholder="dd/MM/YY..."/>
<label>CVC</label>
<input 
type="text" placeholder="XXX..."/>
</>
)}
</form>
</div>

<div className="four">

<form style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
 
 <label>Datos del productos</label>
 
 <label>Cantidad total de productos</label>
 <h2>{cantp}</h2>
 
 <label>Lista de productos</label>
 <ul style={{listStyleType:"none"}} >
                {variable.slice(1).map((producto2, index) => (
                    <li key={index}>{producto2} </li>
                ))}
            </ul>
            
            <Link to="/productos"> 
            <button style={{backgroundColor: '#00FF0080' }}><h2>PAGO PSE</h2></button>
            </Link>
 </form>
 </div>

</div>

        </div>

        
    );
};
export default FormularioPago;