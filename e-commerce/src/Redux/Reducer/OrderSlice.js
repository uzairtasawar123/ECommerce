import { createSlice, current} from '@reduxjs/toolkit'


const orderState = [
  
]

const OrderSlice = createSlice({
    name: 'order',
    initialState:orderState,
    reducers:{
        addOrder:(state , {payload})=>{
        state = state.push(payload)
        },


        addQuantity:(state , {payload})=>{
          console.warn("ADDED" , payload)
          const addArr = state.map((item)=>{
            if(item._id === payload._id){
              return payload
            }
            else{
              return item
            }
          })
          return addArr;

        },

        minusQuantity:(state , {payload})=>{
          const minusArr = state.map((item)=>{
               if(item._id === payload._id){
                return payload
               }
               else{
                return item
               }
          })
          return minusArr;

        },
        
        deleteItem:(state , {payload})=>{
          const Items = state.filter((item)=>{
            if(item._id !== payload._id){
              return item
            }
           
          })
          return Items
        },
        emptyState:(state)=>{
          state = state.pop()

        }
       
    }
})

export const {addOrder , addQuantity, minusQuantity, deleteItem , updateState , emptyState} = OrderSlice.actions
export default OrderSlice.reducer;