import { createSlice } from "@reduxjs/toolkit";
import { productList } from "../data/data";


const productSlice = createSlice({
    name: "productsSlice",
    initialState: {
        productList: productList,
        filteredProducts: [],
        searchText: "",
        totalCount: 0,
        selectedCategory: ""
    },
    reducers: {
        filterAction: (state, action) => {
            const { searchText, selectedCategory, productList } = state;

            let filtered = selectedCategory
                ? productList.filter(f => f.categoryId === Number(selectedCategory))
                : productList;

            filtered = searchText
                ? filtered.filter(f => f.productName.toLocaleLowerCase().indexOf(searchText.toLocaleLowerCase()) !== -1)
                : filtered;

            state.filteredProducts = filtered;
        },
        setSearchAction: (state, action) => {
            state.searchText = action.payload;
        }

    }
});

export const {filterAction,setSearchAction } = productSlice.actions;

export default productSlice.reducer;

