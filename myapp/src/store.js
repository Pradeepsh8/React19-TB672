
import { categoryReducer } from "./reducers/categoryReducer";
import { productReducer } from "./reducers/productReducer";
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import productReducer1 from './slice/productSlice';
import { authReducer } from "./reducers/authReducer";

const rootreducers = combineReducers({
    productReducer,
    categoryReducer,
    authReducer
})

const store = configureStore({reducer: rootreducers});

export default store;