import { configureStore } from "@reduxjs/toolkit";
//Por convención el nombre del slice se debe terminar con la palabra Reducer y no Slice 
import userReducer from "./slices/userSlice";
import pokemonReducer from "./slices/pokemonSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        pokemon: pokemonReducer
    }
})