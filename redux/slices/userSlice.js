import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    uuid: "",
    name: "",
    lastName: "",
    username: "",
    password: "",
}

export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setUser: (state, action) => {
            //Retornar de manera implícita
            state.uuid = action.payload.uuid,
                state.name = action.payload.name,
                state.lastName = action.payload.lastName,
                state.username = action.payload.username,
                state.password = action.payload.password
        },
        editUser: (state, action) => {
            //Retornar de manera explícita
            return {
                ...state,
                uuid: action.payload.uuid,
                name: action.payload.name,
                lastName: action.payload.lastName,
                username: action.payload.username,
                password: action.payload.password
            }
        },
        editNameImplicit: (state, action) => {
            //Retornar de manera implícita
            state.name = action.payload.name
        },
        editNameExplicit: (state, action) => {
            //Retornar de manera explícita
            return {
                ...state,
                name: action.payload.name
            }
        },
        deleteUser: (state) => {
            state.uuid = "",
                state.name = "",
                state.lastName = "",
                state.username = "",
                state.password = ""
        }
    }
})

export const { setUser, editUser, editNameImplicit, editNameExplicit, deleteUser } = userSlice.actions

export default userSlice.reducer