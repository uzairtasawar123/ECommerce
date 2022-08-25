import {createSlice} from '@reduxjs/toolkit'

const history = []


const HistorySlice = createSlice({
    name:'history',
    initialState:history,
    reducers:{
        updateState:(state , {payload})=>{
            state = state.push(payload)
        },
        popState:(state , action)=>{
            state = state.pop()
        }
    }
})
export const {updateState , popState} = HistorySlice.actions
export default HistorySlice.reducer