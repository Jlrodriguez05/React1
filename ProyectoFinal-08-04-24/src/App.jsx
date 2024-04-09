import React, { useState } from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from 'react-redux';
import Productos from './Vistas/Productos'
import Layout from './Vistas/Layout'
import Home from './Vistas/Home';
import store from './Reduces/Store/index';
import FormularioPago from './Vistas/FormularioPago';


function App() {
  const [sumaP, setSumaP] = useState(0);
  const [variable, setVariable] = useState(0);
  const [cantp, setcantp] = useState(0);

  return (

    <>
      <Provider store={store}>

        <Router>
          <Routes>
            <Route path="/" element={<Layout />} >
              <Route path="home" element={<Home />} />
              <Route path="productos" element={<Productos SumaPCambio={setSumaP} PrdStoreCambio={setVariable} CantCambio={setcantp} />} />
              <Route path="pago" element={<FormularioPago sumaP={sumaP} variable={variable} cantp={cantp} />} />
            </Route>
          </Routes>
        </Router>

      </Provider>
    </>
  )
}

export default App

