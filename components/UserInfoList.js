import { StyleSheet, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const UserInfoList = () => {
    const user = useSelector((state) => state.user)
    return (
        <>
            <Text>My redux app</Text>
            <Text>Uuid: {user.uuid}</Text>
            <Text>Name: {user.name}</Text>
            <Text>Last name: {user.lastName}</Text>
            <Text>Username: {user.username}</Text>
            <Text>Password: {user.password}</Text>
        </>
    )
}

export default UserInfoList

const styles = StyleSheet.create({})