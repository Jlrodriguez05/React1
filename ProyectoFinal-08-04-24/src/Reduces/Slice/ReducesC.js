


import { createSlice } from "@reduxjs/toolkit";
import("@reduxjs/toolkit");

const initialState = {
  productosCarrito: [0],
  
};
const initialState2 = {
  suma : [],
};
  
  //Una parte del store
  export const CarritoSlice = createSlice({
    
    name: "carrito",

     initialState,
    
    reducers: {
     
      AgregarProducto:(state,action)=>{
        const producto =action.payload.title;
        state.productosCarrito.push(producto);
      },
      
      EliminarProducto: (state, action) => {
        const productou = action.payload.title;
        const index = state.productosCarrito.findIndex(producto => producto === productou);
        if (index !== -1) {
          state.productosCarrito.splice(index, 1);
        }
        
      },
      EliminarTodo: (state) => {
        state.productosCarrito = [0];
      }
     
      
      
      /*
      
      incrementar: (state) => {
        state.segundos += 1;
      },
      decrementar: (state) => {
        state.segundos -= 1;
      },
      reset: (state) => {
        state.segundos = 0;
      },*/
    }
  });
  
  //Una parte del store
  

  
  
  
  export default CarritoSlice;

 // export const { AgregarProducto, EliminarProducto } = CarritoSlice.actions;

  /*
  const CarritoReducer =CarritoSlice.reducer;
  export default CarritoReducer;*/