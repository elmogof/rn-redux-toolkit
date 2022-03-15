import { createSlice } from "@reduxjs/toolkit";
import { getPokemonsAsync } from "../../data/getPokemonsAsync";

const initialState = {
    pokemonsList: []
}

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        setPokemons: (state, action) => {
            state.pokemonsList = action.payload.pokemonsList
        },
        deleteAPokemonById: (state, action) => {
            state.pokemonsList = state.pokemonsList.filter(
                pokemon => pokemon.name !== action.payload 
            )
        }
    }
})

export const setPokemonsAsync = (state) => (dispatch) => {
    setTimeout(async () => {
        const pokemonsList = await getPokemonsAsync()
        const planeObject = {
            pokemonsList: pokemonsList
        }
        dispatch(setPokemons(planeObject))
    }, 200)
}

export const { setPokemons, deleteAPokemonById } = pokemonSlice.actions
export default pokemonSlice.reducer