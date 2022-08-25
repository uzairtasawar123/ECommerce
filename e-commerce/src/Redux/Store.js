import {configureStore} from '@reduxjs/toolkit'
import productReducer from './Reducer/ProductSlice'
import orderReducer from '../Redux/Reducer/OrderSlice'
import userReducer from '../Redux/Reducer/UserSlice'
import historyReducer from '../Redux/Reducer/HistorySlice'
const Store  = configureStore({
    reducer:{
        product:productReducer,
        order:orderReducer,
        user:userReducer,
        history:historyReducer
    }
})

export default Store;