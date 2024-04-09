//Productos.jsx
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import carritoSlice from "../Reduces/Slice/ReducesC";
import carritoSlice2 from "../Reduces/Slice/ReducesP";
import bcarrito from '../Components/Img/Carrito.png';


const { AgregarProducto, EliminarProducto, EliminarTodo } = carritoSlice.actions;
const { Agregarprecio, EliminarPrecio, EliminarTodop } = carritoSlice2.actions;



const Producto = ({ SumaPCambio, PrdStoreCambio, CantCambio }) => {
  const dispatch = useDispatch();
  const dispatch2 = useDispatch();
  const dispatch3 = useDispatch();
  const PrdStore = useSelector((state) => state.ccarrito.productosCarrito);
  const PrdStore2 = useSelector((state) => state.carritop.suma);
  const sumaPP = PrdStore2.reduce((total, PrdStore2) => total + PrdStore2, 0);
  const sumaP = sumaPP.toFixed(2);
  const CantPrd = (PrdStore.length - 1);
  const [Productos, setProductos] = useState([]);
  const [ventana, estadoVentana] = useState(false);


  useEffect(() => {
    SumaPCambio(sumaP);
  }, [sumaP, SumaPCambio]);

  useEffect(() => {
    PrdStoreCambio(PrdStore);
  }, [PrdStore, PrdStoreCambio]);
  useEffect(() => {
    CantCambio(CantPrd);
  }, [PrdStore, CantCambio]);

  const carritoEmergente = () => {
    estadoVentana(!ventana);
  };
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProductos(data);
      });
  }, []);

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column" }}>
      <Link to={{ pathname: "/pago" }}> <button style={{ backgroundColor: 'green', color: 'white', display: "flex", flexDirection: "row" }} onClick={carritoEmergente}>PAGAR</button></Link>
     
        <ul>
          {Productos.map((producto, index) => {
            return (

              <li style={{ display: "flex", flexDirection: "column" }} key={index.toString()}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}>
                  <img src={producto.image} alt={producto.title} style={{ width: "50%", height: "auto", padding: "2rem" }} />
                  <div>
                    <h1 style={{ color: "black" }}>{producto.title}</h1>
                    <h2>{producto.price}</h2>
                    <p>{producto.description}</p>



                    <button onClick={() => {
                      dispatch(AgregarProducto(producto));
                      dispatch2(Agregarprecio(producto));
                    }}>Agregar</button>
                    <button onClick={() => {
                      dispatch(EliminarProducto(producto)),
                        dispatch2(EliminarPrecio(producto))
                    }
                    }>eliminar</button>
                    <div>
                      <div style={{ width: '28%', position: 'relative', left: '34%', padding: '1rem' }}><button onClick={carritoEmergente}>


                        <img src={bcarrito} alt="Texto alternativo" style={{ width: '28%', marginTop: '10px', alignItems: 'center' }} />
                        carrito </button>
                      </div>
                      {ventana && (

                        <div style={{ position: 'absolute', alignContent: 'center', top: 'center', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)' }}>
                          <button style={{ backgroundColor: 'red', color: 'white', display: "flex", flexDirection: "row" }} onClick={carritoEmergente}>X</button>
                          <h2>Contenido del Carrito:</h2>
                          <ul style={{ listStyleType: "none" }}>
                            {PrdStore.slice(1).map((producto2, index) => (
                              <li key={index}>{producto2} </li>
                            ))}
                          </ul>
                          <h2>total: {sumaP} USD</h2>
                          <button onClick={() => {
                            dispatch(EliminarTodo(producto)),
                              dispatch2(EliminarTodop(producto))
                          }}>Vaciar</button>
                          <Link to={{ pathname: "/pago" }}> <button style={{ backgroundColor: 'green', color: 'white', display: "flex", flexDirection: "row" }} onClick={carritoEmergente}>PAGAR</button></Link>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Producto;