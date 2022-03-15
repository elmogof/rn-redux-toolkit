import axios from "axios";

export const getPokemonsAsync = async () => {
    const pokemonsList = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=10&offset=200')
    return pokemonsList.data.results
}