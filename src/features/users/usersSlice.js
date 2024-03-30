import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {id:'0', name: 'Mike Rusert'},
    {id:'1', name: 'My Dude'},
    {id:'2', name: 'Your Mom'}
]

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers:{

    }
})

export const selectAllUsers = (state) => state.users 

export default userSlice.reducer 