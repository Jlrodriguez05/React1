import { createSlice } from "@reduxjs/toolkit";
import("@reduxjs/toolkit");

const initialState = {
  suma : [0],
};

  
  //Una parte del store
  export const CarritoSlice2 = createSlice({
    
    name: "carritop",

     initialState,
    
    reducers: {
     
      Agregarprecio: (state, action) => {
          const precio =action.payload.price;
          state.suma.push(precio);
          },

          EliminarPrecio: (state, action) => {
            const preciou = action.payload.price;
            const index = state.suma.findIndex(precio => precio === preciou);
            if (index !== -1) {
              state.suma.splice(index, 1);
            }
      },
      EliminarTodop: (state) => {
        state.suma = [0];
      }
     
    }
  });
  export default CarritoSlice2;
 // export const { AgregarProducto, EliminarProducto } = CarritoSlice.actions;

  /*
  const CarritoReducer =CarritoSlice.reducer;
  export default CarritoReducer;*/