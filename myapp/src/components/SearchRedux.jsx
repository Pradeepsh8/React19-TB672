import { use, useEffect, useLayoutEffect, useState } from "react";
import { ProductAction } from "../actions/ProductAction";
import ProductListRedux from "./ProductListRedux";
import { useSelector } from "react-redux";
import store from "../store";
import { CategoryAction } from "../actions/CategoryAction";

function SearchRedux() {
    const categoryList = useSelector((state) => state.categoryReducer.allCategories);
    const totalCount = useSelector((state) => state.productReducer.totalCount);

    useEffect(()=>{
        store.dispatch(CategoryAction.getAllCategoryAction());
    },[])

    const handleCategoryChange = (e) => {
        store.dispatch(ProductAction.setSelectedCategory(e.target.value));
    }

    const handleTextChange = (e) => {
        store.dispatch(ProductAction.setSearchAction(e.target.value));
    }

    const handleFilter = () => {
        store.dispatch(ProductAction.filterAction());
        store.dispatch(ProductAction.setTotalCount());
        console.log(store.getState());
    }

    return (<>

        <h4>Search</h4>
        <label>Filter:</label>
        <input type="text" className="form-control" placeholder="Enter Product Name"
            onChange={(e) => handleTextChange(e)} />

        <select className="form-select" onChange={(e) => handleCategoryChange(e)} >
            <option value="">--All Categories--</option>
            {categoryList.map((cat, indx) => (
                <option key={indx} value={cat.categoryId}>
                    {cat.categoryName}
                </option>
            ))}
        </select>

        <br/>

        <button onClick={(e)=>handleFilter()}>Search</button>

        <ProductListRedux />

        <div className="alert alert-warning">
            Total Products Found: {totalCount}
        </div>
    </>);
}


export default SearchRedux;