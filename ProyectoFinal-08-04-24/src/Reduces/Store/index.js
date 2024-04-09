import { configureStore } from "@reduxjs/toolkit";
import CarritoSlice2 from "../Slice/ReducesP";
import CarritoSlice from "../Slice/ReducesC";

const store = configureStore ({
 reducer: {
    ccarrito:CarritoSlice.reducer,
    carritop:CarritoSlice2.reducer,
   
},
}


);

export default store;