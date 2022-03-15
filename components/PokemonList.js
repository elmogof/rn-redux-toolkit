import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { Touchable } from 'react-native-web'
import { useSelector, useDispatch } from 'react-redux'
import { setPokemonsAsync, deleteAPokemonById } from '../redux/slices/pokemonSlice'

const PokemonList = () => {

    const pokemon = useSelector((state) => state.pokemon)
    const dispatch = useDispatch()

    useEffect(() => {
        setPokemons()
    }, [])

    const setPokemons = () => {
        dispatch(setPokemonsAsync())
    }

    const deletePokemon = (name) => {
        dispatch(deleteAPokemonById(name))
    }

    return (
        <View>
            {!pokemon.pokemonsList ? <></> :
                (
                    pokemon.pokemonsList.map((pokemon) => {
                        return (
                            <View key={pokemon.name} style={styles.listContainer}>
                                <Text >
                                    - {pokemon.name}
                                </Text>
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={() => deletePokemon(pokemon.name)}                                >
                                    <Text>X</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    })
                )
            }

        </View>
    )
}

export default PokemonList

const styles = StyleSheet.create({
    listContainer: { display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
    button: { margin: 5, padding: 5 }
})