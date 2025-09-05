import { createAction } from "@reduxjs/toolkit";



export const ProductAction = {
    filterAction: createAction("product/FILTER"),
    setSearchAction: createAction("product/SEARCH"),
    setSelectedCategory: createAction("product/SELECTEDCATEGORY"),
    setTotalCount: createAction("product/SETTOTAl"),
    reset: createAction("product/RESET")
}

