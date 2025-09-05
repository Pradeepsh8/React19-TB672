import { createReducer } from "@reduxjs/toolkit"
import { productList } from "../data/data";
import { ProductAction } from "../actions/ProductAction";


const initalState = {
    productList: productList,
    filteredProducts: [],
    searchText: "",
    totalCount: 0,
    selectedCategory: ""
}


export const productReducer = createReducer(initalState, (builder)=>{
    builder.addCase(ProductAction.filterAction, (state, action)=>{
        const {searchText, selectedCategory, productList} = state;

        let filtered = selectedCategory
                    ? productList.filter(f => f.categoryId === Number(selectedCategory))
                    : productList;
        
                filtered = searchText
                    ? filtered.filter(f => f.productName.toLocaleLowerCase().indexOf(searchText.toLocaleLowerCase()) !== -1)
                    : filtered;

        state.filteredProducts = filtered;
        
    })
    .addCase(ProductAction.setSearchAction, (state, action)=>{
        state.searchText = action.payload;
    })
    .addCase(ProductAction.setSelectedCategory, (state, action)=>{
        state.selectedCategory = action.payload;

    })
    .addCase(ProductAction.reset, (state, action)=>{
        state.searchText = "",
        state.selectedCategory ="",
        state.filteredProducts = state.productList;
    })
    .addCase(ProductAction.setTotalCount, (state,action)=>{
        const {filteredProducts} = state;
        state.totalCount = filteredProducts.length;
    })
})

