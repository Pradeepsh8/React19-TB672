import { createReducer } from "@reduxjs/toolkit";
import { categoryList } from "../data/data";
import { CategoryAction } from "../actions/CategoryAction";


const initialState = {
    allCategories: []
}


export const categoryReducer = createReducer(initialState, builder => {
    builder.addCase(CategoryAction.getAllCategoryAction, (state, action)=>{
        state.allCategories = categoryList;
    })
})