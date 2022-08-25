import {createSlice} from '@reduxjs/toolkit'

const user = []


const UserSlice = createSlice({
    name:'user',
    initialState:user,
    reducers:{
        addUser : (state , {payload})=>{
            state[0] = payload
        },
       logOutUSer : (state)=>{
           return state = []
       }
        
    }
})
export const {addUser , logOutUSer} = UserSlice.actions;
export default UserSlice.reducer;