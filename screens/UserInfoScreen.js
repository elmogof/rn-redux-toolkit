import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setUser, editUser, editNameImplicit, editNameExplicit, deleteUser } from '../redux/slices/userSlice'
import UserInfoList from '../components/UserInfoList'
import { userData } from '../data/userData'
import PokemonList from '../components/PokemonList'

const UserInfoScreen = () => {
    const user = useSelector((state) => state.user)
    const dispatch = useDispatch()

    return (
        <View style={styles.container}>
            <UserInfoList/>
            <TouchableOpacity
                style={styles.button}
                onPress={() => dispatch(setUser(userData))}
            >
                <Text style={{ textAlign: 'center' }}>Cargar datos</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => dispatch(deleteUser())}
            >
                <Text style={{ textAlign: 'center' }}>Eliminar datos</Text>
            </TouchableOpacity>

            <PokemonList/>
        </View>
    )
}

export default UserInfoScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: 'beige',
        borderRadius: 10,
        margin: 10,
        padding: 10,
        width: 150,
    },
})