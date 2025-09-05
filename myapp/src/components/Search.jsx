import { useState } from "react";
import { categoryList } from "../data/data";
import ProductList from "./ProductList";

function Search() {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [searchText, setSeachText] = useState("");
    const [totalCount, setTotalCount] = useState(0);

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    }

    const handleTextChange = (e) => {
        setSeachText(e.target.value);
    }

    const updateTotal = (msg) => {
        setTotalCount(msg);
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

        <ProductList selectedCategory={selectedCategory} searchText={searchText} onNotify={(e)=>updateTotal(e)} />

        <div className="alert alert-warning">
            Total Products Found: {totalCount}
        </div>
    </>);
}


export default Search;